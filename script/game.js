// first letter to upperacase
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
// variables
const womanNamePlace = document.querySelector(".womanNamePlace")
const manNamePlace = document.querySelector(".manNamePlace")
const womanName = sessionStorage.getItem('womanName').capitalize()
const manName = sessionStorage.getItem('manName').capitalize()
const womanMission = sessionStorage.getItem('womanTask').capitalize()
const manMission = sessionStorage.getItem('manTask').capitalize()
let womanPoints = 0
let manPoints = 0
let numberManDice = "";
let numberWomanDice = "";
let diceCounter = "";
let moveMan = 0
let moveWoman = 0
let roundWoman = 0
let roundMan = 0
const manDiceButton = '<button class="drawManBtn btn" onclick="throwManDice()">Rzuć kostką</button>';
const womanDiceButton = '<button class="drawWomanBtn btn" onclick="throwWomanDice()">Rzuć kostką</button>';
const doneButton = '<button class="doneBtn" onclick="done()">Wykonane</button>';
const failButton = '<button class="failBtn" onclick="failed()">Niewykonane</button>';

// add names form prev pages
const getNames = () => {
    womanNamePlace.textContent = womanName
    manNamePlace.textContent = manName
}

const getPoints = () => {
    document.querySelector(".womanPoints").innerHTML = `<h3>Punkty: ${womanPoints}<h3>`
    document.querySelector(".manPoints").innerHTML = `<h3>Punkty: ${manPoints}</h3>`
}
getNames()
getPoints()

// change color of points
const changePointsColor = () => {
    if (manPoints > womanPoints) {
        document.querySelector(".manPoints").style.color = "green"
        document.querySelector(".womanPoints").style.color = "red"
    } else if (manPoints < womanPoints) {
        document.querySelector(".manPoints").style.color = "red"
        document.querySelector(".womanPoints").style.color = "green"
    } else {
        document.querySelector(".manPoints").style.color = "white"
        document.querySelector(".womanPoints").style.color = "white"
    }
}
// throw dice's woman and get dice's number
const throwWomanDice = () => {
    if (moveWoman == 1 && moveMan == 0) {
        numberWomanDice = Math.floor(Math.random() * 3) + 1;
        let dice = "<img src=\"img/dice" + numberWomanDice + ".jpg\"/>";
        document.getElementById("diceW").innerHTML = "";
        document.getElementById("diceW").innerHTML = dice;
        diceCounter++
    } else if (moveMan == 1 && moveWoman == 0) {
        numberWomanDice = Math.floor(Math.random() * 3) + 4;
        let dice = "<img src=\"img/dice" + numberWomanDice + ".jpg\"/>";
        document.getElementById("diceW").innerHTML = "";
        document.getElementById("diceW").innerHTML = dice;
        diceCounter++
    } else if (moveWoman == 4 && moveMan < moveWoman) {
        numberWomanDice = Math.floor(Math.random() * 3) + 1;
        let dice = "<img src=\"img/dice" + numberWomanDice + ".jpg\"/>";
        document.getElementById("diceW").innerHTML = "";
        document.getElementById("diceW").innerHTML = dice;
        diceCounter++
    } else {
        numberWomanDice = Math.floor(Math.random() * 6) + 1;
        let dice = "<img src=\"img/dice" + numberWomanDice + ".jpg\"/>";
        document.getElementById("diceW").innerHTML = "";
        document.getElementById("diceW").innerHTML = dice;
        diceCounter++

    }
    if (diceCounter === 2) {
        chooseTask();
    }
}
// throw man dices and get dices number
const throwManDice = () => {
    if (moveWoman == 1 && moveMan == 0) {
        numberManDice = Math.floor(Math.random() * 3) + 4;
        let dice = "<img src=\"img/dice" + numberManDice + ".jpg\"/>";
        document.getElementById("diceM").innerHTML = "";
        document.getElementById("diceM").innerHTML = dice;
        diceCounter++
    } else if (moveMan == 1 && moveWoman == 0) {
        numberManDice = Math.floor(Math.random() * 3) + 1
        let dice = "<img src=\"img/dice" + numberManDice + ".jpg\"/>";
        document.getElementById("diceM").innerHTML = "";
        document.getElementById("diceM").innerHTML = dice;
        diceCounter++
    } else if (moveMan == 4 && moveMan > moveWoman) {
        numberManDice = Math.floor(Math.random() * 3) + 1
        let dice = "<img src=\"img/dice" + numberManDice + ".jpg\"/>";
        document.getElementById("diceM").innerHTML = "";
        document.getElementById("diceM").innerHTML = dice;
        diceCounter++
    } else {
        numberManDice = Math.floor(Math.random() * 6) + 1;
        let dice = "<img src=\"img/dice" + numberManDice + ".jpg\"/>";
        document.getElementById("diceM").innerHTML = "";
        document.getElementById("diceM").innerHTML = dice;
        diceCounter++
    }
    if (diceCounter === 2) {
        chooseTask();
    }
}

document.querySelector('.drawWomanBtn').addEventListener("click", throwWomanDice)
document.querySelector('.drawManBtn').addEventListener("click", throwManDice)
// hide thrown buttons
const hideThrowBtns = () => {
    $("#diceM").fadeOut(1250);
    $("#diceW").fadeOut(1250);
}
// show dices after click done or fail button
const showDice = () => {
    $("#diceM").show(700);
    $("#diceW").show(700);
}
// choosing task to player
const chooseTask = () => {
    if (numberWomanDice > numberManDice) {
        moveWoman++
        hideThrowBtns()
        numberTask = Math.floor(Math.random() * tasksWoman[moveWoman - 1].length)
        let drawnTask = tasksWoman[moveWoman - 1][numberTask]
        document.getElementById("task").innerHTML = drawnTask
        showDoneFailedBtns()
        showTask()
    } else if (numberWomanDice < numberManDice) {
        moveMan++
        hideThrowBtns()
        numberTask = Math.floor(Math.random() * tasksMan[moveMan - 1].length)
        let drawnTask = tasksMan[moveMan - 1][numberTask]
        document.getElementById("task").innerHTML = drawnTask
        showDoneFailedBtns()
        showTask()
    } else {
        numberWomanDice = ""
        numberManDice = ""
        diceCounter = 0
        setTimeout(function () {
            document.getElementById('diceW').innerHTML = womanDiceButton
        }, 1000);
        setTimeout(function () {
            document.getElementById('diceM').innerHTML = manDiceButton
        }, 1000);
    }
}


const showTask = () => {
    $(document).ready(function () {
        $('#task').delay(1350).show(1550);
    });
}

const showDoneFailedBtns = () => {
    setTimeout(function () {
        document.getElementById("done").innerHTML = doneButton
        document.getElementById("fail").innerHTML = failButton
    }, 2800);
}

const checkWhoWin = () => {
    if (manPoints > womanPoints) {
        document.getElementById("task").innerHTML = `<h1>Gratulacje!</h1> <h2>Wygrał ${manName}</h2>  <h3>${womanName} pamiętaj o zadaniu, które musisz spełnić:</h3> <p>${manMission} </p>`
    } else if (manPoints < womanPoints) {
        document.getElementById("task").innerHTML = `<h1>Gratulacje!</h1> <h2>Wygrała ${womanName}</h2>  <h3>${manName} pamiętaj o zadaniu, które musisz spełnić: </h3> <p>${womanMission} </p>`
    }
}

const resetAfterClick = () => {
    document.getElementById("done").innerHTML = " ";
    document.getElementById("fail").innerHTML = " ";
    if (moveMan === 6 || moveWoman === 6) {
        checkWhoWin()
    } else {
        document.getElementById("diceW").innerHTML = womanDiceButton;
        document.getElementById("diceM").innerHTML = manDiceButton;
        task.style.display = "none";
        diceWoman = "";
        diceMan = "";
        diceCounter = "";
        showDice()

    }
}

const done = () => {
    if (numberManDice > numberWomanDice) {
        manPoints = manPoints + moveMan
        getPoints()
        greenCircleMan()
        resetAfterClick()
    } else if (numberManDice < numberWomanDice) {
        womanPoints = womanPoints + moveWoman
        getPoints()
        greenCircleWoman()
        resetAfterClick()
    }
    changePointsColor()
}

const failed = () => {
    if (numberManDice > numberWomanDice) {
        manPoints = manPoints - (moveMan / 2)
        getPoints()
        redCircleMan()
        resetAfterClick()
    }
    if (numberManDice < numberWomanDice) {
        womanPoints = womanPoints - (moveWoman / 2)
        redCircleWoman()
        getPoints()
        resetAfterClick()
    }
    changePointsColor()
}


const greenCircleMan = () => {
    for (i = 0; i <= 6; i++)
        if (moveMan === i) {
            let number = "cM" + i
            document.getElementById(number).classList.add("green")
        }
}

const redCircleMan = () => {
    for (i = 0; i <= 6; i++)
        if (moveMan === i) {
            let number = "cM" + i
            document.getElementById(number).classList.add("red")
        }
}

const greenCircleWoman = () => {
    for (i = 0; i <= 6; i++)
        if (moveWoman === i) {
            let number = "cW" + i
            document.getElementById(number).classList.add("green")
        }
}

const redCircleWoman = () => {
    for (i = 0; i <= 6; i++)
        if (moveWoman === i) {
            let number = "cW" + i
            document.getElementById(number).classList.add("red")
        }
}