
const Router = require("koa-router")
const user_contrller = require("../controller/user_controller")

var router = new Router()
exports.setRouteHandlerPath = function () {
    router.get("/get_user", user_contrller.getUser)
    router.post("/add_user", user_contrller.addUser)
    router.post("/update_user", user_contrller.updateUser)


    return router
}


router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>project template server </h1>';
});


