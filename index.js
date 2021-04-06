document.addEventListener('keydown', function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


var numofDrums = document.querySelectorAll("button").length;

for (i = 0; i < numofDrums; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonHTML = this.innerHTML;

    makeSound(buttonHTML);

    buttonAnimation(buttonHTML);
    // var audio = new Audio("sounds/crash.mp3");
    // audio.play();
  });
}

function buttonAnimation(currentkey) {

  var buttonActive = document.querySelector("." + currentkey);

  buttonActive.classList.add("pressed");

  setTimeout(function() { buttonActive.classList.remove("pressed"); }, 100);

}


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;
    case"s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;
    default:
      console.log("Error " + key + " Not a sound");
  }
}
