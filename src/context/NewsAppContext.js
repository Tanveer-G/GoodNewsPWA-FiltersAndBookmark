'use client'
import { createContext, useState, useContext, useMemo } from 'react'
import { MyData } from '@/utils/myData'

const NewsAppContext = createContext()
const initialBookmark = MyData
const initialUniqueBookmark = new Set([])
const initialFilterState = [
  { id: 0, name: '', prefix: '&q=', link: '' }, //query ||
  { id: 1, name: 'general', prefix: '&category=', link: '&category=general' }, //filter:category||
  { id: 2, name: 'publishedAt', prefix: '&sortBy=', link: '&sortBy=publishedAt' }, //filter:||sort by
  { id: 3, name: '', prefix: '&country=', link: '' }, //filters:country|
  { id: 4, name: '', prefix: '&language=', link: '' } //filters:||language
]

export const NewsAppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('3')
  const [uniqueBookmark, setUniqueBookmark] = useState(initialUniqueBookmark)
  const [bookmarks, setBookmarks] = useState(initialBookmark)
  const [filterState, setFilterState] = useState(initialFilterState)

  const updateFilterValue = (id, value = '', withPrefix = '') => {
    setFilterState((prevFilterState) =>
      prevFilterState.map((filterItem) => (filterItem.id === id ? { ...filterItem, name: value, link: withPrefix } : filterItem))
    )
  }

  const clearAll = () => {
    setFilterState(initialFilterState)
  }

  const value = useMemo(
    () => ({
      updateFilterValue,
      clearAll,
      activeTab,
      setActiveTab,
      filterState,
      setFilterState,
      bookmarks,
      setBookmarks,
      uniqueBookmark,
      setUniqueBookmark
    }),
    [initialFilterState, updateFilterValue, clearAll, activeTab, setActiveTab, filterState, bookmarks, uniqueBookmark]
  )

  return (
    <NewsAppContext.Provider value={value} key={'NewsApp_context_Provider_from_NewsAppCOntext'}>
      {children}
    </NewsAppContext.Provider>
  )
}
// Export the context
export const useNewsAppContext = () => useContext(NewsAppContext)
