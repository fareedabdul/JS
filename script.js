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


function rps(user,computer){
    if (user === computer) return "Draw"
    
    if(user == "paper"  && computer =="rock") return "user"
    if(user == "scissor" && computer == 'paper') return "user"
    if(user=="rock" && computer== "scissor") return "user"

    return "computer"
}
console.log(rps("paper","rock"))