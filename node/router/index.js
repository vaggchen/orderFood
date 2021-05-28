const Router = require("koa-router");//导入路由
const router = new Router();//创建请求实例
const ModelDb = require('../db');//引入Mongodb实例
const user = require('./user');//引入user处理逻辑

for(let i in user){
    router.all(`/api${i}`,user[i](ModelDb))
}

module.exports = router