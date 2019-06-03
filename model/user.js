
const Sequelize  = require("sequelize")
const db = require('../db/db');
let sequelizeIns = db.sequelize

module.exports = sequelizeIns.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {type: Sequelize.STRING(30), field: 'user_name', unique: true},
    age: {type: Sequelize.INTEGER, }
}, {
    tableName: "user",
    timestamps: false,
    indexes:[
        {
            name: 'user_name_idx',
            fields:['user_name']
        }
    ]
})




