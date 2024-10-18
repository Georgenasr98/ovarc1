'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Authors', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,  // Enable auto-increment
        primaryKey: true,     // Set as primary key
        allowNull: false,     // Do not allow null values
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,     // Do not allow null values
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Authors');
  },
};
