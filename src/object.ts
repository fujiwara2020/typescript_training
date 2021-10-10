export {};

// object型、デメリットvar、制約が弱い
let profile1: object =  { name: 'yuya' };
profile1 = { birthYear: 1992 };

// object型、{}var、プロパティを指定可能
// 宣言されていないプロパティはエラーとなる。
let profile2: {
  name: string;
} = { name: 'yuya' };
profile2 = { name: 'yuy' };

// 型宣言は制約を強くする！
// そうすることで予想外のエラーを防ぐ
