let numArray = []
let sum = 0;

document.getElementById("btn").addEventListener("click", handleClick)

function randomColor() {
    let red = getRandomIntInclusive(0, 255)
    let green = getRandomIntInclusive(0, 255)
    let blue = getRandomIntInclusive(0, 255)
    let randColor = [red, green, blue]
    return randColor
}

function handleClick() {
    let randNum = getRandomIntInclusive(1, 100)
    document.getElementById("numBox").textContent = randNum
    document.getElementById("numBox")
        .setAttribute("style", "color: rgb(" + randomColor() + ")")
    numArray.push(randNum)
    sum += randNum
    document.getElementById("sum").textContent = sum;
    let newDiv = document.createElement("div")
    let newDivContent = document.createTextNode(randNum)
    newDiv.appendChild(newDivContent)
    document.body.appendChild(newDiv)
}

function getRandomIntInclusive(minNum, maxNum) {
    minNum = Math.ceil(minNum)
    maxNum = Math.floor(maxNum)
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum 
}