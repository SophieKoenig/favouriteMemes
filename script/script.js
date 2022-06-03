function button() {
  document.getElementById("imgContainer").style.visibility = "hidden";
}
button();

const element = document.getElementById("theBtn");
element.addEventListener("click", visiMeme);

function visiMeme() {
  document.getElementById("imgContainer").style.visibility = "visible";
}
