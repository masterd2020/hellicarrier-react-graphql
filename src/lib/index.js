const groupedToArray = (data) => {
  let newData = []

  for (let s of Object.values(data)) {
    newData = [...newData, ...s]
  }

  return newData;
}

const groupedByDate = (data) => {
  let groupedByDateData = {};

  for (let d of data) {
    const {date} = d;

    if(groupedByDateData[date]) {
      groupedByDateData[date].push(d)
    } else {
      groupedByDateData[date] = [d]
    }
  }

  return groupedByDateData;
}

const filterByStatus = (data, status) => {
  let filteredByStatus = []
  
  const newData = groupedToArray(data);
  
  for (let d of newData) {
    if(d.status === status) filteredByStatus.push(d)
  }

  const dataGroupedByDate = groupedByDate(filteredByStatus)
  
  return dataGroupedByDate;
}

const filterByType = (data, type) => {
  let filteredByType = [];

  const newData = groupedToArray(data);

  for (let d of newData) {
    if(d.type === type) filteredByType.push(d)
  }
  
  const dataGroupedByDate = groupedByDate(filteredByType)

  return dataGroupedByDate;
}

const search = (data, searchTerm) => {
  let searchedResult = [];

  const newData = groupedToArray(data);
  const searchRegex = new RegExp(searchTerm, 'i')

  for (let d of newData) {
    if(searchRegex.test(d.name) || searchRegex.test(d.status) || searchRegex.test(d.type)) searchedResult.push(d)
  }
  
  const dataGroupedByDate = groupedByDate(searchedResult)

  return dataGroupedByDate;
}

export {groupedByDate, filterByStatus, filterByType, search}