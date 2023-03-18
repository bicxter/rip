const ending = document.querySelector('.ending')
var bg = document.querySelector(".bg");

// Get the button
var btn = document.querySelector(".btn");

// Pause and play the video, and change the button text
btn.addEventListener('click', (e)=>{
	console.log('hi')
	if (bg.paused) {
		bg.play();
		btn.innerHTML = "||";
	} else {
    	bg.pause();
    	btn.innerHTML = "|>";
  }
})


/*setInterval(()=>{
	if(ending.innerHTML == "xter") {
		ending.innerHTML = ".rip"
	} else {
		ending.innerHTML = "xter"
	}
}, 2500);*/

const discord = document.querySelector('.discord')
discord.addEventListener("mouseenter", (e) => {document.querySelector(`.discord`).innerHTML = '♱ bicxter#0666';})
discord.addEventListener("mouseleave", (e) => {document.querySelector(`.discord`).innerHTML = `♱ discord`;});
const github = document.querySelector('.github')
github.addEventListener("mouseenter", (e) => {document.querySelector(`.github`).innerHTML = '♱ /bicxter';})
github.addEventListener("mouseleave", (e) => {document.querySelector(`.github`).innerHTML = `♱ github`;});
const instagram = document.querySelector('.instagram')
instagram.addEventListener("mouseenter", (e) => {document.querySelector(`.instagram`).innerHTML = '♱ bicxter0';})
instagram.addEventListener("mouseleave", (e) => {document.querySelector(`.instagram`).innerHTML = `♱ instagram`;});
const twitter = document.querySelector('.twitter')
twitter.addEventListener("mouseenter", (e) => {document.querySelector(`.twitter`).innerHTML = '♱ bicxter';})
twitter.addEventListener("mouseleave", (e) => {document.querySelector(`.twitter`).innerHTML = `♱ twitter`;});
