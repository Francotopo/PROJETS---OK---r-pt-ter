// ========= Variables ===========
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// ========= eventListener on initial box ===========
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// ========= eventListener on drop the drag ===========
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// ========= functions on drag ===========
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'insible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
