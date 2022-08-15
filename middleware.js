const koa = require('koa')
const app = new koa()

const middleware = async(ctx, next) => {
  console.log('this is middleware');
  console.log(ctx.request.path);
  next()
}

const middleware1 = async(ctx, next) => {
  console.log('this is middleware1');
  console.log(ctx.request.path);
  next()
  console.log('this is middleware1 ending');
}

const middleware2 = async(ctx, next) => {
  console.log('this is middleware2');
  console.log(ctx.request.path);
  next()
  console.log('this is middleware2 ending');
}

// 先进后出，洋葱模型
app.use(middleware)
.use(middleware1)
.use(middleware2)

app.listen(3000)