export {};

// enum型、列挙型 複数形にする
// 定義すると0から番号が振られる
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

// enumに追加
enum COLORS {
  YELLOW = '#FFFF00'
}

COLORS.YELLOW;
