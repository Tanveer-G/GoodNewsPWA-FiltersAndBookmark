import InfiniteScroll from 'react-infinite-scroll-component'
import { useAPI } from '@/hooks/useAPI'
import Loading from '../Loader/loading'
import { useNewsAppContext } from '@/context/NewsAppContext'
import { MyData } from '@/utils/myData'
import FinishedLine from '../UI/FinishedLine'
import StatusBar from './StatusBar'
import NewsCard from './NewsCard'

const NewsContent = () => {
  const { activeTab, filterState, bookmarks } = useNewsAppContext()
  const isValidQuery = filterState[0].link.length >= 6
  const generateEndpoint = (menuItems, optionalItem) => {
    return menuItems.map((item) => filterState[item].link).join('') + (optionalItem || '')
  }

  let newsArticles
  let apiData

  switch (activeTab) {
    case '0': {
      newsArticles = bookmarks
      break
    }
    case '1': {
      const endPoints = generateEndpoint([0, 1, 3])
      ;({ data: newsArticles, ...apiData } = useAPI('top-headlines', endPoints))
      break
    }
    case '2': {
      if (isValidQuery) {
        const endPoints = generateEndpoint([0, 2, 4])
        ;({ data: newsArticles, ...apiData } = useAPI('everything', endPoints))
      }
      break
    }
    default: {
      newsArticles = MyData
      break
    }
  }

  return (
    <>
      {newsArticles && (
        <StatusBar
          articleLength={newsArticles[0]?.articles?.length}
          pages={newsArticles?.length}
          articleStatus={newsArticles[0]?.status}
          articleTotalResults={newsArticles[0]?.totalResults}
          isLoading={apiData?.isLoading}
        />
      )}

      {newsArticles?.length === 0 && (
        <div className='pb-2 pt-4 px-2'>
          <h1 className='text-red-500 font-semibold text-center text-3xl '>Status: Network response was not ok!</h1>
        </div>
      )}

      <InfiniteScroll
        dataLength={newsArticles?.length || []}
        next={() => apiData?.setSize(apiData?.size + 1)}
        hasMore={apiData?.end}
        loader={<Loading message='News Loading..' />}
        endMessage={<FinishedLine />}
      >
        {newsArticles?.map(({ articles }, i) => (
          <div key={`articles-page-${articles[i]?.publishedAt}`} className='mx-auto px-4 sm:px-6 py-4 lg:px-0'>
            <div className='overflow-x-hidden t-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
              {articles?.map((article) => (
                <NewsCard article={article} key={article?.title + article?.source.name} />
              ))}
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </>
  )
}
export default NewsContent
