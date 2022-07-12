const FilterByType = ({handleFilterByTypeClick}) => {
  return (
    <div className='w-full'>
      <p className='font-bold mb-2'>Filter By Type:</p>
      <div className='bg-gray-50 overflow-x-auto flex gap-2 p-3 text-center'>
        <p className='border py-2 px-4 rounded-md bg-green-400 cursor-pointer' onClick={handleFilterByTypeClick}>Credit</p>
        <p className='border py-2 px-4 rounded-md bg-red-400 cursor-pointer' onClick={handleFilterByTypeClick}>Debit</p>
      </div>
    </div>
  )
}

export default FilterByType