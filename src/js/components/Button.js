import React from 'react';

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

export default Button;
