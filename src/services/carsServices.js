import axios from "axios";

const getPing = () => {

    const config = {
      method: "GET",
      url: "https://api.remote.dev/api/ping",
      
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };



/*const logIn = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remote.dev/api/users/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};
*/

/*const register = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remote.dev/api/users/register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};*/

const logOut = () => {

  const config = {
    method: "GET",
    url: "https://api.remote.dev/api/users/logout",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};
//const usersService = {logIn, register}
export {getPing};
export {logOut};
// export all your calls here

// if you had three functions to export 
// const usersService = { logIn, register, thirdFunction }
// export default usersService;