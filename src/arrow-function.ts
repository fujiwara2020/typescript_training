export {};

// アロー関数による型定義
// returnは省略可能
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};

console.log(bmi(1.63, 55));
