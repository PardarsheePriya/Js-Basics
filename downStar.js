let size = 5;
let str = '';

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size - i; j++) {
    str += '*';
  }
  str += '\n';
}

console.log(str);
