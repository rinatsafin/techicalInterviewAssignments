const mArr = [1, [2, [3, 4, 5, 6], [7, 8, 9, [10, [11], 12]]], 13, 14, 15, [[[[16], [[17, 18], 19]]]], 20, [21, [22, [23, [24, [25]]]]]];
const dArr = ["anna", "lena", "lena", "lena", "lena", "ivan", "anna", "lena", "petya", "petya", "vasya", "vasya", "vasya", "vasya", "vasya"];
const nArr = [1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 9 , 9, 10];
// что написал своими силами без гугла, аналогично вторая функция, без подсказок, но с debugg'om
const getFlatArray = arr =>  {
  if (!Array.isArray(arr)) return;
  const result = [];
  const makeFlatArray = arr => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (Array.isArray(arr[i])) makeFlatArray(arr[i]);
      else result.push(arr[i]);
    }
  }
  makeFlatArray(arr);
  return result;
}
const getUniqElements = elements => {
  if (!Array.isArray(elements)) return;
  const result = [];
  const checkUniq = arr => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (result.indexOf(arr[i]) < 0) result.push(arr[i]);
    }
  }
  checkUniq(elements);
  return result;
}

// какие решения я бы загуглил за минуту, в случае необходимости (реально первые ссылки на Stack) и немного отрефакторил под ES6, 
// ♥ когда такое в 1 строчку...
// первая задача
const flatten = arr => arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
const flArr = flatten(mArr);// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
// вторая задача
const uniqEl = dArr.filter((item, i, ar) => ar.indexOf(item) === i); // ["anna", "lena", "ivan", "petya", "vasya"]


const flatArray = getFlatArray(mArr);// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
const uniqElements = getUniqElements(dArr);// ["anna", "lena", "ivan", "petya", "vasya"]
const uniqNumElements = getUniqElements(nArr);// [1, 3, 4, 5, 6, 7, 8, 9, 10]
