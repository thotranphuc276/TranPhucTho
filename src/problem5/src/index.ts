import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./config/database";
import resourceRoutes from "./routes/resourceRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/resources", resourceRoutes);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("MySQL Database connected successfully!");

        await sequelize.sync();
        console.log("Database tables synced!");

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();
