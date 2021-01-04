import { color, mark, joker } from "./enums";

export interface PokerBrand {
  halfPass(): string;
}

export interface PokerOrdinary extends PokerBrand {
  color: color;
  mark: mark;
}

export interface PokerJoker extends PokerBrand {
  mark: joker;
}
