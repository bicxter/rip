const ending = document.querySelector('.ending')
var bg = document.querySelector(".bg");

// Get the button
var btn = document.querySelector(".btn");

// Pause and play the video, and change the button text
btn.addEventListener('click', (e)=>{
	console.log('hi')
	if (bg.paused) {
		bg.play();
        btn.innerHTML = "<span class=\"material-symbols-outlined\">pause</span>";
	} else {
    	bg.pause();
        btn.innerHTML = "<span class=\"material-symbols-outlined\">play_arrow</span>";
  }
})


/*setInterval(()=>{
	if(ending.innerHTML == "xter") {
		ending.innerHTML = ".rip"
	} else {
		ending.innerHTML = "xter"
	}
}, 2500);*/

const github = document.querySelector('.github')
github.addEventListener("mouseenter", (e) => {document.querySelector(`.github`).innerHTML = '♱ /bicxter';})
github.addEventListener("mouseleave", (e) => {document.querySelector(`.github`).innerHTML = `♱ github`;});
const instagram = document.querySelector('.instagram')
instagram.addEventListener("mouseenter", (e) => {document.querySelector(`.instagram`).innerHTML = '♱ bicxter0';})
instagram.addEventListener("mouseleave", (e) => {document.querySelector(`.instagram`).innerHTML = `♱ instagram`;});
const tiktok = document.querySelector('.tiktok')
instagram.addEventListener("mouseenter", (e) => {document.querySelector(`.tiktok`).innerHTML = '♱ fortniebals';})
instagram.addEventListener("mouseleave", (e) => {document.querySelector(`.tiktok`).innerHTML = `♱ tiktok`;});

