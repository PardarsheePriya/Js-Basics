let x = 5;
let y = 5;
let strings = '';

for (let index = 0; index < x; index++) {
  for (let ind = 0; ind < y; ind++) {
    strings += '*';
  }
  strings += '\n';
}
console.log(strings);
