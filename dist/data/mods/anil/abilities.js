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
var abilities_exports = {};
__export(abilities_exports, {
  Abilities: () => Abilities
});
module.exports = __toCommonJS(abilities_exports);
const Abilities = {
  // === Habilidades 100% inventadas por Eric (Pokémon Añil v4.0) ===
  // Implementadas replicando la lógica de habilidades oficiales equivalentes.
  // Los porcentajes de boost de tipo no vienen especificados en la fuente (Fakedex solo da
  // la descripción in-game); se usó 1.5x como estándar, igual que Steelworker/Dragon's Maw/etc.
  inflamable: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.type === "Fire") {
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Inflamable",
    shortDesc: "Aumenta un 50% el da\xF1o de los movimientos de tipo Fuego.",
    rating: 3,
    num: 317
  },
  albino: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.type === "Ice") {
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Albino",
    shortDesc: "Aumenta un 50% el da\xF1o de los movimientos de tipo Hielo.",
    rating: 3,
    num: 318
  },
  pielherbcea: {
    // Igual que Pixilate/Refrigerate/etc., pero convierte Normal -> Planta
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (move.type === "Normal" && (!noModifyType.includes(move.id) || this.activeMove?.isMax) && !(move.isZ && move.category !== "Status") && !(move.name === "Tera Blast" && pokemon.terastallized)) {
        move.type = "Grass";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
    },
    flags: {},
    name: "Piel Herb\xE1cea",
    shortDesc: "Los movimientos de tipo Normal pasan a ser de tipo Planta y ganan potencia (x1.2).",
    rating: 4,
    num: 319
  },
  floracin: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.type === "Grass") {
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Floraci\xF3n",
    shortDesc: "Aumenta un 50% el da\xF1o de los movimientos de tipo Planta.",
    rating: 3,
    num: 320
  },
  realeza: {
    // Habilidad firma de Royaleon: bonus de daño con CUALQUIER tipo de movimiento
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      return this.chainModify(1.5);
    },
    onModifySpAPriority: 5,
    onModifySpA(spa, attacker, defender, move) {
      return this.chainModify(1.5);
    },
    flags: {},
    name: "Realeza",
    shortDesc: "Recibe un bonus de da\xF1o del 50% al atacar, sin importar el tipo del movimiento.",
    rating: 4.5,
    num: 321
  },
  acometida: {
    onStart(pokemon) {
      this.effectState.counter = 1;
    },
    onResidualOrder: 28,
    onResidualSubOrder: 2,
    onResidual(pokemon) {
      if (pokemon.activeTurns && this.effectState.counter) {
        this.effectState.counter--;
      }
    },
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      if (this.effectState.counter) {
        return this.chainModify(1.2);
      }
    },
    onModifySpe(spe, pokemon) {
      if (this.effectState.counter) {
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Acometida",
    shortDesc: "En su primer turno en combate, +50% Velocidad y +20% Ataque.",
    rating: 3,
    num: 322
  },
  poderglido: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.type === "Ice" && this.field.isWeather(["hail", "snowscape"])) {
        return this.chainModify(1.5);
      }
    },
    onModifySpe(spe, pokemon) {
      if (this.field.isWeather(["hail", "snowscape"])) {
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Poder G\xE9lido",
    shortDesc: "En Granizo/Nieve: +50% poder a movs. Hielo y +50% Velocidad.",
    rating: 3.5,
    num: 323
  },
  silvano: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (this.field.isTerrain("grassyterrain")) {
        return this.chainModify(1.3);
      }
    },
    flags: {},
    name: "Silvano",
    shortDesc: "Con Campo de Hierba activo, aumenta un 30% el da\xF1o de cualquier movimiento.",
    rating: 3,
    num: 324
  },
  camorrista: {
    // No existe un flag oficial "kick" en Showdown; se usa una lista explícita de movimientos patada.
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      const kickMoves = [
        "axekick",
        "blazekick",
        "doublekick",
        "highjumpkick",
        "jumpkick",
        "lowkick",
        "megakick",
        "rollingkick",
        "thunderouskick",
        "triplekick",
        "tropkick"
      ];
      if (kickMoves.includes(move.id)) {
        return this.chainModify(1.2);
      }
    },
    flags: {},
    name: "Camorrista",
    shortDesc: "Sube un 20% el poder de los movimientos de patada.",
    rating: 2,
    num: 325
  },
  tintineo: {
    onStart(pokemon) {
      this.add("-ability", pokemon, "Tintineo");
      for (const ally of pokemon.side.pokemon) {
        if (ally.status) {
          this.add("-message", `${ally.name} se cur\xF3 gracias al Tintineo.`);
          ally.cureStatus();
        }
      }
    },
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      if (move.flags["sound"]) {
        move.type = "Psychic";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
    },
    flags: {},
    name: "Tintineo",
    shortDesc: "Al salir, cura el estado de todo el equipo. Los movs. de sonido pasan a Ps\xEDquico y ganan 20% de potencia.",
    rating: 3,
    num: 326
  },
  razrobusta: {
    onTryHealPriority: 1,
    onTryHeal(damage, target, source, effect) {
      const heals = ["drain", "leechseed", "ingrain", "aquaring", "strengthsap"];
      if (effect && heals.includes(effect.id)) {
        return this.chainModify([5324, 4096]);
      }
    },
    flags: {},
    name: "Ra\xEDz Robusta",
    shortDesc: "Los movimientos y efectos que drenan PS recuperan un 30% m\xE1s.",
    rating: 2,
    num: 327
  },
  toqueardiente: {
    onSourceDamagingHit(damage, target, source, move) {
      if (target.hasAbility("shielddust") || target.hasItem("covertcloak")) return;
      if (this.checkMoveMakesContact(move, target, source)) {
        if (this.randomChance(3, 10)) {
          target.trySetStatus("brn", source);
        }
      }
    },
    flags: {},
    name: "Toque Ardiente",
    shortDesc: "30% de probabilidad de quemar al rival con movimientos de contacto.",
    rating: 2,
    num: 328
  }
};
//# sourceMappingURL=abilities.js.map
