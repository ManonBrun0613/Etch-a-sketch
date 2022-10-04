const grid = document.querySelector('.grid');
let gridSizeValue=16


function createGrid() {
    grid.innerHTML = "";
    for (let j=0;j<gridSizeValue;j++) {
        let line = document.createElement('div');
        line.classList.add('line');
        grid.appendChild(line);

        for (let i = 0; i<gridSizeValue; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            line.appendChild(square);
        }
        const squares = document.querySelectorAll('.square')
        console.log(squares)
        squares.forEach(square => { 
            square.addEventListener('mouseenter', function (e) {
                e.target.classList.add('hover');
            });
            square.addEventListener('mouseenter', function (e) {
                e.target.classList.add('color');
            });
            square.addEventListener('mouseout', function(e) {
                e.target.classList.remove('hover');
            });
        });

    }
}


function removecolor() {
    return createGrid()
}


const reset = document.querySelector('.reset');
reset.addEventListener('mouseenter',function(e) {
    e.target.classList.add('hover');
});

reset.addEventListener('mouseout',function(e) {
    e.target.classList.remove('hover');
});
reset.addEventListener('click', removecolor);




const size = document.querySelector('.size');
size.addEventListener('mouseenter',function(e) {
    e.target.classList.add('hover');
});

size.addEventListener('mouseout',function(e) {
    e.target.classList.remove('hover');
});


function gridSize() {
    let tempoSize = parseInt(prompt("Enter the grid size you want (nb of squares in a line):" , ""));
    if (!(Number.isInteger(tempoSize))) {
        alert('Your grid size must be an integer.');
    } else if (tempoSize>100) {
        alert('Your grid size must not be greater than 100x100.');
    } else if (tempoSize<0) {
        alert('Your grid size must be positive.')
    } else {
        gridSizeValue=tempoSize;
    }
    return createGrid()
}

size.addEventListener('click',gridSize)

createGrid()
