// Create your global variables below:
var tracklist = ["Let's Go Up", "Shield", "Not Alone", "Concrete Evidence", "Freedom", "Brave", "A Root out of Dry Ground", "Lawgiver", "Disciples", "A Tender Plant"];
var volLevels = [];
const DEFAULT_COLOR = 'rgb(95, 147, 154)'
const white = 'rgb(255, 255, 255)'

//Retrieve element nodes from DOM
var switchBtn = document.getElementById('switch-btn');
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
var volumeUpBtn = document.getElementById('volume-up');
var volumeDownBtn = document.getElementById('volume-down');


function init() {
  // populate volLevels array
	for(i = 0; i <= 5; i++){
    var temp = 'vl' + i;
    volLevels[i] = document.getElementById(temp);
  }
  // set first 3 divs color
  volLevels[0].style.backgroundColor = DEFAULT_COLOR;
  volLevels[1].style.backgroundColor = DEFAULT_COLOR;
  volLevels[2].style.backgroundColor = DEFAULT_COLOR;
};

function volUp() {
  if(volLevels[4].style.backgroundColor == DEFAULT_COLOR){
    volLevels[5].style.backgroundColor = DEFAULT_COLOR;
  }
  if(volLevels[3].style.backgroundColor == DEFAULT_COLOR){
    volLevels[4].style.backgroundColor = DEFAULT_COLOR;
  }
  if(volLevels[2].style.backgroundColor == DEFAULT_COLOR){
    volLevels[3].style.backgroundColor = DEFAULT_COLOR;
  }
  if(volLevels[1].style.backgroundColor == DEFAULT_COLOR){
    volLevels[2].style.backgroundColor = DEFAULT_COLOR;
  }
  if(volLevels[0].style.backgroundColor == DEFAULT_COLOR){
    volLevels[1].style.backgroundColor = DEFAULT_COLOR;
  }
  if(volLevels[0].style.backgroundColor != DEFAULT_COLOR){
    volLevels[0].style.backgroundColor = DEFAULT_COLOR;
  }
}

function volDown() {
  if(volLevels[5].style.backgroundColor == DEFAULT_COLOR){
    volLevels[5].style.backgroundColor = white;
  }
  else if(volLevels[4].style.backgroundColor == DEFAULT_COLOR){
    volLevels[4].style.backgroundColor = white;
  }
  else if(volLevels[3].style.backgroundColor == DEFAULT_COLOR){
    volLevels[3].style.backgroundColor = white;
  }
  else if(volLevels[2].style.backgroundColor == DEFAULT_COLOR){
    volLevels[2].style.backgroundColor = white;
  }
  else if(volLevels[1].style.backgroundColor == DEFAULT_COLOR){
    volLevels[1].style.backgroundColor = white;
  }
  else if(volLevels[0].style.backgroundColor == DEFAULT_COLOR){
    volLevels[0].style.backgroundColor = white;
  }
}

function incrementTime() {
  // if the switch button is pause then increment the player time and update the min time
  if(switchBtn.innerHTML == '<i class="material-icons">pause</i>'){
    let timerCount = parseInt(document.getElementById("player-time").value);
    document.getElementById("min-time").innerHTML = secondsToMs(timerCount);
    document.getElementById("player-time").stepUp();

    // if the player time reaches 3:00 then go to the next song
    if(timerCount == document.getElementById("player-time").max){
      nextSong();
    }
  }
}

// call set interval to increment the timer each second
setInterval(incrementTime, 1000);

function switchPlay() {
	let temp = document.getElementById("switch-btn");

  // if the switch button is play arrow when clicked then switch the icon
  if(temp.innerHTML == '<i class="material-icons">play_arrow</i>'){
    temp.innerHTML = '<i class="material-icons">pause</i>';
  }
  // if the switch button is pause button when clicked then switch the icon
  else if(temp.innerHTML == '<i class="material-icons">pause</i>'){
    temp.innerHTML = '<i class="material-icons">play_arrow</i>';
  }
}

function nextSong() {
  // reset the player time to 0 when next song is clicked
  document.getElementById("player-time").value = 0;

  // get the index of the current track in the array
  let currentSong = tracklist.indexOf(document.getElementById("player-song-name").innerHTML);

  // edge case to avoid undefined showing up as song name
  if(currentSong > 8){
    document.getElementById("player-song-name").innerHTML = tracklist[0];
  }
  else {
    // update song name to next song
    document.getElementById("player-song-name").innerHTML = tracklist[currentSong+1];
  }
}

function prevSong() {
  // reset the player time to 0 when previous song is clicked
  document.getElementById("player-time").value = 0;

  // get the index of the current track in the array
  let currentSong = tracklist.indexOf(document.getElementById("player-song-name").innerHTML);

  // edge case to avoid undefined showing up as song name
  if(currentSong == 0){
    document.getElementById("player-song-name").innerHTML = tracklist[9];
  }
  else {
    // update song name to previous song
    document.getElementById("player-song-name").innerHTML = tracklist[currentSong-1];
  }
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);
    console.log(`00${sec}`);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

switchBtn.addEventListener('click', switchPlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
volumeUpBtn.addEventListener('click', volUp);
volumeDownBtn.addEventListener('click', volDown);



init();
