let x = 5;
let y = 7;
let z = x + y;
console.log(z);
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

SumNPrint(x, y);
SumNPrint(A, B);

function SumNPrint(x1, x2){
    let x3 = x1 + x2;
    console.log(x3);
    return x3;  
}

if(C.length > z){
    console.log(C);
} else if (C.length == z){
    console.log("good job!");
} else {
    console.log(z);
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// findTheBanana(L1);
// findTheBanana(L2);

L1.forEach(findTheBanana);
L2.forEach(findTheBanana);

function findTheBanana(element, index){
    if(element == "Banana"){
        alert("Banana found at " + index);
    }
}

if(window.location.pathname == "/Users/kurtschimmel/Desktop/WebDevLabs/67250_webdevlabs/kschimme-lab3/index.html"){
    greetingFunc();
}

function greetingFunc(){    
    const d = new Date();
    let h = d.getHours();

    if (h <= 12){
        document.getElementById("greeting").innerHTML = "Good Morning, I am Kurt Schimmel";
    } else if (12 < h && h <= 18){
        document.getElementById("greeting").innerHTML = "Good Afternoon, I am Kurt Schimmel";
    } else if (18 < h && h <= 20){
        document.getElementById("greeting").innerHTML = "Good Evening, I am Kurt Schimmel";
    } else if ((20 < h && h <= 25) || (0 < h &&  h <= 5)){
        document.getElementById("greeting").innerHTML = "Good Night, I am Kurt Schimmel";
    }
}