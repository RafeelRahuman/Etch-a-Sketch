const container = document.querySelector("#container");
const size_btn = document.querySelector("#sizeButton")
const black_btn = document.querySelector("#blackButton")
const color_btn = document.querySelector("#colorButton")
const clear_btn = document.querySelector("#clearButton")
const color_picker = document.querySelector("#colorPicker")
const erase_btn = document.querySelector("#eraseButton")



let currentMode = 'black';

let pickedColor = '#123456'


function createGrid(size){
    container.innerHTML='';
    const containerWidth = 460;
    const sizePerSquare = containerWidth / size;

    for( let i=0 ; i< (size*size); i++){
       const square = document.createElement('div');
       square.classList.add('grid-square');
       square.style.width = sizePerSquare + "px";
       square.style.height = sizePerSquare + "px";

       square.addEventListener('mouseenter', () => {
       if(currentMode === 'black'){
        square.style.background = 'black';
       }
       else if(currentMode === 'random'){
        const randmR = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        square.style.background = `rgb(${randmR},${randomB},${randomG})`;
       }
       else if(currentMode === 'picker'){
        square.style.background = pickedColor
       }
       else if(currentMode === 'erase'){
        square.style.background = 'white'
       }
    });
       
       container.appendChild(square);
    }
}


size_btn.addEventListener('click', () => {

    let userChoice = prompt("Enter Number of Square Grid Create (Max 100)");
    let size = parseInt(userChoice);
    if(size>=1 && size<=100){
        createGrid(size);
    }
    else{
        alert("Enter number between 1 and 100")
    }
});

black_btn.addEventListener('click', () => currentMode = 'black')
color_btn.addEventListener('click' , () => currentMode = 'random')
erase_btn.addEventListener('click', () => currentMode = 'erase')
color_picker.addEventListener('input', (e) => {
    pickedColor = e.target.value;
    currentMode = 'picker';
});

clear_btn.addEventListener('click' , () => {
    const allSquare = document.querySelectorAll('.grid-square');
    allSquare.forEach(sq => sq.style.background = 'transparent')   
});
createGrid(16)