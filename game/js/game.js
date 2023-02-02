function numbers(tagElement, alt1) {
    if(document.getElementById(alt1).innerHTML == '') {
        document.getElementById(alt1).innerHTML = tagElement.innerHTML;
        tagElement.innerHTML = '';
    }
    checkWinner();
} 
function numbers2(tagElement, alt1, alt2) {
    numbers(tagElement, alt1);
    numbers(tagElement, alt2);
}
function numbers3(tagElement, alt1, alt2, alt3) {
    numbers2(tagElement, alt1, alt2);
    numbers(tagElement, alt3);
}
function numbers4(tagElement, alt1, alt2, alt3, alt4) {
    numbers3(tagElement, alt1, alt2, alt3);
    numbers(tagElement, alt4);
}

let secondsElapsed = 0;
let minutesElapsed = 0;

let minutesTimer;
let secondsTimer;


function startGame() {
    document.getElementById("overlay").style.display = "none";
    minutesTimer = setInterval(updateMinutes, 60000);
    secondsTimer = setInterval(updateSeconds, 1000);
    document.getElementById("numbersgame").style.display = "block";
    document.getElementById("numbersgametimer").style.display = "block";
}
function updateMinutes() {
    secondsElapsed = 0;
    minutesElapsed++;
}
function updateSeconds() {
    secondsElapsed++;
    document.getElementById("timer").innerHTML= minutesElapsed + " : " + secondsElapsed;
}
function checkWinner() {
    if(document.getElementById("r1b1").innerHTML.charAt(0) === "1" && 
    document.getElementById("r1b2").innerHTML.charAt(0) === "2" &&
    document.getElementById("r1b3").innerHTML.charAt(0) === "3" &&
    document.getElementById("r2b1").innerHTML.charAt(0) === "4" &&
    document.getElementById("r2b2").innerHTML.charAt(0) === "5" &&
    document.getElementById("r2b3").innerHTML.charAt(0) === "6" &&
    document.getElementById("r3b1").innerHTML.charAt(0) === "7" &&
    document.getElementById("r3b2").innerHTML.charAt(0) === "8")
    {
        document.getElementById("overlayW").style.display ="block";
        document.getElementById("numbersgame").style.display = "none";
        document.getElementById("numbersgametimer").style.display = "none";
        clearInterval(minutesTimer);
        clearInterval(secondsTimer);
        document.getElementById("monkas").innerHTML = minutesElapsed + " Minutes " + secondsElapsed + " Seconds. ";
    }
}
