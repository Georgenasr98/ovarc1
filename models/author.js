'use strict';

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,   // Marked as primary key
      autoIncrement: true, // Enable auto-increment
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,    // Do not allow null values
    },
  }, {
    // Additional model options can be added here
  });

  

  return Author;
};
