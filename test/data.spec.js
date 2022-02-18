import { filterFilmsBySearch, filterCharactersBySearch, filterLocationBySearch, filterVehiclesBySearch, ordenarMayorMenor } from '../src/filter.js';
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