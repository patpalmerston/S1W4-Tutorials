
// manipulating the nav a elements
const funNav = document.querySelectorAll('nav a');

let col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() + 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
console.log(col)

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
 

const colorText = document.querySelectorAll('p');
console.log(colorText)
colorText.forEach(x => {
  x.addEventListener('mouseover', (event) => {
    event.target.style.color = randomColors();
    })
})

// console.log(funNav)

funNav.forEach((x, i) => {
  x.addEventListener('mouseover',() => {
    funNav[i].style.color = randomColors();
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

// messing with body color and a copy listener
const source = document.querySelector('body');
source.addEventListener('copy', () => {
  source.style.backgroundColor = col;
  
})
source.addEventListener('dblclick', () => {
  source.style.backgroundColor = 'white';
})

// using a text selector in text field listener
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

const imgchanger = document.querySelector('')

