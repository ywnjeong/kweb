const cases = require('./cases');

const n = 10;
const r = 2;


console.log(`n = ${n}, r = ${r}`)
console.log(`Permutation: ${cases.permutation(n, r)}`);
console.log(`Combination: ${cases.combination(n, r)}`);
console.log(`Multi Permutation: ${cases.multiPermutation(n, r)}`);
console.log(`Multi Combination: ${cases.multiCombination(n, r)}`);