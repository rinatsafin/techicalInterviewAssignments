# Techical Interview Assignments
const mArr = [1, [2, [3, 4, 5, 6], [7, 8, 9, [10, [11], 12]]], 13, 14, 15, [[[[16], [[17, 18], 19]]]], 20, [21, [22, [23, [24, [25]]]]]];
const dArr = ["anna", "lena", "lena", "lena", "lena", "ivan", "anna", "lena", "petya", "petya", "vasya", "vasya", "vasya", "vasya", "vasya"];
const numArr = [1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 9 , 9, 10];

#### // что написал своими силами без гугла, аналогично вторая функция, без подсказок, но с debugg'om

const getFlatArray = arr =>  {
<br>
&nbsp;&nbsp;if (!Array.isArray(arr)) return;
<br>
&nbsp;&nbsp;const result = [];
  <br>
&nbsp;&nbsp;const makeFlatArray = arr => {
  <br>
&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0, len = arr.length; i < len; i++) {
    <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (Array.isArray(arr[i])) makeFlatArray(arr[i]);
      <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else result.push(arr[i]);
      <br>
&nbsp;&nbsp;&nbsp;&nbsp;}
    <br>
&nbsp;&nbsp;}
<br>&nbsp;&nbsp;makeFlatArray(arr);
<br>&nbsp;&nbsp;return result;
<br>}

const getUniqElements = elements => {
<br>
&nbsp;&nbsp;if (!Array.isArray(elements)) return;
  <br>
&nbsp;&nbsp;const result = [];
  <br>
&nbsp;&nbsp;const checkUniq = arr => {
  <br>
&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0, len = arr.length; i < len; i++) {
    <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (result.indexOf(arr[i]) < 0) result.push(arr[i]);
      <br>
&nbsp;&nbsp;&nbsp;&nbsp;}
<br>
&nbsp;&nbsp;}
<br>&nbsp;&nbsp;checkUniq(elements);
<br>&nbsp;&nbsp;return result;
<br>}
##### // какие решения я бы загуглил за минуту, в случае необходимости (реально первые ссылки на Stack) и немного отрефакторил под ES6, ♥ когда такое в 1 строчку...
// первая задача
#### const flatten = arr => arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
const flArr = flatten(mArr);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

<br>// вторая задача
#### const uniqEl = dArr.filter((item, i, ar) => ar.indexOf(item) === i); // ["anna", "lena", "ivan", "petya", "vasya"];

<br>const flatArray = getFlatArray(mArr);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
<br>const uniqElements = getUniqElements(dArr);
// ["anna", "lena", "ivan", "petya", "vasya"]
<br>const uniqNumElements = getUniqElements(nArr);
// [1, 3, 4, 5, 6, 7, 8, 9, 10]
