import { useNewsAppContext } from '@/context/NewsAppContext'

const NavBarItems = [
  { id: '0', name: 'Bookmark', value: 'bookmark' },
  { id: '1', name: 'Headlines', value: 'headlines' },
  { id: '2', name: 'Archive', value: 'everything' }
]

const NavBar = () => {
  // const router = useRouter()
  const { activeTab, setActiveTab } = useNewsAppContext()

  const activeTabHandler = (tab = '0') => {
    setActiveTab(tab)
    const newRoute = `/${tab != 3 ? NavBarItems[tab].value : 'advertisements'}/${tab}`
    window.history.replaceState('', '', newRoute)
  }

  const getButtonClass = (tabId) =>
    `py-[0.35rem] px-3 font-semibold bg-black/30 hover:bg-black/50 rounded-b-md transition-all ease-in-out duration-500 delay-100 border-b-4 ${
      activeTab === tabId ? 'border-[#fe7300] text-[#ffab1a]' : 'border-transparent'
    }`

  return (
    <div className='bg-[#29c1c2]/90 flex justify-around shadow-lg shadow-gray-500/40 md:shadow-indigo-500/40'>
      <button onClick={() => activeTabHandler('3')} className={getButtonClass('3')}>
        <b className='font-bold text-3xl text-[#ffab1a]'>&#9733;</b>
      </button>

      {NavBarItems.map(({ id, name }) => (
        <button key={id} onClick={() => activeTabHandler(id)} className={getButtonClass(id)}>
          {name}
        </button>
      ))}
    </div>
  )
}
export default NavBar
