const pokemons = [
  { id: 1, name: 'Bulbasaur', types: ['Grass', 'Poison'] },
  { id: 2, name: 'Ivysaur', types: ['Grass', 'Poison'] },
  { id: 3, name: 'Venusaur', types: ['Grass', 'Poison'] },
  { id: 4, name: 'Charmander', types: ['Fire'] },
  { id: 5, name: 'Charmeleon', types: ['Fire'] },
  { id: 6, name: 'Charizard', types: ['Fire', 'Flying'] },
  { id: 7, name: 'Squirtle', types: ['Water'] },
  { id: 8, name: 'Wartortle', types: ['Water'] },
  { id: 9, name: 'Blastoise', types: ['Water'] },
  { id: 10, name: 'Caterpie', types: ['Bug'] },
  { id: 11, name: 'Metapod', types: ['Bug'] },
  { id: 12, name: 'Butterfree', types: ['Bug', 'Flying'] },
  { id: 13, name: 'Weedle', types: ['Bug', 'Poison'] },
  { id: 14, name: 'Kakuna', types: ['Bug', 'Poison'] },
  { id: 15, name: 'Beedrill', types: ['Bug', 'Poison'] },
  { id: 16, name: 'Pidgey', types: ['Normal', 'Flying'] },
  { id: 17, name: 'Pidgeotto', types: ['Normal', 'Flying'] },
  { id: 18, name: 'Pidgeot', types: ['Normal', 'Flying'] },
  { id: 19, name: 'Rattata', types: ['Normal'] },
  { id: 20, name: 'Raticate', types: ['Normal'] },
];

const forEachPokemon = function () {
  const pokemonList = [];

  pokemons.forEach((pokemon) => {
    pokemonList.push(`#${pokemon.id} ${pokemon.name} - ${pokemon.types.join(' / ')}`);
  });

  return pokemonList.join('\n');
};

console.group('=========== forEachPokemon =========== ');
console.log(forEachPokemon());
console.groupEnd();

const filterPokemons = function (type) {
  return pokemons
    .filter((pokemon) => pokemon.types.includes(type))
    .map((pokemon) => pokemon.name)
    .sort();
};

console.group('=========== filterPokemons =========== ');
console.log(filterPokemons('Fire'));
console.log(filterPokemons('Normal'));
console.log(filterPokemons('Poison'));
console.groupEnd();

const searchPokemons = function (searchTerm) {
  const query = searchTerm.toLowerCase();

  return pokemons.filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().includes(query);
    const typeMatch = pokemon.types.some((type) =>
      type.toLowerCase().includes(query),
    );

    return nameMatch || typeMatch;
  });
};

console.group('=========== searchPokemons =========== ');
console.log(searchPokemons('Wartortle'));
console.log(searchPokemons('pidgey'));
console.log(searchPokemons('bug'));
console.groupEnd();

const reducePokemons = pokemons.reduce((typeCounts, pokemon) => {
  pokemon.types.forEach((type) => {
    typeCounts[type] = (typeCounts[type] || 0) + 1;
  });

  return typeCounts;
}, {});

console.group('=========== reducePokemons =========== ');
console.log(reducePokemons);
console.groupEnd();