const mongoose = require('mongoose');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

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
  let search = req.query.search;
  let sortArea = req.query.sortArea;
  let sortFunc = req.query.sortFunc;
  let page = req.query.page;
  const reg = new RegExp(search,'i');
  User
    .find({
      $or : [ //多条件，数组
        {Name : {$regex : reg}},
        {Sex : {$regex : reg}},
        {StartDate : {$regex : reg}},
        {Rank : {$regex : reg}},
        {Phone : {$regex : reg}},
        {Email : {$regex : reg}}
        ]
      })
    .limit(page*5)
    .sort([[sortArea, sortFunc]])
    .sort([["_id",-1]])
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
	User.findByIdAndUpdate(userId, { $push: { DS: req.body.id}}, (err, user) => {
		if (err) {
			res.status(500).json(err);
		}
		else {
			res.status(200).json(user);
		}
	});
});

app.post('/api/users', (req, res) => {
	let createPromise = User.create(req.body);
  createPromise.then(() => {
    User
      .find(req.body, (err, user) => {
        res.status(200).json(user[user.length - 1]._id);
      })
  });
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






app.listen(8888, () => 
                    console.log('Listening on port 8888!')
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
  OpenTime:String
});
// get persistent class
const User = mongoose.model("user",userSchema,'Army');