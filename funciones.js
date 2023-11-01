import {contenedor} from"./selectores.js";

export const parametros = {
    nombre : ""
}

export function searchMovies(e){
    parametros.nombre = e.target.value;
    buscar();    
}

function buscar(){
    const {nombre} = parametros;

const url = 'http://www.omdbapi.com/?i=tt386198&apikey=898e8c24&s=${nombre}';
}
fetch(url)
    .then((respuesta)=>{
        return respuesta.json();


    })

    .then((data)=>{
        injectHTML(data.Search);
    })

    .catch(()=>{

    })
    Function injectHTML(card0s){
        limpiar();
        cards.forEach((cards)=>{
        const {Poster, Title, Year} = card;
        const pelicula = document.createElement('div');
        pelicula.innerHTML = 
        <div class='card' style="width: 18rem;"></div>
        })
    }