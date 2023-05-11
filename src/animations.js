const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function animateText(numSpins, duration, ...toAnimates) {
  toAnimates.forEach(toAnimate => {
    let iterations = 0;
    const interval = setInterval(() => {
      toAnimate.innerText = toAnimate.innerText.split("")
        .map((letter, index) => {
          if (index < iterations) {
            // returns the actual letter
            return toAnimate.dataset.value[index];
          }
          return allLetters[Math.floor(Math.random() * allLetters.length)];
        }).join("");

      if (iterations >= toAnimate.dataset.value.length) {
        clearInterval(interval);
      }
      iterations += 1 / numSpins;
    }, duration);
  })
}

//animateText(); // run animation on page load

// h1Element.onmouseover = event => {
//   animateText();
// }
// document.querySelector("h1").onmouseover = e => {
//   let iterations = 0;
//   const interval = setInterval(() => {
//     e.target.innerText = e.target.innerText.split("")
//       .map((letter, index) => {
//       if (index < iterations) {
//         // returns the actual letter
//         return e.target.dataset.value[index];
//       }
//       return allLetters[Math.floor(Math.random() * 26)];
//     }).join("");
    
//     if (iterations >= e.target.dataset.value.length) {
//       //iterations = 0;
//       clearInterval(interval);
//     }
//     iterations += 1 / 5;
//   }, 40);
// }

export default animateText;
