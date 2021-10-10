export {};

// 型エイリアス(type aliases)
// type 別名 = 型;、=が必要
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'yuya',
  age: 29
};

type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'yuya',
  age: 29
};

type Profile2 = typeof example1;
