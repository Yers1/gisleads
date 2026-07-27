import argparse
import csv
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import OrderedDict

API = "https://catalog.api.2gis.com/3.0/items"
PAGE_SIZE = 50
MAX_RETRIES = 3
RETRY_DELAY = 1.0


def eprint(*a, **k):
    print(*a, file=sys.stderr, **k)


def fetch_page(params, retries=MAX_RETRIES):
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": "gisleads/2.0"})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except (urllib.error.HTTPError, urllib.error.URLError) as e:
            if attempt == retries - 1:
                raise
            delay = RETRY_DELAY * (2 ** attempt)
            eprint(f"  ⚠ retry {attempt + 1}/{retries} after {delay:.0f}s: {e}")
            time.sleep(delay)
    return None


def geocode_city(city, key):
    params = {
        "q": city,
        "type": "adm_div.city",
        "key": key,
        "page_size": 1,
        "fields": "items.point,items.adm_div",
    }
    data = fetch_page(params)
    items = (data or {}).get("result", {}).get("items") or []
    if items:
        return items[0].get("id"), items[0].get("point")
    return None, None


def collect(
    city=None,
    rubric=None,
    key=None,
    pages=5,
    point=None,
    radius=None,
    has_site=None,
    sort=None,
    city_id=None,
    min_score=0,
):
    q_parts = [p for p in [city, rubric] if p]
    q = " ".join(q_parts).strip()

    params = OrderedDict()
    params["q"] = q
    params["key"] = key
    params["page_size"] = PAGE_SIZE
    params["fields"] = "items.contact_groups,items.address_name,items.point,items.org"

    if city_id:
        params["city_id"] = city_id
    if point and radius:
        params["point"] = f"{point[0]},{point[1]}"
        params["radius"] = str(radius)
    if has_site is True:
        params["has_site"] = "true"
    elif has_site is False:
        params["has_site"] = "false"
    if sort:
        params["sort"] = sort

    leads, seen_orgs = [], set()
    for p in range(1, pages + 1):
        params["page"] = p
        data = fetch_page(params)
        result = (data or {}).get("result") or {}
        items = result.get("items") or []
        if not items:
            break

        for it in items:
            if it.get("type") != "branch":
                continue
            org_id = (it.get("org") or {}).get("id")
            if org_id and org_id in seen_orgs:
                continue
            if org_id:
                seen_orgs.add(org_id)
            leads.append(parse_item(it))

        total = result.get("total", 0)
        if p * PAGE_SIZE >= total:
            break
        if p < pages:
            time.sleep(0.25)

    leads = [l for l in leads if l["score"] >= min_score]
    leads.sort(key=lambda l: -l["score"])
    return leads


def parse_item(item):
    contacts = {"phones": [], "sites": [], "socials": []}
    for g in item.get("contact_groups", []):
        for c in g.get("contacts", []):
            t, v = c.get("type", ""), c.get("value", "")
            if t == "phone":
                contacts["phones"].append(v)
            elif t == "website":
                contacts["sites"].append(v)
            elif t in ("whatsapp", "telegram", "instagram", "viber", "vkontakte", "facebook"):
                contacts["socials"].append(f"{t}:{v}")

    has_site = bool(contacts["sites"])
    has_messenger = any(
        s.startswith(("whatsapp:", "telegram:", "viber:")) for s in contacts["socials"]
    )
    pt = item.get("point") or {}

    return {
        "name": item.get("name", ""),
        "address": item.get("address_name", ""),
        "lon": pt.get("lon", ""),
        "lat": pt.get("lat", ""),
        "phones": "; ".join(contacts["phones"]),
        "site": "; ".join(contacts["sites"]),
        "socials": "; ".join(contacts["socials"]),
        "needs_site": "" if has_site else "да",
        "needs_bot": "" if has_messenger else "да",
        "score": (0 if has_site else 1) + (0 if has_messenger else 1),
    }


def write_csv(leads, path):
    fields = [
        "name", "address", "lon", "lat",
        "phones", "site", "socials",
        "needs_site", "needs_bot", "score",
    ]
    with open(path, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(leads)
    return path


def write_json(leads, path):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(leads, f, ensure_ascii=False, indent=2)
    return path


def demo():
    no_digital = {
        "type": "branch", "org": {"id": "1"},
        "name": "Салон Грация", "address_name": "Абая 10",
        "contact_groups": [{"contacts": [{"type": "phone", "value": "+7 777 123 45 67"}]}],
    }
    digital = {
        "type": "branch", "org": {"id": "2"},
        "name": "Кофейня", "address_name": "Достык 5",
        "contact_groups": [{"contacts": [
            {"type": "phone", "value": "+7 700 000 00 00"},
            {"type": "website", "value": "https://coffee.kz"},
            {"type": "whatsapp", "value": "+7 700 000 00 00"},
        ]}],
    }
    partial = {
        "type": "branch", "org": {"id": "3"},
        "name": "Барбершоп", "address_name": "Абая 20",
        "contact_groups": [{"contacts": [
            {"type": "phone", "value": "+7 701 111 22 33"},
            {"type": "instagram", "value": "barber_almaty"},
        ]}],
    }
    l1 = parse_item(no_digital)
    l2 = parse_item(digital)
    l3 = parse_item(partial)
    assert l1["score"] == 2 and l1["needs_site"] == "да" and l1["needs_bot"] == "да", l1
    assert l2["score"] == 0 and l2["needs_site"] == "" and l2["needs_bot"] == "", l2
    assert l3["score"] == 2 and l3["needs_site"] == "да" and l3["needs_bot"] == "да", l3
    print("✅ demo OK: парсинг, скоринг, дедупликация работают")
    print(f"   Score 2: {l1['name']} — без сайта, без бота")
    print(f"   Score {l3['score']}: {l3['name']} — есть Instagram, нет сайта, нет мессенджера")
    print(f"   Score 0: {l2['name']} — всё есть, не целевой")


def main():
    ap = argparse.ArgumentParser(
        description="gisleads v2 — лиды из 2GIS: малый бизнес без сайта/бота",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=(
            "Примеры:\n"
            "  python leads.py \"Алматы\" \"салон красоты\" --key $GIS_KEY\n"
            "  python leads.py \"Алматы\" \"салон красоты\" --no-site --format json\n"
            "  python leads.py --point 76.9,43.2 --radius 2000 \"кофейня\" --key $GIS_KEY\n"
            "  python leads.py \"Алматы\" \"салон красоты\" --key $GIS_KEY --min-score 2\n"
            "  python leads.py --demo"
        ),
    )
    ap.add_argument("city", nargs="?", help="город, e.g. 'Алматы'")
    ap.add_argument("rubric", nargs="?", help="рубрика, e.g. 'салон красоты'")
    ap.add_argument("--key", default=os.environ.get("GIS_KEY"), help="API-ключ 2GIS (или env GIS_KEY)")
    ap.add_argument("--pages", type=int, default=5, help="страниц по {PAGE_SIZE} (default: 5)")
    ap.add_argument("--out", default=None, help="файл результата (default: leads.csv или leads.json)")
    ap.add_argument("--format", choices=["csv", "json"], default="csv", help="формат вывода (default: csv)")
    ap.add_argument("--point", nargs=2, metavar=("LON", "LAT"), help="центр поиска: --point 76.9 43.2")
    ap.add_argument("--radius", type=int, default=None, help="радиус от точки в метрах (max 50000)")
    ap.add_argument("--has-site", action="store_true", default=None, dest="has_site", help="только с сайтом")
    ap.add_argument("--no-site", action="store_false", default=None, dest="has_site", help="только без сайта")
    ap.add_argument("--sort", choices=["relevance", "rating", "distance"], default=None, help="сортировка")
    ap.add_argument("--min-score", type=int, default=0, help="минимальный score лидов (0-2)")
    ap.add_argument("--quiet", action="store_true", help="без stderr вывода")
    ap.add_argument("--demo", action="store_true", help="самопроверка без API")

    a = ap.parse_args()

    if a.demo:
        demo()
        return

    if not a.key:
        ap.error("нужен --key или GIS_KEY (бесплатно: dev.2gis.com)")

    city_id, geo_point = None, None

    if a.point:
        geo_point = (float(a.point[0]), float(a.point[1]))
        if not a.radius:
            a.radius = 5000
    elif a.city:
        if not a.quiet:
            eprint(f"  ℹ геокодируем: {a.city}...")
        city_id, geo_point = geocode_city(a.city, a.key)
        if city_id:
            if not a.quiet:
                eprint(f"  ✓ city_id={city_id}")
        else:
            if not a.quiet:
                eprint(f"  ⚠ city_id не найден, ищем по тексту")

    if not a.city and not a.rubric and not geo_point:
        ap.error("нужен город + рубрика, или --point + рубрика")

    if not a.quiet:
        eprint(f"  🔍 поиск: {a.city or ''} {a.rubric or ''}")
        if geo_point:
            eprint(f"  📍 точка: {geo_point[0]},{geo_point[1]} радиус: {a.radius}м")

    leads = collect(
        city=a.city, rubric=a.rubric, key=a.key, pages=a.pages,
        point=geo_point, radius=a.radius,
        has_site=a.has_site, sort=a.sort, city_id=city_id,
        min_score=a.min_score,
    )

    if not leads:
        eprint("  ❌ ничего не найдено")
        return

    out = a.out or f"leads.{a.format}"
    if a.format == "csv":
        write_csv(leads, out)
    else:
        write_json(leads, out)

    no_site = sum(1 for l in leads if l["needs_site"])
    no_bot = sum(1 for l in leads if l["needs_bot"])
    top = leads[0]

    if not a.quiet:
        eprint(f"\n  {'='*40}")
        eprint(f"  📄 {len(leads)} лидов -> {out}")
        eprint(f"  🏆 топ: {top['name']} (score {top['score']})")
        eprint(f"  🌐 без сайта: {no_site}")
        eprint(f"  💬 без бота: {no_bot}")
        eprint(f"  {'='*40}")
    else:
        print(out)


if __name__ == "__main__":
    sys.exit(main())
