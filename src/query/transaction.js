import { gql  } from '@apollo/client';

const GET_TRANSACTIONS = gql`
  query {
    Transactions {
      type
      name
      ID
      status
      date
    }
  }
`;

export {GET_TRANSACTIONS}