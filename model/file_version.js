
const Sequelize  = require("sequelize")
const db = require('../db/db');
let sequelizeIns = db.sequelize

module.exports = sequelizeIns.define("file_version", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    channel: {type: Sequelize.STRING(50), field: 'channel', unique: true},
    platform: {type: Sequelize.STRING(50), field: 'platform'},
    version : {type: Sequelize.STRING(50), field: 'version'},
    isForce: {type: Sequelize.BOOLEAN, field: "is_force"},
    downloadUrl: {type: Sequelize.STRING(255), field: "download_url"},
    info : {type: Sequelize.STRING(255), field: "info"},
    updatedAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW },
}, {
    tableName: "file_version",
    timestamps: false,
})


