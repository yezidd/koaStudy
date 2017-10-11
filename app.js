const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(logger);
router.get('/', function (ctx, next) {
  // ctx.router available
  ctx.body = "Hello world";
});

router.get('/about',function (ctx,next){
	ctx.body = 'about';
});

router.get('user', '/users/:id', function (ctx, next) {
 // ...
 console.log(ctx.params.id);
});
async function logger(ctx, next) {
  const startDate = new Date();
  next();
  console.log(`method: ${ctx.method} code: ${ctx.status} time:${new Date() -startDate}ms`);
}

app
  .use(router.routes())
  .use(router.allowedMethods())
  
  app.listen(3000);