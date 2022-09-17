let audioElement = new Audio('hbd.mp3');

document.querySelector('.pic2').addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }else{
        audioElement.pause();
    }
})
