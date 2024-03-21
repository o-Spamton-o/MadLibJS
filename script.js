document.getElementById("mlb").addEventListener("click", buildMadLib);

function buildMadLib() {
  let pluralNoun = document.getElementById("pn").value;
  let adjective = document.getElementById("adjective").value;
  let adjective2 = document.getElementById("adjective2").value;
  let verb = document.getElementById("verb").value;
  let verb2 = document.getElementById("verb2").value;
  let noun = document.getElementById("noun").value;

  let result = `There are too many ${pluralNoun} on this ${adjective} airplane!, I screamed. Somebody has to ${verb} on the ${noun} to solve this problem. These ${adjective2} snakes keep ${verb2} on me!`;

  document.getElementById("result").innerHTML = result;
  document.getElementById("html").style.backgroundImage =
    "url(images/plane.jpg)";
  document.getElementById("result").style.borderColor = "orange";
  document.getElementById("result").style.fontFamily = "timesNewRoman";
  document.getElementById("bbbb").style.border = "none";
  document.getElementById("bbbb").style.boxShadow = "5px 10px 10px green";
}

document.getElementById("mlb2").addEventListener("click", madLibNumeroDos);

function madLibNumeroDos() {
  let pluralNoun = document.getElementById("pn").value;
  let adjective = document.getElementById("adjective").value;
  let adjective2 = document.getElementById("adjective2").value;
  let verb = document.getElementById("verb").value;
  let verb2 = document.getElementById("verb2").value;
  let noun = document.getElementById("noun").value;

  let result = `Dogs are ${adjective}. They love to ${verb} ${pluralNoun} and ${verb2} ${noun}, also, ${adjective2} dogs are so fluffy!`;

  document.getElementById("result").innerHTML = result;
  document.getElementById("result").style.fontFamily = "sansSerif";
  document.getElementById("result").style.borderColor = "green";
  document.getElementById("html").style.backgroundImage = "url(images/dog.jpg)";
  document.getElementById("bbbb").style.border = "5px purple dashed";
  document.getElementById("bbbb").style.boxShadow = "none";
}
