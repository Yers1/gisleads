# gisleads

CLI-утилита для поиска лидов в **2GIS**. Находит малый бизнес, у которого **нет сайта** или **нет мессенджеров** (WhatsApp / Telegram / Viber) — идеально для веб-студий, фрилансеров и SMM.

[→ Открыть лендинг](https://gisleads.vercel.app)

---

## Быстрый старт

Без ключа API — демо-режим:

```bash
curl -O https://raw.githubusercontent.com/Yers1/gisleads/main/leads.py
python leads.py --mock
```

Результат — `leads.csv` с реалистичными демо-лидами.

С ключом 2GIS ([dev.2gis.com](https://dev.2gis.com)):

```bash
python leads.py "Алматы" "салон красоты" --key ВАШ_КЛЮЧ
```

---

## Установка

Никаких зависимостей. Требуется **Python 3.8+**.

```bash
curl -O https://raw.githubusercontent.com/Yers1/gisleads/main/leads.py
python leads.py --demo
```

---

## Примеры

```bash
# Базовый поиск
python leads.py "Алматы" "салон красоты" --key $GIS_KEY

# Только без сайта, в JSON
python leads.py "Алматы" "салон красоты" --no-site --format json

# Поиск в радиусе 2 км от точки
python leads.py --point 76.9 43.2 --radius 2000 "кофейня" --key $GIS_KEY

# Только топовые лиды (score >= 2)
python leads.py "Алматы" "салон красоты" --key $GIS_KEY --min-score 2

# Самопроверка без API
python leads.py --demo

# Генерация демо-лидов без ключа
python leads.py --mock --format json
```

---

## Как работает скоринг

Каждому объекту присваивается **score 0–2**:

| score | Что значит | Почему это лид |
|-------|-----------|----------------|
| 2 | Нет сайта и нет мессенджера | Максимально горячий лид |
| 1 | Нет чего-то одного | Тёплый лид |
| 0 | Есть сайт и мессенджер | Не целевой |

---

## Все флаги

| Флаг | Описание | По умолчанию |
|------|----------|--------------|
| `city` | Город, например `Алматы` | — |
| `rubric` | Рубрика, например `салон красоты` | — |
| `--key` | API-ключ 2GIS или `GIS_KEY` в env | — |
| `--pages` | Страниц по 50 результатов | 5 |
| `--format` | `csv` или `json` | `csv` |
| `--out` | Путь к файлу | `leads.csv` / `leads.json` |
| `--point` | Центр поиска `lon lat` | — |
| `--radius` | Радиус от точки в метрах | 5000 |
| `--has-site` | Только со сайтом | — |
| `--no-site` | Только без сайта | — |
| `--sort` | `relevance`, `rating`, `distance` | `relevance` |
| `--min-score` | Минимальный score в выводе | 0 |
| `--quiet` | Только результат, без логов | — |
| `--demo` | Проверка без API | — |
| `--mock` | Сгенерировать демо-лиды без API | — |
| `--mock-count` | Количество mock-лидов | 20 |

---

## Тесты

```bash
python -m unittest test_leads.py
```

---

## Лицензия

MIT
