// Primitive type
const studentName: string = 'Mahadi';
const roll: number = 340;
const isPresent: boolean = true;
const coupon: null = null;
const deliveryCharge: undefined = undefined;

// Non-Primitive type
const foodName: string[] = ['one', 'two', 'three'];
const rollNum: number[] = [34, 34, 53, 55];
const studentData2: any[] = [34, 53, 'Mahadi'];

foodName.push('four');

// Tuple
const studentLocation: [number, number] = [33.53, 43.533];
const studentData: [string, number] = ['Mahadi', 30];

// Try
let age: number = 30;
age = 34;
// age = 'Hello'; //Error

console.log(age);

const user3: { id: number; name: string; age: number; organization: string } = {
  id: 1,
  name: 'Mahadi',
  age: 30,
};

console.log(user3);

const user1: { id: number; name: string; age: number; organization?: string } =
  {
    id: 1,
    name: 'Mahadi',
    age: 30,
  };

console.log(user1);

// এখানে 'Programming Hero' কোনো সাধারণ string type না। এটা হলো literal type। ekhane organization er man set kore dea hoise, mane ekhon etai fixed change kore onno name set kora thik naa ...organization: 'Google' ❌ Error হবে। কারণ 'Programming Hero' এখানে fixed literal value।

const user2: {
  id: number;
  name: string;
  age: number;
  organization?: 'Programming Hero';
} = {
  id: 1,
  name: 'Mahadi',
  age: 34,
};

user2.organization = 'Programming Hero';
// user2.organization = 'PHero'; //Error

console.log(user2);

// OOP a interface use korbo
interface IUserType {
  userId: number;
  name: string;
  age: number;
  organization?: 'Programming hero';
}

// Functional programming a type use korbo
type UserType = {
  userId: number;
  name: string;
  age: number;
  organization?: 'Programming hero';
};

const user5: IUserType = {
  userId: 1,
  name: 'Mahadi',
  age: 30,
};

// nicher ta evabe naa likhe type use kora valo

const food: {
  name: string;
  price: number;
} = {
  name: 'burger',
  price: 50,
};

const getFoodPrice = (food: { name: string; price: number }) => {
  return food.price;
};

console.log(getFoodPrice(food));

// evabe

type Foods = {
  name: string;
  price: number;
};

const foods: Foods = {
  name: 'burger',
  price: 50,
};

const getFoodsPrice = (food: Foods) => {
  return food.price;
};

console.log(getFoodsPrice(foods));

// rest Operator vs spread Operator

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
