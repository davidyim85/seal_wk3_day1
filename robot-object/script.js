
// const key = 'weapon'

// const robot = {
//     name: 'bleepboop',
//     serial: 1,
//     isEvil: false,
//     [key]: 'lazers',
//     '1': 'taz',
//     ['gas tank']: 'Full',
//     'gas tank2': 'Full',
//     speak: () => { console.log('exterrminate!')},
//     attack: function(){ console.log(this.name)},
//     saySerialNum: function(){ console.log(this.serial)},
// }

// //these are the same results
// // console.log(
// //     robot['weapon'],
// //     robot[key],
// //     robot.weapon,
// // );

// // robot.speak() //bleepboop
// //robot.saySerialNum() //1


//factory function pattern. 
//here we have a function that can create an army
//but we have invoke the build method for add to the army array
// const RobotEmpire = {
//     build: function () {
//         this.army.push({
//             name: `Robot soldier ${this.army.length}`,
//             serial: `${this.army.length}`,
//         })
//     },
//     army: [],
// }
// // console.log(RobotEmpire.army) ///
// RobotEmpire.build()
// RobotEmpire.build()
// RobotEmpire.build()
// // console.log(RobotEmpire.army)
// RobotEmpire.build()

// // console.log(RobotEmpire.army)


// console.log(RobotEmpire.army)


// //destructing. 
// //we can only this for objects. 
// //here is an example
// const { army } = RobotEmpire;
// console.log(army)




// //destructing. 
// const brokenRobot = {
//     part1: "arm",
//     part2: "lazer",
//     part3: "wheels"
// }
// const { part1 } = brokenRobot;
// console.log(part1)

// const { part2 } = brokenRobot;
// // const part2 = brokenRobot.part2 same as above
// console.log(part2)

// // in conclusion destructuring is shorthand
// // const { part1, part2, part3 } = brokenRobot;
// // IS THE SAME as SAYING
// // const part1 = brokenRobot.part1
// // const part2 = brokenRobot.part2
// // const part3 = brokenRobot.part3