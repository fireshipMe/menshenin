export const pushPassengerInfo = (id, payload) => ({
  type: 'PUSH_PASSENGER_INFO',
  id: id,
  payload: payload,
});

export const remPassengerInfo = (id) => ({
  type: 'REM_PASSENGER_INFO',
  id: id,
});

export const remPassenger = (id) => ({
  type: 'REM_PASSENGER',
});

export const addPassenger = () => ({
  type: 'PUSH_PASSENGER',
});

export const setErrorsTrue = () => ({
  type: 'SET_ERRORS_TRUE',
});

export const setErrorsFalse = () => ({
  type: 'SET_ERRORS_FALSE',
});
