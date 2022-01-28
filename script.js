
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

function glean(){

  var display = document.getElementById('display');
  display.textContent += "+ Glean";

  var glean = document.getElementsByClassName('glean');
    for (var i=0; i<glean.length; i++) {

      if (glean[i].style.backgroundRepeat === "no-repeat") {
        glean[i].style.backgroundImage = "none";
        glean[i].style.backgroundRepeat ="repeat";
        glean[i].style.backgroundColor ="white";
        glean[i].style.color="blue";
        glean[i].style.textShadow="2px 2px 5px blue";

const para = document.createElement("p");
const texture = document.createTextNode("8888888888888888888888888");
para.appendChild(texture);
const element = glean[i];
element.appendChild(para);

      }
      else {

// $("#glean").load(window.location.href+"#glean");
location.reload();

      }

    }
}

function harvest(){

  var display = document.getElementById('display');
  display.textContent += "+ Harvest";


  var harvest = document.getElementsByClassName('harvest');
    for (var i=0; i<harvest.length; i++) {

      if (harvest[i].style.backgroundRepeat === "no-repeat") {
        harvest[i].style.backgroundImage = "none";
        harvest[i].style.backgroundRepeat ="repeat";
        harvest[i].style.backgroundColor ="#b3b397";
        harvest[i].style.color="white";

const para = document.createElement("p");
const texture = document.createTextNode("WWWWWWWWWWWWWWWWWWWWWWWWW");
para.appendChild(texture);
const element = harvest[i];
element.appendChild(para);

      }
      else {
        location.reload();

      }

    }
}

function bloom(){

  var display = document.getElementById('display');
  display.textContent += "+ Bloom";


  var bloom = document.getElementsByClassName('bloom');
    for (var i=0; i<bloom.length; i++) {

      if (bloom[i].style.backgroundRepeat === "no-repeat") {
        bloom[i].style.backgroundImage = "none";
        bloom[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("CCCCCCCCCCCCCCCCCCCCCCCCC");
para.appendChild(texture);
const element = bloom[i];
element.appendChild(para);

      }
      else {
        location.reload();

      }

    }
}
