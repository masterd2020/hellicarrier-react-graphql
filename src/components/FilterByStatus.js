const FilterByStatus = ({handleFilterByStatusClick}) => {
  return(
    <div className='w-full my-6'>
      <p className='font-bold mb-2'>Filter By Status:</p>
      <div className='bg-gray-50 overflow-x-auto flex gap-2 p-3 text-center'>
        <p className='border py-2 px-4 rounded-md bg-green-400 cursor-pointer' onClick={handleFilterByStatusClick}>Successful</p>
        <p className='border py-2 px-4 rounded-md bg-gray-400 cursor-pointer' onClick={handleFilterByStatusClick}>Pending</p>
        <p className='border py-2 px-4 rounded-md bg-red-400 cursor-pointer' onClick={handleFilterByStatusClick}>Failed</p>
      </div>
    </div>
  )
}

export default FilterByStatus