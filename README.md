# koaStudy


### 现在这个状态

> 实现了通过自己读取文件来实现路由的基本

> 下一步会接入koa-router来实现路由的功能

### 接入koa-router

> 明白router的工作原理

> 并实现基础的渲染

> 接入了koa-router的demo

> 查看文档，明白koa-router的使用方法["https://github.com/alexmingoia/koa-router/tree/master#module_koa-router--Router+get%7Cput%7Cpost%7Cpatch%7Cdelete%7Cdel"]

> koa-router支持给url设置别名

``` javascript
router.get('user', '/users/:id', function (ctx, next) {
// ...
});

router.url('user', 3);
// => "/users/3"
```

>上述设置了别名user，下次url指代的user就是之前的路由

> koa-router的中间件

> 看到koa-router的中间价 ，决定去看一下koa本身的中间件，然后实现一下自定义的中间件

> koa中间件的实现原理是本身koa会存在一个middleware的属性，存在中间件数组

> 每次use就会将 中间件判断之后 存入这个数组之中，然后在listen的时候，通过注入到回调函数来运行

> 主要是对context这个对象进行操作

> 然后用next()函数来交给到下一个中间件

``` javascript
	async function logger(ctx,next){
		const startDate = new Date();
  		next();
  		console.log(`method: ${ctx.method} code: ${ctx.status} time:${new Date() -startDate}ms`);
	}
	app.use(logger);
```

> 看完了koa-router的文档，写的还算是清晰，就是那个router的allowMethod不是很清楚

