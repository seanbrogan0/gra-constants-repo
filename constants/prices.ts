// constants/prices.ts
// Central registry of Grá pricing information. Change here to update everywhere.

//EXPORTS THE RAW NUMBER RIGHT NOW, BUT WE MAY WANT TO EXPORT FORMATTED CURRENCY STRINGS IN THE FUTURE
// CURRENTLY WRAP THE CURRENCY AROUND THE PRICE IN THE REPO WHERE USED
//UNTIL DECISION MADE ABOUT WHETHER TO EXPORT RAW NUMBERS OR FORMATTED CURRENCY STRINGS
//EXAMPLE:
//export const EVENT_GOLD_PRICE = formatCurrency(30);

//EVENT PRICING
export const EVENT_GOLD_PRICE = (30);
export const EVENT_DATA_RETENTION_PRICE = (5);
//Planner Prices

// AI message boost packs

export type AiBoostPack = {
  key: string;
  tokens: number;
  approxMessages: number;
  priceEur: number;
};

export const AI_BOOST_PACKS: AiBoostPack[] = [
  { key: "boost_150",  tokens: 120_000,   approxMessages: 150,   priceEur: 4  },
  { key: "boost_500",  tokens: 400_000,   approxMessages: 500,   priceEur: 10 },
  { key: "boost_1500", tokens: 1_200_000, approxMessages: 1_500, priceEur: 25 },
];