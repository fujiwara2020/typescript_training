export {};

// intersection型、既存の型を再利用して新たな型を定義する
// & で使って結んでいく
type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

// 新たな型を定義するパターン
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

// 既存の型を再利用するパターン、推奨
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};
