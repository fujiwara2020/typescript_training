export {};

// 引数として存在していてもいなくても問題ない引数
// ? を置くことで存在しなくても問題無しとなる
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight:number,
  printable?: boolean
): number => {
  const bmi:number = weight / (height * height);

  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.65, 75, true);

// bmi(身長、体重、console.logで出力するかどうか?)
// bmi(1.65, 75, true); 出力する
// bmi(1.65, 75, false); 出力しない
// bmi(1.65, 75); 指定しない

// let bmi: (height: number, weight: number) => number = (
//   height: number,
//   weight:number
// ): number => weight / (height * height);

// bmi(1.65, 75);
