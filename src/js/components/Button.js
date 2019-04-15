import React from 'react';

const Button = (props) => {
  const { name, color, wide } = props;
  const colorClass = color ? 'btn operator' : 'btn';
  const wideClass = wide ? `${colorClass} wide-class` : `${colorClass}`;

  return <div className={wideClass}>{name}</div>;
};

export default Button;
