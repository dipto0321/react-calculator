import operate from './operate';

const appendChar = (currentVal, input) => (currentVal === null ? input : currentVal + input);

export default (dataObj, btn) => {
  let {
    total, next, operation, error, finished,
  } = dataObj;
  if (!isNaN(btn)) {
    operation === null ? (total = appendChar(total, btn)) : (next = appendChar(next, btn));
  } else if (btn !== '=' && btn !== 'AC') {
    if (next === null) {
      operation = btn;
    } else {
      try {
        const res = operate(total, next, operation);
        total = res;
      } catch (err) {
        error = 'Cannot do that sorry';
      }
    }
  } else if (btn === '=') {
    total = operate(total, next, operation);
    operation = null;
    next = null;
    error = null;
    finished = true;
  } else if (btn === 'AC') {
    total = null;
    next = null;
    operation = null;
    error = null;
  }

  return {
    total,
    next,
    operation,
    error,
    finished,
  };
};
