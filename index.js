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








