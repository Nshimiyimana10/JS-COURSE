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