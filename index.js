const pokemonContainer = document.querySelector('.pokemon-container');

// pokemons = [
//     {
//         "id": 1,
//         "name": "bulbasar",
//         "sprites": {
//             "official-artwork": {
//                 "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
//             }
//         },
//     },
//     {
//         "id": 2,
//         "name": "ivyasar",
//         "sprites": {
//             "official-artwork": {
//                 "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
//             }
//         },
//     },
//     {
//         "id": 3,
//         "name": "venusaur",
//         "sprites": {
//             "official-artwork": {
//                 "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
//             }
//         },
//     },
// ]
// displayPokemons(pokemons);

fetch("http://localhost:3000/pokemons")
    .then(response => response.json())
    .then(pokemons => displayPokemons(pokemons))


function displayPokemons(pokemons) {
    // console.log('display Pokemons')
    pokemons.forEach(pokemon => showPokemon(pokemon))
}

function showPokemon(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;

    console.log('pokemon', pokemon)

    const pokemonImage = document.createElement('img')
    pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default
    // pokemonImage.src = pokemon.sprites.front_shiny


    pokemonCard.append(pokemonName, pokemonImage);
    pokemonContainer.append(pokemonCard);
}