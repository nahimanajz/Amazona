//workflow of these login credentials
/*
    1. we fetch data from login screen, 
    2. we import constants from constants, 
    3. we make  reducers, 
    4. in reducer we import constants and export it to store;
    5. store keeps data which are accessible at every page in react
    6. On signinScreen (page), We use useSelector() to call variable from redux store.

*/  

import axios from "axios";
import * as uc from "../constants/userConstants";
import { headers } from "../config/userInfo"

const signin = (email, password) => async(dispatch) => {
 try {
   
   dispatch({type: uc.USER_SIGNIN_REQUEST, payload: { email, password } });
   const { data } = await axios.post("/api/users/signin", { email, password});
   dispatch({type: uc.USER_SIGNIN_SUCCESS, payload: data });  
   localStorage.setItem('userInfo', JSON.stringify(data));
    
 } catch (error) {
     dispatch({type: uc.USER_SIGNIN_FAIL, payload: error.message});
 }
}
const register = (name, email, password,) => async(dispatch) => {
  dispatch({type: uc.USER_REGISTER_REQUEST, payload: {name, email, password } });
  try {
    const { data } = await axios.post("/api/users/register", {name, email, password});
    dispatch({type: uc.USER_REGISTER_SUCCESS, payload: data});

  } catch (error) {
    dispatch({type: uc.USER_REGISTER_FAIL, payload: error.message});
    
  }
}
  export const userDetails = (userId) => async(dispatch)=> {
     dispatch({type: uc.USER_DETAILS_REQUEST,payload:userId});     
     try {
       
           const { data } = await axios.get(`/api/users/${userId}/details`, headers);
           console.log("from action", data);
           dispatch({type: uc.USER_DETAILS_SUCCESS, payload: data});
     } catch (error) {
       // TODO: I will change this message once project is complete to one function of response error 
       const message = error.response && error.response.data.message ?error.response.data.message :error.message;
       dispatch({type: uc.USER_DETAILS_FAIL, payload: message});
       console.log(message);
     }
     
  }
const signout =() =>(dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch({type: uc.USER_SIGNOUT});
  window.location.assign("/");
}

export { signin, register, signout };