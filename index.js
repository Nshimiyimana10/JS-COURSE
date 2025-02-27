document.querySelectorAll(".btn").forEach((button)=>{
    button.addEventListener('click', ()=>{
        alert('Clicked again')
    })
  })

 document.write("Hello JS")
 alert("Dealing with JS")
console.log("Learning Journey of JS")

console.log("Hello everyone");
console.log("Learning JS require endurance");
console.log("Let'us put our effort together");
console.log("we can achieve a lot in life")

//Single line comment

console.log("This is single line comment");

//Multi-line comment

/*console.log("This is single line comment");
console.log("This is single line comment");
console.log("This is single line comment");
console.log("This is single line comment");*/


//Variable declaration

let name ="Nshimiyimana";
 let car ="Ferari";
      car ="Limousine";/*variables declared with let and var can be re-assigned 
                          new value*/

console.log(name);
console.log(car);
const fruit ="pineapple";
console.log(fruit);
      //fruit="mango";
      /*variables declared with const can't be re-assigned 
      new value it shows error in console of the browser*/

//TAKEAWAY 4
      
//To write a string

let firstName ='John';
let lastName ="Peter";
let fullName = firstName +" "+ lastName;//string concatenation
console.log("My name is"+ " " + fullName);
//Assigning a value to variable using single quotes, double quotes or left slash
let message = 'Everyone\'s advice is to take care of his life';
    message = "Everyone's advice is to take care of his life";

//To write a a variable, we use camelCase convention
let hobbyName ="playing";
console.log(hobbyName);
//A variable can also be declared using letters/Alphabets, dollar sign($)
//and underscore(_);.
let $life_Advice = "Do hard things";
console.log($life_Advice);
//There are reserve keywords in JS which you cannot use to declare a variable.
//You cannot declare a variable like let var; let const; let async; let await;...
//You can even declare a variable and assign it a value later.

let food;
food = "indian soup"
console.log(food);


//Math operations

let num1 = 5;
let num2 = 15;
let sum = num1 + num2;
let sub= num2-num1;
let division = num2 / num1;
let multiplication = num1 * num2;

console.log(sum);
console.log(sub);
console.log(division);
console.log(multiplication);

//Math modulus

let num3 = 10;
let num4 = 3;
let remainder = num3 % num4; 

console.log(remainder);

//Implicit type conversion

let num5 = "12";
let num6 = "8";
let result1 = num5 - num6;
let result2 = num5 * num6;
let result3 = num5 + num6; // Here will be string concatenation

console.log(result1);
console.log(result2);
console.log(result3);

//Data Types

//Primitive Data types


let favorite ="meat"
let myNum = 20;
let score = true;
let quantity;
let myFriend = null;

console.log( typeof favorite);//
console.log( typeof myNum);
console.log(typeof score);
console.log(typeof quantity);
console.log(typeof myFriend);

//Array

let names =['Peter','John', 'Claude','Ben']

console.log(names);
//Array has length and it is 0 index based

let sibling = names[1]; //Array can be accessed by square brackets
console.log(sibling)


//FUNCTION

function myName(){
    console.log("My name is JEAN ")
}

myName();

function Calculation(num1, num2){
   return num1 + num2;
}

const value1 =Calculation(10, 25);
const value2 = Calculation(13, 17);
const newValue =[value1, value2];
console.log(newValue);

const meat =[20, 30, 50, 70]
const vegetables =[25, 40, 60]
    let total = 0;
    for(let i = 0; i < meat.length; i++){
        total+= meat[i]

       // console.log(total);    
    }
    


console.log(total)
console.log(vegetables)


//CODEWAR KATA ON 16 SEPT 2024 

let phrase = "I have been to Kenya since last year";
function reverseWord(){
    let reverse = phrase.split(" ").reverse().join(" ")
    console.log(reverse);
    
    return reverse   
}

reverseWord();

//To reverse a phrase without changing the position of each word
function reversePhrase(){
    let word = phrase.split(" ");
    let reverse = word.map((el) => el.split("").reverse().join(""))
    let newWord = reverse.join(" ").toString()
    console.log(newWord)
  return newWord;
}
reversePhrase()

let mySet = [1, 2, 4, 10]

let tripleNum = mySet.map((element) => element * 3);
console.log(tripleNum);

let mySum = mySet.forEach((num) => {num + 5 })
console.log(mySum);

let addition = mySet.reduce((accumulator, currentValue) =>{ 
    return accumulator + currentValue;
},0)

console.log(addition);

let arrayNum = [1,2,3,4,5,6,7];
let oddNum = arrayNum.filter((num) =>
    num % 2 === 0
)

console.log(oddNum);
let numberOne = [1,2,4,5,7,8];
let doubleNum = numberOne.map((num) =>
    num*3
)

console.log(doubleNum);
//doubling array 
//The end 

const list = new Array(1,2,3,4,5);
console.log(list);
const array =[1,2,2,3,4];
const triple = array.map((num) =>
    num > 1
);


console.log(triple);

console.log(NaN == NaN);
console.log(null == undefined);
console.log(null ===undefined);
// this is one of the primitive data types

const listNum = [1, 3, 5, 4, 7];
const squaredNum = listNum.map((number) => number**2);
console.log(squaredNum);
//Map method return a new array bcs it performs a function for each array element
//the end 

//Display the current data

let today = new Date();
let day = today.getDay();

let week = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday','Friday','Saturday'];
console.log(day);

let thisDay = week[day];
console.log(thisDay);

const hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
console.log(hour);

const time = `Today we are on ${thisDay} ${hour}:${minutes}:${seconds}`;
console.log(time);

let date = today.getDate();
console.log(date)

//Display date in this format dd/mm/yyyy

let month = today.getMonth()+1;
let year = today.getFullYear();

if(date < 10){
  date = '0' + date;
}

else{ date;
}

if(month < 10){
 month = '0' + month;
}

else{
 month
}

const firstDateFormat = `Today is ${date}/${month}/${year}`;
console.log(firstDateFormat);

//To find the area of 3 sided triangle
//Use of Heron's Formula 
const a = 5;
const b= 6;
const c = 7;
let s = (a+b+c)/2;
//let Area = Math.sqrt(s((s-a)(s-b)(s-c)));
    let Area = Math.ceil(Math.sqrt(s*((s-a)*(s-b)*(s-c))));
    console.log(Area);

//Leap year check

function checkLeapYear(year){
   if((year % 4 ==0 && year % 100 !==0) || (year % 400 ==0)){
     return console.log(`${year} is a leap year`)
   }
   else{ console.log(`sorry! ${year} is not a leap year`)
}
}

(checkLeapYear(400))

//Checking if the user input is in random numbers between 1 and 10

function checkRandomNumber(){
    let randomNumber = Math.ceil(Math.random()*10);
    console.log(randomNumber);
    let guessNum = parseInt(prompt("Enter a random number between 0 and 10"));

    if(randomNumber===guessNum){
        return console.log("Your choice is correct");

    }
    else{
        console.log("Sorry!You choose incorrect number")
    }
}

checkRandomNumber()

//program for multiplication and division

let number1 = document.getElementById("num1").value;
let number2 = document.getElementById("num2").value;
let divideBtn = document.getElementById("divide");
let multiplyBtn = document.getElementById("multiply");
console.log(number1)


    function getMultiplication(){
    let number1 = document.getElementById("num1").value;
    let myResult1 = document.getElementById("result1");
    let multiplication = number1*number2;
    multiplication = parseInt(multiplication);
    myResult1.innerHTML = "Multiplication is:" + " "+ multiplication
}



function getDivision(){ 
let number2 = document.getElementById("num2").value;
console.log(number2);
let myResult2 = document.getElementById("result2");
let division = number1/number2;
division = parseInt(division);
myResult2.innerHTML = "Division is:" + " "+ division
 }

 const Value1 = document.getElementById("value1").value;
 console.log(Value1);

 //Celcius-Fahrenheit temperature converter

 function toCelciusConvert(Fahrenheit){
       let F = Fahrenheit;
      let Celcius = (F-32)*5/9;
      Celcius = Math.ceil(Celcius);
      return Celcius;
      
 }

 function toFahrenheit(Celcius){
    let C = Celcius;
    let Fahrenheit = (C + 32)*9/5;
    Fahrenheit = Math.ceil(Fahrenheit)
    return Fahrenheit;
 }

 console.log(toCelciusConvert(100));
 console.log(toFahrenheit(250));

 //Return absolute difference

 function returnDiff(x){
  let difference = x - 13;
  if(x > 13){
  return difference *2;
  }
  else{
    return difference
  }
 }

 console.log(returnDiff(30));

 //sum of two integers 

 function sumIntegers(a,b){
  let sum = a+b;
  if(a===b){
    return sum*3;
  }
  else{
    return sum;
  }
 }

 console.log(sumIntegers(5,5));

 //Difference between a number and 19

 function getDifference(a){
  let difference = a-19;
  if(a > 19){
    return difference *3;
  }
  else{
    return difference;
  }
 }

 console.log(getDifference(30));

 //To check if one of numbers is 50 or their sum is 50
 
 function checkTheNumber(a,b,c,d){
  if((a===50||b===50||c===50||d===50)||(a+b+c+d===50)){
     return true;
  }
  else{
    return false;
  }
 }

 console.log(checkTheNumber(10,5,20,50));

 //Check range between 100 and 400

 function checkTheRange(a){
  if((a>=80 && a<=120) ||(a>=380 && a<=420)){
    return true;
  }
  else{
    return false;
  }
 }

 console.log(checkTheRange(110));

 //Check if is positive of negative

 function checkPosOrNeg(a,b){
   if((a<0 && b>=0)||(a>=0 && b<0)){
    return true;
   }

   else{
    return false;
   }
 }

 console.log(checkPosOrNeg(5,-1))

 //Add Py to the string

 function addString(string){
    //let newStr = string.slice(0,2);
   //return newStr;
   if(string.slice(0,2)==="Py"){
      return string;
   }
   else{
    return "Py"+string;
   }
 }

 console.log(addString("Python"));

 //Remove a specified character from a string
 
 function removeChar(string, char_pos){
     return string.split(char_pos).join("");
 }
console.log(removeChar("Peter", "t"))

function replaceValue(str, pos){
    return str.replace(pos, "")
}

console.log(replaceValue("application", "p"))

//Swap first and last character of a string

function swapChar(string){
 let newStr = string.slice(1,-1);
 let firstChar = string.charAt(0);
 let secondChar = string.charAt(string.length-1);
 let finalStr = secondChar + newStr + firstChar;

 return finalStr;

}

console.log(swapChar("better"));

//First string character added to the front and back

function frontBack(string){
  let firstChar = string.charAt(0);
  let newStr = firstChar + string + firstChar;
  return newStr;
}

console.log(frontBack("government"));

//To check if the number is multiple of 3 or 7

function checkMultiple(number){
    if(number % 3 === 0 || number % 7 ===0){
       return true;
    }
    else{
      return false;
   }
}
console.log(checkMultiple(16))

//To take 3 characters of a string and add them at the front and back of the original string

function threeChars(string){
let lastChars = string.slice(-3);
if(string.length >= 3){
  return lastChars + string + lastChars;
}
else{
    return string;
}
}
console.log(threeChars("banana"));

//To check if a string start with "Java"

function checkStringWith(string){
    if(string.startsWith("Java")){
      return true;
    }
   else{
    return false
   }
}
console.log(checkStringWith("JavaScript"));

//To check if two integers are in range of 50 and 99

function checkRange(a,b){
  if((a >=50 && a<=90)|| b>=50 && b <=90){
      return true;
  }
  else{
    return false
  }
}
console.log(checkRange(70, 60))

//To remove Script from the 5th position of a string

function removeScript(string){
    let firstStr = string.slice(0,4);
    let secondStr = string.slice(10);
    let newStr = firstStr + secondStr;
   if(string.slice(4,10) === "Script"){
      return newStr;
   }
   else{
    return string;
   }
}
console.log(removeScript("TypeScript"));

//To find the largest integer in pair of 3 

function findLargest(a,b,c){
  if(a>b&&a>c){
   return a;
  }
  else if(b>a&&b>c){
    return b;
  }
  else if(c>a&&c>b){
   return c;
  }
  else{
    return a||b||c
  }
}
console.log(findLargest(10,10,10));

//To find the closest number to 100 between two numbers

function closestNumber(a,b){
  if((100-a) < (100-b)){
   return a;
  }
  else if((100-b) < (100-a)){
   return b;
  }
  else{
    return "Both numbers are equal, so they're closest to 100"
  }
}
console.log(closestNumber(50,40))

//To check if two numbers are in the range of 40-60 or 70-100

function checkTwoRanges(a,b){
  if(((a>=40 && a<=60)||(b>=40 && b<=60))||((a>=70 && a<=100)||(b>=70 && b<=100))){
    return true;
  }
  else{
    return false
  }
}
console.log(checkTwoRanges(80,80))

//To find larger number in range 40&60

function largerNumber(a,b){
  if((a>=40 && a<=60) && (a>b)){
    return a;
  }
  else if((b>=40 && b<=60) && (b>a)){
    return b;
  }
  else{
    return "The number given is not in the range provided"
  }
}
console.log(largerNumber(50,20));

//To check if specified character is in the range provided

function checkCharPosition(string,char){
    if(string.charAt(1)&&string.charAt(3)===char){
      return true;
    }
    else{
        return false;
    }
}
console.log(checkCharPosition("chaha","h"));

//To check if last digit of 3 digits is the same

function checkLastDigit(a,b,c){
 let firstNum = a.toString();
 let secondNum = b.toString();
 let thirdNum = c.toString();
 if(firstNum.slice(-1) === secondNum.slice(-1) && secondNum.slice(-1) === thirdNum.slice(-1)){
   return true;
 }
 else{
    return false;
 }
}
console.log(checkLastDigit(35,226,3245));

//Convert 3 first characters in lower case

function convertChar(string){
    let remainStr = string.slice(3);
  if(string.length > 3){
    return string.slice(0,3).toLowerCase() + remainStr;
  }
  else{
    return string.toUpperCase();
  }
}
console.log(convertChar("cat"));

//To compute sum of two integers

function computeSum(num1,num2){
    let sum = num1+num2;
  if(sum >=50 && sum<=89){
     return 65
  }
  else{
    return 80
  }
}
console.log(computeSum(40, 30))

//To check if one of two integers is 8

function checkIntegerSum(a,b){
  if((a===8)||(b===8)||(a+b===8)){
   return true;
  }
  else{
    return false
  }
}
console.log(checkIntegerSum(8, 5))

//Check equality of three numbers

function checkThreeNumbers(num1,num2,num3){
     if(num1 === num2 && num2 === num3){
       return 30;
     }
     else if(((num1==num2) && num1!==num3)||((num1==num3) && num1!==num2)||((num2==num3)&&num2!==num1)){
        return 40;
     }
     else{
        return 20;
     }  
} 
console.log(checkThreeNumbers(10,10,10)) 

//To check if numbers are increasing in strict mode or soft mode

function checkStrictOrSoft(a,b,c){
  if(a<b && b<c){
    return "Given numbers are increasing in strict mode"
  }
  else{
    return "Given numbers are increasing in soft mode"
  }
}
console.log(checkStrictOrSoft(10,8,30));

//To check if two or all of the given numbers have the same rightmost digit

function checkRightMost(a,b,c){
  let num1 = a % 10;
  let num2 = b % 10;
  let num3 = c % 10;
  if(((num1==num2) && num1!==num3) 
    || ((num2===num3) && num2!==num3) 
    || ((num1==num3) && num1!==num2) 
    ||(num1==num2 && num2==num3)){
      
        return true;
  }
  else{
    return false
  }
}
console.log(checkRightMost(20,31, 22));

//check given value if it's 15

function checkGivenValue(a,b){
   if(a==15 || b==15 || (a+b==15) || (a-b==15) || (b-a==15)){
    return true;
   }
   else{
    return false;
   }
}
console.log(checkGivenValue(2,5,0))

//To check if one integer is multiple of 7 or 11

function checkMultiple(a,b){
  if((a % 7 == 0 && b % 7!==0) ||(a % 11 == 0 && b % 11!==0) ){
    return true;
  }
  else{
    return false
  }
}
console.log(checkMultiple(10,20))

//Reverse a given string

function reverseString(string){
  let newStr = string.split("").reverse().join("");
  return newStr;
}
console.log(reverseString("education"));

//Capitalize the first letter in a string

function capitalizeWord(string){
let newStr = string.split(" ");
for(let i =0; i<newStr.length;i++){
  newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
}
 return newStr.join(" ");
}
console.log(capitalizeWord("the earth revolves around the sun"))

//Second method of map method

function capWord(string){
 let newWord = string.split(" ");
 let newCap = newWord.map((word)=>
    word.charAt(0).toUpperCase() + word.slice(1)
 )
return newCap.join(" ");
}

console.log(capWord("Let us pray God as he is super power"))

//Transform given numerical value into hours and minutes

function hoursMinutes(minutes){
   let hours = Math.floor(minutes/60);
   let remainingMin = Math.ceil((minutes % 60));

   return `${minutes} minutes consists of ${hours} hours and ${remainingMin} minutes`
}
console.log(hoursMinutes(170));

//Sorting letters of a given string alphabetically

function sortingLetters(string){
   let sortWord = string.split("");
   return sortWord.sort().join("")
}
console.log(sortingLetters("education"))

//Sorting numbers of an array in ascending order

function sortingNumbers(myArray){
  let newNums = myArray.sort((a,b)=>a-b);
  return newNums;
}
console.log(sortingNumbers([10,100,25,8,1000,6]))

//To check whether a and b are separated by 3 places in a string

function checkVowels(string){
 let letterA = "a";
 let letterB = "b";
 if((string.indexOf(letterA)-string.indexOf(letterB) == 3)|| 
    (string.indexOf(letterB)-string.indexOf(letterA) == 3)){
  return true;
 }
 else{
    return "Given characters are not separated by 3 places or they are not present in given string"
 }

}
console.log(checkVowels("benadiction"));

//To count the number of vowels in a string

function countVowels(string){
  let newStr = string.toLowerCase();
  let vowels = newStr.match(/[iuoae]/g);
  return vowels.length
}
console.log(countVowels("examination"))

//To check whether a given string contains the same number of p and t

function checkVowelEquality(string){
  let letterP = string.toLowerCase().match(/[p]/g).length;
  let letterT = string.toLowerCase().match(/[t]/g).length;
  if(letterP === letterT){
     return "The number of p and t in given string is the same"
  }
  else{
    "The number of p and t in the given string is not the same "
  }
}
console.log(checkVowelEquality(" There are many pineapples in TOYOTA car"))

//String repeated n times

function repeatedStr(string, number){
   let newStr = string.repeat(number)
   return newStr;
}
console.log(repeatedStr("man",3))

//Four copies of last 3 characters of a string 

function lastCopies(string){
   let lastChars = string.slice(-3);
   if(string.length < 3){
     return "";
   }
   else{
    return lastChars.repeat(4)
   }
}
console.log(lastCopies("play"));

//Extract first half of an even string

function firstHalfStr(string){
   if(string.length % 2 ===0){
     return string.slice(0,(string.length/2))
   }
   else{
    return "The string length is not even"
   }
}
console.log(firstHalfStr("developments"))

//To remove the first and last characters from a string 

function firstAndLastChars(string){
     return string.slice(1,string.length-1)
}
console.log(firstAndLastChars("education"));

//Concatenate two strings without their first two characters 

function concatenateStr(string1,string2){
   let str1 = string1.slice(1);
   let str2 = string2.slice(1);
   return str1 + str2;
}
console.log(concatenateStr("economy","finance"));

//Move the last three string characters in the beginning

function lastThreeChars(string){
   let lastChars = string.slice(-3);
   if(string.length >=3){
     return lastChars + string;
   }
   else{
    return "string length is not yet completed"
   }
}
console.log(lastThreeChars("california"));

//Concatenate two Strings of the same length

function twoStrings(string1,string2){
    if(string1.length == string2.length){
      return string1 + string2
    }
    else if(string1.length > string2.length){
       return string1.slice(0, string2.length) + string2;
    }
      
    else if(string2.length > string1.length){
      return string1 + string2.slice(0, string1.length);
    }
}
console.log(twoStrings("m", "cat"))

//To check if string ends with Script

function checkEnd(string){
   if(string.endsWith("Script")){
      return true;
   }
   else{
    return "String does not ends with Script or the provided string length is not correct"
   }
}
console.log(checkEnd("Type"));

//To display city name if the string starts with Los or New

function cityName(string){
   if(string.startsWith("Los") || string.startsWith("New")){
       return string;
   }
   else{
    return ""
   }
}
console.log(cityName("NewYork"))

//Remove p from the string

function removeChar(string){
 if(string.startsWith("P") && string.endsWith("P")){
    return string.slice(1, string.length-1)
 }
 else if(string.startsWith("P") && !string.endsWith("P")){
  return string.slice(1)
 }
 else if(!string.startsWith("P") && string.endsWith("P")){
   return string.slice(0, string.length)
 }
 else{
    return string;
 }
}
console.log(removeChar("PenergyP"));

//create new string composed of 1 and last characters of original string

function firstLastChar(string){
  let str1 = string.charAt(0);
  let str2 = string.charAt(string.length-1);
  let newStr = str1 + str2;
  return newStr;
}
console.log(firstLastChar("London"))

//To sum up 3 numbers in an array

function threeIntegers(myArray){
   let sum = myArray.reduce((acc,curr) =>{
      return acc + curr;
   },0)
   return sum;
}
console.log(threeIntegers([10,20,30]))

function sumIntegers(myArray){
   let sum = 0;
   for(let i = 0; i<myArray.length; i++){
     sum += myArray[i];
   }
   return sum;
}
console.log(sumIntegers([10,20,5]))

//To check whether 1 appear on 1st or last position of an array

function checkArrayPos(myArray){
  if((myArray.length>=1) && (myArray[0] == 1 || myArray[myArray.length-1] == 1)){
    return true;
  }
  else{
    return false
  }
}
console.log(checkArrayPos([1,2,3,4]))

//Check if 1st and last elements are the same in an array of integers of 3

function checkTheSame(myArray){
    if((myArray.length ==3) && (myArray[0] === myArray[myArray.length-1])){
       return true 
    }
    else{
        return false
    }   
}
console.log(checkTheSame([1,2,1]))

//Reverse elements of an array

function reverseArray(myArray){
  let newArr = myArray.reverse();
  if(myArray.length == 3){
      return newArr;
  }
  else{
    return "condition not satisfied!"
  }
}
console.log(reverseArray([2,4,6]))

//To check the largest value between the first and last elements

function largerValue(myArray){
 let largeValue = Math.max(...myArray);
 let newArr = myArray.map(() => largeValue);
 return newArr;
}
console.log(largerValue([10,30,50]))
//To create an array of middle integers of an array

function middleElsArray(array1,array2){
  let arr1 = array1[1];
  let arr2 = array2[1];
  let newArr = [];
      newArr.push(arr1);
      newArr.push(arr2);
      
  return newArr;
}
console.log(middleElsArray([1,2,3],[4,5,6]));

// First and last elements of an array

function firstAndLastEls(array1){
   let el1 = array1[0];
   let el2 = array1[array1.length-1];
   let newArr = [];
       newArr.push(el1)
       newArr.push(el2)
   if(array1.length >=1){
     return newArr;
   }
   else{
    return "Array condition is not satisfied"
   }
}
console.log(firstAndLastEls([1,2,3,4]));

//To check if an array contains 1 or 3

function checkOneOrThree(array1){
   if((array1.length == 2) && (array1[0] == 1 || array1[1] == 3)){
      return true
   }
   else{
    return false
   }
}
console.log(checkOneOrThree([1,3]))

//Check whether an array contains 30 and 40 twice 

function checkDouble(array1){
  if((array1.length<=2) && ((array1[0]==30 && array1[1]==30)||(array1[0]==40 && array1[1]==40))){
     return true
  }
  else{
    return false
  }
}
console.log(checkDouble([30,30]))

//To reverse a number 

function reverseNumber(number){
    let num = number.toString().split("").reverse().join("");
    return Number(num);
}
console.log(reverseNumber(43567));
//check palindrome

function checkPalindrome(string){
  let newStr = string.split("").reverse().join("");
  if((newStr.toUpperCase()||newStr.toLowerCase()) === (string.toUpperCase()||string.toLowerCase())){
    return true;
  }
  else{
    return false
  }
}
console.log(checkPalindrome("madam"));

//To sort string alphabetically

function sortString(string){
 let newStr = string.split("").sort();
 return newStr.join("")
};
console.log(sortString("demand"))

//Capitalize each word in a string

function capitalizeWord(string){
let newStr = string.split(" ");
let capWord = newStr.map((word) =>word.charAt(0).toUpperCase() + word.slice(1)) 
return capWord.join(" ");
}
console.log(capitalizeWord("the blood of jesus is of high price"))

//To find the longest word in a string

function longestWord(string){
 let newStr = string.split(" ");
 let strLength = newStr.map((word =>word.length));
 let longIndex = Math.max(...strLength); //7
 let strIndex = strLength.indexOf(longIndex);//0
 let longWord = newStr[strIndex];
 return longWord;
}
console.log(longestWord("richest man on the planet"))

//To count vowels in a string

function countVowels(string){
 let vowels = string.match(/[iuoaeIUOAE]/g);
 return vowels.length;
}
console.log(countVowels("mAnipulation"));

//To find the second lowest and second largest number in an array

function lowestLargest(array){
    let newArr = [...new Set(array)].sort((a,b) => a-b);
    let lowest = newArr[1];
    let largest = newArr[newArr.length-2];

    return [lowest,largest];
 } 
 console.log(lowestLargest([10,40,30,15,60]));

 //Check perfect number 

 function checkPerfect(number){
    let sum = 0;
    for(let i = 1; i <= number/2; i++){
        if(number % i ===0){
          sum+= i;
        }
    }
    if(sum === number){
       return true;
    }
    else if(number <= 1){
      return "This number can not be a prime"
    }
    else{
        return false
    }
 }
 console.log(checkPerfect(30));

 //Factor of a number 

 function factorNumber(number){
   for(let i = 1; i <= number;){
     if(number % i ===0){
      return i++;
     }
   }
   return i;
 }
 console.log(factorNumber(12))

 //To find number of specified occurence of letter 

 function letterOccurence(string,letter){
      let newStr1 = string.toLowerCase();
      let newStr2 = string.split("")
      for(let i = 0; i <= newStr2.length; i++){
       if(newStr2[i] === letter){
          return `The letter ${letter} occurs ${newStr2[i].length} time(s) in this string!` 
       }
       else{
        `No ${letter} found in this string`
       }
      }
 }
 console.log(letterOccurence("education", "c"))

 //To find non-repeat character in js 

 function nonRepeat(string){
    let newStr = string.toLowerCase();
    let newStr2 = newStr.split("");
    let oneStr = [];
    for(let i = 0; i<=newStr2.length; i++){
       if(newStr2[i].length ===1 ){
          return oneStr.push(newStr2[i])
       }
       else{
        return "";
       }
    }
    return oneStr;
 }
 console.log(nonRepeat("mathematics"));

 //Longest country name
 function countryName(array){
   let newArr = array.map((num)=>num.length);
   let longIndex = Math.max(...newArr);//10
   let longInd = newArr.indexOf(longIndex);//2
   let finalWord = array[longInd];
   return finalWord;
  
 }

 console.log(countryName(["rwanda","Uganda","Tanzania","madagascar"]))

 //To display the largest integer 

 function largestInteger(array){
       largeNum = array.sort((a,b) => b-a);
       let num = largeNum[0];
       return num;
 }
 console.log(largestInteger([10,30]))
 
 //Sign of product of three numbers

 function signThreeNum(a,b,c){
    let result = a*b*c;
   if(result >= 0){
    return `The sign of ${result} is +`
   }
   return `The sign of ${result} is -`
 }
 console.log(signThreeNum(4,7,8));

 //To sort three numbers

 function sortThreeNum(array){
  let newNum = array.sort((a,b) => b-a);
  return newNum;
 }
 console.log(sortThreeNum([-5,10,15]))

 //Largest of five numbers

 function largeNumArray(array){
   let num = array.sort((a,b) => b-a)
   let num2 = num[0]
   return num2;
 }
 console.log(largeNumArray([-5,-3,0,10,6]))

 //To check odd or even number 

 function oddOrEven(){
  let result = [];
  for(let i= 0; i<=15;i++){
   if(i % 2 ===0){
     result.push(`${i} is even number`)
   }
   else{
     result.push(`${i} is odd number`)
   }
  }
  return result;
 }
 console.log(oddOrEven())

 //To find average score of marks

 function findAverage(score){
  let result = [];
  for(let i = 0; i < score.length; i++){
     if(score[i].marks >= 90 && score[i].marks <=100 ){
        result.push(`${score[i].name} got "A" grade`);
     }
     else if(score[i].marks >= 80 && score[i].marks <=89){
        result.push(`${score[i].name} got "B" grade`);
     }
     else if(score[i].marks >= 70 && score[i].marks <=79){
      result.push(`${score[i].name} got "C" grade`);
    }
    else if(score[i].marks >= 60 && score[i].marks <=69){
      result.push(`${score[i].name} got "D" grade`);
    }
    else if(score[i].marks >= 50 && score[i].marks <=59){
      result.push(`${score[i].name} got "E" grade`);
    }
    else{
      result.push(`${score[i].name} You fail`);
    }
  }
  return result
 }
 console.log(findAverage([{name: "David", marks: 80},
                          {name: "Angel", marks: 60},
                          {name: "Peter", marks: 90},
                          {name: "John",  marks: 55},
                          {name: "Chris", marks: 70}
 ]))

 //FizzBuzz

 function rangeNumbers(){
  let result = [];
  for(let i = 1; i <= 100; i++){
    if(i % 3 ===0 && i % 5 === 0){
      result.push(`${i}:FizzBuzz`);
    }
    else if(i % 3 === 0){
      result.push(`${i}:Fizz`);
    }
    else if(i % 5 === 0){
      result.push(`${i}:Buzz`);
    }
    else{
      ""
    }
  }
  return result;
 }
 console.log(rangeNumbers());

 //To find Armstrong number

 function armStrongNum(number){
  let num1 = number.toString().split(""); //["3","7","1"]
  let num2 = num1.map((el) => Math.pow(el,num1.length));
  let num3 = num2.reduce((acc,currVal) =>{
    return acc + currVal;
  },0)
  let num4 = Number(num3);
  if(num4 === number){
    return `${num4} is an Armstrong number`;
  }
  else{
    return `${num4} is not an Armstrong number`;
  }
  
 }
 console.log(armStrongNum(371))

 //To check if an input is an array

 function checkArray(input){
    if(Array.isArray(input) === true){
       return "The input value is an array"
    }
    else{
      return "The input value is not an array"
    }
 }
 console.log(checkArray([1,2,3]))

 //Cloning an array

 function cloningArray(array){
   let newArr = [...array]
   return newArr;
 }
 console.log(cloningArray([20,40,60]))

 //Getting first element of an array

 function firstElement(array){
  if(array.length <=0){
     return "This array is empty"
  }
  else{
    return array[0];
  }
 }
 console.log(firstElement([1,2,4]))

 //To join the elements of an array into one string 

 function joinArray(array){
  let newArr = array.join(" ");
  return newArr;
 }
 console.log(joinArray(["Tomato","is","good","for","life"]))

 //To insert dash in front of even number 

 function insertDash(number){
   let num1 = number.toString().split("");
   let num2 = num1.map((el) =>{ 
    if(el % 2 === 0){
      return "-" + el;
    }
  else{
    return el;
  }})
  return num2.join("")
 }
 console.log(insertDash(12487))

 //Swap case in a string

 function swapCase(string){
   let newStr = string.split("");
   let newStr2 = newStr.map((el) =>{
    if(el === el.toUpperCase()){
       return el.toLowerCase();
    }
    else{
      return el.toUpperCase();
    }
   })
   return newStr2.join("");
 }
 console.log(swapCase("The Quick Brown Fox In the River"))

 //Sum of squares in an array
 
 function sumOfSquares(array){
   let num1 = array.map((el) =>Math.pow(el,2)).reduce((acc,curr)=>{
    return acc + curr;
   },0)
   return num1;
 }
 console.log(sumOfSquares([2,4,5,12,345]))

 //Sum and product of an array integers

 function sumProduct(array){
   let result = array.reduce((acc,curr) =>{
    acc.sum+= curr;
    acc.product*= curr;
     return acc;
    
   },{sum:0, product:1})
   return result;
 }
 console.log(sumProduct([1,3,6,5]))

 //Adding elements to an empty array

 function addingEmpty(array){
    array[0] = 10;
    array[1] = 20;
    array[2] = 30;
    return array;
 }
console.log(addingEmpty([]))

//To remove duplicates from an array

function removeDuplicates(array){
  let newArr = [...new Set(array)]
  return newArr;
}
console.log(removeDuplicates([1,1,2,3,3,4,5]))

//To find a leap year in a given range 

function findReapYear(years){
  let leap = years.map((year) =>{
    if(year % 4 ==0 && year % 100 !==0 || year % 400 ==0){
       return {year: year, isLeap: true};
    }
    else{
      return {year: year, isLeap: false};
    }
  })
  return leap;
}
console.log(findReapYear([2025, 1900, 2000]))

//To return new array with the numbers added for two arrays

function returnArray(array1, array2){

  if(array1.length !==array2.length){
   throw new Error("The arrays must have equal lengths!")
  }
  return array1.map((num,index) => num + array2[index])   
}
console.log(returnArray([23,14,6,8],[-1,2,6,5]))

//To find duplicate values in an array

function findDuplicate(array){
  let newArr = array.map((el,index) =>{
    if(el[index] === el[index]){
      return el[index];
    }
    else{
      return el;
    }
  })
  return newArr;
}
console.log(findDuplicate([2,2,3,4]))

//To remove repeated integer in an array   

function checkSet(array){
 let newArr = [...new Set(array)];
 return newArr;
}
console.log(checkSet([1,2,3,4,4,3]))

//To remove falsy values 

function removeFalsyValues(array){
  let newArr = array.filter(Boolean);
  return newArr;
}
console.log(removeFalsyValues([1,0,NaN,undefined,"",2,null]))

//To merge two arrays without duplicates 

function mergeArray(array1,array2){
   let newArr = array1.concat(array2);
   return [...new Set(newArr)];
}
console.log(mergeArray([12,4,3,4,6,8],[4,3,15,7,8]))

//To generate an array between two integers 

function generateArray(num1,num2){
  let newArr = []
  for(let i = num1; i <= num2; i++){
     newArr.push(i)
  }
  return newArr;
}
console.log(generateArray(5,10))

//To find third smallest number in an array

function checkSmallestNum(array){
   let newNum = array.sort((a,b) => a -b)
   return [...new Set(newNum)][2];
}
console.log(checkSmallestNum([1,2,5,1,0,2]))

//To find the sum of numbers in a mixed array

function mixedArray(array){
  let newArr = [];
  let newNum = array.filter((el) =>{
    if(typeof el ==="number" && el % 1 === 0){
      return newArr.push(el)
    }
  })
  return newNum.reduce((acc,curr) =>{
    return acc + curr;
  },0)
  
}
console.log(mixedArray([1,2,NaN,"","abc",6]))

//To get index where NaN is found in an array

function getIndexOf(array){
    let newArr = []
    let array2 = array.filter((el,index) =>{
      if(Number.isNaN(el)){
        return newArr.push(index)
      }
    })
    return newArr;
}
console.log(getIndexOf([1,2,NaN,4,NaN]))

//To check if a given input is an array

function checkInsideArray(array){
  let newArr = [];
  for(let i = 0; i <= array.length; i++){
     if(Array.isArray(array[i])){
       newArr.push(array[i])
     }
  }
  return newArr.length;
}
console.log(checkInsideArray([1,[1,2],"good",[5,6]]))

//Button on click 

//Button.addEventListener("click", clickButton)

//function clickButton(){
  //return console.log("The button is clicked")
//}

//Change background for mouseover
let Button = document.getElementById("clickBtn");
Button.addEventListener("mouseover", changeBackGround)
Button.addEventListener("mousedown",mouseDown)

function changeBackGround(){
  let body = document.querySelector("body");
  body.style.backgroundColor = "blue";
  return body;
}
function mouseDown(){
  let body = document.querySelector("body")
  body.style.backgroundColor = "green";
  return body;
}

//Form validation APPLICATION
document.addEventListener("DOMContentLoaded", function () {
  let fName = document.getElementById("first_name");
  let lName = document.getElementById("last_name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm_password");
  let textMessage = document.getElementById("message");
  let checkboxBtn = document.getElementById("checkbox");
  let button = document.getElementById("submit_btn");
  let firstName_error = document.getElementById("firstname_error");
  let lastName_error = document.getElementById("lastname_error");
  let email_error = document.getElementById("email_error");
  let password_error = document.getElementById("password_error");
  let confirm_error = document.getElementById("confirm_error");
  let message_error = document.getElementById("message_error");
  let checkbox_error = document.getElementById("checkbox_error");
  let successMessage = document.getElementById("success_message");
  let myForm = document.getElementById("myForm");

  function formValidation(event) {

    event.preventDefault();

    let isValid = true;
    // First Name Validation
    if (fName.value.trim() === "") {
      firstName_error.innerHTML = "Please enter valid first name";
      firstName_error.style.color = "red";
      fName.style.border = "2px solid red";
      isValid = false;
    } else {
      fName.style.border = "2px solid green";
    }

    // Last Name Validation
    if (lName.value.trim() === "") {
      lastName_error.innerHTML = "Please enter valid last name";
      lastName_error.style.color = "red";
      lName.style.border = "2px solid red";
      isValid = false;
    } else {
      lName.style.border = "2px solid green";
    }

    // Email Validation
    if (email.value.trim() === "") {
      email_error.innerHTML = "Please enter valid email";
      email_error.style.color = "red";
      email.style.border = "2px solid red";
      isValid = false;
    } else {
      email.style.border = "2px solid green";
    }

    // Password Validation
    if (password.value.trim().length < 8) {
      password_error.innerHTML = "Password must be at least 8 characters";
      password_error.style.color = "red";
      password.style.border = "2px solid red";
      isValid = false;
    } else {
      password.style.border = "2px solid green";
    }

    // Confirm Password Validation
    if (password.value !== confirmPassword.value) {
      confirm_error.innerHTML = "Passwords must match";
      confirmPassword.style.border = "2px solid red";
      confirm_error.style.color = "red";
      isValid = false;
    } else {
      confirmPassword.style.border = "2px solid green";
    }

    // Message Validation
    if (textMessage.value.trim() === "") {
      message_error.innerHTML = "Please enter your message here";
      message_error.style.color = "red";
      textMessage.style.border = "2px solid red";
      isValid = false;
    } else {
      textMessage.style.border = "2px solid green";
    }

    // Checkbox Validation
    if (checkboxBtn.checked === false) {
      checkbox_error.innerHTML = "Please accept our terms and conditions";
      checkbox_error.style.color = "red";
      isValid = false
    } else {
      checkbox_error.innerHTML = ""; // Clear error message when checked
    }

    if(isValid){
     myForm.style.display ="none";
     successMessage.style.display = "block";
    }
  }
  button.addEventListener("click", formValidation)
});

//Fetching data from external API

// async function fetchDataFromApi(){
//   try{
// const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if(!response.ok){
//        throw new error("Failed to fetch the data")
//     }
//     const data = await response.json();
//    // console.log(data);
//     const userNames = data.map(user =>user.name +" " + "k.a" + " " + user.username);
//           userNames.forEach(element =>{
//     const list = document.createElement("li");
//           list.innerHTML = element;
//     })
   
//     const mainDiv = document.getElementById("main-container");
//     const listItems = document.getElementById("item-lists");
//           listItems.appendChild(list);
//           mainDiv.appendChild(listItems);
    
                                                               
//   }
//   catch(error){
//      console.error("error",error);
//   }
// }
// fetchDataFromApi();

async function otherFetchData(){
 try{
  const response = await fetch("https://restcountries.com/v3.1/all");
  if(!response.ok){
    throw new Error("Failed to fetch data from an API")
  }
  const data = await response.json();
  const countryNames = data.map((element) => element.altSpellings)
  //console.log(countryNames);
 }
 catch(error){
  console.log("error", error)
 }
}
otherFetchData();
//

//if...else statement

function checkAge(age){
  if(age >= 18){
    console.log('Congratulations! You are allowed to take alcohol')
    }
    else{
      console.log('sorry!You are not allowed to take alcohol')
    }
}
checkAge(15);

let school;
console.log(school);

console.log(5 == '5') // true => type coercion
console.log(5 === '5') // false strict equality ==> type & value
 let dev = '';
 console.log(typeof dev);
 
 let op1 = 'jonas';
 let op2 = 5
 let result = op1 * op2;
 console.log(NaN === NaN);

 let univ = 8;
 function setCalculate(){
  let a = 5
  if(a){
    let a = 4
    console.log(a);
  }
  else{
    console.log("Sorry")
  }
 }
 setCalculate();
 //global
 //local
 //block

 //This,call&apply,bind
 const infos ={
  name: 'peter',
  age: 28
}
 function sayMyName(){
  console.log(`My name is ${this.name} and i'm ${this.age}`)
  }
sayMyName.call(infos);

const hobbies = {
  name: 'Charles',
  state: 'Utah',
  country : 'USA'
}

function tellLocation(hob){
  console.log(`My name is ${this.name}.I live in ${this.state},${this.country}
    but i like ${hob}`)
}

tellLocation.call(hobbies,'swimming');
tellLocation.apply(hobbies,['swimming']);

const tellMyHobbies = tellLocation.bind(hobbies,'swimming');
tellMyHobbies();

function regularFunction(){
  console.log(this)
}
regularFunction();

//To reverse a number 

function reverseNum(num){
  let number = num.toString().split("").reverse().join("");
  let newNum = Number(number)
  return newNum;
}
console.log(reverseNum(1524));

//Check palindrome

function checkPal(string){
   let newStr = string.split("").reverse().join("");
   if(string === newStr){
     console.log("string is palindrome")
   }
   else{
    console.log("Not palindrome")
   }
}
 checkPal("man");
let str = "webinar kanuma quintus being"
 //sort string alphabetically

 function sortString(){
  let str = "webinar kanuma quintus being"
  let sortStr = str.split(" ").sort().join(" ")
  return sortStr;
 }
 console.log(sortString())

 function letterCap(string){
  let newStr = string.split(" ");
  let capWord = newStr.map((word) =>
    word[0].toUpperCase() + word.slice(1)
  ).join(" ");
  return capWord;
 }
 console.log(letterCap("i have dream that we will live in harmony"));

 //Longest word

 function longWord(string){
  let newStr = string.split(" ").sort((a,b) =>b.length-a.length )[0];
  return newStr;
 }
 console.log(longWord("Rwanda is beautiful country"));

 function checkScope(){
  
  if(true){
    let a = 5;
    var b = 10;
    const c = 4;

    console.log(a)
    console.log(b)
    console.log(c)
    
  }
  console.log(a)
  console.log(b)
  console.log(c)
 }
 checkScope();

 function countVowels(str){
   let vowels = str.match(/[iuoae]/ig);
   return vowels.length;
 }
 console.log(countVowels("My name is John from canalbox."));

 function findLowGreat(array){
  let newArr = array.sort((a,b) => a-b);
  let newPush = [];
  let secondNum = newArr[1];
  let lastNum = newArr[newArr.length-2];
  newPush.push(secondNum);
  newPush.push(lastNum);
  return newPush;
 }
 console.log(findLowGreat([20,10,18,17,4]))

 function unique(str){
  const one = new Set(str);
  const now = [...one].join("")
  return now;
 }
 console.log(unique("thequickbrownfoxjumpsoverthelazydog"))

 //end 