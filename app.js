const h2Tags = document.getElementsByTagName("h2");

for (const tags of h2Tags) {
  tags.style.color = "lightblue";
}

document.getElementById("backpack").style.backgroundColor = "tomato";
document.getElementById("backpack").style.padding = "5px 15px";

const cards = document.getElementsByClassName("card");

for (const card of cards) {
  card.style.borderRadius = "20px";
}

const buttons = document.getElementsByClassName("btn-dlt");

for (const button of buttons) {
  button.addEventListener("click", function () {
    button.classList.add("d-none");
  });
}

//button submit

document.getElementById("email-input").addEventListener("keyup", function () {
  const inputText = document.getElementById("email-input").value;

  if (inputText == "email") {
    document.getElementById("submit-btn").removeAttribute("disabled", true);
  } else {
    document.getElementById("submit-btn").setAttribute("disabled", true);
  }
});

//dblclick

document.getElementById("dblclick").addEventListener("dblclick", function () {
  document.getElementById("dblclick").style.backgroundColor = "tomato";
});

document.getElementById("image").addEventListener("mouseenter", function () {
  document.getElementById("image").src = "images/shoes/shoe-3.png";
});

document.getElementById("image").addEventListener("mouseleave", function () {
  document.getElementById("image").src = "images/shoes/shoe-2.png";
});
