confirm("Hello , this is a guess game.");
alert("write yes or y or no or n"+" "+"lets go !");
let summition=0;

let userName=prompt("whats your name ?");
console.log(userName)
alert("Hello"+" "+userName)+ "welcome in my game.";

function myColorFunc(){
    let myColor=prompt("My favorite color is Black! ");
    console.log(myColor)
    if(myColor.toLowerCase()=='yes' || myColor.toLowerCase()=='y'){
        alert("Yeeeeeh, excellent.");
        summition=summition+1;
    }else if(myColor.toLowerCase()=='no' || myColor.toLowerCase()=='n'){
        alert("Oooooops, you didn't");
    }else{
        alert("You didn't enter yes or no, get another question");
    }
}
myColorFunc();


function myStudyFun(){
    let myStudy=prompt("My stude is computer sciense! ");
    console.log(myStudy)
    if(myStudy.toLowerCase()=='yes' || myStudy.toLowerCase=='y'){
        alert("yes you are right");
        summition=summition+1;
    }else if( myStudy.toLowerCase()=='no' || myStudy.toLowerCase()=='n' ){
        alert("noooo .wrong ");
    }
    else{
        alert("faild, go to another question");
    }
    
}
myStudyFun();    


function myAgeFun(){
    let myage=prompt("Gusses ..is my age 28");
    console.log(myage)
    
    if(myage.toLowerCase()=='yes' || myage.toLowerCase()=='y'){
        alert("actually that is right");
        summition=summition+1;
    }else if( myage.toLowerCase()=='no' || myage.toLowerCase()=='n' ){
        alert("you lost");
    }else{
        alert("faild, go to another question");
    }   
}
myAgeFun();
    

function myFoodFun(){
    let myfood=prompt("shawrma ,is my lovely food?");
    console.log(myfood)
    
    if(myfood.toLowerCase()=='yes' || myfood.toLowerCase()=='y'){
        alert("excellent");
        summition=summition+1;
    }else if( myfood.toLowerCase()=='no' || myfood.toLowerCase()=='n' ){
        alert("I am sad .its wrong ");
        
    }else{
        alert("faild, try another question");
    }    
}
myFoodFun();

function myGraduationFun(){
    let mygraduation=prompt("2020.is date my graduation");
    console.log(mygraduation)
    if(mygraduation.toLowerCase()=='yes' || mygraduation.toLowerCase()=='y'){
        alert("nooo.false");
    }else if ( mygraduation.toLowerCase()=='no' || mygraduation.toLowerCase()=='n' ){
        alert("that's right");
        summition=summition+1;
    }else{
        alert("faild, go to another question");
    }    
}
myGraduationFun();
    
function expectFun(){
    let expect=prompt("Input your expect ,how much i have sister?")
    console.log(expect)
    for(let i=0 ; i < 4 ; i++){
        if (parseInt(expect)!=3){
                alert("No, Please try again !");
                let expect=prompt("no,expect between 1 to 3")
                console.log(expect)
        }else{
            (parseInt(expect)==3)
                    alert("Yes, this is true");
                    summition=summition+1;
                    i=4;
    
                }
        }    
}
expectFun();

function fruitFun(){
    let fruits= ["kiwi", "orange", "banana", "mango", "fig", "apple"];
    let fruitsUser=prompt("Can you guess what my favourite fruite is ?")
    console.log(fruitsUser)
    for(let z=1; z<=fruits.length ;z++){
        if (fruitsUser.toLowerCase()!==fruits[z]){
            alert("OOOps, I do not like this fruit !");
            let fruitsUser=prompt("Can you guess what my favorite fruites  ?")
            console.log(fruitsUser)
    }else if(fruitsUser.toLowerCase()==fruits[z]) {
        alert("Yeeeeeeeeeh, I really like it.");
    }
    else{
        alert("You didn't, try the game in another time.")
    }
    }    
}
fruitFun();

function CountFun(){
    let count=7;
    count=count-summition;
    alert("Hello my friend    "+userName+"   you get  "+ summition+" , you answered=  "+summition+"  , and didn't answered=  "+count);
}
CountFun();