export const CategoryTypes = {
  men: {
    gender: 'MALE',
    accessoires: [
      'WCA02305',
      'WCA02306',
      'WCA02304',
      'WCA02303',
      'WCA02308',
      'WCA02309',
      'WCA02307',
      'WCA02301',
      'WCA02302',
    ],
    oberbekleidung: {
      hemden: ['WCA02211'],
      tShirts: ['WCA00221', 'WCA00223', 'WCA00222', 'WCA00220'],
      sweatshirts: ['WCA02222', 'WCA02223', 'WCA02224', 'WCA02221'],
    },
    unterbekleidung: {
      hosen: ['WCA02252', 'WCA02251', 'WCA02253'],
      denim: [
        'WCA02246',
        'WCA02242',
        'WCA02241',
        'WCA02243',
        'WCA02245',
        'WCA02244',
      ],
    },
  },

  women: {
    gender: 'FEMALE',
    accessoires: [
      'WCA01156',
      'WCA01159',
      'WCA01155',
      'WCA01152',
      'WCA01158',
      'WCA01153',
      'WCA01157',
      'WCA01154',
    ],
    oberbekleidung: {
      blusen: ['WCA00122', 'WCA00121'],
      tops: ['WCA00111', 'WCA00112', 'WCA00110'],
      sweatshirts: ['WCA00132', 'WCA00131'],
    },
    unterbekleidung: {
      hosen: ['WCA00172', 'WCA00173', 'WCA00171'],
      roecke: ['WCA00161', 'WCA00162', 'WCA00163'],
    },
  },
} as const;
