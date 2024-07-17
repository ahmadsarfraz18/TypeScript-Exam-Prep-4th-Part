
// <<<<<<<<<<=============== Arrow Functions ===============>>>>>>>>>>
// <<<<<========== Basic Arrow Funcion ==========>>>>>

// Arrow function syntax: (parameters) => expression

// let basicArrowFun = () => {
//     console.log(`\nThis is the basic arrow function\n`)
// };
// basicArrowFun();

// // <<<<<========== Returning Arrow Funcion ==========>>>>>

// let returningArrowFun = () => {
//     let num1 = 45;
//     let num2 = 55;
//     return num1 + num2;
// }
// let response: number = returningArrowFun();
// console.log(response);// 1st Method.
// console.log(`\nreturningArrowFun: ${response}`); // 2nd Method.

// let arrowFun = () => {
//     let a = 22;
//     let b = 28;
//     return a - b; 
// }
// let response1: number = arrowFun()
// console.log(`\nThe returning output of is value is ${response1}\n`)

// // <<<<<========== Parameters and Arguments in Arrow Funcion ==========>>>>>

// let parametersAndArguments = (userName: string, userID: number) => {
//     return userName + " " + userID;
// }
// let response2 = parametersAndArguments("Mahar Ahmad Sarfraz", 12354)
// console.log(`\nThe output of the above code is ${response2}\n`);

// let paraAndArgu = (myFrnd: string, age: number) => {
//     return myFrnd + " " + age;
// }
// let response3 = paraAndArgu("Umair", 36);
// console.log(`${response3} is my best frnd\n`)


// // <<<<<========== Default Parameters in Arrow Funcion ==========>>>>>
// let defaPara = (Fvrtnum:number = 7) => {
//     console.log(`${Fvrtnum} is my favourite number`)
// };
// defaPara() 

// let userParameter = (myFrnd: string = "Umair Sarfraz") => {
//     console.log(`${myFrnd} is one of my frnds like big bro`);
// }
// userParameter();


// // <<<<<========== Rest Parameters in Arrow Funcion ==========>>>>>

// let myFvrtNumber = (fvrtNum: number = 2, ... evenNum: number []) => {
//     console.log(fvrtNum);
//     console.log(evenNum);
// }
// myFvrtNumber(2, 4, 6, 8, 10);


// // <<<<<========== Spread Parameters in Arrow Funcion ==========>>>>>

// let fvrtFruits = (fruit: string, ...randomFruits: string[]) => {
//     console.log(fruit);
//     console.log(...randomFruits)
// }
// fvrtFruits("Mango", "Apple", "Grapes", "Dates", "Orange")

// let myFvrtTeam = (myTeam: string, ... otherTeams: string []) => {
//     console.log(myTeam);
//     console.log(...otherTeams);
// }
// myFvrtTeam("Australia", "South Africa", "England", "New Zealand", "India", "Ireland");


// <<<<<========== Local and Global Scoop Variables ==========>>>>>

// function myFunction () {
//     let localVariable = "This is a local variable";
//     console.log(localVariable)
// }
// myFunction()

// let globalVariable: string = "This is a global variable";
// function myFuncion () {
//     console.log(globalVariable)
// }
// console.log(globalVariable)
// myFunction()

// let globalVariable = "I am global";

// function myFunction() {
//     console.log(globalVariable); // Works
// }

// console.log(globalVariable); // Works
// myFunction(); // Also works


// <<<<<========== Basic Objects in TypeScript ==========>>>>>

// let myIntro = {
//     name: "Mahar Ahmad Sarfraz",
//     age: 37,
//     profession: "SelfEmployeed",
//     email: "akjfdkajflasfjal@gmail.com",
//     address: "Sahiwal",
// }

// console.log(myIntro.email);  // 1st Method.
// console.log(myIntro ["name"]);  // 2nd Method.

// // Basic Object with annonymous type anotation.

// let myFrndBio: {
//     name: string,
//     age: number,
//     userID: number,
//     profession: string,
//     address: string
// } = {
//     name: "Umair",
//     age: 35,
//     userID: 1234,
//     profession: "Rider",
//     address: "Bahawal Nagar"
// };
// console.log(myFrndBio.userID)


// // <<<<<========== Type Aliases in TypeScript ==========>>>>>

// type IInfo = {
//     name: string,
//     age: number,
//     userID: number,
//     isStudent: boolean,
//     subject: string,
//     address: string,
// }
// let user1: IInfo = {
//     name: "Mahar",
//     age: 37,
//     userID: 4524,
//     isStudent: true,
//     subject: "TypeScript",
//     address: "Karachi Pakistan"
// };

// console.log(user1.isStudent)

// // Literal Type...

// let biryaniRecepie: "Chicken"| "Rice" | "Spices"
// biryaniRecepie = "Rice"; // Valid.
// // biryaniRecepie = "Salt"; // Invalid.

// // Union Type...

// let cricketKit: string | number 
// cricketKit = "Bat"; // valid
// cricketKit = 123142; // valid
// // cricketKit = true;  // invalid


// Type Intersection...

let IStudent: {
    name: string;
    age: number 
};

let ITeacher: {
    name: string;
    age: number;
    experience: number;
}

let allRounder= {
    name: "Mahar",
    age: 37,
    experience: 5,
}

console.log(allRounder)