"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPostJSON = exports.fetchGetJSON = void 0;
const axios_1 = __importDefault(require("axios"));
async function fetchGetJSON(url) {
    try {
        const res = await axios_1.default.get(url);
        return res.data;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
exports.fetchGetJSON = fetchGetJSON;
async function fetchPostJSON(url, data) {
    try {
        // Default options are marked with *
        const res = await axios_1.default.post(url, data, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return res.data; // parses JSON response into native JavaScript objects
    }
    catch (err) {
        throw new Error(err.message);
    }
}
exports.fetchPostJSON = fetchPostJSON;
