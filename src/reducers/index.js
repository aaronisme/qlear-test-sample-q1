import { combineReducers } from 'redux';
import locationHelper from '../helpers/locationHelper';

const rat = (state = {row:0, column: 0}, action) => {
  switch (action.type){
    case 'MOVE_RAT':
      console.log(locationHelper.generateLocation(state, action.panel, action.direction))
      return locationHelper.generateLocation(state, action.panel, action.direction);
    default:
      return state
  }
};

const panel = (state = [], action) => {
  switch (action.type){
    default:
      return state
  }
};

const rootReducer = combineReducers(
  {
    rat,
    panel
  }
);

console.log(rootReducer);

export default rootReducer
