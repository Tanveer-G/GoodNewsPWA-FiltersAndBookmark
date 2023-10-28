import { useNewsAppContext } from '@/context/NewsAppContext'
import { useRef } from 'react'
import Image from 'next/image'
import useOutsideClick from '@/hooks/useOutsideClick'
import RemoveFilterButton from '../UI/RemoveFilterButton'
import MyPic from '../../../public/tanveer.ico'

const AppliedFilters = ({ show, setShow }) => {
  const { filterState } = useNewsAppContext()
  const menuRef = useRef()

  useOutsideClick(menuRef, () => setShow(false))

  return (
    <div className='relative' ref={menuRef}>
      <div
        className={`fixed p-4 top-0 right-0 w-[25rem] h-screen bg-black/80 z-50 transition-transform ease-in-out duration-300 delay-150 overflow-hidden ${
          show ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between p-2 bg-black/50'>
          <button
            onClick={() => setShow(!show)}
            className='w-min h-min text-6xl mb-2 bg-[#020024] rounded-full p-1 hover:bg-gray-400/50 active:text-[#fe7300]'
          >
            ⤫
          </button>
          <ul
            className={`flex items-end flex-col text-[#29c1c2]/90 font-semibold
            transition-transform ease-in-out duration-500 overflow-hidden ${
              show ? 'translate-y-0 duration-500 delay-300 ' : '-translate-y-full duration-200 delay-50'
            }'`}
          >
            <li>
              <Image src={MyPic} alt='Tanveer profile pic | Developer picture' />
            </li>
            <li>Tanveer H.</li>
            <li>B.Sc Honours (CS)</li>
            <li>JS • Next • CSS • API</li>
            <li className='flex justify-center py-3 text-center text-white hover:text-[#29c1c2]/90 active:text-[#fe7f00] hover:underline '>
              <a href='https://tanveer-portfolio.vercel.app/en-US/contact'>Contact me.</a>
            </li>
          </ul>
        </div>

        <div className='border-y border-transparent py-1 mb-2 border-y-white/50 bg-[#020024]'>🝖 Applied Filters: All Tabs</div>
        {filterState
          .filter((obj) => obj.name)
          .map((data, i) => (
            <ul
              key={`applied-Filtered-id-${data.id}`}
              className={`py-2 transition-transform ease-in-out duration-500 delay-300 overflow-hidden ${
                show ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <li
                className={`transition-transform ease-in-out duration-${i}00 delay-${i}00 overflow-hidden ${
                  show ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <RemoveFilterButton id={data.id} name={data.name} query={data.prefix} />
              </li>
            </ul>
          ))}

        <ul
          className={`w-full ml-4 mb-2 bottom-0 absolute border-t border-transparent border-t-white/50 bg-[#020024]
          transition-transform ease-in-out duration-500 overflow-hidden ${
            show ? 'translate-y-0 duration-500 delay-300 ' : 'translate-y-full duration-200 delay-50'
          }
        `}
        >
          <li className='border-y border-transparent py-1 mb-2 border-y-white/50 bg-[#020024]'>&#9734; Special Thanks & Credits:</li>

          <li>
            API: <a href='https://newsapi.org'>newsapi.org</a>
          </li>
          <li>
            Logo: <a href='/'>GoodNews channel</a>
          </li>
          <li>
            Loading Spinner: <a href='https://10015.io/tools/css-loader-generator'>10015.io</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default AppliedFilters
