import data from './data/ghibli/ghibli.js';
import { GeneratorFilmsHtml, generatorOtherHtml, llenarSelector } from './utils/GeneratorFilmsHtml.js';
import { filterFilmsBySearch, filterCharactersBySearch, filterLocationBySearch, filterVehiclesBySearch, log, ordenarMayorMenor, ordenarMenorMayor, ordenarAZ, ordenarZA } from './filter.js';

const inputSearch = document.getElementById("inputSearch");
const categoria = document.querySelector('#filtrocategoria1');
const section = document.querySelector('#informacion');
const ordenarFormulario = document.querySelector('#filtroOrdenar');

// Una vez cargado el archivo HTML se ejecuta la función
document.addEventListener('DOMContentLoaded', () => {
    realizarBusqueda();
    llenarSelector('title');
});

inputSearch.addEventListener("change", function() {
    realizarBusqueda();
});

categoria.addEventListener("change", () => {
    realizarBusqueda();
});

ordenarFormulario.addEventListener("change", (e) => {
    ordenar(e);

});


const realizarBusqueda = () => {
    const categoriaValue = categoria.value;
    const searchValue = inputSearch.value;
    ordenarFormulario.innerHTML = llenarSelector(categoriaValue);
    let toHTML = ''; 

    if (categoriaValue === 'title') {
        filterFilmsBySearch(data.films, searchValue).forEach((film) => {
            toHTML += GeneratorFilmsHtml(film)
        });
        infoFiltrada = filterFilmsBySearch(data.films, searchValue);
    } else if (categoriaValue === 'people') {
        filterCharactersBySearch(data.films, searchValue).forEach((person) => {
            toHTML += generatorOtherHtml(person)
        });
        infoFiltrada = filterCharactersBySearch(data.films, searchValue);
    } else if (categoriaValue === 'locations') {
        filterLocationBySearch(data.films, searchValue).forEach((location) => {
            toHTML += generatorOtherHtml(location)
        });
        infoFiltrada = filterLocationBySearch(data.films, searchValue);
    } else if (categoriaValue === 'vehicles') {
        filterVehiclesBySearch(data.films, searchValue).forEach((vehicle) => {
            toHTML += generatorOtherHtml(vehicle)
        });
        infoFiltrada = filterVehiclesBySearch(data.films, searchValue);
    }

    section.innerHTML = toHTML;
}

let infoFiltrada = "";

const ordenar = (e) => {
    let toHTML = '';

    if(e.target.value == 'az'){
        if(categoria.value === 'title'){
            ordenarAZ(infoFiltrada, 'title').forEach((film) => {
                toHTML += GeneratorFilmsHtml(film)
            });
        }else{
            ordenarAZ(infoFiltrada, 'name').forEach((item) => {
                toHTML += generatorOtherHtml(item)
            });
        }
    }else if(e.target.value == 'za'){
        if(categoria.value === 'title'){
            ordenarZA(infoFiltrada, 'title').forEach((film) => {
                toHTML += GeneratorFilmsHtml(film)
            });
        }else{
            ordenarZA(infoFiltrada, 'name').forEach((item) => {
                toHTML += generatorOtherHtml(item)
            });
        }
    }else if(e.target.value == 'recent'){
        ordenarMayorMenor(infoFiltrada, 'release_date').forEach((film) => {
            toHTML += GeneratorFilmsHtml(film)
        });
    }else if(e.target.value == 'old'){
        ordenarMenorMayor(infoFiltrada, 'release_date').forEach((film) => {
            toHTML += GeneratorFilmsHtml(film)
        });
    }else if(e.target.value == 'lowScore'){
        ordenarMenorMayor(infoFiltrada, 'rt_score').forEach((film) => {
            toHTML += GeneratorFilmsHtml(film)
        });
    }else if(e.target.value == 'highScore'){
        ordenarMayorMenor(infoFiltrada, 'rt_score').forEach((film) => {
            toHTML += GeneratorFilmsHtml(film)
        });
    }
    
    section.innerHTML = toHTML;
}