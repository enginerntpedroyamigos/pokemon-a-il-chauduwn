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
  PokedexText: () => PokedexText
});
module.exports = __toCommonJS(pokedex_exports);
const PokedexText = {
  bulbasaur: {
    name: "\u30D5\u30B7\u30AE\u30C0\u30CD"
  },
  ivysaur: {
    name: "\u30D5\u30B7\u30AE\u30BD\u30A6"
  },
  venusaur: {
    name: "\u30D5\u30B7\u30AE\u30D0\u30CA"
  },
  venusaurmega: {
    name: "\u30E1\u30AC\u30D5\u30B7\u30AE\u30D0\u30CA"
  },
  venusaurgmax: {
    name: "\u30D5\u30B7\u30AE\u30D0\u30CA\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  charmander: {
    name: "\u30D2\u30C8\u30AB\u30B2"
  },
  charmeleon: {
    name: "\u30EA\u30B6\u30FC\u30C9"
  },
  charizard: {
    name: "\u30EA\u30B6\u30FC\u30C9\u30F3"
  },
  charizardmegax: {
    name: "\u30E1\u30AC\u30EA\u30B6\u30FC\u30C9\u30F3\uFF38"
  },
  charizardmegay: {
    name: "\u30E1\u30AC\u30EA\u30B6\u30FC\u30C9\u30F3\uFF39"
  },
  charizardgmax: {
    name: "\u30EA\u30B6\u30FC\u30C9\u30F3\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  squirtle: {
    name: "\u30BC\u30CB\u30AC\u30E1"
  },
  wartortle: {
    name: "\u30AB\u30E1\u30FC\u30EB"
  },
  blastoise: {
    name: "\u30AB\u30E1\u30C3\u30AF\u30B9"
  },
  blastoisemega: {
    name: "\u30E1\u30AC\u30AB\u30E1\u30C3\u30AF\u30B9"
  },
  blastoisegmax: {
    name: "\u30AB\u30E1\u30C3\u30AF\u30B9\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  caterpie: {
    name: "\u30AD\u30E3\u30BF\u30D4\u30FC"
  },
  metapod: {
    name: "\u30C8\u30E9\u30F3\u30BB\u30EB"
  },
  butterfree: {
    name: "\u30D0\u30BF\u30D5\u30EA\u30FC"
  },
  butterfreegmax: {
    name: "\u30D0\u30BF\u30D5\u30EA\u30FC\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  weedle: {
    name: "\u30D3\u30FC\u30C9\u30EB"
  },
  kakuna: {
    name: "\u30B3\u30AF\u30FC\u30F3"
  },
  beedrill: {
    name: "\u30B9\u30D4\u30A2\u30FC"
  },
  beedrillmega: {
    name: "\u30E1\u30AC\u30B9\u30D4\u30A2\u30FC"
  },
  pidgey: {
    name: "\u30DD\u30C3\u30DD"
  },
  pidgeotto: {
    name: "\u30D4\u30B8\u30E7\u30F3"
  },
  pidgeot: {
    name: "\u30D4\u30B8\u30E7\u30C3\u30C8"
  },
  pidgeotmega: {
    name: "\u30E1\u30AC\u30D4\u30B8\u30E7\u30C3\u30C8"
  },
  rattata: {
    name: "\u30B3\u30E9\u30C3\u30BF"
  },
  rattataalola: {
    name: "\u30B3\u30E9\u30C3\u30BF\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  raticate: {
    name: "\u30E9\u30C3\u30BF"
  },
  raticatealola: {
    name: "\u30E9\u30C3\u30BF\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  spearow: {
    name: "\u30AA\u30CB\u30B9\u30BA\u30E1"
  },
  fearow: {
    name: "\u30AA\u30CB\u30C9\u30EA\u30EB"
  },
  ekans: {
    name: "\u30A2\u30FC\u30DC"
  },
  arbok: {
    name: "\u30A2\u30FC\u30DC\u30C3\u30AF"
  },
  pikachu: {
    name: "\u30D4\u30AB\u30C1\u30E5\u30A6"
  },
  pikachucosplay: {
    name: "\u304A\u304D\u304C\u3048\u30D4\u30AB\u30C1\u30E5\u30A6"
  },
  pikachurockstar: {
    name: "\u30CF\u30FC\u30C9\u30ED\u30C3\u30AF\u30FB\u30D4\u30AB\u30C1\u30E5\u30A6"
  },
  pikachubelle: {
    name: "\u30DE\u30C0\u30E0\u30FB\u30D4\u30AB\u30C1\u30E5\u30A6"
  },
  pikachupopstar: {
    name: "\u30A2\u30A4\u30C9\u30EB\u30FB\u30D4\u30AB\u30C1\u30E5\u30A6"
  },
  pikachuphd: {
    name: "\u30C9\u30AF\u30BF\u30FC\u30FB\u30D4\u30AB\u30C1\u30E5\u30A6"
  },
  pikachulibre: {
    name: "\u30DE\u30B9\u30AF\u30C9\u30FB\u30D4\u30AB\u30C1\u30E5\u30A6"
  },
  pikachugmax: {
    name: "\u30D4\u30AB\u30C1\u30E5\u30A6\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  raichu: {
    name: "\u30E9\u30A4\u30C1\u30E5\u30A6"
  },
  raichualola: {
    name: "\u30E9\u30A4\u30C1\u30E5\u30A6\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  sandshrew: {
    name: "\u30B5\u30F3\u30C9"
  },
  sandshrewalola: {
    name: "\u30B5\u30F3\u30C9\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  sandslash: {
    name: "\u30B5\u30F3\u30C9\u30D1\u30F3"
  },
  sandslashalola: {
    name: "\u30B5\u30F3\u30C9\u30D1\u30F3\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  nidoranf: {
    name: "\u30CB\u30C9\u30E9\u30F3\u2640"
  },
  nidorina: {
    name: "\u30CB\u30C9\u30EA\u30FC\u30CA"
  },
  nidoqueen: {
    name: "\u30CB\u30C9\u30AF\u30A4\u30F3"
  },
  nidoranm: {
    name: "\u30CB\u30C9\u30E9\u30F3\u2642"
  },
  nidorino: {
    name: "\u30CB\u30C9\u30EA\u30FC\u30CE"
  },
  nidoking: {
    name: "\u30CB\u30C9\u30AD\u30F3\u30B0"
  },
  clefairy: {
    name: "\u30D4\u30C3\u30D4"
  },
  clefable: {
    name: "\u30D4\u30AF\u30B7\u30FC"
  },
  vulpix: {
    name: "\u30ED\u30B3\u30F3"
  },
  vulpixalola: {
    name: "\u30ED\u30B3\u30F3\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  ninetales: {
    name: "\u30AD\u30E5\u30A6\u30B3\u30F3"
  },
  ninetalesalola: {
    name: "\u30AD\u30E5\u30A6\u30B3\u30F3\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  jigglypuff: {
    name: "\u30D7\u30EA\u30F3"
  },
  wigglytuff: {
    name: "\u30D7\u30AF\u30EA\u30F3"
  },
  zubat: {
    name: "\u30BA\u30D0\u30C3\u30C8"
  },
  golbat: {
    name: "\u30B4\u30EB\u30D0\u30C3\u30C8"
  },
  oddish: {
    name: "\u30CA\u30BE\u30CE\u30AF\u30B5"
  },
  gloom: {
    name: "\u30AF\u30B5\u30A4\u30CF\u30CA"
  },
  vileplume: {
    name: "\u30E9\u30D5\u30EC\u30B7\u30A2"
  },
  paras: {
    name: "\u30D1\u30E9\u30B9"
  },
  parasect: {
    name: "\u30D1\u30E9\u30BB\u30AF\u30C8"
  },
  venonat: {
    name: "\u30B3\u30F3\u30D1\u30F3"
  },
  venomoth: {
    name: "\u30E2\u30EB\u30D5\u30A9\u30F3"
  },
  diglett: {
    name: "\u30C7\u30A3\u30B0\u30C0"
  },
  diglettalola: {
    name: "\u30C7\u30A3\u30B0\u30C0\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  dugtrio: {
    name: "\u30C0\u30B0\u30C8\u30EA\u30AA"
  },
  dugtrioalola: {
    name: "\u30C0\u30B0\u30C8\u30EA\u30AA\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  meowth: {
    name: "\u30CB\u30E3\u30FC\u30B9"
  },
  meowthalola: {
    name: "\u30CB\u30E3\u30FC\u30B9\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  meowthgalar: {
    name: "\u30CB\u30E3\u30FC\u30B9\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  meowthgmax: {
    name: "\u30CB\u30E3\u30FC\u30B9\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  persian: {
    name: "\u30DA\u30EB\u30B7\u30A2\u30F3"
  },
  persianalola: {
    name: "\u30DA\u30EB\u30B7\u30A2\u30F3\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  psyduck: {
    name: "\u30B3\u30C0\u30C3\u30AF"
  },
  golduck: {
    name: "\u30B4\u30EB\u30C0\u30C3\u30AF"
  },
  mankey: {
    name: "\u30DE\u30F3\u30AD\u30FC"
  },
  primeape: {
    name: "\u30AA\u30B3\u30EA\u30B6\u30EB"
  },
  growlithe: {
    name: "\u30AC\u30FC\u30C7\u30A3"
  },
  growlithehisui: {
    name: "\u30AC\u30FC\u30C7\u30A3\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  arcanine: {
    name: "\u30A6\u30A4\u30F3\u30C7\u30A3"
  },
  arcaninehisui: {
    name: "\u30A6\u30A4\u30F3\u30C7\u30A3\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  poliwag: {
    name: "\u30CB\u30E7\u30ED\u30E2"
  },
  poliwhirl: {
    name: "\u30CB\u30E7\u30ED\u30BE"
  },
  poliwrath: {
    name: "\u30CB\u30E7\u30ED\u30DC\u30F3"
  },
  abra: {
    name: "\u30B1\u30FC\u30B7\u30A3"
  },
  kadabra: {
    name: "\u30E6\u30F3\u30B2\u30E9\u30FC"
  },
  alakazam: {
    name: "\u30D5\u30FC\u30C7\u30A3\u30F3"
  },
  alakazammega: {
    name: "\u30E1\u30AC\u30D5\u30FC\u30C7\u30A3\u30F3"
  },
  machop: {
    name: "\u30EF\u30F3\u30EA\u30AD\u30FC"
  },
  machoke: {
    name: "\u30B4\u30FC\u30EA\u30AD\u30FC"
  },
  machamp: {
    name: "\u30AB\u30A4\u30EA\u30AD\u30FC"
  },
  machampgmax: {
    name: "\u30AB\u30A4\u30EA\u30AD\u30FC\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  bellsprout: {
    name: "\u30DE\u30C0\u30C4\u30DC\u30DF"
  },
  weepinbell: {
    name: "\u30A6\u30C4\u30C9\u30F3"
  },
  victreebel: {
    name: "\u30A6\u30C4\u30DC\u30C3\u30C8"
  },
  tentacool: {
    name: "\u30E1\u30CE\u30AF\u30E9\u30B2"
  },
  tentacruel: {
    name: "\u30C9\u30AF\u30AF\u30E9\u30B2"
  },
  geodude: {
    name: "\u30A4\u30B7\u30C4\u30D6\u30C6"
  },
  geodudealola: {
    name: "\u30A4\u30B7\u30C4\u30D6\u30C6\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  graveler: {
    name: "\u30B4\u30ED\u30FC\u30F3"
  },
  graveleralola: {
    name: "\u30B4\u30ED\u30FC\u30F3\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  golem: {
    name: "\u30B4\u30ED\u30FC\u30CB\u30E3"
  },
  golemalola: {
    name: "\u30B4\u30ED\u30FC\u30CB\u30E3\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  ponyta: {
    name: "\u30DD\u30CB\u30FC\u30BF"
  },
  ponytagalar: {
    name: "\u30DD\u30CB\u30FC\u30BF\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  rapidash: {
    name: "\u30AE\u30E3\u30ED\u30C3\u30D7"
  },
  rapidashgalar: {
    name: "\u30AE\u30E3\u30ED\u30C3\u30D7\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  slowpoke: {
    name: "\u30E4\u30C9\u30F3"
  },
  slowpokegalar: {
    name: "\u30E4\u30C9\u30F3\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  slowbro: {
    name: "\u30E4\u30C9\u30E9\u30F3"
  },
  slowbromega: {
    name: "\u30E1\u30AC\u30E4\u30C9\u30E9\u30F3"
  },
  slowbrogalar: {
    name: "\u30E4\u30C9\u30E9\u30F3\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  magnemite: {
    name: "\u30B3\u30A4\u30EB"
  },
  magneton: {
    name: "\u30EC\u30A2\u30B3\u30A4\u30EB"
  },
  farfetchd: {
    name: "\u30AB\u30E2\u30CD\u30AE"
  },
  farfetchdgalar: {
    name: "\u30AB\u30E2\u30CD\u30AE\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  doduo: {
    name: "\u30C9\u30FC\u30C9\u30FC"
  },
  dodrio: {
    name: "\u30C9\u30FC\u30C9\u30EA\u30AA"
  },
  seel: {
    name: "\u30D1\u30A6\u30EF\u30A6"
  },
  dewgong: {
    name: "\u30B8\u30E5\u30B4\u30F3"
  },
  grimer: {
    name: "\u30D9\u30C8\u30D9\u30BF\u30FC"
  },
  grimeralola: {
    name: "\u30D9\u30C8\u30D9\u30BF\u30FC\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  muk: {
    name: "\u30D9\u30C8\u30D9\u30C8\u30F3"
  },
  mukalola: {
    name: "\u30D9\u30C8\u30D9\u30C8\u30F3\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  shellder: {
    name: "\u30B7\u30A7\u30EB\u30C0\u30FC"
  },
  cloyster: {
    name: "\u30D1\u30EB\u30B7\u30A7\u30F3"
  },
  gastly: {
    name: "\u30B4\u30FC\u30B9"
  },
  haunter: {
    name: "\u30B4\u30FC\u30B9\u30C8"
  },
  gengar: {
    name: "\u30B2\u30F3\u30AC\u30FC"
  },
  gengarmega: {
    name: "\u30E1\u30AC\u30B2\u30F3\u30AC\u30FC"
  },
  gengargmax: {
    name: "\u30B2\u30F3\u30AC\u30FC\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  onix: {
    name: "\u30A4\u30EF\u30FC\u30AF"
  },
  drowzee: {
    name: "\u30B9\u30EA\u30FC\u30D7"
  },
  hypno: {
    name: "\u30B9\u30EA\u30FC\u30D1\u30FC"
  },
  krabby: {
    name: "\u30AF\u30E9\u30D6"
  },
  kingler: {
    name: "\u30AD\u30F3\u30B0\u30E9\u30FC"
  },
  kinglergmax: {
    name: "\u30AD\u30F3\u30B0\u30E9\u30FC\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  voltorb: {
    name: "\u30D3\u30EA\u30EA\u30C0\u30DE"
  },
  voltorbhisui: {
    name: "\u30D3\u30EA\u30EA\u30C0\u30DE\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  electrode: {
    name: "\u30DE\u30EB\u30DE\u30A4\u30F3"
  },
  electrodehisui: {
    name: "\u30DE\u30EB\u30DE\u30A4\u30F3\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  exeggcute: {
    name: "\u30BF\u30DE\u30BF\u30DE"
  },
  exeggutor: {
    name: "\u30CA\u30C3\u30B7\u30FC"
  },
  exeggutoralola: {
    name: "\u30CA\u30C3\u30B7\u30FC\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  cubone: {
    name: "\u30AB\u30E9\u30AB\u30E9"
  },
  marowak: {
    name: "\u30AC\u30E9\u30AC\u30E9"
  },
  marowakalola: {
    name: "\u30AC\u30E9\u30AC\u30E9\uFF08\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F\uFF09"
  },
  hitmonlee: {
    name: "\u30B5\u30EF\u30E0\u30E9\u30FC"
  },
  hitmonchan: {
    name: "\u30A8\u30D3\u30EF\u30E9\u30FC"
  },
  lickitung: {
    name: "\u30D9\u30ED\u30EA\u30F3\u30AC"
  },
  koffing: {
    name: "\u30C9\u30AC\u30FC\u30B9"
  },
  weezing: {
    name: "\u30DE\u30BF\u30C9\u30AC\u30B9"
  },
  weezinggalar: {
    name: "\u30DE\u30BF\u30C9\u30AC\u30B9\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  rhyhorn: {
    name: "\u30B5\u30A4\u30DB\u30FC\u30F3"
  },
  rhydon: {
    name: "\u30B5\u30A4\u30C9\u30F3"
  },
  chansey: {
    name: "\u30E9\u30C3\u30AD\u30FC"
  },
  tangela: {
    name: "\u30E2\u30F3\u30B8\u30E3\u30E9"
  },
  kangaskhan: {
    name: "\u30AC\u30EB\u30FC\u30E9"
  },
  kangaskhanmega: {
    name: "\u30E1\u30AC\u30AC\u30EB\u30FC\u30E9"
  },
  horsea: {
    name: "\u30BF\u30C3\u30C4\u30FC"
  },
  seadra: {
    name: "\u30B7\u30FC\u30C9\u30E9"
  },
  goldeen: {
    name: "\u30C8\u30B5\u30AD\u30F3\u30C8"
  },
  seaking: {
    name: "\u30A2\u30BA\u30DE\u30AA\u30A6"
  },
  staryu: {
    name: "\u30D2\u30C8\u30C7\u30DE\u30F3"
  },
  starmie: {
    name: "\u30B9\u30BF\u30FC\u30DF\u30FC"
  },
  mrmime: {
    name: "\u30D0\u30EA\u30E4\u30FC\u30C9"
  },
  mrmimegalar: {
    name: "\u30D0\u30EA\u30E4\u30FC\u30C9\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  scyther: {
    name: "\u30B9\u30C8\u30E9\u30A4\u30AF"
  },
  jynx: {
    name: "\u30EB\u30FC\u30B8\u30E5\u30E9"
  },
  electabuzz: {
    name: "\u30A8\u30EC\u30D6\u30FC"
  },
  magmar: {
    name: "\u30D6\u30FC\u30D0\u30FC"
  },
  pinsir: {
    name: "\u30AB\u30A4\u30ED\u30B9"
  },
  pinsirmega: {
    name: "\u30E1\u30AC\u30AB\u30A4\u30ED\u30B9"
  },
  tauros: {
    name: "\u30B1\u30F3\u30BF\u30ED\u30B9"
  },
  magikarp: {
    name: "\u30B3\u30A4\u30AD\u30F3\u30B0"
  },
  gyarados: {
    name: "\u30AE\u30E3\u30E9\u30C9\u30B9"
  },
  gyaradosmega: {
    name: "\u30E1\u30AC\u30AE\u30E3\u30E9\u30C9\u30B9"
  },
  lapras: {
    name: "\u30E9\u30D7\u30E9\u30B9"
  },
  laprasgmax: {
    name: "\u30E9\u30D7\u30E9\u30B9\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  ditto: {
    name: "\u30E1\u30BF\u30E2\u30F3"
  },
  eevee: {
    name: "\u30A4\u30FC\u30D6\u30A4"
  },
  eeveegmax: {
    name: "\u30A4\u30FC\u30D6\u30A4\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  vaporeon: {
    name: "\u30B7\u30E3\u30EF\u30FC\u30BA"
  },
  jolteon: {
    name: "\u30B5\u30F3\u30C0\u30FC\u30B9"
  },
  flareon: {
    name: "\u30D6\u30FC\u30B9\u30BF\u30FC"
  },
  porygon: {
    name: "\u30DD\u30EA\u30B4\u30F3"
  },
  omanyte: {
    name: "\u30AA\u30E0\u30CA\u30A4\u30C8"
  },
  omastar: {
    name: "\u30AA\u30E0\u30B9\u30BF\u30FC"
  },
  kabuto: {
    name: "\u30AB\u30D6\u30C8"
  },
  kabutops: {
    name: "\u30AB\u30D6\u30C8\u30D7\u30B9"
  },
  aerodactyl: {
    name: "\u30D7\u30C6\u30E9"
  },
  aerodactylmega: {
    name: "\u30E1\u30AC\u30D7\u30C6\u30E9"
  },
  snorlax: {
    name: "\u30AB\u30D3\u30B4\u30F3"
  },
  snorlaxgmax: {
    name: "\u30AB\u30D3\u30B4\u30F3\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  articuno: {
    name: "\u30D5\u30EA\u30FC\u30B6\u30FC"
  },
  zapdos: {
    name: "\u30B5\u30F3\u30C0\u30FC"
  },
  moltres: {
    name: "\u30D5\u30A1\u30A4\u30E4\u30FC"
  },
  dratini: {
    name: "\u30DF\u30CB\u30EA\u30E5\u30A6"
  },
  dragonair: {
    name: "\u30CF\u30AF\u30EA\u30E5\u30FC"
  },
  dragonite: {
    name: "\u30AB\u30A4\u30EA\u30E5\u30FC"
  },
  mewtwo: {
    name: "\u30DF\u30E5\u30A6\u30C4\u30FC"
  },
  mewtwomegax: {
    name: "\u30E1\u30AC\u30DF\u30E5\u30A6\u30C4\u30FC\uFF38"
  },
  mewtwomegay: {
    name: "\u30E1\u30AC\u30DF\u30E5\u30A6\u30C4\u30FC\uFF39"
  },
  mew: {
    name: "\u30DF\u30E5\u30A6"
  },
  chikorita: {
    name: "\u30C1\u30B3\u30EA\u30FC\u30BF"
  },
  bayleef: {
    name: "\u30D9\u30A4\u30EA\u30FC\u30D5"
  },
  meganium: {
    name: "\u30E1\u30AC\u30CB\u30A6\u30E0"
  },
  cyndaquil: {
    name: "\u30D2\u30CE\u30A2\u30E9\u30B7"
  },
  quilava: {
    name: "\u30DE\u30B0\u30DE\u30E9\u30B7"
  },
  typhlosion: {
    name: "\u30D0\u30AF\u30D5\u30FC\u30F3"
  },
  typhlosionhisui: {
    name: "\u30D0\u30AF\u30D5\u30FC\u30F3\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  totodile: {
    name: "\u30EF\u30CB\u30CE\u30B3"
  },
  croconaw: {
    name: "\u30A2\u30EA\u30B2\u30A4\u30C4"
  },
  feraligatr: {
    name: "\u30AA\u30FC\u30C0\u30A4\u30EB"
  },
  sentret: {
    name: "\u30AA\u30BF\u30C1"
  },
  furret: {
    name: "\u30AA\u30AA\u30BF\u30C1"
  },
  hoothoot: {
    name: "\u30DB\u30FC\u30DB\u30FC"
  },
  noctowl: {
    name: "\u30E8\u30EB\u30CE\u30BA\u30AF"
  },
  ledyba: {
    name: "\u30EC\u30C7\u30A3\u30D0"
  },
  ledian: {
    name: "\u30EC\u30C7\u30A3\u30A2\u30F3"
  },
  spinarak: {
    name: "\u30A4\u30C8\u30DE\u30EB"
  },
  ariados: {
    name: "\u30A2\u30EA\u30A2\u30C9\u30B9"
  },
  crobat: {
    name: "\u30AF\u30ED\u30D0\u30C3\u30C8"
  },
  chinchou: {
    name: "\u30C1\u30E7\u30F3\u30C1\u30FC"
  },
  lanturn: {
    name: "\u30E9\u30F3\u30BF\u30FC\u30F3"
  },
  pichu: {
    name: "\u30D4\u30C1\u30E5\u30FC"
  },
  cleffa: {
    name: "\u30D4\u30A3"
  },
  igglybuff: {
    name: "\u30D7\u30D7\u30EA\u30F3"
  },
  togepi: {
    name: "\u30C8\u30B2\u30D4\u30FC"
  },
  togetic: {
    name: "\u30C8\u30B2\u30C1\u30C3\u30AF"
  },
  natu: {
    name: "\u30CD\u30A4\u30C6\u30A3"
  },
  xatu: {
    name: "\u30CD\u30A4\u30C6\u30A3\u30AA"
  },
  mareep: {
    name: "\u30E1\u30EA\u30FC\u30D7"
  },
  flaaffy: {
    name: "\u30E2\u30B3\u30B3"
  },
  ampharos: {
    name: "\u30C7\u30F3\u30EA\u30E5\u30A6"
  },
  ampharosmega: {
    name: "\u30E1\u30AC\u30C7\u30F3\u30EA\u30E5\u30A6"
  },
  bellossom: {
    name: "\u30AD\u30EC\u30A4\u30CF\u30CA"
  },
  marill: {
    name: "\u30DE\u30EA\u30EB"
  },
  azumarill: {
    name: "\u30DE\u30EA\u30EB\u30EA"
  },
  sudowoodo: {
    name: "\u30A6\u30BD\u30C3\u30AD\u30FC"
  },
  politoed: {
    name: "\u30CB\u30E7\u30ED\u30C8\u30CE"
  },
  hoppip: {
    name: "\u30CF\u30CD\u30C3\u30B3"
  },
  skiploom: {
    name: "\u30DD\u30DD\u30C3\u30B3"
  },
  jumpluff: {
    name: "\u30EF\u30BF\u30C3\u30B3"
  },
  aipom: {
    name: "\u30A8\u30A4\u30D1\u30E0"
  },
  sunkern: {
    name: "\u30D2\u30DE\u30CA\u30C3\u30C4"
  },
  sunflora: {
    name: "\u30AD\u30DE\u30EF\u30EA"
  },
  yanma: {
    name: "\u30E4\u30F3\u30E4\u30F3\u30DE"
  },
  wooper: {
    name: "\u30A6\u30D1\u30FC"
  },
  wooperpaldea: {
    name: "\u30A6\u30D1\u30FC\uFF08\u30D1\u30EB\u30C7\u30A2\u306E\u3059\u304C\u305F\uFF09"
  },
  quagsire: {
    name: "\u30CC\u30AA\u30FC"
  },
  espeon: {
    name: "\u30A8\u30FC\u30D5\u30A3"
  },
  umbreon: {
    name: "\u30D6\u30E9\u30C3\u30AD\u30FC"
  },
  murkrow: {
    name: "\u30E4\u30DF\u30AB\u30E9\u30B9"
  },
  slowking: {
    name: "\u30E4\u30C9\u30AD\u30F3\u30B0"
  },
  misdreavus: {
    name: "\u30E0\u30A6\u30DE"
  },
  unown: {
    name: "\u30A2\u30F3\u30CE\u30FC\u30F3"
  },
  wobbuffet: {
    name: "\u30BD\u30FC\u30CA\u30F3\u30B9"
  },
  girafarig: {
    name: "\u30AD\u30EA\u30F3\u30EA\u30AD"
  },
  pineco: {
    name: "\u30AF\u30CC\u30AE\u30C0\u30DE"
  },
  forretress: {
    name: "\u30D5\u30A9\u30EC\u30C8\u30B9"
  },
  dunsparce: {
    name: "\u30CE\u30B3\u30C3\u30C1"
  },
  gligar: {
    name: "\u30B0\u30E9\u30A4\u30AC\u30FC"
  },
  steelix: {
    name: "\u30CF\u30AC\u30CD\u30FC\u30EB"
  },
  steelixmega: {
    name: "\u30E1\u30AC\u30CF\u30AC\u30CD\u30FC\u30EB"
  },
  snubbull: {
    name: "\u30D6\u30EB\u30FC"
  },
  granbull: {
    name: "\u30B0\u30E9\u30F3\u30D6\u30EB"
  },
  qwilfish: {
    name: "\u30CF\u30EA\u30FC\u30BB\u30F3"
  },
  qwilfishhisui: {
    name: "\u30CF\u30EA\u30FC\u30BB\u30F3\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  scizor: {
    name: "\u30CF\u30C3\u30B5\u30E0"
  },
  scizormega: {
    name: "\u30E1\u30AC\u30CF\u30C3\u30B5\u30E0"
  },
  shuckle: {
    name: "\u30C4\u30DC\u30C4\u30DC"
  },
  heracross: {
    name: "\u30D8\u30E9\u30AF\u30ED\u30B9"
  },
  heracrossmega: {
    name: "\u30E1\u30AC\u30D8\u30E9\u30AF\u30ED\u30B9"
  },
  sneasel: {
    name: "\u30CB\u30E5\u30FC\u30E9"
  },
  sneaselhisui: {
    name: "\u30CB\u30E5\u30FC\u30E9\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  teddiursa: {
    name: "\u30D2\u30E1\u30B0\u30DE"
  },
  ursaring: {
    name: "\u30EA\u30F3\u30B0\u30DE"
  },
  slugma: {
    name: "\u30DE\u30B0\u30DE\u30C3\u30B0"
  },
  magcargo: {
    name: "\u30DE\u30B0\u30AB\u30EB\u30B4"
  },
  swinub: {
    name: "\u30A6\u30EA\u30E0\u30FC"
  },
  piloswine: {
    name: "\u30A4\u30CE\u30E0\u30FC"
  },
  corsola: {
    name: "\u30B5\u30CB\u30FC\u30B4"
  },
  corsolagalar: {
    name: "\u30B5\u30CB\u30FC\u30B4\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  remoraid: {
    name: "\u30C6\u30C3\u30DD\u30A6\u30AA"
  },
  octillery: {
    name: "\u30AA\u30AF\u30BF\u30F3"
  },
  delibird: {
    name: "\u30C7\u30EA\u30D0\u30FC\u30C9"
  },
  mantine: {
    name: "\u30DE\u30F3\u30BF\u30A4\u30F3"
  },
  skarmory: {
    name: "\u30A8\u30A2\u30FC\u30E0\u30C9"
  },
  houndour: {
    name: "\u30C7\u30EB\u30D3\u30EB"
  },
  houndoom: {
    name: "\u30D8\u30EB\u30AC\u30FC"
  },
  houndoommega: {
    name: "\u30E1\u30AC\u30D8\u30EB\u30AC\u30FC"
  },
  kingdra: {
    name: "\u30AD\u30F3\u30B0\u30C9\u30E9"
  },
  phanpy: {
    name: "\u30B4\u30DE\u30BE\u30A6"
  },
  donphan: {
    name: "\u30C9\u30F3\u30D5\u30A1\u30F3"
  },
  porygon2: {
    name: "\u30DD\u30EA\u30B4\u30F3\uFF12"
  },
  stantler: {
    name: "\u30AA\u30C9\u30B7\u30B7"
  },
  smeargle: {
    name: "\u30C9\u30FC\u30D6\u30EB"
  },
  tyrogue: {
    name: "\u30D0\u30EB\u30AD\u30FC"
  },
  hitmontop: {
    name: "\u30AB\u30DD\u30A8\u30E9\u30FC"
  },
  smoochum: {
    name: "\u30E0\u30C1\u30E5\u30FC\u30EB"
  },
  elekid: {
    name: "\u30A8\u30EC\u30AD\u30C3\u30C9"
  },
  magby: {
    name: "\u30D6\u30D3\u30A3"
  },
  miltank: {
    name: "\u30DF\u30EB\u30BF\u30F3\u30AF"
  },
  blissey: {
    name: "\u30CF\u30D4\u30CA\u30B9"
  },
  raikou: {
    name: "\u30E9\u30A4\u30B3\u30A6"
  },
  entei: {
    name: "\u30A8\u30F3\u30C6\u30A4"
  },
  suicune: {
    name: "\u30B9\u30A4\u30AF\u30F3"
  },
  larvitar: {
    name: "\u30E8\u30FC\u30AE\u30E9\u30B9"
  },
  pupitar: {
    name: "\u30B5\u30CA\u30AE\u30E9\u30B9"
  },
  tyranitar: {
    name: "\u30D0\u30F3\u30AE\u30E9\u30B9"
  },
  tyranitarmega: {
    name: "\u30E1\u30AC\u30D0\u30F3\u30AE\u30E9\u30B9"
  },
  lugia: {
    name: "\u30EB\u30AE\u30A2"
  },
  hooh: {
    name: "\u30DB\u30A6\u30AA\u30A6"
  },
  celebi: {
    name: "\u30BB\u30EC\u30D3\u30A3"
  },
  treecko: {
    name: "\u30AD\u30E2\u30EA"
  },
  grovyle: {
    name: "\u30B8\u30E5\u30D7\u30C8\u30EB"
  },
  sceptile: {
    name: "\u30B8\u30E5\u30AB\u30A4\u30F3"
  },
  sceptilemega: {
    name: "\u30E1\u30AC\u30B8\u30E5\u30AB\u30A4\u30F3"
  },
  torchic: {
    name: "\u30A2\u30C1\u30E3\u30E2"
  },
  combusken: {
    name: "\u30EF\u30AB\u30B7\u30E3\u30E2"
  },
  blaziken: {
    name: "\u30D0\u30B7\u30E3\u30FC\u30E2"
  },
  blazikenmega: {
    name: "\u30E1\u30AC\u30D0\u30B7\u30E3\u30FC\u30E2"
  },
  mudkip: {
    name: "\u30DF\u30BA\u30B4\u30ED\u30A6"
  },
  marshtomp: {
    name: "\u30CC\u30DE\u30AF\u30ED\u30FC"
  },
  swampert: {
    name: "\u30E9\u30B0\u30E9\u30FC\u30B8"
  },
  swampertmega: {
    name: "\u30E1\u30AC\u30E9\u30B0\u30E9\u30FC\u30B8"
  },
  poochyena: {
    name: "\u30DD\u30C1\u30A8\u30CA"
  },
  mightyena: {
    name: "\u30B0\u30E9\u30A8\u30CA"
  },
  zigzagoon: {
    name: "\u30B8\u30B0\u30B6\u30B0\u30DE"
  },
  zigzagoongalar: {
    name: "\u30B8\u30B0\u30B6\u30B0\u30DE\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  linoone: {
    name: "\u30DE\u30C3\u30B9\u30B0\u30DE"
  },
  linoonegalar: {
    name: "\u30DE\u30C3\u30B9\u30B0\u30DE\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  wurmple: {
    name: "\u30B1\u30E0\u30C3\u30BD"
  },
  silcoon: {
    name: "\u30AB\u30E9\u30B5\u30EA\u30B9"
  },
  beautifly: {
    name: "\u30A2\u30B2\u30CF\u30F3\u30C8"
  },
  cascoon: {
    name: "\u30DE\u30E6\u30EB\u30C9"
  },
  dustox: {
    name: "\u30C9\u30AF\u30B1\u30A4\u30EB"
  },
  lotad: {
    name: "\u30CF\u30B9\u30DC\u30FC"
  },
  lombre: {
    name: "\u30CF\u30B9\u30D6\u30EC\u30ED"
  },
  ludicolo: {
    name: "\u30EB\u30F3\u30D1\u30C3\u30D1"
  },
  seedot: {
    name: "\u30BF\u30CD\u30DC\u30FC"
  },
  nuzleaf: {
    name: "\u30B3\u30CE\u30CF\u30CA"
  },
  shiftry: {
    name: "\u30C0\u30FC\u30C6\u30F3\u30B0"
  },
  taillow: {
    name: "\u30B9\u30D0\u30E1"
  },
  swellow: {
    name: "\u30AA\u30AA\u30B9\u30D0\u30E1"
  },
  wingull: {
    name: "\u30AD\u30E3\u30E2\u30E1"
  },
  pelipper: {
    name: "\u30DA\u30EA\u30C3\u30D1\u30FC"
  },
  ralts: {
    name: "\u30E9\u30EB\u30C8\u30B9"
  },
  kirlia: {
    name: "\u30AD\u30EB\u30EA\u30A2"
  },
  gardevoir: {
    name: "\u30B5\u30FC\u30CA\u30A4\u30C8"
  },
  gardevoirmega: {
    name: "\u30E1\u30AC\u30B5\u30FC\u30CA\u30A4\u30C8"
  },
  surskit: {
    name: "\u30A2\u30E1\u30BF\u30DE"
  },
  masquerain: {
    name: "\u30A2\u30E1\u30E2\u30FC\u30B9"
  },
  shroomish: {
    name: "\u30AD\u30CE\u30B3\u30B3"
  },
  breloom: {
    name: "\u30AD\u30CE\u30AC\u30C3\u30B5"
  },
  slakoth: {
    name: "\u30CA\u30DE\u30B1\u30ED"
  },
  vigoroth: {
    name: "\u30E4\u30EB\u30AD\u30E2\u30CE"
  },
  slaking: {
    name: "\u30B1\u30C3\u30AD\u30F3\u30B0"
  },
  nincada: {
    name: "\u30C4\u30C1\u30CB\u30F3"
  },
  ninjask: {
    name: "\u30C6\u30C3\u30AB\u30CB\u30F3"
  },
  shedinja: {
    name: "\u30CC\u30B1\u30CB\u30F3"
  },
  whismur: {
    name: "\u30B4\u30CB\u30E7\u30CB\u30E7"
  },
  loudred: {
    name: "\u30C9\u30B4\u30FC\u30E0"
  },
  exploud: {
    name: "\u30D0\u30AF\u30AA\u30F3\u30B0"
  },
  makuhita: {
    name: "\u30DE\u30AF\u30CE\u30B7\u30BF"
  },
  hariyama: {
    name: "\u30CF\u30EA\u30C6\u30E4\u30DE"
  },
  azurill: {
    name: "\u30EB\u30EA\u30EA"
  },
  nosepass: {
    name: "\u30CE\u30BA\u30D1\u30B9"
  },
  skitty: {
    name: "\u30A8\u30CD\u30B3"
  },
  delcatty: {
    name: "\u30A8\u30CD\u30B3\u30ED\u30ED"
  },
  sableye: {
    name: "\u30E4\u30DF\u30E9\u30DF"
  },
  sableyemega: {
    name: "\u30E1\u30AC\u30E4\u30DF\u30E9\u30DF"
  },
  mawile: {
    name: "\u30AF\u30C1\u30FC\u30C8"
  },
  mawilemega: {
    name: "\u30E1\u30AC\u30AF\u30C1\u30FC\u30C8"
  },
  aron: {
    name: "\u30B3\u30B3\u30C9\u30E9"
  },
  lairon: {
    name: "\u30B3\u30C9\u30E9"
  },
  aggron: {
    name: "\u30DC\u30B9\u30B4\u30C9\u30E9"
  },
  aggronmega: {
    name: "\u30E1\u30AC\u30DC\u30B9\u30B4\u30C9\u30E9"
  },
  meditite: {
    name: "\u30A2\u30B5\u30CA\u30F3"
  },
  medicham: {
    name: "\u30C1\u30E3\u30FC\u30EC\u30E0"
  },
  medichammega: {
    name: "\u30E1\u30AC\u30C1\u30E3\u30FC\u30EC\u30E0"
  },
  electrike: {
    name: "\u30E9\u30AF\u30E9\u30A4"
  },
  manectric: {
    name: "\u30E9\u30A4\u30DC\u30EB\u30C8"
  },
  manectricmega: {
    name: "\u30E1\u30AC\u30E9\u30A4\u30DC\u30EB\u30C8"
  },
  plusle: {
    name: "\u30D7\u30E9\u30B9\u30EB"
  },
  minun: {
    name: "\u30DE\u30A4\u30CA\u30F3"
  },
  volbeat: {
    name: "\u30D0\u30EB\u30D3\u30FC\u30C8"
  },
  illumise: {
    name: "\u30A4\u30EB\u30DF\u30FC\u30BC"
  },
  roselia: {
    name: "\u30ED\u30BC\u30EA\u30A2"
  },
  gulpin: {
    name: "\u30B4\u30AF\u30EA\u30F3"
  },
  swalot: {
    name: "\u30DE\u30EB\u30CE\u30FC\u30E0"
  },
  carvanha: {
    name: "\u30AD\u30D0\u30CB\u30A2"
  },
  sharpedo: {
    name: "\u30B5\u30E1\u30CF\u30C0\u30FC"
  },
  sharpedomega: {
    name: "\u30E1\u30AC\u30B5\u30E1\u30CF\u30C0\u30FC"
  },
  wailmer: {
    name: "\u30DB\u30A8\u30EB\u30B3"
  },
  wailord: {
    name: "\u30DB\u30A8\u30EB\u30AA\u30FC"
  },
  numel: {
    name: "\u30C9\u30F3\u30E1\u30EB"
  },
  camerupt: {
    name: "\u30D0\u30AF\u30FC\u30C0"
  },
  cameruptmega: {
    name: "\u30E1\u30AC\u30D0\u30AF\u30FC\u30C0"
  },
  torkoal: {
    name: "\u30B3\u30FC\u30BF\u30B9"
  },
  spoink: {
    name: "\u30D0\u30CD\u30D6\u30FC"
  },
  grumpig: {
    name: "\u30D6\u30FC\u30D4\u30C3\u30B0"
  },
  spinda: {
    name: "\u30D1\u30C3\u30C1\u30FC\u30EB"
  },
  trapinch: {
    name: "\u30CA\u30C3\u30AF\u30E9\u30FC"
  },
  vibrava: {
    name: "\u30D3\u30D6\u30E9\u30FC\u30D0"
  },
  flygon: {
    name: "\u30D5\u30E9\u30A4\u30B4\u30F3"
  },
  cacnea: {
    name: "\u30B5\u30DC\u30CD\u30A2"
  },
  cacturne: {
    name: "\u30CE\u30AF\u30BF\u30B9"
  },
  swablu: {
    name: "\u30C1\u30EB\u30C3\u30C8"
  },
  altaria: {
    name: "\u30C1\u30EB\u30BF\u30EA\u30B9"
  },
  altariamega: {
    name: "\u30E1\u30AC\u30C1\u30EB\u30BF\u30EA\u30B9"
  },
  zangoose: {
    name: "\u30B6\u30F3\u30B0\u30FC\u30B9"
  },
  seviper: {
    name: "\u30CF\u30D6\u30CD\u30FC\u30AF"
  },
  lunatone: {
    name: "\u30EB\u30CA\u30C8\u30FC\u30F3"
  },
  solrock: {
    name: "\u30BD\u30EB\u30ED\u30C3\u30AF"
  },
  barboach: {
    name: "\u30C9\u30B8\u30E7\u30C3\u30C1"
  },
  whiscash: {
    name: "\u30CA\u30DE\u30BA\u30F3"
  },
  corphish: {
    name: "\u30D8\u30A4\u30AC\u30CB"
  },
  crawdaunt: {
    name: "\u30B7\u30B6\u30EA\u30AC\u30FC"
  },
  baltoy: {
    name: "\u30E4\u30B8\u30ED\u30F3"
  },
  claydol: {
    name: "\u30CD\u30F3\u30C9\u30FC\u30EB"
  },
  lileep: {
    name: "\u30EA\u30EA\u30FC\u30E9"
  },
  cradily: {
    name: "\u30E6\u30EC\u30A4\u30C9\u30EB"
  },
  anorith: {
    name: "\u30A2\u30CE\u30D7\u30B9"
  },
  armaldo: {
    name: "\u30A2\u30FC\u30DE\u30EB\u30C9"
  },
  feebas: {
    name: "\u30D2\u30F3\u30D0\u30B9"
  },
  milotic: {
    name: "\u30DF\u30ED\u30AB\u30ED\u30B9"
  },
  castform: {
    name: "\u30DD\u30EF\u30EB\u30F3"
  },
  castformsunny: {
    name: "\u30DD\u30EF\u30EB\u30F3\uFF08\u305F\u3044\u3088\u3046\u306E\u3059\u304C\u305F\uFF09"
  },
  castformrainy: {
    name: "\u30DD\u30EF\u30EB\u30F3\uFF08\u3042\u307E\u307F\u305A\u306E\u3059\u304C\u305F\uFF09"
  },
  castformsnowy: {
    name: "\u30DD\u30EF\u30EB\u30F3\uFF08\u3086\u304D\u3050\u3082\u306E\u3059\u304C\u305F\uFF09"
  },
  kecleon: {
    name: "\u30AB\u30AF\u30EC\u30AA\u30F3"
  },
  shuppet: {
    name: "\u30AB\u30B2\u30DC\u30A6\u30BA"
  },
  banette: {
    name: "\u30B8\u30E5\u30DA\u30C3\u30BF"
  },
  banettemega: {
    name: "\u30E1\u30AC\u30B8\u30E5\u30DA\u30C3\u30BF"
  },
  duskull: {
    name: "\u30E8\u30DE\u30EF\u30EB"
  },
  dusclops: {
    name: "\u30B5\u30DE\u30E8\u30FC\u30EB"
  },
  tropius: {
    name: "\u30C8\u30ED\u30D4\u30A6\u30B9"
  },
  chimecho: {
    name: "\u30C1\u30EA\u30FC\u30F3"
  },
  absol: {
    name: "\u30A2\u30D6\u30BD\u30EB"
  },
  absolmega: {
    name: "\u30E1\u30AC\u30A2\u30D6\u30BD\u30EB"
  },
  wynaut: {
    name: "\u30BD\u30FC\u30CA\u30CE"
  },
  snorunt: {
    name: "\u30E6\u30AD\u30EF\u30E9\u30B7"
  },
  glalie: {
    name: "\u30AA\u30CB\u30B4\u30FC\u30EA"
  },
  glaliemega: {
    name: "\u30E1\u30AC\u30AA\u30CB\u30B4\u30FC\u30EA"
  },
  spheal: {
    name: "\u30BF\u30DE\u30B6\u30E9\u30B7"
  },
  sealeo: {
    name: "\u30C8\u30C9\u30B0\u30E9\u30FC"
  },
  walrein: {
    name: "\u30C8\u30C9\u30BC\u30EB\u30AC"
  },
  clamperl: {
    name: "\u30D1\u30FC\u30EB\u30EB"
  },
  huntail: {
    name: "\u30CF\u30F3\u30C6\u30FC\u30EB"
  },
  gorebyss: {
    name: "\u30B5\u30AF\u30E9\u30D3\u30B9"
  },
  relicanth: {
    name: "\u30B8\u30FC\u30E9\u30F3\u30B9"
  },
  luvdisc: {
    name: "\u30E9\u30D6\u30AB\u30B9"
  },
  bagon: {
    name: "\u30BF\u30C4\u30D9\u30A4"
  },
  shelgon: {
    name: "\u30B3\u30E2\u30EB\u30FC"
  },
  salamence: {
    name: "\u30DC\u30FC\u30DE\u30F3\u30C0"
  },
  salamencemega: {
    name: "\u30E1\u30AC\u30DC\u30FC\u30DE\u30F3\u30C0"
  },
  beldum: {
    name: "\u30C0\u30F3\u30D0\u30EB"
  },
  metang: {
    name: "\u30E1\u30BF\u30F3\u30B0"
  },
  metagross: {
    name: "\u30E1\u30BF\u30B0\u30ED\u30B9"
  },
  metagrossmega: {
    name: "\u30E1\u30AC\u30E1\u30BF\u30B0\u30ED\u30B9"
  },
  regirock: {
    name: "\u30EC\u30B8\u30ED\u30C3\u30AF"
  },
  regice: {
    name: "\u30EC\u30B8\u30A2\u30A4\u30B9"
  },
  registeel: {
    name: "\u30EC\u30B8\u30B9\u30C1\u30EB"
  },
  latias: {
    name: "\u30E9\u30C6\u30A3\u30A2\u30B9"
  },
  latiasmega: {
    name: "\u30E1\u30AC\u30E9\u30C6\u30A3\u30A2\u30B9"
  },
  latios: {
    name: "\u30E9\u30C6\u30A3\u30AA\u30B9"
  },
  latiosmega: {
    name: "\u30E1\u30AC\u30E9\u30C6\u30A3\u30AA\u30B9"
  },
  kyogre: {
    name: "\u30AB\u30A4\u30AA\u30FC\u30AC"
  },
  kyogreprimal: {
    name: "\u30AB\u30A4\u30AA\u30FC\u30AC\uFF08\u30B2\u30F3\u30B7\u30AB\u30A4\u30AD\u306E\u3059\u304C\u305F\uFF09"
  },
  groudon: {
    name: "\u30B0\u30E9\u30FC\u30C9\u30F3"
  },
  groudonprimal: {
    name: "\u30B0\u30E9\u30FC\u30C9\u30F3\uFF08\u30B2\u30F3\u30B7\u30AB\u30A4\u30AD\u306E\u3059\u304C\u305F\uFF09"
  },
  rayquaza: {
    name: "\u30EC\u30C3\u30AF\u30A6\u30B6"
  },
  rayquazamega: {
    name: "\u30E1\u30AC\u30EC\u30C3\u30AF\u30A6\u30B6"
  },
  jirachi: {
    name: "\u30B8\u30E9\u30FC\u30C1"
  },
  deoxys: {
    name: "\u30C7\u30AA\u30AD\u30B7\u30B9"
  },
  deoxysattack: {
    name: "\u30C7\u30AA\u30AD\u30B7\u30B9\uFF08\u30A2\u30BF\u30C3\u30AF\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  deoxysdefense: {
    name: "\u30C7\u30AA\u30AD\u30B7\u30B9\uFF08\u30C7\u30A3\u30D5\u30A7\u30F3\u30B9\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  deoxysspeed: {
    name: "\u30C7\u30AA\u30AD\u30B7\u30B9\uFF08\u30B9\u30D4\u30FC\u30C9\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  turtwig: {
    name: "\u30CA\u30A8\u30C8\u30EB"
  },
  grotle: {
    name: "\u30CF\u30E4\u30B7\u30AC\u30E1"
  },
  torterra: {
    name: "\u30C9\u30C0\u30A4\u30C8\u30B9"
  },
  chimchar: {
    name: "\u30D2\u30B3\u30B6\u30EB"
  },
  monferno: {
    name: "\u30E2\u30A6\u30AB\u30B6\u30EB"
  },
  infernape: {
    name: "\u30B4\u30A6\u30AB\u30B6\u30EB"
  },
  piplup: {
    name: "\u30DD\u30C3\u30C1\u30E3\u30DE"
  },
  prinplup: {
    name: "\u30DD\u30C3\u30BF\u30A4\u30B7"
  },
  empoleon: {
    name: "\u30A8\u30F3\u30DA\u30EB\u30C8"
  },
  starly: {
    name: "\u30E0\u30C3\u30AF\u30EB"
  },
  staravia: {
    name: "\u30E0\u30AF\u30D0\u30FC\u30C9"
  },
  staraptor: {
    name: "\u30E0\u30AF\u30DB\u30FC\u30AF"
  },
  bidoof: {
    name: "\u30D3\u30C3\u30D1"
  },
  bibarel: {
    name: "\u30D3\u30FC\u30C0\u30EB"
  },
  kricketot: {
    name: "\u30B3\u30ED\u30DC\u30FC\u30B7"
  },
  kricketune: {
    name: "\u30B3\u30ED\u30C8\u30C3\u30AF"
  },
  shinx: {
    name: "\u30B3\u30EA\u30F3\u30AF"
  },
  luxio: {
    name: "\u30EB\u30AF\u30B7\u30AA"
  },
  luxray: {
    name: "\u30EC\u30F3\u30C8\u30E9\u30FC"
  },
  budew: {
    name: "\u30B9\u30DC\u30DF\u30FC"
  },
  roserade: {
    name: "\u30ED\u30BA\u30EC\u30A4\u30C9"
  },
  cranidos: {
    name: "\u30BA\u30AC\u30A4\u30C9\u30B9"
  },
  rampardos: {
    name: "\u30E9\u30E0\u30D1\u30EB\u30C9"
  },
  shieldon: {
    name: "\u30BF\u30C6\u30C8\u30D7\u30B9"
  },
  bastiodon: {
    name: "\u30C8\u30EA\u30C7\u30D7\u30B9"
  },
  burmy: {
    name: "\u30DF\u30CE\u30E0\u30C3\u30C1"
  },
  wormadam: {
    name: "\u30DF\u30CE\u30DE\u30C0\u30E0"
  },
  wormadamsandy: {
    name: "\u30DF\u30CE\u30DE\u30C0\u30E0\uFF08\u3059\u306A\u3061\u306E\u30DF\u30CE\uFF09"
  },
  wormadamtrash: {
    name: "\u30DF\u30CE\u30DE\u30C0\u30E0\uFF08\u30B4\u30DF\u306E\u30DF\u30CE\uFF09"
  },
  mothim: {
    name: "\u30AC\u30FC\u30E1\u30A4\u30EB"
  },
  combee: {
    name: "\u30DF\u30C4\u30CF\u30CB\u30FC"
  },
  vespiquen: {
    name: "\u30D3\u30FC\u30AF\u30A4\u30F3"
  },
  pachirisu: {
    name: "\u30D1\u30C1\u30EA\u30B9"
  },
  buizel: {
    name: "\u30D6\u30A4\u30BC\u30EB"
  },
  floatzel: {
    name: "\u30D5\u30ED\u30FC\u30BC\u30EB"
  },
  cherubi: {
    name: "\u30C1\u30A7\u30EA\u30F3\u30DC"
  },
  cherrim: {
    name: "\u30C1\u30A7\u30EA\u30E0"
  },
  shellos: {
    name: "\u30AB\u30E9\u30CA\u30AF\u30B7"
  },
  gastrodon: {
    name: "\u30C8\u30EA\u30C8\u30C9\u30F3"
  },
  ambipom: {
    name: "\u30A8\u30C6\u30DC\u30FC\u30B9"
  },
  drifloon: {
    name: "\u30D5\u30EF\u30F3\u30C6"
  },
  drifblim: {
    name: "\u30D5\u30EF\u30E9\u30A4\u30C9"
  },
  buneary: {
    name: "\u30DF\u30DF\u30ED\u30EB"
  },
  lopunny: {
    name: "\u30DF\u30DF\u30ED\u30C3\u30D7"
  },
  lopunnymega: {
    name: "\u30E1\u30AC\u30DF\u30DF\u30ED\u30C3\u30D7"
  },
  mismagius: {
    name: "\u30E0\u30A6\u30DE\u30FC\u30B8"
  },
  honchkrow: {
    name: "\u30C9\u30F3\u30AB\u30E9\u30B9"
  },
  glameow: {
    name: "\u30CB\u30E3\u30EB\u30DE\u30FC"
  },
  purugly: {
    name: "\u30D6\u30CB\u30E3\u30C3\u30C8"
  },
  chingling: {
    name: "\u30EA\u30FC\u30B7\u30E3\u30F3"
  },
  stunky: {
    name: "\u30B9\u30AB\u30F3\u30D7\u30FC"
  },
  skuntank: {
    name: "\u30B9\u30AB\u30BF\u30F3\u30AF"
  },
  bronzor: {
    name: "\u30C9\u30FC\u30DF\u30E9\u30FC"
  },
  bronzong: {
    name: "\u30C9\u30FC\u30BF\u30AF\u30F3"
  },
  bonsly: {
    name: "\u30A6\u30BD\u30CF\u30C1"
  },
  mimejr: {
    name: "\u30DE\u30CD\u30CD"
  },
  happiny: {
    name: "\u30D4\u30F3\u30D7\u30AF"
  },
  chatot: {
    name: "\u30DA\u30E9\u30C3\u30D7"
  },
  spiritomb: {
    name: "\u30DF\u30AB\u30EB\u30B2"
  },
  gible: {
    name: "\u30D5\u30AB\u30DE\u30EB"
  },
  gabite: {
    name: "\u30AC\u30D0\u30A4\u30C8"
  },
  garchomp: {
    name: "\u30AC\u30D6\u30EA\u30A2\u30B9"
  },
  garchompmega: {
    name: "\u30E1\u30AC\u30AC\u30D6\u30EA\u30A2\u30B9"
  },
  munchlax: {
    name: "\u30B4\u30F3\u30D9"
  },
  riolu: {
    name: "\u30EA\u30AA\u30EB"
  },
  lucario: {
    name: "\u30EB\u30AB\u30EA\u30AA"
  },
  lucariomega: {
    name: "\u30E1\u30AC\u30EB\u30AB\u30EA\u30AA"
  },
  hippopotas: {
    name: "\u30D2\u30DD\u30DD\u30BF\u30B9"
  },
  hippowdon: {
    name: "\u30AB\u30D0\u30EB\u30C9\u30F3"
  },
  skorupi: {
    name: "\u30B9\u30B3\u30EB\u30D4"
  },
  drapion: {
    name: "\u30C9\u30E9\u30D4\u30AA\u30F3"
  },
  croagunk: {
    name: "\u30B0\u30EC\u30C3\u30B0\u30EB"
  },
  toxicroak: {
    name: "\u30C9\u30AF\u30ED\u30C3\u30B0"
  },
  carnivine: {
    name: "\u30DE\u30B9\u30AD\u30C3\u30D1"
  },
  finneon: {
    name: "\u30B1\u30A4\u30B3\u30A6\u30AA"
  },
  lumineon: {
    name: "\u30CD\u30AA\u30E9\u30F3\u30C8"
  },
  mantyke: {
    name: "\u30BF\u30DE\u30F3\u30BF"
  },
  snover: {
    name: "\u30E6\u30AD\u30AB\u30D6\u30EA"
  },
  abomasnow: {
    name: "\u30E6\u30AD\u30CE\u30AA\u30FC"
  },
  abomasnowmega: {
    name: "\u30E1\u30AC\u30E6\u30AD\u30CE\u30AA\u30FC"
  },
  weavile: {
    name: "\u30DE\u30CB\u30E5\u30FC\u30E9"
  },
  magnezone: {
    name: "\u30B8\u30D0\u30B3\u30A4\u30EB"
  },
  lickilicky: {
    name: "\u30D9\u30ED\u30D9\u30EB\u30C8"
  },
  rhyperior: {
    name: "\u30C9\u30B5\u30A4\u30C9\u30F3"
  },
  tangrowth: {
    name: "\u30E2\u30B8\u30E3\u30F3\u30DC"
  },
  electivire: {
    name: "\u30A8\u30EC\u30AD\u30D6\u30EB"
  },
  magmortar: {
    name: "\u30D6\u30FC\u30D0\u30FC\u30F3"
  },
  togekiss: {
    name: "\u30C8\u30B2\u30AD\u30C3\u30B9"
  },
  yanmega: {
    name: "\u30E1\u30AC\u30E4\u30F3\u30DE"
  },
  leafeon: {
    name: "\u30EA\u30FC\u30D5\u30A3\u30A2"
  },
  glaceon: {
    name: "\u30B0\u30EC\u30A4\u30B7\u30A2"
  },
  gliscor: {
    name: "\u30B0\u30E9\u30A4\u30AA\u30F3"
  },
  mamoswine: {
    name: "\u30DE\u30F3\u30E0\u30FC"
  },
  porygonz: {
    name: "\u30DD\u30EA\u30B4\u30F3\uFF3A"
  },
  gallade: {
    name: "\u30A8\u30EB\u30EC\u30A4\u30C9"
  },
  gallademega: {
    name: "\u30E1\u30AC\u30A8\u30EB\u30EC\u30A4\u30C9"
  },
  probopass: {
    name: "\u30C0\u30A4\u30CE\u30FC\u30BA"
  },
  dusknoir: {
    name: "\u30E8\u30CE\u30EF\u30FC\u30EB"
  },
  froslass: {
    name: "\u30E6\u30AD\u30E1\u30CE\u30B3"
  },
  rotom: {
    name: "\u30ED\u30C8\u30E0"
  },
  rotomheat: {
    name: "\u30D2\u30FC\u30C8\u30ED\u30C8\u30E0"
  },
  rotomwash: {
    name: "\u30A6\u30A9\u30C3\u30B7\u30E5\u30ED\u30C8\u30E0"
  },
  rotomfrost: {
    name: "\u30D5\u30ED\u30B9\u30C8\u30ED\u30C8\u30E0"
  },
  rotomfan: {
    name: "\u30B9\u30D4\u30F3\u30ED\u30C8\u30E0"
  },
  rotommow: {
    name: "\u30AB\u30C3\u30C8\u30ED\u30C8\u30E0"
  },
  uxie: {
    name: "\u30E6\u30AF\u30B7\u30FC"
  },
  mesprit: {
    name: "\u30A8\u30E0\u30EA\u30C3\u30C8"
  },
  azelf: {
    name: "\u30A2\u30B0\u30CE\u30E0"
  },
  dialga: {
    name: "\u30C7\u30A3\u30A2\u30EB\u30AC"
  },
  dialgaorigin: {
    name: "\u30C7\u30A3\u30A2\u30EB\u30AC\uFF08\u30AA\u30EA\u30B8\u30F3\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  palkia: {
    name: "\u30D1\u30EB\u30AD\u30A2"
  },
  palkiaorigin: {
    name: "\u30D1\u30EB\u30AD\u30A2\uFF08\u30AA\u30EA\u30B8\u30F3\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  heatran: {
    name: "\u30D2\u30FC\u30C9\u30E9\u30F3"
  },
  regigigas: {
    name: "\u30EC\u30B8\u30AE\u30AC\u30B9"
  },
  giratina: {
    name: "\u30AE\u30E9\u30C6\u30A3\u30CA"
  },
  giratinaorigin: {
    name: "\u30AE\u30E9\u30C6\u30A3\u30CA\uFF08\u30AA\u30EA\u30B8\u30F3\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  cresselia: {
    name: "\u30AF\u30EC\u30BB\u30EA\u30A2"
  },
  phione: {
    name: "\u30D5\u30A3\u30AA\u30CD"
  },
  manaphy: {
    name: "\u30DE\u30CA\u30D5\u30A3"
  },
  darkrai: {
    name: "\u30C0\u30FC\u30AF\u30E9\u30A4"
  },
  shaymin: {
    name: "\u30B7\u30A7\u30A4\u30DF"
  },
  shayminsky: {
    name: "\u30B7\u30A7\u30A4\u30DF\uFF08\u30B9\u30AB\u30A4\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  arceus: {
    name: "\u30A2\u30EB\u30BB\u30A6\u30B9"
  },
  victini: {
    name: "\u30D3\u30AF\u30C6\u30A3\u30CB"
  },
  snivy: {
    name: "\u30C4\u30BF\u30FC\u30B8\u30E3"
  },
  servine: {
    name: "\u30B8\u30E3\u30CE\u30D3\u30FC"
  },
  serperior: {
    name: "\u30B8\u30E3\u30ED\u30FC\u30C0"
  },
  tepig: {
    name: "\u30DD\u30AB\u30D6"
  },
  pignite: {
    name: "\u30C1\u30E3\u30AA\u30D6\u30FC"
  },
  emboar: {
    name: "\u30A8\u30F3\u30D6\u30AA\u30FC"
  },
  oshawott: {
    name: "\u30DF\u30B8\u30E5\u30DE\u30EB"
  },
  dewott: {
    name: "\u30D5\u30BF\u30C1\u30DE\u30EB"
  },
  samurott: {
    name: "\u30C0\u30A4\u30B1\u30F3\u30AD"
  },
  samurotthisui: {
    name: "\u30C0\u30A4\u30B1\u30F3\u30AD\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  patrat: {
    name: "\u30DF\u30CD\u30BA\u30DF"
  },
  watchog: {
    name: "\u30DF\u30EB\u30DB\u30C3\u30B0"
  },
  lillipup: {
    name: "\u30E8\u30FC\u30C6\u30EA\u30FC"
  },
  herdier: {
    name: "\u30CF\u30FC\u30C7\u30EA\u30A2"
  },
  stoutland: {
    name: "\u30E0\u30FC\u30E9\u30F3\u30C9"
  },
  purrloin: {
    name: "\u30C1\u30E7\u30ED\u30CD\u30B3"
  },
  liepard: {
    name: "\u30EC\u30D1\u30EB\u30C0\u30B9"
  },
  pansage: {
    name: "\u30E4\u30CA\u30C3\u30D7"
  },
  simisage: {
    name: "\u30E4\u30CA\u30C3\u30AD\u30FC"
  },
  pansear: {
    name: "\u30D0\u30AA\u30C3\u30D7"
  },
  simisear: {
    name: "\u30D0\u30AA\u30C3\u30AD\u30FC"
  },
  panpour: {
    name: "\u30D2\u30E4\u30C3\u30D7"
  },
  simipour: {
    name: "\u30D2\u30E4\u30C3\u30AD\u30FC"
  },
  munna: {
    name: "\u30E0\u30F3\u30CA"
  },
  musharna: {
    name: "\u30E0\u30B7\u30E3\u30FC\u30CA"
  },
  pidove: {
    name: "\u30DE\u30E1\u30D1\u30C8"
  },
  tranquill: {
    name: "\u30CF\u30C8\u30FC\u30DC\u30FC"
  },
  unfezant: {
    name: "\u30B1\u30F3\u30DB\u30ED\u30A6"
  },
  blitzle: {
    name: "\u30B7\u30DE\u30DE"
  },
  zebstrika: {
    name: "\u30BC\u30D6\u30E9\u30A4\u30AB"
  },
  roggenrola: {
    name: "\u30C0\u30F3\u30B4\u30ED"
  },
  boldore: {
    name: "\u30AC\u30F3\u30C8\u30EB"
  },
  gigalith: {
    name: "\u30AE\u30AC\u30A4\u30A2\u30B9"
  },
  woobat: {
    name: "\u30B3\u30ED\u30E2\u30EA"
  },
  swoobat: {
    name: "\u30B3\u30B3\u30ED\u30E2\u30EA"
  },
  drilbur: {
    name: "\u30E2\u30B0\u30EA\u30E5\u30FC"
  },
  excadrill: {
    name: "\u30C9\u30EA\u30E5\u30A6\u30BA"
  },
  audino: {
    name: "\u30BF\u30D6\u30F3\u30CD"
  },
  audinomega: {
    name: "\u30E1\u30AC\u30BF\u30D6\u30F3\u30CD"
  },
  timburr: {
    name: "\u30C9\u30C3\u30B3\u30E9\u30FC"
  },
  gurdurr: {
    name: "\u30C9\u30C6\u30C3\u30B3\u30C4"
  },
  conkeldurr: {
    name: "\u30ED\u30FC\u30D6\u30B7\u30F3"
  },
  tympole: {
    name: "\u30AA\u30BF\u30DE\u30ED"
  },
  palpitoad: {
    name: "\u30AC\u30DE\u30AC\u30EB"
  },
  seismitoad: {
    name: "\u30AC\u30DE\u30B2\u30ED\u30B2"
  },
  throh: {
    name: "\u30CA\u30B2\u30AD"
  },
  sawk: {
    name: "\u30C0\u30B2\u30AD"
  },
  sewaddle: {
    name: "\u30AF\u30EB\u30DF\u30EB"
  },
  swadloon: {
    name: "\u30AF\u30EB\u30DE\u30E6"
  },
  leavanny: {
    name: "\u30CF\u30CF\u30B3\u30E2\u30EA"
  },
  venipede: {
    name: "\u30D5\u30B7\u30C7"
  },
  whirlipede: {
    name: "\u30DB\u30A4\u30FC\u30AC"
  },
  scolipede: {
    name: "\u30DA\u30F3\u30C9\u30E9\u30FC"
  },
  cottonee: {
    name: "\u30E2\u30F3\u30E1\u30F3"
  },
  whimsicott: {
    name: "\u30A8\u30EB\u30D5\u30FC\u30F3"
  },
  petilil: {
    name: "\u30C1\u30E5\u30EA\u30CD"
  },
  lilligant: {
    name: "\u30C9\u30EC\u30C7\u30A3\u30A2"
  },
  lilliganthisui: {
    name: "\u30C9\u30EC\u30C7\u30A3\u30A2\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  basculin: {
    name: "\u30D0\u30B9\u30E9\u30AA"
  },
  basculinbluestriped: {
    name: "\u30D0\u30B9\u30E9\u30AA\uFF08\u3042\u304A\u3059\u3058\u306E\u3059\u304C\u305F\uFF09"
  },
  basculinwhitestriped: {
    name: "\u30D0\u30B9\u30E9\u30AA\uFF08\u3057\u308D\u3059\u3058\u306E\u3059\u304C\u305F\uFF09"
  },
  sandile: {
    name: "\u30E1\u30B0\u30ED\u30B3"
  },
  krokorok: {
    name: "\u30EF\u30EB\u30D3\u30EB"
  },
  krookodile: {
    name: "\u30EF\u30EB\u30D3\u30A2\u30EB"
  },
  darumaka: {
    name: "\u30C0\u30EB\u30DE\u30C3\u30AB"
  },
  darumakagalar: {
    name: "\u30C0\u30EB\u30DE\u30C3\u30AB\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  darmanitan: {
    name: "\u30D2\u30D2\u30C0\u30EB\u30DE"
  },
  darmanitanzen: {
    name: "\u30D2\u30D2\u30C0\u30EB\u30DE\uFF08\u30C0\u30EB\u30DE\u30E2\u30FC\u30C9\uFF09"
  },
  darmanitangalarzen: {
    name: "\u30D2\u30D2\u30C0\u30EB\u30DE\uFF08\u30C0\u30EB\u30DE\u30E2\u30FC\u30C9\uFF09"
  },
  maractus: {
    name: "\u30DE\u30E9\u30AB\u30C3\u30C1"
  },
  dwebble: {
    name: "\u30A4\u30B7\u30BA\u30DE\u30A4"
  },
  crustle: {
    name: "\u30A4\u30EF\u30D1\u30EC\u30B9"
  },
  scraggy: {
    name: "\u30BA\u30EB\u30C3\u30B0"
  },
  scrafty: {
    name: "\u30BA\u30EB\u30BA\u30AD\u30F3"
  },
  sigilyph: {
    name: "\u30B7\u30F3\u30DC\u30E9\u30FC"
  },
  yamask: {
    name: "\u30C7\u30B9\u30DE\u30B9"
  },
  yamaskgalar: {
    name: "\u30C7\u30B9\u30DE\u30B9\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  cofagrigus: {
    name: "\u30C7\u30B9\u30AB\u30FC\u30F3"
  },
  tirtouga: {
    name: "\u30D7\u30ED\u30C8\u30FC\u30AC"
  },
  carracosta: {
    name: "\u30A2\u30D0\u30B4\u30FC\u30E9"
  },
  archen: {
    name: "\u30A2\u30FC\u30B1\u30F3"
  },
  archeops: {
    name: "\u30A2\u30FC\u30B1\u30AA\u30B9"
  },
  trubbish: {
    name: "\u30E4\u30D6\u30AF\u30ED\u30F3"
  },
  garbodor: {
    name: "\u30C0\u30B9\u30C8\u30C0\u30B9"
  },
  garbodorgmax: {
    name: "\u30C0\u30B9\u30C8\u30C0\u30B9\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  zorua: {
    name: "\u30BE\u30ED\u30A2"
  },
  zoruahisui: {
    name: "\u30BE\u30ED\u30A2\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  zoroark: {
    name: "\u30BE\u30ED\u30A2\u30FC\u30AF"
  },
  zoroarkhisui: {
    name: "\u30BE\u30ED\u30A2\u30FC\u30AF\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  minccino: {
    name: "\u30C1\u30E9\u30FC\u30DF\u30A3"
  },
  cinccino: {
    name: "\u30C1\u30E9\u30C1\u30FC\u30CE"
  },
  gothita: {
    name: "\u30B4\u30C1\u30E0"
  },
  gothorita: {
    name: "\u30B4\u30C1\u30DF\u30EB"
  },
  gothitelle: {
    name: "\u30B4\u30C1\u30EB\u30BC\u30EB"
  },
  solosis: {
    name: "\u30E6\u30CB\u30E9\u30F3"
  },
  duosion: {
    name: "\u30C0\u30D6\u30E9\u30F3"
  },
  reuniclus: {
    name: "\u30E9\u30F3\u30AF\u30EB\u30B9"
  },
  ducklett: {
    name: "\u30B3\u30A2\u30EB\u30D2\u30FC"
  },
  swanna: {
    name: "\u30B9\u30EF\u30F3\u30CA"
  },
  vanillite: {
    name: "\u30D0\u30CB\u30D7\u30C3\u30C1"
  },
  vanillish: {
    name: "\u30D0\u30CB\u30EA\u30C3\u30C1"
  },
  vanilluxe: {
    name: "\u30D0\u30A4\u30D0\u30CB\u30E9"
  },
  deerling: {
    name: "\u30B7\u30AD\u30B8\u30AB"
  },
  sawsbuck: {
    name: "\u30E1\u30D6\u30AD\u30B8\u30AB"
  },
  emolga: {
    name: "\u30A8\u30E2\u30F3\u30AC"
  },
  karrablast: {
    name: "\u30AB\u30D6\u30EB\u30E2"
  },
  escavalier: {
    name: "\u30B7\u30E5\u30D0\u30EB\u30B4"
  },
  foongus: {
    name: "\u30BF\u30DE\u30B2\u30BF\u30B1"
  },
  amoonguss: {
    name: "\u30E2\u30ED\u30D0\u30EC\u30EB"
  },
  frillish: {
    name: "\u30D7\u30EB\u30EA\u30EB"
  },
  jellicent: {
    name: "\u30D6\u30EB\u30F3\u30B2\u30EB"
  },
  alomomola: {
    name: "\u30DE\u30DE\u30F3\u30DC\u30A6"
  },
  joltik: {
    name: "\u30D0\u30C1\u30E5\u30EB"
  },
  galvantula: {
    name: "\u30C7\u30F3\u30C1\u30E5\u30E9"
  },
  ferroseed: {
    name: "\u30C6\u30C3\u30B7\u30FC\u30C9"
  },
  ferrothorn: {
    name: "\u30CA\u30C3\u30C8\u30EC\u30A4"
  },
  klink: {
    name: "\u30AE\u30A2\u30EB"
  },
  klang: {
    name: "\u30AE\u30AE\u30A2\u30EB"
  },
  klinklang: {
    name: "\u30AE\u30AE\u30AE\u30A2\u30EB"
  },
  tynamo: {
    name: "\u30B7\u30D3\u30B7\u30E9\u30B9"
  },
  eelektrik: {
    name: "\u30B7\u30D3\u30D3\u30FC\u30EB"
  },
  eelektross: {
    name: "\u30B7\u30D3\u30EB\u30C9\u30F3"
  },
  elgyem: {
    name: "\u30EA\u30B0\u30EC\u30FC"
  },
  beheeyem: {
    name: "\u30AA\u30FC\u30D9\u30E0"
  },
  litwick: {
    name: "\u30D2\u30C8\u30E2\u30B7"
  },
  lampent: {
    name: "\u30E9\u30F3\u30D7\u30E9\u30FC"
  },
  chandelure: {
    name: "\u30B7\u30E3\u30F3\u30C7\u30E9"
  },
  axew: {
    name: "\u30AD\u30D0\u30B4"
  },
  fraxure: {
    name: "\u30AA\u30CE\u30F3\u30C9"
  },
  haxorus: {
    name: "\u30AA\u30CE\u30CE\u30AF\u30B9"
  },
  cubchoo: {
    name: "\u30AF\u30DE\u30B7\u30E5\u30F3"
  },
  beartic: {
    name: "\u30C4\u30F3\u30D9\u30A2\u30FC"
  },
  cryogonal: {
    name: "\u30D5\u30EA\u30FC\u30B8\u30AA"
  },
  shelmet: {
    name: "\u30C1\u30E7\u30DC\u30DE\u30AD"
  },
  accelgor: {
    name: "\u30A2\u30AE\u30EB\u30C0\u30FC"
  },
  stunfisk: {
    name: "\u30DE\u30C3\u30AE\u30E7"
  },
  stunfiskgalar: {
    name: "\u30DE\u30C3\u30AE\u30E7\uFF08\u30AC\u30E9\u30EB\u306E\u3059\u304C\u305F\uFF09"
  },
  mienfoo: {
    name: "\u30B3\u30B8\u30E7\u30D5\u30FC"
  },
  mienshao: {
    name: "\u30B3\u30B8\u30E7\u30F3\u30C9"
  },
  druddigon: {
    name: "\u30AF\u30EA\u30E0\u30AC\u30F3"
  },
  golett: {
    name: "\u30B4\u30D3\u30C3\u30C8"
  },
  golurk: {
    name: "\u30B4\u30EB\u30FC\u30B0"
  },
  pawniard: {
    name: "\u30B3\u30DE\u30BF\u30CA"
  },
  bisharp: {
    name: "\u30AD\u30EA\u30AD\u30B6\u30F3"
  },
  bouffalant: {
    name: "\u30D0\u30C3\u30D5\u30ED\u30F3"
  },
  rufflet: {
    name: "\u30EF\u30B7\u30DC\u30F3"
  },
  braviary: {
    name: "\u30A6\u30A9\u30FC\u30B0\u30EB"
  },
  braviaryhisui: {
    name: "\u30A6\u30A9\u30FC\u30B0\u30EB\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  vullaby: {
    name: "\u30D0\u30EB\u30C1\u30E3\u30A4"
  },
  mandibuzz: {
    name: "\u30D0\u30EB\u30B8\u30FC\u30CA"
  },
  heatmor: {
    name: "\u30AF\u30A4\u30BF\u30E9\u30F3"
  },
  durant: {
    name: "\u30A2\u30A4\u30A2\u30F3\u30C8"
  },
  deino: {
    name: "\u30E2\u30CE\u30BA"
  },
  zweilous: {
    name: "\u30B8\u30D8\u30C3\u30C9"
  },
  hydreigon: {
    name: "\u30B5\u30B6\u30F3\u30C9\u30E9"
  },
  larvesta: {
    name: "\u30E1\u30E9\u30EB\u30D0"
  },
  volcarona: {
    name: "\u30A6\u30EB\u30AC\u30E2\u30B9"
  },
  cobalion: {
    name: "\u30B3\u30D0\u30EB\u30AA\u30F3"
  },
  terrakion: {
    name: "\u30C6\u30E9\u30AD\u30AA\u30F3"
  },
  virizion: {
    name: "\u30D3\u30EA\u30B8\u30AA\u30F3"
  },
  tornadus: {
    name: "\u30C8\u30EB\u30CD\u30ED\u30B9"
  },
  tornadustherian: {
    name: "\u30C8\u30EB\u30CD\u30ED\u30B9\uFF08\u308C\u3044\u3058\u3085\u3046\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  thundurus: {
    name: "\u30DC\u30EB\u30C8\u30ED\u30B9"
  },
  thundurustherian: {
    name: "\u30DC\u30EB\u30C8\u30ED\u30B9\uFF08\u308C\u3044\u3058\u3085\u3046\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  reshiram: {
    name: "\u30EC\u30B7\u30E9\u30E0"
  },
  zekrom: {
    name: "\u30BC\u30AF\u30ED\u30E0"
  },
  landorus: {
    name: "\u30E9\u30F3\u30C9\u30ED\u30B9"
  },
  landorustherian: {
    name: "\u30E9\u30F3\u30C9\u30ED\u30B9\uFF08\u308C\u3044\u3058\u3085\u3046\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  kyurem: {
    name: "\u30AD\u30E5\u30EC\u30E0"
  },
  kyuremblack: {
    name: "\u30D6\u30E9\u30C3\u30AF\u30AD\u30E5\u30EC\u30E0"
  },
  kyuremwhite: {
    name: "\u30DB\u30EF\u30A4\u30C8\u30AD\u30E5\u30EC\u30E0"
  },
  keldeo: {
    name: "\u30B1\u30EB\u30C7\u30A3\u30AA"
  },
  keldeoresolute: {
    name: "\u30B1\u30EB\u30C7\u30A3\u30AA\uFF08\u304B\u304F\u3054\u306E\u3059\u304C\u305F\uFF09"
  },
  meloetta: {
    name: "\u30E1\u30ED\u30A8\u30C3\u30BF"
  },
  meloettapirouette: {
    name: "\u30E1\u30ED\u30A8\u30C3\u30BF\uFF08\u30B9\u30C6\u30C3\u30D7\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  genesect: {
    name: "\u30B2\u30CE\u30BB\u30AF\u30C8"
  },
  chespin: {
    name: "\u30CF\u30EA\u30DE\u30ED\u30F3"
  },
  quilladin: {
    name: "\u30CF\u30EA\u30DC\u30FC\u30B0"
  },
  chesnaught: {
    name: "\u30D6\u30EA\u30AC\u30ED\u30F3"
  },
  fennekin: {
    name: "\u30D5\u30A9\u30C3\u30B3"
  },
  braixen: {
    name: "\u30C6\u30FC\u30EB\u30CA\u30FC"
  },
  delphox: {
    name: "\u30DE\u30D5\u30A9\u30AF\u30B7\u30FC"
  },
  froakie: {
    name: "\u30B1\u30ED\u30DE\u30C4"
  },
  frogadier: {
    name: "\u30B2\u30B3\u30AC\u30B7\u30E9"
  },
  greninja: {
    name: "\u30B2\u30C3\u30B3\u30A6\u30AC"
  },
  greninjaash: {
    name: "\u30B5\u30C8\u30B7\u30B2\u30C3\u30B3\u30A6\u30AC"
  },
  bunnelby: {
    name: "\u30DB\u30EB\u30D3\u30FC"
  },
  diggersby: {
    name: "\u30DB\u30EB\u30FC\u30C9"
  },
  fletchling: {
    name: "\u30E4\u30E4\u30B3\u30DE"
  },
  fletchinder: {
    name: "\u30D2\u30CE\u30E4\u30B3\u30DE"
  },
  talonflame: {
    name: "\u30D5\u30A1\u30A4\u30A2\u30ED\u30FC"
  },
  scatterbug: {
    name: "\u30B3\u30D5\u30AD\u30E0\u30B7"
  },
  spewpa: {
    name: "\u30B3\u30D5\u30FC\u30E9\u30A4"
  },
  vivillon: {
    name: "\u30D3\u30D3\u30E8\u30F3"
  },
  litleo: {
    name: "\u30B7\u30B7\u30B3"
  },
  pyroar: {
    name: "\u30AB\u30A8\u30F3\u30B8\u30B7"
  },
  flabebe: {
    name: "\u30D5\u30E9\u30D9\u30D9"
  },
  floette: {
    name: "\u30D5\u30E9\u30A8\u30C3\u30C6"
  },
  floetteeternal: {
    name: "\u30D5\u30E9\u30A8\u30C3\u30C6\uFF08\u3048\u3044\u3048\u3093\u306E\u306F\u306A\uFF09"
  },
  florges: {
    name: "\u30D5\u30E9\u30FC\u30B8\u30A7\u30B9"
  },
  skiddo: {
    name: "\u30E1\u30A7\u30FC\u30AF\u30EB"
  },
  gogoat: {
    name: "\u30B4\u30FC\u30B4\u30FC\u30C8"
  },
  pancham: {
    name: "\u30E4\u30F3\u30C1\u30E3\u30E0"
  },
  pangoro: {
    name: "\u30B4\u30ED\u30F3\u30C0"
  },
  furfrou: {
    name: "\u30C8\u30EA\u30DF\u30A2\u30F3"
  },
  espurr: {
    name: "\u30CB\u30E3\u30B9\u30D1\u30FC"
  },
  meowstic: {
    name: "\u30CB\u30E3\u30AA\u30CB\u30AF\u30B9"
  },
  honedge: {
    name: "\u30D2\u30C8\u30C4\u30AD"
  },
  doublade: {
    name: "\u30CB\u30C0\u30F3\u30AE\u30EB"
  },
  aegislash: {
    name: "\u30AE\u30EB\u30AC\u30EB\u30C9"
  },
  aegislashblade: {
    name: "\u30AE\u30EB\u30AC\u30EB\u30C9\uFF08\u30D6\u30EC\u30FC\u30C9\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  spritzee: {
    name: "\u30B7\u30E5\u30B7\u30E5\u30D7"
  },
  aromatisse: {
    name: "\u30D5\u30EC\u30D5\u30EF\u30F3"
  },
  swirlix: {
    name: "\u30DA\u30ED\u30C3\u30D1\u30D5"
  },
  slurpuff: {
    name: "\u30DA\u30ED\u30EA\u30FC\u30E0"
  },
  inkay: {
    name: "\u30DE\u30FC\u30A4\u30FC\u30AB"
  },
  malamar: {
    name: "\u30AB\u30E9\u30DE\u30CD\u30ED"
  },
  binacle: {
    name: "\u30AB\u30E1\u30C6\u30C6"
  },
  barbaracle: {
    name: "\u30AC\u30E1\u30CE\u30C7\u30B9"
  },
  skrelp: {
    name: "\u30AF\u30BA\u30E2\u30FC"
  },
  dragalge: {
    name: "\u30C9\u30E9\u30DF\u30C9\u30ED"
  },
  clauncher: {
    name: "\u30A6\u30C7\u30C3\u30DD\u30A6"
  },
  clawitzer: {
    name: "\u30D6\u30ED\u30B9\u30BF\u30FC"
  },
  helioptile: {
    name: "\u30A8\u30EA\u30AD\u30C6\u30EB"
  },
  heliolisk: {
    name: "\u30A8\u30EC\u30B6\u30FC\u30C9"
  },
  tyrunt: {
    name: "\u30C1\u30B4\u30E9\u30B9"
  },
  tyrantrum: {
    name: "\u30AC\u30C1\u30B4\u30E9\u30B9"
  },
  amaura: {
    name: "\u30A2\u30DE\u30EB\u30B9"
  },
  aurorus: {
    name: "\u30A2\u30DE\u30EB\u30EB\u30AC"
  },
  sylveon: {
    name: "\u30CB\u30F3\u30D5\u30A3\u30A2"
  },
  hawlucha: {
    name: "\u30EB\u30C1\u30E3\u30D6\u30EB"
  },
  dedenne: {
    name: "\u30C7\u30C7\u30F3\u30CD"
  },
  carbink: {
    name: "\u30E1\u30EC\u30B7\u30FC"
  },
  goomy: {
    name: "\u30CC\u30E1\u30E9"
  },
  sliggoo: {
    name: "\u30CC\u30E1\u30A4\u30EB"
  },
  sliggoohisui: {
    name: "\u30CC\u30E1\u30A4\u30EB\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  goodra: {
    name: "\u30CC\u30E1\u30EB\u30B4\u30F3"
  },
  goodrahisui: {
    name: "\u30CC\u30E1\u30EB\u30B4\u30F3\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  klefki: {
    name: "\u30AF\u30EC\u30C3\u30D5\u30A3"
  },
  phantump: {
    name: "\u30DC\u30AF\u30EC\u30FC"
  },
  trevenant: {
    name: "\u30AA\u30FC\u30ED\u30C3\u30C8"
  },
  pumpkaboo: {
    name: "\u30D0\u30B1\u30C3\u30C1\u30E3"
  },
  pumpkaboosmall: {
    name: "\u30D0\u30B1\u30C3\u30C1\u30E3\uFF08\u3061\u3044\u3055\u3044\u30B5\u30A4\u30BA\uFF09"
  },
  pumpkaboolarge: {
    name: "\u30D0\u30B1\u30C3\u30C1\u30E3\uFF08\u304A\u304A\u304D\u3044\u30B5\u30A4\u30BA\uFF09"
  },
  pumpkaboosuper: {
    name: "\u30D0\u30B1\u30C3\u30C1\u30E3\uFF08\u3068\u304F\u3060\u3044\u30B5\u30A4\u30BA\uFF09"
  },
  gourgeist: {
    name: "\u30D1\u30F3\u30D7\u30B8\u30F3"
  },
  gourgeistsmall: {
    name: "\u30D1\u30F3\u30D7\u30B8\u30F3\uFF08\u3061\u3044\u3055\u3044\u30B5\u30A4\u30BA\uFF09"
  },
  gourgeistlarge: {
    name: "\u30D1\u30F3\u30D7\u30B8\u30F3\uFF08\u304A\u304A\u304D\u3044\u30B5\u30A4\u30BA\uFF09"
  },
  gourgeistsuper: {
    name: "\u30D1\u30F3\u30D7\u30B8\u30F3\uFF08\u3068\u304F\u3060\u3044\u30B5\u30A4\u30BA\uFF09"
  },
  bergmite: {
    name: "\u30AB\u30C1\u30B3\u30FC\u30EB"
  },
  avalugg: {
    name: "\u30AF\u30EC\u30D9\u30FC\u30B9"
  },
  avalugghisui: {
    name: "\u30AF\u30EC\u30D9\u30FC\u30B9\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  noibat: {
    name: "\u30AA\u30F3\u30D0\u30C3\u30C8"
  },
  noivern: {
    name: "\u30AA\u30F3\u30D0\u30FC\u30F3"
  },
  xerneas: {
    name: "\u30BC\u30EB\u30CD\u30A2\u30B9"
  },
  yveltal: {
    name: "\u30A4\u30D9\u30EB\u30BF\u30EB"
  },
  zygarde: {
    name: "\u30B8\u30AC\u30EB\u30C7"
  },
  zygarde10: {
    name: "\u30B8\u30AC\u30EB\u30C7\uFF08\uFF11\uFF10\uFF05\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  zygardecomplete: {
    name: "\u30B8\u30AC\u30EB\u30C7\uFF08\u30D1\u30FC\u30D5\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  diancie: {
    name: "\u30C7\u30A3\u30A2\u30F3\u30B7\u30FC"
  },
  dianciemega: {
    name: "\u30E1\u30AC\u30C7\u30A3\u30A2\u30F3\u30B7\u30FC"
  },
  hoopa: {
    name: "\u30D5\u30FC\u30D1"
  },
  hoopaunbound: {
    name: "\u3068\u304D\u306F\u306A\u305F\u308C\u3057\u30D5\u30FC\u30D1"
  },
  volcanion: {
    name: "\u30DC\u30EB\u30B1\u30CB\u30AA\u30F3"
  },
  rowlet: {
    name: "\u30E2\u30AF\u30ED\u30FC"
  },
  dartrix: {
    name: "\u30D5\u30AF\u30B9\u30ED\u30FC"
  },
  decidueye: {
    name: "\u30B8\u30E5\u30CA\u30A4\u30D1\u30FC"
  },
  decidueyehisui: {
    name: "\u30B8\u30E5\u30CA\u30A4\u30D1\u30FC\uFF08\u30D2\u30B9\u30A4\u306E\u3059\u304C\u305F\uFF09"
  },
  litten: {
    name: "\u30CB\u30E3\u30D3\u30FC"
  },
  torracat: {
    name: "\u30CB\u30E3\u30D2\u30FC\u30C8"
  },
  incineroar: {
    name: "\u30AC\u30AA\u30AC\u30A8\u30F3"
  },
  popplio: {
    name: "\u30A2\u30B7\u30DE\u30EA"
  },
  brionne: {
    name: "\u30AA\u30B7\u30E3\u30DE\u30EA"
  },
  primarina: {
    name: "\u30A2\u30B7\u30EC\u30FC\u30CC"
  },
  pikipek: {
    name: "\u30C4\u30C4\u30B1\u30E9"
  },
  trumbeak: {
    name: "\u30B1\u30E9\u30E9\u30C3\u30D1"
  },
  toucannon: {
    name: "\u30C9\u30C7\u30AB\u30D0\u30B7"
  },
  yungoos: {
    name: "\u30E4\u30F3\u30B0\u30FC\u30B9"
  },
  gumshoos: {
    name: "\u30C7\u30AB\u30B0\u30FC\u30B9"
  },
  grubbin: {
    name: "\u30A2\u30B4\u30B8\u30E0\u30B7"
  },
  charjabug: {
    name: "\u30C7\u30F3\u30C2\u30E0\u30B7"
  },
  vikavolt: {
    name: "\u30AF\u30EF\u30AC\u30CE\u30F3"
  },
  crabrawler: {
    name: "\u30DE\u30B1\u30F3\u30AB\u30CB"
  },
  crabominable: {
    name: "\u30B1\u30B1\u30F3\u30AB\u30CB"
  },
  oricorio: {
    name: "\u30AA\u30C9\u30EA\u30C9\u30EA"
  },
  oricoriopompom: {
    name: "\u30AA\u30C9\u30EA\u30C9\u30EA\uFF08\u3071\u3061\u3071\u3061\u30B9\u30BF\u30A4\u30EB\uFF09"
  },
  oricoriopau: {
    name: "\u30AA\u30C9\u30EA\u30C9\u30EA\uFF08\u3075\u3089\u3075\u3089\u30B9\u30BF\u30A4\u30EB\uFF09"
  },
  oricoriosensu: {
    name: "\u30AA\u30C9\u30EA\u30C9\u30EA\uFF08\u307E\u3044\u307E\u3044\u30B9\u30BF\u30A4\u30EB\uFF09"
  },
  cutiefly: {
    name: "\u30A2\u30D6\u30EA\u30FC"
  },
  ribombee: {
    name: "\u30A2\u30D6\u30EA\u30DC\u30F3"
  },
  rockruff: {
    name: "\u30A4\u30EF\u30F3\u30B3"
  },
  lycanroc: {
    name: "\u30EB\u30AC\u30EB\u30AC\u30F3"
  },
  lycanrocmidnight: {
    name: "\u30EB\u30AC\u30EB\u30AC\u30F3\uFF08\u307E\u3088\u306A\u304B\u306E\u3059\u304C\u305F\uFF09"
  },
  lycanrocdusk: {
    name: "\u30EB\u30AC\u30EB\u30AC\u30F3\uFF08\u305F\u305D\u304C\u308C\u306E\u3059\u304C\u305F\uFF09"
  },
  wishiwashi: {
    name: "\u30E8\u30EF\u30B7"
  },
  wishiwashischool: {
    name: "\u30E8\u30EF\u30B7\uFF08\u3080\u308C\u305F\u3059\u304C\u305F\uFF09"
  },
  mareanie: {
    name: "\u30D2\u30C9\u30A4\u30C7"
  },
  toxapex: {
    name: "\u30C9\u30D2\u30C9\u30A4\u30C7"
  },
  mudbray: {
    name: "\u30C9\u30ED\u30D0\u30F3\u30B3"
  },
  mudsdale: {
    name: "\u30D0\u30F3\u30D0\u30C9\u30ED"
  },
  dewpider: {
    name: "\u30B7\u30BA\u30AF\u30E2"
  },
  araquanid: {
    name: "\u30AA\u30CB\u30B7\u30BA\u30AF\u30E2"
  },
  fomantis: {
    name: "\u30AB\u30EA\u30AD\u30EA"
  },
  lurantis: {
    name: "\u30E9\u30E9\u30F3\u30C6\u30B9"
  },
  morelull: {
    name: "\u30CD\u30DE\u30B7\u30E5"
  },
  shiinotic: {
    name: "\u30DE\u30B7\u30A7\u30FC\u30C9"
  },
  salandit: {
    name: "\u30E4\u30C8\u30A6\u30E2\u30EA"
  },
  salazzle: {
    name: "\u30A8\u30F3\u30CB\u30E5\u30FC\u30C8"
  },
  stufful: {
    name: "\u30CC\u30A4\u30B3\u30B0\u30DE"
  },
  bewear: {
    name: "\u30AD\u30C6\u30EB\u30B0\u30DE"
  },
  bounsweet: {
    name: "\u30A2\u30DE\u30AB\u30B8"
  },
  steenee: {
    name: "\u30A2\u30DE\u30DE\u30A4\u30B3"
  },
  tsareena: {
    name: "\u30A2\u30DE\u30FC\u30B8\u30E7"
  },
  comfey: {
    name: "\u30AD\u30E5\u30EF\u30EF\u30FC"
  },
  oranguru: {
    name: "\u30E4\u30EC\u30E6\u30FC\u30BF\u30F3"
  },
  passimian: {
    name: "\u30CA\u30B2\u30C4\u30B1\u30B5\u30EB"
  },
  wimpod: {
    name: "\u30B3\u30BD\u30AF\u30E0\u30B7"
  },
  golisopod: {
    name: "\u30B0\u30BD\u30AF\u30E0\u30B7\u30E3"
  },
  sandygast: {
    name: "\u30B9\u30CA\u30D0\u30A1"
  },
  palossand: {
    name: "\u30B7\u30ED\u30C7\u30B9\u30CA"
  },
  pyukumuku: {
    name: "\u30CA\u30DE\u30B3\u30D6\u30B7"
  },
  typenull: {
    name: "\u30BF\u30A4\u30D7\uFF1A\u30CC\u30EB"
  },
  silvally: {
    name: "\u30B7\u30EB\u30F4\u30A1\u30C7\u30A3"
  },
  minior: {
    name: "\u30E1\u30C6\u30CE"
  },
  komala: {
    name: "\u30CD\u30C3\u30B3\u30A2\u30E9"
  },
  turtonator: {
    name: "\u30D0\u30AF\u30AC\u30E1\u30B9"
  },
  togedemaru: {
    name: "\u30C8\u30B2\u30C7\u30DE\u30EB"
  },
  mimikyu: {
    name: "\u30DF\u30DF\u30C3\u30AD\u30E5"
  },
  mimikyubusted: {
    name: "\u30DF\u30DF\u30C3\u30AD\u30E5\uFF08\u3070\u308C\u305F\u3059\u304C\u305F\uFF09"
  },
  bruxish: {
    name: "\u30CF\u30AE\u30AE\u30B7\u30EA"
  },
  drampa: {
    name: "\u30B8\u30B8\u30FC\u30ED\u30F3"
  },
  dhelmise: {
    name: "\u30C0\u30C0\u30EA\u30F3"
  },
  jangmoo: {
    name: "\u30B8\u30E3\u30E9\u30B3"
  },
  hakamoo: {
    name: "\u30B8\u30E3\u30E9\u30F3\u30B4"
  },
  kommoo: {
    name: "\u30B8\u30E3\u30E9\u30E9\u30F3\u30AC"
  },
  tapukoko: {
    name: "\u30AB\u30D7\u30FB\u30B3\u30B1\u30B3"
  },
  tapulele: {
    name: "\u30AB\u30D7\u30FB\u30C6\u30C6\u30D5"
  },
  tapubulu: {
    name: "\u30AB\u30D7\u30FB\u30D6\u30EB\u30EB"
  },
  tapufini: {
    name: "\u30AB\u30D7\u30FB\u30EC\u30D2\u30EC"
  },
  cosmog: {
    name: "\u30B3\u30B9\u30E2\u30C3\u30B0"
  },
  cosmoem: {
    name: "\u30B3\u30B9\u30E2\u30A6\u30E0"
  },
  solgaleo: {
    name: "\u30BD\u30EB\u30AC\u30EC\u30AA"
  },
  lunala: {
    name: "\u30EB\u30CA\u30A2\u30FC\u30E9"
  },
  nihilego: {
    name: "\u30A6\u30C4\u30ED\u30A4\u30C9"
  },
  buzzwole: {
    name: "\u30DE\u30C3\u30B7\u30D6\u30FC\u30F3"
  },
  pheromosa: {
    name: "\u30D5\u30A7\u30ED\u30FC\u30C1\u30A7"
  },
  xurkitree: {
    name: "\u30C7\u30F3\u30B8\u30E5\u30E2\u30AF"
  },
  celesteela: {
    name: "\u30C6\u30C3\u30AB\u30B0\u30E4"
  },
  kartana: {
    name: "\u30AB\u30DF\u30C4\u30EB\u30AE"
  },
  guzzlord: {
    name: "\u30A2\u30AF\u30B8\u30AD\u30F3\u30B0"
  },
  necrozma: {
    name: "\u30CD\u30AF\u30ED\u30BA\u30DE"
  },
  necrozmaultra: {
    name: "\u30A6\u30EB\u30C8\u30E9\u30CD\u30AF\u30ED\u30BA\u30DE"
  },
  magearna: {
    name: "\u30DE\u30AE\u30A2\u30CA"
  },
  magearnaoriginal: {
    name: "\u30DE\u30AE\u30A2\u30CA\uFF08\uFF15\uFF10\uFF10\u306D\u3093\u307E\u3048\u306E\u3044\u308D\uFF09"
  },
  marshadow: {
    name: "\u30DE\u30FC\u30B7\u30E3\u30C9\u30FC"
  },
  poipole: {
    name: "\u30D9\u30D9\u30CE\u30E0"
  },
  naganadel: {
    name: "\u30A2\u30FC\u30B4\u30E8\u30F3"
  },
  stakataka: {
    name: "\u30C4\u30F3\u30C7\u30C4\u30F3\u30C7"
  },
  blacephalon: {
    name: "\u30BA\u30AC\u30C9\u30FC\u30F3"
  },
  zeraora: {
    name: "\u30BC\u30E9\u30AA\u30E9"
  },
  meltan: {
    name: "\u30E1\u30EB\u30BF\u30F3"
  },
  melmetal: {
    name: "\u30E1\u30EB\u30E1\u30BF\u30EB"
  },
  melmetalgmax: {
    name: "\u30E1\u30EB\u30E1\u30BF\u30EB\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  grookey: {
    name: "\u30B5\u30EB\u30CE\u30EA"
  },
  thwackey: {
    name: "\u30D0\u30C1\u30F3\u30AD\u30FC"
  },
  rillaboom: {
    name: "\u30B4\u30EA\u30E9\u30F3\u30C0\u30FC"
  },
  rillaboomgmax: {
    name: "\u30B4\u30EA\u30E9\u30F3\u30C0\u30FC\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  scorbunny: {
    name: "\u30D2\u30D0\u30CB\u30FC"
  },
  raboot: {
    name: "\u30E9\u30D3\u30D5\u30C3\u30C8"
  },
  cinderace: {
    name: "\u30A8\u30FC\u30B9\u30D0\u30FC\u30F3"
  },
  cinderacegmax: {
    name: "\u30A8\u30FC\u30B9\u30D0\u30FC\u30F3\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  sobble: {
    name: "\u30E1\u30C3\u30BD\u30F3"
  },
  drizzile: {
    name: "\u30B8\u30E1\u30EC\u30AA\u30F3"
  },
  inteleon: {
    name: "\u30A4\u30F3\u30C6\u30EC\u30AA\u30F3"
  },
  inteleongmax: {
    name: "\u30A4\u30F3\u30C6\u30EC\u30AA\u30F3\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  skwovet: {
    name: "\u30DB\u30B7\u30AC\u30EA\u30B9"
  },
  greedent: {
    name: "\u30E8\u30AF\u30D0\u30EA\u30B9"
  },
  rookidee: {
    name: "\u30B3\u30B3\u30AC\u30E9"
  },
  corvisquire: {
    name: "\u30A2\u30AA\u30AC\u30E9\u30B9"
  },
  corviknight: {
    name: "\u30A2\u30FC\u30DE\u30FC\u30AC\u30A2"
  },
  corviknightgmax: {
    name: "\u30A2\u30FC\u30DE\u30FC\u30AC\u30A2\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  blipbug: {
    name: "\u30B5\u30C3\u30C1\u30E0\u30B7"
  },
  dottler: {
    name: "\u30EC\u30C9\u30FC\u30E0\u30B7"
  },
  orbeetle: {
    name: "\u30A4\u30AA\u30EB\u30D6"
  },
  orbeetlegmax: {
    name: "\u30A4\u30AA\u30EB\u30D6\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  nickit: {
    name: "\u30AF\u30B9\u30CD"
  },
  thievul: {
    name: "\u30D5\u30A9\u30AF\u30B9\u30E9\u30A4"
  },
  gossifleur: {
    name: "\u30D2\u30E1\u30F3\u30AB"
  },
  eldegoss: {
    name: "\u30EF\u30BF\u30B7\u30E9\u30AC"
  },
  wooloo: {
    name: "\u30A6\u30FC\u30EB\u30FC"
  },
  dubwool: {
    name: "\u30D0\u30A4\u30A6\u30FC\u30EB\u30FC"
  },
  chewtle: {
    name: "\u30AB\u30E0\u30AB\u30E1"
  },
  drednaw: {
    name: "\u30AB\u30B8\u30EA\u30AC\u30E1"
  },
  drednawgmax: {
    name: "\u30AB\u30B8\u30EA\u30AC\u30E1\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  yamper: {
    name: "\u30EF\u30F3\u30D1\u30C1"
  },
  boltund: {
    name: "\u30D1\u30EB\u30B9\u30EF\u30F3"
  },
  rolycoly: {
    name: "\u30BF\u30F3\u30C9\u30F3"
  },
  carkol: {
    name: "\u30C8\u30ED\u30C3\u30B4\u30F3"
  },
  coalossal: {
    name: "\u30BB\u30AD\u30BF\u30F3\u30B6\u30F3"
  },
  coalossalgmax: {
    name: "\u30BB\u30AD\u30BF\u30F3\u30B6\u30F3\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  applin: {
    name: "\u30AB\u30B8\u30C3\u30C1\u30E5"
  },
  flapple: {
    name: "\u30A2\u30C3\u30D7\u30EA\u30E5\u30FC"
  },
  flapplegmax: {
    name: "\u30A2\u30C3\u30D7\u30EA\u30E5\u30FC\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  appletun: {
    name: "\u30BF\u30EB\u30C3\u30D7\u30EB"
  },
  appletungmax: {
    name: "\u30BF\u30EB\u30C3\u30D7\u30EB\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  silicobra: {
    name: "\u30B9\u30CA\u30D8\u30D3"
  },
  sandaconda: {
    name: "\u30B5\u30C0\u30A4\u30B8\u30E3"
  },
  sandacondagmax: {
    name: "\u30B5\u30C0\u30A4\u30B8\u30E3\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  cramorant: {
    name: "\u30A6\u30C3\u30A6"
  },
  cramorantgulping: {
    name: "\u30A6\u30C3\u30A6\uFF08\u3046\u306E\u307F\u306E\u3059\u304C\u305F\uFF09"
  },
  cramorantgorging: {
    name: "\u30A6\u30C3\u30A6\uFF08\u307E\u308B\u306E\u307F\u306E\u3059\u304C\u305F\uFF09"
  },
  arrokuda: {
    name: "\u30B5\u30B7\u30AB\u30DE\u30B9"
  },
  barraskewda: {
    name: "\u30AB\u30DE\u30B9\u30B8\u30E7\u30FC"
  },
  toxel: {
    name: "\u30A8\u30EC\u30BA\u30F3"
  },
  toxtricity: {
    name: "\u30B9\u30C8\u30EA\u30F3\u30C0\u30FC"
  },
  toxtricitylowkey: {
    name: "\u30B9\u30C8\u30EA\u30F3\u30C0\u30FC\uFF08\u30ED\u30FC\u306A\u3059\u304C\u305F\uFF09"
  },
  toxtricitylowkeygmax: {
    name: "\u30B9\u30C8\u30EA\u30F3\u30C0\u30FC\uFF08\u30ED\u30FC\u306A\u3059\u304C\u305F\u30FB\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  sizzlipede: {
    name: "\u30E4\u30AF\u30C7"
  },
  centiskorch: {
    name: "\u30DE\u30EB\u30E4\u30AF\u30C7"
  },
  centiskorchgmax: {
    name: "\u30DE\u30EB\u30E4\u30AF\u30C7\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  clobbopus: {
    name: "\u30BF\u30BF\u30C3\u30B3"
  },
  grapploct: {
    name: "\u30AA\u30C8\u30B9\u30D1\u30B9"
  },
  sinistea: {
    name: "\u30E4\u30D0\u30C1\u30E3"
  },
  polteageist: {
    name: "\u30DD\u30C3\u30C8\u30C7\u30B9"
  },
  hatenna: {
    name: "\u30DF\u30D6\u30EA\u30E0"
  },
  hattrem: {
    name: "\u30C6\u30D6\u30EA\u30E0"
  },
  hatterene: {
    name: "\u30D6\u30EA\u30E0\u30AA\u30F3"
  },
  hatterenegmax: {
    name: "\u30D6\u30EA\u30E0\u30AA\u30F3\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  impidimp: {
    name: "\u30D9\u30ED\u30D0\u30FC"
  },
  morgrem: {
    name: "\u30AE\u30E2\u30FC"
  },
  grimmsnarl: {
    name: "\u30AA\u30FC\u30ED\u30F3\u30B2"
  },
  grimmsnarlgmax: {
    name: "\u30AA\u30FC\u30ED\u30F3\u30B2\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  obstagoon: {
    name: "\u30BF\u30C1\u30D5\u30B5\u30B0\u30DE"
  },
  perrserker: {
    name: "\u30CB\u30E3\u30A4\u30AD\u30F3\u30B0"
  },
  cursola: {
    name: "\u30B5\u30CB\u30B4\u30FC\u30F3"
  },
  sirfetchd: {
    name: "\u30CD\u30AE\u30AC\u30CA\u30A4\u30C8"
  },
  mrrime: {
    name: "\u30D0\u30EA\u30B3\u30AA\u30EB"
  },
  runerigus: {
    name: "\u30C7\u30B9\u30D0\u30FC\u30F3"
  },
  milcery: {
    name: "\u30DE\u30DB\u30DF\u30EB"
  },
  alcremie: {
    name: "\u30DE\u30DB\u30A4\u30C3\u30D7"
  },
  alcremiegmax: {
    name: "\u30DE\u30DB\u30A4\u30C3\u30D7\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  falinks: {
    name: "\u30BF\u30A4\u30EC\u30FC\u30C4"
  },
  pincurchin: {
    name: "\u30D0\u30C1\u30F3\u30A6\u30CB"
  },
  snom: {
    name: "\u30E6\u30AD\u30CF\u30DF"
  },
  frosmoth: {
    name: "\u30E2\u30B9\u30CE\u30A6"
  },
  stonjourner: {
    name: "\u30A4\u30B7\u30D8\u30F3\u30B8\u30F3"
  },
  eiscue: {
    name: "\u30B3\u30AA\u30EA\u30C3\u30DD"
  },
  eiscuenoice: {
    name: "\u30B3\u30AA\u30EA\u30C3\u30DD\uFF08\u30CA\u30A4\u30B9\u30D5\u30A7\u30A4\u30B9\uFF09"
  },
  indeedee: {
    name: "\u30A4\u30A8\u30C3\u30B5\u30F3"
  },
  morpeko: {
    name: "\u30E2\u30EB\u30DA\u30B3"
  },
  morpekohangry: {
    name: "\u30E2\u30EB\u30DA\u30B3\uFF08\u306F\u3089\u307A\u3053\u3082\u3088\u3046\uFF09"
  },
  cufant: {
    name: "\u30BE\u30A6\u30C9\u30A6"
  },
  copperajah: {
    name: "\u30C0\u30A4\u30AA\u30A6\u30C9\u30A6"
  },
  copperajahgmax: {
    name: "\u30C0\u30A4\u30AA\u30A6\u30C9\u30A6\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  dracozolt: {
    name: "\u30D1\u30C3\u30C1\u30E9\u30B4\u30F3"
  },
  arctozolt: {
    name: "\u30D1\u30C3\u30C1\u30EB\u30C9\u30F3"
  },
  dracovish: {
    name: "\u30A6\u30AA\u30CE\u30E9\u30B4\u30F3"
  },
  arctovish: {
    name: "\u30A6\u30AA\u30C1\u30EB\u30C9\u30F3"
  },
  duraludon: {
    name: "\u30B8\u30E5\u30E9\u30EB\u30C9\u30F3"
  },
  duraludongmax: {
    name: "\u30B8\u30E5\u30E9\u30EB\u30C9\u30F3\uFF08\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  dreepy: {
    name: "\u30C9\u30E9\u30E1\u30B7\u30E4"
  },
  drakloak: {
    name: "\u30C9\u30ED\u30F3\u30C1"
  },
  dragapult: {
    name: "\u30C9\u30E9\u30D1\u30EB\u30C8"
  },
  zacian: {
    name: "\u30B6\u30B7\u30A2\u30F3"
  },
  zaciancrowned: {
    name: "\u30B6\u30B7\u30A2\u30F3\uFF08\u3051\u3093\u306E\u304A\u3046\uFF09"
  },
  zamazenta: {
    name: "\u30B6\u30DE\u30BC\u30F3\u30BF"
  },
  zamazentacrowned: {
    name: "\u30B6\u30DE\u30BC\u30F3\u30BF\uFF08\u305F\u3066\u306E\u304A\u3046\uFF09"
  },
  eternatus: {
    name: "\u30E0\u30B2\u30F3\u30C0\u30A4\u30CA"
  },
  eternatuseternamax: {
    name: "\u30E0\u30B2\u30F3\u30C0\u30A4\u30CA\uFF08\u30E0\u30B2\u30F3\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\uFF09"
  },
  kubfu: {
    name: "\u30C0\u30AF\u30DE"
  },
  urshifu: {
    name: "\u30A6\u30FC\u30E9\u30AA\u30B9"
  },
  urshifurapidstrike: {
    name: "\u30A6\u30FC\u30E9\u30AA\u30B9\uFF08\u308C\u3093\u3052\u304D\u306E\u304B\u305F\uFF09"
  },
  urshifurapidstrikegmax: {
    name: "\u30A6\u30FC\u30E9\u30AA\u30B9\uFF08\u308C\u3093\u3052\u304D\u306E\u304B\u305F\u30FB\u30AD\u30E7\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E\u3059\u304C\u305F\uFF09"
  },
  zarude: {
    name: "\u30B6\u30EB\u30FC\u30C9"
  },
  zarudedada: {
    name: "\u30B6\u30EB\u30FC\u30C9\uFF08\u3068\u3046\u3061\u3083\u3093\uFF09"
  },
  regieleki: {
    name: "\u30EC\u30B8\u30A8\u30EC\u30AD"
  },
  regidrago: {
    name: "\u30EC\u30B8\u30C9\u30E9\u30B4"
  },
  glastrier: {
    name: "\u30D6\u30EA\u30B6\u30DD\u30B9"
  },
  spectrier: {
    name: "\u30EC\u30A4\u30B9\u30DD\u30B9"
  },
  calyrex: {
    name: "\u30D0\u30C9\u30EC\u30C3\u30AF\u30B9"
  },
  calyrexice: {
    name: "\u30D0\u30C9\u30EC\u30C3\u30AF\u30B9\uFF08\u306F\u304F\u3070\u3058\u3087\u3046\u306E\u3059\u304C\u305F\uFF09"
  },
  calyrexshadow: {
    name: "\u30D0\u30C9\u30EC\u30C3\u30AF\u30B9\uFF08\u3053\u304F\u3070\u3058\u3087\u3046\u306E\u3059\u304C\u305F\uFF09"
  },
  wyrdeer: {
    name: "\u30A2\u30E4\u30B7\u30B7"
  },
  kleavor: {
    name: "\u30D0\u30B5\u30AE\u30EA"
  },
  ursaluna: {
    name: "\u30AC\u30C1\u30B0\u30DE"
  },
  basculegion: {
    name: "\u30A4\u30C0\u30A4\u30C8\u30A6"
  },
  sneasler: {
    name: "\u30AA\u30AA\u30CB\u30E5\u30FC\u30E9"
  },
  overqwil: {
    name: "\u30CF\u30EA\u30FC\u30DE\u30F3"
  },
  enamorus: {
    name: "\u30E9\u30D6\u30C8\u30ED\u30B9"
  },
  enamorustherian: {
    name: "\u30E9\u30D6\u30C8\u30ED\u30B9\uFF08\u308C\u3044\u3058\u3085\u3046\u30D5\u30A9\u30EB\u30E0\uFF09"
  },
  sprigatito: {
    name: "\u30CB\u30E3\u30AA\u30CF"
  },
  floragato: {
    name: "\u30CB\u30E3\u30ED\u30FC\u30C6"
  },
  meowscarada: {
    name: "\u30DE\u30B9\u30AB\u30FC\u30CB\u30E3"
  },
  fuecoco: {
    name: "\u30DB\u30B2\u30FC\u30BF"
  },
  crocalor: {
    name: "\u30A2\u30C1\u30B2\u30FC\u30BF"
  },
  skeledirge: {
    name: "\u30E9\u30A6\u30C9\u30DC\u30FC\u30F3"
  },
  quaxly: {
    name: "\u30AF\u30EF\u30C3\u30B9"
  },
  quaxwell: {
    name: "\u30A6\u30A7\u30EB\u30AB\u30E2"
  },
  quaquaval: {
    name: "\u30A6\u30A7\u30FC\u30CB\u30D0\u30EB"
  },
  lechonk: {
    name: "\u30B0\u30EB\u30C8\u30F3"
  },
  oinkologne: {
    name: "\u30D1\u30D5\u30E5\u30FC\u30C8\u30F3"
  },
  tarountula: {
    name: "\u30BF\u30DE\u30F3\u30C1\u30E5\u30E9"
  },
  spidops: {
    name: "\u30EF\u30CA\u30A4\u30C0\u30FC"
  },
  nymble: {
    name: "\u30DE\u30E1\u30D0\u30C3\u30BF"
  },
  lokix: {
    name: "\u30A8\u30AF\u30B9\u30EC\u30C3\u30B0"
  },
  pawmi: {
    name: "\u30D1\u30E2"
  },
  pawmo: {
    name: "\u30D1\u30E2\u30C3\u30C8"
  },
  pawmot: {
    name: "\u30D1\u30FC\u30E2\u30C3\u30C8"
  },
  tandemaus: {
    name: "\u30EF\u30C3\u30AB\u30CD\u30BA\u30DF"
  },
  maushold: {
    name: "\u30A4\u30C3\u30AB\u30CD\u30BA\u30DF"
  },
  fidough: {
    name: "\u30D1\u30D4\u30E2\u30C3\u30C1"
  },
  dachsbun: {
    name: "\u30D0\u30A6\u30C3\u30C4\u30A7\u30EB"
  },
  smoliv: {
    name: "\u30DF\u30CB\u30FC\u30D6"
  },
  dolliv: {
    name: "\u30AA\u30EA\u30FC\u30CB\u30E7"
  },
  arboliva: {
    name: "\u30AA\u30EA\u30FC\u30F4\u30A1"
  },
  squawkabilly: {
    name: "\u30A4\u30AD\u30EA\u30F3\u30B3"
  },
  nacli: {
    name: "\u30B3\u30B8\u30AA"
  },
  naclstack: {
    name: "\u30B8\u30AA\u30C5\u30E0"
  },
  garganacl: {
    name: "\u30AD\u30E7\u30B8\u30AA\u30FC\u30F3"
  },
  charcadet: {
    name: "\u30AB\u30EB\u30DC\u30A6"
  },
  armarouge: {
    name: "\u30B0\u30EC\u30F3\u30A2\u30EB\u30DE"
  },
  ceruledge: {
    name: "\u30BD\u30A6\u30D6\u30EC\u30A4\u30BA"
  },
  tadbulb: {
    name: "\u30BA\u30D4\u30AB"
  },
  bellibolt: {
    name: "\u30CF\u30E9\u30D0\u30EA\u30FC"
  },
  wattrel: {
    name: "\u30AB\u30A4\u30C7\u30F3"
  },
  kilowattrel: {
    name: "\u30BF\u30A4\u30AB\u30A4\u30C7\u30F3"
  },
  maschiff: {
    name: "\u30AA\u30E9\u30C1\u30D5"
  },
  mabosstiff: {
    name: "\u30DE\u30D5\u30A3\u30C6\u30A3\u30D5"
  },
  shroodle: {
    name: "\u30B7\u30EB\u30B7\u30E5\u30EB\u30FC"
  },
  grafaiai: {
    name: "\u30BF\u30AE\u30F3\u30B0\u30EB"
  },
  bramblin: {
    name: "\u30A2\u30CE\u30AF\u30B5"
  },
  brambleghast: {
    name: "\u30A2\u30CE\u30DB\u30E9\u30B0\u30B5"
  },
  toedscool: {
    name: "\u30CE\u30CE\u30AF\u30E9\u30B2"
  },
  toedscruel: {
    name: "\u30EA\u30AF\u30AF\u30E9\u30B2"
  },
  klawf: {
    name: "\u30AC\u30B1\u30AC\u30CB"
  },
  capsakid: {
    name: "\u30AB\u30D7\u30B5\u30A4\u30B8"
  },
  scovillain: {
    name: "\u30B9\u30B3\u30F4\u30A3\u30E9\u30F3"
  },
  rellor: {
    name: "\u30B7\u30AC\u30ED\u30B3"
  },
  rabsca: {
    name: "\u30D9\u30E9\u30AB\u30B9"
  },
  flittle: {
    name: "\u30D2\u30E9\u30D2\u30CA"
  },
  espathra: {
    name: "\u30AF\u30A8\u30B9\u30D1\u30C8\u30E9"
  },
  tinkatink: {
    name: "\u30AB\u30CC\u30C1\u30E3\u30F3"
  },
  tinkatuff: {
    name: "\u30CA\u30AB\u30CC\u30C1\u30E3\u30F3"
  },
  tinkaton: {
    name: "\u30C7\u30AB\u30CC\u30C1\u30E3\u30F3"
  },
  wiglett: {
    name: "\u30A6\u30DF\u30C7\u30A3\u30B0\u30C0"
  },
  wugtrio: {
    name: "\u30A6\u30DF\u30C8\u30EA\u30AA"
  },
  bombirdier: {
    name: "\u30AA\u30C8\u30B7\u30C9\u30EA"
  },
  finizen: {
    name: "\u30CA\u30DF\u30A4\u30EB\u30AB"
  },
  palafin: {
    name: "\u30A4\u30EB\u30AB\u30DE\u30F3"
  },
  varoom: {
    name: "\u30D6\u30ED\u30ED\u30F3"
  },
  revavroom: {
    name: "\u30D6\u30ED\u30ED\u30ED\u30FC\u30E0"
  },
  cyclizar: {
    name: "\u30E2\u30C8\u30C8\u30AB\u30B2"
  },
  orthworm: {
    name: "\u30DF\u30DF\u30BA\u30BA"
  },
  glimmet: {
    name: "\u30AD\u30E9\u30FC\u30E1"
  },
  glimmora: {
    name: "\u30AD\u30E9\u30D5\u30ED\u30EB"
  },
  greavard: {
    name: "\u30DC\u30C1"
  },
  houndstone: {
    name: "\u30CF\u30AB\u30C9\u30C3\u30B0"
  },
  flamigo: {
    name: "\u30AB\u30E9\u30DF\u30F3\u30B4"
  },
  cetoddle: {
    name: "\u30A2\u30EB\u30AF\u30B8\u30E9"
  },
  cetitan: {
    name: "\u30CF\u30EB\u30AF\u30B8\u30E9"
  },
  veluza: {
    name: "\u30DF\u30AC\u30EB\u30FC\u30B5"
  },
  dondozo: {
    name: "\u30D8\u30A4\u30E9\u30C3\u30B7\u30E3"
  },
  tatsugiri: {
    name: "\u30B7\u30E3\u30EA\u30BF\u30C4"
  },
  annihilape: {
    name: "\u30B3\u30CE\u30E8\u30B6\u30EB"
  },
  clodsire: {
    name: "\u30C9\u30AA\u30FC"
  },
  farigiraf: {
    name: "\u30EA\u30AD\u30AD\u30EA\u30F3"
  },
  dudunsparce: {
    name: "\u30CE\u30B3\u30B3\u30C3\u30C1"
  },
  kingambit: {
    name: "\u30C9\u30C9\u30B2\u30B6\u30F3"
  },
  greattusk: {
    name: "\u30A4\u30C0\u30A4\u30CA\u30AD\u30D0"
  },
  screamtail: {
    name: "\u30B5\u30B1\u30D6\u30B7\u30C3\u30DD"
  },
  brutebonnet: {
    name: "\u30A2\u30E9\u30D6\u30EB\u30BF\u30B1"
  },
  fluttermane: {
    name: "\u30CF\u30D0\u30BF\u30AF\u30AB\u30DF"
  },
  slitherwing: {
    name: "\u30C1\u30F2\u30CF\u30A6\u30CF\u30CD"
  },
  sandyshocks: {
    name: "\u30B9\u30CA\u30CE\u30B1\u30AC\u30EF"
  },
  irontreads: {
    name: "\u30C6\u30C4\u30CE\u30EF\u30C0\u30C1"
  },
  ironbundle: {
    name: "\u30C6\u30C4\u30CE\u30C4\u30C4\u30DF"
  },
  ironhands: {
    name: "\u30C6\u30C4\u30CE\u30AB\u30A4\u30CA"
  },
  ironjugulis: {
    name: "\u30C6\u30C4\u30CE\u30B3\u30A6\u30D9"
  },
  ironmoth: {
    name: "\u30C6\u30C4\u30CE\u30C9\u30AF\u30AC"
  },
  ironthorns: {
    name: "\u30C6\u30C4\u30CE\u30A4\u30D0\u30E9"
  },
  frigibax: {
    name: "\u30BB\u30D3\u30A8"
  },
  arctibax: {
    name: "\u30BB\u30B4\u30FC\u30EB"
  },
  baxcalibur: {
    name: "\u30BB\u30B0\u30EC\u30A4\u30D6"
  },
  gimmighoul: {
    name: "\u30B3\u30EC\u30AF\u30EC\u30FC"
  },
  gholdengo: {
    name: "\u30B5\u30FC\u30D5\u30B4\u30FC"
  },
  wochien: {
    name: "\u30C1\u30AA\u30F3\u30B8\u30A7\u30F3"
  },
  chienpao: {
    name: "\u30D1\u30AA\u30B8\u30A2\u30F3"
  },
  tinglu: {
    name: "\u30C7\u30A3\u30F3\u30EB\u30FC"
  },
  chiyu: {
    name: "\u30A4\u30FC\u30E6\u30A4"
  },
  roaringmoon: {
    name: "\u30C8\u30C9\u30ED\u30AF\u30C4\u30AD"
  },
  ironvaliant: {
    name: "\u30C6\u30C4\u30CE\u30D6\u30B8\u30F3"
  },
  koraidon: {
    name: "\u30B3\u30E9\u30A4\u30C9\u30F3"
  },
  miraidon: {
    name: "\u30DF\u30E9\u30A4\u30C9\u30F3"
  },
  walkingwake: {
    name: "\u30A6\u30CD\u30EB\u30DF\u30CA\u30E2"
  },
  ironleaves: {
    name: "\u30C6\u30C4\u30CE\u30A4\u30B5\u30CF"
  },
  dipplin: {
    name: "\u30AB\u30DF\u30C3\u30C1\u30E5"
  },
  poltchageist: {
    name: "\u30C1\u30E3\u30C7\u30B9"
  },
  sinistcha: {
    name: "\u30E4\u30D0\u30BD\u30C1\u30E3"
  },
  okidogi: {
    name: "\u30A4\u30A4\u30CD\u30A4\u30CC"
  },
  munkidori: {
    name: "\u30DE\u30B7\u30DE\u30B7\u30E9"
  },
  fezandipiti: {
    name: "\u30AD\u30C1\u30AD\u30AE\u30B9"
  },
  ogerpon: {
    name: "\u30AA\u30FC\u30AC\u30DD\u30F3"
  },
  archaludon: {
    name: "\u30D6\u30EA\u30B8\u30E5\u30E9\u30B9"
  },
  hydrapple: {
    name: "\u30AB\u30DF\u30C4\u30AA\u30ED\u30C1"
  },
  gougingfire: {
    name: "\u30A6\u30AC\u30C4\u30DB\u30E0\u30E9"
  },
  ragingbolt: {
    name: "\u30BF\u30B1\u30EB\u30E9\u30A4\u30B3"
  },
  ironboulder: {
    name: "\u30C6\u30C4\u30CE\u30A4\u30EF\u30AA"
  },
  ironcrown: {
    name: "\u30C6\u30C4\u30CE\u30AB\u30B7\u30E9"
  },
  terapagos: {
    name: "\u30C6\u30E9\u30D1\u30B4\u30B9"
  },
  pecharunt: {
    name: "\u30E2\u30E2\u30EF\u30ED\u30A6"
  },
  missingno: {
    name: "\u3051\u3064\u3070\u3093"
  },
  syclar: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  syclant: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  revenankh: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  embirch: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  flarelm: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  pyroak: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  breezi: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  fidgit: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  rebble: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  tactite: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  stratagem: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  privatyke: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  arghonaut: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  kitsunoh: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  cyclohm: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  colossoil: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  krilowatt: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  voodoll: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  voodoom: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  scratchet: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  tomohawk: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  necturine: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  necturna: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  mollux: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  cupra: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  argalis: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  aurumoth: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  brattler: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  malaconda: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  cawdet: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  cawmodore: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  volkritter: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  volkraken: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  snugglow: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  plasmanta: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  floatoy: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  caimanoe: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  naviathan: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  crucibelle: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  crucibellemega: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  pluffle: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  kerfluffle: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  pajantom: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  mumbao: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  jumbao: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  fawnifer: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  electrelk: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  caribolt: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  smogecko: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  smoguana: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  smokomodo: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  swirlpool: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  coribalis: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  snaelstrom: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  equilibra: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  astrolotl: {
    name: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  pokestarsmeargle: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u30C9\u30FC\u30D6\u30EB\uFF12"
  },
  pokestarufo: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \uFF35\uFF26\uFF2F"
  },
  pokestarufo2: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \uFF35\uFF26\uFF2F\uFF12"
  },
  pokestarbrycenman: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u30CF\u30C1\u30AF\u30DE\u30F3"
  },
  pokestarmt: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \uFF2D\uFF0E\uFF36"
  },
  pokestarmt2: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \uFF2D\uFF0E\uFF36\uFF12"
  },
  pokestartransport: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u3066\u3093\u305D\u3046\u304D"
  },
  pokestargiant: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u3060\u3044\uFF2F\uFF2C"
  },
  pokestarhumanoid: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u3072\u3068\u304C\u305F"
  },
  pokestarmonster: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u304B\u3044\u3076\u3064"
  },
  pokestarf00: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \uFF26\u2212\uFF10\uFF10"
  },
  pokestarf002: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \uFF26\u2212\uFF10\uFF10\uFF12"
  },
  pokestarspirit: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u3042\u304F\u308A\u3087\u3046"
  },
  pokestarblackdoor: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u304F\u308D\u3044\u304B\u3079"
  },
  pokestarwhitedoor: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u3057\u308D\u3044\u304B\u3079"
  },
  pokestarblackbelt: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u30AB\u30E9\u30C6\u304A\u3046"
  },
  pokestarufopropu2: {
    name: "\u30DD\u30B1\u30A6\u30C3\u30C9\u306E \u30BB\u30C3\u30C8\uFF35\uFF12"
  }
};
//# sourceMappingURL=pokedex.js.map
