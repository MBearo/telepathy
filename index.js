const Koa = require('koa');
const app = new Koa();
app.use(async (ctx,next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set("Access-Control-Allow-Headers", "X-Requested-With")
  ctx.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  ctx.set("X-Powered-By",' 3.2.1')
  ctx.set("Content-Type", "application/json;charset=utf-8")
  ctx.body={a:1}
});
app.listen(3001);