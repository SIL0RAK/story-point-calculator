export enum Criteria {
    Uncertainty = 'uncertainty',
    Complexity = 'complexity',
    Effort = 'effort',
}

export const MESSAGES: Record<number, string> = {
  1: 'Easy',
  2: 'Not great not terrible',
  3: 'This is some serious task',
  5: 'This is big one',
  8: 'Monster',
  13: 'Are you kidding me'
}

export const SCORE_MAP: Record<string, number> = {
  111: 1,
  112: 2,
  113: 5,

  121: 2,
  122: 3,
  123: 5,

  131: 3,
  132: 5,
  133: 8,

  211: 3,
  212: 5,
  213: 8,

  221: 5,
  222: 5,
  223: 8,

  231: 5,
  232: 8,
  233: 13,

  311: 3,
  312: 5,
  313: 8,

  321: 8,
  322: 5,
  323: 13,

  331: 8,
  332: 13,
  333: 13
}
