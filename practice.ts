const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const addNum = add(2, 4);
console.log(addNum);

type SubtractType = (num1: number, num2: number) => number;

const subtract: SubtractType = (num1, num2) => {
  return num1 - num2;
};

const subNum = subtract(5, 4);
console.log(subNum);
