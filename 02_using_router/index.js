// import all routers
const birds = require('./birds');
const users = require('./users');

// import and instanciate express
const express = require('express');
const app = express();

// asign routers to paths
app.use('/birds', birds);
app.use('/users', users); 

// start server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});