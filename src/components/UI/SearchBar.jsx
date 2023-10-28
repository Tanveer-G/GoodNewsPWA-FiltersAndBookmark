'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useNewsAppContext } from '@/context/NewsAppContext'
import SearchIcon from '../../../public/search.svg'
import RemoveFilterButton from './RemoveFilterButton'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const { filterState, updateFilterValue, activeTab } = useNewsAppContext()

  const onInputChange = (inputValue) => {
    setQuery(inputValue)
  }

  const validateQuery = (input) => input.length >= 3

  const performSearch = (inputQuery, prefix, link) => {
    if (!validateQuery(inputQuery)) {
      alert('Sorry!  In valid Input!')
    } else if (prefix !== link) {
      updateFilterValue(0, inputQuery, prefix)
      setQuery('')
    } else {
      alert('Try with some another word!')
    }
  }

  const onSearchClick = () => {
    let withPrefix = `${filterState[0].prefix}${query}`
    performSearch(query, withPrefix, filterState[0].link)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearchClick()
    }
  }

  return (
    <div className='px-4'>
      <div className='w-full mt-4 h-[3.7rem] md:h-[4.5rem] border rounded-xl text-center flex items-center'>
        <input
          className='bg-transparent w-full h-full overflow-hidden text-ellipsis whitespace-nowrap outline-0 focus:outline-none pl-4 md:pl-6 placeholder:text-red-500'
          placeholder={`Search: ${activeTab === '1' ? 'Optional' : 'Must*'}`}
          value={query}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {filterState[0].name && <RemoveFilterButton id={0} name={filterState[0].name} query='' />}
        <button
          className='flex items-center justify-center cursor-pointer bg-gray-400/50 md:hover:bg-gray-300/50 h-full w-[5rem] border-b rounded-tl-none rounded-bl-none rounded-tr-xl  rounded-br-xl border-transparent overflow-hidden'
          onClick={() => onSearchClick()}
        >
          <Image
            src={SearchIcon}
            alt='search'
            width={24}
            height={24}
            className='w-[19px] h-[19px] md:w-[24px] md:h-[24px] cursor-pointer svgWhite'
          />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
