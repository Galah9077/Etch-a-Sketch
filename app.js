const blackBtn = document.querySelector('#blackBtn');
const colorBtn = document.querySelector('#randomColor');
const resetBtn = document.querySelector('#reset');
const smlBtn = document.querySelector('#small');
const medBtn = document.querySelector('#medium');
const largeBtn = document.querySelector('#large');

const divContainer = document.querySelector('#container');

const sizes = {
    small: 16,
    med: 32,
    large: 64,
}

newGrid(16)

function removeGrid() {
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }
}

smlBtn.addEventListener('click', () => {
    removeGrid();
    newGrid(sizes.small);
});

medBtn.addEventListener('click', () => {
    removeGrid()
    newGrid(sizes.med);
});
largeBtn.addEventListener('click', () => {
    removeGrid()
    newGrid(sizes.large);
});


//BUTTONS// 
blackBtn.addEventListener('click', () => {
    let divs = document.querySelectorAll('div.box');
    for (let div of divs) {
        div.addEventListener('mouseover', () => {
            div.classList.add('black');
            div.style.backgroundColor = 'black';
        })
    }
});

colorBtn.addEventListener('click', () => {
    let divs = document.querySelectorAll('div.box');
    for (let div of divs) {
        div.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    }
});

resetBtn.addEventListener('click', () => {
    let divs = document.querySelectorAll('div.box');
    for (let div of divs) {
        div.style.backgroundColor = 'beige';
    }
});


function newGrid(num) {
    let gridSize = num * num;
    for (let i = 0; i < gridSize; i++) {
        let newSquare = document.createElement('div');
        divContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        divContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        divContainer.appendChild(newSquare);
        newSquare.classList.add('box');
    }
}

//range input
const slider = document.querySelector('#slider');

// const changeGridSize = (num) => {
//     let num = slider.value;
//     slider.addEventListener('change', () => {
//         newGrid(num.value);
//     })
// };













