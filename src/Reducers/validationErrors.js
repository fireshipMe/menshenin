export const validationErrors = (state = true, action) => {
  switch (action.type) {
    case 'SET_ERRORS_TRUE':
      return true;
    case 'SET_ERRORS_FALSE':
      return false;
    default:
      return state;
  }
};
