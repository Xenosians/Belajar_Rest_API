const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse app /json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//calling routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});