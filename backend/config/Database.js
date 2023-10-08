import { Sequelize } from "sequelize";

const db = new Sequelize('itsd_db','root','',{
    host :'localhost',
    dialect:'mysql'
});

export default db;