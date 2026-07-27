"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

type Lead = {
  name: string
  address: string
  lon: number
  lat: number
  phones: string
  site: string
  socials: string
  needs_site: string
  needs_bot: string
  score: number
}

export default function DemoPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [filter, setFilter] = useState("")
  const [onlyHot, setOnlyHot] = useState(false)

  useEffect(() => {
    fetch("/demo-leads.json")
      .then((r) => r.json())
      .then((data: Lead[]) => setLeads(data))
      .catch(() => setLeads([]))
  }, [])

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase()
    return leads.filter((l) => {
      if (onlyHot && l.score < 2) return false
      if (!q) return true
      return (
        l.name.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q) ||
        l.phones.includes(q)
      )
    })
  }, [leads, filter, onlyHot])

  const counts = useMemo(() => {
    const noSite = leads.filter((l) => l.needs_site).length
    const noBot = leads.filter((l) => l.needs_bot).length
    const hot = leads.filter((l) => l.score === 2).length
    return { noSite, noBot, hot }
  }, [leads])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight hover:opacity-80">
            gisleads
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Лендинг</Link>
            <a
              href="https://github.com/Yers1/gisleads"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Демо без API-ключа
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Эти данные сгенерированы командой{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">python leads.py --mock</code>.
            В реальном запуске источником будет 2GIS Catalog API.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="text-2xl font-bold">{leads.length}</div>
            <div className="text-xs text-muted-foreground">всего лидов</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="text-2xl font-bold text-warning">{counts.noSite}</div>
            <div className="text-xs text-muted-foreground">без сайта</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="text-2xl font-bold text-accent">{counts.noBot}</div>
            <div className="text-xs text-muted-foreground">без бота</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="text-2xl font-bold text-success">{counts.hot}</div>
            <div className="text-xs text-muted-foreground">горячих (score 2)</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Поиск по названию, адресу, телефону..."
            className="flex-1 rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent"
          />
          <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card text-sm cursor-pointer select-none">
            <input
              type="checkbox"
              checked={onlyHot}
              onChange={(e) => setOnlyHot(e.target.checked)}
              className="accent-accent"
            />
            Только горячие
          </label>
        </div>

        <div className="rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted border-b border-border">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Название</th>
                  <th className="text-left px-4 py-3 font-medium">Адрес</th>
                  <th className="text-left px-4 py-3 font-medium">Телефон</th>
                  <th className="text-left px-4 py-3 font-medium">Сайт</th>
                  <th className="text-left px-4 py-3 font-medium">Мессенджеры</th>
                  <th className="text-center px-4 py-3 font-medium">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((l) => (
                  <tr key={l.name + l.address} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium whitespace-nowrap">{l.name}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{l.address}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{l.phones}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                      {l.site ? (
                        <span className="text-success">есть</span>
                      ) : (
                        <span className="text-warning">нет</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                      {l.socials || "—"}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          l.score === 2
                            ? "bg-success/10 text-success"
                            : l.score === 1
                            ? "bg-warning/10 text-warning"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {l.score}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                      Ничего не найдено
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl border border-border bg-muted text-sm text-muted-foreground">
          <p className="mb-1">
            <span className="font-medium text-foreground">Как это работает:</span>{" "}
            <code>--mock</code> генерирует набор компаний с вероятностью наличия сайта и мессенджеров.
            Score 2 — нет ни сайта, ни бота; score 1 — чего-то одного нет; score 0 — всё есть.
          </p>
          <p>
            Для реального поиска получите ключ на{" "}
            <a href="https://dev.2gis.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              dev.2gis.com
            </a>{" "}
            и запустите <code>python leads.py "Алматы" "салон красоты" --key $GIS_KEY</code>.
          </p>
        </div>
      </section>
    </main>
  )
}
