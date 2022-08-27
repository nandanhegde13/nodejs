const http = require("http");
const fs = require("fs");

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName",()=>{
console.log("My name is nandan");
});

event.emit("sayMyName");



const bioData = {
 name1 :"nandan",
 age:23,
 color: "brown"
};
const jsonData  = JSON.stringify(bioData);
console.log(jsonData);
// fs.writeFileSync("json1.json",jsonData,(err)=>{
// console.log("done");
// });

fs.readFileSync("json1.json","utf-8",(err,data)=>{
    console.log(data);
});

const obj = JSON.parse(jsonData);
console.log(obj.name1);


const server = http.createServer((req,res)=>{
   if(req.url == "/"){
   res.end("hello from other sides");
   }
   else if(req.url == "/about")
     {
        res.end("Hello from about us");
     }

   else if(req.url == "/currency"){
    const data = fs.readFileSync("E:/nodejs/NodeProjects/Currency/response1.File","utf-8",(err)=>{
        console.log("done");
    });
    const jsonData = JSON.stringify(data);
    res.end(jsonData);
   }  
        else
     {
        res.writeHead(404);
        res.end("<h1>404 error pages.Page doesnot exist<h1>");
     }
});

server.listen(8000, "127.0.0.1",()=>{
    console.log("listning to the port no 8000");
});


