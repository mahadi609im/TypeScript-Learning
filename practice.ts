const user: string[] = ['Mahadi', 'Hasan', 'Milon'];
const Roll: number[] = [1, 2, 3];
const isActive: boolean[] = [true, false, true];

const user1: Array<string> = ['Mahadi', 'Hasan', 'Milon'];
const Roll1: Array<number> = [1, 2, 3];
const isActive1: Array<boolean> = [true, false, true];

// Generic
type TypeOfFriend<T> = Array<T>;
const user2: TypeOfFriend<string> = ['Mahadi', 'Hasan', 'Milon'];
const Roll2: TypeOfFriend<number> = [1, 2, 3];
const isActive2: TypeOfFriend<boolean> = [true, false, true];
