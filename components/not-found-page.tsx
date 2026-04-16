import Link from 'next/link'
import { Button } from '@/components/ui/button'

type NotFoundPageProps = {
  locale: string
  title: string
  description: string
  goHomeLabel: string
  startTestLabel: string
  tagline: string
}

export function NotFoundPage({
  locale,
  title,
  description,
  goHomeLabel,
  startTestLabel,
  tagline,
}: NotFoundPageProps) {
  const homeHref = `/${locale}`
  const testHref = `/${locale}/test`

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-20">
          <Link href={homeHref} className="text-xl font-black tracking-tighter uppercase text-zinc-900">
            Aurora MBTI
          </Link>
        </div>
      </header>

      <main className="flex min-h-screen items-center px-6 pb-24 pt-32 lg:px-20">
        <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,420px)] lg:items-end">
          <section className="space-y-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
              SYSTEM / NOT FOUND
            </div>
            <div className="relative">
              <div className="absolute inset-x-0 top-8 h-32 rounded-full bg-gradient-to-r from-[var(--aurora-purple)] via-[var(--aurora-cyan)] to-[var(--aurora-pink)] opacity-15 blur-3xl" />
              <div className="relative text-[7rem] font-black leading-none tracking-[-0.08em] text-zinc-900 md:text-[10rem] lg:text-[13rem]">
                404
              </div>
            </div>
            <div className="max-w-2xl space-y-5">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">
                {title}
              </h1>
              <p className="max-w-xl text-lg font-medium leading-relaxed text-zinc-500 md:text-xl">
                {description}
              </p>
            </div>
          </section>

          <aside className="space-y-8 border border-zinc-100 bg-zinc-50 p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-400">
              Aurora Recovery
            </p>
            <p className="text-sm font-medium leading-7 text-zinc-500">
              {tagline}
            </p>
            <div className="flex flex-col gap-4">
              <Button asChild size="xl" className="h-14 rounded-md bg-zinc-900 px-8 text-sm font-bold uppercase tracking-widest text-white hover:bg-black">
                <Link href={homeHref}>{goHomeLabel}</Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="h-14 rounded-md border-zinc-200 bg-white px-8 text-sm font-bold uppercase tracking-widest text-zinc-900 hover:border-zinc-300 hover:bg-zinc-100"
              >
                <Link href={testHref}>{startTestLabel}</Link>
              </Button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
