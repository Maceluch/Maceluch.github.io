const httpRequest = new XMLHttpRequest();
httpRequest.responseType = 'json';
httpRequest.onload = function() {		
	
	const data = httpRequest.response;	
	const dictionary = Object.keys(data);	
	const rand = getRandomInt(dictionary.length);
	if(gameData.isTwoWords) {
		//prepare two words
		const rand2 = (rand + 1 + getRandomInt(dictionary.length-1)) % dictionary.length;
		prepareGameData(`${dictionary[rand]}${gameData.passSplitter}${dictionary[rand2]}`,[data[dictionary[rand]],data[dictionary[rand2]]]);
	}
	else {
		//prepare one word
		prepareGameData(dictionary[rand],[data[dictionary[rand]]]);
	}
};
const requestURL = 'https://raw.githubusercontent.com/Maceluch/mscPortfolio/master/web-projects/hangman/wordsapi_reduced.json';
const gameData = {
	"isTwoWords": false,
	"pass": "",
	"passT": "",
	"passSplitter": " & ",
	"letterSplitter": "|",
	"desc": [],
	"letters": [" ","'",".","-"],
	"counter": 0,
	"inProgress": false,
	"passLetters": {},
	"resultText": {}	
};
const yes = new Audio("yes.ogg");
const no = new Audio("no.ogg");

//////////functions:
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

Array.prototype.setCharAtX = function(targetArr,char) {			
	if(targetArr.length >= Math.max(...this) && (Array.isArray(targetArr)))
		this.forEach(el => targetArr[el] = char);		
	return targetArr;
}

function passwordReapear()
{
	document.querySelector(`#password`).innerHTML = gameData.passT;
}

function prepareGameData(pass,desc) {	
	gameData.pass = pass;
	gameData.passT = pass.replace(/[a-z]/g,"_");
	gameData.desc = desc;	
	gameData.passLetters = {};
	gameData.resultText.won = [`Congratulations!`,`You have found the correct password!`];
	gameData.resultText.lost = [`Game over!`,`The correct password is: ${pass}!`];
	
	pass.split("").forEach ((el,id) => {
		if((/[a-z]/.test(el)))
			!gameData.passLetters.hasOwnProperty(el) 
			? gameData.passLetters[el] = id.toString()
			: gameData.passLetters[el] += `${gameData.letterSplitter}${id}`
	})
	passwordReapear();
	gameData.inProgress = true;
}

function loadGameData () {
	gameData.inProgress = false;
	gameData.counter = 0;
	// refresh result
	displayNone(document.querySelector(`#result`));
	// refresh alphabet
	const elAlphabet = document.querySelector(`#alphabet`);
	displayNone(elAlphabet,false);
	Array.from(elAlphabet.children).forEach((el,id)=> {
		el.className = `singleA rim${id>=26 ? " rim-green":""}`;
	});	
	// refresh image
	document.querySelector(`#image`).querySelector(`img`).src = `img/s${gameData.counter}.jpg`;

	document.querySelector(`#password`).innerHTML = `Loading...`;
	httpRequest.open('GET', requestURL);	
	httpRequest.send();
}

function optionClicked (optionElement) {
	switch (optionElement.id) {
		case "nav": break;
		case "two-words":
			optionElement.innerHTML = gameData.isTwoWords ? `Two words` : `One word`;
			gameData.isTwoWords=!gameData.isTwoWords;			
			loadGameData (); break;
		case "reset": loadGameData (); break;
	}
}

function displayNone(el,flag=true) {	
	flag ? el.style.display =`none` : el.style.display=``;	
}

function onLoad() {
	const elAlphabet = document.querySelector(`#alphabet`);
	const elOptions = Array.from(document.querySelector(`#options`).querySelectorAll(`.option-el`));
	elOptions.forEach(el => {
		el.addEventListener('click', () => optionClicked(el));
		el.addEventListener('mouseover', () => el.classList.toggle(`rim-hover`));
		el.addEventListener('mouseout', () => el.classList.toggle(`rim-hover`));		
	})
	
	// set letters
	for (i=90; i >= 65; i--)
	{
		gameData.letters.unshift(String.fromCharCode(i));
	}
	gameData.letters.forEach((el,id) => {
		const elSingleA = document.createElement(`div`);
		elSingleA.id = `s-${el.toLowerCase()}`;		
		elSingleA.addEventListener('click', () => {if (gameData.inProgress) passwordCheck(el.toLowerCase())});
		elSingleA.addEventListener('mouseover', () => elSingleA.classList.toggle(`rim-hover`));
		elSingleA.addEventListener('mouseleave', () => elSingleA.classList.toggle(`rim-hover`));
		elSingleA.innerHTML = el;
		elAlphabet.appendChild(elSingleA);		
	});
	loadGameData();
}
window.onload=onLoad;


function passwordCheck(letter)
{
	const isGood = gameData.passLetters.hasOwnProperty(letter);
	
	function onEnd(resultStatus) {		
		const elResult = document.querySelector(`#result`);
		const elResultHeader = elResult.querySelector(`header`);
		const elResultArticle = elResult.querySelector(`article`);
		displayNone(document.querySelector(`#alphabet`));
		displayNone(elResult, false);
		elResultHeader.innerHTML = ``;
		elResultArticle.innerHTML = ``;		
		
		//first two paragraphs
		gameData.resultText[resultStatus].forEach(el => {
			const elP = document.createElement(`p`);
			elP.className = `text-center`;
			elP.innerHTML = el;
			elResultHeader.appendChild(elP);
		});
		//rest paragraphs
		for (passIndex = 0; passIndex < gameData.desc.length; passIndex++) {			
			const elP = document.createElement(`p`);			
			elP.className = `text-center`;
			elP.innerHTML = `${capitalizeFirstLetter(gameData.pass.split(gameData.passSplitter)[passIndex])} (${gameData.desc[passIndex].partOfSpeech}):`;			
			const elDivP = document.createElement(`p`);
			elDivP.className = `text-left`;
			elDivP.innerHTML = `${capitalizeFirstLetter(gameData.desc[passIndex].definition)}`;
			const elDiv = document.createElement(`div`);			
			elDiv.appendChild(elDivP);
			elResultArticle.appendChild(elP);
			elResultArticle.appendChild(elDiv);
		}		
	}

	if(isGood) {		
		yes.play();
		document.querySelector(`#s-${letter}`).className += " rim-green";
		gameData.passT = gameData.passLetters[letter].split(gameData.letterSplitter).setCharAtX(gameData.passT.split(""),letter).join("");
		delete gameData.passLetters[letter];
		passwordReapear();
		//check winning condition
		if(Object.keys(gameData.passLetters).length == 0) {			
			onEnd("won");
		}
	}
	else {
		no.play();
		gameData.counter++;
		document.querySelector(`#s-${letter}`).className += " rim-red";		
		document.querySelector(`#image`).querySelector(`img`).src = `img/s${gameData.counter}.jpg`;
		//check loosing condition
		if(gameData.counter>=9){
			onEnd("lost");
		}
	}	
}
