const jwt = require('jsonwebtoken');

/* 获取一个期限为4小时的token */
function getToken(payload = {}) {
    return jwt.sign(payload, global.secret, { expiresIn: '4h' });
}

const login = (ModelDb) => {
    return async (ctx) => {
        // request.body是formData传参，需要koa-body协助解析body
        //接受post的formdata
        let reqData = ctx.request.body
       //mongodb查询
        let dataInDb = await ModelDb.query({
            phone:reqData.phone
        })
        //返回格式化
        ctx.body = new global.Result()
    
        if(!dataInDb.length){
           
            ctx.body.msg = '用户不存在!'
        }else{
            if(reqData.pw==dataInDb[0].pw){
                ctx.body.msg = '登录成功！'
                ctx.body.data = {
                    token:getToken({
                        phone: reqData.phone, 
                        pw: reqData.pw
                    }),
                    phone: reqData.phone,
                    name:dataInDb[0].name
                }
            }else{
                ctx.body.msg = '密码错误！'
            }
            
        }
    
    }
}
const addUser = (ModelDb) => {
    return async (ctx) => {
        // 前端访问时会附带token在请求头
        payload = global.getJWTPayload(ctx.headers.authorization)

        //mongodb查询
        let dataInDb = await ModelDb.query({
            phone:payload.phone,
            name:payload.name
        })
         //返回格式化
         ctx.body = new global.Result()

        // 如果token没问题
        if(dataInDb.length){

        }else{
            ctx.body.msg = 'token已过期!'
        }

        //接受post的formdata
        let reqData = ctx.request.body
       //mongodb查询
        let dataInDb2 = await ModelDb.query({
            phone:reqData.phone
        })
       
    
        if(dataInDb2.length){
           
            ctx.body.msg = '用户已存在!'
        }else{


            if(reqData.pw==dataInDb2[0].pw){
                ctx.body.msg = '登录成功！'
                ctx.body.data = {
                    token:getToken({
                        phone: reqData.phone, 
                        pw: reqData.pw
                    }),
                    phone: reqData.phone,
                    name:dataInDb2[0].name
                }
            }else{
                ctx.body.msg = '密码错误！'
            }
            
        } 
    
    }
}

module.exports = {
    '/user/login':login,
    '/user/userAdd':addUser,
}