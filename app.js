//CHAPTER1

// question1
// 1. Write a script to greet your website visitor using JS alert
// box.
//Answer:
// alert("Welcome to the alerts question no 1 solved");
// question1

// question2
// 2. Write a script to display following message on your web
// page:
//Answer:
// alert("Error! Please enter a valid password.");
// question2

// question3
// 3. Write a script to display following message on your web
// page: (Hint : Use line break)
//Answer:
// alert("Welcome to JS Land...\nHappy Coding");
// question3


// question4
// 4. Write a script to display following messages in sequence:
//Answer:
// alert("Welcome to JS Land...");
// alert("Happy Coding!");
// question4


// question5
// 5. Generate the following message through browser’s
// developer console:
//Answer:
// just go to settings and open 'More tools' and then open 'developer tools' 
// and then open console window in developer tools

// console.log(alert("Hello.. I can run JS through my developers console"));
//OR
//Right Click and click inspect and console and type the following
//  alert("Hello.. I can run JS through my developers console");
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

//var userName; //Camel Case

// question 1

// question2
// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

//var myName = "Muhammad Bilal";

// question2


// question 3


// 3. Write script to
// a) Declare a JS variable, titled message.
//var message;
// b) Assign “Hello World” to variable message
//message = "Hello World";
// c) Display the message in alert box.
// alert(message);
// question 3


//question 4
// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// var name = "Bilal Mohib";
// var age = 19;
// var course="Certified Mobile Application Development";

// alert(name);
// alert(age + " years old");
// alert(course);

//question 4


//question 5
//var All="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(All);
//question 5

//question 6
// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
//var email= "bilalmohib7896@gmail.com";
// alert("My email address is " + email);
//question 6


//question7
// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
//var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book); 
// question7


// question8
//8. Write a script to display this in browser through JS
// document.write("Yah! I can write HTML content through JavaScript<br><br>");
// question8


// question9
// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
// alert("▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬<br><br>");
// question9


//CHAPTER2

//CHAPTER3 VARIABLES FOR NUMBERS

//question1
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
//var age = 19;
// alert("I am " + age + " years old<br><br>");
//question1

//question2
// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
// var count = 0;
// check for Navigation Timing API support reference stack overflow
// if (window.performance) {
//     console.info("window.performance works fine on this browser");
//   }
//     if (performance.navigation.type) {
//       alert( "This page is reloaded" );
//       count=count+1;
//     } else {
//       alert( "This page is not reloaded");
//     }
// alert("You have visited this site " + count + " times ");
//question2

//question3
// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
//var birthYear = 2001 + "\n";
// document.write("My birth year is " + birthYear  + "<br>Data type of my declared variable is number<br><br>");
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
// var visitorsName = "Bilal Mohib";
// var productTitle = "T-shirt(s)";
// var quantity = "10";
// document.write(visitorsName.bold() + " ordered " + quantity.bold() + " " + productTitle.bold() + " on XYZ Clothing store<br><br>");
//question4



//CHAPTER3 

//CHAPTER4                         VARIABLE NAMES: LEGAL & ILLEGAL
//question1
// 1. Declare 3 variables in one statement
// var varOne,varTwo,varThree;
//question1

//question2
// 2. Declare 5 legal & 5 illegal variable names.
//Legal variables
// var car;
// var bus_no;
// var school_2
// var z;
// var varName;
//Illegal variables
//any key word is illegal for var and starting with number using symbols like #,$ or % is illegal
// var var;
// var 2car;
// var this;
// var Any_any%No$;
// var ^thisvar;
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
// var head="Rules for naming JS variables";
// var contain1="numbers",contain2="$",contain3="_",contain4="letter",contain5="keywords";
// var caseCondition = "sensitive";
// document.write(head.bold()+ "<br><br><br>Variable names can only contain " + contain1 + ","
//  + contain2 +" and "+contain3+" For example $my_1stVariable<br>"+
// "Variables must begin with a "+contain4+" "+contain2+" or " + contain3+"."+
// "For example $name, _name or name<br>Variable names are case "+caseCondition+ "<br>"+ 
// "Variable names should not be JS "+contain5<br>+"<br></br>");
//question3

//CHAPTER4

//CHAPTER5                   MATH EXPRESSIONS
// question1
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// var num1=2;
// var num2=4;
// var sum;
// sum=num1 +num2;
// document.write("Sum of "+num1+" and "+num2+" is "+" "+sum+"<br>");
// question1

// question2
// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// subtraction
// var num1=100;
// var num2=76;
// var sub;
// sub=num1 - num2;
// document.write("DIFFERRENCE of "+num1+" and "+num2+" is "+sub+"<br>");
// multiplication
// var num1=120;
// var num2=3;
// var mul;
// mul=num1 * num2;
// document.write("Product of "+num1+" and "+num2+" is "+mul+"<br>");

// division
// var num1=120;
// var num2=3;
// var div;
// div=num1 / num2;
// document.write("Division of "+num1+" by "+num2+" is "+div+"<br>");

//modulus
// var num1=12;
// var num2=3;
// var modulus;
// modulus=num1 / num2;
// document.write("Reminder of "+num1+" divided by "+num2+" is "+modulus+"<br>");

// question2


//question3
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
//var anyVariable;

// b. Show the value of variable in your browser like “Value

// after variable declaration is: ??”.
// document.write("<br>Value after variable declaration is: "+anyVariable); 
// c. Initialize the variable with some number.
//anyVariable=5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// document.write("<br>Initial value is: "+anyVariable); 
// e. Increment the variable.
//anyVariable++;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// document.write("<br>Value after increment is: "+anyVariable);
// g. Add 7 to the variable.
// anyVariable=anyVariable+7;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// document.write("<br>Value after addition is: "+anyVariable);
// i. Decrement the variable.
// anyVariable--;
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// document.write("<br>Value after decrement is: "+anyVariable);
// k. Show the remainder after dividing the variable’s value
// by 3.
// var remainder=anyVariable%3;
// l. Output : “The remainder is : 0”.
// document.write("<br>The remainder is: "+remainder+"<br>");
//question3


//question4
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output
// var ticketPrice = 600;
// var cost=ticketPrice*5;
// document.write("Total cost to buy 5 tickets for a movie is "+ cost+"PKR<br>");
//question4

//question5
// 5. Write a script to display multiplication table of any
// number in your browser;
// var num=9;
// var head="Table of nine is";
// document.write(head.bold());
// for(var i=1;i<=10;i++)
// {
//     var tab=num*i;
//     document.write("<br>"+(num)+" x "+(i)+" = "+tab);
// }
//question5

//question6
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// var TemperatureCelsius = 25;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//var TemperatureFahrenheit=(TemperatureCelsius*(9/5)+32);
// document.write("<br><br>"+TemperatureCelsius+"°C is "+TemperatureFahrenheit+"°F");
// c. Now store a Fahrenheit temperature into a variable.
//TemperatureFahrenheit=100;
// d. Convert it to Celsius & output “NNoF is NNoC”.
//TemperatureCelsius=(TemperatureFahrenheit-32)*(5/9);
// document.write("<br>"+TemperatureFahrenheit+"°F is "+TemperatureCelsius+" °F");

//question6

// question7
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// var priceItem1=650;
// b. Price of item 2
//var priceItem2=100;
// c. Ordered quantity of item 1
//var QuanItem1=3;
// d. Ordered Quantity of item 2
//var QuanItem2=7;
// e. Shipping charges
// var shippingCharges = 100;
// var totalCost=(priceItem1*QuanItem1)+(priceItem2*QuanItem2)+shippingCharges;
// Compute the total cost & show the receipt in your browser.
// document.write("<br><br>Total cost of your order is "+totalCost);
// question7

// question8
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
// var totalMarks=916;
// var obtainedMarks=1100;
// var percentage = (totalMarks/obtainedMarks)*100;
// document.write("<br><br><br>Total Marks: "+totalMarks+"<br>");
// document.write("Obtained Marks: "+obtainedMarks+"<br>");
// document.write("Percentage: "+percentage+"%<br><br><br>");
// question8


// question9
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
//var name="Currency in PKR";
// document.write(name.bold());
// var USD=10;
// var SR=25;
// var RS=(USD*104.80)+(SR*28);
// document.write("<br>Total currency in PKR is: "+RS);
// question9


// question10
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// var num=4;
// a. Add 5
// num=((num+5)*10)/2;
// b. Multiply by 10;
// c. Divide the result by 2
// document.write("<br><br>The result is "+ num+"<br><br>");
// Perform all calculations in a single expression
// question10

// question11
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// var currentYear=2020;
// var birthYear=2001;
// var Age=currentYear-birthYear;
// document.write("<br><br>Current Year is = "+currentYear+"<br>");
// document.write("Birth Year is = "+birthYear+"<br>");
// document.write("Your Age is = "+Age+"<br>");

// question11



// question12
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable
// var radius=20.0;
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// var circum=(2.0*3.142*radius);
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// var Area=(3.142*(20*20));
// document.write("<br><br>Circumference of circle is:"+circum);
// document.write("<br>Radius of circle is: "+radius+"<br>");
// document.write("Area of circle is: "+Area+"<br><br>");
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
// var favoriteSnack="chocolateChip";
// var currentAge=19;
// var estimatedMaxAge=65;
// var amountPerDay=1;
// var estimatedEat=(estimatedMaxAge-currentAge)*amountPerDay*365;
// document.write("<br><br>You will need "+estimatedEat + " to last you until the ripe old age of "
// +estimatedMaxAge);

// question13




//CHAPTER5
 
//Chapter 6-9                         MATH EXPRESSIONS

//question1
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// var a=10;
// document.write("<br><br>The value of a is: "+a)
//++a;
// document.write("<br>The value of ++a is: "+a);
// document.write("<br>Now the value of a is: "+a);

// document.write("<br><br><br>The value of a++ is: "+ a++);
// document.write("<br>Now the value of a is: "+a);

// document.write("<br><br><br>The value of --a is: "+ --a);
// document.write("<br>Now the value of a is: "+a);

// document.write("<br><br><br>The value of a-- is: "+ a--);
// document.write("<br>Now the value of a is: "+a+"<br><br>");
//question1

//question2
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
//At --a it is 1 because the value is 1
// --a - --b;
// At this stage b is 0 so --a - --b=1;
// --a - --b + ++b = 1 - 0 + 0=2;
// --a - --b + ++b + b--=;
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("result is "+result+"<br>");
//question2

//question3
// 3. Write a program that takes input a name from user &
// greet the user.
// var name=prompt("Whats your name?");
// alert("Your name is "+name);
//question3


//question4
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// var num=prompt("Enter a number: ");
// var num1=5;
// var mul;
// if(!num)
// {
//     for(var i=1;i<=10;i++)
//     {
//         mul=num1*i;
//         document.write(num1+" x "+i+" = "+mul+"<br>");
//     }
// }
// else
// {
//     for(var i=1;i<=10;i++)
//     {
//         mul=num*i;
//         document.write(num+" x "+i+" = "+mul+"<br>");
//     }
// }
//question4

// question5
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// var sub1,sub2,sub3;
// sub1=prompt("Enter first subject name");
// sub2=prompt("Enter second subject name");
// sub3=prompt("Enter third subject name");
// b) Total marks for each subject is 100, store it in another
// variable.
// var total_marks = 100;
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// var x=prompt("Enter obtained marks for subject one ");
// var obtained_marks1 = parseInt(x);
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// var y=prompt("Enter obtained marks for subject two ");
// var obtained_marks2 = parseInt(y);
// var z=prompt("Enter obtained marks for subject three ");
// var obtained_marks3 = parseInt(z);
// var percent1=(obtained_marks1/total_marks)*100;
// var percent2=(obtained_marks2/total_marks)*100;
// var percent3=(obtained_marks3/total_marks)*100;
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
// var Total=total_marks*3;
// var TotalPercentage;
// var obtained=obtained_marks1+obtained_marks2+obtained_marks3;
// TotalPercentage=(obtained/Total)*100;
// var head1 = "Subject";
// var head2 = "Total Marks";
// var head3 = "Obtained Marks";
// var head4 = "Percentage";
// document.write(head1.bold()+"&nbsp;&nbsp;&nbsp;"+head2.bold()+"&nbsp;&nbsp;&nbsp;"+head3.bold()+"&nbsp;&nbsp;&nbsp;"
// +head4.bold()+"<br>"+sub1+"&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks1+"&nbsp;&nbsp;&nbsp;"+percent1+"<br>"
// +sub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks2+"&nbsp;&nbsp;&nbsp;"+percent2+"<br>"
// +sub3+"&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks3+"&nbsp;&nbsp;&nbsp;"+percent3+"<br>"
// +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+Total+"&nbsp;&nbsp;&nbsp;"+obtained+"&nbsp;&nbsp;&nbsp;"+"&nbsp;&nbsp;&nbsp;"+TotalPercentage+"<br>");
// question5


//Chapter 6-9                         MATH EXPRESSIONS



//Chapter 9-11              USER INPUT & CONDITIONAL STATEMENT

// question1
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// var city=prompt("Enter your city name?");
// var xcity=city.toLocaleLowerCase();
// if(xcity=="karachi")
// {
//     alert("Welcome to city of lights");
// }
// else{
//     alert("We are not ordered to welcome you");
// }
// question1

// question2
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// var gender=prompt("Enter your gender");
// gender=gender.toLowerCase();
// if(gender=="male")
// {
//     alert("Good Morning Sir");
// }
// else if(gender=="female"){
//     alert("Good Morning Ma'm");
// }
// question2

// question3
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now
// var color=prompt("Input color of road traffic signal");
// color=color.toLowerCase();
// if(color==="red")
// {
//     alert("Must stop");
// }
// else if(color==="yellow")
// {
//     alert("ready to move");
// }
// else if(color==="green")
// {
//     alert("move now");
// }
// else
// {
//     alert("Enter right value");
// }
// question3

// question4
// 4.Write a program to take input remaining fuel in car 
//(in litres) from user. If the current fuel is less than 
//0.25litres,show the message “Please refill the fuel in 
//your car”
// var fuel=prompt("Input remaining fuel in your car(in litres)");
// fuelNum=parseFloat(fuel);
// if(fuelNum<0.25)
// {
//     alert("Please refill the fuel in your car");
// }
// else if(fuelNum>=0.25)
// {
//     alert("Your fuel is ok now");
// }
// question4

// question5
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//yes its ok alert is running
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// No its Not true it must be ++b to run.alert is not running 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//only condition 2 and 4 is true
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//Yes the cost equals
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//Yes true
//f. if("car" < "cat"){
//     alert("car is smaller than cat");
// }
//Yes alert is running because r comes first than t
// try it to clear the concept
// if("caq" < "car"){
//     alert("caq is smaller than car");
// }
// question5

// question6
//6. Write a program to take input the marks obtained in 
//three subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute grade 
//as per following table:
// var sub = prompt("Enter the marks for sub1");
// var sub1=parseFloat(sub);
// sub = prompt("Enter the marks for sub2");
// var sub2=parseFloat(sub);
// sub = prompt("Enter the marks for sub3");
// var sub3=parseFloat(sub);
// var obt=sub1+sub2+sub3;
// var total=prompt("Enter the total marks");
// total=parseFloat(total);
// var percentage=(obt/total)*100;
// var grade;
// var remarks;
// if(percentage>=80)
// {  
//     grade="A-one";
//     remarks="excellent";
// }
// else if(percentage>=70)
// {
//     grade="A";
//     remarks="Good";
// }
// else if(percentage>=60)
// {
//     grade="B"
//     remarks="You need to improve";
// }
// else if(percentage<60)
// {
//     grade="fail";
//     remarks="Sorry";
// }
// var marksheet="MarksSheet";
// var tm="Total Marks";
// var mo="Marks Obtained";
// var perc = "Percentage";
// var gra="Grade";
// var rema ="Remarks";
// document.write(marksheet.bold()+"<br>"+tm.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+total
// +"<br>"+mo.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+obt+"<br>"+perc.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+
// percentage+"%"+"<br>"+gra.bold()+"&nbsp;&nbsp;:"+grade+"<br>"+rema.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"
// +remarks);
// question6

// question7
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var sec=Math.floor(Math.random()*10);
// var guess=prompt("Guess the secret number");
// guess=parseInt(guess);
// if(guess===sec)
// {
//     alert("Bingo!Correct Answer aa");
// }
// else if((guess-1)===sec)
// {
//     alert("Close enough to the correct answer");
// }

// question7


// question8
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3
// var che=prompt("Enter the number to check if its divisible by 3");
// check=parseInt(che);
// if(check%3===0)
// {
//     alert("Yes it is divisible by 3");
// }
// else 
// {
//     alert("No its not divisible by 3");
// }

// question8

// question9
// 9. Write a program that checks whether the given input is an
// even number or an odd number
// var eve=prompt("Enter the number to check for even or odd");
// eve=parseInt(eve);
// if(eve%2===0)
// {
//     alert("Even Number it is");
// }
// else
// {
//     alert("Its an Odd number");
// }
// question9


// question10
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// var T=prompt("Enter the temperature");
// var temp=parseInt(T);
// if(temp>40)
// {
//     alert("It is too hot outside");
// }
// else if(temp>30)
// {
//     alert("The Weather today is normal");
// }
// else if(temp>20)
// {
//     alert("Today's weather is Normal");
// }
// else if(temp>10)
// {
//     alert("OMF! Today’s weather is so Cool.");
// }
// question10


// question11
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user
// var num1=prompt("Enter first number");
// num1=parseFloat(num1);
// var num2=prompt("Enter second number");
// num2=parseFloat(num2);
// var result;
// var sym=prompt("Enter the operation to perform (+, -, *, /, %)");
// if(sym==="+")
// {
//     result=num1+num2;
//     alert("The sum of two numbers is equal to:    " + result);
// }
// else if(sym==="-")
// {
//     result=num1-num2;
//     alert("The difference of two numbers is equal to:   "+result);
// }
// else if(sym==="*")
// {
//     result=num1*num2;
//     alert("The multiplication of two numbers is equal to:    "+result);
// }
// else if(sym==="/")
// {
//     result=num1/num2;
//     alert("The division of two numbers is equal to:     "+result);
// }
// else if(sym==="%")
// {
//     result=num1%num2;
//     alert("The remainder of two numbers is equal to:    "+result);
// }
// else
// {
//     alert("Enter right symbol please");
// }
// question11

//Chapter 9-11              USER INPUT & CONDITIONAL STATEMENT
//Chapter 12-13              IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 
// question1
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// question1
// var num=prompt("Enter the number or string");
// var num1=parseInt(num);
// if(num.charCodeAt(0)>=65&&num.charCodeAt(0)<=90)
// {
//     alert("It is the upper case letter")
// }
// else if(num.charCodeAt(0)>=97&&num.charCodeAt(0)<=122)
// {
//     alert("It is the lower case letter");
// }
// else if(Number.isInteger(num1))
// {
//     alert("its an number");
// }
// else
// {
//     alert("It is something else");
// }
 

// alert(String.fromCharCode(65,66,67)); // returns 'ABC'
// question1


// question2
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// var num=prompt("Enter the first number");
// var num1=parseInt(num);
// num=prompt("Enter the second number");
// var num2=parseInt(num);
// if(num1>num2)
// {
//     alert("The number 1 is larger");
// }
// else if(num2>num1)
// {
//     alert("The number 2 is larger");
// }
// else if(num1==num2)
// {
//     alert("The number 1 and number 2 are equal");
// }
// question2


// question3
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// var num=prompt("Enter the number");
// var num1=parseInt(num);
// if(num1===0)
// {
//     alert("The number is equal to zero");
// }
// else if(num1>0)
// {
//     alert("The number is positive");
// }
// else if(num1<0)
// {
//     alert("The number is negative");
// }
// question3


// question4
// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
// var len=prompt("Enter a character i.e(The length of string 1)");
// var str=len.length;
// str=parseInt(str);
// if(str===1)
// {
//     len=len.toLowerCase();
//     if(len==="a"||len==="e"||len==="i"||len==="o"||len==="u")
//     {
//         alert("True its a vowel");
//     }
//     else{
//         alert("False its not a vowel");
//     }
// }
// else{
//     alert("Please Enter a character i.e(The length of string 1)");
// }
// question4


// question5
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var pas1=prompt("Please! Enter a password");
// var len=pas1.length;
// len=parseInt(len);
// while(len===0)
// {
//     alert("Please enter a password here");
//     pas1=prompt("Please! Enter a password");
//     len=pas1.length;
//     len=parseInt(len);
//     if(len!=0)
//     {
//         break;
//     }
// }
// var pas2=prompt("Please!Re-Enter the password");
// if(pas1===pas2)
// {
//     alert("Correct the password entered matches the original password");
// }
// else if(pas1!=pas2)
// {
//     alert("Incorrect password");
// }


// question5

// question6
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else
// {
// greeting = "Good evening";
// alert(greeting);
// }
//The brackets {} were not there correctly
//Answer
// question6

// question7
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// var time=prompt("Enter the time in 24 hours");
// var timecheck=time.length;
// while(timecheck!=4)
// {
//     alert("Enter the time in 24 hours");
//     time=prompt("Enter the time in 24 hours");
//     timecheck=time.length;
//     if(timecheck===4)
//     {
//         break;
//     }
// }
// if(time>=0000&time<1200)
// {
//     alert("Good morning");
// }
// else if(time>=1200&&time<1700)
// {
//     alert("Good afternoon");
// }
// else if(time>=1700&&time<2100)
// {
//     alert("Good evening")
// }
// else if(time>=2100&&time<=2359)
// {
//     alert("Good night");
// }
// else
// {
//     alert("Where are you coming out of the required condition Its 24 hour time program");
// }
// question7            



//Chapter 12-13              IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 





//Chapter 14-16              ARRAYS 
// question1
// 1. Declare an empty array using JS literal notation to store
// student names in future.
// var arrStudent=[];
// question1

// question2
// 2. Declare an empty array using JS object notation to store
// student names in future.
// var studentArray=new Array();
// question2

// question3
// 3. Declare and initialize a strings array
// var arrString=["bilal","ammar","hassan","ali"];
// question3

// question4
// 4. Declare and initialize a numbers array.
var arrNum=[1,2,3,4,5];
// question4


// question5
// 5. Declare and initialize a boolean array.
// var arrBoolean=[1,0,false,true];
// alert(arrBoolean);
// question5


// question6
// 6. Declare and initialize a mixed array.
// var arrMixed=[1,"bilal",true,'a'];
// alert(arrMixed);
// question6


// question7
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// var qual="Qualifications";
// document.write(qual.bold()+"&nbsp;");
// var degrees=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil", "PhD"];
// for(var i=0;i<=7;i++)
// {
//     document.write("<br>"+(i+1)+"&nbsp;)&nbsp;&nbsp;"+degrees[i]);
// }
// question7


// question8
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// var arrName=new Array(3);
// var arrScore=new Array(3);
// var Marks=500;
// var arrPercentage=new Array(3);
// for(var i=0;i<3;i++)
// {
//    arrName[i]=prompt("Enter the student "+(i+1)+" name"); 
//    arrScore[i]=prompt("Enter the score of student "+arrName[i]);
//    arrScore[i]=parseFloat(arrScore[i]);
//    arrPercentage[i]=(arrScore[i]/Marks)*100; 
// }
// //outputting the data
// for(var i=0;i<3;i++)
// {
//     document.write("Score of&nbsp;&nbsp;"+arrName[i]+"&nbsp;is&nbsp;"+arrScore[i]+"&nbsp;Percentage:&nbsp;"+arrPercentage[i]+"%<br>");
// }
// question8


// question9
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// var arrColor=["red","blue","green","yellow","purple"];
// var size=arrColor.length;
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// var addbegin=prompt("Enter the color you want to add at the beggining"+
// " of the array ");
// arrColor.unshift(addbegin);
// size=arrColor.length;
// // Display the updated array in your browser.
// var updated="The updated array is now after adding at the begininning is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// var addend=prompt("Enter the color you want to add at the end"+
// " of the array");
// arrColor.push(addend);
// size=arrColor.length;
// updated="The updated array is now after adding at the end is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// c. Add two more color to the beginning of the array.
// var addbegin21=prompt("Enter the 1st more color you want to add at the beggining"+
// " of the array ");
// var addbegin22=prompt("Enter the 2nd more color you want to add at the beggining"+
// " of the array ");
// arrColor.unshift(addbegin21,addbegin22);
// size=arrColor.length;
// // Display the updated array in your browser.
// updated="The updated array after adding 2 more colors at the begininning is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// d. Delete the first color in the array. Display the updated
// array in your browser.
// arrColor.shift();
// size=arrColor.length;
// updated="The updated array after removing ONE color from the begininning is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// e. Delete the last color in the array. Display the updated
// array in your browser.
// arrColor.pop();
// size=arrColor.length;
// updated="The updated array after removing ONE color from the last is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// var index=prompt("Enter the index at which you want to add color to "+
// "the array");
// index=parseInt(index);
// var addmid=prompt("Enter the color which you want to add in the desired index "+index);
// arrColor.splice(index,0,addmid);
// size=arrColor.length;
// updated="The updated array after adding color at the desired index is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var index1=prompt("Enter the index at which you want to delete color to "+
// "the array");
// index1=parseInt(index1);
// var removeColor=prompt("How many colors you want to remove");
// removeColor=parseInt(removeColor);
// arrColor.splice(index1,removeColor);
// size=arrColor.length;
// updated="The updated array after desired No of colors at the desired index is :"
// document.write("<br>"+updated.bold()+"<br>");
// for(var i=0;i<size;i++)
// {
//     document.write(arrColor[i]+"<br>");
// }

// question9



// question10
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// alert("Enter the student's scores in an array I will sort it for you");
// var Size=prompt("Enter the No of Students");
// var Score=new Array(Size);
// for(var i=0;i<Size;i++)
// {
//     Score[i]=prompt("Enter the student "+(i+1)+" Score here");
//     Score[i]=parseInt(Score[i]);
// }
// document.write("Scores of students: ");
// for(var i=0;i<Size;i++)
// {
//     document.write(Score[i]+"&nbsp;&nbsp;");
// }
// Score.sort(function(a,b){ return a-b;});
// OR
// Score.sort((a,b)=>a-b)
// document.write("<br>");
// document.write("Ordered Scores of students: ");
// for(var i=0;i<Size;i++)
// {
//     document.write(Score[i]+"&nbsp;&nbsp;");
// }
// question10


// question11
// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// var CityNames=[];
// var selectedCities=[];
// var Size=prompt("Enter the number of cities");
// Size=parseInt(Size);
// while(Size<4)
// {
//     alert("Enter atleast 4 size to check the condition Please!");
//     Size=prompt("Enter the number of cities again atleast four to continue");
//     Size=parseInt(Size);
//     if(Size>4||Size===4)
//     {
//         break;
//     }
// }
// for(var i=0;i<Size;i++)
// {
//     CityNames[i]=prompt("Enter the name of "+(i+1)+" st city");
// }
// var cl="Cities List: ";
// document.write(cl.bold());
// for(var i=0;i<Size;i++)
// {
//     document.write(CityNames[i]+"&nbsp;&nbsp;");
// }
// document.write("<br>");
// selectedCities=CityNames.slice(0,3); //Selects the first three elements of the array
// Size=selectedCities.length;
// var scl="Selected Cities List: ";
// document.write(scl.bold());
// for(var i=0;i<Size;i++)
// {
//     document.write(selectedCities[i]+"&nbsp;&nbsp;");
// }        
// question11


// question12
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// var arr = ["This","is","my","cat"];
// var singleString=arr.join(" ");
// document.write("Array:<br>"+arr+"<br>"+"String:<br>"+singleString);
// question12


// question13
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// var arr=[];
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// var size=arr.length;
// document.write("The first in policy is: "+arr+"<br>");
// document.write("<br><br>The first out policy is: ");
// for(var i=0;i<size;i++)
// {
//     document.write("<br>"+"OUT"+"<br>"+arr[i]);
// }
// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();

// question13


// question14
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
// var arr=[];
// arr.unshift(2);
// arr.unshift(3);
// arr.unshift(4);
// arr.unshift(5);
// var size=arr.length;
// document.write("<br>"+"The last in policy is: "+arr);
// document.write("<br><br>The first out policy is: ");
// for(var i=0;i<size;i++)
// {
//     document.write("<br>"+"OUT"+"<br>"+arr[i]);
// }
// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();

// question14

// question15
// 15.Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
// var phoneArray=["Apple","Motorola","Nokia","Sony","Haier"];
// var size=phoneArray.length;
// for(var i=0;i<size;i++)
// {
//     document.write(phoneArray[i]+"<br>");
//}

// question15



//Chapter 14-16              ARRAYS 



//Chapter 17-20              ARRAYS AND LOOP
//question1
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
//question1
// var miltiArray=[[1,"one"],[2,"two"],[3,"three"],[4,"four"]]; 
//question1



//question2
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// var size =matrix.length;
// for(var i=0;i<3;i++)
// {
//     for(var j=0;j<4;j++)
//     { 
//         document.write(matrix[i][j]);
//     }
//     document.write("<br>");
// }
//question2


//question3
// 3. Write a program to print numeric counting from 1 to 10.
// for(var i=0;i<10;i++)
// {
//     document.write((i+1)+"<br>");
// }
//question3


//question4
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var number = prompt("Enter a number to show its multiplication table");
// number=parseInt(number);
// var mul;
// var length=prompt("Enter the length of multiplication table");
// length=parseInt(length);
// while(length===-1||length===0)
// {
//     alert("Please! Enter a positive number for length");
//     length=prompt("Enter the length of multiplication table");
//     length=parseInt(length);
//     if(length>0)
//     {
//         break;
//         alert("Correct Now see the table");
//     }
// }
// document.write("Multiplication table of &nbsp;"+number+"<br>");
// document.write("Length &nbsp;"+length+"<br>");
// for(var i=1;i<=length;i++)
// {
//     mul=number*i;
//     document.write("<br>"+number+" x "+i+" = "+mul);
// }
//question4



//question5
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]
// var fruits = ["apple","banana","mango","orange","strawberry"];
// var size=fruits.length;
// for(var i=0;i<size;i++)
// {
//     document.write(fruits[i]+"<br>");
// }
// for(var i=0;i<size;i++)
// {
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }
//question5



//question6
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<b>Counting:</b><br>");
// for(var i=1;i<=15;i++)
// {
//     document.write(i+" , ");
// }
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<br><br><b>Reverse Counting:</b><br>");
// for(var i=15;i>=1;i--)
// {
//     document.write(i+" , ");
// }
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<br><br><b>Even:</b><br>");
// for(var i=0;i<=20;i=i+2)
// {
//     document.write(i+" , ");
// }
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<br><br><b>Odd:</b><br>");
// for(var i=1;i<=20;i=i+2)
// {
//     document.write(i+" , ");
// }
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<br><br><b>Series:</b><br>");
// for(var i=0;i<=20;i=i+2)
// {
//     document.write(i+"k, ");
// }


//question6


//question7
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
//question7
// var A = ["cake","apple pie","cookie","chips","patties"];
// var search=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
// var size=A.length;
// var check=false;
// for(var i=0;i<=size;i++)
// {
//     if(search===A[i])
//     {
//         alert(search+" is available at index "+(i+1)+" of our bakery");
//         check=true;
//         break;
//     }
// }
// if(check==false)
// {
//     alert("We are sorry "+search  +" is not available in our bakery");
// }

//question8
// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
// var  A = [24, 53, 78, 91, 12];
// var size=A.length;
// var larger=A[0];
// document.write("Array items: "+A.join(" , "));
// for(var i=0;i<size;i++)
// {
//     if(A[i]>larger)
//     {
//         larger=A[i];
//     }
// }
// document.write("<br>The largest number is "+larger+"<br><br>");

//question8

//question9
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// var  A = [24, 53, 78, 91, 12];
// var size=A.length;
// var small=A[0];
// document.write("Array items: "+A.join(" , "));
// for(var i=0;i<size;i++)
// {
//     if(A[i]<small)
//     {
//         small=A[i];
//     }
// }
// document.write("<br>The smallest number is "+small+"<br><br>");
//question9


//question10
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
for(var i=1;i<=100;++i)
{
    if(i%5==0)
    {
        document.write(i+" , ");
    }
}
//question10

//Chapter 17-20              ARRAYS AND LOOP 