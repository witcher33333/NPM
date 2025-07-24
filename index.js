// var generateName = require('sillyname');
import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);
import {randomSuperhero} from 'superheroes';

const secondName = randomSuperhero();
console.log(`Also my second name is ${secondName}.`);
