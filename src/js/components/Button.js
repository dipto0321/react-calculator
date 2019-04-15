import React from 'react';

const Button = (props) => {
  const { name } = props;
  return <div className="btn">{name}</div>;
};

export default Button;
