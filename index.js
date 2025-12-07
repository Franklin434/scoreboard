let scoreEl = document.getElementById("score-el")
let scoreElAway = document.getElementById("score-el-away")
let countHome = 0
let countAway = 0

function add1() {
    countHome += 1
    scoreEl.innerHTML = countHome
    console.log(countHome)
}

function add2() {
    countHome += 2
    scoreEl.innerHTML = countHome
}

function add3() {
    countHome += 3
    scoreEl.innerHTML = countHome
}

function add1Away() {
    countAway +=1
    scoreElAway.innerHTML = countAway
}

function add2Away() {
    countAway += 2
    scoreElAway.innerHTML = countAway
}

function add3Away() {
    countAway += 3 
    scoreElAway.innerHTML = countAway
}