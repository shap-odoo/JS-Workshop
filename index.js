let random_num = Math.floor(Math.random() * 101);
let trials = 0;

function checkGuess() {
    const input = parseInt(document.getElementById("guessInput").value);
    const resultElement = document.getElementById("result");

    if (isNaN(input) || input < 0 || input > 100) {
        resultElement.textContent = "Please enter a valid number between 0 and 100.";
        return;
    }

    trials++;

    if (input === random_num) {
        resultElement.textContent = `CORRECT GUESS - ${trials} Trials`;
    } else if (input < random_num) {
        resultElement.textContent = "TOO LOW. Try again.";
    } else {
        resultElement.textContent = "TOO HIGH. Try again.";
    }
}













// console.log("shama")
// let random_num = Math.floor(Math.random() * 101);
// // console.log(random)
// let trials = 0;
// let input;
// while (input != random_num){
//   input = Number.parseInt(prompt("Enter a Number between 0 to 100"));
  
//   if (random_num>input){
//     console.log("Low")
//   }
//   else if (random_num<input) {
//     console.log("HIGH")
//   }
  
//   trials += 1;
// }
// console.log(`CORRECT GUESS- ${trials} Trials`)














