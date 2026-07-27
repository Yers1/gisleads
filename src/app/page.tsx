import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2 font-semibold text-xl" aria-label="gisleads home">
            <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10" />
              <path d="M3 10c0-2.5 1.5-4.5 3.5-5.5" />
              <circle cx="12" cy="10" r="3" />
              <path d="M12 7v3l2 2" />
            </svg>
            <span>gisleads</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/Yers1/gisleads" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm hidden sm:inline-flex">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Link>
            <Link href="#download" className="btn-primary text-sm">
              Скачать
            </Link>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="section relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="max-w-2xl">
                <span className="badge mb-6">Только stdlib Python • Без зависимостей</span>
                <h1 id="hero-heading" className="mb-6">
                  Лиды из 2GIS для веб-студий и фрилансеров
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  Находите малый бизнес без сайта и без WhatsApp/Telegram в 2GIS.
                  Экспорт в CSV за минуты. Продавайте сайты и ботов тем, кому они нужны.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#download" className="btn-primary text-lg px-8 py-4">
                    Скачать gisleads
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </Link>
                  <Link href="#demo" className="btn-secondary text-lg px-8 py-4">
                    Посмотреть демо
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Python 3.8+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>CSV (Excel-ready)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>API 2GIS 3.0</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="card relative overflow-hidden bg-card border-border">
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="font-mono text-xs">leads.py</span>
                  </div>
                  <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm font-mono text-foreground"><code>{`$ python leads.py "Алматы" "салон красоты" --key ВАШ_КЛЮЧ --pages 5

🔍 Поиск: Алматы салон красоты
📄 Страница 1/5: найдено 10 филиалов
📄 Страница 2/5: найдено 10 филиалов
📄 Страница 3/5: найдено 8 филиалов
✅ 28 лидов -> leads.csv | без сайта: 19 | топ: Салон Грация

$ head -3 leads.csv
name,address,phones,site,socials,needs_site,needs_bot,score
"Салон Грация","Абая 10","+7 777 123 45 67","","","да","да",2
"Кофейня","Достык 5","+7 700 000 00 00","https://coffee.kz","whatsapp:+7 700 000 00 00","","",0`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="section" aria-labelledby="problem-heading">
          <div className="container">
            <header className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="problem-heading">Проблема: где найти клиентов, которым нужен сайт?</h2>
              <p className="mt-4 text-lg">
                Веб-студии и фрилансеры тратят недели на холодные звонки и ручной поиск в 2GIS.
                Большинство бизнесов уже имеют сайт или мессенджеры — время уходит впустую.
              </p>
            </header>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3>Ручной поиск в 2GIS</h3>
                </div>
                <p>Часы пролистывания карточек, копирования телефонов, проверки сайтов вручную. Не масштабируется.</p>
              </article>
              <article className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8" />
                      <path d="M12 17v4" />
                    </svg>
                  </div>
                  <h3>Нет контактов для продаж</h3>
                </div>
                <p>В 2GIS часто нет сайта, нет WhatsApp, нет Telegram. Непонятно, как связаться и что предложить.</p>
              </article>
              <article className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3>Сложно приоритизировать</h3>
                </div>
                <p>Кому звонить в первую очередь? Кто точно без сайта? Кто без бота? Таблица в Excel не решает.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="solution" className="section bg-muted/30" aria-labelledby="solution-heading">
          <div className="container">
            <header className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="solution-heading">Решение: gisleads за 30 секунд</h2>
              <p className="mt-4 text-lg">
                Один скрипт на чистом Python. Без зависимостей. Готовый CSV с приоритетами.
              </p>
            </header>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <article className="card">
                  <h3 className="mb-3">Как это работает</h3>
                  <ol className="space-y-4 text-muted-foreground">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold">1</span>
                      <div>
                        <p className="font-medium">Запуск</p>
                        <p className="text-sm">Укажите город, рубрику и API-ключ 2GIS (бесплатно на dev.2gis.com)</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold">2</span>
                      <div>
                        <p className="font-medium">Сбор данных</p>
                        <p className="text-sm">Скрипт проходит по страницам выдачи, парсит контакты: телефоны, сайты, WhatsApp, Telegram, Instagram</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold">3</span>
                      <div>
                        <p className="font-medium">Скоринг</p>
                        <p className="text-sm">Автоматически проставляет флаги: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">needs_site=да</code> / <code className="bg-muted px-1.5 py-0.5 rounded text-xs">needs_bot=да</code> и суммарный score (0–2)</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold">4</span>
                      <div>
                        <p className="font-medium">Результат</p>
                        <p className="text-sm">CSV с сортировкой по score — сверху самые горячие лиды. Открывается в Excel без кодировок (utf-8-sig)</p>
                      </div>
                    </li>
                  </ol>
                </article>
                <article className="card">
                  <h3 className="mb-3">Пример команды</h3>
                  <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm font-mono"><code>{`python leads.py "Астана" "кофейня" --key $GIS_KEY --pages 10 --out astana_coffee.csv`}</code></pre>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><code className="bg-muted px-1.5 py-0.5 rounded">--pages</code> — сколько страниц по 10 результатов (default: 5)</li>
                    <li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><code className="bg-muted px-1.5 py-0.5 rounded">--out</code> — имя выходного файла (default: leads.csv)</li>
                    <li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><code className="bg-muted px-1.5 py-0.5 rounded">--key</code> — API-ключ или env <code className="bg-muted px-1.5 py-0.5 rounded">GIS_KEY</code></li>
                    <li className="flex items-center gap-2"><svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><code className="bg-muted px-1.5 py-0.5 rounded">--demo</code> — самопроверка без API</li>
                  </ul>
                </article>
              </div>
              <aside className="space-y-6">
                <article className="card">
                  <h3 className="mb-4">Что внутри CSV</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="border-b border-border text-muted-foreground">
                          <th className="pb-2 font-medium">Колонка</th>
                          <th className="pb-2 font-medium">Описание</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr><td className="py-2 font-mono">name</td><td className="py-2">Название заведения</td></tr>
                        <tr><td className="py-2 font-mono">address</td><td className="py-2">Адрес из 2GIS</td></tr>
                        <tr><td className="py-2 font-mono">phones</td><td className="py-2">Телефоны через ;</td></tr>
                        <tr><td className="py-2 font-mono">site</td><td className="py-2">Сайты через ; (пусто = нет)</td></tr>
                        <tr><td className="py-2 font-mono">socials</td><td className="py-2">WhatsApp/Telegram/Instagram</td></tr>
                        <tr><td className="py-2 font-mono font-semibold">needs_site</td><td className="py-2 font-medium text-accent">&quot;да&quot; если сайта нет</td></tr>
                        <tr><td className="py-2 font-mono font-semibold">needs_bot</td><td className="py-2 font-medium text-accent">&quot;да&quot; если нет WA/TG</td></tr>
                        <tr><td className="py-2 font-mono font-semibold">score</td><td className="py-2 font-medium">0–2 (приоритет звонка)</td></tr>
                      </tbody>
                    </table>
                  </div>
                </article>
                <article className="card">
                  <h3 className="mb-4">Для кого это</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3"><svg className="h-5 w-5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><span>Веб-студии — поиск клиентов на сайты</span></li>
                    <li className="flex items-center gap-3"><svg className="h-5 w-5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><span>Фрилансеры — быстрый лидген без рекламы</span></li>
                    <li className="flex items-center gap-3"><svg className="h-5 w-5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><span>Агентства по ботам — таргетинг на WA/TG</span></li>
                    <li className="flex items-center gap-3"><svg className="h-5 w-5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><span>Маркетологи — сегментация по гео и нише</span></li>
                  </ul>
                </article>
              </aside>
            </div>
          </div>
        </section>

        <section id="demo" className="section" aria-labelledby="demo-heading">
          <div className="container">
            <header className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="demo-heading">Самопроверка без API ключа</h2>
              <p className="mt-4 text-lg">
                Запустите <code className="bg-muted px-2 py-1 rounded font-mono text-sm">python leads.py --demo</code> — проверит парсинг контактов и скоринг на встроенных тест-кейсах.
              </p>
            </header>
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <article className="card">
                <h3 className="mb-4 flex items-center gap-2">
                  <span className="badge bg-red-500/10 text-red-500 border-red-500/20">Без цифрового следа</span>
                  Салон Грация
                </h3>
                <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm font-mono"><code>{`{
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
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <p className="font-medium text-red-500">needs_site: да</p>
                    <p className="text-muted-foreground">Сайта нет</p>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <p className="font-medium text-red-500">needs_bot: да</p>
                    <p className="text-muted-foreground">Нет WA/TG</p>
                  </div>
                  <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <p className="font-medium text-emerald-500">score: 2</p>
                    <p className="text-muted-foreground">Максимальный приоритет</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">phones</p>
                    <p className="text-muted-foreground">+7 777 123 45 67</p>
                  </div>
                </div>
              </article>
              <article className="card">
                <h3 className="mb-4 flex items-center gap-2">
                  <span className="badge bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Полный пакет</span>
                  Кофейня
                </h3>
                <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm font-mono"><code>{`{
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
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">needs_site: —</p>
                    <p className="text-muted-foreground">Сайт есть</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">needs_bot: —</p>
                    <p className="text-muted-foreground">WhatsApp есть</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">score: 0</p>
                    <p className="text-muted-foreground">Не целевой</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">socials</p>
                    <p className="text-muted-foreground">whatsapp:+7 700 000 00 00</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="tech" className="section bg-muted/30" aria-labelledby="tech-heading">
          <div className="container">
            <header className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="tech-heading">Технические детали</h2>
              <p className="mt-4 text-lg">
                Минимализм по дизайну. Только стандартная библиотека Python.
              </p>
            </header>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <article className="card text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3 className="mb-2">Zero dependencies</h3>
                <p className="text-sm text-muted-foreground">Только <code className="bg-muted px-1.5 py-0.5 rounded">urllib</code>, <code className="bg-muted px-1.5 py-0.5 rounded">json</code>, <code className="bg-muted px-1.5 py-0.5 rounded">csv</code>, <code className="bg-muted px-1.5 py-0.5 rounded">argparse</code>. Ничего ставить не нужно. Работает везде, где есть Python 3.8+.</p>
              </article>
              <article className="card text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                  </svg>
                </div>
                <h3 className="mb-2">API 2GIS 3.0</h3>
                <p className="text-sm text-muted-foreground">Официальный каталог API. Поля <code className="bg-muted px-1.5 py-0.5 rounded">contact_groups</code> и <code className="bg-muted px-1.5 py-0.5 rounded">address_name</code>. Бесплатный ключ на <a href="https://dev.2gis.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">dev.2gis.com</a>.</p>
              </article>
              <article className="card text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="mb-2">Excel-ready CSV</h3>
                <p className="text-sm text-muted-foreground">Кодировка <code className="bg-muted px-1.5 py-0.5 rounded">utf-8-sig</code> — Excel открывает кириллицу без глюков. Разделитель запятая, кавычки по RFC 4180.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="download" className="section" aria-labelledby="download-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="download-heading" className="mb-4">Готово начать?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Скачайте скрипт, получите бесплатный ключ 2GIS и найдите первых клиентов за 5 минут.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/Yers1/gisleads" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Репозиторий на GitHub
                </a>
                <a href="https://dev.2gis.com" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4">
                  Получить ключ 2GIS
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Звёздочка на GitHub ⭐ — лучшая мотивация для новых фич.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 bg-muted/30" role="contentinfo">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 font-semibold text-xl mb-4" aria-label="gisleads home">
                <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10" />
                  <path d="M3 10c0-2.5 1.5-4.5 3.5-5.5" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 7v3l2 2" />
                </svg>
                <span>gisleads</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Лиды из 2GIS для веб-студий и фрилансеров. Только stdlib Python.
              </p>
            </div>
            <nav aria-label="Footer navigation">
              <h4 className="font-medium mb-4">Ссылки</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/Yers1/gisleads" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="https://dev.2gis.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">API 2GIS</a></li>
                <li><a href="#demo" className="hover:text-foreground transition-colors">Демо</a></li>
              </ul>
            </nav>
            <div className="text-sm text-muted-foreground">
              <p>Сделано для сообщества веб-студий и фрилансеров.</p>
              <p className="mt-2">MIT License — используйте свободно.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 gisleads. Не официальный продукт 2GIS.</p>
          </div>
        </div>
      </footer>
    </>
  );
}






