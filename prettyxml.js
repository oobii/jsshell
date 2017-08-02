var fs = require("fs")
var path = require("path")

var xmlFile = path.join(process.env.HOME,"Downloads","MyFoodapediaData/Food_Display_Table.xml")

if(!fs.existsSync(xmlFile)){
    console.warn(`File does not exists ${xmlFile}`)
    process.exit(1)
}

process.exit(0)
