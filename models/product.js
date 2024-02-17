const Sequelize = require("sequelize");

const sequelize = require("../data/database");

const Product = sequelize.define("Product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
//   price: {
//     type: Sequelize.NUMBER,
//     allowNull: false,
//   },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
