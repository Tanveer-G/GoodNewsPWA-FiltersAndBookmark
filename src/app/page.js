'use client'
import { useNewsAppContext } from '@/context/NewsAppContext'
import NavBar from '@/components/Navigation/NavBar'
import SearchBar from '@/components/UI/SearchBar'
import FilterLine from '@/components/UI/FilterLine'
import NewsContent from '@/components/NewsUI/NewsContent'
import BlueLightBackground from '@/components/UI/BlueLightBackground'
import ScrollToTop from '@/components/Navigation/ScrollToTop'

export default function Home() {
  const { activeTab } = useNewsAppContext()
  const shouldRenderComponents = activeTab !== '0' && activeTab !== '3'
  return (
    <>
      <NavBar />
      <BlueLightBackground />
      {shouldRenderComponents && (
        <>
          <SearchBar />
          <FilterLine />
        </>
      )}
      <BlueLightBackground />
      <main>
        <NewsContent />
      </main>
      <ScrollToTop />
    </>
  )
}
