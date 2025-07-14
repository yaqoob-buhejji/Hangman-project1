function init(){

const output = document.getElementById('output')
const allkey = document.querySelectorAll('.key')
const lines = document.querySelectorAll('.list-p')


// const emptyLines = ['1','2','3','4','5',];
let letter;
let word;
let currentLetter = [];

const list = ['orange', 'apple','car','javascript','HTML'];


allkey.forEach((key) => {
        key.addEventListener('click', getWord)
    }
)


function getWord(event) {
    const word = list[Math.floor(Math.random()*list.length)]
    console.log(word);
}
}

document.addEventListener('DOMContentLoaded', init)

