/*---------------------------------------------------------------
-                         USER MODEL
---------------------------------------------------------------*/

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}   // create our User model

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  {    
    sequelize,              // pass in our imported sequelize connection
    timestamps: false,      // don't automatically create timestamp fields
    freezeTableName: true,  // don't pluralize name of database table
    underscored: true,      // use underscores instead of camel-casing
    modelName: 'user'       // make it so our model name stays lowercase in the database
  }
);

module.exports = User;