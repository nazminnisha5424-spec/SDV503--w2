var name = "Alice";//Function-scoped, hoisted - avoid in modern J5
let age : 25;//Block-scoped, can be reassigned
const pi = 3.14159;//Block-scoped, cannot be reassigned

let scrore = 0;
scrore = 10;//OK - reassignment allowed for let

const MAX = 100;
//MAX = 200; //TypeErroer: Assignment to constant variable.
let homeaddress = "Your home address";
console.log(homeaddress); // Your home address 
//Arithmetic 
5 + 3 // 8 
10 - 4 // 6 
4 * 3 // 12 
9 / 2 // 4.5 
9 % 2 // 1 
2**3 // 8

//comperison - aways prefare === over ==
5 === 5 // true
5 !== 3 // true // (strict check value and type)
5 == "5" // true
5 === "5" // false// (loose vs strict) 
10 > 3 // true
4 <= 4 // true

//logical
true && false // false
true || false // true
!true // false

//assignment shorthands 
let x = 10;
x += 5; //15
x -= 2; // 13
x *=2; //26

const msg = "Hello, JavaScript!";

msg . length // 18
msg . toUpperCase() // "HELLO, JAVASCRIPT! "
msg . toLowerCase() // "hello, javascript! "
msg . includes("Java") // true
msg . startsWith( "He") // true
msg . indexOf("Java") // 7
msg . slice(7, 17) // "JavaScript"
msg . replace("Hello", "Hi") // "Hi, JavaScript! "
msg . split(",") // ["Hello", " JavaScript! "]
msg . trim() // "hi" 

const name = "Ali";
const age = 25;
// Old way - concatenation (error-prone)
const msg1 = "Hello," + name + "! You are " + age + " years old.";
// New way - template literals (clean and readable)
const msg2 = `Hello, ${name}! You are ${age} years old.`;
// Multi - line strings
const html = `
,div class = "card">
    <h2>${name}</h2>
    <p>Age: ${age}</p>
</div>
`;
