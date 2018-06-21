let path = require("path")
let fs= require("fs");
var rp = require('request-promise');
var request=require("request")

let dataPath=path.join(__dirname,'popular-articles.json')

rp("http://reddit.com/r/popular.json",function(err,res,body){
    if (err) console.log(err);

    JSON.parse(body).data.children.forEach(function(item){
        var myData= item.data.title+" "+ item.data.url+" "+ item.data.author;
        fs.appendFileSync(dataPath, myData +"\n",'utf8');
    })

    fs.writeFile(dataPath,res.body,function(err){
        if(err) console.log(err);
    });
});