"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const ERROR_COPY = {
  zh: {
    label: "SYSTEM / ERROR",
    title: "页面暂时不可用",
    description: "发生了意外错误。你可以重试当前操作，或返回首页重新开始。",
    retry: "重试",
    home: "返回首页",
  },
  en: {
    label: "SYSTEM / ERROR",
    title: "This page is temporarily unavailable",
    description: "An unexpected error occurred. You can retry the current action or return to the homepage.",
    retry: "Retry",
    home: "Back to Home",
  },
  ja: {
    label: "SYSTEM / ERROR",
    title: "このページは一時的に利用できません",
    description: "予期しないエラーが発生しました。再試行するか、ホームに戻ってやり直してください。",
    retry: "再試行",
    home: "ホームに戻る",
  },
} as const

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const pathname = usePathname()

  useEffect(() => {
    console.error("Global error boundary caught:", error)
  }, [error])

  const locale = pathname?.split("/")[1]
  const copy =
    locale && locale in ERROR_COPY
      ? ERROR_COPY[locale as keyof typeof ERROR_COPY]
      : ERROR_COPY.zh

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-6">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
            {copy.label}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{copy.title}</h1>
          <p className="text-zinc-600 leading-relaxed">
            {error.message || copy.description}
          </p>
          {error.digest && (
            <p className="text-xs text-zinc-400">{error.digest}</p>
          )}
          <div className="flex gap-4">
            <button
              onClick={() => reset()}
              className="h-12 px-6 bg-zinc-900 text-white font-bold text-xs uppercase tracking-widest rounded-md hover:bg-black transition-all"
            >
              {copy.retry}
            </button>
            <button
              onClick={() => {
                const homePath =
                  locale && locale in ERROR_COPY ? `/${locale}` : "/"
                window.location.href = homePath
              }}
              className="h-12 px-6 border border-zinc-200 text-zinc-600 font-bold text-xs uppercase tracking-widest rounded-md hover:text-zinc-900 transition-all"
            >
              {copy.home}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
