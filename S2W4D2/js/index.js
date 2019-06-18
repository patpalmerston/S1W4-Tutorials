
// manipulating the nav a elements
const funNav = document.querySelectorAll('nav a');

let col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() + 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
console.log(col)
 

// console.log(funNav)

funNav.forEach((x, i) => {
  x.addEventListener('mouseover',() => {
    funNav[i].style.color = ( col || col);
  })
  x.addEventListener('mouseleave', () => {
    funNav[i].style.color = 'black';
  })
});

// manipulating the title
const funTitle = document.querySelector('.logo-heading')
console.log(funTitle)

funTitle.addEventListener('mousedown', () => {
  funTitle.style.visibility = 'hidden';
})

funTitle.addEventListener('mouseout', () => {
  funTitle.style.visibility = 'visible';
})


const source = document.querySelector('body');
source.addEventListener('copy', (e) => {
  source.style.backgroundColor = col;
})
source.addEventListener('dblclick', () => {
  source.style.backgroundColor = 'white';
})


function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

