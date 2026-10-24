
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('geef een getal in : '));
let getal2 = parseFloat(await userInput.question('geef een tweede getal in : '));

let som = getal1 + getal2;
console.log(som);



process.exit();
