// export {};によりファイルをモジュール化
// export {};がなければグローバル空間に認知されてしまい、定義済みの変数を使う可能性
export {};

let name = "typescript";

// boolean型
let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
// 上記はNGパターン、boolean型に対して整数による型違いエラー
console.log({ isFinished });
