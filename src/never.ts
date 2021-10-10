export {};

// never型は例外を起こす型！！
// 例外によりreturn文の実行はない、呼び元に返ってこない
// 関数の中に例外を起こす場合・・・
// never型を使う！！
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

// void型はreturnされる値はないが、呼び元に返ってくる。
// never型はreturnされない。

// void型にはundefinedが含まれる
let foo: void = undefined;
// never型には値という概念がないため、undefined, nullもエラーとなる。
// let bar: never = undefined;
// let bar: never = null;

// 唯一代入できる値 never型を関数であれば代入可能
// let bar: never = error('only me!');
