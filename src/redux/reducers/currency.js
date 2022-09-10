const initialState = {
  index: 0,
};
const currency = (state = initialState, action) => {
  if (action.type === 'CHANGE_CURRENCY') {
    return {
      ...state,
      index: action.payload,
    };
  }
  return state;
};
export default currency;
