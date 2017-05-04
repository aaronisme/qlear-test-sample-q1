import React, {Component, PropTypes} from 'react';
import Cell from '../Cell/Cell'
import './Row.css'

class Row extends Component {
  
  shouldComponentUpdate(nextProps) {
    const rowId = nextProps.rowId;
    const nextRat = nextProps.rat;
    const currentRat = this.props.rat;
    
    return rowId === nextRat.row || rowId === currentRat.row
    
  }
  
  render(){
    const {rowId, cells, rat} = this.props;
    return (
      <div className="row">
        {cells.map((cell, index) => {
          if (rowId === rat.row && index === rat.column) {
            return <Cell key={`${rowId}${index}`} borders={cell} rat/>
          }
          return <Cell key={`${rowId}${index}`} borders={cell}/>
        })}
      </div>
    )
  }
}

Row.propTypes = {
  rowId: PropTypes.number.isRequired,
  cells: PropTypes.array.isRequired,
  rat: PropTypes.object.isRequired
};

export default Row;
