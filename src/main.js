import {
  GeneratorFilmsHtml,
  generatorOtherHtml,
  llenarSelector,
  llenarModal,
} from './utils/GeneratorFilmsHtml.js';
import {
  filterFilmsBySearch,
  filterCharactersBySearch,
  filterLocationBySearch,
  filterVehiclesBySearch,
  ordenarMayorMenor,
  ordenarMenorMayor,
  ordenarAZ,
  ordenarZA,
} from './filter.js';

const getData = () => {
  fetch('./data/ghibli/ghibli.json')
    .then((res) => res.json())
    .then((datos) => {
      realizarBusqueda(datos);
    })
    .catch((error) => {
      console.log(error);
    });
};

const inputSearch = document.getElementById('inputSearch');
const categoria = document.querySelector('#filtrocategoria1');
const section = document.querySelector('#informacion');
const ordenarFormulario = document.querySelector('#filtroOrdenar');

// Una vez cargado el archivo HTML se ejecuta la función
document.addEventListener('DOMContentLoaded', () => {
  getData();
});

inputSearch.addEventListener('change', () => {
  getData();
});

categoria.addEventListener('change', () => {
  getData();
});

ordenarFormulario.addEventListener('change', (e) => {
  ordenar(e);
});

const realizarBusqueda = (data) => {
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

let infoFiltrada = ''; // Al utilizar el método .sort() en las funciones para ordenar se sobreescribe el array por el ordenado

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

const cerrarX = document.querySelector('.close');
const abrir = document.querySelector('.galeria'); // Elemenos que van abrir el modal
// const modal = document.querySelector('.modal');
const modalContenedor = document.querySelector('.modal-container');
const modalContenido = document.querySelector('.modal-contenido');

abrir.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SECTION') {
    let element = e.target.closest('article'); // otra forma de accesar al elemento console.log('e.path[]:', e.path[2]);
    let indexElement = Array.from(element.parentNode.children).indexOf(element);
    let infoElemento = infoFiltrada[indexElement];

    modalContenido.innerHTML = llenarModal(infoElemento, categoria.value);
    modalContenedor.style.visibility = 'visible';
  }
});

cerrarX.addEventListener('click', () => {
  modalContenedor.style.visibility = 'hidden';
});

modalContenedor.addEventListener('click', (event) => {
  if (event.target === modalContenedor) {
    modalContenedor.style.visibility = 'hidden';
  }
});
