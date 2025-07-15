function init(){

const output = document.getElementById('output')
const allkey = document.querySelectorAll('.key')
const displyWord = document.querySelector('.p')
let lives = 5


// const emptyLines = ['1','2','3','4','5',];
let letter;
let word;
let currentLetters = [];

const list = ['orange', 'apple','car','javascript','html'];


function getWord() {
    const randomword = list[Math.floor(Math.random()*list.length)]
    word = randomword;
    displyWord.innerHTML=word.split('').map(()=>`<li class="letter"></li>`).join('');
}

function playing(){
    // console.log("word " ,word)
    // console.log("letter " ,letter)

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
        lives -=1;
        console.log("You lost 1 life: ", lives)
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
playing();
}

document.addEventListener('DOMContentLoaded', init)

