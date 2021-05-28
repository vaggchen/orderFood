//引入mongoose
const mongoose = require("mongoose");
// 设置连接数据库地址
const dbUrl = 'mongodb://localhost:27017/local'
//连接url
mongoose.connect(dbUrl,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true  
})

// 连接处理
//成功连接
mongoose.connection.on('connected',function(){
    console.log(`Mongoose connection open to ${dbUrl}`)
})
//连接异常
mongoose.connection.on('error',function(err){
    console.log(`Mongoose connection error: ${err}`)
})
//断开连接
mongoose.connection.on('error',function(err){
    console.log(`Mongoose connection error: ${err}`)
})

//导出mongoose
module.exports = mongoose