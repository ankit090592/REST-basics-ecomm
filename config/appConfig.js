let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://127.0.0.1:27017/ecommDataDB',
}
appConfig.apiVersion = '/api/v1';

//to use above configuration in our app/project
//although its technicaly an object but in NodeJS ecosystem every export is a module
//so that we can use it anywhere in the app using "require" statement 
module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    env: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion
}