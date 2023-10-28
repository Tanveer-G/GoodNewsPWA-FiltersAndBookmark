import { useNewsAppContext } from '@/context/NewsAppContext'

const RemoveFilterButton = ({ id, name, query }) => {
  const { updateFilterValue } = useNewsAppContext()
  const isRequiredFilter = id !== 1 && id !== 2
  const handler = (e) => {
    e.stopPropagation()
    if (isRequiredFilter) updateFilterValue(id)
  }
  return (
    <button
      disabled={!isRequiredFilter}
      className='flex items-center w-full max-w-xs justify-between capitalize mr-2 bg-white/20 rounded-full py-1 px-2.5 font-semibold cursor-pointer hover:bg-[#29c1c2]/90 active:bg-[#fe7300]'
      onClick={(e) => handler(e)}
    >
      <span className='overflow-hidden text-ellipsis whitespace-nowrap max-w-[15rem]'>
        {query.replace(/[&=]/g, '')}: {name}
      </span>
      <b className={`ml-1 text-${isRequiredFilter ? 'red' : 'green'}-500 text-3xl font-medium`}>{isRequiredFilter ? '⤫' : '🔒'}</b>
    </button>
  )
}
export default RemoveFilterButton
