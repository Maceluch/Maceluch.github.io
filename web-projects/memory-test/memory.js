var cards = ["ciri.png","geralt.png","iorweth.png","jaskier.png","triss.png","yen.png","ciri.png","geralt.png","iorweth.png","jaskier.png","triss.png","yen.png"];
var firstVisible = false;
var lock = false;
var firstNr=-1;
var turnCounter = 0;
var pairsLeft=6;
window.onload=sof;

function shuffleArray(array)
{
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) 
	{

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}//while
	return array;
}

function setCardsHtml()
{
	var setHtml="";
	for (i=0;i<12;i++)
	{
		setHtml+='<div class="card" id="c'+i+'"></div>';
	}
	$('.board').html(setHtml+'<div class="score">Turn counter: 0</div>');
}

function setCardsListener()
{	
	for (let i=0 ; i<12 ; i++){
		$('#c'+i).click(function() {revealCard(i);});
	}		
}

function sof()
{
	cards=shuffleArray(cards);
	setCardsHtml();
	setCardsListener();
}

function revealCard(nr)
{	
	var opacityCheck = $('#c'+nr).css('opacity');
	
	if (lock==false && nr!=firstNr && opacityCheck!=0)
	{
		var obraz="url(\"img/"+cards[nr]+"\")";
		$('#c'+nr).addClass('cardA');
		$('#c'+nr).css('background-image',obraz);		
		
		if(firstVisible == false)
		{
			//firstCard
			firstNr=nr;
			firstVisible=true;
			lock=false;	
		}//if(firstVisible == false)
		else
		{
			lock=true;
			//secondCard				
			if(cards[firstNr]==cards[nr])
			{
				//isPair
				window.setTimeout(function() {hidePair(firstNr,nr)},750);			
			}
			else 
			{
				// no pair
				window.setTimeout(function() {restorePair(firstNr,nr)},1000);
			}			
			turnCounter++;
			$('.score').html('<div class="score">Turn counter: '+turnCounter+'</div>');
			firstVisible=false;
			
		}//if(firstVisible != false)
	}//if(lock==false)	
}

function hidePair(nr1,nr2)
{
	$('#c'+nr1).css('opacity','0');
	$('#c'+nr2).css('opacity','0');
	lock=false;
	firstNr=-1;
	pairsLeft--;
	if(pairsLeft==0)
	{
		var setHtml='<h1>You win!<br>Done in '+turnCounter+' turns</h1><br><span id="result" onclick=location.reload()>Try again</span>';
		$('.board').html(setHtml);
	}
}
function restorePair(nr1,nr2)
{
	var obraz="url(\"img/karta.png\")";
	$('#c'+nr1).removeClass('cardA');
	$('#c'+nr2).removeClass('cardA');
	$('#c'+nr1).css('background-image',obraz);		
	$('#c'+nr2).css('background-image',obraz);
	lock=false;
	firstNr=-1;
}
