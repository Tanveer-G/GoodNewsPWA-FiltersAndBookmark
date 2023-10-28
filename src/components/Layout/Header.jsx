'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AppliedFilters from './AppliedFilters'
import Logo from '../../../public/logo.png'
import AppliedFilterIcon from '../../../public/filter.svg'
import Socials from '../Navigation/Socials'

const Header = () => {
  const [showRightFilters, setShowRightFilters] = useState(false)

  return (
    <>
      <div className='w-full h-15 justify-between items-center flex flex-row px-5 py-4'>
        <Link href='/'>
          <Image src={Logo} alt='logo' width={250} height='auto' className='w-auto h-[60px] md:w-auto md:h-[70px]' />
        </Link>

        <div className='flex items-center justify-around'>
          <Socials />
          {/* Right SIde Menu button  */}
          <div
            onClick={() => setShowRightFilters(!showRightFilters)}
            className='border border-black bg-white/25 active:bg-[#fe7300] hover:bg-[#29c1c2]/90 rounded-lg w-[33px] h-[33px] flex items-center justify-center cursor-pointer ml-2'
          >
            <Image src={AppliedFilterIcon} alt='filter icon' width={28} height={32} className='svgWhite' />
          </div>
          <AppliedFilters show={showRightFilters} setShow={setShowRightFilters} />
        </div>
      </div>
    </>
  )
}
export default Header
