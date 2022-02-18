// import filterFilmsBySearch from '../src/filter';

const ordenarMayorMenor = (data, sort) => {
  data.sort((a, b) => Number(b[sort]) - Number(a[sort]));
  return data;
};

const ordenarMenorMayor = (data, sort) => {
  data.sort((a, b) => Number(a[sort]) - Number(b[sort]));
  return data;
};

const ordenarAZ = (data, sort) => {
  data.sort((a, b) => ((a[sort] > b[sort]) ? 1 : -1));
  return data;
};

const ordenarZA = (data, sort) => {
  data.sort((a, b) => ((a[sort] > b[sort]) ? -1 : 1));
  return data;
};

const data = [
  {
    name: 'Castle in the Sky',
    score: '95',
  },
  {
    name: 'When Marnie Was There',
    score: '90',
  },
  {
    name: 'The Cat Returns',
    score: '85',
  },
  {
    name: 'My Neighbor Totoro',
    score: '92',
  },
];

describe('ordenarMayorMenor', () => {
  it('is a function', () => {
    expect(typeof ordenarMayorMenor).toBe('function');
  });

  it('debería retornar un objeto de array ordenado de mayor a Menor', () => {
    let filtro = 'score';
    let output = [
      {
        name: 'Castle in the Sky',
        score: '95',
      },
      {
        name: 'My Neighbor Totoro',
        score: '92',
      },
      {
        name: 'When Marnie Was There',
        score: '90',
      },
      {
        name: 'The Cat Returns',
        score: '85',
      },
    ];
    expect(ordenarMayorMenor(data, filtro)).toEqual(output);
  });
});

describe('ordenarMenorMayor', () => {
  it('is a function', () => {
    expect(typeof ordenarMenorMayor).toBe('function');
  });

  it('debería retornar un objeto de array ordenado de menor a mayor', () => {
    let filtro = 'score';
    let output = [
      {
        name: 'The Cat Returns',
        score: '85',
      },
      {
        name: 'When Marnie Was There',
        score: '90',
      },
      {
        name: 'My Neighbor Totoro',
        score: '92',
      },
      {
        name: 'Castle in the Sky',
        score: '95',
      },
    ];
    expect(ordenarMenorMayor(data, filtro)).toEqual(output);
  });
});

describe('ordenarAZ', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('debería retornar un objeto de array ordenado de A a la Z', () => {
    let filtro = 'name';
    let output = [
      {
        name: 'Castle in the Sky',
        score: '95',
      },
      {
        name: 'My Neighbor Totoro',
        score: '92',
      },
      {
        name: 'The Cat Returns',
        score: '85',
      },
      {
        name: 'When Marnie Was There',
        score: '90',
      },
    ];
    expect(ordenarAZ(data, filtro)).toEqual(output);
  });
});

describe('ordenarZA', () => {
  it('is a function', () => {
    expect(typeof ordenarZA).toBe('function');
  });

  it('debería retornar un objeto de array ordenado de A a la Z', () => {
    let filtro = 'name';
    let output = [
      {
        name: 'When Marnie Was There',
        score: '90',
      },
      {
        name: 'The Cat Returns',
        score: '85',
      },
      {
        name: 'My Neighbor Totoro',
        score: '92',
      },
      {
        name: 'Castle in the Sky',
        score: '95',
      },
    ];
    expect(ordenarZA(data, filtro)).toEqual(output);
  });
});
