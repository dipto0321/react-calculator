import React from 'react';

const Display = (props) => {
  const {
    total,
  } = props;
  return (
    <div className="display">
      {total}
    </div>
  );
};

export default Display;
