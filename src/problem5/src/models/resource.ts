import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Resource extends Model {}

Resource.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "Resource",
    }
);

export default Resource;
