
var name = "Alice";//Function-scoped, hoisted - avoid in modern J5
let age = 25;//Block-scoped, can be reassigned
const pi = 3.14159;//Block-scoped, cannot be reassigned

let scrore = 0;
scrore = 10;//OK - reassignment allowed for let

const MAX = 100;
//MAX = 200; //TypeErroer: Assignment to constant variable.
let homeaddress = "Your home address";
