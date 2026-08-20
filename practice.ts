// rest vs spread

const arr1: number[] = [2, 4, 6, 8, 10];

const arr2: number[] = [...arr1, 1, 3, 5, 7, 9];
// const arr3: string[] = [...arr1, 1, 3, 5, 7, 9]; //Error

console.log(arr2);

const nums: number[] = [2, 4, 6, 8, 10];

const restFunc = (...numRest: number[]) => {
  const result = numRest.reduce((a, b) => a + b);
  return result;
};

console.log(restFunc(...nums));
