const appConfig = require('./../config/appConfig');


let requestIpLogger = (req, res, next) => {
    /*logging all routes so if an error is encountered,
    we can know from which part/route it originated.*/
    let remoteIp = req.connection.remoteAddress + '://' + req.connection.remotePort;
    let realIp = req.headers['X-REAL-IP'];
    console.log(req.method+" Request Made from " + remoteIp + ' for route' + req.originalUrl);

    //OPTIONS - a request made by browser through client-side frameworks
    //  even before hitting API  to make sure its allowed to handle stuff with below mentioned headers
    if (req.method === 'OPTIONS') { 
        console.log('!OPTIONS');
        var headers = {};
        //CORS configuartion
        // IE8 does not allow domains to be specified, just the *
        // headers["Access-Control-Allow-Origin"] = req.headers.origin;
        // * means allow anyone to acces this API.
        //If instead of * any domain/ip is mentioned only that specified will be able to acces our API 
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = false;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
        res.writeHead(200, headers);
        res.end();
  } 
  else{

     // enable or disable cors here 
     res.header("Access-Control-Allow-Origin", appConfig.allowedCorsOrigin);
     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     //console.log(res.header)
     // end cors config
     
     next();
  }
    
  
}// end request ip logger function  

module.exports = {
    logIp: requestIpLogger
}
