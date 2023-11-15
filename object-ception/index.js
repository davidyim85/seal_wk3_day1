//goal:
//this section is to over how we can access properties inside an object 
//iterate over objects and arrays
// const adventurerLvlOne = {
//     name: "Timothy",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "Tums"] //the length of this array is 3
// }


// console.log(adventurerLvlOne.belongings) //["sword", "potion", "Tums"]
// console.log(adventurerLvlOne.belongings[0]) //sword
// console.log(adventurerLvlOne.superbowlwinner) //undefined
// console.log(Object.keys(adventurerLvlOne)) //object.keys is a way to list out all the properties in an object
// console.log(Object.values(adventurerLvlOne)) //object.values is a way to list out all the values in an object


// //iterating through an array using FOR LOOP
// // 1. starting at i = 0
// // 2. going all the way to i = 2
// // 3. every time a loop finishes, add 1 to i
// //  1        ;2                                      ;3
// for (let i = 0; i < adventurerLvlOne.belongings.length; i++) {
//     console.log(i) // 0,then 1, lastly 2
//     console.log(adventurerLvlOne.belongings) //["sword", "potion", "Tums"]  every time
//     console.log(adventurerLvlOne.belongings[i]) //sword, then potion, lastly Tums
// }

// const adventurerLvlTwo = {
//     name: "Timothy",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "Tums"],
//     companion: {
//         name: "Velma",
//         type: "Bat"
//     }
// }
// console.log(adventurerLvlTwo.companion) //result -> {name: "Velma", type: "Bat" }
// console.log(adventurerLvlTwo.companion.name) //result -> Velma
// console.log(adventurerLvlTwo.companion.type) //result -> Bat
// console.log(adventurerLvlTwo.companion.izzy) //result -> undefined



// const adventurerLvlThree = {
//     name: "Timothy",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "Tums"],
//     companion: {
//         '1': 'taz',
//         name: "Velma",
//         type: "Bat",
//         companion: {
//             name: "Tim",
//             type: "Parasite"
//         }
//     }
// }

// // YOU DO!!
// // What would you write to:
// // console.log Tim's type (NOT TIMOTHY. Tim and TIMOTHY are difference gosh)
// console.log('Parasite')
// console.log(adventurerLvlThree.companion.companion.type);

// console.log(adventurerLvlThree.name)
// console.log(adventurerLvlThree['name'])
// console.log(adventurerLvlThree.companion[1])
// console.log(adventurerLvlThree.companion['1'])

// function inside objects are called methods. 
// we can access them like we do for properties that are string or number or array values
//but since they are functions, we can also invoke them
// const objWithMethod = {
//     name: 'david',
//     someMethod: () => { 
//         console.log('oh hai')
//         return 'tim'
//     },
// };

// console.log(objWithMethod.name) //david
// console.log(objWithMethod.someMethod)//log of the entire function
// console.log(objWithMethod.someMethod())//log of the entire function

// objWithMethod.someMethod()



// const foo = [
//     ["0,0", "0,1", "0,2"], //0
//     ["1,0", "1,1", "1,2"], //1
//     ["2,0", "2,1", "2,2"], //2
//     100000, //3
//     [38] //4
// ];

// console.log(
//     foo[1][2], //1,2
//     foo[2][1], //2,1
//     foo[3], //100000
//     foo[4], //[38]
//     foo[4][0] //38
// )


// const fun = [
//     1,
//     "hi",
//     () => { console.log('fun');},
//     'david'
// ];


// console.log(
//     fun[0], //1
//     fun[1], //'hi'
//     fun[2], //'hi'
// )

// fun[2]

// console.log(fun[2]())


// const summonBird = () => {
//     return { color: 'blue' }
// };

// console.log(summonBird().color) //blue



// const createBag = () => {
//     return ['apple', 'banana', 'pear'];
// };

// console.log(createBag()[1]) //banana


// const generateSpell = () => {
//     return () => {
//         console.log('fireball!');
//     }
// };

// generateSpell()//returning a funciont
// generateSpell()() //actually log fireball!