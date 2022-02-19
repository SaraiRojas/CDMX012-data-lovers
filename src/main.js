import data from './data/ghibli/ghibli.js';
import { GeneratorFilmsHtml, generatorOtherHtml, llenarSelector } from './utils/GeneratorFilmsHtml.js';
import {
  filterFilmsBySearch, filterCharactersBySearch, filterLocationBySearch,
  filterVehiclesBySearch, ordenarMayorMenor, ordenarMenorMayor, ordenarAZ, ordenarZA,
} from './filter.js';

const inputSearch = document.getElementById('inputSearch');
const categoria = document.querySelector('#filtrocategoria1');
const section = document.querySelector('#informacion');
const ordenarFormulario = document.querySelector('#filtroOrdenar');

// Una vez cargado el archivo HTML se ejecuta la función
document.addEventListener('DOMContentLoaded', () => {
  realizarBusqueda();
  llenarSelector('title');
});

inputSearch.addEventListener('change', () => {
  realizarBusqueda();
});

categoria.addEventListener('change', () => {
  realizarBusqueda();
});

ordenarFormulario.addEventListener('change', (e) => {
  ordenar(e);
});

const realizarBusqueda = () => {
  const categoriaValue = categoria.value;
  const searchValue = inputSearch.value;
  ordenarFormulario.innerHTML = llenarSelector(categoriaValue);
  let toHTML = '';

  if (categoriaValue === 'title') {
    filterFilmsBySearch(data.films, searchValue).forEach((film) => {
      toHTML += GeneratorFilmsHtml(film);
    });
    infoFiltrada = filterFilmsBySearch(data.films, searchValue);
  } else if (categoriaValue === 'people') {
    filterCharactersBySearch(data.films, searchValue).forEach((person) => {
      toHTML += generatorOtherHtml(person);
    });
    infoFiltrada = filterCharactersBySearch(data.films, searchValue);
  } else if (categoriaValue === 'locations') {
    filterLocationBySearch(data.films, searchValue).forEach((location) => {
      toHTML += generatorOtherHtml(location);
    });
    infoFiltrada = filterLocationBySearch(data.films, searchValue);
  } else if (categoriaValue === 'vehicles') {
    filterVehiclesBySearch(data.films, searchValue).forEach((vehicle) => {
      toHTML += generatorOtherHtml(vehicle);
    });
    infoFiltrada = filterVehiclesBySearch(data.films, searchValue);
  }

  section.innerHTML = toHTML;
};

let infoFiltrada = '';

const ordenar = (e) => {
  // nameOption guarda el valor del atrributo name de la opción seleccionada
  // name es el key que se ocupara como criterio para orenar el array de objetos
  let nameOption = ordenarFormulario.options[ordenarFormulario.selectedIndex].getAttribute('name');
  let toHTML = '';

  if (e.target.value === 'az') {
    if (categoria.value === 'title') {
      ordenarAZ(infoFiltrada, nameOption).forEach((film) => {
        toHTML += GeneratorFilmsHtml(film);
      });
    } else {
      ordenarAZ(infoFiltrada, nameOption).forEach((item) => {
        toHTML += generatorOtherHtml(item);
      });
    }
  } else if (e.target.value === 'za') {
    if (categoria.value === 'title') {
      ordenarZA(infoFiltrada, nameOption).forEach((film) => {
        toHTML += GeneratorFilmsHtml(film);
      });
    } else {
      ordenarZA(infoFiltrada, nameOption).forEach((item) => {
        toHTML += generatorOtherHtml(item);
      });
    }
  } else if (e.target.value === 'mayorMenor') {
    ordenarMayorMenor(infoFiltrada, nameOption).forEach((film) => {
      toHTML += GeneratorFilmsHtml(film);
    });
  } else if (e.target.value === 'menorMayor') {
    ordenarMenorMayor(infoFiltrada, nameOption).forEach((film) => {
      toHTML += GeneratorFilmsHtml(film);
    });
  }

  section.innerHTML = toHTML;
};

// Modal

const cerrar = document.querySelector('.close');
const abrir = document.querySelector('.galeria'); // Elemenos que van abrir el modal
// const modal = document.querySelector('.modal');
const modalContenedor = document.querySelector('.modal-container');

abrir.addEventListener('click', (e) => {
  if (e.target && e.target.tagName !== 'SECTION') {
    modalContenedor.style.visibility = 'visible';
  }
});

cerrar.addEventListener('click', () => {
  modalContenedor.style.visibility = 'hidden';
});
