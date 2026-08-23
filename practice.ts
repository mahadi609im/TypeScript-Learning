// TypeScript-এর Array generic শুধু একটি type parameter নেয়: Array<T>
type DynamicType<T> = Array<T>;

const user: DynamicType<string> = ['a', 'b', 'c'];
const userRoll: DynamicType<number> = [2, 3, 4];
const userIsActive: DynamicType<boolean> = [true, false, true];

// Example 2 // [X, Y] হলো Tuple। Array Naa
type DynamicTypes<X, Y> = [X, Y];

const data1: DynamicTypes<string, number> = ['Mahadi', 20];
const data2: DynamicTypes<string, boolean> = ['Maha', true];
const data3: DynamicTypes<number, boolean> = [3, true];
