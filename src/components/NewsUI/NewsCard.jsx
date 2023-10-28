'use client'
import { useState } from 'react'
import { useNewsAppContext } from '@/context/NewsAppContext'
import Image from 'next/image'
import Link from 'next/link'
import BookmarkButton from '../Navigation/BookmarkButton'
import FallBackImage from '../../../public/default.svg'
import Loading from '../Loader/loading'

const NewsCard = ({ article }) => {
  const { activeTab } = useNewsAppContext()
  const [isLoading, setIsLoading] = useState(true)
  const [displayImage, setDisplayImage] = useState(article?.urlToImage || FallBackImage.src)
  const websiteFaviconURL = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${
    article?.url.replace(/^https?:\/\//, '').split('/')[0]
  }&size=16`

  const customLoader = ({ src }) => {
    return src
  }

  const onImageLoaded = () => {
    setIsLoading(false)
  }

  const onImageLoadError = () => {
    setIsLoading(false)
    setDisplayImage(FallBackImage.src)
  }
  return (
    <div className='group relative border-transparent hover:border-[#29c1c2]/90 rounded-xl border active:border-[#fe7300] bg-black/30'>
      {activeTab !== '3' && <BookmarkButton selectedArticle={article} />}
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        {isLoading && (
          <div className='absolute inset-0 flex justify-center items-center'>
            <Loading message='Image is Loading..' />
          </div>
        )}
        <Image
          {...(article?.urlToImage ? { loader: customLoader } : {})}
          src={displayImage}
          alt={article?.title}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          width={300}
          height={200}
          onError={onImageLoadError}
          onLoad={onImageLoaded}
        />
      </div>

      <div className='mt-4 flex flex-col justify-between px-[2px]'>
        <div className='flex flex-row justify-between w-full'>
          <h4 className='text-lg text-white '>
            <Link href={article?.url} className='flex flex-row'>
              <img className='mr-2 overflow-hidden w-4 h-4' src={websiteFaviconURL} alt={article?.source?.id} width={16} height='auto' />
              {article?.source.name}
              <span aria-hidden='true' className='absolute inset-0' />
            </Link>
          </h4>
          <p className='text-lg font-medium text-white'>&#128337; {article?.publishedAt.slice(0, 10)}</p>
        </div>
        <p className='mt-1 text-3xl font-semibold text-[#29c1c2]/90'>{article?.title}</p>
        <p className='mt-1 text-[1.35rem]/8  text-white/90'>{article?.description != null ? article?.description : article?.title}</p>
      </div>
    </div>
  )
}
export default NewsCard
