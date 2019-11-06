import { useReducer } from 'react';

export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    
    case 'add':
      if (state.find(d => d.id === action.id)) return state;
      state.push({ id: action.id, name: action.id });
      return [...state];
    
    case 'editName':
      const device = state.find(d => d.id === action.id);
      if (device) device.name = action.name;
      return [...state];
    
    default:
      return state;
  }
};

export default () => useReducer(reducer, initialState);
