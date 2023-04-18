const btnMenuNavbar = document.querySelector(".btn__menu__navbar");
const btnClosedMenu = document.querySelector(".btn__closed__menu");

const menuNavbar = document.querySelector(".navbar__content");

btnMenuNavbar.addEventListener("click", () => {
  menuNavbar.classList.add("menu__mobile");
  btnMenuNavbar.classList.add("hidden__button");
  btnClosedMenu.classList.add("show__button");
  return;
});

btnClosedMenu.addEventListener("click", () => {
  menuNavbar.classList.remove("menu__mobile");
  btnMenuNavbar.classList.add("show__button");
  btnClosedMenu.classList.add("hidden__button");
});

const phrases = ["Dev FrontEnd!", "Dev BackEnd!", "Dev FullStack!"];
const element = document.getElementById("typewriter");
let index = 0;
let timerId = null;

function typeWriter() {
  let phrase = phrases[index];
  let i = 0;
  timerId = setInterval(function () {
    if (i < phrase.length) {
      element.innerHTML += phrase.charAt(i);
      i++;
    } else {
      clearInterval(timerId);
      setTimeout(function () {
        timerId = setInterval(function () {
          if (i >= 0) {
            element.innerHTML = element.innerHTML.slice(0, -1);
            i--;
          } else {
            clearInterval(timerId);
            index++;
            if (index >= phrases.length) {
              index = 0;
            }
            setTimeout(typeWriter, 1000);
          }
        }, 50);
      }, 1000);
    }
  }, 110);
}

typeWriter();
