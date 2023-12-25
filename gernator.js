function* countGenerator() {
  let count = 0;

  yield count++;
  yield count++;
  yield count++;
  return 10;
}

let counter = countGenerator();

console.log(counter.next()); // { value: 0, done: false }
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }

// The generator is done at this point
console.log(counter.next()); // { value: 10, done: true }
