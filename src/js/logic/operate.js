import Big from 'big.js';

const opers = {
  '+': 'plus',
  '-': 'minus',
  x: 'times',
  '/': 'div',
  '%': 'mod',
};

export default (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  const oper = opers[operation];
  return x[oper](y);
};
