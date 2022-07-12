import {useState} from 'react'
import { useQuery } from '@apollo/client';
import {GET_TRANSACTIONS} from '../query/transaction'
import {groupedByDate, filterByStatus, filterByType, search} from '../lib'

import SearchBox from '../components/SearchBox'
import FilterByType from '../components/FilterByType'
import FilterByStatus from '../components/FilterByStatus'

const Home = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);
  
  const [transactions, setTransactions] = useState({})
  let dataGroupedByDate
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  dataGroupedByDate = groupedByDate(data.Transactions)
  let dt = Object.keys(transactions).length === 0 ? dataGroupedByDate : transactions

  const handleFilterByTypeClick = (e) => {
    const dataFilterdByType = filterByType(dataGroupedByDate, e.target.innerHTML.toLowerCase())
    setTransactions(dataFilterdByType)
  }
  
  const handleFilterByStatusClick = (e) => {
    const dataFilterdByStatus = filterByStatus(dataGroupedByDate, e.target.innerHTML.toLowerCase())
    setTransactions(dataFilterdByStatus)
  }
  
  const handleSearch = (e) => {
    const seachedWord = search(dataGroupedByDate, e.target.value.toLowerCase())
    if(Object.keys(seachedWord).length === 0) return setTransactions({'Not Found': []})
    
    setTransactions(seachedWord)
  }

  return (
    <div className="w-9/12 mx-auto">
      <SearchBox handleSearch={handleSearch} />
      <FilterByType handleFilterByTypeClick={handleFilterByTypeClick}/>
      <FilterByStatus handleFilterByStatusClick={handleFilterByStatusClick}/>
      <div>
        {
          Object.keys(dt).map((date) => {
            return (
              <div className='mb-10' key={date}>
                <div className='font-bold mb-4'>{date === 'Not Found' ? <p className='text-center'>Your search term does not match any records</p> : new Date(date).toDateString()}</div>
                {
                  dt[date].map((item) => {
                    return (
                      <Box item={item} key={item.ID}/>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

const Box = ({item}) => {
  const {ID, name, status, type} = item

  return (
    <div className='flex gap-3 mb-4'>
      <p className='font-bold bg-green-200 rounded-md text-center px-4 py-2 w-40'>{ID}</p>
      <div className='flex w-full justify-between items-center px-3 bg-gray-50'>
        <p>{name}</p>
        <p>{status}</p>
        <p>{type}</p>
      </div>
    </div>
  )
}

export default Home