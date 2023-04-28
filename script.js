const http = require('http');
const port = 8000;
const fs  = require('fs');
 
function requestHandler(req,res){
   console.log(req.url);
   fs.readFile('./index.html',function(err,data){
    if(err){
        console.log('error',err);
        return res.end('<h1>   eroro </h1>');
    }
    return res.end(data);

   })
}




let server = http.createServer(requestHandler);
server.listen(port,function(err){
     if(err){
        console.log(err);
        return;
     }
     console.log('server up in port no : ',port);
})