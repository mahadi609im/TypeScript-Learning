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

const user4: IUserType = {
  userId: 1,
  name: 'Mahadi',
  age: 30,
};
