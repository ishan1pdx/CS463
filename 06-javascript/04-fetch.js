const pokemonColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#ea7ce8',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

const pokemonContainer = document.querySelector('.pokemon-container');
const loaderContainer = document.querySelector('.loader-container');
const messageContainer = document.querySelector('.message-container');
const searchInput = document.querySelector('#pokemon-search');

let pokemons = [];

const createPokemonCard = function (pokemon) {
  const card = document.createElement('article');
  card.classList.add('pokemon-card');

  const image = document.createElement('img');
  image.src = pokemon.sprites.front_default;
  image.alt = pokemon.name;

  const name = document.createElement('h2');
  name.textContent = pokemon.name;

  const typeContainer = document.createElement('div');
  typeContainer.classList.add('type-container');

  pokemon.types.forEach((typeInfo) => {
    const typeName = typeInfo.type.name;
    const type = document.createElement('span');

    type.classList.add('type-badge');
    type.textContent = typeName;
    type.style.backgroundColor = pokemonColors[typeName];

    typeContainer.append(type);
  });

  card.append(image, name, typeContainer);

  return card;
};

const displayPokemons = function (pokemonList) {
  pokemonContainer.innerHTML = '';
  messageContainer.textContent = '';

  if (pokemonList.length === 0) {
    messageContainer.textContent = 'No Pokémon matched your search.';
    return;
  }

  pokemonList.forEach((pokemon) => {
    pokemonContainer.append(createPokemonCard(pokemon));
  });
};

const searchPokemons = function (query) {
  const searchTerm = query.toLowerCase().trim();

  const filteredPokemons = pokemons.filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().includes(searchTerm);
    const typeMatch = pokemon.types.some((typeInfo) =>
      typeInfo.type.name.toLowerCase().includes(searchTerm),
    );

    return nameMatch || typeMatch;
  });

  displayPokemons(filteredPokemons);
};

const fetchPokemons = async function () {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25');
    const data = await response.json();

    const pokemonRequests = data.results.map((pokemon) => fetch(pokemon.url));
    const pokemonResponses = await Promise.all(pokemonRequests);
    const pokemonData = await Promise.all(
      pokemonResponses.map((response) => response.json()),
    );

    pokemons = pokemonData;
    displayPokemons(pokemons);
  } catch (error) {
    messageContainer.textContent = 'There was an error loading the Pokémon.';
  } finally {
    loaderContainer.classList.add('hidden');
  }
};

searchInput.addEventListener('input', (event) => {
  searchPokemons(event.target.value);
});

fetchPokemons();
