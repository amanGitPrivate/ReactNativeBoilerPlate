import {combineReducers} from 'redux';
import EmployeeFormReducer from './employeeReducer';
import LoginReducer from './loginReducer';

export default combineReducers({
  employeeForm:EmployeeFormReducer,
  loginReducer:LoginReducer
});
