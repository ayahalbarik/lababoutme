'use strict'

var score = 0;

var uName = prompt("Whats your name?");
alert(`nice to meet you +);
console.log(`your name is: uName');

var ready = confirm('are you ready to ask you ') , you have to anser with 'yes' or 'no');
if (ready === true){
    alert('hola');
    score = score + 1;
}else{
    alert(' oh no ');
    
};

function func1(){
    var qus1 = prompt('which color is fav ,black').toLowerCase();
if (qus1 == "yes" || qus1 == "y"){
    alert('true');
    document.getElementById("answer").classList.add("true");
    document.getElementById("answer").innerText = 'true';
    score = score + 1;
}else if (qus1 == "no" || qus1 == "n"){
    alert('false');
    document.getElementById("answer").classList.add("false");
    document.getElementById("answer").innerText = 'false';
}

function func2(){var qus2 = prompt('where i studied?,alpalqaa?').toLowerCase();
console.log('second question');
if (qus2 == "yes" || qus2 == "y"){
    alert('true');
    document.getElementById("answer").classList.add("answer");
    document.getElementById("answer").innerText = 'true';
    score = score + 1;
}else if (qus2 == "no"||ques2=="n"){
    alert('oh no');
    document.getElementById("answer").classList.add("false");
    document.getElementById("answer").innerText = 'False';
}

function func3(){var qus3 = prompt('my fav plase ,irbid?').toLowerCase();
console.log('let go');
if (qus3 == "no" || qus3 == "n"){
    alert('oops');
    document.getElementById("answer").classList.add("false");
    document.getElementById("false").innerText = 'false';
}else if (qus3 == "yes" || qus3 == "y"){
    alert(`try again');
    document.getElementById("answer").classList.add("true");
    document.getElementById("true").innerText = 'true';
}else {
    alert('yup');
    document.getElementById("answer").classList.add("true");
    document.getElementById("true ").innerText = 'true';
}
}

    var fulsSc = 3 - score;
    var croSc = score ;
document.getElementById("corect").innerText = 'You answer '+ croSc +' Correct Answers';

}

