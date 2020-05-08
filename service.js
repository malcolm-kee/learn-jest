const { makeApiCall } = require('./api-call');

exports.getPokemonData = function getPokemonData() {
  return makeApiCall(
    'https://pokemon-json.herokuapp.com/api/pokedex?_limit=20'
  ).then((pokemons) => ({
    data: pokemons,
  }));
};
