const StatusBar = ({ articleLength, pages, articleStatus: status, articleTotalResults: totalResults, isLoading }) => {
  return (
    <div className='flex justify-between text-2xl mt-1 border border-transparent border-b-white/25 mx-auto px-4'>
      <div>
        <div>
          Status: {isLoading ? <b>Loading...</b> : <b className={status == 'ok' ? 'text-green-500' : 'text-red-500'}>{status || '_'}</b>}
        </div>

        <div>
          Total Results: <b>{totalResults || 0}</b>
        </div>
      </div>

      <div>
        <div>
          Pages: <b>{pages || 0}</b>
        </div>

        <div>
          Result: <b>{pages * articleLength || 0}</b>
        </div>
      </div>
    </div>
  )
}

export default StatusBar
