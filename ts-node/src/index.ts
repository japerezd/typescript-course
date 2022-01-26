// import { getPokemon } from './generics/get-pokemon';

import { Pokemon } from "./decorators/pokemon-class";

// getPokemon(4)
//     .then(pokemon => console.log(pokemon.sprites.front_default))
//     .catch(error => console.error(error))
//     .finally(() => console.log('Fin de getPokemon'));

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// charmander.savePokemonToDB(3);
charmander.publicApi = 'https://japerezd.netlify.app';
console.log(charmander)