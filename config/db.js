const Sequelize = require('sequelize');
require('dotenv').config();

const database = process.env.POSTGRES_DB;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;

const sequelize = new Sequelize(database, user, password, {
    host,
    dialect: 'postgres'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection established successfully');
    } catch (error) {
        console.error(`Unable to connect to the database ${error}`);
    }
})();

module.exports = sequelize;