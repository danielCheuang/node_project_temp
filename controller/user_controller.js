
const url = require("url")
const User = require("../model/user")

//  get 请求， 请求路径参数
exports.getUser = async function (ctx, next) {
    let requestParams = url.parse(ctx.request.url, true).query
    let id = requestParams.id
    let userName = requestParams.user_name

    console.log("id:", id, ",user_name:", userName )

    let data = {}
    await User.findAll(
    ).then(function (res) {
        data = res
    }).catch(function (e) {

    })
    ctx.body = {
        status:0,
        msg:"ok",
        data: data
    }
}


// post请求  请求体里 json参数
exports.addUser = async function (ctx, next) {
    let reqBody = ctx.request.body
    console.log( "user_name:", reqBody.user_name , "age:", reqBody.age)


    await User.create({
        userName: reqBody.user_name,
        age:  reqBody.age
        }
    ).then(function (res) {

    }).catch(function (e) {
    })

    ctx.body = {
        status:0,
        msg:"ok",
        data: null
    }
}



exports.updateUser = async function (ctx, next) {
    let reqBody = ctx.request.body
    console.log( "user_name:", reqBody.user_name , "age:", reqBody.age)


    await User.update({
            userName: reqBody.user_name,
            age:  reqBody.age
        },{where:{id: reqBody.id }}
    ).then(function (res) {

    }).catch(function (e) {
    })

    ctx.body = {
        status:0,
        msg:"ok",
        data: null
    }
}

