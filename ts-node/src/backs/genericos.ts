// import { Hero } from './classes/Hero';
// // import { Hero as SuperHero } from './classes/Hero';
// // import * as HeroClasses from './classes/Hero';
// // import powers from './data/powers';
import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Villain, Hero } from '../interfaces';
// import { Hero } from './interfaces/hero';
// import { Villain } from './interfaces/villain';

// // const ironman = new SuperHero('Ironman', 1, 55);
// const ironman = new Hero('Ironman', 10, 55);

// console.log(ironman)
// console.log(ironman.power)

// // console.log(powers)

// printObject(123);
// printObject(new Date());
// printObject({a:1, b:2});
// printObject('Hola mundo');


// console.log(genericFunctionArrow(3.1416).toFixed(2))
// console.log(genericFunction('Hola mundo').toUpperCase())
// console.log(genericFunction(new Date()).getDate())

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130,
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);