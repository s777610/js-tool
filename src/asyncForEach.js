const asyncForEach = async (array = [], callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const asyncFunc = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('0');
    }, 1000);
  });
};

const run = async () => {
  const res = [];
  const array = [1, 2, 3, 4, 5, 6];
  await asyncForEach(array, async (num) => {
    const result = await asyncFunc();
    res.push(`${num}:${result}`);
  });
  return res;
};

run().then(console.log);
