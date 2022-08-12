const fs = require("fs");

fs.writeFileSync("bio.txt","Hello,My name is nandan..I am asoftware engineer");
fs.appendFileSync("bio.txt","I am a MERN stack developer and highly interested in java developement");
fs.renameSync("bio.txt","myBio.txt");

const file = fs.readFileSync("myBio.txt","utf-8");
console.log(file);

fs.unlinkSync("myBio.txt");
fs.rmdirSync("Thapa");





