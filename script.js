//console.log("Hi Shivam, Welcome to JavaScript");

/*fullname = "Shivam Yadav";
age = 31;
console.log(fullname, age);

//This is a comment
let a = 5;
let b = 7;

console.log("a+b=",a+b);*/

let num = prompt("Enter a number");

if (num % 3 === 0){
    console.log(num,'is a multiple of 3');
}else{
    console.log(num,"is not a multiple of 3");
}

/**** Callback function****** */
console.log("Waiting 2.5 seconds")
setTimeout(function(){
    console.log("Do this thing in here");
}, 2500)
console.log("The last line");

/*** Timeouts and intervals ***/
let count = 0;
const myInterval = setInterval(function() {
    console.log("Checking domrthing..")
    count++;

    if (count === 3)
        //Unseet the interval
    clearInterval(myInterval)
    crossOriginIsolated.log("This was the last one");
})