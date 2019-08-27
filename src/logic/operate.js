import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  let res;
  switch (operation) {
    case '+':
      res = Number(x.plus(y).toString());
      break;
    case '-':
      res = Number(x.minus(y).toString());
      break;
    case 'X':
      res = Number(x.times(y).toString());
      break;
    case '/':
      res = Number(x.div(y).toString());
      break;
    default:
      res = null;
      break;
  }
  return res;
};

export default operate;
