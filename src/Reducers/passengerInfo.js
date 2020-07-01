export const passengerInfo = (state = [], action) => {
  switch (action.type) {
    case 'PUSH_PASSENGER_INFO':
      return [
        ...state.filter(({ id }) => id !== action.id),
        {
          id: action.id,
          values: action.payload,
        },
      ];
    case 'REM_PASSENGER_INFO':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
