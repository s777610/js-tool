const { sum } = require('./sum');

const num1 = 1;
const num2 = 2;

describe('unit test', () => {
  it('test 1', () => {
    const res = sum({ num1, num2 });
    expect(res).toMatchSnapshot();
  });
});
