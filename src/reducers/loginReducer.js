
const INITIAL_STATE = {logIn:false ,username:'',oAuthToken:''};

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case 'EMPLOYEE_LOGIN':
      return { ...state, username: action.payload.username, logIn:true};
    default:
      return state;
  }
};
