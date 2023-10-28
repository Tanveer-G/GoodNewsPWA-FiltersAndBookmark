import useSWRInfinite from 'swr/infinite'

const fetcher = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const useAPI = (tab, filtersEndpoints) => {
  const API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_KEY

  const getKey = (pageIndex, previousPageData) => {
    pageIndex = pageIndex + 1
    return `https://newsapi.org/v2/${tab}?page=${pageIndex}&pageSize=100${filtersEndpoints}&apiKey=${API_KEY}`
  }

  const { data, error, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher, {
    revalidate: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
  })
  const end = data && data.length * data[0]?.articles?.length <= data[0]?.totalResults

  return {
    data,
    error,
    isLoading,
    size,
    setSize,
    end
  }
}
