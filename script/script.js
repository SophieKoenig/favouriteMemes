window.onload = visiMeme;
var myPic = new Array(
  "images/dogProf.jpg",
  "images/google.jpg",
  "images/honestWork.jpg",
  "images/stackOver.jpg"
);

// function button() {
//   document.getElementById("imgContainer").style.visibility = "hidden";
// }
// button();

const element = document.getElementById("theBtn");
element.addEventListener("click", visiMeme);

// function choosePic() {
//   var randomNum = Math.floor(Math.random() * myPic.length);
//   document.getElementById("myImg").src = myPic[randomNum];
// }

function visiMeme() {
  var randomNum = Math.floor(Math.random() * myPic.length);
  document.getElementById("myImg").src = myPic[randomNum];
  console.log("functioning");
  // document.getElementById("imgContainer").style.visibility = "visible";
}
