const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

//Save Data on Browser
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();
//Update Storage
function updateStorage() {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
  }
}

//Generate sticky note typing space
createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', true);
  img.src = 'images/delete.png';
  notesContainer.appendChild(inputBox).appendChild(img);
});

//Delete Button
notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'p') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.execCommand('insertLineBreak');
    event.preventDefault();
  }
});