let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let score = 0
let score2 = 0

// Home Score//
function home1() {
    score += 1
    homeScore.textContent = score
}

function home2() {
    score += 2
    homeScore.textContent = score
}

function home3() {
    score += 3
    homeScore.textContent = score
}

//Guest Score//
function guest1() {
    score2 += 1
    guestScore.textContent = score2
}

function guest2() {
    score2 += 2
    guestScore.textContent = score2
}

function guest3() {
    score2 += 3
    guestScore.textContent = score2
}