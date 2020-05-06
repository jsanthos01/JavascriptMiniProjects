let minutes = document.querySelector(".minutes")
let seconds = document.querySelector("#seconds")
let play = document.querySelector("#play")
let pause = document.querySelector("#pause")
let stop = document.querySelector("#stop")


function studyTimer(){
    let initialMinutes = 25;
    let initialSeconds = 59;
    secondCount(initialSeconds, initialMinutes)

}

function secondCount(initialSeconds, initialMinutes){
    initialMinutes--;
    minutes.textContent = initialMinutes + ":";

    seconds.textContent = initialSeconds;
    setInterval(() => {
        initialSeconds--;
        seconds.textContent = initialSeconds;
        if(initialSeconds === 0){
            clearInterval(secondCount);
        }
    },1000)
}


play.addEventListener("click", studyTimer);