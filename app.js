const squares = document.querySelectorAll('.squares');

const blackBtn = document.querySelector('#blackBtn');
const colorBtn = document.querySelector('#randomColor');


blackBtn.addEventListener('click', () => {
    for (let square of squares) {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    }
});

colorBtn.addEventListener('click', () => {
    for (let square of squares) {
        square.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    }
});












