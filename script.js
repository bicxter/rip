const ending = document.querySelector('.ending')



/*setInterval(()=>{
	if(ending.innerHTML == "xter") {
		ending.innerHTML = ".rip"
	} else {
		ending.innerHTML = "xter"
	}
}, 2500);*/

const github = document.querySelector('.github')
github.addEventListener("mouseenter", (e) => {document.querySelector(`.github`).innerHTML = '♱ bicxter';})
github.addEventListener("mouseleave", (e) => {document.querySelector(`.github`).innerHTML = `♱ github`;});
const tiktok = document.querySelector('.tiktok')
tiktok.addEventListener("mouseenter", (e) => {document.querySelector(`.tiktok`).innerHTML = '♱ fortniebals';})
tiktok.addEventListener("mouseleave", (e) => {document.querySelector(`.tiktok`).innerHTML = `♱ tiktok`;});

