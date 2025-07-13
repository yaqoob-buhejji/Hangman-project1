const output = document.getElementById('output')
const allkey = document.querySelectorAll('.key')

allkey.forEach(
    key =>{
        key.addEventListener('click',() =>{
            output.value += key.textContent;
        })
    }
)

