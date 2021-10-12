export {};

//default-parameters 初期値をセットする。
// rate: number = 1.1 とすることで引数無ければデフォルトでrate1.1をセットする。

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
