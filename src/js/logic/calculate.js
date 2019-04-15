import operate from './operate';

const appendChar = (currentVal, input) => (currentVal === null ? input : currentVal + input);

export default (dataObj, btn) => {
  let {
    total, next, operation, error, finished,
  } = dataObj;
  if (!isNaN(btn)) {
    finished = false;
    operation === null ? (total = appendChar(total, btn)) : (next = appendChar(next, btn));
  } else if (btn !== '=' && btn !== 'AC' && btn !== '+/-' && btn !== '%') {
    finished = false;
    if (next === null) {
      if (total !== null) operation = btn;
    } else {
      try {
        const res = operate(total, next, operation);
        total = res;
      } catch (err) {
        error = 'Cannot do that sorry';
      }
    }
  } else if (btn === '=') {
    if (!!total && !!next) {
      total = operate(total, next, operation);
      operation = null;
      next = null;
      error = null;
      finished = true;
    }
  } else if (btn === 'AC') {
    total = null;
    next = null;
    operation = null;
    error = null;
    finished = false;
  } else if (btn === '+/-') {
    finished = false;
    if (next) {
      next *= -1;
    } else {
      total *= -1;
    }
  } else if (btn === '%') {
    finished = false;
    if (next) {
      next /= 100;
    } else {
      total /= 100;
    }
  }

  return {
    total,
    next,
    operation,
    error,
    finished,
  };
};
