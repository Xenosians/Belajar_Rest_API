const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');
const app = express();

// parse app /json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//calling routes
var routes = require('./routes');
routes(app);

//register routes menu from index
app.use('/auth',require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port`);
});