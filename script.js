//1. Sum of two integers

// let a = 30;
// let b = 60;
// let sum = a + b;
// console.log(sum);


// 2. Print the message along with values and sum

// let m = 45;
// let n = 12;
// let sum = m + n;
// console.log(`The sum of ${m} and ${n} is = ${sum}`);


// 3. Accept two integers from user and print the sum

// let b = +prompt("Enter the first Integer");
// let d = +prompt("Enter the second Integer");

// let sum = b + d;

// console.log(`The sum of First integer nums ${b} and second integer nums ${d} are = ${sum}`);


// 4. Accept the user's name, age and print in flowwing manner

// let name = prompt("Please enter your name");
// let age = +prompt("Please enter your age");

// console.log(`Your name is ${name} and you are ${age} years old.`);


// 6. Accept two numbers from user and swap their values

//without using third variable

// let a = +prompt("Enter the first number:");
// let b = +prompt("Enter the second number");
// console.log(`a = ${a} , b = ${b}`);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`a = ${a} , b = ${b}`);


// using a third variable
// let a = +prompt("Enter the first number");
// let b = +prompt("Enter the second number");

// console.log(`a = ${a} , b = ${b}`);

// let swap = a;
// a = b;
// b = swap;
// console.log(`a = ${a} , b = ${b}`);


// 7. Accept the length and width of a rectangle. Calculate & print the area and perimiter.

// let length = +prompt("Enter the rectangle of length");
// let width = +prompt("Enter the rectangle of width");

// let area = length * width;
// let perimeter = 2 * (length + width)

// console.log(area);
// console.log(perimeter);



// 8. Accept the parameters and calculate the Compound interest & print it on STDOUT(Use math class method) 
 
// let principal = +prompt("Enter the principal amount:");
// let rates = +prompt("Enter the rates:");
// let timesCompound = +prompt("Enter the timescompound:");
// let years = +prompt("Enter the years:")

// let r = rates/100;

// let amount = principal*Math.pow((1 + r/timesCompound), (timesCompound * years));

// let cI = amount - principal;

// console.log(amount);
// console.log(cI);


// 9.Accept the three side of triangle and calculate the area using herons formula

// let a = +prompt("Enter the number of a value")
// let b = +prompt("Enter the number of b value")
// let c = +prompt("Enter the number of c value")

// let s = (a + b + c)/2;

// let result = (s * (s - a) * (s - b) * (s - c))

// console.log(s);
// console.log(result);


// 10. Find surface area of sphere

// let radius = 3;

// let surFace = 4 * Math.PI * Math.pow(radius , 2)

// console.log(surFace);


// 11. find circumference and area of circle

// let r = 5;

// let circumference = 2 * Math.PI * r;
// let area = Math.PI * Math.pow(5, 2)

// console.log(circumference);
// console.log(area);


// 12. Accept two numbers and print the greatest between them

// let a = +prompt("Eneter the first number");
// let b = +prompt("Eneter the second number");

// if( a > b){
//     console.log("a greatest then b");
// }else if( a < b){
//     console.log("b greatest than a");
// }else{
//     console.log("a and b both are equal");
// }

// 13. Accept the gender from the user as char and print the respective greeting message ex. Good Morning Sir(on the basis of gender)

// let fullName = prompt("Enter your name")
// let Gender = prompt("Enter your Gender M/F");
// if(Gender == "male" ||Gender == "Male"){
//     console.log("Good Morning Sir");
// }
// else{
//     console.log("Good Morning Ma'am");
// }


// 14. Extend the previous program and handle the wrong inputs.
// Print Good Morning Sir for input m or M & Good morning Maam for input F or f else print wrong input

// let fullName = prompt("Enter your name")
// let Gender = prompt("Enter your Gender M/F");
// if(Gender == "male" ||Gender == "Male"){
//     console.log("Good Morning Sir");
// }else if (Gender == "female" ||Gender == "Female"){
//     console.log("Good Morning Ma'am");
// }else{
//     console.log("Invalid input: Please Enter 'M/m' and 'F/f'");
    
// }
// console.log(fullName);


// 15. Accept an integer and check whether it is an even number or odd.

// let int = +prompt("Enter the Integer value");

// if(int % 2 === 0){
//     console.log("even");
    
// }else{
//     console.log("Odd");
    
// }


// 16. Accept name and age from the user. check if the user  is a valid voter or not.

// let fullName = prompt("Enter your name")
// let age = prompt("Enter your age")

// if(age >= 18){
//     console.log(`Hello ${fullName}, you are a valid voter`);
    
// }else{
//     console.log(`Sorry ${fullName}, you can't cast the vote`);
    
// }

// Part-2 Print after how many years the user will be eligible

// let Name = prompt("Enter a name:")
// let age = +prompt("Enter a age:")


// if(age >= 18){
//     console.log(`Hello ${Name} you are eligible for vote`);
    
// }else{
//     let eligible = 18 - age;
//     console.log(`you are not eligible for vote`);
//     console.log(`${eligible} years after you are eligible`);
// }
 

// 17. Accept a day number between 1-7 and print the corrresponding dayname.

// let dayNum = +prompt("Enter day nums");

// if(dayNum == 1){
//     console.log("Today is Monday");  
// }else if(dayNum == 2){
//     console.log("Today is Tuesday");
// }else if(dayNum == 3){
//     console.log("Today is Wednesday");
// }else if(dayNum == 4){
//     console.log("Today is Thursday");   
// }else if(dayNum == 5){
//     console.log("Today is Friday");
// }else if(dayNum == 6){
//     console.log("Today is Saturday");
// }else if(dayNum == 7){
//     console.log("Today is Sunday");
// }else{
//     console.log("Wrong Input");
// }


// 18. Accept three numbers and print the greatest among them

// let a =  +prompt("Enter a number first")
// let b =  +prompt("Enter a number second")
// let c =  +prompt("Enter a number three")
// if(a >= b && a >= c){
//     console.log("a is greater than both b and c"); 
// }else if(b >= a && b >= c){
//     console.log("b is greater than both a and c");
// }else{
//     console.log("c is greater than both a and b");
// }


// 19.Accept a year and check if a leap year or not (google  to find out what's leap year)

// let year = +prompt("Enter a year");

// if((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)){
//     console.log(year , "is a leap year");
    
// }else{
//     console.log(year , "is not a leap year");   
// }


// 20. Shop Discount - Description on Graphic

// let price = 3000;
// let discount;
// if(price > 500 && price < 1000){
//     discount = price * 0.10
//     price -= discount
//     console.log("10% discount in this price:", discount);
//     console.log("After Discount Price:", price);
// }else if(price => 1000 && price < 2499){
//     discount = price * 0.20
//     price -= discount
//     console.log("20% discount in this price:", discount);
//     console.log("After Discount Price:", price);
// }else{ 
//     discount = price * 0.25
//     price -= discount
//     console.log("25% discount in this price:", discount);
//     console.log("After Discount Price:", price);
// }



// let amount = 700;
// let discount;
// if(amount >= 500 && amount < 1000){
//     amount = ((1/10)*amount)
//     console.log(amount);
// }


// 21. Bjili bill - Description of graphic

// let unit = +prompt("Enter Your electric consumption:")
// let bill;

// if(unit <= 100){
//     bill = unit * 5;
//     console.log(bill);
// }else if(unit > 100 && unit <= 200){
//     bill = (100 * 5) + ((unit - 100)* 6)
//     console.log(bill);
// }else{
//     bill = (100 * 5) + (100 * 6) + ((unit - 200)* 8)
//     console.log(bill);
// }


// 22. Accept an english alphabet from user and check if it is a consonent or a vowels.

// let alphabet = prompt("Enter a Alphabet:")
// let res;

// if(alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" ||alphabet === "u"){
//     res = "Alphabet is a vowel"
//     console.log(alphabet , res);
// }else if (alphabet >= "a" && alphabet <= "z"){
//     res = "is a consonant"
//     console.log(alphabet , res);
// }else{
//     res = "Please enter a valid alphabet"
//     console.log(res);    
// }

// loops Question

// 23. Accept an integer and print hello world n times

// let int = +prompt("Enter a Integer Number")
// let print;
// for(let i = 1; i <= int; i++){
//     // print += "Hello World"
//     console.log(i, "Hello World");
// }


// 24. Print natural number up to n.

// let int = 10;

// for(let i = 1; i <= int; i++){
//     console.log(`i = ${i}`);
    
// }


// 25.Reserve for loop print n to 1

// let n = 1;

// for(let i = 5; i >= n; i--){
//     console.log(i);
    
// }


// 26. Take a number as input and print its table
// 1st method
// let table = 10;
// let num;
// for(let i = 1; i <= table; i++){
//     num = 5*i;
//     console.log(`5 * ${i} = ${num}`); 
// }

// 2nd method
// let num1 = +prompt("Enter a number:")
// for(let i = 1; i <=10; i++){
//     console.log("5 *", i , "=", (5 * i));   
// }


// 27. Sum up to n terms.

// let num = 10;
// let sum = 0;
// for(let i = 1; i <= 10; i++){
//     sum += i;
//     console.log(` ${i} = ${sum} +`);
    
    
// }

// 28. Factorial of a number

// let int =  5;
// let fact = 1;
// for(let i = 1; i <= int; i++){
//     fact *= i;
//     console.log(`${int} ka factorial number hai = ${fact}`);
    
// }


// 29.Print the sum of all even & odd numbers in a range seperately.

// let num1 = +prompt("Enter start number:")
// let num2 = +prompt("Enter end number:")

// let even = 0;
// let odd = 0;

// for(let i = num1; i <= num2; i++){
//     if(i % 2 == 0){
//         even += i
//     }else{
//         odd += i
//     }
// }
// console.log(even);
// console.log(odd);


// 30. Print all factors of a number.

// let num = +prompt("Enter a number")
// for(let i = 1; i <= num; i++){
//     if(num % i == 0){
//        console.log(i);
//     }
// }


// 31. Print the sum of all factors of a number, 50-> 1+2+5+10+25 = 43

// let num = +prompt("Enter a number")
// let sum = 0;
//     for(let i = 1; i < num; i++){
//         if(num % i == 0){
//             sum += i
//             console.log(i);
//             console.log(sum);
//         }
//     }
    

// 32.Check if the number is prime or not

// let num = 13;
// let isprime = true;

// if(num <= 1){
//     isprime =  false;
// }else{
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % 2 === 0){
//             isprime = false;
//             break;
//         }
//     }
// }

// if(isprime){
//     console.log(num, "This is a prime number");
// }else{
//     console.log(num, "This is not a prime number");
// }



// 33. Write a program to take two inputs a,b & find the value of a raised to the power of b. Ex-  a = 2, b = 5  OP- 2^5 = 32

// let a = 2;
// let b = 5;

// let OP = Math.pow(a, b)
// console.log("2^5 =", OP);


// let a = 2;
// let b = 5;
// let ans = 1;

// for(let i = 1; i <= b; i++){
//     ans = a*ans;
// }
// console.log(ans);


// 34.Seprate each digit of a number and print it on the new line ex-123 OP = 321

// let a = 147;
// while(a > 0){
//     let rem = a%10;  //  1st iterate 123/10 = 3, 2nd iterate 12/10 = 2, 3rd iterate 1/10 = 1
//     console.log(rem);  // 3 , 2, 1
//     a = Math.floor(a /10)
// }


// 35. Sum of digit of a number , 936 = 18;

// let a = 988868;
// let sum = 0;

// while(a > 0){
//     let rem = a%10;
//     sum += rem;
//     console.log(sum);
//     a = Math.floor(a/10)
// }


// 36. Accept a number and print its reverse 

// let a = +prompt("Enter a number");

// let rev = 0;

// while(a > 0){
//     rev = (rev * 10) + (a % 10);
//     console.log(rev);
//     a =  Math.floor(a/10)
// }


// 37. Accept a number and check if it is a pallindromic number (if number and its reverse are equal)

// let a = +prompt("Enter a number");
// let temp = a;
// let rev = 0;

// while(a > 0){
//     rev = (rev * 10) + (a % 10)  // 0* 10 + 1 =1
//     console.log(rev);             // 1* 10 + 2 = 12
//     a = Math.floor(a / 10)        // 12* 10 + 3 = 123
//                                  // 123* 10 + 2 = 1232
//     }                            // 1232* 10 + = 12321

   
// 38.Accept a number  and check if it is a strong number or not (sum of factorial of each digit) ex -  145 = 1! + 4! + 5! = 145

// let  a = 145;
// let b = a;
// let sum = 0;

// while(a > 0){
//     let digit = a % 10;
//     let fact = 1;
//     for(let i = 1; i <= digit; i++){
//         fact *= i
//     }
//     sum += fact;
//     a = Math.floor(a / 10)
// }

// if(sum === b){
//     console.log(b , "is a strong number");
    
// }else{
//     console.log(b , "is not a strong number");
// }
















// let ch;

// do{
//     console.log("Menu\n1.Add\n2.Sub\n3.Multiple\n4.division\n5.modulus\n0.Exit");
//     ch = +prompt("Enter a number");
//     if(ch == 1){
//         let a = +prompt("Enter the first Number");
//         let b = +prompt("Enter the second Number");
//         console.log("a + b =", a + b);
//     }else if(ch == 2){
//         let a = +prompt("Enter the first Number");
//         let b = +prompt("Enter the second Number");
//         console.log("a - b =", a - b);
//     }else if(ch == 3){
//         let a = +prompt("Enter the first Number");
//         let b = +prompt("Enter the second Number");
//         console.log("a * b =", a * b);
//     }else if(ch == 4){
//         let a = +prompt("Enter the first Number");
//         let b = +prompt("Enter the second Number");
//         console.log("a / b =", a / b);
//     }else if(ch == 5){
//         let a = +prompt("Enter the first Number");
//         let b = +prompt("Enter the second Number");
//         console.log("a % b =", a % b);
//     }
    
// }while(ch != 0)


