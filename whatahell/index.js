let blocks = document.querySelectorAll(".block");
console.log(blocks);

for (let i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener("mouseenter", function () {
    blocks[i].classList.add("--active");
    setTimeout(() => {
      blocks[i].classList.remove("--active");
    }, 1000);
  });
}
