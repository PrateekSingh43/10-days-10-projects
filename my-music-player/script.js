// note: we are targeting id and class attributes according to their position in html page. 
// Question: when do we use queryselector or getElemetbyId
const image = document.querySelector('img');
const title = document.getElementById('title');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const PlayBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music 
 
const songs = [
    {
       name: 'jacinto-1',
       displayName: 'Electric Chill Machine',
       artist: 'jacinto Design',

    }
    ,
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'jacinto Design',
 
     }
     ,
     {
        name: 'jacinto-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'jacinto Design',
 
     }
     ,
     {
        name: 'metric-1',
        displayName: 'Front Row (Remix)',
        artist: 'Metric/jacinto Design',
 
     }


]




// Check if Playing 
let isPlaying = false


// play 
function playSong() {
    isPlaying = true;
    PlayBtn.classList.replace('fa-play', 'fa-pause')
    PlayBtn.setAttribute('title', 'Pause')
    music.play();

}

// Pause
function PauseSong() {
    isPlaying = false;
    PlayBtn.classList.replace('fa-pause', 'fa-play')
    PlayBtn.setAttribute('title', 'Play')
    music.pause();
}

PlayBtn.addEventListener('click', () => (isPlaying ? PauseSong() : playSong()));
  

// update Dom

function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
  // note `` this one allow us to use to make a string with a variable inside of it the string part is music/ and the variable part we're going to denote wiht dollar sign.

  
}

// Current Song
let songInedx = 0;

// Previous Song

function prevSong() {
    songInedx--;
    if (songInedx < 0 ){
        songInedx = songs.length -1;
    }
    prevBtn.setAttribute('title', 'Previous')
   
    loadSong(songs[songInedx]);
    playSong();
}






// Next Song
function nextSong() {
    songInedx ++;
    if ( songInedx > songs.length -1) {
        songInedx = 0;
    }
    nextBtn.setAttribute('title', 'next')
    loadSong(songs[songInedx]);
    playSong();
}



// On Load- Select First Song 

loadSong(songs[songInedx]);

// Event Listeners for previous and next song

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);