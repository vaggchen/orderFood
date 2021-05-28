const Koa = require("koa");//导入koa
const KoaBody = require("koa-body");//解析请求体里面body
const koaStatic = require("koa-static");//暴露静态资源
const router = require('./router');//创建请求实例
const app = new Koa();// 创建koa实例
const core = require('./config/core.js');//跨域处理文件
const config = require('./config');

app.use(KoaBody());//解析请求体里面body
app.use(koaStatic(__dirname,'/public'));//资源处理
app.use(core);//跨域处理
app.use(config);//api权限管理和其他
app.use(router.routes());
app.listen(3000, () => {
  console.log("正在监听3000端口");
});
