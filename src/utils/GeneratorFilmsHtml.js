export function GeneratorFilmsHtml(film) {
    return `
    <article>
        <div class="portada">
            <img class="img-fluid" src="${film.poster}">
        </div>
        <div class="info">
            <p class="filmName1">${film.title}</p>
            <p class="year">${film.release_date}</p>
            <p class="score">
                <svg xmlns="http://www.w3.org/2000/svg" class="star-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ${Number(film.rt_score) / 10}
            </p>
        </div>
    </article>
    `;
}

export function generatorOtherHtml(film) {
    return `
    <article>
        <div class="portada">
        <img class="img-fluid" src="${film.img}">
        </div>
        <div class="info">
            <p class="name">${film.name}</p>
            <p class="filmName2">${film.title}</p>
        </div>
    </article>
            `;
}

export function llenarSelector(filtro) {
    if (filtro === 'title') {
        return `
            <option value="" selected disabled hidden>Sort by</option>
            <option name="title" value="az">A-Z</option>
            <option name="title" value="za">Z-A</option>
            <option name="release_date" value="mayorMenor">Recent</option>
            <option name="release_date" value="menorMayor">Old</option>
            <option name="rt_score" value="mayorMenor">High-score</option>
            <option name="rt_score" value="menorMayor">Low-score</option>
        `;
    }
    return `
            <option value="" selected disabled hidden>Sort by</option>
            <option name="name" value="az">A-Z</option>
            <option name="name" value="za">Z-A</option>
        `;
}

export function llenarModal(infoElemento, categoria) {
    let info = '';
    if (categoria === 'title') {
        const {
            description,
            director,
            poster,
            producer,
            release_date: releaseDate,
            rt_score: rtScore,
            title,
            people,
            locations,
            vehicles,

        } = infoElemento;

        let htmlPeople = '';
        people.forEach(person => {
            htmlPeople += `
                <div>  
                <img class="img-fluid" src="${person.img}">
                <p class="">${person.name}</p>
                </div>
            `;
        });

        let htmlLocations = '';
        locations.forEach(location => {
            htmlLocations += `
                <div>  
                <img class="img-fluid" src="${location.img}">
                <p class="">${location.name}</p>
                </div>
            `;
        });

        let htmlVehicles = '';
        vehicles.forEach(vehicle => {
            htmlVehicles += `
                <div>  
                <img class="img-fluid" src="${vehicle.img}">
                <p class="">${vehicle.name}</p>
                </div>
            `;
        });

        info = `
        <article class="article">
            <div class="portada">
                <img class="img-fluid" src="${poster}">
            </div>
            <div class="infoPeli">
                <p class="title">${title}</p>
                <div class="year-score"
                    <p class="year">${releaseDate}</p>
                    <p class="score">
                        <svg xmlns="http://www.w3.org/2000/svg" class="star-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        ${Number(rtScore) / 10}
                    </p>
                </div>
            </div>
        </article>
    
        <div class="description">
            <p class="">${description}</p>
        </div>
        <div class="linea"></div>
        <div class="director-productor">
            <p class="">Director: ${director}</p>
            <p class="">Producer: ${producer}</p>
        </div>
        <div class="linea"></div>
        <p>Personajes</P>
        <div class="grid-personajes">${htmlPeople}</div>
        <div class="linea"></div>
        <p>Locations</p>
        <div class="grid-locations">${htmlLocations}</div>
        <div class="linea"></div>
        <p>Vehicles</p>
        <div class="grid-vehicles">${htmlVehicles}</div>
       
            `;
    } else if (categoria === 'people') {
        const {
            age,
            eye_color: eyeColor,
            gender,
            hair_color: hairColor,
            img,
            name,
            specie,
            title,
        } = infoElemento;
        info = `
        <p class="name-person">${name}</p>
        <p class="">${title}</p>
        <img class="img-fluid" src="${img}">
        <p class="">Specie: ${specie}</p>
        <p class="">Gender: ${gender}</p>
        <p class="">Age: ${age}</p>
        <p class="">Eye color: ${eyeColor}</p>
        <p class="">Hair color: ${hairColor}</p> 
            `;
    } else if (categoria === 'locations') {
        const {
            climate,
            img,
            name,
            surface_water: surfaceWater,
            terrain,
            title,
        } = infoElemento;
        info = `
        <p class="name-location">${name}</p>
        <p class="">${title}</p>
        <img class="img-fluid" src="${img}">
        <p class="">Climate: ${climate}</p>
        <p class="">Surface water: ${surfaceWater}</p>
        <p class="">Terrain: ${terrain}</p>
            `;
    } else if (categoria === 'vehicles') {
        const {
            description,
            img,
            length,
            name,
            pilot,
            vehicle_class: vehicleClass,
            title,
        } = infoElemento;
        info = `
        <p class="name-vehicle">${name}</p>
        <p class="">${title}</p>
        <img class="img-fluid" src="${img}">
        <p class="">Vehicle class: ${vehicleClass}</p>
        <p class="">${description}</p>
        <p class="">Length: ${length}</p>
        <p class="">Pilot: ${pilot.name}</p>
            `;
    }
    return info;
}