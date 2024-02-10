import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: 'your_database_name',
  dialect: 'mysql',
  host: 'localhost',
        port: 3306,
        username: 'your_database_username',
        password: 'your_database_password',
        models: [],

});
