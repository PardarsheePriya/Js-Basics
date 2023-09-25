let strings = '';
let size = 5;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
      strings += '*';
    } else {
      strings += ' ';
    }
  }
  strings += '\n';
}

console.log(strings);
