import * as AT from "./authTypes";
import axios from "axios";

export const authenticateUser = (username, password,firstName) => {
  const credentials = {
    username: username,
    password: password,
  };
  return (dispatch) => {
    dispatch({
      type: AT.LOGIN_REQUEST,
    });
    axios
      .post("http://localhost:8080/login", credentials)
      .then((response) => {
        
        let tokenAuthorization=response.headers.authorization;
        localStorage.setItem("Authorization", tokenAuthorization);
        dispatch(success(
          { username: response.data.name,
            firstName: firstName,
             isLoggedIn: true }));
      })
      .catch((error) => {
        dispatch(failure());
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: AT.LOGOUT_REQUEST,
    });
    localStorage.removeItem("jwtToken");
    dispatch(success(false));
  };
};

const success = (isLoggedIn) => {
  return {
    type: AT.SUCCESS,
    payload: isLoggedIn,
  };
};

const failure = () => {
  return {
    type: AT.FAILURE,
    payload: false,
  };
};
