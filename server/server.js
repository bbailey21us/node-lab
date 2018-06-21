const path =require("path");
const fs =require ("fs");

var chirps=[
    {name:"chirp1",text:"not really sure what a chirp is"},
    {name:"chirp2",text:"out of context im assuming this"},
    {name: "chirp3",text:"good talk"},
    {name: "chirp4",text:"cheddar cheese"},
    {name:"chirp 5", text:"okay"}
]


var chirpsPath=path.join(__dirname,'../chirps.json');
console.log(chirpsPath);



fs.writeFile(chirpsPath, JSON.stringify(chirps, null, 2), err => {
    if (err) console.log(err);
    
})

fs.readFile(chirpsPath, (err, data) => {
    if (err) console.log(err);
    console.log(JSON.parse(data));
})
