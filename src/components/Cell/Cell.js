import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Cell.css';

const Cell = ({borders, rat, ratMove}) => {
  const {top, right, bottom, left} = borders;
  
  const cellClass = classNames({
    'cell': true,
    top,
    right,
    bottom,
    left,
    rat
  });
  
  return (
    <div className={cellClass}></div>
  )
};


Cell.propTypes = {
  borders: PropTypes.shape({
      top: PropTypes.bool.isRequired,
      right: PropTypes.bool.isRequired,
      bottom: PropTypes.bool.isRequired,
      left: PropTypes.bool.isRequired,
  }),
  rat: PropTypes.bool
};

export default Cell;
