// 필요한 html elements 다 가져오기
let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".reset-button");
let userInput = document.querySelector("#userinput");
let resultAreaImg = document.querySelector(".main-img");
let resultArea = document.querySelector(".resulttxt")
let chancesArea = document.getElementById("chances-area")
let gameOver = false;
let chances = 5; // 남은 기회
let userValueList = []; // 유저가 입력한 숫자들 리스트

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickNum() {
    // 랜덤숫자 뽑기

    computerNumber = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNumber);
}

function play() {
    // 숫자 추측하기
    const userValue = userInput.value;
    if (userValue < 1 || userValue > 100) {
        resultText.textContent = "1부터 100 사이의 숫자를 입력 해주세요";

        return;
    }

    if (userValueList.includes(userValue)) {
        resultAreaImg.src = "https://media3.giphy.com/media/xlqFxnsFeyuu2pDp4j/giphy.gif?cid=ecf05e47l7w1j7dul42xbvb88ntif4khtvy8r0nhaaen9295&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        resultArea.textContent="취했냐!! 했던 숫자잖아!!"

        return;
    }

    chances--;
    chancesArea.textContent = `남은 기회:${chances}`;
    userValueList.push(userValue);
    if (userValue < computerNumber) {
        resultAreaImg.src =
            "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3NvamMxdW91M21nOHFoZXFuN3Y4c2VzenlienBmNHNzZGh6OGRzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b3z9tWI6hZSY0ydy0g/giphy.gif";
            resultArea.textContent = "UP!!!"
    } else if (userValue > computerNumber) {
        resultAreaImg.src = "https://media4.giphy.com/media/nkP3Ug9p95Qquy6WTM/giphy.gif?cid=ecf05e478rodf0uqqpic8sy5zn8xgthvbb9qcy36gffd9fo8&ep=v1_gifs_search&rid=giphy.gif&ct=g";
        resultArea.textContent = "DOWN!!!"
    } else {
        resultAreaImg.src =
            "https://media0.giphy.com/media/fqVUYfHCELMgMpA4fo/giphy.gif?cid=ecf05e47jfjux0y2wcpd8rviu8lmrvvyq8my1e3neauckpdq&ep=v1_gifs_search&rid=giphy.gif&ct=g";
            resultArea.textContent = "맞췄으니까 마셔!!!!"
        gameOver = true;
    }

    if (chances == 0) {
        gameOver = true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function focusInput() {
    userInput.value = "";
}

function reset() {
    //리셋
    pickNum()
    userInput.value = ""
    resultAreaImg.src = "./img/mainimg.png"
    resultArea.textContent = "마시기 싫으면 맞추는게 좋을껄???"
    gameOver = false;
    playButton.disabled = false;
    chances = 5;
    chancesArea.innerHTML = `남은 기회:${chances}`;
    userValueList = [];
}

pickNum();