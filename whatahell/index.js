let wrapper = document.querySelector(".bigbox");
const blockWidth = 20;
let s = (wrapper.offsetWidth * wrapper.offsetHeight) / Math.pow(blockWidth,2);
console.log(s);

for (let i = 0; i<s; i++) {
  wrapper.insertAdjacentHTML("afterbegin", '<div class="block"></div>');
}

let color = document.getElementById("color");
console.log(color.value);

let blocksList = document.querySelectorAll(".block");


let isDraw = false

wrapper.addEventListener("mousedown", () => {
  isDraw = true;
})

wrapper.addEventListener("mouseup", () => {
  isDraw = false;
})

blocksList.forEach((block) => {
  block.addEventListener("mouseenter", () => {
    if (isDraw) {
      block.style.background = color.value;
    }
  });
});

// for (let i = 0; i < blocks.length; i++) {
//   blocks[i].addEventListener("mouseenter", function () {
//     blocks[i].classList.add("--active");
//     setTimeout(() => {
//       blocks[i].classList.remove("--active");
//     }, 1000);
//   });
// }
