// const input = 3;

// const lines = [input + 1];

// console.log(lines);

// const fib = (n) => {
//   console.log(`n = ${n}`);
//   if (n <= 2) {
//     return [0, 1];
//   }
//   const s = fib(n - 1);
//   s.push(s[s.length - 1] + s[s.length - 2]);
//   return s;
// };

// if (input === 1) console.log(0);

// if (input > 1 && input < 46) {
//   const index = Number(lines.shift()) - 1;
//   console.log(`index = ${index}`);

//   const sequence = fib(index).join(' ');

//   console.log(sequence);
// }

// const input = 3;

// const fib = (n) => {
//   if (n === 2) {
//     return [0, 1];
//   } // else {
//   const s = fib(n - 1);
//   s.push(s[s.length - 1] + s[s.length - 2]);
//   return s;
//   // }
// };
// if (input === 1) console.log(0);
// else if (input > 1 && input < 46) {
//   // const index = Number(lines.shift()) - 1;
//   // const index = input;
//   const sequence = fib(input).join(' ');
//   console.log(sequence);
// }

const input = [13, -3, 132];

for (let i = 0; i < 10; i++) {
  if (typeof input[i] === 'number') {
    console.log(`X[${i}] = ${input[i] <= 0 ? '1' : input[i]}`);
  }
}
