const arrayChunk = require('lodash/chunk');

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const res = arrayChunk(array, 2);
console.log({ res });
