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
  13: 'Are you kidding me',
  21: 'You need to split this up'
}

export const SCORE_MAP: Record<string, number> = {
  111: 1,
  112: 2,
  113: 5,
  114: 8,

  121: 2,
  122: 3,
  123: 5,
  124: 13,

  131: 3,
  132: 5,
  133: 8,
  134: 13,

  141: 5,
  142: 8,
  143: 13,
  144: 21,

  211: 3,
  212: 5,
  213: 8,
  214: 13,

  221: 5,
  222: 5,
  223: 8,
  224: 13,

  231: 5,
  232: 8,
  233: 13,
  234: 21,

  241: 5,
  242: 8,
  243: 13,
  244: 21,

  311: 3,
  312: 5,
  313: 8,
  314: 13,

  321: 8,
  322: 5,
  323: 13,
  324: 21,

  331: 8,
  332: 13,
  333: 13,
  334: 21,

  341: 8,
  342: 13,
  343: 13,
  344: 21,

  411: 8,
  412: 13,
  413: 13,
  414: 21,

  421: 8,
  422: 13,
  423: 13,
  424: 21,

  431: 8,
  432: 13,
  433: 13,
  434: 21,

  441: 8,
  442: 21,
  443: 21,
  444: 21,
}
