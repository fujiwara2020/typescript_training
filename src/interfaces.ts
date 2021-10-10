export {};

type ObjectType = {
  name: string;
  age: number;
};

// interface
// objectの型を付けることが可能、=は不要。
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'yuya',
  age: 29
};
