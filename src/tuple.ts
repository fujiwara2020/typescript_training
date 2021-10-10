export {};

// tuple型、制約が強い。配列に型の順序性を持たせる。
// 型推論で表示される共用型(Union types)では型の順序を指定できない。制約弱い。

// tuple型　型推論では表示されない
let profile: [string, number] = ['yuya', 29];
// profile = [29, 'yuy'];
// 上記は型順制約に違反しているためエラー

