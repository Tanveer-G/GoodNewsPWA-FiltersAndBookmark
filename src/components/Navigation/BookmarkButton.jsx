'use client'
import { useNewsAppContext } from '@/context/NewsAppContext'

const BookmarkButton = ({ selectedArticle }) => {
  const { uniqueBookmark, setUniqueBookmark, setBookmarks } = useNewsAppContext()
  //* unique = Set();  bookmarks- s = printable bookmarks

  const updateBookmarks = (uniqueBookmarkSet) => {
    let newBookmarkArray = [...uniqueBookmarkSet]
    let newTotalResults = newBookmarkArray.length || 0
    setBookmarks((existingList) => {
      const newBookmarkedArticles = [{ ...existingList[0], articles: newBookmarkArray, totalResults: newTotalResults }]
      return newBookmarkedArticles
    })
  }
  const handleBookmarkClick = (e, isAdding) => {
    e.stopPropagation()

    setUniqueBookmark((previousState) => {
      const updatedSet = new Set(previousState)

      if (isAdding) {
        updatedSet.add(selectedArticle)
      } else {
        updatedSet.delete(selectedArticle)
      }

      updateBookmarks(updatedSet)
      return updatedSet
    })
  }

  const isBookmarked = uniqueBookmark.has(selectedArticle)

  return (
    <div className='text-[#fe7300] relative text-[2.6rem]'>
      <span
        className='absolute right-5 z-30 stroke-2 stroke-black bg-black/50 cursor-pointer border-t-2 hover:border-t-[#fe7300]'
        onClick={(e) => handleBookmarkClick(e, !isBookmarked)}
      >
        {isBookmarked ? <b>&#9733;</b> : <b>&#9734;</b>}
      </span>
    </div>
  )
}
export default BookmarkButton
