// Varivles - Constant - Data Type & Opritions - boolean - Template Literals - Arrays - IF Condision - switch 

console.log("Hello World");
// varible
let name = 'Saad'
console.log(name);
console.log(name)
// change varible
name ='Saad Alduhimi'
console.log(name)

// Constant الثوابت 
const YearOfBirthDay =2003;
console.log(YearOfBirthDay)

/*
Data Type & Opritions
*/

console.log(typeof YearOfBirthDay)// أظهار نوع داتاتايب

// boolean 
let num = 2 > 3;
console.log(num)
 num = 3==3;    //من حيث القيمة فقط
 console.log(num)
 num = 9!=0;
 console.log(num)
 num = 1 === '1'; // من حيث القيمة ونوع البيانات
 console.log(num)

 // Template Literals : ( يحتوي على اكسبرشن او كود)(نص متعدد الأسطر)
 let massage = `Welcome 
 to 
JavaScript`;
    console.log(massage)
let laungauge ='JavaScript';
massage = `Welcome to ${laungauge}`;
console.log(massage);

//Undefind قيمة غير محددة
let paap;
console.log(paap)

// Nan means: Not a Number 
let number = 2;
console.log(number * 'Hi'); // ليس رقم لانك ضربت رقم في نص 
//Length
console.log(laungauge.length)

//String Concatination 
let Fname = 'Saad ' , Lname = 'Alduhmi'
console.log(Fname + Lname )

// Backet Notation 
console.log(Fname[0])
//----
let title = 'Mr.';
title += 'Ali'; // title = title + 'Ali';
//-------
console.log(title);
let Word = 'A\tB\tC\tD\tE'  // \t (TAP)
console.log(Word)


// Arrays 
let colors = ["Black","RED","White"];
console.log(colors[0]);
// update elemnt 
colors[2] = "Green"
console.log("After update",colors)
console.log(colors.length);

// لتحقق وجود عنصر في المجموعه 
console.log(colors.includes("RED"))

//لأضافه عنصر في البدايه 
colors.unshift("Blue");
console.log(colors)

// حذف عنصر في بدايه المصفوفه و أرجاع قيمته 
let red =colors.shift();
console.log(colors)
console.log(red)

/* push & pop 
push تضيف عناصر في النهايه 
pop  تحذف من النهاية
*/  
colors.push("Brown","Yallow")
console.log(colors)
colors.pop();
console.log(colors)

// IS ARRAY لمعرفه القيمه هل هي مصفوفه ام لا 
let color = "Gray"
console.log(Array.isArray(color))


// 2D Array 
let value = 
[[1,2,3]
,[4,5,6]
,[7,8,9]] 
console.log(value[1][2])

// Split Method تقسم النص بحسب نمط و تجعله عناصر في مصفوفه 
massage = "Welcome to JavaScript";
console.log(massage.split(" "))

// Join Array دمج عناصر المصفوفه و جعلها نص 
let Name = ["Ali" , "SAUD" , "KHALID"]
console.log(Name.join(" ")) 



// IF Condision 

let age = 18
if (age < 18){
    console.log("You shouldn't be here.")
}else{
    console.log("Welcome sir.")
}

// Else if 
//How check if number even or odd?

let num1 = 1
if (num1>0){
    console.log("$")
}else if(num1<0){
    console.log("#")
}else if(num1=0){
    console.log("&")
}



// Switch 
let cars = ["TOYOTA","KIA","GMC"]
let colornum = 4
switch(colornum){
case 1:
        console.log(cars[0])
        break;
case 2:
        console.log(cars[1])
        break;
case 3:
        console.log(cars[2])
        break;
case 4:
case 5:
        console.log("Honda")
        break;
default:
    console.log("Nissan")
}
//----------------------------------------------------------------------------------------------------------------------------


// Loop  & Functions 

/*

for ( start value ;condision; Final Expresion){

    // Statement
}
*/

for (let i = 1 ; i <=10 ; i++){
    console.log(i)
}

for ( i = 1 ; i <=10; i = i+2){
    console.log(i)
}

let friends = ["Ahmed","Ali","Sultan","Khaled"]

for (i = 0 ; i <friends.length; i++){
    console.log(friends[i])
} 
/*
for (let friend of friends){
    console.log(friend)
}
*/

// for of with String 
 massage = "Welcome to JavaScript"
for(let char of massage){
    console.log(char)
}

// While 
let colors = ["RED","BLACK","WHITE","BLUE"]
i = 0;
/*while(i <colors.length){
    console.log(colors[i])
    i++
}*/

// DO while
do {
    console.log(colors[i])
    i++
}while(i <colors.length)

// use break in loop
let numbers = [1,2,3,0,4,5];
for(i=0 ; i<numbers.length ; i++){
    if (numbers[i] == 0){ 
    break; // or continu if you want no stop 
    }
    console.log(numbers[i])
} console.log("***")
// --------------------------------------------------------------------------------------------------------

// Basic 
function printnumber(){
    for( i = 0 ;i<=4 ; i++){
        console.log(i)
    }
}
printnumber();

// with parameter
function add(firstnum,secondnum){
    let result = firstnum + secondnum ;
    return result;
}
let r = add(6,6); console.log(r)