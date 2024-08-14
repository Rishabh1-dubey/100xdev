const fs= require("fs");

function read(){
    return new Promise (function(resolve){
fs.readFile("a.txt","utf-8",function(err,data){
    resolve(data)
})
    })
}
function risahb(data){
  console.log(data)
}  read().then(risahb);