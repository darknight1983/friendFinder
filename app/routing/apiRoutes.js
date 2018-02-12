const path = require('path');

// Pull in friends from friends.js
const friends = require('../data/friends')


const getFriend = (req, res) => {
  res.send(friends)
}


const saveFriend = (req, res) => {
  // Take data from req.body and create new object with data
  // Write that object to the file holding all of the applications friends data
  console.log(req.body.name)


  // fs.appendFile('app/data/friends.js', JSON.stringify(friend), (err) => {
  //   if (err) {
  //     throw err;
  //   }
  //   res.end("Data has been written")
  // })
}


module.exports = {
  register: function(app) {
    app.get('/api/friends', getFriend);
    app.post('/api/friends', saveFriend)
  }
}
