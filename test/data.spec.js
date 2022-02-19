import {
  filterFilmsBySearch, filterCharactersBySearch, filterLocationBySearch, filterVehiclesBySearch,
  ordenarMayorMenor, ordenarMenorMayor, ordenarAZ, ordenarZA,
} from '../src/filter.js';
import data from '../src/data/ghibli/ghibli.js';

describe('filterFilmsBySearch', () => {
  it('debería ser una función', () => {
    expect(typeof filterFilmsBySearch).toBe('function');
  });

  it("debería retornar Kiki's Delivery Service para `kiki`", () => {
    const res = filterFilmsBySearch(data.films, 'kiki');

    expect(res).toStrictEqual([data.films[2]]);

    expect(res.length).toEqual(1);
    expect(res[0].id).toEqual('ea660b10-85c4-4ae3-8a5f-41cea3648e3e');
    expect(res[0].title).toEqual('Kiki\'s Delivery Service');
  });
});

describe('filterCharactersBySearch', () => {
  it('debería ser una función', () => {
    expect(typeof filterCharactersBySearch).toBe('function');
  });

  it('debería retornar jiji para jiji', () => {
    expect(filterCharactersBySearch(data.films, 'jiji')).toStrictEqual([data.films[2].people[1]]);
  });
});

describe('filterLocationBySearch', () => {
  it('debería ser una función', () => {
    expect(typeof filterLocationBySearch).toBe('function');
  });

  it('debería retornar Ingary para inga', () => {
    expect(filterLocationBySearch(data.films, 'inga')).toStrictEqual([data.films[12].locations[0]]);
  });
});

describe('filterVehiclesBySearch ', () => {
  it('debería ser una función', () => {
    expect(typeof filterVehiclesBySearch).toBe('function');
  });

  it('debería retornar "Howl\'s castle" para castle', () => {
    expect(filterVehiclesBySearch(data.films, 'castle')).toStrictEqual([data.films[12].vehicles[0]]);
  });
});

describe('ordenarMayorMenor', () => {
  it('is a function', () => {
    expect(typeof ordenarMayorMenor).toBe('function');
  });
});

const dataObjeto = [{
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
    let output = [{
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
    expect(ordenarMayorMenor(dataObjeto, filtro)).toEqual(output);
  });
});

describe('ordenarMenorMayor', () => {
  it('is a function', () => {
    expect(typeof ordenarMenorMayor).toBe('function');
  });

  it('debería retornar un objeto de array ordenado de menor a mayor', () => {
    let filtro = 'score';
    let output = [{
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
    expect(ordenarMenorMayor(dataObjeto, filtro)).toEqual(output);
  });
});

describe('ordenarAZ', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('debería retornar un objeto de array ordenado de A a la Z', () => {
    let filtro = 'name';
    let output = [{
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
    expect(ordenarAZ(dataObjeto, filtro)).toEqual(output);
  });
});

describe('ordenarZA', () => {
  it('is a function', () => {
    expect(typeof ordenarZA).toBe('function');
  });

  it('debería retornar un objeto de array ordenado de A a la Z', () => {
    let filtro = 'name';
    let output = [{
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
    expect(ordenarZA(dataObjeto, filtro)).toEqual(output);
  });
});
