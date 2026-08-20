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

type UserType = {
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

const user7: UserType & EmployeeType = {
  userId: 3403,
  name: 'Mahadi',
  email: 'maha609im@gmail.com',
  EmpId: 34,
  role: 'User',
  nationalId: 34334334343,
};

type UserProfileType = UserType & EmployeeType;

const user8: UserProfileType = {
  userId: 3403,
  name: 'Mahadi',
  email: 'maha609im@gmail.com',
  EmpId: 34,
  role: 'User',
  nationalId: 34334334343,
};
