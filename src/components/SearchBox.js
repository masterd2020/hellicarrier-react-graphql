const SearchBox = ({handleSearch}) => {
  return (
    <div className="w-full my-8">
        <input type='text' className='border-2 p-3 w-full rounded-md' placeholder='Type your search term' onChange={handleSearch}/>
    </div>
  )
}

export default SearchBox;