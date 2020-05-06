const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


/*
 **** Use Morgan For info each routes memory in the cache
 */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

/*
 **** Middle ware Authorization  here
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


/*
 **** Use error handling Routes
 */
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    // eslint-disable-next-line no-undef
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});



/*
 **** Import All Routes
 */


 /*
 **** Import All Routes
 */

 app.use('/', (req, res, next) => {
     console.log('I am working now')
 })

module.exports = app;