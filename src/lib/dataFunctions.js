export const filterBySex = (data, key1, key2, option) => {
  return data.filter(character => character[key1][key2] === option);
};

export const sortByName = (data, key, option) => {
  return data.sort((a, b) => {
    if(option === 'asc'){
      return a[key] > b[key] ? 1 : -1;
    } else if (b[key] < a[key]){
      return -1;
    }
  });
};

export const sortByYear = (data, key1, key2, option) => {
  return data.sort((a, b) => {
    if(option === 'asc'){
      return a[key1][key2] - b[key1][key2];
    } else {
      return b[key1][key2] - a[key1][key2];
    }
  });
};

export const computeStats = (data, key1, key2) => {
  const year1800 = (data.filter(character => character.facts.yearOfBirth <= key1).length * 100) / data.length
  const year1900 = (data.filter(character => character.facts.yearOfBirth >= key2).length * 100) / data.length
  return [
    year1800.toFixed(1),
    year1900.toFixed(1)
  ]
}