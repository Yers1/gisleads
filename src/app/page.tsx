"use client"

import Link from "next/link"
import { useState } from "react"
import { Reveal } from "@/components/reveal"

const sections = [
  { id: "problem", label: "Проблема" },
  { id: "how", label: "Как работает" },
  { id: "quickstart", label: "Быстрый старт" },
  { id: "faq", label: "FAQ" },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2.5 font-semibold text-xl" aria-label="gisleads home">
            <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10" />
              <path d="M3 10c0-2.5 1.5-4.5 3.5-5.5" />
              <circle cx="12" cy="10" r="3" />
              <path d="M12 7v3l2 2" />
            </svg>
            <span>gisleads</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {sections.map((s) => (
              <Link key={s.id} href={`#${s.id}`} className="hover:text-foreground transition-colors">
                {s.label}
              </Link>
            ))}
            <a
              href="https://github.com/Yers1/gisleads"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
          <Link href="#quickstart" className="btn-primary text-sm">
            Начать
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </header>

      <main id="main-content">
        <section className="section relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="hero-glow top-[-200px] right-[-200px]" aria-hidden="true" />
          <div className="hero-glow bottom-[-200px] left-[-200px]" aria-hidden="true" />
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="badge bg-accent/10 text-accent border-accent/20">Python 3.8+</span>
                  <span className="badge bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Zero dependencies</span>
                  <span className="badge bg-purple-500/10 text-purple-500 border-purple-500/20">Бесплатно</span>
                </div>
                <h1 id="hero-heading" className="mb-6">
                  Лиды из 2GIS для
                  <br />
                  <span className="gradient-text">веб-студий</span>
                </h1>
                <p className="text-lg sm:text-xl mb-8 max-w-xl text-muted-foreground">
                  Находите малый бизнес без сайта и без WhatsApp/Telegram в один CLI-запрос.
                  Готовый CSV с приоритетами. Продавайте сайты и ботов тем, кому это реально нужно.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#quickstart" className="btn-primary text-lg px-8 py-4">
                    Начать бесплатно
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a href="https://github.com/Yers1/gisleads" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-glow" />
                    <span>Скрипт работает — <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">python leads.py --demo</code></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg className="h-4 w-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span>Звёзды помогают проекту расти</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="card relative overflow-hidden bg-card border-border animate-float">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground ml-2">leads.py — terminal</span>
                  </div>
                  <pre className="overflow-x-auto text-sm font-mono text-foreground leading-relaxed"><code>{`<span class="text-muted-foreground">$</span> python leads.py <span class="text-accent">"Алматы"</span> <span class="text-emerald-400">"салон красоты"</span> --key $GIS_KEY

<span class="text-muted-foreground">🔍 Поиск:</span> Алматы салон красоты
<span class="text-muted-foreground">📄 Страница 1/5:</span> 10 филиалов
<span class="text-muted-foreground">📄 Страница 2/5:</span> 10 филиалов
<span class="text-muted-foreground">📄 Страница 3/5:</span> 8 филиалов
<span class="text-emerald-400">✅ 28 лидов -> leads.csv</span>

<span class="text-muted-foreground">┌──────────────────────┬──────────┬──────────┬───────┐</span>
<span class="text-muted-foreground">│ Название            </span>│ needs_   │ needs_   │ Score │
<span class="text-muted-foreground">│                     </span>│ site     │ bot      │       │
<span class="text-muted-foreground">├──────────────────────┼──────────┼──────────┼───────┤</span>
│ Салон Грация        │ <span class="text-rose-400">да</span>      │ <span class="text-rose-400">да</span>      │ <span class="text-rose-400">2</span>     │
│ Кофейня             │          │          │ 0     │
│ Студия Загар        │ <span class="text-rose-400">да</span>      │          │ 1     │
│ Барбершоп Classic   │          │ <span class="text-rose-400">да</span>      │ 1     │
<span class="text-muted-foreground">└──────────────────────┴──────────┴──────────┴───────┘</span>

<span class="text-warning">⚡</span> Топ-лид: <span class="text-amber-400">Салон Грация</span> (score 2)
<span class="text-warning">⚡</span> Без сайта: 19 / 28
<span class="text-warning">⚡</span> Без бота: 15 / 28`}</code></pre>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-y border-border bg-muted/30" aria-label="Key metrics">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-accent">10</p>
                <p className="text-sm text-muted-foreground mt-1">результатов на страницу</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-accent">0</p>
                <p className="text-sm text-muted-foreground mt-1">сторонних зависимостей</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-accent">2</p>
                <p className="text-sm text-muted-foreground mt-1">метки приоритета</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-accent">CSV</p>
                <p className="text-sm text-muted-foreground mt-1">готов к Excel</p>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="section" aria-labelledby="problem-heading">
          <div className="container">
            <Reveal>
              <header className="text-center max-w-3xl mx-auto mb-16">
                <span className="badge bg-rose-500/10 text-rose-500 border-rose-500/20 mb-4">Проблема</span>
                <h2 id="problem-heading">Где брать клиентов, которым действительно нужен сайт?</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Вы тратите часы на холодные звонки? 80% бизнесов в 2GIS уже имеют сайт или мессенджеры.
                  Время уходит на тех, кому ничего не нужно.
                </p>
              </header>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Reveal delay={0}>
                <article className="card text-center">
                  <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="h-7 w-7 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3 className="mb-3">Ручной поиск</h3>
                  <p className="text-sm">Часы пролистывания карточек, копирование телефонов, проверка сайта вручную. На 100 бизнесов уходит целый день.</p>
                  <div className="mt-4 p-3 bg-rose-500/5 rounded-xl border border-rose-500/10">
                    <p className="text-rose-500 text-sm font-medium">~8 часов на 100 контактов</p>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={0.1}>
                <article className="card text-center">
                  <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="h-7 w-7 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="mb-3">Нет приоритетов</h3>
                  <p className="text-sm">Непонятно, кому звонить в первую очередь. Кто точно без сайта? У кого нет WhatsApp? Список не отсортирован.</p>
                  <div className="mt-4 p-3 bg-rose-500/5 rounded-xl border border-rose-500/10">
                    <p className="text-rose-500 text-sm font-medium">Конверсия продаж &lt; 5%</p>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={0.2}>
                <article className="card text-center">
                  <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="h-7 w-7 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8" />
                      <path d="M12 17v4" />
                    </svg>
                  </div>
                  <h3 className="mb-3">Нет инфраструктуры</h3>
                  <p className="text-sm">Нужен API-ключ, парсер, Excel. Всё это приходится настраивать с нуля. Фрилансер тратит время на код вместо продаж.</p>
                  <div className="mt-4 p-3 bg-rose-500/5 rounded-xl border border-rose-500/10">
                    <p className="text-rose-500 text-sm font-medium">Каждый час кода = потерянный лид</p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="how" className="section bg-muted/30" aria-labelledby="how-heading">
          <div className="container">
            <Reveal>
              <header className="text-center max-w-3xl mx-auto mb-16">
                <span className="badge bg-accent/10 text-accent border-accent/20 mb-4">Решение</span>
                <h2 id="how-heading">Как работает gisleads</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Одна команда в терминале — и вы получаете CSV с сортированными лидами, готовыми к обзвону.
                </p>
              </header>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <Reveal delay={0}>
                  <article className="card-sm">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">1</span>
                      <div>
                        <h3 className="mb-1">Укажите город и рубрику</h3>
                        <p className="text-sm">Например: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">&quot;Алматы&quot; &quot;салон красоты&quot;</code>. Можно любой город и любую категорию бизнеса из 2GIS.</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
                <Reveal delay={0.1}>
                  <article className="card-sm">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">2</span>
                      <div>
                        <h3 className="mb-1">Скрипт парсит контакты</h3>
                        <p className="text-sm">API 2GIS возвращает: телефоны, сайты, WhatsApp, Telegram, Instagram. Скрипт проходит по страницам и собирает всё.</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
                <Reveal delay={0.2}>
                  <article className="card-sm">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">3</span>
                      <div>
                        <h3 className="mb-1">Автоматический скоринг</h3>
                        <p className="text-sm">Каждый бизнес получает score от 0 до 2: +1 за отсутствие сайта, +1 за отсутствие WhatsApp/Telegram. Сортировка по убыванию.</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
                <Reveal delay={0.3}>
                  <article className="card-sm">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">4</span>
                      <div>
                        <h3 className="mb-1">Готовый CSV-файл</h3>
                        <p className="text-sm">Экспорт в utf-8-sig — Excel открывает кириллицу без проблем. Поля: name, address, phones, site, socials, needs_site, needs_bot, score.</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </div>
              <Reveal delay={0.15}>
                <div className="card">
                  <h3 className="mb-4">Пример вызова</h3>
                  <pre className="bg-muted/50 rounded-xl p-5 overflow-x-auto text-sm font-mono"><code>{`# Базовый запуск
python leads.py "Астана" "кофейня" --key $GIS_KEY

# Больше страниц, свой файл
python leads.py "Алматы" "барбершоп" \
  --key $GIS_KEY --pages 20 --out barbers.csv

# Самопроверка (без API)
python leads.py --demo

# Переменная окружения
export GIS_KEY="ваш_ключ"
python leads.py "Шымкент" "stomatologiya"`}</code></pre>
                  <div className="mt-5 pt-5 border-t border-border space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">--pages</code></span>
                      <span className="font-medium">Страниц по 10 (default 5)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">--out</code></span>
                      <span className="font-medium">Имя CSV-файла (default leads.csv)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">--key</code></span>
                      <span className="font-medium">API-ключ или env GIS_KEY</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">--demo</code></span>
                      <span className="font-medium">Тест без API</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="comparison" className="section" aria-labelledby="comparison-heading">
          <div className="container">
            <Reveal>
              <header className="text-center max-w-3xl mx-auto mb-16">
                <span className="badge bg-amber-500/10 text-amber-500 border-amber-500/20 mb-4">Сравнение</span>
                <h2 id="comparison-heading">Ручной поиск vs gisleads</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Посчитайте, сколько времени вы сэкономите за неделю.
                </p>
              </header>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="max-w-4xl mx-auto overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="pb-4 text-left font-semibold"></th>
                      <th className="pb-4 text-center font-semibold text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <svg className="h-4 w-4 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                          Ручной поиск
                        </div>
                      </th>
                      <th className="pb-4 text-center font-semibold text-accent">
                        <div className="flex items-center justify-center gap-2">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                          gisleads
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Время на 100 лидов", "6–8 часов", "30 секунд"],
                      ["Проверка сайта", "Вручную открыть каждый", "Авто, флаг needs_site"],
                      ["Поиск WhatsApp/TG", "Смотреть карточку", "Авто, флаг needs_bot"],
                      ["Сортировка", "Вручную в Excel", "По score (0–2)"],
                      ["Ошибки кодировки", "Постоянно", "utf-8-sig, нет"],
                      ["Стоимость", "Ваше время", "Бесплатно"],
                      ["Зависимости", "—", "Только stdlib Python"],
                    ].map(([criteria, manual, gis], i) => (
                      <tr key={i}>
                        <td className="py-4 pr-4 font-medium">{criteria}</td>
                        <td className="py-4 px-4 text-center text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <svg className="h-3.5 w-3.5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                            {manual}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="inline-flex items-center gap-1.5 text-accent font-medium">
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                            {gis}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="demo" className="section bg-muted/30" aria-labelledby="demo-heading">
          <div className="container">
            <Reveal>
              <header className="text-center max-w-3xl mx-auto mb-16">
                <span className="badge bg-emerald-500/10 text-emerald-500 border-emerald-500/20 mb-4">Демо</span>
                <h2 id="demo-heading">Как выглядит скоринг</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Запустите <code className="bg-muted px-2 py-1 rounded font-mono text-sm">python leads.py --demo</code> — скрипт сам себя проверит на двух тестовых кейсах.
                </p>
              </header>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Reveal delay={0}>
                <article className="card border-rose-500/20 bg-rose-500/[0.02]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    </div>
                    <div>
                      <span className="badge bg-rose-500/10 text-rose-500 border-rose-500/20 text-xs">Score: 2 — горячий лид</span>
                      <h3 className="mt-1">Салон Грация</h3>
                    </div>
                  </div>
                  <pre className="bg-muted/50 rounded-xl p-4 overflow-x-auto text-xs font-mono leading-relaxed"><code>{`{
  "type": "branch",
  "name": "Салон Грация",
  "address_name": "Абая 10",
  "contact_groups": [{
    "contacts": [{
      "type": "phone",
      "value": "+7 777 123 45 67"
    }]
  }]
}`}</code></pre>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20">
                      <p className="text-xs text-muted-foreground mb-0.5">Сайт</p>
                      <p className="font-semibold text-rose-500">Нет → needs_site</p>
                    </div>
                    <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20">
                      <p className="text-xs text-muted-foreground mb-0.5">WhatsApp/TG</p>
                      <p className="font-semibold text-rose-500">Нет → needs_bot</p>
                    </div>
                    <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 col-span-2">
                      <p className="text-xs text-muted-foreground mb-0.5">Итог</p>
                      <p className="font-semibold text-emerald-500">Score: 1 + 1 = 2 → Звонить первому!</p>
                    </div>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={0.1}>
                <article className="card border-emerald-500/20 bg-emerald-500/[0.02]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <div>
                      <span className="badge bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-xs">Score: 0 — не целевой</span>
                      <h3 className="mt-1">Кофейня</h3>
                    </div>
                  </div>
                  <pre className="bg-muted/50 rounded-xl p-4 overflow-x-auto text-xs font-mono leading-relaxed"><code>{`{
  "type": "branch",
  "name": "Кофейня",
  "address_name": "Достык 5",
  "contact_groups": [{
    "contacts": [
      {"type": "phone", "value": "+7 700 000 00 00"},
      {"type": "website", "value": "https://coffee.kz"},
      {"type": "whatsapp", "value": "+7 700 000 00 00"}
    ]
  }]
}`}</code></pre>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="p-3 bg-muted rounded-xl">
                      <p className="text-xs text-muted-foreground mb-0.5">Сайт</p>
                      <p className="font-medium">Есть (coffee.kz)</p>
                    </div>
                    <div className="p-3 bg-muted rounded-xl">
                      <p className="text-xs text-muted-foreground mb-0.5">WhatsApp/TG</p>
                      <p className="font-medium">Есть (WA)</p>
                    </div>
                    <div className="p-3 bg-muted rounded-xl col-span-2">
                      <p className="text-xs text-muted-foreground mb-0.5">Итог</p>
                      <p className="font-medium">Score: 0 → Пропускаем, экономим время</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="quickstart" className="section" aria-labelledby="quickstart-heading">
          <div className="container">
            <Reveal>
              <header className="text-center max-w-3xl mx-auto mb-16">
                <span className="badge bg-emerald-500/10 text-emerald-500 border-emerald-500/20 mb-4">Быстрый старт</span>
                <h2 id="quickstart-heading">Начните за 3 шага</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Всё, что нужно — Python 3.8+ и бесплатный ключ 2GIS.
                </p>
              </header>
            </Reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  num: "01",
                  title: "Получите API-ключ 2GIS",
                  desc: "Зарегистрируйтесь на dev.2gis.com и создайте ключ. Это бесплатно и занимает 2 минуты.",
                  action: "https://dev.2gis.com",
                  actionLabel: "dev.2gis.com →",
                  code: null,
                },
                {
                  num: "02",
                  title: "Скачайте скрипт",
                  desc: "Один файл — leads.py. Ничего устанавливать не нужно.",
                  action: "https://github.com/Yers1/gisleads",
                  actionLabel: "Скачать с GitHub →",
                  code: "git clone https://github.com/Yers1/gisleads.git\ncd gisleads",
                },
                {
                  num: "03",
                  title: "Запустите поиск",
                  desc: "Укажите город, рубрику и ключ. Через 30 секунд у вас CSV с горячими лидами.",
                  action: null,
                  actionLabel: null,
                  code: 'python leads.py &quot;Алматы&quot; &quot;салон красоты&quot; --key $GIS_KEY --pages 5',
                },
              ].map((step, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <article className="card-sm">
                    <div className="grid lg:grid-cols-5 gap-6 items-start">
                      <div className="lg:col-span-3">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-4xl font-bold text-muted-foreground/20">{step.num}</span>
                          <h3>{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{step.desc}</p>
                        {step.action && (
                          <a href={step.action} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                            {step.actionLabel}
                          </a>
                        )}
                      </div>
                      {step.code && (
                        <div className="lg:col-span-2">
                          <pre className="bg-muted/50 rounded-xl p-4 overflow-x-auto text-xs font-mono"><code>{step.code}</code></pre>
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div className="mt-12 p-6 bg-muted/30 rounded-2xl border border-border text-center max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground mb-1">Проверьте без API ключа:</p>
                <code className="bg-muted px-3 py-1.5 rounded-lg font-mono text-sm">python leads.py --demo</code>
                <p className="text-xs text-muted-foreground mt-2">Вывод: <code className="bg-muted px-1 py-0.5 rounded">demo OK: парсинг контактов и скоринг лидов работают</code></p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="usecases" className="section bg-muted/30" aria-labelledby="usecases-heading">
          <div className="container">
            <Reveal>
              <header className="text-center max-w-3xl mx-auto mb-16">
                <span className="badge bg-blue-500/10 text-blue-500 border-blue-500/20 mb-4">Сценарии</span>
                <h2 id="usecases-heading">Кому это пригодится</h2>
              </header>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                {
                  icon: "globe",
                  title: "Веб-студии",
                  desc: "Находите бизнес без сайта в вашем городе. Предлагайте лендинги и интернет-магазины.",
                  color: "accent",
                },
                {
                  icon: "message",
                  title: "Бот-мейкеры",
                  desc: "Таргетируйте тех, у кого нет WhatsApp и Telegram. Предлагайте автоворонки и чат-ботов.",
                  color: "emerald",
                },
                {
                  icon: "user",
                  title: "Фрилансеры",
                  desc: "Быстрый лидген без рекламного бюджета. Первые клиенты за 5 минут от идеи до CSV.",
                  color: "violet",
                },
                {
                  icon: "chart",
                  title: "Маркетологи",
                  desc: "Собирайте базу бизнесов по нише и гео. Сегментируйте, анализируйте, продавайте.",
                  color: "amber",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <article className="card text-center">
                    <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center mx-auto mb-4`}>
                      <svg className={`h-6 w-6 text-${item.color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        {item.icon === "globe" && <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>}
                        {item.icon === "message" && <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>}
                        {item.icon === "user" && <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>}
                        {item.icon === "chart" && <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>}
                      </svg>
                    </div>
                    <h3 className="text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section" aria-labelledby="faq-heading">
          <div className="container">
            <Reveal>
              <header className="text-center max-w-3xl mx-auto mb-16">
                <span className="badge bg-amber-500/10 text-amber-500 border-amber-500/20 mb-4">FAQ</span>
                <h2 id="faq-heading">Часто задаваемые вопросы</h2>
              </header>
            </Reveal>
            <div className="max-w-3xl mx-auto space-y-3">
              {[
                {
                  q: "Сколько это стоит?",
                  a: "Абсолютно бесплатно. Скрипт с открытым исходным кодом (MIT). Платите только своим временем.",
                },
                {
                  q: "Нужно ли устанавливать Python?",
                  a: "Если у вас macOS или Linux — Python уже есть. На Windows скачайте python.org (галочка «Add to PATH»). Всё.",
                },
                {
                  q: "Где взять API-ключ 2GIS?",
                  a: 'На dev.2gis.com. Регистрация, создать приложение, получить ключ. Бесплатный лимит: 5000 запросов/сутки. Одной страницы = 1 запрос. 100 страниц в день = 5000 лидов — хватит с запасом.',
                },
                {
                  q: "Какие города и рубрики поддерживаются?",
                  a: "Любые. 2GIS работает в России, Казахстане, ОАЭ, Чехии, Чили, Кипре и других странах. Вбивайте любой город и рубрику — что есть в 2GIS, то и найдёте.",
                },
                {
                  q: "Можно ли парсить больше 50 результатов?",
                  a: "Да. Флаг --pages контролирует количество страниц (по 10 результатов). 50 страниц = 500 лидов. Работает, пока API отвечает.",
                },
                {
                  q: "CSV открывается с кракозябрами?",
                  a: 'Нет. Скрипт сохраняет в utf-8-sig (BOM). Excel, Google Sheets и LibreOffice открывают кириллицу правильно. Проверено на macOS, Windows, Linux.',
                },
                {
                  q: "Есть ли веб-интерфейс?",
                  a: "Пока только CLI. Это осознанное решение: скрипт на чистом Python без зависимостей работает быстрее, чем любой веб-сервис. Однострочник в терминале — и данные у вас.",
                },
                {
                  q: "Как я могу помочь проекту?",
                  a: "Поставьте звезду на GitHub, расскажите коллегам, создайте issue с идеей или PR с кодом. Любая обратная связь помогает.",
                },
              ].map((faq, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="card-sm cursor-pointer select-none" onClick={() => setOpenFaq(openFaq === i ? null : i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenFaq(openFaq === i ? null : i); } }} tabIndex={0} role="button" aria-expanded={openFaq === i}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-medium">{faq.q}</h3>
                      <svg className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-accent/5 border-y border-border" aria-labelledby="tech-heading">
          <div className="container">
            <Reveal>
              <header className="text-center max-w-3xl mx-auto mb-16">
                <span className="badge bg-accent/10 text-accent border-accent/20 mb-4">Технологии</span>
                <h2 id="tech-heading">Технические детали</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Только стандартная библиотека Python. Никаких зависимостей.
                </p>
              </header>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: "code",
                  title: "Zero dependencies",
                  desc: "Только urllib, json, csv, argparse. Ничего не нужно устанавливать через pip. Работает везде, где есть Python 3.8+.",
                  detail: "Меньше 200 строк кода",
                },
                {
                  icon: "api",
                  title: "API 2GIS 3.0",
                  desc: "Официальный Catalog API. Поля contact_groups, address_name. Бесплатный ключ — до 5000 запросов в сутки.",
                  detail: "catalog.api.2gis.com",
                },
                {
                  icon: "file",
                  title: "Excel-ready CSV",
                  desc: "Кодировка utf-8-sig (BOM). Excel, Google Sheets, LibreOffice — везде кириллица отображается корректно.",
                  detail: "Разделитель: запятая (RFC 4180)",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <article className="card text-center">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                      <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        {item.icon === "code" && <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>}
                        {item.icon === "api" && <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></>}
                        {item.icon === "file" && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></>}
                      </svg>
                    </div>
                    <h3 className="mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <div className="pt-4 border-t border-border">
                      <span className="text-xs font-mono bg-muted px-2 py-1 rounded">{item.detail}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="cta-heading">
          <div className="container">
            <Reveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 id="cta-heading" className="mb-4">Готовы найти первых клиентов?</h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                  Скачайте скрипт, получите ключ 2GIS и через 5 минут у вас будет CSV с горячими лидами.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://github.com/Yers1/gisleads" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Скачать с GitHub
                  </a>
                  <a href="https://dev.2gis.com" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-10 py-4">
                    Получить ключ 2GIS
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
                <p className="mt-8 text-sm text-muted-foreground">
                  MIT License. Open source. Бесплатно навсегда.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-16 bg-muted/30" role="contentinfo">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 font-semibold text-xl mb-4" aria-label="gisleads home">
                <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10" />
                  <path d="M3 10c0-2.5 1.5-4.5 3.5-5.5" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 7v3l2 2" />
                </svg>
                <span>gisleads</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs mb-4">
                Лиды из 2GIS для веб-студий, фрилансеров и маркетологов. Только stdlib Python, никаких зависимостей.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/Yers1/gisleads" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
            <nav aria-label="Footer navigation">
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#problem" className="hover:text-foreground transition-colors">Проблема</a></li>
                <li><a href="#how" className="hover:text-foreground transition-colors">Как работает</a></li>
                <li><a href="#quickstart" className="hover:text-foreground transition-colors">Быстрый старт</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </nav>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="https://github.com/Yers1/gisleads" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="https://dev.2gis.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">API 2GIS</a></li>
                <li><a href="https://github.com/Yers1/gisleads/issues" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Сообщить о проблеме</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 gisleads. MIT License.</p>
            <p>Неофициальный продукт. Не связан с 2GIS.</p>
          </div>
        </div>
      </footer>
    </>
  )
}