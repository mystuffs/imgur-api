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
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    static get(endpoint, clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://api.imgur.com/${endpoint}`;
            const req = yield fetch(url, {
                headers: {
                    Authorization: `Client-ID ${clientId}`,
                },
            });
            if (req.status !== 200) {
                throw new Error(`Failed to create get() request. Error code: ${req.status}`);
            }
            const json = yield req.json();
            return json;
        });
    }
    static post(endpoint, clientId, jsonValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://api.imgur.com/${endpoint}`;
            const req = yield fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Client-ID ${clientId}`,
                },
                body: jsonValue,
            });
            if (req.status !== 200) {
                throw new Error(`Failed to create post() request. Error code: ${req.status}`);
            }
            const json = yield req.json();
            return json;
        });
    }
    static delete(endpoint, clientId, jsonValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://api.imgur.com/${endpoint}`;
            const req = yield fetch(url, {
                method: "DELETE",
                headers: {
                    Authorization: `Client-ID ${clientId}`,
                },
                body: jsonValue !== null && jsonValue !== void 0 ? jsonValue : null,
            });
            if (req.status !== 200) {
                throw new Error(`Failed to create get() request. Error code: ${req.status}`);
            }
            const json = yield req.json();
            return json;
        });
    }
    static put(endpoint, clientId, jsonValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://api.imgur.com/${endpoint}`;
            const req = yield fetch(url, {
                method: "PUT",
                headers: {
                    Authorization: `Client-ID ${clientId}`,
                },
                body: jsonValue !== null && jsonValue !== void 0 ? jsonValue : null,
            });
            if (req.status !== 200) {
                throw new Error(`Failed to create get() request. Error code: ${req.status}`);
            }
            const json = yield req.json();
            return json;
        });
    }
}
exports.default = Utils;
