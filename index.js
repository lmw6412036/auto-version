/**
 * Created by Administrator on 2017/6/15 0015.
 */
let co = require('hprose').co;
let thunkify = require("thunkify");
let fs = require("fs");

/*co(function *() {
    let file = "./package.json";
    let pkg = yield thunkify(fs.readFile)(file, "utf-8")
    pkg = JSON.parse(pkg);
    let arr = pkg.version.split(".");
    arr[arr.length - 1]++;
    pkg.version = arr.join(".");
    yield thunkify(fs.writeFile)(file, JSON.stringify(pkg, (key, val) => {
        return val;
    }, 4));
})*/

export default function (file) {
    co(function *() {
        let pkg = yield thunkify(fs.readFile)(file, "utf-8")
        pkg = JSON.parse(pkg);
        let arr = pkg.version.split(".");
        arr[arr.length - 1]++;
        pkg.version = arr.join(".");
        yield thunkify(fs.writeFile)(file, JSON.stringify(pkg, (key, val) => {
            return val;
        }, 4));
    })
}


