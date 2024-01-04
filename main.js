//랜덤번호 지정
//유저가 번호를 이력하고 go버튼 누름
//유저가 번호맞추면 메세지출력
//랜덤번호 < 유저번호 Down
//랜덤번호 > 유저번호 Up
//Rest버튼 누르면 게임 리셋
//5번의기회를 다쓰면 게임끝 (버튼 비화성화)
//유저가 1~100범위 입력시 메세지출력 기회차감 X
//유저가 이미 입력한걸 또 입력하면 메세지 출력 기회차감 X

let randomNum = 0;
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("userinput")
let resultArea = document.getElementById("result")
let resetButton = document.getElementById("reset-button")
let resultAreaImg = document.querySelector(".main-img");
let chances = 5
let gameOver = false
let chancesArea = document.getElementById("chances-area")
let history=[]

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",focusInput)

function pickNum(){
    randomNum = Math.floor(Math.random()*100)+1; //1~100까지이기때문에 +1 입력
    console.log("정답은",randomNum);
}

function play(){
    let userValue = userInput.value;
    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1과100사이에 숫자를 입력해주세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="취했냐!! 했던 숫자잖아!!"
        return;
    }

    chances --;
    chancesArea.textContent = `남은횟수 : ${chances} 회`;

    if(userValue < randomNum){
        resultAreaImg.src = "/img/up.gif"
        result.textContent = "UP!!!"
        console.log("Image Source: ", resultAreaImg.src);
    }else if(userValue > randomNum){
        resultAreaImg.src = "./img/down.gif"
        result.textContent = "DOWN!!!"
    }else{
        resultAreaImg.src = "./img/mainimg.png"
        result.textContent = "맞췄으니까 마셔!!!!"
        gameOver=true
    }
    history.push(userValue)

    if(chances < 1){
        gameOver = true
    }
    if(gameOver == true){
        playButton.disabled= true;
    }
}
function focusInput(){
    userInput.value=""
}
function reset(){
    //userinput창 정리
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
pickNum()