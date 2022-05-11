console.log("Welcome to spotify")

let songIndex = 0;
let audioElement = new Audio('aaftaab.mp3');
let playbutton = document.getElementById("playbutton");
let myProgressbar = document.getElementById("myProgressbar");
let songitems = Array.from(document.getElementsByClassName("songitem"));
let songnameinfo = document.getElementById("songnameinfo");


let songs = [
    {songName : "Aaftaab - The Local Train", filePath: "aaftaab.mp3", coverPath: "aaftaab.jpg"},
    {songName : "Afreen Afreen - Coke Studio", filePath: "afreen.mp3", coverPath: "afreen afreen.jpg"},
    {songName : "Beparwah - Momina Mustehan", filePath: "beparwah.mp3", coverPath: "beparwah.jpg"},
    {songName : "Chan Kithan - Ali Sethi", filePath: "chan kithan.mp3", coverPath: "chan kithan.jpg"},
    {songName : "Chandni Raat - Ali Sethi", filePath: "chandni raat.mp3", coverPath: "chandni raat.jpg"},
    {songName : "Dil Lagaayein - Ali Sethi", filePath: "dil.mp3", coverPath: "dil lagaayein.jpg"},
    {songName : "Pasoori - ALi Sethi & Shae Gill", filePath: "pasoori.mp3", coverPath: "pasoori.jpg"} 
    
]

songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});
//audioElement.play()
//play pause control
playbutton.addEventListener('click',()=>{
    makeallplays();
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playbutton.classList.remove('fa-play-circle');
        playbutton.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        playbutton.classList.remove('fa-pause-circle');
        playbutton.classList.add('fa-play-circle');
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressbar.value*audioElement.duration)/100;
})
const makeallplays= ()=>{
    
    Array.from(document.getElementsByClassName('smallplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('smallplay')).forEach((element)=>{
    
    element.addEventListener('click',(e)=>{
        makeallplays();
        if(audioElement.paused || audioElement.currentTime<=0){
            songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        songnameinfo.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        playbutton.classList.remove('fa-play-circle');
        playbutton.classList.add('fa-pause-circle');
        }
        else{

            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            playbutton.classList.remove('fa-pause-circle');
            playbutton.classList.add('fa-play-circle');
        }
        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    makeallplays();
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex+=1; 
    }
        audioElement.src = songs[songIndex].filePath;
        songnameinfo.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        playbutton.classList.remove('fa-play-circle');
        playbutton.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    makeallplays();
    if(songIndex<=0){
        songIndex = 6;
    }
    else{
        songIndex-=1; 
    }
    audioElement.src = songs[songIndex].filePath;
    songnameinfo.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        playbutton.classList.remove('fa-play-circle');
        playbutton.classList.add('fa-pause-circle');
})