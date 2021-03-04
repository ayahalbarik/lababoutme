confirm("hello , this game about me");
alert("write yup or y or nope or n"+" "+"be ready");

let userName=prompt("whats your name ?");
console.log(userName)
alert("Hello"+" "+userName);
 
let mycolor=prompt("my color is ,black? ");
console.log(myColor)
if(myCountry.toLowerCase()=='yup' || mycolor.toLowerCase()=='y'){
    alert("Yes, this is true.");
 
}else if(mycolor.toLowerCase()=='nope' || mycolor.toLowerCase()=='n'){
    alert("No, my color is black");
}else{
    alert("lets go to complete")
}

let myStudy=prompt("my stude is computer sciense ");
console.log(myStudy)
if(myStudy.toLowerCase()=='yup' || myStudy.toLowerCase=='y'){
    alert("yes youre right");
}else if( myStudy.toLowerCase()=='nope' || myStudy.toLowerCase()=='n' ){
    alert("noooo .wrong ");

let myage=prompt("gusses ..is my age 28");
console.log(myage)

if(myage.toLowerCase()=='yup' || myage.toLowerCase()=='y'){
    alert("actually that is right");
}else if( myage.toLowerCase()=='nope' || myage.toLowerCase()=='n' ){
    alert("you lost");
}

let myfood=prompt("shawrma ,is my lovely food?");
console.log(myfood)

if(myfood.toLowerCase()=='yup' || myfood.toLowerCase()=='y'){
    alert("excellent");
}else if( myfood.toLowerCase()=='nope' || myfood.toLowerCase()=='n' ){
    alert("i am sad .its wrong ");
    
}else{
    alert("try another question");
}

let mygraduation=prompt("2020.is date my graduation");
console.log(mygraduation)
if(mygraduation.toLowerCase()=='yup' || mygraduation.toLowerCase()=='y'){
    alert("nooo.false");
}else { ( mygraduation.toLowerCase()=='nope' || mygraduation.toLowerCase()=='n' )
    alert("that's right");
}

let expect=prompt("input your expect ,how much i have sister?")
console.log(expect)
for(let i=0 ; i < 2 ; i++){
    if (parseInt(expect)!=3){
            alert("No, Please try again !");
            let expect=prompt("no,expect between 1 to 3")
            console.log(expect)
    }else{
        (parseInt(expect)==3)
                alert("Yes, this is true");
                break;

            }
    }
let fruits= ["kiwi", "orange", "banana", "mango", "fig", "apple"];
let fruitsUser=prompt("Can you guess what my favourite fruite is ?")
console.log(fruits)
for(let z=1 ; z<fruits.length ;z++){
    if (fruitsUser.toLowerCase()!==fruits[z]){
        alert("No, Please try again !");
        let fruitsUser=prompt("Can you guess what my favorite fruites  ?")
        console.log(fruitsUser)
}else{ (fruitsUser.toLowerCase()==fruits[z]) 
            alert("Yes, true ");{