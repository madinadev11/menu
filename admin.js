let image = document.querySelector(".image");
let name1 = document.querySelector(".name");
let price = document.querySelector(".price");

let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let product = {
    img: image.value,
    title: name1.value,
    price: price.value,
    id: new Date(),
  };

  let date = JSON.parse(localStorage.getItem("product")) || [];
  date.push(product);
  localStorage.setItem("product", JSON.stringify(date));
});
