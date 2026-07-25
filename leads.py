# gisleads — лиды из 2GIS: малый бизнес без сайта / без WhatsApp-Telegram.
# Кому продавать: веб-студии и фрилансеры, которые делают сайты/ботов локальному бизнесу.
# Запуск:  python leads.py "Алматы" "салон красоты" --key ВАШ_КЛЮЧ --pages 5
# Ключ бесплатно: https://dev.2gis.com  (или переменная окружения GIS_KEY)
# ponytail: только stdlib, без pandas/requests — ставить нечего.
import argparse
import csv
import json
import os
import sys
import time
import urllib.parse
import urllib.request

API = "https://catalog.api.2gis.com/3.0/items"
PAGE_SIZE = 10


def fetch_page(q, key, page):
    params = {
        "q": q,
        "key": key,
        "page": page,
        "page_size": PAGE_SIZE,
        "fields": "items.contact_groups,items.address_name",
    }
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": "gisleads/0.1"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.load(r)


def split_contacts(item):
    out = {"phones": [], "sites": [], "socials": []}
    for g in item.get("contact_groups", []):
        for c in g.get("contacts", []):
            t, v = c.get("type", ""), c.get("value", "")
            if t == "phone":
                out["phones"].append(v)
            elif t == "website":
                out["sites"].append(v)
            elif t in ("whatsapp", "telegram", "instagram"):
                out["socials"].append(t + ":" + v)
    return out


def to_lead(item):
    c = split_contacts(item)
    needs_site = not c["sites"]
    needs_bot = not any(s.startswith(("whatsapp:", "telegram:")) for s in c["socials"])
    return {
        "name": item.get("name", ""),
        "address": item.get("address_name", ""),
        "phones": "; ".join(c["phones"]),
        "site": "; ".join(c["sites"]),
        "socials": "; ".join(c["socials"]),
        "needs_site": "да" if needs_site else "",
        "needs_bot": "да" if needs_bot else "",
        "score": int(needs_site) + int(needs_bot),
    }


def collect(city, rubric, key, pages):
    leads, seen = [], set()
    q = city + " " + rubric  # ponytail: q "город + рубрика" работает без city_id; точнее — геокодер, если понадобится
    for p in range(1, pages + 1):
        data = fetch_page(q, key, p)
        result = data.get("result") or {}
        items = result.get("items") or []
        if not items:
            break
        for it in items:
            if it.get("type") == "branch" and it.get("id") not in seen:
                seen.add(it.get("id"))
                leads.append(to_lead(it))
        total = result.get("total", 0)
        if p * PAGE_SIZE >= total:
            break
        time.sleep(0.3)  # вежливость к API
    leads.sort(key=lambda l: -l["score"])
    return leads


def demo():
    """Самопроверка парсинга без API: python leads.py --demo"""
    no_digital = {
        "type": "branch", "name": "Салон Грация", "address_name": "Абая 10",
        "contact_groups": [{"contacts": [{"type": "phone", "value": "+7 777 123 45 67"}]}],
    }
    digital = {
        "type": "branch", "name": "Кофейня", "address_name": "Достык 5",
        "contact_groups": [{"contacts": [
            {"type": "phone", "value": "+7 700 000 00 00"},
            {"type": "website", "value": "https://coffee.kz"},
            {"type": "whatsapp", "value": "+7 700 000 00 00"},
        ]}],
    }
    l1, l2 = to_lead(no_digital), to_lead(digital)
    assert l1["needs_site"] == "да" and l1["needs_bot"] == "да" and l1["score"] == 2, l1
    assert l2["score"] == 0 and l2["needs_site"] == "" and l2["needs_bot"] == "", l2
    assert l1["phones"] == "+7 777 123 45 67", l1
    print("demo OK: парсинг контактов и скоринг лидов работают")


def main():
    ap = argparse.ArgumentParser(description="Лиды из 2GIS: малый бизнес без сайта/бота")
    ap.add_argument("city", nargs="?", help="город, например 'Алматы'")
    ap.add_argument("rubric", nargs="?", help="рубрика, например 'салон красоты'")
    ap.add_argument("--key", default=os.environ.get("GIS_KEY"), help="API-ключ 2GIS (или env GIS_KEY)")
    ap.add_argument("--pages", type=int, default=5, help="страниц по 10 шт (default: 5)")
    ap.add_argument("--out", default="leads.csv")
    ap.add_argument("--demo", action="store_true", help="самопроверка без API")
    a = ap.parse_args()

    if a.demo:
        demo()
        return
    if not a.city or not a.rubric:
        ap.error("нужны city и rubric (или --demo)")
    if not a.key:
        ap.error("нужен --key или GIS_KEY (бесплатно: dev.2gis.com)")

    leads = collect(a.city, a.rubric, a.key, a.pages)
    fields = ["name", "address", "phones", "site", "socials", "needs_site", "needs_bot", "score"]
    with open(a.out, "w", newline="", encoding="utf-8-sig") as f:  # utf-8-sig: Excel не ломает кириллицу
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(leads)
    no_site = sum(1 for l in leads if l["needs_site"])
    print(f"{len(leads)} лидов -> {a.out} | без сайта: {no_site} | топ: {leads[0]['name'] if leads else '—'}")


if __name__ == "__main__":
    sys.exit(main())
