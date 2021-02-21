'use strict';
const { hashSync, compare } = require('bcrypt');
const saltRounds = 10;
const { SALT_ROUNDS } = process.env;
console.log('SALT_ROUNDS', SALT_ROUNDS);

process.env.foo = 'bar';
console.log(process.env.foo);

console.log(process.env);

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true,
          notNull: true,
        },
      },
      password: {
        field: 'password_hash',
        type: DataTypes.TEXT,
        allowNull: false,
        set(value) {
          this.setDataValue('password', hashSync(value, saltRounds));
        },
        validate: {
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      underscored: true,
      tableName: 'users',
    }
  );
  return User;
};
