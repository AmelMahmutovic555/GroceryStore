console.log("It works");

let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

let healtyFoodArray = [
  "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOFG5TSeqaCbMlu0Ql_eVn1ie2VE35U88kA&s",
  "https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg",
];

let img = document.querySelectorAll("img")[0];
// console.log(img.offsetLeft);
let i = 0;
let brojac = 1;
let brojac1 = 0;
let opacityBrojac = 0.9;
let intervalId = null;

function appear() {
  intervalId = setInterval(() => {
    if (opacityBrojac >= 0.9) {
      clearInterval(intervalId);
      //   disappear()
    } else {
      let d = (img.style.opacity = opacityBrojac += 0.1);
      console.log(d);
    }
  }, 100);
}

function disappear() {
  // return new Promise((resolve) => {
  intervalId = setInterval(() => {
    if (opacityBrojac <= 0.0) {
      clearInterval(intervalId);
      appear();
    } else {
      let d = (img.style.opacity = opacityBrojac -= 0.1);
      console.log(d);
    }
  }, 100);
  // });
}

rightArrow.addEventListener("click", async function () {
  let img = document.getElementsByTagName("img")[0];
  if (brojac <= healtyFoodArray.length - 1) {
    img.setAttribute("src", healtyFoodArray[++i]);
    brojac++;
    brojac1++;
    console.log(healtyFoodArray[i]);
    console.log(brojac);
    console.log(healtyFoodArray.length);
  }
});

leftArrow.addEventListener("click", function () {
  let img = document.getElementsByTagName("img")[0];
  if (brojac > 0 && brojac1 !== 0) {
    img.setAttribute("src", healtyFoodArray[--i]);
    brojac--;
    brojac1--;
    console.log(healtyFoodArray[i]);
    console.log(brojac);
    console.log(brojac1);
    console.log(healtyFoodArray.length);
  }
});
