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

const user6: {
  userId: number;
  name: string;
  age: number;
} = {
  userId: 1,
  name: 'Mahadi',
  age: 30,
};

const { userId: studentId } = user6;
// const { userId: string } = user6; // Kora thik hobe na karon eta destructuring

console.log(studentId);

// union types vs intersection types

/*
// union types

 mane string oo hote pare data abar number oo hote pare
 */
const unionData: string | number = 23;

// example
type PaymentMethodType = 'Bkash' | 'Nagad' | 'Bank';

const payment = (paymentGetway: PaymentMethodType) => {
  console.log('Paying using', paymentGetway);
};

payment('Bkash');
// payment('Upay'); //uporer 3 tar theke ekta houar uchit

/*
// intersection types

 mane string oo hote pare data abar number oo hote pare
 */

type ProfileType = {
  userId: number;
  name: string;
  email: string;
  profilePic?: null;
};

type EmployeeType = {
  EmpId: number;
  role: 'User' | 'admin';
  nationalId: number;
};

const user7: ProfileType & EmployeeType = {
  userId: 3403,
  name: 'Mahadi',
  email: 'maha609im@gmail.com',
  EmpId: 34,
  role: 'User',
  nationalId: 34334334343,
};

// or
type UserProfileType = ProfileType & EmployeeType;

const user8: UserProfileType = {
  userId: 3403,
  name: 'Mahadi',
  email: 'maha609im@gmail.com',
  EmpId: 34,
  role: 'User',
  nationalId: 34334334343,
};

// same same but different => ? / ??

const yourAge = 20;

const result = yourAge >= 21 ? 'biye' : 'shishu';

console.log(result);

const userProfile: string | null = 'Mahadi';

const result2 = userProfile ?? 'Guest';

console.log(result2);

//interface extends

interface IStudent {
  name: string;
  roll: number;
  classYear: string;
}

interface IStudentFullData extends IStudent {
  passYear: number;
  subject: string[];
}

const student1: IStudentFullData = {
  name: 'Mahadi',
  roll: 34,
  classYear: 'Inter first',
  passYear: 2028,
  subject: ['Math', 'Higher Math'],
};
