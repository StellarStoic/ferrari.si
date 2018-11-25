/*FORM security*/

/*https://webdesign.tutsplus.com/tutorials/quick-tip-add-a-formspree-form-to-your-static-sites--cms-23870*/
const contactform =  document.getElementById('contactform');
contactform.setAttribute('action', '//formspree.io/' + 'domain4bitcoin' + '@' + 'gmail' + '.' + 'com');



/*Open form on button click*/
document.getElementById("button").addEventListener("click", function() {
  document.querySelector(".bg-modal").style.display = "flex";
})

/*Close form on cross click*/
document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".bg-modal").style.display = "none";
  /*After click on close form it will play a sound*/
  var audio = document.getElementsByTagName("audio")[0];
  audio.play();
})

/*Audio was targeted in two different ways for learning purposes*/

 //closing door sound (form-cross) is handled with queryselector above

//when buy button is cliced
let doorOpen = new Audio();
doorOpen.src = "audio/CarDoor+Open-[AudioTrimmer.com].mp3";

//when send button in form is clicked
let horn = new Audio();
horn.src = "./audio/car+horn+x-[AudioTrimmer.com].mp3";
horn.volume=0.1;

//onmouseover ferrari logo on a form
let startEngine = new Audio();
startEngine.src = "./audio/Ferrari start.mp3";
startEngine.volume=0.2;

