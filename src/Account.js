"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
class Account {
    constructor(auth) {
        // 313baf0c7b4d3ff
        this.clientId = auth.clientId;
    }
    base(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const req = yield utils_1.default.get(`/3/account/${username}`, this.clientId);
            return req;
        });
    }
    block(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const req = yield utils_1.default.get(`/account/v1/${username}/block`, this.clientId);
            console.log(req);
            return req;
        });
    }
}
exports.default = Account;
const a = new Account({ clientId: "c3bdb63953bd1dd" });
a.base("aaaaaaawoooxD");
console.log(a.block("susanaTerror"));
