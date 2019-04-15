import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next, error } = props.displayArgs;
  return (
    <div className="display">
      {error === null ? (next === null ? total : next) : error}
      {' '}
    </div>
  );
};

Display.propTypes = {
  displayArgs: PropTypes.instanceOf(Object).isRequired,
};

export default Display;
