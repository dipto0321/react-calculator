import React from 'react';
import PropTypes from 'prop-types';
import OperationStatus from './OperationStatus';

const Display = (props) => {
  const {
    total, next, operation, error, finished,
  } = props.displayArgs;
  return (
    <div className="display">
      <OperationStatus
        operation={operation}
        total={String(total)}
        finished={finished}
      />
      {error === null ? (next === null ? total : next) : error}
    </div>
  );
};

Display.propTypes = {
  displayArgs: PropTypes.instanceOf(Object).isRequired,
};

export default Display;
