"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var pokedex_exports = {};
__export(pokedex_exports, {
  Pokedex: () => Pokedex
});
module.exports = __toCommonJS(pokedex_exports);
const Pokedex = {
  // === Stats rebalanceados respecto a los juegos oficiales (283) ===
  // Generado a partir del dataset de Pokémon Añil v4.0 (fuente: Fakedex)
  abomasnow: {
    inherit: true,
    abilities: { 0: "Ice Scales", 1: "Snow Warning", H: "Soundproof" },
    baseStats: { hp: 90, atk: 92, def: 85, spa: 92, spd: 95, spe: 60 }
  },
  alomomola: {
    inherit: true,
    baseStats: { hp: 165, atk: 75, def: 80, spa: 75, spd: 45, spe: 65 }
  },
  altaria: {
    inherit: true,
    abilities: { 0: "Pixilate", H: "Cloud Nine" },
    baseStats: { hp: 75, atk: 90, def: 90, spa: 90, spd: 95, spe: 80 }
  },
  arbok: {
    inherit: true,
    abilities: { 0: "Intimidate", 1: "Shed Skin", H: "Merciless" },
    baseStats: { hp: 70, atk: 95, def: 69, spa: 65, spd: 79, spe: 95 }
  },
  arctovish: {
    inherit: true,
    baseStats: { hp: 90, atk: 115, def: 90, spa: 90, spd: 80, spe: 55 }
  },
  arctozolt: {
    inherit: true,
    baseStats: { hp: 90, atk: 115, def: 90, spa: 90, spd: 80, spe: 55 }
  },
  ariados: {
    inherit: true,
    abilities: { 0: "Poison Touch", 1: "Swarm", H: "Sniper" },
    baseStats: { hp: 85, atk: 110, def: 70, spa: 60, spd: 60, spe: 80 }
  },
  audino: {
    inherit: true,
    abilities: { 0: "Regenerator", 1: "Triage", H: "Klutz" },
    baseStats: { hp: 80, atk: 60, def: 86, spa: 90, spd: 86, spe: 50 }
  },
  azumarill: {
    inherit: true,
    baseStats: { hp: 100, atk: 50, def: 80, spa: 50, spd: 80, spe: 50 }
  },
  baltoy: {
    inherit: true,
    baseStats: { hp: 40, atk: 40, def: 55, spa: 60, spd: 70, spe: 55 }
  },
  barbaracle: {
    inherit: true,
    abilities: { 0: "Sniper", 1: "Tough Claws", H: "Anger Shell" },
    baseStats: { hp: 72, atk: 115, def: 115, spa: 86, spd: 68, spe: 54 }
  },
  barboach: {
    inherit: true,
    baseStats: { hp: 60, atk: 65, def: 43, spa: 65, spd: 41, spe: 60 }
  },
  bastiodon: {
    inherit: true,
    baseStats: { hp: 70, atk: 52, def: 168, spa: 47, spd: 138, spe: 30 }
  },
  beautifly: {
    inherit: true,
    baseStats: { hp: 70, atk: 70, def: 60, spa: 110, spd: 75, spe: 85 }
  },
  beedrill: {
    inherit: true,
    baseStats: { hp: 65, atk: 100, def: 40, spa: 65, spd: 80, spe: 95 }
  },
  beheeyem: {
    inherit: true,
    baseStats: { hp: 75, atk: 75, def: 85, spa: 125, spd: 95, spe: 40 }
  },
  bellossom: {
    inherit: true,
    baseStats: { hp: 75, atk: 80, def: 85, spa: 100, spd: 100, spe: 50 }
  },
  bibarel: {
    inherit: true,
    baseStats: { hp: 90, atk: 85, def: 70, spa: 70, spd: 80, spe: 71 }
  },
  blacephalon: {
    inherit: true,
    baseStats: { hp: 53, atk: 97, def: 53, spa: 141, spd: 69, spe: 107 }
  },
  boldore: {
    inherit: true,
    baseStats: { hp: 80, atk: 105, def: 105, spa: 50, spd: 60, spe: 20 }
  },
  bombirdier: {
    inherit: true,
    abilities: { 0: "Rocky Payload", H: "Hustle" },
    baseStats: { hp: 70, atk: 113, def: 95, spa: 60, spd: 85, spe: 82 }
  },
  bonsly: {
    inherit: true,
    baseStats: { hp: 50, atk: 80, def: 95, spa: 10, spd: 45, spe: 50 }
  },
  brambleghast: {
    inherit: true,
    baseStats: { hp: 55, atk: 115, def: 80, spa: 80, spd: 70, spe: 100 }
  },
  bruxish: {
    inherit: true,
    baseStats: { hp: 68, atk: 110, def: 70, spa: 70, spd: 70, spe: 100 }
  },
  budew: {
    inherit: true,
    baseStats: { hp: 50, atk: 50, def: 35, spa: 55, spd: 60, spe: 55 }
  },
  bunnelby: {
    inherit: true,
    baseStats: { hp: 38, atk: 35, def: 38, spa: 32, spd: 36, spe: 57 }
  },
  butterfree: {
    inherit: true,
    baseStats: { hp: 60, atk: 45, def: 50, spa: 100, spd: 100, spe: 90 }
  },
  cacturne: {
    inherit: true,
    abilities: { 0: "Water Absorb", H: "Water Absorb" },
    baseStats: { hp: 85, atk: 115, def: 60, spa: 115, spd: 60, spe: 55 }
  },
  camerupt: {
    inherit: true,
    abilities: { 0: "Sheer Force", 1: "Solid Rock", H: "Steam Engine" },
    baseStats: { hp: 70, atk: 100, def: 80, spa: 105, spd: 85, spe: 40 }
  },
  carnivine: {
    inherit: true,
    baseStats: { hp: 80, atk: 110, def: 72, spa: 90, spd: 72, spe: 46 }
  },
  castform: {
    inherit: true,
    baseStats: { hp: 90, atk: 70, def: 90, spa: 100, spd: 90, spe: 70 }
  },
  caterpie: {
    inherit: true,
    baseStats: { hp: 45, atk: 40, def: 35, spa: 20, spd: 20, spe: 45 }
  },
  chatot: {
    inherit: true,
    abilities: { 0: "Keen Eye", 1: "Tangled Feet", H: "Punk Rock" },
    baseStats: { hp: 76, atk: 90, def: 55, spa: 100, spd: 52, spe: 100 }
  },
  cherrim: {
    inherit: true,
    baseStats: { hp: 70, atk: 60, def: 70, spa: 100, spd: 88, spe: 100 }
  },
  chesnaught: {
    inherit: true,
    baseStats: { hp: 100, atk: 117, def: 122, spa: 64, spd: 75, spe: 64 }
  },
  chingling: {
    inherit: true,
    abilities: { 0: "Tintineo" },
    baseStats: { hp: 55, atk: 30, def: 50, spa: 65, spd: 60, spe: 45 }
  },
  claydol: {
    inherit: true,
    baseStats: { hp: 70, atk: 60, def: 105, spa: 90, spd: 120, spe: 75 }
  },
  corsola: {
    inherit: true,
    baseStats: { hp: 85, atk: 85, def: 85, spa: 95, spd: 85, spe: 35 }
  },
  cramorant: {
    inherit: true,
    baseStats: { hp: 70, atk: 85, def: 55, spa: 95, spd: 85, spe: 85 }
  },
  crustle: {
    inherit: true,
    abilities: { 0: "Shell Armor", 1: "Sturdy", H: "Anger Shell" },
    baseStats: { hp: 70, atk: 105, def: 135, spa: 65, spd: 75, spe: 45 }
  },
  cubone: {
    inherit: true,
    baseStats: { hp: 50, atk: 70, def: 95, spa: 40, spd: 50, spe: 55 }
  },
  decidueye: {
    inherit: true,
    abilities: { 0: "Long Reach", 1: "Overgrow", H: "Acometida" },
    baseStats: { hp: 78, atk: 117, def: 75, spa: 80, spd: 75, spe: 105 }
  },
  dedenne: {
    inherit: true,
    abilities: { 0: "Cheek Pouch", 1: "Electric Surge", H: "Pixilate" },
    baseStats: { hp: 67, atk: 58, def: 57, spa: 100, spd: 85, spe: 101 }
  },
  delcatty: {
    inherit: true,
    abilities: { 0: "Pixilate", H: "Wonder Skin" },
    baseStats: { hp: 90, atk: 95, def: 75, spa: 90, spd: 65, spe: 100 }
  },
  delibird: {
    inherit: true,
    baseStats: { hp: 65, atk: 75, def: 65, spa: 100, spd: 65, spe: 90 }
  },
  dewgong: {
    inherit: true,
    abilities: { 0: "Fur Coat", 1: "Thick Fat", H: "Ice Body" },
    baseStats: { hp: 90, atk: 90, def: 80, spa: 90, spd: 95, spe: 70 }
  },
  diglett: {
    inherit: true,
    baseStats: { hp: 30, atk: 60, def: 35, spa: 35, spd: 45, spe: 95 }
  },
  dodrio: {
    inherit: true,
    abilities: { 0: "Moxie", 1: "Technician", H: "Camorrista" },
    baseStats: { hp: 70, atk: 110, def: 70, spa: 60, spd: 60, spe: 110 }
  },
  dondozo: {
    inherit: true,
    baseStats: { hp: 100, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 }
  },
  dracovish: {
    inherit: true,
    baseStats: { hp: 90, atk: 110, def: 100, spa: 70, spd: 80, spe: 75 }
  },
  dracozolt: {
    inherit: true,
    baseStats: { hp: 90, atk: 115, def: 90, spa: 80, spd: 70, spe: 75 }
  },
  drampa: {
    inherit: true,
    baseStats: { hp: 85, atk: 60, def: 85, spa: 135, spd: 91, spe: 36 }
  },
  drizzile: {
    inherit: true,
    baseStats: { hp: 65, atk: 50, def: 55, spa: 95, spd: 50, spe: 90 }
  },
  drowzee: {
    inherit: true,
    baseStats: { hp: 60, atk: 48, def: 45, spa: 63, spd: 90, spe: 42 }
  },
  ducklett: {
    inherit: true,
    baseStats: { hp: 62, atk: 44, def: 50, spa: 64, spd: 50, spe: 55 }
  },
  dugtrio: {
    inherit: true,
    baseStats: { hp: 65, atk: 100, def: 70, spa: 50, spd: 70, spe: 120 }
  },
  duskull: {
    inherit: true,
    baseStats: { hp: 20, atk: 55, def: 90, spa: 30, spd: 90, spe: 25 }
  },
  dustox: {
    inherit: true,
    baseStats: { hp: 70, atk: 50, def: 70, spa: 90, spd: 105, spe: 85 }
  },
  eevee: {
    inherit: true,
    baseStats: { hp: 55, atk: 65, def: 50, spa: 45, spd: 65, spe: 55 },
    evos: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Royaleon", "Cefireon"]
  },
  eldegoss: {
    inherit: true,
    baseStats: { hp: 60, atk: 50, def: 90, spa: 90, spd: 120, spe: 60 }
  },
  electrode: {
    inherit: true,
    abilities: { 0: "Electric Surge", H: "Aftermath" },
    baseStats: { hp: 60, atk: 50, def: 70, spa: 90, spd: 80, spe: 150 }
  },
  emolga: {
    inherit: true,
    baseStats: { hp: 55, atk: 95, def: 60, spa: 95, spd: 60, spe: 110 }
  },
  espathra: {
    inherit: true,
    baseStats: { hp: 95, atk: 60, def: 60, spa: 101, spd: 70, spe: 105 }
  },
  exeggutor: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Harvest", H: "Drought" },
    baseStats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 80, spe: 55 }
  },
  exploud: {
    inherit: true,
    abilities: { 0: "Punk Rock", 1: "Soundproof", H: "Scrappy" },
    baseStats: { hp: 104, atk: 100, def: 63, spa: 100, spd: 63, spe: 68 }
  },
  farfetchd: {
    inherit: true,
    abilities: { 0: "Super Luck", H: "Defiant" },
    baseStats: { hp: 85, atk: 100, def: 75, spa: 60, spd: 85, spe: 95 }
  },
  fearow: {
    inherit: true,
    baseStats: { hp: 65, atk: 115, def: 65, spa: 61, spd: 61, spe: 100 }
  },
  feebas: {
    inherit: true,
    baseStats: { hp: 50, atk: 45, def: 35, spa: 60, spd: 55, spe: 70 }
  },
  finneon: {
    inherit: true,
    baseStats: { hp: 49, atk: 49, def: 56, spa: 69, spd: 61, spe: 66 }
  },
  flamigo: {
    inherit: true,
    abilities: { 0: "Camorrista", 1: "Scrappy", H: "Costar" },
    baseStats: { hp: 82, atk: 115, def: 74, spa: 75, spd: 74, spe: 90 }
  },
  flareon: {
    inherit: true,
    baseStats: { hp: 75, atk: 130, def: 60, spa: 85, spd: 110, spe: 65 }
  },
  floatzel: {
    inherit: true,
    baseStats: { hp: 85, atk: 110, def: 55, spa: 85, spd: 50, spe: 115 }
  },
  flygon: {
    inherit: true,
    baseStats: { hp: 80, atk: 100, def: 80, spa: 100, spd: 80, spe: 110 }
  },
  froslass: {
    inherit: true,
    abilities: { 0: "Poder G\xE9lido", 1: "Snow Cloak", H: "Cursed Body" },
    baseStats: { hp: 70, atk: 80, def: 70, spa: 90, spd: 70, spe: 110 }
  },
  furret: {
    inherit: true,
    abilities: { 0: "Fur Coat", H: "Frisk" },
    baseStats: { hp: 85, atk: 90, def: 64, spa: 45, spd: 65, spe: 110 }
  },
  garbodor: {
    inherit: true,
    abilities: { 0: "Stench", 1: "Weak Armor", H: "Corrosion" },
    baseStats: { hp: 100, atk: 95, def: 82, spa: 85, spd: 82, spe: 55 }
  },
  geodude: {
    inherit: true,
    baseStats: { hp: 50, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 }
  },
  gigalith: {
    inherit: true,
    baseStats: { hp: 95, atk: 135, def: 130, spa: 60, spd: 80, spe: 25 }
  },
  glalie: {
    inherit: true,
    abilities: { 0: "Ice Body", 1: "Poder G\xE9lido", H: "Moody" },
    baseStats: { hp: 90, atk: 90, def: 80, spa: 90, spd: 80, spe: 80 }
  },
  golbat: {
    inherit: true,
    baseStats: { hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 100 }
  },
  golduck: {
    inherit: true,
    abilities: { 0: "Cloud Nine", 1: "Swift Swim", H: "Berserk" },
    baseStats: { hp: 80, atk: 92, def: 78, spa: 95, spd: 80, spe: 85 }
  },
  golem: {
    inherit: true,
    baseStats: { hp: 110, atk: 120, def: 130, spa: 55, spd: 65, spe: 45 }
  },
  golisopod: {
    inherit: true,
    baseStats: { hp: 75, atk: 125, def: 110, spa: 60, spd: 90, spe: 40 }
  },
  gourgeist: {
    inherit: true,
    baseStats: { hp: 85, atk: 100, def: 122, spa: 58, spd: 75, spe: 54 }
  },
  grafaiai: {
    inherit: true,
    baseStats: { hp: 63, atk: 105, def: 65, spa: 80, spd: 72, spe: 110 }
  },
  graveler: {
    inherit: true,
    baseStats: { hp: 80, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 }
  },
  grimer: {
    inherit: true,
    baseStats: { hp: 80, atk: 60, def: 50, spa: 60, spd: 50, spe: 25 }
  },
  grumpig: {
    inherit: true,
    baseStats: { hp: 80, atk: 45, def: 75, spa: 100, spd: 110, spe: 80 }
  },
  gulpin: {
    inherit: true,
    abilities: { 0: "Corrosion", 1: "Gooey", H: "Gluttony" },
    baseStats: { hp: 70, atk: 43, def: 53, spa: 53, spd: 53, spe: 40 }
  },
  gumshoos: {
    inherit: true,
    baseStats: { hp: 88, atk: 110, def: 60, spa: 55, spd: 60, spe: 85 }
  },
  gurdurr: {
    inherit: true,
    baseStats: { hp: 85, atk: 105, def: 85, spa: 50, spd: 50, spe: 40 }
  },
  heatmor: {
    inherit: true,
    abilities: { 0: "Earth Eater", 1: "Flash Fire", H: "White Smoke" },
    baseStats: { hp: 85, atk: 110, def: 86, spa: 95, spd: 86, spe: 65 }
  },
  heliolisk: {
    inherit: true,
    baseStats: { hp: 62, atk: 55, def: 52, spa: 115, spd: 94, spe: 109 }
  },
  hitmonchan: {
    inherit: true,
    baseStats: { hp: 60, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 }
  },
  hitmonlee: {
    inherit: true,
    abilities: { 0: "Camorrista", 1: "Reckless", H: "Unburden" },
    baseStats: { hp: 60, atk: 120, def: 53, spa: 35, spd: 110, spe: 87 }
  },
  hoothoot: {
    inherit: true,
    baseStats: { hp: 60, atk: 30, def: 30, spa: 66, spd: 56, spe: 50 }
  },
  hoppip: {
    inherit: true,
    baseStats: { hp: 35, atk: 45, def: 40, spa: 35, spd: 55, spe: 50 }
  },
  houndstone: {
    inherit: true,
    baseStats: { hp: 72, atk: 111, def: 100, spa: 50, spd: 97, spe: 68 }
  },
  hydrapple: {
    inherit: true,
    baseStats: { hp: 106, atk: 80, def: 110, spa: 130, spd: 80, spe: 44 }
  },
  hypno: {
    inherit: true,
    baseStats: { hp: 85, atk: 80, def: 70, spa: 95, spd: 115, spe: 67 }
  },
  illumise: {
    inherit: true,
    abilities: { 0: "Illuminate", 1: "Tinted Lens", H: "Prankster" },
    baseStats: { hp: 65, atk: 53, def: 55, spa: 95, spd: 100, spe: 85 }
  },
  impidimp: {
    inherit: true,
    baseStats: { hp: 45, atk: 45, def: 30, spa: 40, spd: 50, spe: 50 }
  },
  jumpluff: {
    inherit: true,
    baseStats: { hp: 75, atk: 90, def: 70, spa: 55, spd: 95, spe: 110 }
  },
  jynx: {
    inherit: true,
    baseStats: { hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 105 }
  },
  kakuna: {
    inherit: true,
    baseStats: { hp: 45, atk: 65, def: 50, spa: 25, spd: 25, spe: 35 }
  },
  kecleon: {
    inherit: true,
    baseStats: { hp: 60, atk: 100, def: 70, spa: 60, spd: 120, spe: 40 }
  },
  kingler: {
    inherit: true,
    baseStats: { hp: 75, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 }
  },
  kirlia: {
    inherit: true,
    baseStats: { hp: 55, atk: 35, def: 45, spa: 75, spd: 75, spe: 50 }
  },
  klawf: {
    inherit: true,
    baseStats: { hp: 80, atk: 100, def: 115, spa: 35, spd: 55, spe: 75 }
  },
  komala: {
    inherit: true,
    baseStats: { hp: 75, atk: 115, def: 65, spa: 75, spd: 95, spe: 65 }
  },
  krabby: {
    inherit: true,
    baseStats: { hp: 30, atk: 105, def: 90, spa: 40, spd: 35, spe: 50 }
  },
  kricketot: {
    inherit: true,
    baseStats: { hp: 37, atk: 45, def: 41, spa: 45, spd: 41, spe: 25 }
  },
  kricketune: {
    inherit: true,
    abilities: { 0: "Swarm", 1: "Technician", H: "Sharpness" },
    baseStats: { hp: 77, atk: 105, def: 61, spa: 55, spd: 86, spe: 65 }
  },
  lampent: {
    inherit: true,
    baseStats: { hp: 60, atk: 55, def: 65, spa: 95, spd: 65, spe: 55 }
  },
  lapras: {
    inherit: true,
    baseStats: { hp: 130, atk: 75, def: 80, spa: 95, spd: 95, spe: 60 }
  },
  larvesta: {
    inherit: true,
    baseStats: { hp: 75, atk: 85, def: 55, spa: 85, spd: 55, spe: 70 }
  },
  leavanny: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Sharpness", H: "Silvano" },
    baseStats: { hp: 75, atk: 110, def: 80, spa: 70, spd: 70, spe: 92 }
  },
  ledian: {
    inherit: true,
    abilities: { 0: "Huge Power", H: "Iron Fist" },
    baseStats: { hp: 70, atk: 65, def: 50, spa: 85, spd: 110, spe: 85 }
  },
  ledyba: {
    inherit: true,
    baseStats: { hp: 40, atk: 40, def: 30, spa: 60, spd: 80, spe: 55 }
  },
  liepard: {
    inherit: true,
    baseStats: { hp: 70, atk: 110, def: 60, spa: 88, spd: 60, spe: 120 }
  },
  linoone: {
    inherit: true,
    abilities: { 0: "Guts", 1: "Pickpocket", H: "Quick Feet" },
    baseStats: { hp: 80, atk: 70, def: 61, spa: 50, spd: 61, spe: 100 }
  },
  litwick: {
    inherit: true,
    baseStats: { hp: 50, atk: 50, def: 55, spa: 65, spd: 65, spe: 20 }
  },
  lokix: {
    inherit: true,
    baseStats: { hp: 71, atk: 112, def: 78, spa: 52, spd: 55, spe: 92 }
  },
  lopunny: {
    inherit: true,
    abilities: { 0: "Camorrista", 1: "Cute Charm", H: "Scrappy" },
    baseStats: { hp: 65, atk: 106, def: 84, spa: 54, spd: 96, spe: 105 }
  },
  loudred: {
    inherit: true,
    abilities: { 0: "Punk Rock", 1: "Soundproof", H: "Scrappy" },
    baseStats: { hp: 84, atk: 80, def: 43, spa: 80, spd: 43, spe: 48 }
  },
  ludicolo: {
    inherit: true,
    baseStats: { hp: 80, atk: 80, def: 70, spa: 90, spd: 100, spe: 70 }
  },
  lumineon: {
    inherit: true,
    baseStats: { hp: 79, atk: 69, def: 76, spa: 100, spd: 86, spe: 91 }
  },
  lunatone: {
    inherit: true,
    baseStats: { hp: 90, atk: 55, def: 70, spa: 115, spd: 90, spe: 70 }
  },
  luvdisc: {
    inherit: true,
    baseStats: { hp: 63, atk: 30, def: 55, spa: 110, spd: 65, spe: 100 }
  },
  luxio: {
    inherit: true,
    baseStats: { hp: 60, atk: 85, def: 49, spa: 65, spd: 49, spe: 80 }
  },
  luxray: {
    inherit: true,
    abilities: { 0: "Intimidate", 1: "Strong Jaw", H: "Guts" },
    baseStats: { hp: 80, atk: 120, def: 75, spa: 75, spd: 75, spe: 100 }
  },
  magcargo: {
    inherit: true,
    abilities: { 0: "Flame Body", 1: "Gooey", H: "Weak Armor" },
    baseStats: { hp: 70, atk: 50, def: 140, spa: 100, spd: 80, spe: 30 }
  },
  malamar: {
    inherit: true,
    baseStats: { hp: 86, atk: 100, def: 88, spa: 68, spd: 85, spe: 73 }
  },
  maractus: {
    inherit: true,
    baseStats: { hp: 75, atk: 86, def: 77, spa: 106, spd: 77, spe: 60 }
  },
  marowak: {
    inherit: true,
    baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 65 }
  },
  masquerain: {
    inherit: true,
    baseStats: { hp: 70, atk: 60, def: 62, spa: 100, spd: 90, spe: 80 }
  },
  maushold: {
    inherit: true,
    baseStats: { hp: 74, atk: 85, def: 70, spa: 65, spd: 75, spe: 111 }
  },
  mawile: {
    inherit: true,
    baseStats: { hp: 65, atk: 85, def: 85, spa: 55, spd: 55, spe: 50 }
  },
  meganium: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Triage" },
    baseStats: { hp: 80, atk: 82, def: 100, spa: 90, spd: 100, spe: 80 }
  },
  melmetal: {
    inherit: true,
    baseStats: { hp: 135, atk: 143, def: 143, spa: 65, spd: 34, spe: 80 }
  },
  meltan: {
    inherit: true,
    baseStats: { hp: 46, atk: 65, def: 65, spa: 35, spd: 34, spe: 55 }
  },
  meowth: {
    inherit: true,
    baseStats: { hp: 40, atk: 65, def: 35, spa: 40, spd: 40, spe: 90 }
  },
  metapod: {
    inherit: true,
    baseStats: { hp: 50, atk: 60, def: 55, spa: 25, spd: 25, spe: 30 }
  },
  mewtwo: {
    inherit: true,
    baseStats: { hp: 110, atk: 110, def: 100, spa: 154, spd: 130, spe: 130 }
  },
  mightyena: {
    inherit: true,
    baseStats: { hp: 70, atk: 110, def: 70, spa: 60, spd: 60, spe: 90 }
  },
  miltank: {
    inherit: true,
    baseStats: { hp: 95, atk: 90, def: 105, spa: 40, spd: 70, spe: 100 }
  },
  mimejr: {
    inherit: true,
    baseStats: { hp: 60, atk: 25, def: 45, spa: 90, spd: 90, spe: 90 }
  },
  mimikyu: {
    inherit: true,
    baseStats: { hp: 55, atk: 105, def: 80, spa: 50, spd: 105, spe: 96 }
  },
  minun: {
    inherit: true,
    baseStats: { hp: 60, atk: 40, def: 50, spa: 75, spd: 105, spe: 95 }
  },
  morelull: {
    inherit: true,
    baseStats: { hp: 55, atk: 35, def: 55, spa: 65, spd: 75, spe: 15 }
  },
  morgrem: {
    inherit: true,
    baseStats: { hp: 65, atk: 60, def: 45, spa: 55, spd: 70, spe: 70 }
  },
  mothim: {
    inherit: true,
    baseStats: { hp: 70, atk: 84, def: 60, spa: 105, spd: 70, spe: 86 }
  },
  mrmime: {
    inherit: true,
    abilities: { 0: "Filter", 1: "Technician", H: "Psychic Surge" },
    baseStats: { hp: 50, atk: 45, def: 65, spa: 100, spd: 120, spe: 90 }
  },
  naganadel: {
    inherit: true,
    baseStats: { hp: 73, atk: 73, def: 73, spa: 117, spd: 73, spe: 121 }
  },
  nickit: {
    inherit: true,
    abilities: { 0: "Run Away", 1: "Unburden", H: "Technician" },
    baseStats: { hp: 40, atk: 28, def: 28, spa: 48, spd: 52, spe: 50 }
  },
  ninetales: {
    inherit: true,
    baseStats: { hp: 73, atk: 76, def: 75, spa: 100, spd: 100, spe: 100 }
  },
  noctowl: {
    inherit: true,
    abilities: { 0: "Keen Eye", 1: "Tinted Lens", H: "Insomnia" },
    baseStats: { hp: 100, atk: 50, def: 65, spa: 95, spd: 96, spe: 70 }
  },
  noibat: {
    inherit: true,
    baseStats: { hp: 60, atk: 65, def: 55, spa: 65, spd: 50, spe: 80 }
  },
  nuzleaf: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Silvano", H: "Pickpocket" },
    baseStats: { hp: 70, atk: 70, def: 50, spa: 60, spd: 50, spe: 90 }
  },
  obstagoon: {
    inherit: true,
    baseStats: { hp: 93, atk: 95, def: 101, spa: 60, spd: 81, spe: 95 }
  },
  okidogi: {
    inherit: true,
    baseStats: { hp: 88, atk: 128, def: 115, spa: 58, spd: 80, spe: 80 }
  },
  onix: {
    inherit: true,
    baseStats: { hp: 55, atk: 60, def: 160, spa: 30, spd: 45, spe: 70 }
  },
  pachirisu: {
    inherit: true,
    abilities: { 0: "Fur Coat", 1: "Pickup", H: "Volt Absorb" },
    baseStats: { hp: 60, atk: 45, def: 70, spa: 90, spd: 90, spe: 115 }
  },
  panpour: {
    inherit: true,
    baseStats: { hp: 50, atk: 53, def: 48, spa: 60, spd: 48, spe: 64 }
  },
  pansage: {
    inherit: true,
    baseStats: { hp: 50, atk: 60, def: 48, spa: 53, spd: 48, spe: 64 }
  },
  pansear: {
    inherit: true,
    baseStats: { hp: 50, atk: 53, def: 48, spa: 60, spd: 48, spe: 64 }
  },
  paras: {
    inherit: true,
    baseStats: { hp: 65, atk: 70, def: 55, spa: 45, spd: 55, spe: 25 }
  },
  parasect: {
    inherit: true,
    baseStats: { hp: 95, atk: 100, def: 80, spa: 60, spd: 90, spe: 30 }
  },
  pelipper: {
    inherit: true,
    baseStats: { hp: 80, atk: 50, def: 100, spa: 95, spd: 70, spe: 65 }
  },
  persian: {
    inherit: true,
    abilities: { 0: "Limber", 1: "Technician", H: "Tough Claws" },
    baseStats: { hp: 75, atk: 105, def: 60, spa: 85, spd: 65, spe: 115 }
  },
  pidgeot: {
    inherit: true,
    abilities: { 0: "Keen Eye", 1: "Tangled Feet", H: "No Guard" },
    baseStats: { hp: 83, atk: 95, def: 75, spa: 105, spd: 70, spe: 100 }
  },
  pidgeotto: {
    inherit: true,
    baseStats: { hp: 63, atk: 83, def: 55, spa: 75, spd: 50, spe: 81 }
  },
  pidgey: {
    inherit: true,
    baseStats: { hp: 40, atk: 50, def: 40, spa: 45, spd: 35, spe: 56 }
  },
  pidove: {
    inherit: true,
    abilities: { 0: "Super Luck", H: "Rivalry" },
    baseStats: { hp: 50, atk: 36, def: 50, spa: 55, spd: 30, spe: 43 }
  },
  pikachu: {
    inherit: true,
    baseStats: { hp: 35, atk: 55, def: 30, spa: 50, spd: 40, spe: 90 }
  },
  plusle: {
    inherit: true,
    baseStats: { hp: 60, atk: 50, def: 40, spa: 105, spd: 75, spe: 95 }
  },
  poliwag: {
    inherit: true,
    abilities: { 0: "Water Absorb", H: "Swift Swim" },
    baseStats: { hp: 55, atk: 60, def: 40, spa: 55, spd: 50, spe: 75 }
  },
  poliwhirl: {
    inherit: true,
    abilities: { 0: "Water Absorb", H: "Swift Swim" },
    baseStats: { hp: 65, atk: 80, def: 65, spa: 65, spd: 55, spe: 80 }
  },
  primeape: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Anger Point", H: "Defiant" },
    baseStats: { hp: 65, atk: 115, def: 60, spa: 60, spd: 70, spe: 105 }
  },
  psyduck: {
    inherit: true,
    abilities: { 0: "Cloud Nine", 1: "Swift Swim", H: "Berserk" },
    baseStats: { hp: 60, atk: 52, def: 48, spa: 65, spd: 50, spe: 55 }
  },
  pumpkaboo: {
    inherit: true,
    baseStats: { hp: 59, atk: 66, def: 70, spa: 44, spd: 55, spe: 41 }
  },
  purugly: {
    inherit: true,
    baseStats: { hp: 85, atk: 102, def: 64, spa: 64, spd: 59, spe: 112 }
  },
  pyroar: {
    inherit: true,
    baseStats: { hp: 86, atk: 68, def: 72, spa: 115, spd: 66, spe: 106 }
  },
  quagsire: {
    inherit: true,
    baseStats: { hp: 95, atk: 100, def: 95, spa: 65, spd: 65, spe: 35 }
  },
  quilladin: {
    inherit: true,
    baseStats: { hp: 71, atk: 78, def: 95, spa: 56, spd: 58, spe: 57 }
  },
  rampardos: {
    inherit: true,
    baseStats: { hp: 97, atk: 165, def: 60, spa: 65, spd: 50, spe: 68 }
  },
  rapidash: {
    inherit: true,
    abilities: { 0: "Flash Fire", 1: "Reckless", H: "Acometida" },
    baseStats: { hp: 85, atk: 110, def: 70, spa: 80, spd: 80, spe: 105 }
  },
  raticate: {
    inherit: true,
    baseStats: { hp: 65, atk: 100, def: 60, spa: 50, spd: 70, spe: 110 }
  },
  relicanth: {
    inherit: true,
    baseStats: { hp: 100, atk: 100, def: 130, spa: 45, spd: 65, spe: 55 }
  },
  rellor: {
    inherit: true,
    baseStats: { hp: 51, atk: 50, def: 60, spa: 31, spd: 58, spe: 40 }
  },
  revavroom: {
    inherit: true,
    baseStats: { hp: 80, atk: 119, def: 90, spa: 54, spd: 67, spe: 100 }
  },
  ribombee: {
    inherit: true,
    abilities: { 0: "Shield Dust", 1: "Tinted Lens", H: "Sweet Veil" },
    baseStats: { hp: 60, atk: 55, def: 60, spa: 95, spd: 75, spe: 124 }
  },
  rillaboom: {
    inherit: true,
    baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 86 }
  },
  roselia: {
    inherit: true,
    baseStats: { hp: 50, atk: 70, def: 45, spa: 100, spd: 80, spe: 65 }
  },
  sableye: {
    inherit: true,
    baseStats: { hp: 75, atk: 90, def: 90, spa: 90, spd: 80, spe: 50 }
  },
  samurott: {
    inherit: true,
    abilities: { 0: "Torrent", H: "Sharpness" },
    baseStats: { hp: 95, atk: 108, def: 85, spa: 100, spd: 70, spe: 70 }
  },
  sandslash: {
    inherit: true,
    baseStats: { hp: 75, atk: 110, def: 110, spa: 45, spd: 55, spe: 70 }
  },
  sawsbuck: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Sap Sipper", H: "Silvano" },
    baseStats: { hp: 80, atk: 115, def: 70, spa: 60, spd: 70, spe: 105 }
  },
  sceptile: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Silvano" },
    baseStats: { hp: 70, atk: 105, def: 65, spa: 85, spd: 85, spe: 120 }
  },
  scovillain: {
    inherit: true,
    baseStats: { hp: 65, atk: 108, def: 65, spa: 108, spd: 65, spe: 95 }
  },
  seaking: {
    inherit: true,
    baseStats: { hp: 80, atk: 110, def: 75, spa: 65, spd: 80, spe: 80 }
  },
  seedot: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Silvano", H: "Pickpocket" },
    baseStats: { hp: 50, atk: 55, def: 50, spa: 50, spd: 50, spe: 55 }
  },
  seismitoad: {
    inherit: true,
    baseStats: { hp: 105, atk: 95, def: 75, spa: 90, spd: 75, spe: 74 }
  },
  sentret: {
    inherit: true,
    baseStats: { hp: 35, atk: 66, def: 34, spa: 35, spd: 45, spe: 70 }
  },
  serperior: {
    inherit: true,
    baseStats: { hp: 75, atk: 85, def: 95, spa: 85, spd: 95, spe: 113 }
  },
  servine: {
    inherit: true,
    baseStats: { hp: 60, atk: 70, def: 75, spa: 70, spd: 75, spe: 83 }
  },
  seviper: {
    inherit: true,
    abilities: { 0: "Merciless", H: "Shed Skin" },
    baseStats: { hp: 83, atk: 110, def: 70, spa: 90, spd: 60, spe: 65 }
  },
  sharpedo: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Rough Skin", H: "Speed Boost" },
    baseStats: { hp: 70, atk: 120, def: 50, spa: 90, spd: 50, spe: 100 }
  },
  shaymin: {
    inherit: true,
    baseStats: { hp: 100, atk: 100, def: 75, spa: 120, spd: 75, spe: 130 }
  },
  shellder: {
    inherit: true,
    baseStats: { hp: 30, atk: 65, def: 100, spa: 50, spd: 25, spe: 50 }
  },
  shiftry: {
    inherit: true,
    abilities: { 0: "Silvano", 1: "Wind Rider", H: "Sharpness" },
    baseStats: { hp: 90, atk: 110, def: 60, spa: 95, spd: 60, spe: 90 }
  },
  shiinotic: {
    inherit: true,
    baseStats: { hp: 75, atk: 55, def: 80, spa: 90, spd: 100, spe: 30 }
  },
  shinx: {
    inherit: true,
    baseStats: { hp: 45, atk: 65, def: 34, spa: 40, spd: 34, spe: 65 }
  },
  sinistea: {
    inherit: true,
    baseStats: { hp: 40, atk: 45, def: 45, spa: 74, spd: 50, spe: 50 }
  },
  skiploom: {
    inherit: true,
    baseStats: { hp: 55, atk: 65, def: 50, spa: 45, spd: 65, spe: 80 }
  },
  skitty: {
    inherit: true,
    abilities: { 0: "Pixilate", H: "Wonder Skin" },
    baseStats: { hp: 50, atk: 65, def: 45, spa: 35, spd: 35, spe: 60 }
  },
  skuntank: {
    inherit: true,
    baseStats: { hp: 103, atk: 103, def: 67, spa: 71, spd: 61, spe: 84 }
  },
  slugma: {
    inherit: true,
    abilities: { 0: "Flame Body", 1: "Gooey", H: "Weak Armor" },
    baseStats: { hp: 60, atk: 40, def: 60, spa: 70, spd: 40, spe: 20 }
  },
  snivy: {
    inherit: true,
    baseStats: { hp: 45, atk: 50, def: 55, spa: 50, spd: 55, spe: 63 }
  },
  solrock: {
    inherit: true,
    baseStats: { hp: 90, atk: 115, def: 90, spa: 55, spd: 70, spe: 70 }
  },
  spidops: {
    inherit: true,
    abilities: { 0: "Technician", H: "Stakeout" },
    baseStats: { hp: 70, atk: 100, def: 92, spa: 52, spd: 86, spe: 35 }
  },
  spinarak: {
    inherit: true,
    baseStats: { hp: 40, atk: 60, def: 40, spa: 40, spd: 50, spe: 70 }
  },
  spinda: {
    inherit: true,
    baseStats: { hp: 70, atk: 100, def: 60, spa: 100, spd: 60, spe: 60 }
  },
  spiritomb: {
    inherit: true,
    baseStats: { hp: 60, atk: 92, def: 108, spa: 92, spd: 108, spe: 35 }
  },
  squawkabilly: {
    inherit: true,
    baseStats: { hp: 82, atk: 106, def: 51, spa: 45, spd: 61, spe: 102 }
  },
  stakataka: {
    inherit: true,
    baseStats: { hp: 61, atk: 121, def: 181, spa: 53, spd: 91, spe: 13 }
  },
  steelix: {
    inherit: true,
    baseStats: { hp: 75, atk: 100, def: 200, spa: 55, spd: 65, spe: 30 }
  },
  steenee: {
    inherit: true,
    baseStats: { hp: 52, atk: 60, def: 48, spa: 60, spd: 48, spe: 62 }
  },
  sudowoodo: {
    inherit: true,
    baseStats: { hp: 80, atk: 100, def: 120, spa: 50, spd: 75, spe: 50 }
  },
  sunflora: {
    inherit: true,
    abilities: { 0: "Grassy Surge", H: "Drought" },
    baseStats: { hp: 75, atk: 75, def: 65, spa: 115, spd: 95, spe: 30 }
  },
  sunkern: {
    inherit: true,
    abilities: { 0: "Chlorophyll", H: "Solar Power" },
    baseStats: { hp: 30, atk: 50, def: 30, spa: 50, spd: 30, spe: 30 }
  },
  surskit: {
    inherit: true,
    baseStats: { hp: 55, atk: 30, def: 32, spa: 60, spd: 60, spe: 65 }
  },
  swablu: {
    inherit: true,
    baseStats: { hp: 45, atk: 60, def: 60, spa: 60, spd: 75, spe: 50 }
  },
  swalot: {
    inherit: true,
    abilities: { 0: "Corrosion", 1: "Gooey", H: "Gluttony" },
    baseStats: { hp: 100, atk: 73, def: 83, spa: 80, spd: 83, spe: 55 }
  },
  swanna: {
    inherit: true,
    abilities: { 0: "Liquid Voice", H: "Hydration" },
    baseStats: { hp: 75, atk: 87, def: 63, spa: 107, spd: 63, spe: 98 }
  },
  swellow: {
    inherit: true,
    baseStats: { hp: 75, atk: 105, def: 60, spa: 50, spd: 50, spe: 125 }
  },
  swoobat: {
    inherit: true,
    baseStats: { hp: 67, atk: 67, def: 55, spa: 100, spd: 65, spe: 114 }
  },
  taillow: {
    inherit: true,
    baseStats: { hp: 40, atk: 65, def: 30, spa: 30, spd: 30, spe: 85 }
  },
  talonflame: {
    inherit: true,
    baseStats: { hp: 78, atk: 90, def: 71, spa: 74, spd: 69, spe: 126 }
  },
  tatsugiri: {
    inherit: true,
    baseStats: { hp: 68, atk: 50, def: 60, spa: 120, spd: 95, spe: 92 }
  },
  tauros: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Intimidate", H: "Sheer Force" },
    baseStats: { hp: 75, atk: 110, def: 95, spa: 40, spd: 70, spe: 110 }
  },
  thwackey: {
    inherit: true,
    baseStats: { hp: 70, atk: 95, def: 70, spa: 55, spd: 60, spe: 80 }
  },
  timburr: {
    inherit: true,
    baseStats: { hp: 75, atk: 80, def: 55, spa: 35, spd: 35, spe: 35 }
  },
  tinkaton: {
    inherit: true,
    baseStats: { hp: 85, atk: 90, def: 77, spa: 70, spd: 105, spe: 94 }
  },
  torkoal: {
    inherit: true,
    abilities: { 0: "Drought", 1: "White Smoke", H: "Steam Engine" },
    baseStats: { hp: 70, atk: 85, def: 140, spa: 95, spd: 70, spe: 20 }
  },
  toxel: {
    inherit: true,
    baseStats: { hp: 40, atk: 38, def: 35, spa: 35, spd: 40, spe: 40 }
  },
  toxicroak: {
    inherit: true,
    abilities: { 0: "Dry Skin", 1: "Poison Touch", H: "Anticipation" },
    baseStats: { hp: 83, atk: 106, def: 65, spa: 86, spd: 65, spe: 90 }
  },
  tranquill: {
    inherit: true,
    abilities: { 0: "Super Luck", H: "Rivalry" },
    baseStats: { hp: 62, atk: 50, def: 62, spa: 77, spd: 42, spe: 65 }
  },
  trevenant: {
    inherit: true,
    baseStats: { hp: 85, atk: 110, def: 86, spa: 65, spd: 82, spe: 56 }
  },
  tropius: {
    inherit: true,
    abilities: { 0: "Aerilate", 1: "Harvest", H: "Drought" },
    baseStats: { hp: 99, atk: 90, def: 93, spa: 90, spd: 87, spe: 51 }
  },
  trubbish: {
    inherit: true,
    abilities: { 0: "Stench", 1: "Sticky Hold", H: "Corrosion" },
    baseStats: { hp: 65, atk: 50, def: 62, spa: 50, spd: 62, spe: 65 }
  },
  typhlosion: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Berserk" },
    baseStats: { hp: 78, atk: 74, def: 78, spa: 109, spd: 85, spe: 110 }
  },
  tyrogue: {
    inherit: true,
    baseStats: { hp: 55, atk: 60, def: 60, spa: 35, spd: 45, spe: 65 }
  },
  unfezant: {
    inherit: true,
    abilities: { 0: "Super Luck", H: "Rivalry" },
    baseStats: { hp: 80, atk: 65, def: 80, spa: 115, spd: 55, spe: 93 }
  },
  unown: {
    inherit: true,
    baseStats: { hp: 80, atk: 72, def: 48, spa: 80, spd: 80, spe: 48 }
  },
  ursaring: {
    inherit: true,
    baseStats: { hp: 90, atk: 110, def: 65, spa: 75, spd: 65, spe: 55 }
  },
  vanilluxe: {
    inherit: true,
    abilities: { 0: "Ice Body", 1: "Snow Warning", H: "Poder G\xE9lido" },
    baseStats: { hp: 71, atk: 75, def: 85, spa: 130, spd: 95, spe: 79 }
  },
  veluza: {
    inherit: true,
    baseStats: { hp: 90, atk: 112, def: 73, spa: 78, spd: 65, spe: 100 }
  },
  venomoth: {
    inherit: true,
    baseStats: { hp: 70, atk: 65, def: 60, spa: 100, spd: 90, spe: 90 }
  },
  venonat: {
    inherit: true,
    baseStats: { hp: 60, atk: 55, def: 50, spa: 60, spd: 55, spe: 45 }
  },
  vespiquen: {
    inherit: true,
    abilities: { 0: "Intimidate", 1: "Pressure", H: "Unnerve" },
    baseStats: { hp: 70, atk: 90, def: 102, spa: 70, spd: 102, spe: 40 }
  },
  victreebel: {
    inherit: true,
    baseStats: { hp: 80, atk: 110, def: 70, spa: 95, spd: 70, spe: 70 }
  },
  vileplume: {
    inherit: true,
    baseStats: { hp: 75, atk: 80, def: 85, spa: 110, spd: 95, spe: 50 }
  },
  vivillon: {
    inherit: true,
    abilities: { 0: "Compound Eyes", 1: "Shield Dust", H: "Tinted Lens" },
    baseStats: { hp: 80, atk: 52, def: 50, spa: 105, spd: 90, spe: 89 }
  },
  volbeat: {
    inherit: true,
    baseStats: { hp: 65, atk: 53, def: 55, spa: 100, spd: 75, spe: 105 }
  },
  volcanion: {
    inherit: true,
    abilities: { 0: "Flash Fire", 1: "Water Absorb" },
    baseStats: { hp: 100, atk: 70, def: 120, spa: 130, spd: 130, spe: 80 }
  },
  vulpix: {
    inherit: true,
    baseStats: { hp: 38, atk: 41, def: 40, spa: 60, spd: 65, spe: 65 }
  },
  wailord: {
    inherit: true,
    baseStats: { hp: 170, atk: 80, def: 65, spa: 90, spd: 65, spe: 60 }
  },
  walrein: {
    inherit: true,
    baseStats: { hp: 110, atk: 90, def: 90, spa: 95, spd: 90, spe: 65 }
  },
  watchog: {
    inherit: true,
    baseStats: { hp: 70, atk: 95, def: 69, spa: 60, spd: 69, spe: 110 }
  },
  weedle: {
    inherit: true,
    baseStats: { hp: 40, atk: 45, def: 30, spa: 20, spd: 20, spe: 50 }
  },
  weezing: {
    inherit: true,
    abilities: { 0: "Levitate", 1: "Neutralizing Gas", H: "Misty Surge" },
    baseStats: { hp: 65, atk: 90, def: 120, spa: 95, spd: 70, spe: 60 }
  },
  whimsicott: {
    inherit: true,
    baseStats: { hp: 60, atk: 67, def: 85, spa: 97, spd: 75, spe: 116 }
  },
  whiscash: {
    inherit: true,
    baseStats: { hp: 110, atk: 95, def: 73, spa: 76, spd: 81, spe: 60 }
  },
  whismur: {
    inherit: true,
    abilities: { 0: "Punk Rock", 1: "Soundproof", H: "Rattled" },
    baseStats: { hp: 64, atk: 60, def: 36, spa: 51, spd: 36, spe: 28 }
  },
  wigglytuff: {
    inherit: true,
    abilities: { 0: "Competitive", 1: "Cute Charm", H: "Misty Surge" },
    baseStats: { hp: 140, atk: 65, def: 60, spa: 85, spd: 60, spe: 45 }
  },
  woobat: {
    inherit: true,
    baseStats: { hp: 55, atk: 45, def: 43, spa: 55, spd: 43, spe: 72 }
  },
  wooper: {
    inherit: true,
    baseStats: { hp: 55, atk: 55, def: 45, spa: 35, spd: 35, spe: 15 }
  },
  wormadam: {
    inherit: true,
    baseStats: { hp: 80, atk: 59, def: 95, spa: 95, spd: 105, spe: 36 }
  },
  xatu: {
    inherit: true,
    abilities: { 0: "Early Bird", 1: "Magic Bounce", H: "Neuroforce" },
    baseStats: { hp: 65, atk: 75, def: 70, spa: 95, spd: 70, spe: 100 }
  },
  zangoose: {
    inherit: true,
    baseStats: { hp: 83, atk: 115, def: 70, spa: 60, spd: 70, spe: 100 }
  },
  zebstrika: {
    inherit: true,
    abilities: { 0: "Motor Drive", 1: "Reckless", H: "Sap Sipper" },
    baseStats: { hp: 85, atk: 110, def: 63, spa: 80, spd: 63, spe: 116 }
  },
  zubat: {
    inherit: true,
    baseStats: { hp: 40, atk: 55, def: 35, spa: 30, spd: 40, spe: 75 }
  },
  // === Habilidades reasignadas respecto a los juegos oficiales (no tenían cambio de stats) ===
  zweilous: {
    inherit: true,
    abilities: { 0: "Intimidate" }
  },
  jigglypuff: {
    inherit: true,
    abilities: { 0: "Competitive", 1: "Cute Charm", H: "Misty Surge" }
  },
  mankey: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Anger Point", H: "Defiant" }
  },
  espeon: {
    inherit: true,
    abilities: { 0: "Neuroforce", H: "Magic Bounce" }
  },
  granbull: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Intimidate", H: "Rattled" }
  },
  donphan: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Sturdy", H: "Sand Veil" }
  },
  treecko: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Silvano" }
  },
  grovyle: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Silvano" }
  },
  carvanha: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Rough Skin", H: "Speed Boost" }
  },
  numel: {
    inherit: true,
    abilities: { 0: "Oblivious", 1: "Simple", H: "Steam Engine" }
  },
  anorith: {
    inherit: true,
    abilities: { 0: "Anger Shell", 1: "Battle Armor", H: "Swift Swim" }
  },
  snorunt: {
    inherit: true,
    abilities: { 0: "Ice Body", 1: "Poder G\xE9lido", H: "Moody" }
  },
  metagross: {
    inherit: true,
    abilities: { 0: "Clear Body", H: "Iron Fist" }
  },
  tangrowth: {
    inherit: true,
    abilities: { 0: "Regenerator", H: "Grassy Surge" }
  },
  glaceon: {
    inherit: true,
    abilities: { 0: "Poder G\xE9lido", 1: "Snow Cloak", H: "Ice Body" }
  },
  blitzle: {
    inherit: true,
    abilities: { 0: "Motor Drive", 1: "Reckless", H: "Sap Sipper" }
  },
  gothitelle: {
    inherit: true,
    abilities: { 0: "Competitive", 1: "Frisk", H: "Espanto" }
  },
  klinklang: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Clear Body" }
  },
  accelgor: {
    inherit: true,
    abilities: { 0: "Dry Skin", 1: "Hydration", H: "Unburden" }
  },
  golurk: {
    inherit: true,
    abilities: { 0: "Iron Fist", H: "No Guard" }
  },
  delphox: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Magic Guard" }
  },
  spewpa: {
    inherit: true,
    abilities: { 0: "Compound Eyes", 1: "Shed Skin", H: "Tinted Lens" }
  },
  flabebe: {
    inherit: true,
    abilities: { 0: "Floraci\xF3n", H: "Grassy Surge" }
  },
  gogoat: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Sap Sipper", H: "Piel Herb\xE1cea" }
  },
  espurr: {
    inherit: true,
    abilities: { 0: "Infiltrator", 1: "Neuroforce", H: "Own Tempo" }
  },
  aromatisse: {
    inherit: true,
    abilities: { 0: "Cute Charm", 1: "Healer", H: "Aroma Veil" }
  },
  slurpuff: {
    inherit: true,
    abilities: { 0: "Healer", 1: "Unburden", H: "Sweet Veil" }
  },
  binacle: {
    inherit: true,
    abilities: { 0: "Sniper", 1: "Tough Claws", H: "Anger Shell" }
  },
  alcremie: {
    inherit: true,
    abilities: { 0: "Well Baked Body", H: "Cute Charm" }
  },
  snom: {
    inherit: true,
    abilities: { 0: "Ice Scales", H: "Snow Warning" }
  },
  natu: {
    inherit: true,
    abilities: { 0: "Early Bird", 1: "Magic Bounce", H: "Neuroforce" }
  },
  chimecho: {
    inherit: true,
    abilities: { 0: "Tintineo" }
  },
  stufful: {
    inherit: true,
    abilities: { 0: "Fluffy", H: "Cute Charm" }
  },
  mrrime: {
    inherit: true,
    abilities: { 0: "Screen Cleaner", 1: "Technician", H: "Psychic Surge" }
  },
  falinks: {
    inherit: true,
    abilities: { 0: "Battle Armor", 1: "Skill Link", H: "Defiant" }
  },
  pincurchin: {
    inherit: true,
    abilities: { 0: "Electric Surge", H: "Lightning Rod" }
  },
  overqwil: {
    inherit: true,
    abilities: { 0: "Poison Point", 1: "Toxic Debris", H: "Intimidate" }
  },
  sinistcha: {
    inherit: true,
    abilities: { 0: "Cursed Body", 1: "Hospitality", H: "Heatproof" }
  },
  emboar: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Sheer Force" }
  },
  simisage: {
    inherit: true,
    abilities: { 0: "Gluttony", H: "Podersabio" }
  },
  simipour: {
    inherit: true,
    abilities: { 0: "Gluttony", H: "Podersabio" }
  },
  nidoqueen: {
    inherit: true,
    abilities: { 0: "Poison Point", 1: "Sheer Force", H: "Rivalry" }
  },
  poliwrath: {
    inherit: true,
    abilities: { 0: "Water Absorb", H: "Swift Swim" }
  },
  exeggcute: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Harvest", H: "Skill Link" }
  },
  lickitung: {
    inherit: true,
    abilities: { 0: "Gooey", 1: "Oblivious", H: "Cloud Nine" }
  },
  koffing: {
    inherit: true,
    abilities: { 0: "Levitate", 1: "Neutralizing Gas", H: "Misty Surge" }
  },
  chikorita: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Triage" }
  },
  bayleef: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Triage" }
  },
  cyndaquil: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Berserk" }
  },
  quilava: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Berserk" }
  },
  raikou: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Volt Absorb" }
  },
  entei: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Flash Fire" }
  },
  blaziken: {
    inherit: true,
    abilities: { 0: "Blaze", 1: "Camorrista", H: "Speed Boost" }
  },
  zigzagoon: {
    inherit: true,
    abilities: { 0: "Guts", 1: "Pickpocket", H: "Quick Feet" }
  },
  breloom: {
    inherit: true,
    abilities: { 0: "Effect Spore", 1: "Technician", H: "Poison Heal" }
  },
  corphish: {
    inherit: true,
    abilities: { 0: "Adaptability", 1: "Hyper Cutter", H: "Shell Armor" }
  },
  crawdaunt: {
    inherit: true,
    abilities: { 0: "Adaptability", 1: "Hyper Cutter", H: "Shell Armor" }
  },
  armaldo: {
    inherit: true,
    abilities: { 0: "Anger Shell", 1: "Battle Armor", H: "Swift Swim" }
  },
  banette: {
    inherit: true,
    abilities: { 0: "Cursed Body", 1: "Frisk", H: "Insomnia" }
  },
  torterra: {
    inherit: true,
    abilities: { 0: "Overgrow", H: "Rock Head" }
  },
  shellos: {
    inherit: true,
    abilities: { 0: "Gooey", 1: "Storm Drain", H: "Sand Force" }
  },
  gastrodon: {
    inherit: true,
    abilities: { 0: "Gooey", 1: "Storm Drain", H: "Sand Force" }
  },
  lickilicky: {
    inherit: true,
    abilities: { 0: "Gooey", 1: "Oblivious", H: "Cloud Nine" }
  },
  magmortar: {
    inherit: true,
    abilities: { 0: "Flame Body", H: "Mega Launcher" }
  },
  dusknoir: {
    inherit: true,
    abilities: { 0: "Iron Fist", 1: "Pressure", H: "Frisk" }
  },
  tepig: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Sheer Force" }
  },
  pignite: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Sheer Force" }
  },
  simisear: {
    inherit: true,
    abilities: { 0: "Gluttony", H: "Podersabio" }
  },
  munna: {
    inherit: true,
    abilities: { 0: "Forewarn", 1: "Synchronize", H: "Misty Surge" }
  },
  musharna: {
    inherit: true,
    abilities: { 0: "Forewarn", 1: "Synchronize", H: "Misty Surge" }
  },
  deerling: {
    inherit: true,
    abilities: { 0: "Chlorophyll", 1: "Sap Sipper", H: "Silvano" }
  },
  ferroseed: {
    inherit: true,
    abilities: { 0: "Iron Barbs", H: "Anticipation" }
  },
  cryogonal: {
    inherit: true,
    abilities: { 0: "Levitate", H: "Poder G\xE9lido" }
  },
  mienshao: {
    inherit: true,
    abilities: { 0: "Reckless", 1: "Regenerator", H: "Inner Focus" }
  },
  bouffalant: {
    inherit: true,
    abilities: { 0: "Reckless", 1: "Sap Sipper", H: "Acometida" }
  },
  deino: {
    inherit: true,
    abilities: { 0: "Intimidate" }
  },
  passimian: {
    inherit: true,
    abilities: { 0: "Forewarn", 1: "Receiver", H: "Defiant" }
  },
  scatterbug: {
    inherit: true,
    abilities: { 0: "Compound Eyes", 1: "Shield Dust", H: "Tinted Lens" }
  },
  floette: {
    inherit: true,
    abilities: { 0: "Floraci\xF3n", H: "Grassy Surge" }
  },
  skiddo: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Sap Sipper", H: "Piel Herb\xE1cea" }
  },
  honedge: {
    inherit: true,
    abilities: { 0: "Levitate" }
  },
  doublade: {
    inherit: true,
    abilities: { 0: "Levitate" }
  },
  swirlix: {
    inherit: true,
    abilities: { 0: "Healer", 1: "Unburden", H: "Sweet Veil" }
  },
  sylveon: {
    inherit: true,
    abilities: { 0: "Pixilate", H: "Cute Charm" }
  },
  bergmite: {
    inherit: true,
    abilities: { 0: "Ice Body", 1: "Poder G\xE9lido", H: "Sturdy" }
  },
  cutiefly: {
    inherit: true,
    abilities: { 0: "Shield Dust", 1: "Tinted Lens", H: "Sweet Veil" }
  },
  raboot: {
    inherit: true,
    abilities: { 0: "Blaze", 1: "Camorrista", H: "Libero" }
  },
  yamper: {
    inherit: true,
    abilities: { 0: "Ball Fetch", 1: "Static", H: "Rattled" }
  },
  boltund: {
    inherit: true,
    abilities: { 0: "Static", 1: "Strong Jaw", H: "Competitive" }
  },
  tarountula: {
    inherit: true,
    abilities: { 0: "Insomnia", H: "Swarm" }
  },
  nidoking: {
    inherit: true,
    abilities: { 0: "Poison Point", 1: "Sheer Force", H: "Rivalry" }
  },
  ponyta: {
    inherit: true,
    abilities: { 0: "Flash Fire", 1: "Reckless", H: "Acometida" }
  },
  slowbro: {
    inherit: true,
    abilities: { 0: "Oblivious", 1: "Regenerator", H: "Regenerator" }
  },
  doduo: {
    inherit: true,
    abilities: { 0: "Run Away", 1: "Technician", H: "Camorrista" }
  },
  muk: {
    inherit: true,
    abilities: { 0: "Poison Touch", 1: "Stench", H: "Sticky Hold" }
  },
  voltorb: {
    inherit: true,
    abilities: { 0: "Electric Surge", H: "Static" }
  },
  tangela: {
    inherit: true,
    abilities: { 0: "Regenerator", H: "Grassy Surge" }
  },
  kangaskhan: {
    inherit: true,
    abilities: { 0: "Early Bird", 1: "Scrappy", H: "Acometida" }
  },
  ditto: {
    inherit: true,
    abilities: { 0: "Imposter", H: "Imposter" }
  },
  girafarig: {
    inherit: true,
    abilities: { 0: "Psychic Surge", H: "Sap Sipper" }
  },
  snubbull: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Intimidate", H: "Rattled" }
  },
  qwilfish: {
    inherit: true,
    abilities: { 0: "Poison Point", 1: "Toxic Debris", H: "Intimidate" }
  },
  phanpy: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Pickup", H: "Sand Veil" }
  },
  suicune: {
    inherit: true,
    abilities: { 0: "Pressure", H: "Water Absorb" }
  },
  combusken: {
    inherit: true,
    abilities: { 0: "Blaze", 1: "Camorrista", H: "Speed Boost" }
  },
  huntail: {
    inherit: true,
    abilities: { 0: "Strong Jaw", 1: "Swift Swim", H: "Water Veil" }
  },
  croagunk: {
    inherit: true,
    abilities: { 0: "Dry Skin", 1: "Poison Touch", H: "Anticipation" }
  },
  snover: {
    inherit: true,
    abilities: { 0: "Ice Scales", 1: "Snow Warning", H: "Soundproof" }
  },
  weavile: {
    inherit: true,
    abilities: { 0: "Inner Focus", 1: "Pressure", H: "Pickpocket" }
  },
  stunfisk: {
    inherit: true,
    abilities: { 0: "Limber", 1: "Static", H: "Storm Drain" }
  },
  mienfoo: {
    inherit: true,
    abilities: { 0: "Reckless", 1: "Regenerator", H: "Inner Focus" }
  },
  fennekin: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Magic Guard" }
  },
  braixen: {
    inherit: true,
    abilities: { 0: "Blaze", H: "Magic Guard" }
  },
  litleo: {
    inherit: true,
    abilities: { 0: "Rivalry", 1: "Unnerve", H: "Intimidate" }
  },
  florges: {
    inherit: true,
    abilities: { 0: "Floraci\xF3n", H: "Grassy Surge" }
  },
  spritzee: {
    inherit: true,
    abilities: { 0: "Cute Charm", 1: "Healer", H: "Aroma Veil" }
  },
  amaura: {
    inherit: true,
    abilities: { 0: "Refrigerate", H: "Ice Scales" }
  },
  aurorus: {
    inherit: true,
    abilities: { 0: "Refrigerate", 1: "Snow Warning", H: "Ice Scales" }
  },
  avalugg: {
    inherit: true,
    abilities: { 0: "Ice Body", 1: "Poder G\xE9lido", H: "Sturdy" }
  },
  lurantis: {
    inherit: true,
    abilities: { 0: "Adaptability", H: "Contrary" }
  },
  bewear: {
    inherit: true,
    abilities: { 0: "Fluffy", H: "Scrappy" }
  },
  tsareena: {
    inherit: true,
    abilities: { 0: "Camorrista", 1: "Queenly Majesty", H: "Sweet Veil" }
  },
  cinderace: {
    inherit: true,
    abilities: { 0: "Blaze", 1: "Camorrista", H: "Libero" }
  },
  blipbug: {
    inherit: true,
    abilities: { 0: "Compound Eyes", 1: "Swarm", H: "Neuroforce" }
  },
  dottler: {
    inherit: true,
    abilities: { 0: "Compound Eyes", 1: "Swarm", H: "Neuroforce" }
  },
  orbeetle: {
    inherit: true,
    abilities: { 0: "Neuroforce", H: "Psychic Surge" }
  },
  thievul: {
    inherit: true,
    abilities: { 0: "Run Away", 1: "Unburden", H: "Technician" }
  },
  wooloo: {
    inherit: true,
    abilities: { 0: "Fluffy", H: "Bulletproof" }
  },
  dubwool: {
    inherit: true,
    abilities: { 0: "Fluffy", H: "Bulletproof" }
  },
  arrokuda: {
    inherit: true,
    abilities: { 0: "Swift Swim", H: "Intimidate" }
  },
  milcery: {
    inherit: true,
    abilities: { 0: "Regenerator", H: "Cute Charm" }
  },
  frosmoth: {
    inherit: true,
    abilities: { 0: "Ice Scales", 1: "Tinted Lens", H: "Snow Warning" }
  },
  dachsbun: {
    inherit: true,
    abilities: { 0: "Well Baked Body", H: "Fluffy" }
  },
  annihilape: {
    inherit: true,
    abilities: { 0: "Acometida", 1: "Inner Focus", H: "Defiant" }
  },
  farigiraf: {
    inherit: true,
    abilities: { 0: "Armor Tail", 1: "Psychic Surge", H: "Cud Chew" }
  },
  arctibax: {
    inherit: true,
    abilities: { 0: "Ice Body", 1: "Thermal Exchange", H: "Thick Fat" }
  },
  baxcalibur: {
    inherit: true,
    abilities: { 0: "Ice Body", 1: "Thermal Exchange", H: "Thick Fat" }
  }
  // Royaleon y Cefireon ahora viven en el dex BASE del servidor (data/pokedex.ts),
  // igual que los Pokémon CAP oficiales — así el cliente los reconoce como especies
  // reales (búsqueda, sprites). Acá solo falta agregarlos como evos de Eevee (ver abajo).
};
//# sourceMappingURL=pokedex.js.map
