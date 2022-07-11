import { useQuery } from '@apollo/client';
import {GET_TRANSACTIONS} from '../query/transaction'
import {groupedByDate, filterByStatus, filterByType, search} from '../lib'

const Home = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const dataGroupedByDate = groupedByDate(data.Transactions)
  console.log('dataGroupedByDate::', dataGroupedByDate)
  const dataFilterdByStatus = filterByStatus(dataGroupedByDate, 'pending')
  console.log('dataFilterdByStatus::', dataFilterdByStatus)
  const dataFilterdByType = filterByType(dataFilterdByStatus, 'credit')
  console.log('dataFilterdByType::', dataFilterdByType)
  const seachedWord = search(dataFilterdByType, 'e')
  console.log('seachedWord::', seachedWord)

  return (
    <div className="bg-gray-500">
      hello
    </div>
  );
}

export default Home