import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, color, wide, handleClick,
  } = props;
  const colorClass = color ? 'btn operator' : 'btn';
  const wideClass = wide ? `${colorClass} wide-class` : `${colorClass}`;

  return (
    <div
      className={wideClass}
      onClick={() => handleClick(name)}
    >
      {name}

    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool.isRequired,
  wide: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
