export {};

// void型、関数からreturn値を期待しない型
// 一般的にが関数にはreturnで値を返す
function returnNothing(): void {
  console.log("I don't return anything!");
}

console.log(returnNothing());
