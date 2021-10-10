export {};

// array型は配列名にカーソルを合わして型推論を参考にする。
// array型　推奨ver
let numbers: number[] = [1, 2, 3];

// array型　非推奨ver
let numbers2: Array<number> = [1, 2, 3];

// array型　文字列
let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

// array型　二次元配列
let nijigenHairetsu: number[][] = [
  [
    50, 100
  ],
  [
    150, 300
  ]
];

// あらゆる型の混合、共用型(Union types)
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
