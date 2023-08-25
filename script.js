// const container = document.querySelector('.container');
// let row = 10;
// for(let i = 0 ; i <row*row ; i++){
//     const divs = document.createElement('div');
//     divs.classList.add('gridbox');
//     container.appendChild(divs);
// }

// const boxes = document.querySelectorAll('.gridbox');
// boxes.forEach((box) =>{
//     box.addEventListener('mouseover', ()=>{
//         box.classList.add('hover')
//     })
// })
// const button = document.querySelector('#btn');
// button.addEventListener('click',()=>{
//     boxes.forEach((box)=>{
//         box.classList.remove('hover')
//     })
// })
// const increase = document.querySelector('#increase');
// increase.addEventListener('click',()=>{
//     const rows = document.querySelectorAll('.gridbox');
//     rows.forEach( row => container.removeChild(row));
//     row = 100;
//     for(let i = 0 ; i <row*row ; i++){
//         const divs = document.createElement('div');
//         divs.classList.add('gridboxSmall');
//         container.appendChild(divs);
//     }
//     const smallBoxes = document.querySelectorAll('.gridboxSmall');
//     smallBoxes.forEach((box) =>{
//     box.addEventListener('mouseover', ()=>{
//         box.classList.add('hover')
//     })
//     })
//     button.addEventListener('click',()=>{
//         smallBoxes.forEach((box)=>{
//             box.classList.remove('hover')
//         })
//     })
// })



const container = document.querySelector('.container');
let row = 10;

function createGridBoxes(rows, className) {
    for (let i = 0; i < rows * rows; i++) {
        const divs = document.createElement('div');
        divs.classList.add(className);
        container.appendChild(divs);
    }
}

function addHoverListeners(boxes,iscolorful) {
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            if(iscolorful){
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                box.style.backgroundColor = `#${randomColor}`;
            }
            box.classList.add('hover');
            
        });
    });
}

function removeAllHoverClasses(boxes,iscolorful) {
    boxes.forEach((box) => {
        if(iscolorful){
            box.style.backgroundColor = 'black';
        }
        box.classList.remove('hover');
    });
}

function clearContainer() {
    const rows = document.querySelectorAll('.gridbox, .gridbox100, .gridbox45');
    rows.forEach((row) => container.removeChild(row));
}

function initializeGrid(rowValue, boxClassName) {
    clearContainer();
    row = rowValue;
    createGridBoxes(row, boxClassName);
    const boxes = document.querySelectorAll(`.${boxClassName}`);
    addHoverListeners(boxes,iscolorful);

    const button = document.querySelector('#btn');
    button.addEventListener('click', () => {
        removeAllHoverClasses(boxes,iscolorful);
    });
}

const box10 = document.querySelector('#box10');
box10.addEventListener('click', () => {
    initializeGrid(10, 'gridbox');
});

const box45 = document.querySelector('#box45');
box45.addEventListener('click', () => {
    initializeGrid(45, 'gridbox45');
});

const box100 = document.querySelector('#box100');
box100.addEventListener('click', () => {
    initializeGrid(100, 'gridbox100');
});

// Initial setup
let iscolorful = true;
const colorBtn = document.querySelector('#color');
colorBtn.addEventListener('click',() => {
    iscolorful = !iscolorful;
    iscolorful ? colorBtn.textContent = 'Colored' : colorBtn.textContent = 'White';
    clearContainer();
    initializeGrid(10, 'gridbox');
});
createGridBoxes(row, 'gridbox');
const initialBoxes = document.querySelectorAll('.gridbox');
addHoverListeners(initialBoxes,iscolorful);

const initialButton = document.querySelector('#btn');
initialButton.addEventListener('click', () => {
    removeAllHoverClasses(initialBoxes,iscolorful);
});