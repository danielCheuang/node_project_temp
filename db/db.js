const {env} = require("../config/env")
let confFileName = "../config/"+ env.confFileName
confFileName = confFileName == "../config/" ? "../config/local_config" :  confFileName
const conf = require(confFileName)
const Sequelize  = require("sequelize")


console.log('init sequelize...');

var sequelize = new Sequelize( conf.database, conf.username, conf.password, {
    dialect: 'mysql',
    host: conf.host,
    port: conf.port,
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    timezone: '+08:00'
});
exports.sequelize = sequelize
sequelize.sync()


const ID_TYPE = Sequelize.STRING(50);

exports.defineModel = function (name, attributes) {
    var attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }
    attrs.id = {
        type: ID_TYPE,
        primaryKey: true
    };
    attrs.createdAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.updatedAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.version = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: {
            beforeValidate: function (obj) {
                let now = Date.now();
                if (obj.isNewRecord) {
                    if (!obj.id) {
                        obj.id = generateId();
                    }
                    obj.createdAt = now;
                    obj.updatedAt = now;
                    obj.version = 0;
                } else {
                    obj.updatedAt = Date.now();
                    obj.version++;
                }
            }
        }
    });
}


