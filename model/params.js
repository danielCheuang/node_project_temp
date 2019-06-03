
const Sequelize  = require("sequelize")
const db = require('../db/db');
let sequelizeIns = db.sequelize

module.exports = sequelizeIns.define("params", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {type: Sequelize.STRING(255), field: 'value', unique: true},
}, {
    tableName: "params",
    timestamps: false,
})


