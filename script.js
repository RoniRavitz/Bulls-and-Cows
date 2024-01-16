//drag N drop
function dragndrop() {
  const colorWrap = document.querySelectorAll(".color-wrap");
  colorWrap.forEach((drag) => {
    new Sortable(drag, {
      group: {
        name: "shared",
      },
      animation: 350,
      //   sort: false, // To disable sorting: set sort to false
    });
  });
}

dragndrop();

//the colors

const theColors = ["yellow", "red", "green", "blue", "purple", "orange"];
function getRandomColors(numColors) {
  const randomColors = [];

  while (randomColors.length < numColors) {
    const randomIndex = Math.floor(Math.random() * theColors.length);
    const randomColor = theColors[randomIndex];

    if (!randomColors.includes(randomColor)) {
      randomColors.push(randomColor);
    }
  }

  return randomColors;
}

const selectedColors = getRandomColors(4);
console.log(selectedColors);

const colorOne = selectedColors[0];
const colorTwo = selectedColors[1];
const colorTrhee = selectedColors[2];
const colorFour = selectedColors[3];

const go = document.querySelector(".go");

go.addEventListener("click", function () {
  const colorsWrap = document.querySelectorAll(".row:last-of-type .color-wrap");
  const colors = document.querySelectorAll(".row:last-of-type .color");
  const scoreRow = document.querySelector(".score-row:last-of-type");
  if (colorsWrap[0].innerHTML === "" || colorsWrap[1].innerHTML === "" || colorsWrap[2].innerHTML === "" || colorsWrap[3].innerHTML === "") {
    console.log("empty");
  } else {
    const getColorOne = colors[0].getAttribute("data-color");
    const getColorTwo = colors[1].getAttribute("data-color");
    const getColorThree = colors[2].getAttribute("data-color");
    const getColorFour = colors[3].getAttribute("data-color");
    if (getColorOne === colorOne && getColorTwo === colorTwo && getColorThree === colorTrhee && getColorFour === colorFour) {
      console.log("win");
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        confettiNumber: 500,
      });
    } else {
      if (getColorOne === colorOne) {
        console.log("bool");
        const bool = document.createElement("span");
        bool.classList.add("bool");
        scoreRow.appendChild(bool);
      } else if (getColorOne === colorTwo || getColorOne === colorTrhee || getColorOne === colorFour) {
        console.log("pgiah");
        const pgiah = document.createElement("span");
        pgiah.classList.add("pgiah");
        scoreRow.appendChild(pgiah);
      } else {
        console.log("none");
      }

      if (colors[1].getAttribute("data-color") === colorTwo) {
        console.log("bool");
        const bool = document.createElement("span");
        bool.classList.add("bool");
        scoreRow.appendChild(bool);
      } else if (getColorTwo === colorOne || getColorTwo === colorTrhee || getColorTwo === colorFour) {
        console.log("pgiah");
        const pgiah = document.createElement("span");
        pgiah.classList.add("pgiah");
        scoreRow.appendChild(pgiah);
      } else {
        console.log("none");
      }

      if (colors[2].getAttribute("data-color") === colorTrhee) {
        console.log("bool");
        const bool = document.createElement("span");
        bool.classList.add("bool");
        scoreRow.appendChild(bool);
      } else if (getColorThree === colorTwo || getColorThree === colorOne || getColorThree === colorFour) {
        console.log("pgiah");
        const pgiah = document.createElement("span");
        pgiah.classList.add("pgiah");
        scoreRow.appendChild(pgiah);
      } else {
        console.log("none");
      }
      if (colors[3].getAttribute("data-color") === colorFour) {
        console.log("bool");
        const bool = document.createElement("span");
        bool.classList.add("bool");
        scoreRow.appendChild(bool);
      } else if (getColorFour === colorTwo || getColorFour === colorTrhee || getColorFour === colorOne) {
        console.log("pgiah");
        const pgiah = document.createElement("span");
        pgiah.classList.add("pgiah");
        scoreRow.appendChild(pgiah);
      } else {
        console.log("none");
      }

      const newRow = document.createElement("div");
      newRow.classList.add("row");
      newRow.innerHTML = '<div class="color-wrap"></div><div class="color-wrap"></div><div class="color-wrap"></div><div class="color-wrap"></div>';
      document.querySelector(".game").appendChild(newRow);

      const newScore = document.createElement("div");
      newScore.classList.add("score-row");
      document.querySelector(".right").appendChild(newScore);

      const leftColorWrap = document.querySelectorAll(".colors-wrap .color-wrap");

      leftColorWrap[0].innerHTML = '<div class="color yellow" data-color="yellow"></div>';
      leftColorWrap[1].innerHTML = '<div class="color red" data-color="red"></div>';
      leftColorWrap[2].innerHTML = '<div class="color blue" data-color="blue"></div>';
      leftColorWrap[3].innerHTML = '<div class="color green" data-color="green"></div>';
      leftColorWrap[4].innerHTML = '<div class="color purple" data-color="purple"></div>';
      leftColorWrap[5].innerHTML = '<div class="color orange" data-color="orange"></div>';

      dragndrop();
    }
  }
});
