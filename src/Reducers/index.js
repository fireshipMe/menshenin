import { combineReducers } from 'redux';
import { passengerInfo } from './passengerInfo';
import { passengerQuantity } from './passengersQuantity';
import { validationErrors } from './validationErrors';
export default combineReducers({
  passengerInfo,
  passengerQuantity,
  validationErrors,
});
