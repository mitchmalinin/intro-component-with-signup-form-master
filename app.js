let form = document.querySelector("#form");
let inputs = document.getElementsByClassName("inputs");
let error = document.querySelector("#error");
let emailInput = document.querySelector("#email");
let errorImgs = document.getElementsByClassName("error-img");
let errorMsg = document.getElementsByClassName("errorMsg");
let button = document.querySelector("#submit-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  Array.from(errorImgs).forEach((img) => {
    img.setAttribute("style", "display: none");
  });
  Array.from(errorMsg).forEach((msg) => {
    msg.innerHTML = "";
  });

  Array.from(inputs).forEach((input) => {
    input.style.border = "1.5px solid hsl(246, 10%, 81%)";
  });

  checkInputFields();
});

console.log(inputs);
const checkInputFields = () => {
  Array.from(inputs).forEach((input) => {
    if (
      input.value === "" ||
      input.value === null ||
      (input.name === "Email" && input.value.includes("@") === false)
    ) {
      let errorMsg = document.createElement("div");
      let errorImg = document.createElement("img");
      errorImg.setAttribute("class", "error-img");
      errorImg.src = "/images/icon-error.svg";
      errorMsg.setAttribute("class", "errorMsg");
      input.style.border = "1.5px solid hsl(0, 93%, 68%)";
      errorMsg.innerHTML = `<div>${input.name} cannot be empty</div>`;
      insertAfter(errorMsg, input);
      insertAfter(errorImg, input);
      if (input.name === "Email" && input.value.includes("@") === false) {
        errorMsg.innerHTML = `Looks like this is not an email</div>`;
      }
    }
  });
};

function insertAfter(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
