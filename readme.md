#auto-version

自动更新版本号最后一位

##使用说明

返回一个generator函数，请采用合适的执行器去运行，本例采用hprose.co;

######1
`npm install -save-dev auto-version`
######2
`let autoVersion = require("auto-version");//返回一个generator函数`

`let path = require("path");`

`let co = require('hprose').co;`

`let file = path.join(__dirname, "./package.json");`
 
 `co(autoVersion(file));`