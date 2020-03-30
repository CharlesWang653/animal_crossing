const mongoose = require('mongoose');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/users', (req, res) => {
  User
    .find()
    .exec((err, user) => {
      if (err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).send(user);
      }
    })
	});


app.put('/api/users/:id/DS', (req, res) => {
	let userId = req.params.id;
	User.findByIdAndUpdate(userId, req.body, (err, user) => {
		if (err) {
			res.status(500).json(err);
		}
		else {
      res.status(200).json(user);//返回旧的user
		}
	});
});

app.post('/api/users', (req, res) => {
  User.createIndexes(userSchema.index({ "createdAt": new Date() }, { expires: req.body.Period }), function(err, info){
    if(err) console.error(err);
    console.info(info);
});
  req.body.createdAt = new Date();
	let createPromise = User.create(req.body);
  createPromise.then(() => {
    User
      .find(req.body, (err, user) => {
        res.status(200).json(user[user.length - 1]._id);
      })
  })
  .catch((err) => {console.log(err)});
});

app.delete('/api/users/:id', (req, res) => {
	let userId = req.params.id;
	User.findByIdAndDelete(userId, (err, user) => {
		if (err) {
			res.status(500).json(err);
		}
		else {
			res.status(200).json({message:"good"});
		}
	});
});






app.listen(PORT, () => 
                    console.log(`Listening on port ${PORT}`)
                );

// connect
mongoose.connect( 'mongodb://CharlesDB:wch30624@'+
                  'cluster0-shard-00-00-5dkpv.mongodb.net:27017,'+
                  'cluster0-shard-00-01-5dkpv.mongodb.net:27017,'+
                  'cluster0-shard-00-02-5dkpv.mongodb.net:27017/Animal_Crossing?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
{
  useNewUrlParser: true
});
var Schema = mongoose.Schema;
// var ObjectId = mongoose.Schema.Types.ObjectId;
var userSchema = new Schema({
  IslandName:String,
  TurnipPrice:Number,
  Password:String,
  FriendID:String,
  NorthSouth:String,
  createdAt:Date,
  Period:Number,
  TimeZone:String
});
// get persistent class
const User = mongoose.model("user",userSchema,'Users');