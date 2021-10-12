export {};

// rest-parameter JSにもあり
//引数の数が予測できない場合、いくつでも受け入れる
// const sum = (...values:) => {
//   console.log(values);
// };
// sum(1, 2, 3, 4, 5);
// JavaScriptコード

// Array.reduce関数は配列内の値を計算する
//
const reducer = (accumulator: number, currentValue: number) => {
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
