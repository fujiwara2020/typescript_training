export {};

// function bmi(height: number, weight: number)の後のnumberは戻り値の型
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.65, 70));
