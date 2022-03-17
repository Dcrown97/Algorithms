//Day1 practice

// var DogAge = 10;
// var DogAge = 5
// console.log(DogAge);

// var age = 5;
// let newAge = age + 1;
// console.log(newAge);
// var Dogname = "Lucky";
// console.log("The name of my dog is " + Dogname + " and the age is " + age);

//Templaing Literals

// var age = 5;
// let newAge = age + 1;
// console.log(`${newAge}`);
// var Dogname = "Lucky";
// console.log(`The name of my dog is ${Dogname} and the age is ${age}`);

// let firstName = "Oluwadarasimi";
// let lastName = "Emmanuel";
// console.log(`My fullName is ${firstName} ${lastName}`);

// let name = "Doggy";
// let age = "39";
// let newAge = parseInt(age);
// console.log(age+name);
// console.log(typeof age);
// console.log(typeof newAge);

// let balance = 200.9863787
// console.log(balance.toFixed(2));

// let dogName = "Sco,bby,doo";
// console.log(dogName.split(","));
// console.log(dogName.charAt());

// let fname = "collins"
// console.log(fname.toUpperCase());
// console.log(fname[3]);
// let newName = fname.length / 2;
// console.log(fname.charAt(newName));

// function names(fname) {
//     let newName = fname.length - 1;
//     return fname.charAt(newName).toUpperCase();
// }
// console.log(names("tolulope"));

// let fullName = "Bob is a great guy!!!"
// console.log(fullName.includes("bold"));
// console.log(fullName.replace("great", "good"));
// console.log(fullName.substring(8,13));

// let newName = fullName.split(" ");
// console.log(newName);
// let secName = newName.length / 2;
// secName = Math.floor(secName)
// console.log(newName[secName]);
// console.log(secName);

// capitalise the first letter of the last word of any sentence given to you.

// let sentences = "Bob is a great guy";
// let splitSen = sentences.split(" ");
// console.log(splitSen)
// let splitSenLen = splitSen.length - 1;
// let firstLetter = splitSen[splitSenLen];
// let fletter = firstLetter.split("");
// let word = fletter[0].toUpperCase();
// console.log(sentences.replace(fletter[0], word));


// let aboutITSkills = "ItskillsCenter is an amazing Hello company with a World of gold."

// function getHelloWorld(sentence, firstWord, secondWord) {
//     let sentenceArray = sentence.split(' ');
//     let usefulArray = [];
//     let notUsefulArray = [];

//     for (let i = 0; i < sentenceArray.length; i++) {
//         if (sentenceArray[i] == firstWord) {
//             usefulArray.push(sentenceArray[i]);
//         } else if (sentenceArray[i] == secondWord) {
//             usefulArray.push(sentenceArray[i]);
//         } else {
//             notUsefulArray.push(sentenceArray[i]);
//         }
//     }
//     return usefulArray.join(" ");
// }

// console.log(getHelloWorld(aboutITSkills, "Hello", "World"));

// let words = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
// console.log(words[2].length);


// var mostWordsFound = function (sentences) {
//     let maxlength = 0

//     for (let i = 0; i < sentences.length; i++) {

//         if (sentences[i].split(" ").length > maxlength) {
//             maxlength = sentences[i].split(" ").length
//         }

//     }

//     return maxlength

// };
// console.log("my answer", mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))

// var targetIndices = function (nums, target) {
//  let sorted =   nums.sort((a, b) => {
//         return a - b
//     })
//     for (i = 0; i < sorted.length; i++) {
//         let result = sorted.indexOf(target);
//         return result;
//     }
// };

// let nums = [2, 1, 2, 3, 5,];
// let target = 2

// console.log("sorted",targetIndices(nums, target));

// let shoppingCart = "";
// let authenticateUser = true;

// authenticateUser ? (shoppingCart = "ipad") : (shoppingCart = "empy");

// console.log("first", shoppingCart)

// let allowedUser = false;
// let age = 20;

// age >= 18 ? (allowedUser = true) : (allowedUser)
// console.log("sec", allowedUser);

// Challenge: Help Darth Vader express himself to his son!
// const mySon = "Luke";
// const parentalStatus = "father";
// const pstatus = `${mySon}, I am your ${parentalStatus}`
// console.log( pstatus);
// Use Template literals to say "Luke, I am your father"

// Challenge 1: create a conditional that logs out "Good morning!", "Good Afternoon", "Good evening!" and so on depending on the value of time (<- a variable)

// let time = 24;
// if (time <= 12) {
//     console.log("Good morning!")
// } else if (time <= 16) {
//     console.log("Good Afternoon")
// } else {
//     console.log("Good evening")
// }

// Challenge 2: Rewrite the whole thing as a switch statement

// let time = new Date().getHours();
// switch (true) {
//     case time < 12:
//         console.log("Good morning!");
//         break;
//     case time < 16:
//         console.log("Good Afternoon!");
//         break;
//     case time < 23:
//         console.log("Good evening!");
//         break;
//     default:
//         console.log("That's the time");
// }

// let realt = time < 12 ? ("Good morning!") : time < 16 ? ("Good Afternoon!") : time < 23 ? ("Good evening!") : ("That's the time");
// console.log("first", realt);

// const karma = 130;
// const isModerator = true;
// let hasEnoughKarma = false;
//  karma > 100 ? (hasEnoughKarma = true) : (hasEnoughKarma);
// console.log("first",hasEnoughKarma);

// let canUpvote = false;
// let canDelete = false;

// isModerator == true && hasEnoughKarma == true ? (canUpvote = true, canDelete = true) : (canUpvote, canDelete);

// console.log("canUpvote", canUpvote);
// console.log("canDelete", canDelete);

// function fullName(firstname, lastname ) {
//     let fname = `My fullname is ${firstname} ${lastname}`
//     return fname;
// }

// console.log(fullName("Opeyemi", "Emmanuel"));
// console.log(fullName("Oluwadarasimi", "Emmanuel"));

// function splitBill(a,b) {
//     let share = a / b;
//     return share
// }
// console.log(splitBill(10, 2))
// console.log(splitBill(16, 4))
// console.log(splitBill(350, 9))

// function number(a,b) {
//     let sum = a + b;
//     if (sum < 100) {
//         return true
//     } else {
//         return false;
//     }
// }

// console.log(number(50, 30));
// console.log(number(50, 60));
// console.log(number(20, 10));

// function basketBall(a, b) {
//     let point2 = 2;
//     let point3 = 3;
//     let finalPoint = a * point2 + b * point3;
//     return finalPoint

// }

// console.log(basketBall(1, 1));
// console.log(basketBall(7, 5));
// console.log(basketBall(38, 8));

// function calc(prob, prize, pay) {
//     let total = prob * prize
//     if (total > pay) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(calc(0.2, 50, 9));
// console.log(calc(0.9, 1, 2));
// console.log(calc(0.9, 3, 2));

// function int(a, b) {
//     let sum = a + b;
//     if (sum == 10 || a == 10 || b == 10) {
//         return true;
//     }
//     else {
//         return false
//     }
// }

// console.log(int(9, 10));
// console.log(int(9, 9));
// console.log(int(9, 1));

// function comp(a, b) {
//     let alen = a.length;
//     let blen = b.length;
//     if (alen === blen) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(comp("AB", "CD"));
// console.log(comp("ABC", "DE"));
// console.log(comp("hello", "edabit"));

// create an array that holds 3 elements
// let arr = ['toilet paper', 'bottled water', 'sanitizer'];
// let arr2 = ["a", "b", "c", "d"]
// let arr3 = ["e", "f", "g", "h"]
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let names = ["ade", "jimmy", "darasimi", "debby"]
// arr[0] = "papper  towel";
// arr.pop();
// arr.shift();
// arr.push("bleach");
// arr.unshift("hypo");

// function show() {
//     for ( let i = 0; i < arr.length; i++){
//         console.log(`Element at index ${[i]} is ${arr}`);
//     }
// }
// show();

// let arr4 = arr.concat(arr2, arr3);
// console.log(arr4);

// let fill = arr2.fill("goal", 0, arr2.length-1);
// console.log(fill);

// output = num.filter((num) => num > 7);
// console.log(output);
// result = names.filter((names) => names !== "jimmy");
// result = names.filter((names, i) => i !== 2)
// console.log(result);

// let sl = num.slice(4);
// console.log(sl);

// let del = num.splice(4,3,2,2);
// console.log(del, num);

// let variable = [];
// variable.length = 8;

// variable[0] = 1
// variable[variable.length - 1] = 13;
// variable.push(34);
// let newArr = variable.map((item, index) => {
//     if (item = undefined) {
//         return 'empty'
//     } else {
//         return item
//     }
    // if (item == null) {
    //     // return variable[index] = (index + 1) * 3;
    //     return 'n'
         
    // } else {
    //     return item;
    // }
// });
// variable.concat(newArr);
// let fill = newArr.filter((num) => num < 10);
// let sl = fill.splice(0, 2, 10, 20);
// let sli = sl.slice(3);

// console.log(newArr);


// let array = [];
// function elements (array, n=1) {
//     if (n >= 0) {
//         return array.slice(0, n);
//     } else {
//         return array = [];
//     }
// }

// console.log(elements([7, 9, 0, -2]));
// console.log(elements([],3));
// console.log(elements([7,9,0,-2],3));
// console.log(elements([7,9,0,-2],6));
// console.log(elements([7,9,0,-2],-3));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" and ");
// console.log(text);

// let nums = ["1234567"]
// let newNum = [];
// let res = nums.toString();
// for (let i = 0; i < res.length; i++){
//     let
//     return res[i] % 2;
// } if (res[i] % 2 == 0) {
//     return newNum.push(res);
// }

// console.log(newNum());

//  arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let x = 1;
// let y = 0;
// let item;
// for (let i=0; i<arr1.length; i++)
// {
//         for (let k=i; k<arr1.length; k++)
//         {
//                 if (arr1[i] == arr1[k])
//                  y++;
//                 if (x<y)
//                 {
//                   x=y;
//                   item = arr1[i];
//                 }
//         }
//         y=0;
// }
// console.log(item+" ( " +x +" times ) ");

// function swap(str) {
//     let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let LOWER = 'abcdefghijklmnopqrstuvwxyz';
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         if (UPPER.indexOf(str[i]) !== -1) {
//             result.push(str[i].toLowerCase());
//         } else if (LOWER.indexOf(str[i]) !== -1) {
//             result.push(str[i].toUpperCase());
//         } else {
//             result.push(str[i]);
//         }
//     }
//     return result.join('');
// }
// console.log(swap('The Quick Brown Fox'));

// a sample 2-D array
// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
// for (let i in arr)
// {
//    console.log("row " + i);
//    for (let j in arr[i])
//      {
//       console.log(" " + arr[i][j]);
//      }
// }

// let array = [1, 2, 3, 4, 5, 6],
//     sum = 0,
//     product = 1,
//     i;
// for (i = 0; i < array.length; i += 1) 
//    {
//     sum += array[i];
//     product *= array[i];
//     }
// console.log('Sum : ' + sum + ' Product :  ' + product);

// let names = ["orange", "banana", "orange", "apple", "cucumber", "apple"];
// let uniqueNames = getUnique(names);
// function getUnique(array){
//         var uniqueArray = [];
        
//         // Loop through array values
//         for(i=0; i < array.length; i++){
//             if(uniqueArray.indexOf(array[i]) === -1) {
//                 uniqueArray.push(array[i]);
//             }
//         }
//         return uniqueArray;
//     }
    
//     console.log(uniqueNames);






