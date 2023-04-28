"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var OrderController_1 = require("../Controllers/OrderController");
var OrderRoutes = express_1.default.Router();
OrderRoutes.post("/items", OrderController_1.createOrder);
exports.default = OrderRoutes;
//# sourceMappingURL=OrderRoute.js.map