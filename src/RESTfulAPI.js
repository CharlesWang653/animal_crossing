const axios = require('axios');

export const getAll = () => {
  axios.get("https://sheltered-dusk-56497.herokuapp.com/api/users");
}

export const addOne = (user) => {
  axios.post("https://sheltered-dusk-56497.herokuapp.com/api/users",user);
}