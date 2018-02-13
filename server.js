const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();




const port = process.env.PORT || 3000;




app.use(bodyParser.json()); // For parsing application json.
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, '/app/public')));

// For some reason, I have to pull in the apiRoutes first in order to be able
// to make a GET request without the '*' route handler catching the request and
// sending the user to the homepage.

require('./app/routing/apiRoutes').register(app);
require('./app/routing/htmlRoutes').register(app);






app.listen(port, () => {
  console.log(`App is listeng on port:${port}`);
})
