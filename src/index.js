const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works
const allPokemons = () => {for (let element of pokemons){
  console.log(element)
}}
allPokemons()

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.

let pokPikachu = {
  name : "Pikachu",
  color: "yellow",
  amoutOfLegs: 2,
  country: "Japan",
  strength: 32
}

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.

console.log (`${pokPikachu.name} is a electricity ${pokPikachu.color} pokeman with the strength of ${pokPikachu.strength}, from ${pokPikachu.country}`)

// 4)
// Add the property stillToCatch: true to the Pikachu object.
pokPikachu.stillToCatch = true
console.log(pokPikachu)

// 5)
// change the value of the key strength in the Pikachu object.
pokPikachu.strength = 36
console.log(pokPikachu.strength)

// 6)
// Delete a property from the Pikachu object.
delete pokPikachu.country
console.log(pokPikachu)
// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 13
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32
  },
  {
    name: "Squirtle",
    element: "water",
    strength: 25
  },
  {
    name: "Pidgey",
    element: "fly",
    strength: 30,
  },
  {
    name: "Ivysaur",
    element: "seed",
    strength: 24
  }
];

// 8)
// Print out all the NAMES of the pokemons in this new array.
//moreAboutPokemons.forEach(moreAboutPokemon => console.log(moreAboutPokemons))

let pokLen = moreAboutPokemons.length
for (let i = 0; i < pokLen; i++ ){
  console.log(moreAboutPokemons[i].name) 
  console.log (`${moreAboutPokemons[i].name} is a ${moreAboutPokemons[i].element} pokemon with ${moreAboutPokemons[i].strength}.` )
}

// for ...of 
//for (let el of pokemons)
// forEach()


// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.
