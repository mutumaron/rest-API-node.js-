const Sequelize = require('sequelize');

const sequelize = new Sequelize('rest_api','root','',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;