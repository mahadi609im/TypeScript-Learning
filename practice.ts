type UserType = {
  name: string;
  age: number;
  email: string;
};

const user: UserType = {
  name: 'Mahadi',
  age: 25,
  email: 'mahadi@example.com',
};

type ProductType = {
  title: string;
  price: number;
  brand: string;
};

const product: ProductType = {
  title: 'Laptop',
  price: 75000,
  brand: 'Dell',
};

type FoodType = {
  foodName: string;
  foodPrice: number;
  isAvailable: boolean;
};

const food: FoodType = {
  foodName: 'Burger',
  foodPrice: 250,
  isAvailable: true,
};

const getKeyOfObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result = getKeyOfObj(food, 'foodPrice');
