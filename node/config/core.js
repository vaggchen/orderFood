module.exports = async (ctx, next) => {
    // 设置允许跨域
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    // 请求头设置
    ctx.set(
        "Access-Control-Allow-Headers",
        `Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild,x-token,sessionToken,token`
    );
    if (ctx.method == "OPTIONS") {
        ctx.body = 200;
    } else {
        await next();
    }
}


