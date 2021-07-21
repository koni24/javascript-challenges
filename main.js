// challenge 1:YOur age in days

function ageInDays() {
    var birthyear=prompt("tell your birth year");
    var ageInDayss=(2021-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are '+ageInDayss+' days');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
// challenge 2:generate photo

function generatePhoto(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="https://source.unsplash.com/collection/190727/1600x900";
    image.width=100;
    image.height=100;
    div.appendChild(image);
}
// challenge 3: rock paper scissors game

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice=yourChoice.id;


    botChoice=numberToChoice(randToRpsInt());
    console.log('computerChoice:', botChoice);


    results=decideWinner(humanChoice,botChoice);
    console.log(results);

    message=finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'scissors':0,'rock':1,'paper':0.5},
        'scissors':{'scissors':0.5,'rock':0,'paper':1}
       
    };

    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];
     return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore == 0){
        return{'message':'You Lost', 'color':'red'};
    }else if(yourScore == 0.5){
        return{'message':'you tied','color':'yellow'};
    }else{
        return{'message':'You Won','color':'green'};
    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='" + imageDatabase[humanImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10pxx 50px rgba(37,50,233,1):'>"
    messageDiv.innerHTML="<h1 style='color:" + finalMessage['color']+"; font-size: 60px; padding:30px; '>" + finalMessage['message'] +"</h1>"
    botDiv.innerHTML="<img src='" + imageDatabase[botImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10pxx 50px rgba(243,38,24,1):'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}
