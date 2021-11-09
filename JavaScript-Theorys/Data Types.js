/*Esta estrutura é utilizada para criar comentários no código de
JavaScript. Os comentários são linhas de código ignoradas pelo console 
durante a leitura do programa.*/

/* Data Types:

----- undefined -----

undefined means a variable has been declared but has not yet 
been assigned a value. ex(

    var n;

    console.log(n);

    //undefined
)

----- null -----

null is an object. It can be assigned to a variable as a 
representation of no value. JavaScript never sets a value to null. 
That must be done programmatically. ex(

    var n = null;

    //later in your program

    n = array.slice(0, 2);

)



----- boolean -----

Javascript booleans are a primitive type, which means they do not 
need to be explicitly created as an object. Use the reserved keywords 
true or false to assign a boolean value to a variable. The same 
logic applies when creating a boolean in JSON.

----- string -----

String is a primitive data type in JavaScript. A string is textual 
content. It must be enclosed in single or double quotation marks.
ex(
    "Hello, World"
    'Hello, world'
)

----- symbol -----

It’s a very peculiar data type. Once you create a symbol, 
its value is kept private and for internal use.
You create a symbol by calling the Symbol() global factory function. ex(
    const mySymbol = Symbol()
)

----- number -----

The number is a primitive data type used for positive or negative integer, 
float, binary, octal, hexadecimal, and exponential values in JavaScript. ex:(
    var num1 = 100; // integer
    var num2 = -100; //negative integer

    var num3 = 10.52; // float
    var num4 = -10.52; //negative float

    var num5 = 0xfff; // hexadecimal
    var num6 = 256e-5; // exponential
    var num7 = 030; // octal
    var num8 = 0b0010001; // binary
)

----- object -----

In JavaScript, an object is a standalone entity, with properties and type. 
Compare it with a cup, for example. A cup is an object, with properties. 
A cup has a color, a design, weight, a material it is made of, etc. 
The same way, JavaScript objects can have properties, which define their 
characteristics. ex(
    
    var myCar = new Object();
    myCar.make = 'Ford';
    myCar.model = 'Mustang';
    myCar.year = 1969;

)



*/