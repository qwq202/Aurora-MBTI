import { getLocale, getTranslations } from 'next-intl/server'
import { NotFoundPage } from '@/components/not-found-page'

export default async function NotFound() {
  const locale = await getLocale()
  const t = await getTranslations('notFound')

  return (
    <NotFoundPage
      locale={locale}
      title={t('title')}
      description={t('description')}
      goHomeLabel={t('goHome')}
      startTestLabel={t('startTest')}
      tagline={t('tagline')}
    />
  )
}
