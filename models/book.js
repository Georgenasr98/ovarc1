'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER, primaryKey: true,
      autoIncrement: true
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false // Make pages required
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false // Make authorId required
    }
  }, {
    sequelize,
    modelName: 'book',
  });
  book.associate = function (models) {
    book.belongsTo(models.Author, {
      foreignKey: "authorId",
      as: "Author"
    })

  }
  return book;
};