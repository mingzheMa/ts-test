import { Poker } from "./Poker";

console.log("=====开始=====");
const poker = new Poker();
console.log(poker.consolePoker());

console.log("=====洗牌=====");
poker.disruption();
console.log(poker.consolePoker());

console.log("=====发牌=====");
const [user1, user2, user3, table] = poker.send();

console.log("=====玩家1手牌=====");
console.log(user1.consolePoker());

console.log("=====玩家2手牌=====");
console.log(user2.consolePoker());

console.log("=====玩家3手牌=====");
console.log(user3.consolePoker());

console.log("=====桌面牌=====");
console.log(table.consolePoker());
