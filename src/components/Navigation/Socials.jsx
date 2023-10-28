import Link from 'next/link'
import GitHub from '../../../public/github-white.svg'
import LinkedIn from '../../../public/linkedin.svg'
import Image from 'next/image'
const Socials = () => {
  return (
    <div className='flex items-center'>
      <Link
        href={'https://www.linkedin.com/in/tanveer-h1'}
        className='mx-1 bg-black/50 border border-white/50 rounded-lg hover:bg-white/25 active:bg-[#fe7300]'
      >
        <Image src={LinkedIn} alt='LinkedIn Icon and Link' width={30} height={30} />
      </Link>

      <Link
        href={'https://github.com/Tanveer-G/GoodNewsPWA-FiltersAndBookmark'}
        className='p-1 mx-1 bg-black/50 border border-white/50 rounded-lg  hover:bg-white/25 active:bg-[#fe7300]'
      >
        <Image src={GitHub} alt='GitHub Logo Icon and Link' width={26} height={26} className='p-[2px]' />
      </Link>
    </div>
  )
}

export default Socials
