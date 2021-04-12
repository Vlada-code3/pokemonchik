import './styles.css';


fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response=>response.json())
.then(doSomeFetch)


function doSomeFetch({results, next}){
console.log(results);
results.forEach(({url}) => {
    
fetch(url)
.then(response=>response.json())
.then(render)
})



}

function render ({name, moves, sprites}){     //_______prihodit objekt kotoryj nado otrisovat i vybirajem chto nado vyvodit

 
    const ul = document.querySelector('.pokemonList')

    ul.insertAdjacentHTML('beforeend', `<li><h3>${name}</h3><img src=${sprites.front_default}><ul></ul></li>`)
}
