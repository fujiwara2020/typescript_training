export {};

// any型は実行時にエラー発生する可能性
// unknown型はタイプガードして型を絞りながら実装する
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// typeof 型を取得することができるキーワード
// console.log(typeof numberUnknown);

// typeofにより型を確認し、if文で一致するか検証
// 'タイプガード'という！！
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

