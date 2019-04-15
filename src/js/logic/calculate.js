import operate from './operate';

const appendChar = (currentVal, input) => (currentVal === null ? input : currentVal + input);

export default (dataObj, btn) => {
  let { total, next, operation } = dataObj;
  if (!isNaN(btn)) {
    operation === null ? (total = appendChar(total, btn)) : (next = appendChar(next, btn));
  } else if (btn !== '=') {
    if (next === null) {
      operation = btn;
    } else {
      total = operate(total, next, operation);
      next = null;
      operation = btn;
    }
    // btn !== '=' ? (operation = btn) : operate(total, next, operation);
  }

  return {
    total,
    next,
    operation,
  };
};
