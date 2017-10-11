const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
function render(filename){
	let file = process.cwd()+"/view/"+filename;
	let data = fs.readFileSync(file,'utf-8');
	console.log(data)
	return data;
}

app.use(async ctx => {
  console.log(ctx.req.url)
  var index;
  switch(ctx.req.url){
  	case '/':
  		index = 'index.html';
  		break;
  	case '/about':
  		index = 'about.html';
  		break;
  	default:
  		index = '404.html';
  		break;
  }
  let data = render(index);
  ctx.body = data;
});

app.listen(3000);