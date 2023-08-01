var ProductImg = document.getElementById("productImg");

var SmallImg = document.getElementsByClassName("small-img");
SmallImg[0].classList.add("active");

for (let i = 0; i < SmallImg.length; i++) {
  SmallImg[i].onclick = function () {
    for (let j = 0; j < SmallImg.length; j++) {
      SmallImg[j].classList.remove("active");
    }
    ProductImg.src = SmallImg[i].src;
    SmallImg[i].classList.add("active");
  };
}
