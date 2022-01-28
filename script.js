
console.log("hi");

function showhide() {

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

}

// function glean() {
//   var glean = document.getElementsByClassName("glean")[0];
//   if (glean.style.backgroundRepeat === "no-repeat") {
//     glean.style.backgroundImage = "none";
//     glean.style.backgroundRepeat ="repeat"
//
//     // glean.style.backgroundColor = "black";
//   }
//
//   else {
//
// location.reload();
// }
//   }

function glean(){

  var glean = document.getElementsByClassName('glean');
    for (var i=0; i<glean.length; i++) {

      if (glean[i].style.backgroundRepeat === "no-repeat") {
        glean[i].style.backgroundImage = "none";
        glean[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("888888");
para.appendChild(texture);
const element = glean[i];
element.appendChild(para);

      }
      else {
        location.reload();

      }

    }
}
