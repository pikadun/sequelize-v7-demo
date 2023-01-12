import { DataTypes, Model, Sequelize } from "@sequelize/core";
import { Attribute, PrimaryKey, Table } from "@sequelize/core/decorators-legacy";

@Table({
    tableName: "app"
})
class AppModel extends Model {
    @PrimaryKey({})
    @Attribute({
        type: DataTypes.INTEGER()
    })
    declare id: number;
}


const start = async () => {
    const sequelize = new Sequelize("sqlite::memory:", {
        sync: {
            alter: true
        }
    });
    sequelize.addModels([AppModel]);
    await sequelize.sync();

    await AppModel.create({ id: 1 });
    const record = await AppModel.findOne({ where: { id: 1 } });
    console.log(record);
}


start()
