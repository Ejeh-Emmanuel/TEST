// function to find product of two numbers 
function product(num1, num2) {
    const result = num1 * num2;
    console.log(result);
}

product(5, 6);

// code to change navbar background color on hover
document.getElementById("nav").addEventListener("mouseover", function () {
    document.getElementById("nav").style.backgroundColor = "grey";
})

document.getElementById("nav").addEventListener("mouseout", function () {
    document.getElementById("nav").style.backgroundColor = "darkgoldenrod";
})

// code to alert hello world when button is clicked
document.getElementById("sign-up-button").addEventListener("click", function(){
    alert("Hello World!");
})

// code to find the sum of numbers in an array
numbers = [1, 2, 3, 4, 5];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum);

// for loop code to return each element of an array
myArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for(let i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
}