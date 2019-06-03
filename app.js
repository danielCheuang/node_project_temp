const {env} = require("./config/env")
env.envStr = process.argv.slice(2)[0]
console.log( "envStr:", env.envStr )
if (env.envStr == "local" || env.envStr == "dev" || env.envStr == "test" || env.envStr == "prod" ) {
    env.confFileName = env.envStr + "_config"
} else {
    throw error("环境envStr不正确")
}

const Koa = require('koa');
const app = new Koa();
const route_path = require("./router/router_path")
const router = route_path.setRouteHandlerPath()
const bodyParser = require("koa-bodyparser")



//请求头
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Credentials', 'true')
    ctx.set('Content-Type', 'text/html;charset=UTF-8;application/x-www-form-urlencoded')
    ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    ctx.set(
        'Access-Control-Allow-Headers',
        'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
    )
    ctx.set('Access-Control-Max-Age', 1728000)
    if (ctx.req.method == 'OPTIONS') {
        ctx.status = 204
    } else {
        await next()
    }
})

let staticFiles = require('./static-files');
app.use(staticFiles('/views/', __dirname + '/views'));


// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

//请求体解析
app.use(
    bodyParser({ enableTypes: ['json', 'form', 'text'],})
)

//路由router
app.use(router.routes())


// 端口监听:
app.listen(env.port);
console.log('app started at port '+ env.port);


