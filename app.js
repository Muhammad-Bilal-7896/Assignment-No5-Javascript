//CHAPTER1

// question1
// 1. Write a script to greet your website visitor using JS alert
// box.
//Answer:
alert("Welcome to the alerts question no 1 solved");
// question1

// question2
// 2. Write a script to display following message on your web
// page:
//Answer:
alert("Error! Please enter a valid password.");
// question2

// question3
// 3. Write a script to display following message on your web
// page: (Hint : Use line break)
//Answer:
alert("Welcome to JS Land...\nHappy Coding");
// question3


// question4
// 4. Write a script to display following messages in sequence:
//Answer:
alert("Welcome to JS Land...");
alert("Happy Coding!");
// question4


// question5
// 5. Generate the following message through browser’s
// developer console:
//Answer:
// just go to settings and open 'More tools' and then open 'developer tools' 
// and then open console window in developer tools

console.log(alert("Hello.. I can run JS through my developers console"));
//OR
//Right Click and click inspect and console and type the following
 alert("Hello.. I can run JS through my developers console");
// question5


// question6
// Make use of alerts in your new/existing HTML & CSS
// project.
// Answer
// I have used the alerts in my recent assignment the link to this is https://shaureducationalcomplexschool.web.app/
// question6

// question7
// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)
//Answer I have used it in the index.html file attached with it 
// question7

//CHAPTER1

/////////////////////////////////////////////////////////////////////////

//CHAPTER2               VARIABLES FOR STRINGS

// question 1
// 1. Declare a variable called username

var userName; //Camel Case

// question 1

// question2
// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

var myName = "Muhammad Bilal";

// question2


// question 3


// 3. Write script to
// a) Declare a JS variable, titled message.
var message;
// b) Assign “Hello World” to variable message
message = "Hello World";
// c) Display the message in alert box.
alert(message);
// question 3


//question 4
// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var name = "Bilal Mohib";
var age = 19;
var course="Certified Mobile Application Development";

alert(name);
alert(age + " years old");
alert(course);

//question 4


//question 5
var All="PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(All);
//question 5

//question 6
// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
var email= "bilalmohib7896@gmail.com";
alert("My email address is " + email);
//question 6


//question7
// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book); 
// question7


// question8
//8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through JavaScript");
// question8


// question9
// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
alert("▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬");
// question9


//CHAPTER2

//CHAPTER3 VARIABLES FOR NUMBERS

//question1
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age = 19;
alert("I am " + age + " years old");
//question1

//question2
// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
var count = 0;
// check for Navigation Timing API support reference stack overflow
if (window.performance) {
    console.info("window.performance works fine on this browser");
  }
    if (performance.navigation.type) {
      alert( "This page is reloaded" );
      count=count+1;
    } else {
      alert( "This page is not reloaded");
    }
alert("You have visited this site " + count + " times ");
//question2

//question3
// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
var birthYear = 2001 + "\n";
document.write("My birth year is " + birthYear  + "<br>Data type of my declared variable is number");
//question3

//question4
// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorsName = "Bilal Mohib";
var productTitle = "T-shirt(s)";
var quantity = "10";
document.write(visitorsName.bold() + " ordered " + quantity.bold() + " " + productTitle.bold() + " on XYZ Clothing store");
//question4



//CHAPTER3 

//CHAPTER4                         VARIABLE NAMES: LEGAL & ILLEGAL
//question1
// 1. Declare 3 variables in one statement
var varOne,varTwo,varThree;
//question1

//question2
// 2. Declare 5 legal & 5 illegal variable names.
//Legal variables
var car;
var bus_no;
var school_2
var z;
var varName;
//Illegal variables
//any key word is illegal for var and starting with number using symbols like #,$ or % is illegal
var var;
var 2car;
var this;
var Any_any%No$;
var ^thisvar;
//question2

//question3
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
var head="Rules for naming JS variables";
var contain1="numbers",contain2="$",contain3="_",contain4="letter",contain5="keywords";
var caseCondition = "sensitive";
document.write(head.bold()+ "<br><br><br>Variable names can only contain " + contain1 + ","
 + contain2 +" and "+contain3+" For example $my_1stVariable<br>"+
"Variables must begin with a "+contain4+" "+contain2+" or " + contain3+"."+
"For example $name, _name or name<br>Variable names are case "+caseCondition+ "<br>"+ 
"Variable names should not be JS "+contain5);
//question3

//CHAPTER4

//CHAPTER5                   MATH EXPRESSIONS
// question1
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
var num1=2;
var num2=4;
var sum;
sum=num1 +num2;
document.write("Sum of "+num1+" and "+num2+" is "+" "+sum+"<br>");
// question1

// question2
// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// subtraction
var num1=100;
var num2=76;
var sub;
sub=num1 - num2;
document.write("DIFFERRENCE of "+num1+" and "+num2+" is "+sub+"<br>");
// multiplication
var num1=120;
var num2=3;
var mul;
mul=num1 * num2;
document.write("Product of "+num1+" and "+num2+" is "+mul+"<br>");

// division
var num1=120;
var num2=3;
var div;
div=num1 / num2;
document.write("Division of "+num1+" by "+num2+" is "+div+"<br>");

//modulus
var num1=12;
var num2=3;
var modulus;
modulus=num1 / num2;
document.write("Reminder of "+num1+" divided by "+num2+" is "+modulus+"<br>");

// question2


//question3
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var anyVariable;

// b. Show the value of variable in your browser like “Value

// after variable declaration is: ??”.
document.write("<br>Value after variable declaration is: "+anyVariable); 
// c. Initialize the variable with some number.
anyVariable=5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("<br>Initial value is: "+anyVariable); 
// e. Increment the variable.
anyVariable++;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("<br>Value after increment is: "+anyVariable);
// g. Add 7 to the variable.
anyVariable=anyVariable+7;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write("<br>Value after addition is: "+anyVariable);
// i. Decrement the variable.
anyVariable--;
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("<br>Value after decrement is: "+anyVariable);
// k. Show the remainder after dividing the variable’s value
// by 3.
var remainder=anyVariable%3;
// l. Output : “The remainder is : 0”.
document.write("<br>The remainder is: "+remainder+"<br>");
//question3


//question4
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output
var ticketPrice = 600;
var cost=ticketPrice*5;
document.write("Total cost to buy 5 tickets for a movie is "+ cost+"PKR<br>");
//question4

//question5
// 5. Write a script to display multiplication table of any
// number in your browser;
var num=9;
var head="Table of nine is";
document.write(head.bold());
for(var i=1;i<=10;i++)
{
    var tab=num*i;
    document.write("<br>"+(num)+" x "+(i)+" = "+tab);
}
//question5

//question6
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var TemperatureCelsius = 25;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var TemperatureFahrenheit=(TemperatureCelsius*(9/5)+32);
document.write("<br><br>"+TemperatureCelsius+"°C is "+TemperatureFahrenheit+"°F");
// c. Now store a Fahrenheit temperature into a variable.
TemperatureFahrenheit=100;
// d. Convert it to Celsius & output “NNoF is NNoC”.
TemperatureCelsius=(TemperatureFahrenheit-32)*(5/9);
document.write("<br>"+TemperatureFahrenheit+"°F is "+TemperatureCelsius+" °F");

//question6

// question7
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
var priceItem1=650;
// b. Price of item 2
var priceItem2=100;
// c. Ordered quantity of item 1
var QuanItem1=3;
// d. Ordered Quantity of item 2
var QuanItem2=7;
// e. Shipping charges
var shippingCharges = 100;
var totalCost=(priceItem1*QuanItem1)+(priceItem2*QuanItem2)+shippingCharges;
// Compute the total cost & show the receipt in your browser.
document.write("<br><br>Total cost of your order is "+totalCost);
// question7

// question8
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
var totalMarks=916;
var obtainedMarks=1100;
var percentage = (totalMarks/obtainedMarks)*100;
document.write("<br><br><br>Total Marks: "+totalMarks+"<br>");
document.write("Obtained Marks: "+obtainedMarks+"<br>");
document.write("Percentage: "+percentage+"%<br><br><br>");
// question8


// question9
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var name="Currency in PKR";
document.write(name.bold());
var USD=10;
var SR=25;
var RS=(USD*104.80)+(SR*28);
document.write("<br>Total currency in PKR is: "+RS);
// question9


// question10
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
var num=4;
// a. Add 5
num=((num+5)*10)/2;
// b. Multiply by 10;
// c. Divide the result by 2
document.write("<br><br>The result is "+ num+"<br><br>");
// Perform all calculations in a single expression
// question10

// question11
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
var currentYear=2020;
var birthYear=2001;
var Age=currentYear-birthYear;
document.write("<br><br>Current Year is = "+currentYear+"<br>");
document.write("Birth Year is = "+birthYear+"<br>");
document.write("Your Age is = "+Age+"<br>");

// question11



// question12
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable
var radius=20.0;
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
var circum=(2.0*3.142*radius);
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var Area=(3.142*(20*20));
document.write("<br><br>Circumference of circle is:"+circum);
document.write("<br>Radius of circle is: "+radius+"<br>");
document.write("Area of circle is: "+Area+"<br><br>");
// question12

// question13
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
var favoriteSnack="chocolateChip";
var currentAge=19;
var estimatedMaxAge=65;
var amountPerDay=1;
var estimatedEat=(estimatedMaxAge-currentAge)*amountPerDay*365;
document.write("<br><br>You will need "+estimatedEat + " to last you until the ripe old age of "
+estimatedMaxAge);

// question13




//CHAPTER5
 
//Chapter 6-9                         MATH EXPRESSIONS

//question1
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a=10;
document.write("<br><br>The value of a is: "+a)
a++;
document.write("<br>The value of a is: "+a)
//question1


//Chapter 6-9                         MATH EXPRESSIONS