const path = require('path');
// Use Nodes built in File System module to read and write data.
const fs = require('fs');


const getFriend = (req, res) => {
  // Use the fs module to read a file and respond to the request
  // with JSON. Set the response headers as well.
  fs.readFile('app/data/friends.js', (err, friends) => {
    if(err) {
      throw err;
    }
    var data = JSON.parse(friends);
    res.send(data)
  })
}


const saveFriend = (req, res) => {
  // Take data from req.body and create new object with data
  // Write that object to the file holding all of the applications friends data
  console.log('You save a friend.')
  let friend = {
    name: "Michelle",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5,
    1,
    4,
    4,
    5,
    1,
    2,
    5,
    4,
    1]
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
