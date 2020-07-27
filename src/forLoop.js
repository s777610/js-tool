const inputArray = [1, 2, 3];

const asyncFunc = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });
};

const run = async () => {
  for (let ix = 0; ix < inputArray.length; ix = ix + 1) {
    const res = await asyncFunc();
    console.log(ix, res);
  }
  return 'done';
};

run().then(console.log);
