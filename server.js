const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();




const port = process.env.PORT || 3000;




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));





app.listen(port, () => {
  console.log(`App is listeng on port:${port}`);
})
