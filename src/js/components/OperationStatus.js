import React from 'react';
import PropTypes from 'prop-types';

const OperationStatus = (props) => {
  const {
    operation,
    total,
    finished,
  } = props;
  const display = operation || (isNaN(total) || finished ? 'Ready' : null);
  return (
    <div className="status">
      {display}
    </div>
  );
};

OperationStatus.propTypes = {
  operation: PropTypes.string,
  total: PropTypes.string,
  finished: PropTypes.bool.isRequired,
};

OperationStatus.defaultProps = {
  operation: '',
  total: '',
};

export default OperationStatus;
