
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
// location.reload();

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
        // location.reload();

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
        // location.reload();

      }

    }
}

function daisychain(){

  var display = document.getElementById('display');
  display.textContent += "+ daisy-chain";


  var daisychain = document.getElementsByClassName('daisychain');
    for (var i=0; i<daisychain.length; i++) {

      if (daisychain[i].style.backgroundRepeat === "no-repeat") {
        daisychain[i].style.backgroundImage = "none";
        daisychain[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("DDDDDDDDDDDDDDDDDDDDDDDDD");
para.appendChild(texture);
const element = daisychain[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function hexa(){

  var display = document.getElementById('display');
  display.textContent += "+ hexa";


  var hexa = document.getElementsByClassName('hexa');
    for (var i=0; i<hexa.length; i++) {

      if (hexa[i].style.backgroundRepeat === "no-repeat") {
        hexa[i].style.backgroundImage = "none";
        hexa[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("PPPPPPPPPPPPPPPPPPPPPPPPP");
para.appendChild(texture);
const element = hexa[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }
  }
}

function eternity(){

  var display = document.getElementById('display');
  display.textContent += "+ eternity";


  var eternity = document.getElementsByClassName('eternity');
    for (var i=0; i<eternity.length; i++) {

      if (eternity[i].style.backgroundRepeat === "no-repeat") {
        eternity[i].style.backgroundImage = "none";
        eternity[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("VVVVVVVVVVVVVVVVVVVVVVVVV");
para.appendChild(texture);
const element = eternity[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function echo(){

  var display = document.getElementById('display');
  display.textContent += "+ echo";


  var echo = document.getElementsByClassName('echo');
    for (var i=0; i<echo.length; i++) {

      if (echo[i].style.backgroundRepeat === "no-repeat") {
        echo[i].style.backgroundImage = "none";
        echo[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("BBBBBBBBBBBBBBBBBBBBBBBBB");
para.appendChild(texture);
const element = echo[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function honeycomb(){

  var display = document.getElementById('display');
  display.textContent += "+ honeycomb";


  var honeycomb = document.getElementsByClassName('honeycomb');
    for (var i=0; i<honeycomb.length; i++) {

      if (honeycomb[i].style.backgroundRepeat === "no-repeat") {
        honeycomb[i].style.backgroundImage = "none";
        honeycomb[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("YYYYYYYYYYYYYYYYYYYYYYYYY");
para.appendChild(texture);
const element = honeycomb[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

// 🚥  🚥  🚥  🚥  🚥  🚥  🚥 🚗

function cast(){

  var display = document.getElementById('display');
  display.textContent += "+ cast";


  var cast = document.getElementsByClassName('cast');
    for (var i=0; i<cast.length; i++) {

      if (cast[i].style.backgroundRepeat === "no-repeat") {
        cast[i].style.backgroundImage = "none";
        cast[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("XXXXXXXXXXXXXXXXXXXXXXXXX");
para.appendChild(texture);
const element = cast[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function layer(){

  var display = document.getElementById('display');
  display.textContent += "+ layer";


  var layer = document.getElementsByClassName('layer');
    for (var i=0; i<layer.length; i++) {

      if (layer[i].style.backgroundRepeat === "no-repeat") {
        layer[i].style.backgroundImage = "none";
        layer[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("AAAAAAAAAAAAAAAAAAAAAAAAA");
para.appendChild(texture);
const element = layer[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function bend(){

  var display = document.getElementById('display');
  display.textContent += "+ bend";


  var bend = document.getElementsByClassName('bend');
    for (var i=0; i<bend.length; i++) {

      if (bend[i].style.backgroundRepeat === "no-repeat") {
        bend[i].style.backgroundImage = "none";
        bend[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("SSSSSSSSSSSSSSSSSSSSSSSSS");
para.appendChild(texture);
const element = bend[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function connect(){

  var display = document.getElementById('display');
  display.textContent += "+ connect";


  var connect = document.getElementsByClassName('connect');
    for (var i=0; i<connect.length; i++) {

      if (connect[i].style.backgroundRepeat === "no-repeat") {
        connect[i].style.backgroundImage = "none";
        connect[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("BBBBBBBBBBBBBBBBBBBBBBBBB");
para.appendChild(texture);
const element = connect[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function cover(){

  var display = document.getElementById('display');
  display.textContent += "+ cover";


  var cover = document.getElementsByClassName('cover');
    for (var i=0; i<cover.length; i++) {

      if (cover[i].style.backgroundRepeat === "no-repeat") {
        cover[i].style.backgroundImage = "none";
        cover[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("QQQQQQQQQQQQQQQQQQQQQQQQQ");
para.appendChild(texture);
const element = cover[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}


function penetrate(){

  var display = document.getElementById('display');
  display.textContent += "+ penetrate";


  var penetrate = document.getElementsByClassName('penetrate');
    for (var i=0; i<penetrate.length; i++) {

      if (penetrate[i].style.backgroundRepeat === "no-repeat") {
        penetrate[i].style.backgroundImage = "none";
        penetrate[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("UUUUUUUUUUUUUUUUUUUUUUUUU");
para.appendChild(texture);
const element = penetrate[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function weave(){

  var display = document.getElementById('display');
  display.textContent += "+ weave";


  var weave = document.getElementsByClassName('weave');
    for (var i=0; i<weave.length; i++) {

      if (weave[i].style.backgroundRepeat === "no-repeat") {
        weave[i].style.backgroundImage = "none";
        weave[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("IIIIIIIIIIIIIIIIIIIIIIIII");
para.appendChild(texture);
const element = weave[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function heated(){

  var display = document.getElementById('display');
  display.textContent += "+ heated";


  var heated = document.getElementsByClassName('heated');
    for (var i=0; i<heated.length; i++) {

      if (heated[i].style.backgroundRepeat === "no-repeat") {
        heated[i].style.backgroundImage = "none";
        heated[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("OOOOOOOOOOOOOOOOOOOOOOOOO");
para.appendChild(texture);
const element = heated[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

// 🚥  🚥  🚥  🚥  🚥  🚥  🚥 🚗

function wood(){

  var display = document.getElementById('display');
  display.textContent += "+ wood";


  var wood = document.getElementsByClassName('wood');
    for (var i=0; i<wood.length; i++) {

      if (wood[i].style.backgroundRepeat === "no-repeat") {
        wood[i].style.backgroundImage = "none";
        wood[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("LLLLLLLLLLLLLLLLLLLLLLLLL");
para.appendChild(texture);
const element = wood[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function clay(){

  var display = document.getElementById('display');
  display.textContent += "+ clay";


  var clay = document.getElementsByClassName('clay');
    for (var i=0; i<clay.length; i++) {

      if (clay[i].style.backgroundRepeat === "no-repeat") {
        clay[i].style.backgroundImage = "none";
        clay[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("MMMMMMMMMMMMMMMMMMMMMMMMM");
para.appendChild(texture);
const element = clay[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function minerals(){

  var display = document.getElementById('display');
  display.textContent += "+ minerals";


  var minerals = document.getElementsByClassName('minerals');
    for (var i=0; i<minerals.length; i++) {

      if (minerals[i].style.backgroundRepeat === "no-repeat") {
        minerals[i].style.backgroundImage = "none";
        minerals[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("NNNNNNNNNNNNNNNNNNNNNNNNN");
para.appendChild(texture);
const element = minerals[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function fiber(){

  var display = document.getElementById('display');
  display.textContent += "+ fiber";


  var fiber = document.getElementsByClassName('fiber');
    for (var i=0; i<fiber.length; i++) {

      if (fiber[i].style.backgroundRepeat === "no-repeat") {
        fiber[i].style.backgroundImage = "none";
        fiber[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("HHHHHHHHHHHHHHHHHHHHHHHHH");
para.appendChild(texture);
const element = fiber[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function metals(){

  var display = document.getElementById('display');
  display.textContent += "+ metals";


  var metals = document.getElementsByClassName('metals');
    for (var i=0; i<metals.length; i++) {

      if (metals[i].style.backgroundRepeat === "no-repeat") {
        metals[i].style.backgroundImage = "none";
        metals[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("EEEEEEEEEEEEEEEEEEEEEEEEE");
para.appendChild(texture);
const element = metals[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function ring(){

  var display = document.getElementById('display');
  display.textContent += "+ ring";


  var ring = document.getElementsByClassName('ring');
    for (var i=0; i<ring.length; i++) {

      if (ring[i].style.backgroundRepeat === "no-repeat") {
        ring[i].style.backgroundImage = "none";
        ring[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("9999999999999999999999999");
para.appendChild(texture);
const element = ring[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}

function crownofthorns(){

  var display = document.getElementById('display');
  display.textContent += "+ crownofthorns";


  var crownofthorns = document.getElementsByClassName('crownofthorns');
    for (var i=0; i<crownofthorns.length; i++) {

      if (crownofthorns[i].style.backgroundRepeat === "no-repeat") {
        crownofthorns[i].style.backgroundImage = "none";
        crownofthorns[i].style.backgroundRepeat ="repeat";

const para = document.createElement("p");
const texture = document.createTextNode("FFFFFFFFFFFFFFFFFFFFFFFFF");
para.appendChild(texture);
const element = crownofthorns[i];
element.appendChild(para);

      }
      else {
        // location.reload();

      }

    }
}
