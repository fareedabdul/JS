// if (12>11){
//     console.log("sahi hai");
    
// }else{
//     console.log("sahi nahi hai ");
    
// }


// ! else-if 

// if(12<11){
//     console.log("false");
    
// }else if(25<24){
//     console.log("yehi bhi galat");
    
// }else if(33>34){
//     console.log("ye bhi galat mama");
    
// }else{
//     console.log("mein hi sahi hoon");
    
// }

// ! switch case 

// switch (5){
//     case 1:
//         console.log("sahi hai ek h");
//         break;
//     case 2:
//         console.log("sahi hai doh h");
//         break;
//     case 3:
//         break;
//     default:
//         console.log("chalega samjh ra ");
        
// }

//! early return pattern

// function getVal(val){

//     if(val<14) return "perfect"
//     else if(val<30) return "B"
//     else if(val< 50) return "c"
//     else if(val <75) return 'D'
//     else if(val <= 100) return "sabse bada hai thu"
//     else return "khuch toh enter kar"

// } 

// console.log(getVal(100))


// ! grade system

// function getGrade(score){
//     if(score >= 90 && score <= 100) return "A+" 
//     else if(score >= 80 && score <= 89) return "A" 
//     else if(score >= 70 && score <= 79) return "B" 
//     else if(score >= 60 && score <= 69) return "C" 
//     else if(score >= 33 && score <= 59) return "D" 
//     else if(score >= 0 && score <= 32) return "Fail"
//     else return "Invalid Marks" 
// }

// console.log(getGrade(89));


// function rps(user,computer){
//     if (user === computer) return "Draw"
    
//     if(user == "paper"  && computer =="rock") return "user"
//     if(user == "scissor" && computer == 'paper') return "user"
//     if(user=="rock" && computer== "scissor") return "user"

//     return "computer"
// }
// console.log(rps("paper","rock"))

// for(kahase start karna hai, condition, increment){
// statements 
// }

// for(let i = 1; i < 11; i++){
//     console.log(i);
// }


// i = 1
// while(i <= 33){
//     console.log("Fareed");
//     i++
// }

// i = 1
// do{
// console.log("fareed");
// console.log(i);
// i++
// }while(i<32){
// }


// for(let i = 1; i < 31; i++){
//     if (i == 15){ 
//         continue;
//     }
//     console.log(i)
// }


// for(let i = 1; i <11; i++){
//     console.log(i)
// }


// i = 10
// while(i>0){
//     console.log(i);
//     i--
    

// for(let i = 1; i < 21; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for(let i = 1; i < 16; i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }


// let val = 5

// for(let i = 1; i<11; i++){
//     console.log(`${val}x${i}=${val* i}`);
    
// }

// let sum = 0
// for(let i = 1;i< 101; i++){
//      sum += i   
// }
// console.log(sum);


// for(let i = 1; i <50; i++){
//     if(i%3==0){
//         console.log(i)
//     }
// }

// let num = prompt("enter the number")

// if(num % 2 == 0){
//     console.log(`${num} is even`);
    
// }else{
//     console.log(`${num} is odd`)
// }

// count = 0
// for(let i = 1;i<101;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
        
//     }
    
// }

// for(let i = 1;i<101; i++){
//     if(i % 7 ==0){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i < 21; i++){
// if( i %3 === 0){
//     continue
// }
// console.log(i);

    
// }



// Functions 


// function decalration 
// function abcd(){
//     console.log("hello")
// }

// abcd()

// let abcd = function(){
//     console.log("kaiku aaisa");
    
// }

// let arrow = ()=>{
//     console.log("hello arrow bhai")
// }

// arrow()

// function abcd(a=0,b=0){
//     console.log(a+b)
// }
// abcd()


// rest operator 

// function abcd(){
//     if(14>15) return "true"
//     else return "false"
// }

// console.log(abcd())



// let abcd = function(){
//     console.log("first class hai ");
// }

// abcd()


// function abcd(val){
//     console.log(val());
// }

// abcd(function(){
//     console.log("inner function");
    
// })


// function abcd(){
//     return function(){
//         console.log("HOF");
        
//     }
// }
// abcd()()

// let a = 10
// function abcd(){
//     console.log("hellow");
// }

// function cd(){
//     console.log(a++);
//     console.log(a);
// }


// cd()


