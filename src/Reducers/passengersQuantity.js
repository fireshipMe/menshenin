export const passengerQuantity = (state = [], action) => {
  switch (action.type) {
    case 'PUSH_PASSENGER':
      return [...state, action.id];
    case 'REM_PASSENGER':
      return state.filter((id) => id !== action.id);
    default:
      return state;
  }
};
