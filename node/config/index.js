const jwt = require('jsonwebtoken'); // 用于签发、解析`token`
const jwtKoa = require('koa-jwt'); // 用于路由权限控制
global.secret = 'secret';//jwt密钥
global.Result = Result;
global.getJWTPayload = getJWTPayload;

//返回体定义
class Result{
    constructor(data={},code=200,msg=""){
        this.data = data ;
        this.code = code ;
        this.msg = msg ;
    }
}

/* 通过token获取JWT的payload部分 */
const getJWTPayload = function(token) {
     // 验证并解析JWT
    return jwt.verify(token.split(' ')[1], global.secret,(err, decoded) => {
        if (err) {
            switch (err.name) {
                case 'JsonWebTokenError':
                // res.status(403).send({ code: -1, msg: '无效的token' });
                break;
                case 'TokenExpiredError':
                // res.status(403).send({ code: -1, msg: 'token过期' });
                break;
            }
        }
    })
}

/* 中间件处理token验证 */
const kj = async (ctx, next)=> {
    var token = ctx.headers.authorization;
    if(token == undefined){
        await next();
    }else{
        let data = global.getJWTPayload(token) 
        //这一步是为了把解析出来的用户信息存入ctx的state中，这样在其他任一中间价都可以获取到state中的值
        
        ctx.state = {
            data:data
        }
        await next();
    }
}

/* 路由权限控制 */
module.exports = jwtKoa({ secret: global.secret }).unless({
    // 设置login、register接口，可以不需要认证访问
    path: [
    /^\/api\/user\/login/,
    // /^\/api\/user\/register/,
    /^((?!\/api).)*$/ // 设置除了私有接口外的其它资源，可以不需要认证访问
    ]
})

