
// Pull in friends from friends.js
const friends = require('../data/friends')


const getFriend = (req, res) => {
  res.json(friends)
}


const saveFriend = (req, res) => {
  let newUser = req.body;

  let answers = [];
  // Change the answers submitted by user to numbers.
  let scores = newUser.scores.map(stringNum => Number(stringNum));

  newUser.scores = scores;

  let friendsMatch = '';
  let matchImg = '';
  let totalDifference = 1000;
  let diff = 0;


  for (let i = 0; i < friends.length; i++) {
    diff = 0;
    for (let j = 0; j < scores.length; j++) {

      diff += Math.abs(friends[i].scores[j] - scores[j])

      if (diff < totalDifference) {
        totalDifference = diff;
        friendsMatch = friends[i].name;
        matchImg = friends[i].photo;
      }

    }
  }
  friends.push(newUser);
  console.log(friends)
  res.json({match: friendsMatch, img: matchImg});
}


module.exports = {
  register: function(app) {
    app.get('/api/friends', getFriend);
    app.post('/api/friends', saveFriend)
  }
}
