var moment = require("moment")
var fs = require("fs")

var date = moment().format("YYYY-MM-DD-HH-mm");
var userName = process.env.USER;

var header = `
--Date: ${date}
--User: ${userName}
--Title: 
-----------------------------`;

var fileName = `${date}.md`;

if(fs.existsSync(fileName))  {
    console.warn(`ERROR file exists ${fileName}`);
    process.exit(1);
}
else {
    console.log(`CREATED file ${fileName}`)
    fs.writeFileSync(fileName, header);
    process.exit(0);
}

