'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useNewsAppContext } from '@/context/NewsAppContext'
import FilterOptions from '@/components/UI/FilterOptions'
import { sortBy, categories, languages, countries } from '@/utils/constants'
import FilterIcon from '../../../public/filters.png'

const FilterLine = () => {
  const { activeTab, clearAll } = useNewsAppContext()
  const [showFilters, setShowFilters] = useState(false)
  const handleFilterToggle = () => setShowFilters(!showFilters)
  const isTabOne = activeTab === '1'

  const leftFilter = isTabOne ? { menuOf: countries, name: 'Country:', id: 3 } : { menuOf: languages, name: 'Language:', id: 4 }
  const rightFilter = isTabOne ? { menuOf: categories, name: 'Category:', id: 1 } : { menuOf: sortBy, name: 'Sort By:', id: 2 }

  return (
    <div className='transition-all ease-out duration-300'>
      <div className='text-2xl border-2 mt-2 px-2 md:px-6 border-x-transparent border-y-white/25 h-20 flex items-center justify-between font-medium'>
        <div className='flex'>
          <button className='flex cursor-pointer' onClick={handleFilterToggle}>
            <Image src={FilterIcon} alt='filter icon' width={20} height={20} className='opacity-80 mr-1 md:mr-2' />
            <FilterOptions {...leftFilter} position='left' />
          </button>
          <span className='text-white/25 mx-2 md:mx-4'>|</span>
          <button onClick={clearAll} className='text-white/30 font-normal hover:text-white cursor-pointer'>
            Clear all
          </button>
        </div>
        <FilterOptions {...rightFilter} position='right' />
      </div>
    </div>
  )
}
export default FilterLine
