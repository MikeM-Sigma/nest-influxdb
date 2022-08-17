"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluxDbModule = void 0;
var common_1 = require("@nestjs/common");
var influxdb_service_1 = require("./influxdb.service");
var InfluxDbModule = /** @class */ (function () {
    function InfluxDbModule() {
    }
    InfluxDbModule_1 = InfluxDbModule;
    InfluxDbModule.forRoot = function (options) {
        return {
            module: InfluxDbModule_1,
            providers: [
                {
                    provide: "INFLUX_DB_OPTIONS",
                    useValue: options
                },
                influxdb_service_1.InfluxDbService
            ],
            exports: [influxdb_service_1.InfluxDbService]
        };
    };
    InfluxDbModule.forRootAsync = function (options) {
        return {
            module: InfluxDbModule_1,
            providers: [
                {
                    provide: "INFLUX_DB_OPTIONS",
                    useFactory: options.useFactory,
                    inject: options.inject || []
                },
                influxdb_service_1.InfluxDbService
            ],
            imports: options.imports || [],
            exports: [influxdb_service_1.InfluxDbService]
        };
    };
    var InfluxDbModule_1;
    InfluxDbModule = InfluxDbModule_1 = __decorate([
        (0, common_1.Global)(),
        (0, common_1.Module)({})
    ], InfluxDbModule);
    return InfluxDbModule;
}());
exports.InfluxDbModule = InfluxDbModule;
