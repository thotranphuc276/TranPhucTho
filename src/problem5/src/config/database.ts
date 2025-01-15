import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || "crud_db",
    process.env.MYSQL_USER || "root",
    process.env.MYSQL_PASSWORD || "",
    {
        host: process.env.MYSQL_HOST || "localhost",
        port: parseInt(process.env.MYSQL_PORT || "3306"),
        dialect: "mysql",
        logging: false,
    }
);

export default sequelize;
