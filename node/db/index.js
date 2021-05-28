//引入连接数据库
const mongoose= require("./db")
//创建构造器
const Schema = mongoose.Schema;

// 下面这两个只有新增需要
//具体构造
const mySchema = new Schema({
    name:String,
    phone:String,
    pw:String
})
//模型
const UserModel = mongoose.model('User',mySchema) 

class MongoDb{
    constructor(){

    }
    //查询
    query(params={}){
        return new Promise((resolve,reject) => {
            UserModel.find(params,(err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    
    //保存
    save(obj){
        let insert = new UserModel(obj)
        return new Promise((resolve,reject) => {
            insert.save({},(err,res) => {
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}

module.exports = new MongoDb()