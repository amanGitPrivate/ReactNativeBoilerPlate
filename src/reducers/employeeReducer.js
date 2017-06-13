const INITIAL_STATE = {name:'seth', phone:'', shift:''};

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case 'EMPLOYEE_UPDATE':
      return {...state, name: "aman"};
    default:
      return INITIAL_STATE;

  }
};
