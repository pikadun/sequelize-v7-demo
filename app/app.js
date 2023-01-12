"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
let AppModel = class AppModel extends core_1.Model {
};
__decorate([
    (0, decorators_legacy_1.PrimaryKey)({}),
    (0, decorators_legacy_1.Attribute)({
        type: core_1.DataTypes.INTEGER()
    }),
    __metadata("design:type", Number)
], AppModel.prototype, "id", void 0);
AppModel = __decorate([
    (0, decorators_legacy_1.Table)({
        tableName: "app"
    })
], AppModel);
const start = async () => {
    const sequelize = new core_1.Sequelize("sqlite::memory:", {
        sync: {
            alter: true
        }
    });
    sequelize.addModels([AppModel]);
    await sequelize.sync();
    await AppModel.create({ id: 1 });
    const record = await AppModel.findOne({ where: { id: 1 } });
    console.log(record);
};
start();
//# sourceMappingURL=app.js.map