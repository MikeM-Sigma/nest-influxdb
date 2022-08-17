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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluxDbService = void 0;
var common_1 = require("@nestjs/common");
var influx_1 = require("influx");
var InfluxDbService = /** @class */ (function () {
    function InfluxDbService(config) {
        this.config = config;
        this.connection = null;
        this.connect();
    }
    InfluxDbService.prototype.connect = function () {
        this.connection = new influx_1.InfluxDB(this.config);
    };
    InfluxDbService.prototype.alterRetentionPolicy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).alterRetentionPolicy.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.createContinuousQuery = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).createContinuousQuery.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.createDatabase = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).createDatabase.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.createRetentionPolicy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).createRetentionPolicy.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.createUser = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).createUser.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.dropContinuousQuery = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).dropContinuousQuery.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.dropDatabase = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).dropDatabase.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.dropMeasurement = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).dropMeasurement.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.dropRetentionPolicy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).dropRetentionPolicy.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.dropSeries = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).dropSeries.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.dropUser = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).dropUser.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.getDatabaseNames = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).getDatabaseNames.apply(_a, args)];
                }
                return [2 /*return*/, []];
            });
        });
    };
    InfluxDbService.prototype.getMeasurements = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).getMeasurements.apply(_a, args)];
                }
                return [2 /*return*/, []];
            });
        });
    };
    InfluxDbService.prototype.getSeries = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).getSeries.apply(_a, args)];
                }
                return [2 /*return*/, []];
            });
        });
    };
    InfluxDbService.prototype.getUsers = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).getUsers.apply(_a, args)];
                }
                return [2 /*return*/, []];
            });
        });
    };
    InfluxDbService.prototype.grantAdminPrivilege = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).grantAdminPrivilege.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.grantPrivilege = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).grantPrivilege.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.ping = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).ping.apply(_a, args)];
                }
                return [2 /*return*/, []];
            });
        });
    };
    InfluxDbService.prototype.query = function (query, options) {
        return this.connection.query(query, options);
    };
    InfluxDbService.prototype.queryRaw = function (query, options) {
        return this.connection.queryRaw(query, options);
    };
    InfluxDbService.prototype.revokeAdminPrivilege = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).revokeAdminPrivilege.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.revokePrivilege = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).revokePrivilege.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.setPassword = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.connection) {
                    return [2 /*return*/, (_a = this.connection).setPassword.apply(_a, args)];
                }
                return [2 /*return*/];
            });
        });
    };
    InfluxDbService.prototype.showContinousQueries = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (_a = this.connection).showContinousQueries.apply(_a, args);
    };
    InfluxDbService.prototype.showRetentionPolicies = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (_a = this.connection).showRetentionPolicies.apply(_a, args);
    };
    InfluxDbService.prototype.writeMeasurement = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (_a = this.connection).writeMeasurement.apply(_a, args);
    };
    InfluxDbService.prototype.writePoints = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (_a = this.connection).writePoints.apply(_a, args);
    };
    InfluxDbService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)("INFLUX_DB_OPTIONS")),
        __metadata("design:paramtypes", [Object])
    ], InfluxDbService);
    return InfluxDbService;
}());
exports.InfluxDbService = InfluxDbService;