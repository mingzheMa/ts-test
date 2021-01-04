import { color, mark, joker } from "./enums";
import { PokerBrand, PokerOrdinary, PokerJoker } from "./interface";

export class Poker {
  private brand: PokerBrand[] = [];

  constructor(brands?: PokerBrand[]) {
    if (brands) {
      this.brand = brands;
    } else {
      this.init();
    }
  }

  private init(): PokerBrand[] {
    const colors: color[] = Object.values(color);
    const marks: mark[] = Object.values(mark);

    for (const mark of marks) {
      for (const color of colors) {
        const ordinary: PokerOrdinary = {
          color,
          mark,
          halfPass() {
            return `${this.color}${this.mark}`;
          }
        };
        this.brand.push(ordinary);
      }
    }

    Object.values(joker).forEach(mark => {
      const joker: PokerJoker = {
        mark,
        halfPass() {
          return this.mark;
        }
      };

      this.brand.push(joker);
    });

    return this.brand;
  }

  //   发牌
  send(): [Poker, Poker, Poker, Poker] {
    const user1: Poker = new Poker(this.brand.slice(0, 17));
    const user2: Poker = new Poker(this.brand.slice(17, 34));
    const user3: Poker = new Poker(this.brand.slice(34, 51));
    const table: Poker = new Poker(this.brand.slice(51, 54));

    return [user1, user2, user3, table];
  }

  //   看牌
  consolePoker(): string {
    return this.brand.reduce(
      (current: string, next: PokerOrdinary | PokerJoker) =>
        `${current} ${next.halfPass()}`,
      ""
    );
  }

  //   洗牌
  disruption() {
    this.brand.forEach((b, bIndex, bArr) => {
      const randomIndex = Math.floor(Math.random() * bArr.length);
      [bArr[bIndex], bArr[randomIndex]] = [bArr[randomIndex], bArr[bIndex]];
    });
  }
}
