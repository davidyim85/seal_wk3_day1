
// let nums = [4,10,-2,3]
// let secondIndex = nums[2]
// console.log(secondIndex) // will be -2 because the index starts at 0

// let obj = { position: 'wide receiver', team: 'ravens'}
// let x = obj.position
// console.log(x) // will be 'wide receiver'

// console.log(nums[100]) //will be undefined. There is no such defined element at index 100 for nums
// console.log(obj.superbowlwinner) //will be undefined. There is no such property called superbowlwinner in the object called obj


// let arrofobjs = [
//         { position: 'wide receiver', team: 'ravens'}, //a
//         { position: 'wide receiver', team: 'ravens'}, //b
//         { position: 'wide receiver', team: 'ravens'}, //c
//         { position: 'wide receiver', team: 'ravens'}, //d
//     ]

// console.log(arrofobjs[2]) //will be loging C. 
// console.log(arrofobjs[2].team) //will be ravens
// console.log(arrofobjs[100]) //undefined
// console.log(arrofobjs[100].superbowlwinner) //we cannot log the property of something that is undefined. we know that arrofobjs[100] is undefined

////////////////////////////////////////////////

/*
const answer = prompt('are you leaving or arriving');
if(answer === 'ArRiving'){
    alert('Hi!')
}else if( answer.toLowerCase() === 'arriving'){
    alert('to lowercase!!!')
}else if( answer === 'leaving'){
    alert('Bye!')
}else if(answer == 1){
    alert('one')
}else{
    alert('you must type ArRiving or leaving')
}
*/

////////////////////////////////////////////////

// let even = prompt('give me a number that is divisible by 2')
// // Number('abc') -> NaN
// // Number('1') -> 1
// // Number('20') -> 20
// // the Number method attempts to convert to a number. 
// // % is the modulo operator AKA the REMINDER OPERATOR
// if(Number(even) % 2 === 0){
//     alert('you know maths')
// }else {
//     alert('wow!')
// }

////////////////////////////////////////////////
// let a =  prompt('give me a number that is divisible by 2')
// while(Number(a) % 2 !== 0){
//     prompt('give me a number that is divisible by 2')
// }

// alert('you know maths')

////////////////////////////////////////////////

/*
const func1 = () => {
    console.log(1);
    func2(); //why can I call this now, even though the definition is below?
    func3();
    console.log('Finished!');
}
const func2 = () => {
    console.log(2);
    func4();
    func6();
}
const func3 = () => {
    console.log(3);
    func5();
}
const func4 = () => {
    console.log(4);
}
const func5 = () => {
    console.log(5);
}
const func6 = () => {
    console.log(6);
}
func1();
*/

//will log the following in this word. 
// 1
// 2
// 4
// 6
// 3
// 5
// Finished!

////////////////////////////////////////////////

//ORANGE GAME - text based game
//do we have an orange?
let orange = 0;
let peels = 0;

//if we have an orange, peel it 
//otherwise get an orance from the frigde 
const startGame = () => {
    if (orange > 0) {
        //peel and eventually eat myorange 
        alert('you have an orange. peel it')
        peelOrange();
    } else {
        //get an orange from the fridge
        alert('you do not have an orange, you get one from the fridge')
        getOrange();
    }
}

const getOrange = () => {
    // orange++;
    // orange+=1;
    orange = orange + 1;
    peels = 3;
    startGame();
}

const peelOrange = () => {
    //oranges have 3 peels we need to peel three times
    while(peels > 0){
        alert(`you have ${peels} peels left`)
        // alert('you have ' + peel + ' peels left')
        // peel--;
        // peel-=1;
        peels = peels -1;
    }
    //after the last peel has been peeled, we can eat it.
    eatOrange()
}

const eatOrange = () => {
    alert('orange is now peeled. you eat it.')
    //after we eat the orange we do not have an orange in our possession anymore
    orange = orange - 1;
    //we can either choose to eat more oranges or stop eating
    const eatMore = prompt('continue eating')
    if(eatMore === 'yes'){
        startGame()
    } else{
        alert('game over')
    }
}

startGame()


////////////////////////////////////////////////




