/**
 * Created by Administrator on 2017/6/15 0015.
 */
let autoVersion = require("./main");
let path = require("path");
let co = require('hprose').co;
//co(autoVersion());

let file = path.join(__dirname, "./package.json");
co(autoVersion(file));

