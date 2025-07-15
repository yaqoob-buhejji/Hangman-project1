function init(){

const output = document.getElementById('output')
const allkey = document.querySelectorAll('.key')
const displyWord = document.querySelector('.p')
const hangImg = document.querySelector('.game-board img')
const loseMessage = document.querySelector("#lose")


// const emptyLines = ['1','2','3','4','5',];
let letter;
let word;
let currentLetters = [];
let lives = 0;
let maxLives = 7;

const list = ['orange', 'apple','car','javascript','html'];


function getWord() {
    const randomword = list[Math.floor(Math.random()*list.length)]
    word = randomword;
    displyWord.innerHTML=word.split('').map(()=>`<li class="letter"></li>`).join('');
}

function playing(){
    // console.log("word " ,word)
    // console.log("letter " ,letter)

    if(currentLetters.length === word.length){
        console.log("You win")
    }
    if(word.includes(letter)){
        console.log(`${letter} exist`);
        [...word].forEach((char, i) => {
            if(char === letter){
                currentLetters.push(letter);
                displyWord.querySelectorAll("li")[i].innerText= letter;
            }
        })

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
        if(lives === maxLives){
            console.log("You lose")
            
            loseMessage.style.visibility = "visible"

            allkey.forEach((key)=>{
                key.addEventListener("click",()=>{})
                key.removeEventListener("click",()=>{})
            })

        }

    }
}

allkey.forEach((key) => {
        key.addEventListener('click', function(event){
            letter = event.target.innerText.toLowerCase();
            console.log(letter)
            playing();
        })
    }
)



getWord();
// playing();
}

document.addEventListener('DOMContentLoaded', init)

