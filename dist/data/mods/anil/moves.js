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
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  // === Movimientos 100% inventados por Eric (Pokémon Añil v4.0) ===
  // Potencia/precisión/PP tomados directamente del dataset (Fakedex). La implementación de la
  // mecánica se modeló sobre movimientos oficiales con efectos equivalentes.
  //
  // NOTA sobre "Luz Devastadora": el Showdown base ya trae una entrada "Nihil Light" (num 920,
  // isNonstandard: "Future", ignoreImmunity Dragon) — un movimiento dataminado de una entrega
  // futura de Pokémon. Eric no lo inventó de cero: lo tomó de ahí, le subió la potencia (100->200)
  // y lo hizo un solo objetivo. Los IDs no chocan (el nuestro es "luzdevastadora", el oficial
  // "nihillight"), pero vale aclararlo — no es 100% original.
  escalofro: {
    num: 834,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Escalofr\xEDo",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
    status: "frz",
    target: "normal",
    type: "Ice",
    shortDesc: "Congela al objetivo. No hace da\xF1o directo.",
    contestType: "Clever"
  },
  deslizamiento: {
    num: 835,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Deslizamiento",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Ice",
    shortDesc: "Sube la Velocidad del usuario en 1 tras el golpe.",
    contestType: "Cool"
  },
  atrapabicho: {
    num: 836,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Atrapabicho",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1 },
    onEffectiveness(typeMod, target, type) {
      if (type === "Bug") return 1;
    },
    target: "normal",
    type: "Grass",
    shortDesc: "Muy eficaz contra Pok\xE9mon de tipo Bicho.",
    contestType: "Cool"
  },
  triplegolpe: {
    num: 837,
    accuracy: 100,
    basePower: 15,
    basePowerCallback(pokemon, target, move) {
      return 15 * move.hit;
    },
    category: "Physical",
    name: "Triple Golpe",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    multihit: 3,
    target: "normal",
    type: "Normal",
    shortDesc: "Golpea 3 veces; cada golpe es m\xE1s fuerte que el anterior (15/30/45).",
    contestType: "Cool"
  },
  luzdevastadora: {
    num: 851,
    accuracy: 100,
    basePower: 200,
    category: "Special",
    name: "Luz Devastadora",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    ignoreEvasion: true,
    ignoreDefensive: true,
    ignoreImmunity: { "Dragon": true },
    target: "normal",
    type: "Dragon",
    shortDesc: "Golpea neutralmente a tipo Hada. Ignora cambios de Def. Esp. y Evasi\xF3n del rival.",
    contestType: "Cool"
  }
};
//# sourceMappingURL=moves.js.map
