const axios = require('axios');

export const getAll = new Promise((resolve, reject) => {
  axios.get("https://sheltered-dusk-56497.herokuapp.com/api/users")
    .then(res => {
      let data = [];
        res.data.forEach( o => {
          let temp = {};
          temp.key = o._id;
          temp.IslandName = o.IslandName;
          temp.TurnipPrice = o.TurnipPrice;
          temp.Password = o.Password;
          switch(o.FruitType) {
            case "PEACH":
              temp.FruitType = "桃子";
              break;
            case "PEAR":
              temp.FruitType = "梨";
              break;
            case "APPLE":
              temp.FruitType = "苹果";
              break;
            case "ORANGE":
              temp.FruitType = "橘子";
              break;
            case "CHERRY":
              temp.FruitType = "樱桃";
              break;
            default:
              break;
          }
          temp.FriendID = o.FriendID;
          switch(o.NorthSouth) {
            case "North":
              temp.NorthSouth = "北半球";
              break;
            case "South":
              temp.NorthSouth = "南半球";
              break;
            default:
              break;
          }
          data.push(temp);
        });
      return resolve(data);
    })
    .catch(err => {
      return reject(err);
    })
})

export const addOne = (user) => {
  return new Promise((resolve, reject) => {
    axios.post("https://sheltered-dusk-56497.herokuapp.com/api/users",user)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      })
  })
}