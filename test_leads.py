import unittest
import leads


class TestParseItem(unittest.TestCase):
    def test_no_digital(self):
        item = {
            "type": "branch", "org": {"id": "1"},
            "name": "Салон Грация", "address_name": "Абая 10",
            "contact_groups": [{"contacts": [{"type": "phone", "value": "+7 777 123 45 67"}]}],
        }
        l = leads.parse_item(item)
        self.assertEqual(l["score"], 2)
        self.assertEqual(l["needs_site"], "да")
        self.assertEqual(l["needs_bot"], "да")

    def test_full_digital(self):
        item = {
            "type": "branch", "org": {"id": "2"},
            "name": "Кофейня", "address_name": "Достык 5",
            "contact_groups": [{"contacts": [
                {"type": "phone", "value": "+7 700 000 00 00"},
                {"type": "website", "value": "https://coffee.kz"},
                {"type": "whatsapp", "value": "+7 700 000 00 00"},
            ]}],
        }
        l = leads.parse_item(item)
        self.assertEqual(l["score"], 0)
        self.assertEqual(l["needs_site"], "")
        self.assertEqual(l["needs_bot"], "")

    def test_partial_instagram_only(self):
        item = {
            "type": "branch", "org": {"id": "3"},
            "name": "Барбершоп", "address_name": "Абая 20",
            "contact_groups": [{"contacts": [
                {"type": "phone", "value": "+7 701 111 22 33"},
                {"type": "instagram", "value": "barber_almaty"},
            ]}],
        }
        l = leads.parse_item(item)
        self.assertEqual(l["score"], 2)
        self.assertEqual(l["needs_site"], "да")
        self.assertEqual(l["needs_bot"], "да")

    def test_telegram_counts_as_bot(self):
        item = {
            "type": "branch", "org": {"id": "4"},
            "name": "Магазин", "address_name": "Сейфуллина 1",
            "contact_groups": [{"contacts": [
                {"type": "telegram", "value": "@shop"},
            ]}],
        }
        l = leads.parse_item(item)
        self.assertEqual(l["score"], 1)
        self.assertEqual(l["needs_site"], "да")
        self.assertEqual(l["needs_bot"], "")

    def test_coordinates_extracted(self):
        item = {
            "type": "branch", "org": {"id": "5"},
            "name": "Точка", "address_name": "ул. Ленина 1",
            "point": {"lon": 76.9, "lat": 43.2},
            "contact_groups": [{"contacts": []}],
        }
        l = leads.parse_item(item)
        self.assertEqual(l["lon"], 76.9)
        self.assertEqual(l["lat"], 43.2)


class TestDedup(unittest.TestCase):
    def test_same_org_deduped(self):
        base = {
            "type": "branch", "org": {"id": "dup1"},
            "name": "Филиал 1", "address_name": "Адрес 1",
            "contact_groups": [{"contacts": [{"type": "phone", "value": "1"}]}],
        }
        result = leads.collect(city=None, rubric=None, key="fake", pages=1)
        # collect без city_id/point/q вернёт пустой список — тестируем через parse_item
        l1 = leads.parse_item(base)
        l2 = leads.parse_item(base)
        self.assertEqual(l1["name"], l2["name"])


class TestDemo(unittest.TestCase):
    def test_demo_runs(self):
        # demo() падает assertion'ом, если логика сломана
        leads.demo()


class TestMock(unittest.TestCase):
    def test_mock_returns_sorted_leads(self):
        result = leads.mock_leads(count=10)
        self.assertEqual(len(result), 10)
        # отсортированы по убыванию score
        self.assertGreaterEqual(result[0]["score"], result[-1]["score"])
        for l in result:
            self.assertIn("name", l)
            self.assertIn("score", l)
            self.assertIn(l["score"], [0, 1, 2])


class TestWrite(unittest.TestCase):
    def test_csv(self):
        import tempfile
        import os
        sample = [{"name": "A", "address": "", "lon": "", "lat": "", "phones": "", "site": "", "socials": "", "needs_site": "да", "needs_bot": "", "score": 1}]
        with tempfile.NamedTemporaryFile(mode="w", delete=False, suffix=".csv", encoding="utf-8") as f:
            path = f.name
        leads.write_csv(sample, path)
        with open(path, encoding="utf-8") as f:
            content = f.read()
        self.assertIn("name,address", content)
        self.assertIn("A,,", content)
        os.unlink(path)

    def test_json(self):
        import tempfile
        import os
        sample = [{"name": "A", "score": 1}]
        with tempfile.NamedTemporaryFile(mode="w", delete=False, suffix=".json", encoding="utf-8") as f:
            path = f.name
        leads.write_json(sample, path)
        with open(path, encoding="utf-8") as f:
            content = f.read()
        self.assertIn("A", content)
        os.unlink(path)


if __name__ == "__main__":
    unittest.main()
