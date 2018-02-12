
var path = require('path')
console.log(path.resolve('/app/public', 'home.html'))

const getSurvey = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/survey.html"), (err) => {
    if (err) {
      throw err;
    }

    console.log("file sent")
  });
}

const getHome = (req, res) => {
  // res.end("This will take any undefined route and send them home.");
  res.sendFile(path.join(__dirname, "../public/home.html"), (err) => {
    if (err) {
      throw err;
    }

    console.log("file sent")
  });
}


module.exports = {
  register: function(app) {
    app.get('/survey', getSurvey);
    app.get('*', getHome);
  }
}
