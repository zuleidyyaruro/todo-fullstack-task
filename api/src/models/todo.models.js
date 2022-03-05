const sequelize = require('../utils/database');
const { DataTypes } = require('sequelize');

const Todo = sequelize.define('todo',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(10),
            defaultValue: 'active',
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

module.exports = Todo;