//document.getElementById("count-el").innerText = 5

//let myAge = 20;
//console.log(myAge)

//let myAge = 20;
//humanDogRatio = 7;
 
//let myDogAge = myAge * humanDogRatio ;
//console.log(myDogAge)


// let count = 5 ;
// count +=10;
// console.log (count)

// let bonusPoints = 50;
//     bonusPoints += 50;
//     bonusPoints -= 75;
//     bonusPoints += 45;


//     console.log(bonusPoints)

// function increment(){
//   console.log("The fuckin button was clicked")
// }


// function countdown(){
//   console.log (42)
// }


// countdown()


// let lap1 = 34
//     lap2 = 33
//     lap3 = 36

// function laps(){
//   let total = lap1 + lap2 + lap3;
//   console.log(total)
// }
  
//   laps()

// let lapComplited = 0;

// function laps(){
//   console.log( lapComplited +=1)
// }

// laps()
// laps()
// laps()

//the button is functional😂
 let count = 0;
countEl = document.getElementById("count-el")
function increment(){
 count += 1
  countEl.textContent = count
 console.log(count)
 }

// function save(){
//   console.log(count)
// }

// var myName = "Jolly";
//     greetings =  "Hi , my name is" 
//     myGreetings = (greetings +" "+ myName )
// console.log(myGreetings)


// var container = document.getElementById("container"). innerHTML = "<button>Buy!</button>"

 let saveEl = document.getElementById("save.el")
function save(){
let countStr = count + " - "  
saveEl.textContent += countStr
countEl.textContent = 0
count = 0
} 

































