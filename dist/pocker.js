"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consolePoker = exports.createPoker = void 0;
const enums_1 = require("./enums");
function createPoker() {
    const pokers = [];
    const colors = Object.values(enums_1.color);
    const marks = Object.values(enums_1.mark);
    for (const mark of marks) {
        for (const color of colors) {
            pokers.push({ color, mark, });
        }
    }
    return pokers;
}
exports.createPoker = createPoker;
function consolePoker(pokers) {
    return pokers.reduce((current, next) => `${current} ${next.color}${next.mark}`, "");
}
exports.consolePoker = consolePoker;
