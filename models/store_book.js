'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store_book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  store_book.init({
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false // Make store_id required
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false // Make book_id required
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false // Make price required
    }

  }, {
    sequelize,
    modelName: 'store_book',
  });
  store_book.associate = function (models) {
    store_book.belongsTo(models.store, {
      foreignKey: "store_id",
      as: "store"
    })
    store_book.belongsTo(models.book, {
      foreignKey: "book_id",
      as: "book"
    })
  }
  return store_book;
};