import { Actions } from 'react-native-router-flux';

export const loginAction = (payload) => {
  return function(dispatch) {
    fetch("http://oauth-server-795787960.ap-northeast-2.elb.amazonaws.com/OAuth2-SSO/oauth/token/", {
            method: "post",
            headers: {
             'Authorization': 'Basic Z3Vlc3RfaG91c2VfcHdkOmdoX3NlY3JldA==',
             'Content-Type': 'application/x-www-form-urlencoded'
           },
           body:JSON.stringify(payload)
         }).then((response,data) => {
              debugger;
              if(response.status === 200){
                Actions.header();
                dispatch({type: "EMPLOYEE_LOGIN", payload: payload})
            }
          });
        }
      };
