//-----------------------imports----------------------------------
//import expressJS in our app 
const express = require('express')
//import mongoose in our app
const mongoose = require('mongoose');
//importing appConfig file here
const appConfig = require('./config/appConfig')

//import body parser middleware for body parameters
//used for post requests - for parsing the body to be sent
//used for sending form data, url encoded etc.

/*Middleware: have access to the request object (req), the response object (res), 
and the next function in the application’s request-response cycle.
Can be used to:
-> execute any code
-> make changes to req & res objects
-> end req-res cycle
-> call next middleware */
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

//global level error middleware
const globalErrorMiddleware = require('./middlewares/appErrorHandler')
const routeLoggerMiddleware = require('./middlewares/routeLogger')

/*for securing the app
 -> by hiding certain HTTP headers that are returned when making an API call
 -> HTTP headers provide info like platform used to build the app
 using whcih an attacker can try to break the app and gain un-authorized access */
const helmet = require('helmet')

//Node.js file system module to work with the file system on your computer.
const fs = require("fs")

const http = require('http')
const logger = require('./libs/loggerLib')
//------------------------------------Imports end-----------------------------

//declare/create an app instance
const app = express()

//app level middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(globalErrorMiddleware.globalErrorHandler)
/**
 * routeLogger - shows the origin of every route request received
 */
app.use(routeLoggerMiddleware.logIp)

app.use(helmet())

let modelsPath = './models'
//readdirSync: Read directory synchronously.
//Here read directory in modelsPath variable
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log("including this file");
        console.log(modelsPath + '/' + file)
        require(modelsPath + '/' + file);

    }
});

let routesPath = './routes'
//readdirSync: Read directory synchronously.
//Here read directory in routesPath variable
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log("including this file");
        console.log(routesPath + '/' + file)
        let route = require(routesPath + '/' + file);
        route.setRouter(app); //set the route & route the app accordingly
    }
});

/*app level middleware - here position of middleware is important
//used for any rote error occurring in the whole app
//calling after setRouter is mandatory, as it shows only for not found routes
If we place before setRouter - all correct routes will also be shown as not found*/
// calling global 404 handler after route

app.use(globalErrorMiddleware.globalNotFoundHandler)

// end global 404 handler


/**
 * Create HTTP server.
 */
const server = http.createServer(app)
// start listening to http server
console.log(appConfig)
server.listen(appConfig.port)
server.on('error', onError)
server.on('listening', onListening)

// end server listening code

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10)
    let db = mongoose.connect(appConfig.db.uri, { useNewUrlParser: true })
}

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
    // application specific logging, throwing an error, or other logic here
})



//Handling DB connection error using mongoose
mongoose.connection.on('error', function (err) {
    console.log("DB connection error")
    console.log(err)
});

//Handling DB connection success using mongoose
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("DB connection error")
        console.log(err)
    } else {
        console.log("DB connection open success")
    }
});