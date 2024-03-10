function changeText() {
  var nameArray = [
    
    "Well Come to suburb's in Australia",
    "Alexandra",
    "Alderley",
    "Ambleside",
    ,
    "",
  ];
  var number = getRandomNumberBetween(0, nameArray.length - 1);
  console.log("home: ", number);
  document.getElementById("heading").innerHTML = nameArray[number];
}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}