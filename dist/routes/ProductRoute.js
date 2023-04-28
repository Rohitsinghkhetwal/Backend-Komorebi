"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ProductController_1 = require("../Controllers/ProductController");
var productRouter = express_1.default.Router();
productRouter.post("/", ProductController_1.createProduct);
productRouter.get("/items", ProductController_1.getProducts);
productRouter.get("/:id", ProductController_1.getProductById);
exports.default = productRouter;
//# sourceMappingURL=ProductRoute.js.map