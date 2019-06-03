
const url = require("url")
const Sequelize  = require("sequelize")
const file_version = require("../model/file_version")





exports.updatePolicyUrl = async function (ctx, next) {
    let reqBody = ctx.request.body

    let versionObj = {
        // id : reqBody.id,
        channel : reqBody.channel,
        platform : reqBody.platform,
        version : reqBody.version,
        is_force : reqBody.is_force,
        download_url : reqBody.download_url,
        info : reqBody.info,
    }

    try {
        updateFileVersion( versionObj )
    } catch (e) {
        ctx.body = {
            status: 500,
            msg:"error",
            data : {
            }
        }
        return
    }

    ctx.body = {
        status: 200,
        msg:"ok",
        data : {
        }
    }
}



exports.createPolicyUrl = async function (ctx, next) {
    let reqBody = ctx.request.body

    let versionObj = {
        channel : reqBody.channel,
        platform : reqBody.platform,
        version : reqBody.version,
        is_force : reqBody.is_force,
        download_url : reqBody.download_url,
        info : reqBody.info,
    }

    try {
        createFileVersion( versionObj )

    } catch (e) {
        ctx.body = {
            status: 500,
            msg:"error",
            data : {
            }
        }
        return
    }
    ctx.body = {
        status: 200,
        msg:"ok",
        data : {
        }
    }
}




async function updateFileVersion( versionObj ) {
    console.log("=====updateFileVersion=====versionObj:", versionObj)

    file_version.update({
        version : versionObj.version,
        isForce : versionObj.is_force,
        downloadUrl : versionObj.download_url,
        info : versionObj.info,
        },
        {where: { channel : versionObj.channel, platform: versionObj.platform }}
    ).then(function (res) {
        console.log("=======updateFileVersion======,res:", res )
    }).catch(function (err) {
        console.log("+++++++updateFileVersion+++++++,err:", err )
    })
}



async function createFileVersion( versionObj ) {
    file_version.create({
            channel : versionObj.channel,
            platform : versionObj.platform,
            version : versionObj.version,
            is_force : versionObj.is_force,
            download_url : versionObj.download_url,
            info : versionObj.info,
    }
    ).then(function (res) {
        console.log("=======createFileVersion======,res:", res )
    }).catch(function (err) {
        console.log("+++++++createFileVersion+++++++,err:", err )
    })
}

