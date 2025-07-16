function init(){

const output = document.getElementById('output')
const allkey = document.querySelectorAll('.key')
const displyWord = document.querySelector('.p')
const hangImg = document.querySelector('.game-board img')
const loseMessage = document.querySelector("#lose")
const winmessage =  document.querySelector("#win")
const hintElm = document.querySelector('.hint')
const resetElm = document.querySelector('.reset')

// const emptyLines = ['1','2','3','4','5',];
let currentLetter;
let currentWord;
let currentLetters = [];
let lives = 0;
let maxLives = 7;
let splitWord = []
const list = [
    {
        word: "apple",
        hint: "Hint: A fruit that is commonly red or green."
    },
    {
        word: "book",
        hint: "Hint: Contains pages with text for reading."
    },
    {
        word: "sun",
        hint: "Hint: A star that provides light and heat."
    },
    {
        word: "cat",
        hint: "Hint: A furry animal that meows."
    },
    {
        word: "javascript",
        hint: "Hint: Coding langauge."
    },
    {
        word: "clock",
        hint: "Hint: Where we see the time?"
    },{
        word: "chair",
        hint: "Hint: Something exists in class where you feel comfortable ."
    },{
        word: "headphone",
        hint: "Hint: You use to hear from."
    },{
        word: "riffa",
        hint: "Hint: Clock roundabout in Bahrain."
    },{
        word: "money",
        hint: "Hint: Something you need."
    },{
        word: "bottle",
        hint: "Hint: Storing the water in it to drink."
    },
    {
        word: "ball",
        hint: "Hint: Round object used in various sport games."
        
    }];


function getWord() {
    const { word , hint} = list[Math.floor(Math.random()*list.length)]
    currentWord = word;
    hintElm.innerText = hint;
    reset();
    displyWord.innerHTML=word.split('').map(()=>`<li class="letter"></li>`).join('');

    console.log(word)

    for(let i = 0; i< word.length;i++){
        splitWord.push("_")
    }
    console.log(splitWord)
}

function playing(){
    // console.log("word /" ,word)
    // console.log("letter " ,letter)/
    console.log("current letters " ,currentLetters)


    if(currentWord.includes(currentLetter)){
        splitWord.forEach((letter,index)=>{
            
            if(currentLetter === currentWord[index]){
                
            }
        })
    }


    console.log(currentLetter, "current letter")
    console.log(currentLetters, "current letters")
    console.log(currentWord, "current word")


    if(currentLetters.includes(currentLetter) && currentWord.includes(currentLetter)){return}
    if(currentWord.includes(currentLetter)){
        console.log(`${currentLetter} exist`);
        [...currentWord].forEach((char, i) => {
            if(char === currentLetter){
                currentLetters.push(currentLetter);
                displyWord.querySelectorAll("li")[i].innerText= currentLetter;
            }
        })



        if(lives !== maxLives && currentLetters.length === currentWord.length){
        console.log("You win")
                    
            winmessage.style.display = "block"

            allkey.forEach((key)=>{
                key.addEventListener("click",()=>{})
                key.removeEventListener("click",()=>{})
            })
            return;
        }

    }
    else{
        lives++;
        console.log(lives)
        console.log(loseMessage)
        if(lives < 8){
        hangImg.src = `./imgs/${lives+1}.png`

        }
        // if(lives === 1){
        // console.log("In if")

        //     hangImg.src = `./imgs/2nd.png`
        // }

        // losing

        if(lives === maxLives && currentLetters.length !== currentWord.length){
            console.log("You lose")
            
            loseMessage.style.display = "block"

            allkey.forEach((key)=>{
                key.addEventListener("click",()=>{})
                key.removeEventListener("click",()=>{})
            })
            return;

    }
    }
}

function reset(){
    lives = 0;
    currentLetters = [];
    hangImg.src =`./imgs/cartoon-stickman-stick-figure-man-260nw-2120145698.jpg`;
    if (winmessage || loseMessage){
        winmessage.style.display  = 'none'
        loseMessage.style.display = 'none'
    }
}

allkey.forEach((key) => {
        key.addEventListener('click', function(event){
            currentLetter = event.target.innerText.toLowerCase();
            console.log(currentLetter)
            playing();
        })
    }
)

resetElm.addEventListener('click', getWord)


getWord();
// playing();

}

document.addEventListener('DOMContentLoaded', init)

//for the reset button

