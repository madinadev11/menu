let menuMain = document.querySelector(".menu");

readProduct();
function readProduct() {
  let date = JSON.parse(localStorage.getItem("product"));
  console.log(date);

  date.forEach((el, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("img");
    img.classList.add("img");
    let menu_price = document.createElement("div");
    menu_price.classList.add("menu_price");
    let menu_text = document.createElement("div");
    menu_text.classList.add("menu_text");
    let menu_textH4 = document.createElement("div");
    menu_textH4.classList.add("menu_textH4");
    let menu_name = document.createElement("h4");
    menu_name.classList.add("menu_name");
    let btn1 = document.createElement("button");
    btn1.classList.add("btn1");
    let btn2 = document.createElement("button");
    btn2.classList.add("btn2");
    let action_btn = document.createElement("div");
    action_btn.classList.add("action_btn");
    let btn3 = document.createElement("button");
    btn3.classList.add("btn3");

    img.src = el.img;
    menu_name.innerHTML = el.title;
    menu_price.innerHTML = `${el.price}$`;

    btn1.innerHTML = "to order";
    btn2.innerHTML = `  <ion-icon name="trash-outline"></ion-icon>`;
    btn3.innerHTML = `  <ion-icon name="create-outline"></ion-icon>`;

    menuMain.append(card);
    card.append(img);
    card.append(menu_text);
    menu_text.append(menu_textH4);
    menu_textH4.append(menu_name);
    menu_textH4.append(menu_price);
    menu_text.append(btn1);

    action_btn.append(btn2);
    card.append(action_btn);
    action_btn.append(btn3);

    btn2.addEventListener("click", () => {
      deleteFun(index);
    });
  });
}

function deleteFun(id) {
  let date = JSON.parse(localStorage.getItem("product")) || [];
  date.splice(id, 1);
  localStorage.setItem("product", JSON.stringify(date));
  readProduct();
}
