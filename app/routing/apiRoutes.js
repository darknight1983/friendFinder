const path = require('path');

// Pull in friends from friends.js
const friends = require('../data/friends')


const getFriend = (req, res) => {
  res.send(friends)
}


const saveFriend = (req, res) => {
  // Take data from req.body and create new object with data
  // Write that object to the file holding all of the applications friends data
  console.log('You save a friend.')
  let friend = {
    name: "Michelle",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5,3,4,5,5,5,5,5,5,5,5]
  }

  fs.appendFile('app/data/friends.js', JSON.stringify(friend), (err) => {
    if (err) {
      throw err;
    }
    res.end("Data has been written")
  })
}


module.exports = {
  register: function(app) {
    app.get('/api/friends', getFriend);
    app.post('/api/friends', saveFriend)
  }
}
