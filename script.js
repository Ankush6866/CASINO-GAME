// // alert("Linked");
// const value1 = document.getElementById("value1");
// const value2 = document.getElementById("value2");
// const value3 = document.getElementById("value3");

// const startButton = document.getElementById("startButton");

// const result = document.getElementById("result");

// const values = ["🍈", "🍌", "🍉", "🍇", "🍎"];
// // const values = ["🍈", "🍌", "🥭", "🥑", "🫐", "🍉", "🍇", "🍎"];

// let animationId;

// function getRandomValue() {
//   return values[Math.floor(Math.random()*(values.length - 1))];
// }
// function startSlotMachine() {
//   if (animationId) clearInterval(animationId);
//   animationId = setInterval(() => {
//     value1.innerText = getRandomValue();

//     value2.innerText = getRandomValue();

//     value3.innerText = getRandomValue();

//     // if (value1.innerText===value2.innerText===value3.innerText){
//     //     clearInterval(animationId);
//     //     result.innerText="You Won!!"
//     // }
//   }, 100);

//   setTimeout(() => {
//     clearInterval(animationId);
//     console.log(value1.innerText, value2.innerText, value3.innerText);
//     checkResult();
//   }, 1000);

//   function checkResult() {
//     const val1 = value1.innerText;
//     const val2 = value2.innerText;
//     const val3 = value3.innerText;

//     if (val1 == val2 && val2 == val3) {
//       result.textContent = "JACKPOT YOU WON ";
//       result.style.color = "gold;";
//     } else {
//       result.textContent = "TRY AGAIN :(";

//       result.style.color = "white";
//     }
//   }
// }
// startButton.addEventListener("click", startSlotMachine);


const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const value3 = document.getElementById("value3");

const startButton = document.getElementById("startButton");

const result = document.getElementById("result");

const values = ["🍈", "🍌", "🥭", "🫐", "🍉", "🍇", "🍎"];

let animationId;

function getRandomValue() {
  return values[Math.floor(Math.random() * values.length-1)];

}

function startSlotMachine() {
  if (animationId) clearInterval(animationId);
  
  

  animationId = setInterval(() => {
    value1.innerText = getRandomValue();
    value2.innerText = getRandomValue();
    value3.innerText = getRandomValue();

  }, 100);

  setTimeout(() => {
    clearInterval(animationId);
    

    checkResult();
  }, 1000);
}

function checkResult() {
  const val1 = value1.innerText;
  const val2 = value2.innerText;
  const val3 = value3.innerText;

  if (val1 === val2 && val2 === val3) {
    result.textContent = "🎉 JACKPOT! YOU WON! 🎉";
    result.style.color = "gold";
    result.style.textShadow = "0 0 20px yellow";

    // optional: celebrate with confetti
    for (let i = 0; i < 30; i++) {
      let confetti = document.createElement("div");
      confetti.innerText = "🎉";

      confetti.style.position = "absolute";
      confetti.style.top = Math.random() * window.innerHeight + "px";
      confetti.style.left = Math.random() * window.innerWidth + "px";

      confetti.style.fontSize = "2rem";

      document.body.prepend(confetti);
      setTimeout(() => confetti.remove(), 2000);
    }
  } else {
    result.textContent = "TRY AGAIN 😕";
    result.style.color = "white";
    result.style.textShadow = "none";
  }
}

startButton.addEventListener("click", startSlotMachine);