'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { useNewsAppContext } from '@/context/NewsAppContext'
import useOutsideClick from '@/hooks/useOutsideClick'
import Down from '../../../public/down.png'

const FilterOptions = ({ menuOf, name, id, position }) => {
  const [showMenu, setShowMenu] = useState(false)
  const { filterState, updateFilterValue } = useNewsAppContext()
  const menuRef = useRef()
  useOutsideClick(menuRef, () => setShowMenu(false))

  let handleCheckbox = (value) => {
    let withPrefix = value ? filterState[id].prefix + value : ''
    updateFilterValue(id, value, withPrefix)
  }

  const transitionClass = position === 'left' ? '-left-10' : 'right-20'
  const translateClass = position === 'left' ? '-translate-x-[200%]' : 'translate-x-[200%]'
  return (
    <div className='flex flex-col' ref={menuRef}>
      <div className='flex items-center cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
        <h4>{name}</h4>
        <Image src={Down} alt='drown arrow' width={15} height={14} className={`opacity-80 mt-1 ml-1 ${showMenu && 'rotate-180'}`} />
      </div>

      <div
        className={`relative z-40 ${transitionClass} focus:outline-none transition-all ease-in-out duration-300 delay-100 
        ${showMenu ? 'translate-x-0' : translateClass}`}
      >
        <ul className='absolute mt-6 origin-top-right bg-black border-white/25 shadow-2xl rounded-md border'>
          {menuOf.map((option) => (
            <li
              key={`filtered-${option.label}-${option.value}-${option.id}`}
              className='space-y-2 cursor-pointer flex items-center px-4 py-1 border-b border-white/20 hover:bg-gray-300/25'
            >
              <input
                type='checkbox'
                className={`h-[1.3rem] w-[1.3rem] rounded border-gray-300 text-indigo-600 focus:ring-indigo-500`}
                id={`filter-${option.label}-${option.value}-${option.id}`}
                checked={option.value === filterState[id].name}
                name={`${option.label}`}
                value={option.value}
                onChange={(e) => handleCheckbox(e.target.value)}
              />
              <label htmlFor={`filter-${option.label}-${option.id}`} className={`ml-3 flex-1 text-gray-500`}>
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default FilterOptions
