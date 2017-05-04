import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';
import Cell from '../Cell/Cell';

describe('Row', ()=> {
  const cells= [
    {top:true, right:true, bottom:false, left:false},
    {top:true, right:true, bottom:true, left:true},
  ];
  
  const rowId = 0;
  
  const rat = {
    row:0,
    column:1
  };
  
  it('should render Row component with correct border', () => {
    const rowWarpper = shallow(<Row rowId={rowId} cells={cells} rat={rat}/>);
    expect(rowWarpper.find(Cell).length).toEqual(2);
  });
  
  it('should pass the rat to right cell is rat passed in ', () => {
    const rowWarpper = shallow(<Row rowId={rowId} cells={cells}  rat={rat} />);
    
    const ratCell = rowWarpper.find(Cell).filter('[rat]');
    expect(ratCell.key()).toEqual('01');
  })
});
