const ending = document.querySelector('.ending')

setInterval(()=>{
	if(ending.innerHTML == "xter") {
		ending.innerHTML = ".rip"
	} else {
		ending.innerHTML = "xter"
	}
}, 2500);

const discord = document.querySelector('.discord')
discord.addEventListener("mouseenter", (e) => {document.querySelector(`.discord-extra`).innerHTML = ` ♱ discord`;});
discord.addEventListener("mouseleave", (e) => {document.querySelector(`.discord-extra`).innerHTML = '';})
const github = document.querySelector('.github')
github.addEventListener("mouseenter", (e) => {document.querySelector(`.github-extra`).innerHTML = ` ♱ github`;});
github.addEventListener("mouseleave", (e) => {document.querySelector(`.github-extra`).innerHTML = '';})
const instagram = document.querySelector('.instagram')
instagram.addEventListener("mouseenter", (e) => {document.querySelector(`.instagram-extra`).innerHTML = ` ♱ instagram`;});
instagram.addEventListener("mouseleave", (e) => {document.querySelector(`.instagram-extra`).innerHTML = '';})
const twitter = document.querySelector('.twitter')
twitter.addEventListener("mouseenter", (e) => {document.querySelector(`.twitter-extra`).innerHTML = ` ♱ twitter`;});
twitter.addEventListener("mouseleave", (e) => {document.querySelector(`.twitter-extra`).innerHTML = '';})
