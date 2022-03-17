    let mypenguin = {
        canfly: false,
        name: "Adeleke"
}

// console.log(`Can my penguin fly ${mypenguin.canfly? "Yes":"No"}`)

// mypenguin.sayHello= function (){
//     return `Hello my name is ${this.name}`
// }

// console.log("first", mypenguin.sayHello())

// mypenguin.favoriteFoods = ['rice', 'beans', 'yam']
// console.log(mypenguin)

// console.log(mypenguin.favoriteFoods[1]);

// let firstFavFood = mypenguin.favoriteFoods[0]
// console.log(firstFavFood)

// var lastF = mypenguin.favoriteFoods.push('chocolate');
// console.log(lastF)

// console.log(mypenguin.favoriteFoods.length);

// var lastF = "pineapple"

// console.log(mypenguin.favoriteFoods)

var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

let penguins = [gunter, ramon, fred]
// console.log(penguins[0])
let secondPenguin = penguins[1];
// console.log(penguins[2].name)
penguins.push(mypenguin);
// console.log(penguins.length)
penguins[0].canFly = true;
// console.log(penguins);
// gunter.sayHello();
// for (let i = 0; i < penguins.length; i++){
//     console.log(penguins[i].name)
// }
// for (let i = 0; i < penguins.length-1; i++){
//     penguins[i].sayHello()
// }
// for (let i = 0; i < penguins.length; i++){
//     penguins[i].numberOfFeet = 2;
// }
for (let i = 0; i < penguins.length-1; i++){
    if (penguins[i].canFly === true) {
        console.log(`${penguins[i].name} Can Fly!!`)
    }
}

Input: 
Output: [1, 2, 3, 4]

const addToArray = (num, k) => {
  let joinArr = num.join("")

  let sum = Number(joinArr) + k

  let split = sum.toString().split("")

  return split
}

let num = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3]


let k =516

console.log(addToArray(num,k))