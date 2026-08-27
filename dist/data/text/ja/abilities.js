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
  AbilitiesText: () => AbilitiesText
});
module.exports = __toCommonJS(abilities_exports);
const AbilitiesText = {
  noability: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  adaptability: {
    name: "\u3066\u304D\u304A\u3046\u308A\u3087\u304F",
    desc: "\u81EA\u5206\u3068 \u304A\u306A\u3058 \u30BF\u30A4\u30D7\u306E \u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aerilate: {
    name: "\u30B9\u30AB\u30A4\u30B9\u30AD\u30F3",
    desc: "\u30CE\u30FC\u30DE\u30EB\u30BF\u30A4\u30D7\u306E \u6280\u304C \u3072\u3053\u3046\u30BF\u30A4\u30D7\u306B\u306A\u308B\u3002 \u5A01\u529B\u304C \u5C11\u3057 \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  aftermath: {
    name: "\u3086\u3046\u3070\u304F",
    desc: "\u3072\u3093\u3057\u306B \u306A\u3063\u305F\u3068\u304D \u89E6\u3063\u305F \u76F8\u624B\u306B \u30C0\u30E1\u30FC\u30B8\u3092 \u3042\u305F\u3048\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "  [POKEMON]\u306F \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01"
  },
  airlock: {
    name: "\u30A8\u30A2\u30ED\u30C3\u30AF",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \u5929\u5019\u306E\u5F71\u97FF\u304C \u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  analytic: {
    name: "\u30A2\u30CA\u30E9\u30A4\u30BA",
    desc: "\u3044\u3061\u3070\u3093 \u6700\u5F8C\u306B \u6280\u3092 \u51FA\u3059\u3068 \u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  angerpoint: {
    name: "\u3044\u304B\u308A\u306E\u3064\u307C",
    desc: "\u6025\u6240\u306B \u653B\u6483\u304C \u5F53\u305F\u308B\u3068 \u6012\u308A\u304F\u308B\u3063\u3066 \u653B\u6483\u529B\u304C \u6700\u5927\u306B \u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    boost: "  [POKEMON]\u306F \u653B\u6483\u304C \u6700\u5927\u307E\u3067 \u4E0A\u304C\u3063\u305F\uFF01"
  },
  angershell: {
    name: "\u3044\u304B\u308A\u306E\u3053\u3046\u3089",
    desc: "\u76F8\u624B\u306E\u653B\u6483\u3067 HP\u304C \u534A\u5206\u306B \u306A\u308B\u3068 \u6012\u308A\u3067 \u9632\u5FA1\u3068 \u7279\u9632\u304C \u4E0B\u304C\u308B\u304C \u653B\u6483 \u7279\u653B \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  anticipation: {
    name: "\u304D\u3051\u3093\u3088\u3061",
    desc: "\u76F8\u624B\u306E \u6301\u3064 \u5371\u967A\u306A \u6280\u3092 \u5BDF\u77E5\u3059\u308B \u3053\u3068\u304C\u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u306F \u307F\u3076\u308B\u3044\u3057\u305F\uFF01"
  },
  arenatrap: {
    name: "\u3042\u308A\u3058\u3054\u304F",
    desc: "\u6226\u95D8\u3067 \u76F8\u624B\u3092 \u9003\u3052\u3089\u308C\u306A\u304F\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  armortail: {
    name: "\u30C6\u30A4\u30EB\u30A2\u30FC\u30DE\u30FC",
    desc: "\u982D\u3092\u5305\u3080 \u8B0E\u306E\u3057\u3063\u307D\u304C \u3053\u3061\u3089\u306B \u3080\u304B\u3063\u3066 \u5148\u5236\u6280\u3092 \u51FA\u305B\u306A\u3044 \u3088\u3046\u306B\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  aromaveil: {
    name: "\u30A2\u30ED\u30DE\u30D9\u30FC\u30EB",
    desc: "\u81EA\u5206\u3068 \u5473\u65B9\u3078\u306E \u30E1\u30F3\u30BF\u30EB \u653B\u6483\u3092 \u9632\u3050\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u306F \u30A2\u30ED\u30DE\u30D9\u30FC\u30EB\u306B \u5B88\u3089\u308C\u3066\u3044\u308B\uFF01"
  },
  asone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306F \u3075\u305F\u3064\u306E \u7279\u6027\u3092 \u3042\u308F\u305B\u6301\u3064\uFF01"
  },
  asoneglastrier: {
    name: "\u3058\u3093\u3070\u3044\u3063\u305F\u3044",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  asonespectrier: {
    name: "\u3058\u3093\u3070\u3044\u3063\u305F\u3044",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aurabreak: {
    name: "\u30AA\u30FC\u30E9\u30D6\u30EC\u30A4\u30AF",
    desc: "\u30AA\u30FC\u30E9\u306E \u52B9\u679C\u3092 \u9006\u8EE2\u3055\u305B\u3066 \u5A01\u529B\u3092 \u4E0B\u3052\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306F \u3059\u3079\u3066\u306E \u30AA\u30FC\u30E9\u3092 \u5236\u5727\u3059\u308B\uFF01"
  },
  baddreams: {
    name: "\u30CA\u30A4\u30C8\u30E1\u30A2",
    desc: "\u306D\u3080\u308A\u72B6\u614B\u306E \u76F8\u624B\u306B \u30C0\u30E1\u30FC\u30B8\u3092 \u3042\u305F\u3048\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  [POKEMON]\u306F \u3046\u306A\u3055\u308C\u3066\u3044\u308B\uFF01"
  },
  ballfetch: {
    name: "\u305F\u307E\u3072\u308D\u3044",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battery: {
    name: "\u30D0\u30C3\u30C6\u30EA\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlearmor: {
    name: "\u30AB\u30D6\u30C8\u30A2\u30FC\u30DE\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlebond: {
    name: "\u304D\u305A\u306A\u3078\u3093\u3052",
    desc: "\u76F8\u624B\u3092 \u5012\u3059\u3068 \u30C8\u30EC\u30FC\u30CA\u30FC\u3068\u306E \u30AD\u30BA\u30CA\u304C \u6DF1\u307E\u308A \u30B5\u30C8\u30B7\u30B2\u30C3\u30B3\u30A6\u30AC\u306B \u5909\u5316\u3059\u308B\u3002\u307F\u305A\u3057\u3085\u308A\u3051\u3093\u304C \u5F37\u304F\u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u306B \u304D\u305A\u306A\u306E \u529B\u304C \u307F\u306A\u304E\u3063\u305F\uFF01",
    transform: "[POKEMON]\u306F \u30B5\u30C8\u30B7\u30B2\u30C3\u30B3\u30A6\u30AC\u306B \u5909\u5316\u3057\u305F\uFF01"
  },
  beadsofruin: {
    name: "\u308F\u3056\u308F\u3044\u306E\u305F\u307E",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306E \u308F\u3056\u308F\u3044\u306E\u305F\u307E\u3067 \u307E\u308F\u308A\u306E \u7279\u9632\u304C \u5F31\u307E\u3063\u305F\uFF01"
  },
  beastboost: {
    name: "\u30D3\u30FC\u30B9\u30C8\u30D6\u30FC\u30B9\u30C8",
    desc: "\u76F8\u624B\u3092 \u5012\u3057\u305F\u3068\u304D \u81EA\u5206\u306E \u3044\u3061\u3070\u3093 \u9AD8\u3044 \u80FD\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  berserk: {
    name: "\u304E\u3083\u304F\u3058\u3087\u3046",
    desc: "\u76F8\u624B\u306E \u653B\u6483\u3067 \uFF28\uFF30\u304C \u534A\u5206\u306B \u306A\u308B\u3068 \u7279\u653B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  bigpecks: {
    name: "\u306F\u3068\u3080\u306D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  blaze: {
    name: "\u3082\u3046\u304B",
    desc: "\uFF28\uFF30\u304C \u6E1B\u3063\u305F\u3068\u304D \u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  bulletproof: {
    name: "\u307C\u3046\u3060\u3093",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cheekpouch: {
    name: "\u307B\u304A\u3076\u304F\u308D",
    desc: "\u3069\u3093\u306A \u304D\u306E\u307F\u3067\u3082 \u98DF\u3079\u308B\u3068 \uFF28\uFF30\u3082 \u56DE\u5FA9\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  chillingneigh: {
    name: "\u3057\u308D\u306E\u3044\u306A\u306A\u304D",
    desc: "\u76F8\u624B\u3092 \u5012\u3059\u3068 \u51B7\u305F\u3044 \u58F0\u3067 \u3044\u306A\u306A\u3044\u3066 \u653B\u6483\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  chlorophyll: {
    name: "\u3088\u3046\u308A\u3087\u304F\u305D",
    desc: "\u5929\u6C17\u304C \u6674\u308C\u306E\u3068\u304D \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  clearbody: {
    name: "\u30AF\u30EA\u30A2\u30DC\u30C7\u30A3",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cloudnine: {
    name: "\u30CE\u30FC\u3066\u3093\u304D",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#airlock"
  },
  colorchange: {
    name: "\u3078\u3093\u3057\u3087\u304F",
    desc: "\u76F8\u624B\u304B\u3089 \u53D7\u3051\u305F \u6280\u306E \u30BF\u30A4\u30D7\u306B \u81EA\u5206\u306E \u30BF\u30A4\u30D7\u304C \u5909\u5316 \u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  comatose: {
    name: "\u305C\u3063\u305F\u3044\u306D\u3080\u308A",
    desc: "\u3064\u306D\u306B \u5922\u3046\u3064\u3064\u306E \u72B6\u614B\u3067 \u7D76\u5BFE\u306B \u76EE\u899A\u3081\u306A\u3044\u3002 \u7720\u3063\u305F\u307E\u307E \u653B\u6483\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306F \u5922\u3046\u3064\u3064\u306E \u72B6\u614B\uFF01"
  },
  commander: {
    name: "\u3057\u308C\u3044\u3068\u3046",
    desc: "\u767B\u5834\u3057\u305F\u3068\u304D \u5473\u65B9\u306B \u30D8\u30A4\u30E9\u30C3\u30B7\u30E3\u304C \u3044\u308B\u3068 \u53E3\u306E\u4E2D\u306B \u5165\u3063\u3066 \u305D\u3053\u304B\u3089 \u6307\u4EE4\u3092 \u3060\u3059\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u306F \u3057\u308C\u3044\u3068\u3046 \u3068\u3057\u3066 [TARGET]\u306B \u98F2\u307F\u3053\u307E\u308C\u305F\uFF01"
  },
  competitive: {
    name: "\u304B\u3061\u304D",
    desc: "\u80FD\u529B\u3092 \u4E0B\u3052\u3089\u308C\u308B\u3068 \u7279\u653B\u304C \u3050\u30FC\u3093\u3068 \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  compoundeyes: {
    name: "\u3075\u304F\u304C\u3093",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  contrary: {
    name: "\u3042\u307E\u306E\u3058\u3083\u304F",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  corrosion: {
    name: "\u3075\u3057\u3087\u304F",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  costar: {
    name: "\u304D\u3087\u3046\u3048\u3093",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cottondown: {
    name: "\u308F\u305F\u3052",
    desc: "\u653B\u6483\u3092 \u53D7\u3051\u308B\u3068 \u308F\u305F\u3052\u3092 \u3070\u3089\u307E\u3044\u3066 \u81EA\u5206\u4EE5\u5916\u306E \u30DD\u30B1\u30E2\u30F3 \u3059\u3079\u3066\u306E \u7D20\u65E9\u3055\u3092 \u4E0B\u3052\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cudchew: {
    name: "\u306F\u3093\u3059\u3046",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  curiousmedicine: {
    name: "\u304D\u307F\u3087\u3046\u306A\u304F\u3059\u308A",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cursedbody: {
    name: "\u306E\u308D\u308F\u308C\u30DC\u30C7\u30A3",
    desc: "\u653B\u6483\u3092 \u53D7\u3051\u308B\u3068 \u76F8\u624B\u306E \u6280\u3092 \u304B\u306A\u3057\u3070\u308A\u72B6\u614B\u306B \u3059\u308B\u3053\u3068\u304C \u3042\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cutecharm: {
    name: "\u30E1\u30ED\u30E1\u30ED\u30DC\u30C7\u30A3",
    desc: "\u81EA\u5206\u306B \u89E6\u3063\u305F \u76F8\u624B\u3092 \u30E1\u30ED\u30E1\u30ED\u306B \u3059\u308B\u3053\u3068\u304C \u3042\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  damp: {
    name: "\u3057\u3081\u308A\u3051",
    desc: "\u3042\u305F\u308A\u3092 \u6E7F\u3089\u305B\u308B\u3053\u3068\u306B \u3088\u3063\u3066 \u3058\u3070\u304F \u306A\u3069\u306E \u7206\u767A\u3059\u308B \u6280\u3092 \u3060\u308C\u3082 \u4F7F\u3048\u306A\u304F\u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  [SOURCE]\u306F [MOVE]\u3092 \u4F7F\u3048\u306A\u3044\uFF01"
  },
  dancer: {
    name: "\u304A\u3069\u308A\u3053",
    desc: "\u3060\u308C\u304B\u304C \u8E0A\u308A\u6280\u3092 \u4F7F\u3046\u3068 \u81EA\u5206\u3082 \u305D\u308C\u306B \u7D9A\u3044\u3066 \u8E0A\u308A\u6280\u3092 \u51FA\u3059\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  darkaura: {
    name: "\u30C0\u30FC\u30AF\u30AA\u30FC\u30E9",
    desc: "\u5168\u54E1\u306E \u3042\u304F\u30BF\u30A4\u30D7\u306E \u6280\u304C \u5F37\u304F\u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306F \u30C0\u30FC\u30AF\u30AA\u30FC\u30E9\u3092 \u653E\u3063\u3066\u3044\u308B\uFF01"
  },
  dauntlessshield: {
    name: "\u3075\u304F\u3064\u306E\u305F\u3066",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  dazzling: {
    name: "\u30D3\u30D3\u30C3\u30C9\u30DC\u30C7\u30A3",
    desc: "\u76F8\u624B\u3092 \u3073\u3063\u304F\u308A \u3055\u305B\u3066 \u3053\u3061\u3089\u306B \u3080\u304B\u3063\u3066 \u5148\u5236\u6280\u3092 \u51FA\u305B\u306A\u3044 \u3088\u3046\u306B\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  defeatist: {
    name: "\u3088\u308F\u304D",
    desc: "\uFF28\uFF30\u304C \u534A\u5206\u306B \u306A\u308B\u3068 \u5F31\u6C17\u306B \u306A\u3063\u3066 \u653B\u6483\u3068 \u7279\u653B\u304C \u534A\u6E1B\u3059\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  defiant: {
    name: "\u307E\u3051\u3093\u304D",
    desc: "\u80FD\u529B\u3092 \u4E0B\u3052\u3089\u308C\u308B\u3068 \u653B\u6483\u304C \u3050\u30FC\u3093\u3068 \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  deltastream: {
    name: "\u30C7\u30EB\u30BF\u30B9\u30C8\u30EA\u30FC\u30E0",
    desc: "\u3072\u3053\u3046\u30BF\u30A4\u30D7\u306E \u5F31\u70B9\u304C \u306A\u304F\u306A\u308B \u5929\u6C17\u306B\u3059\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  desolateland: {
    name: "\u304A\u308F\u308A\u306E\u3060\u3044\u3061",
    desc: "\u307F\u305A\u30BF\u30A4\u30D7\u306E \u653B\u6483\u3092 \u53D7\u3051\u306A\u3044 \u5929\u6C17\u306B\u3059\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  disguise: {
    name: "\u3070\u3051\u306E\u304B\u308F",
    desc: "\u4F53\u3092 \u88AB\u3046 \u5316\u3051\u306E\u76AE\u3067 \uFF11\u56DE \u653B\u6483\u3092 \u9632\u3050\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  \u3070\u3051\u306E\u304B\u308F\u304C \u307F\u304C\u308F\u308A\u306B \u306A\u3063\u305F\uFF01",
    transform: "[POKEMON]\u306E \u3070\u3051\u306E\u304B\u308F\u304C \u306F\u304C\u308C\u305F\uFF01"
  },
  download: {
    name: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
    desc: "\u76F8\u624B\u306E \u9632\u5FA1\u3068 \u7279\u9632\u3092 \u304F\u3089\u3079\u3066 \u4F4E\u3044 \u307B\u3046\u306E \u80FD\u529B\u306B \u3042\u308F\u305B\u3066 \u81EA\u5206\u306E \u653B\u6483\u304B \u7279\u653B\u3092 \u4E0A\u3052\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonize: {
    name: "\u30C9\u30E9\u30B4\u30F3\u30B9\u30AD\u30F3",
    desc: "\u30CE\u30FC\u30DE\u30EB\u30BF\u30A4\u30D7\u306E\u6280\u304C\u30C9\u30E9\u30B4\u30F3\u30BF\u30A4\u30D7\u306B\u306A\u308A \u5A01\u529B\u304C1.2\u500D\u306B\u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonsmaw: {
    name: "\u308A\u3085\u3046\u306E\u3042\u304E\u3068",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drizzle: {
    name: "\u3042\u3081\u3075\u3089\u3057",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drought: {
    name: "\u3072\u3067\u308A",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dryskin: {
    name: "\u304B\u3093\u305D\u3046\u306F\u3060",
    desc: "\u5929\u6C17\u304C \u96E8\u306E\u6642\u3084 \u307F\u305A\u30BF\u30A4\u30D7\u306E \u6280\u3067 \uFF28\uFF30\u304C \u56DE\u5FA9\u3057 \u306F\u308C\u306E\u6642\u3084 \u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u6280\u3067 \u6E1B\u3063\u3066\u3057\u307E\u3046\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  ([POKEMON]\u306F \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01)"
  },
  earlybird: {
    name: "\u306F\u3084\u304A\u304D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  eartheater: {
    name: "\u3069\u3057\u3087\u304F",
    desc: "\u3058\u3081\u3093\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u308B\u3068 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305A\u306B \u56DE\u5FA9\u3059\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  eelevate: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  effectspore: {
    name: "\u307B\u3046\u3057",
    desc: "\u653B\u6483\u3067 \u81EA\u5206\u306B \u89E6\u308C\u305F \u76F8\u624B\u3092 \u3069\u304F\u3084 \u307E\u3072\u3084 \u306D\u3080\u308A\u72B6\u614B\u306B \u3059\u308B \u3053\u3068\u304C\u3042\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  electricsurge: {
    name: "\u30A8\u30EC\u30AD\u30E1\u30A4\u30AB\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  electromorphosis: {
    name: "\u3067\u3093\u304D\u306B\u304B\u3048\u308B",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306F [MOVE]\u3092 \u53D7\u3051\u3066 \u5145\u96FB\u3057\u305F\uFF01"
  },
  embodyaspectcornerstone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u306F \u790E\u306E\u4EEE\u9762\u3092 \u304B\u304C\u3084\u304B\u305B \u9632\u5FA1\u304C \u4E0A\u304C\u3063\u305F\uFF01"
  },
  embodyaspecthearthflame: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u306F \u7AC8\u306E\u4EEE\u9762\u3092 \u304B\u304C\u3084\u304B\u305B \u653B\u6483\u304C \u4E0A\u304C\u3063\u305F\uFF01"
  },
  embodyaspectteal: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u306F \u78A7\u306E\u4EEE\u9762\u3092 \u304B\u304C\u3084\u304B\u305B \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u3063\u305F\uFF01"
  },
  embodyaspectwellspring: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u306F \u4E95\u6238\u306E\u4EEE\u9762\u3092 \u304B\u304C\u3084\u304B\u305B \u7279\u9632\u304C \u4E0A\u304C\u3063\u305F\uFF01"
  },
  emergencyexit: {
    name: "\u304D\u304D\u304B\u3044\u3072",
    desc: "\uFF28\uFF30\u304C \u534A\u5206\u306B \u306A\u308B\u3068 \u5371\u967A\u3092 \u56DE\u907F\u3059\u308B\u305F\u3081 \u624B\u6301\u3061\u306B \u5F15\u3063\u8FBC\u3093\u3067 \u3057\u307E\u3046\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  fairyaura: {
    name: "\u30D5\u30A7\u30A2\u30EA\u30FC\u30AA\u30FC\u30E9",
    desc: "\u5168\u54E1\u306E \u30D5\u30A7\u30A2\u30EA\u30FC\u30BF\u30A4\u30D7\u306E \u6280\u304C \u5F37\u304F\u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306F \u30D5\u30A7\u30A2\u30EA\u30FC\u30AA\u30FC\u30E9\u3092 \u653E\u3063\u3066\u3044\u308B\uFF01"
  },
  filter: {
    name: "\u30D5\u30A3\u30EB\u30BF\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  firemane: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  flamebody: {
    name: "\u307B\u306E\u304A\u306E\u304B\u3089\u3060",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  flareboost: {
    name: "\u306D\u3064\u307C\u3046\u305D\u3046",
    desc: "\u3084\u3051\u3069\u72B6\u614B\u306B \u306A\u3063\u305F\u3068\u304D \u7279\u6B8A\u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  flashfire: {
    name: "\u3082\u3089\u3044\u3073",
    desc: "\u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u308B\u3068 \u708E\u3092 \u3082\u3089\u3044 \u81EA\u5206\u304C \u51FA\u3059 \u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u6280\u304C \u5F37\u304F\u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  [POKEMON]\u306F \u307B\u306E\u304A\u306E \u5A01\u529B\u304C \u4E0A\u304C\u3063\u305F\uFF01"
  },
  flowergift: {
    name: "\u30D5\u30E9\u30EF\u30FC\u30AE\u30D5\u30C8",
    desc: "\u5929\u6C17\u304C \u6674\u308C\u306E\u3068\u304D \u81EA\u5206\u3068 \u5473\u65B9\u306E \u653B\u6483\u3068 \u7279\u9632\u306E \u80FD\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  flowerveil: {
    name: "\u30D5\u30E9\u30EF\u30FC\u30D9\u30FC\u30EB",
    desc: "\u5473\u65B9\u306E \u8349\u30DD\u30B1\u30E2\u30F3\u306F \u80FD\u529B\u304C \u4E0B\u304C\u3089\u305A \u72B6\u614B\u7570\u5E38\u306B\u3082 \u306A\u3089\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u306F \u30D5\u30E9\u30EF\u30FC\u30D9\u30FC\u30EB\u306B \u5B88\u3089\u308C\u3066\u3044\u308B\uFF01"
  },
  fluffy: {
    name: "\u3082\u3075\u3082\u3075",
    desc: "\u76F8\u624B\u304B\u3089 \u53D7\u3051\u305F \u63A5\u89E6\u3059\u308B \u6280\u306E \u30C0\u30E1\u30FC\u30B8\u3092 \u534A\u6E1B\u3059\u308B\u304C \u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u6280\u306E \u30C0\u30E1\u30FC\u30B8\u306F \uFF12\u500D\u306B\u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  forecast: {
    name: "\u3066\u3093\u304D\u3084",
    desc: "\u5929\u6C17\u306E \u5F71\u97FF\u3092 \u53D7\u3051\u3066 \u307F\u305A\u30BF\u30A4\u30D7 \u307B\u306E\u304A\u30BF\u30A4\u30D7 \u3053\u304A\u308A\u30BF\u30A4\u30D7\u306E \u3069\u308C\u304B\u306B \u5909\u5316\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  forewarn: {
    name: "\u3088\u3061\u3080",
    desc: "\u767B\u5834 \u3057\u305F\u3068\u304D \u76F8\u624B\u306E \u6301\u3064 \u6280\u3092 \u3072\u3068\u3064\u3060\u3051 \u8AAD\u307F\u53D6\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [TARGET]\u306E [MOVE] \u3092 \u8AAD\u307F\u53D6\u3063\u305F\uFF01",
    activateNoTarget: "  [POKEMON]\u306F \u3088\u3061\u3080\u3067 [MOVE]\u3092 \u3088\u307F\u3068\u3063\u305F\uFF01"
  },
  friendguard: {
    name: "\u30D5\u30EC\u30F3\u30C9\u30AC\u30FC\u30C9",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  frisk: {
    name: "\u304A\u307F\u3068\u304A\u3057",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u306F [TARGET]\u306E [ITEM]\u3092 \u304A\u898B\u901A\u3057\u3060\uFF01",
    activateNoTarget: "  [POKEMON]\u306F [ITEM] \u3092 \u304A\u898B\u901A\u3057\u3060\uFF01"
  },
  fullmetalbody: {
    name: "\u30E1\u30BF\u30EB\u30D7\u30ED\u30C6\u30AF\u30C8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  furcoat: {
    name: "\u30D5\u30A1\u30FC\u30B3\u30FC\u30C8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  galewings: {
    name: "\u306F\u3084\u3066\u306E\u3064\u3070\u3055",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  galvanize: {
    name: "\u30A8\u30EC\u30AD\u30B9\u30AD\u30F3",
    desc: "\u30CE\u30FC\u30DE\u30EB\u30BF\u30A4\u30D7\u306E \u6280\u304C \u3067\u3093\u304D\u30BF\u30A4\u30D7\u306B\u306A\u308B\u3002 \u5A01\u529B\u304C \u5C11\u3057 \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gluttony: {
    name: "\u304F\u3044\u3057\u3093\u307C\u3046",
    desc: "\uFF28\uFF30\u304C \u5C11\u306A\u304F\u306A\u3063\u305F\u3089 \u98DF\u3079\u308B \u304D\u306E\u307F\u3092 \uFF28\uFF30 \u534A\u5206\u306E \u6642\u306B \u98DF\u3079\u3066\u3057\u307E\u3046\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  goodasgold: {
    name: "\u304A\u3046\u3054\u3093\u306E\u304B\u3089\u3060",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gooey: {
    name: "\u306C\u3081\u306C\u3081",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gorillatactics: {
    name: "\u3054\u308A\u3080\u3061\u3085\u3046",
    desc: "\u653B\u6483\u306F \u4E0A\u304C\u308B\u304C \u6700\u521D\u306B \u9078\u3093\u3060 \u6280\u3057\u304B \u51FA\u305B\u306A\u304F\u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grasspelt: {
    name: "\u304F\u3055\u306E\u3051\u304C\u308F",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grassysurge: {
    name: "\u30B0\u30E9\u30B9\u30E1\u30A4\u30AB\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grimneigh: {
    name: "\u304F\u308D\u306E\u3044\u306A\u306A\u304D",
    desc: "\u76F8\u624B\u3092 \u5012\u3059\u3068 \u6050\u308D\u3057\u3044 \u58F0\u3067 \u3044\u306A\u306A\u3044\u3066 \u7279\u653B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guarddog: {
    name: "\u3070\u3093\u3051\u3093",
    desc: "\u3044\u304B\u304F \u3055\u308C\u308B\u3068 \u653B\u6483\u304C \u4E0A\u304C\u308B\u3002 \u30DD\u30B1\u30E2\u30F3\u3092 \u5165\u308C\u66FF\u3048\u3055\u305B\u308B \u6280\u3084 \u9053\u5177\u304C \u52B9\u304B\u306A\u3044\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gulpmissile: {
    name: "\u3046\u306E\u30DF\u30B5\u30A4\u30EB",
    desc: "\u306A\u307F\u306E\u308A\u304B \u30C0\u30A4\u30D3\u30F3\u30B0\u3092 \u3059\u308B\u3068 \u7372\u7269\u3092 \u304F\u308F\u3048\u3066\u304F\u308B\u3002 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u308B\u3068 \u7372\u7269\u3092 \u5410\u304D\u3060\u3057\u3066 \u653B\u6483\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guts: {
    name: "\u3053\u3093\u3058\u3087\u3046",
    desc: "\u72B6\u614B\u7570\u5E38\u306B \u306A\u308B\u3068 \u6839\u6027\u3092 \u3060\u3057\u3066 \u653B\u6483\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hadronengine: {
    name: "\u30CF\u30C9\u30ED\u30F3\u30A8\u30F3\u30B8\u30F3",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306F \u30A8\u30EC\u30AD\u30D5\u30A3\u30FC\u30EB\u30C9\u3092 \u306F\u308A \u672A\u6765\u306E\u6A5F\u95A2\u3092 \u8E8D\u52D5\u3055\u305B\u308B\uFF01\uFF01",
    activate: "  [POKEMON]\u306F \u30A8\u30EC\u30AD\u30D5\u30A3\u30FC\u30EB\u30C9\u3067 \u672A\u6765\u306E\u6A5F\u95A2\u3092 \u8E8D\u52D5\u3055\u305B\u308B\uFF01\uFF01"
  },
  harvest: {
    name: "\u3057\u3085\u3046\u304B\u304F",
    desc: "\u4F7F\u3063\u305F \u304D\u306E\u307F\u3092 \u4F55\u56DE\u3082 \u4F5C\u308A\u3060\u3059\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    addItem: "  [POKEMON]\u306F [ITEM]\u3092 \u53CE\u7A6B\u3057\u305F\uFF01"
  },
  healer: {
    name: "\u3044\u3084\u3057\u306E\u3053\u3053\u308D",
    desc: "\u72B6\u614B\u7570\u5E38\u306E \u5473\u65B9\u3092 \u305F\u307E\u306B \u6CBB\u3057\u3066\u3042\u3052\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    champions: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  heatproof: {
    name: "\u305F\u3044\u306D\u3064",
    desc: "\u8010\u71B1\u306E \u4F53\u306B \u3088\u3063\u3066 \u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u6280\u306E \u5A01\u529B\u3092 \u534A\u6E1B\u3055\u305B\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  heavymetal: {
    name: "\u30D8\u30F4\u30A3\u30E1\u30BF\u30EB",
    desc: "\u81EA\u5206\u306E \u91CD\u3055\u304C \uFF12\u500D\u306B \u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  honeygather: {
    name: "\u307F\u3064\u3042\u3064\u3081",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hospitality: {
    name: "\u304A\u3082\u3066\u306A\u3057",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    heal: "  [SOURCE]\u304C \u305F\u3066\u305F \u304A\u8336\u3092 [POKEMON]\u306F \u98F2\u307F\u307B\u3057\u305F\uFF01"
  },
  hugepower: {
    name: "\u3061\u304B\u3089\u3082\u3061",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hungerswitch: {
    name: "\u306F\u3089\u307A\u3053\u30B9\u30A4\u30C3\u30C1",
    desc: "\u30BF\u30FC\u30F3\u306E \u7D42\u308F\u308A\u306B \u307E\u3093\u3077\u304F\u3082\u3088\u3046 \u306F\u3089\u307A\u3053\u3082\u3088\u3046 \u307E\u3093\u3077\u304F\u3082\u3088\u3046\u2026\u2026\u3068 \u4EA4\u4E92\u306B \u59FF\u3092 \u5909\u3048\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hustle: {
    name: "\u306F\u308A\u304D\u308A",
    desc: "\u81EA\u5206\u306E \u653B\u6483\u304C \u9AD8\u304F\u306A\u308B\u304C \u547D\u4E2D\u7387\u304C \u4E0B\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hydration: {
    name: "\u3046\u308B\u304A\u3044\u30DC\u30C7\u30A3",
    desc: "\u5929\u6C17\u304C \u96E8\u306E\u3068\u304D \u72B6\u614B\u7570\u5E38\u304C \u6CBB\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  hypercutter: {
    name: "\u304B\u3044\u308A\u304D\u30D0\u30B5\u30DF",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  icebody: {
    name: "\u30A2\u30A4\u30B9\u30DC\u30C7\u30A3",
    desc: "\u5929\u6C17\u304C \u3042\u3089\u308C\u306E\u3068\u304D \uFF28\uFF30\u3092 \u5C11\u3057\u305A\u3064 \u56DE\u5FA9 \u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  iceface: {
    name: "\u30A2\u30A4\u30B9\u30D5\u30A7\u30A4\u30B9",
    desc: "\u7269\u7406\u653B\u6483\u306F \u982D\u306E \u6C37\u304C \u307F\u304C\u308F\u308A\u306B \u306A\u308B\u304C \u59FF\u3082 \u5909\u308F\u308B\u3002 \u6C37\u306F \u3042\u3089\u308C\u304C \u964D\u308B\u3068 \u5143\u306B\u623B\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  icescales: {
    name: "\u3053\u304A\u308A\u306E\u308A\u3093\u3077\u3093",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  illuminate: {
    name: "\u306F\u3063\u3053\u3046",
    desc: "\u3042\u305F\u308A\u3092 \u660E\u308B\u304F\u3059\u308B \u3053\u3068\u3067 \u91CE\u751F\u306E \u30DD\u30B1\u30E2\u30F3\u306B \u906D\u9047 \u3057\u3084\u3059\u304F\u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  illusion: {
    name: "\u30A4\u30EA\u30E5\u30FC\u30B8\u30E7\u30F3",
    desc: "\u624B\u6301\u3061\u306E \u3044\u3061\u3070\u3093 \u3046\u3057\u308D\u306B \u3044\u308B \u30DD\u30B1\u30E2\u30F3\u306B \u306A\u308A\u304D\u3063\u3066 \u767B\u5834\u3057\u3066 \u76F8\u624B\u3092 \u5316\u304B\u3059\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    end: "  [POKEMON]\u306E \u30A4\u30EA\u30E5\u30FC\u30B8\u30E7\u30F3\u304C \u89E3\u3051\u305F\uFF01"
  },
  immunity: {
    name: "\u3081\u3093\u3048\u304D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  imposter: {
    name: "\u304B\u308F\u308A\u3082\u306E",
    desc: "\u76EE\u306E\u524D\u306E \u30DD\u30B1\u30E2\u30F3\u306B \u5909\u8EAB \u3057\u3066\u3057\u307E\u3046\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  infiltrator: {
    name: "\u3059\u308A\u306C\u3051",
    desc: "\u76F8\u624B\u306E \u58C1\u3084 \u8EAB\u4EE3\u308F\u308A\u3092 \u3059\u308A\u306C\u3051\u3066 \u653B\u6483 \u3067\u304D\u308B",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  innardsout: {
    name: "\u3068\u3073\u3060\u3059\u306A\u304B\u307F",
    desc: "\u76F8\u624B\u306B \u5012\u3055\u308C\u305F\u3068\u304D \uFF28\uFF30\u306E \u6B8B\u308A\u306E \u3076\u3093\u3060\u3051 \u76F8\u624B\u306B \u30C0\u30E1\u30FC\u30B8\u3092 \u3042\u305F\u3048\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#aftermath"
  },
  innerfocus: {
    name: "\u305B\u3044\u3057\u3093\u308A\u3087\u304F",
    desc: "\u935B\u3048\u3089\u308C\u305F \u7CBE\u795E\u306B \u3088\u3063\u3066 \u76F8\u624B\u306E \u653B\u6483\u306B \u3072\u308B\u307E\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  insomnia: {
    name: "\u3075\u307F\u3093",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  intimidate: {
    name: "\u3044\u304B\u304F",
    desc: "\u767B\u5834 \u3057\u305F\u3068\u304D \u5A01\u5687\u3057\u3066 \u76F8\u624B\u3092 \u840E\u7E2E\u3055\u305B \u76F8\u624B\u306E \u653B\u6483\u3092 \u4E0B\u3052\u3066 \u3057\u307E\u3046\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  intrepidsword: {
    name: "\u3075\u3068\u3046\u306E\u3051\u3093",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  ironbarbs: {
    name: "\u3066\u3064\u306E\u30C8\u30B2",
    desc: "\u81EA\u5206\u306B \u89E6\u3063\u305F \u76F8\u624B\u306B \u9244\u306E\u30C8\u30B2\u3067 \u30C0\u30E1\u30FC\u30B8\u3092 \u3042\u305F\u3048\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#roughskin"
  },
  ironfist: {
    name: "\u3066\u3064\u306E\u3053\u3076\u3057",
    desc: "\u30D1\u30F3\u30C1\u3092 \u4F7F\u3046 \u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  justified: {
    name: "\u305B\u3044\u304E\u306E\u3053\u3053\u308D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  keeneye: {
    name: "\u3059\u308B\u3069\u3044\u3081",
    desc: "\u92ED\u3044 \u76EE\u306E \u304A\u304B\u3052\u3067 \u547D\u4E2D\u7387\u3092 \u4E0B\u3052\u3089\u308C\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  klutz: {
    name: "\u3076\u304D\u3088\u3046",
    desc: "\u6301\u3063\u3066\u3044\u308B \u9053\u5177\u3092 \u4F7F\u3046\u3053\u3068\u304C \u3067\u304D\u306A\u3044\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  leafguard: {
    name: "\u30EA\u30FC\u30D5\u30AC\u30FC\u30C9",
    desc: "\u5929\u6C17\u304C \u6674\u308C\u306E\u3068\u304D\u306F \u72B6\u614B\u7570\u5E38\u306B \u306A\u3089\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  levitate: {
    name: "\u3075\u3086\u3046",
    desc: "\u5730\u9762\u304B\u3089 \u6D6E\u304F\u3053\u3068\u306B\u3088\u3063\u3066 \u3058\u3081\u3093\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  libero: {
    name: "\u30EA\u30D9\u30ED",
    desc: "\u81EA\u5206\u304C \u51FA\u3059 \u6280\u3068 \u540C\u3058 \u30BF\u30A4\u30D7\u306B \u5909\u5316\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  lightmetal: {
    name: "\u30E9\u30A4\u30C8\u30E1\u30BF\u30EB",
    desc: "\u81EA\u5206\u306E \u91CD\u3055\u304C \u534A\u5206\u306B \u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lightningrod: {
    name: "\u3072\u3089\u3044\u3057\u3093",
    desc: "\u3067\u3093\u304D\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u81EA\u5206\u306B \u5BC4\u305B\u3064\u3051 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305A\u306B \u7279\u653B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u306F \u653B\u6483\u3092 \u5F15\u304D\u5BC4\u305B\u305F\uFF01"
  },
  limber: {
    name: "\u3058\u3085\u3046\u306A\u3093",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lingeringaroma: {
    name: "\u3068\u308C\u306A\u3044\u306B\u304A\u3044",
    desc: "\u76F8\u624B\u306B \u89E6\u3089\u308C\u308B\u3068 \u3068\u308C\u306A\u3044\u306B\u304A\u3044\u304C \u76F8\u624B\u306B \u3046\u3064\u3063\u3066\u3057\u307E\u3046\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "  [TARGET]\u306F \u306B\u304A\u3044\u304C \u3046\u3064\u3063\u3066 \u3068\u308C\u306A\u304F\u306A\u3063\u3061\u3083\u3063\u305F\uFF01"
  },
  liquidooze: {
    name: "\u30D8\u30C9\u30ED\u3048\u304D",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  [POKEMON]\u306F \u30D8\u30C9\u30ED\u3048\u304D\u3092 \u5438\u3044\u53D6\u3063\u305F\uFF01"
  },
  liquidvoice: {
    name: "\u3046\u308B\u304A\u3044\u30DC\u30A4\u30B9",
    desc: "\u3059\u3079\u3066\u306E \u97F3\u6280\u304C \u307F\u305A\u30BF\u30A4\u30D7\u306B \u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  longreach: {
    name: "\u3048\u3093\u304B\u304F",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magicbounce: {
    name: "\u30DE\u30B8\u30C3\u30AF\u30DF\u30E9\u30FC",
    desc: "\u76F8\u624B\u306B \u3060\u3055\u308C\u305F \u5909\u5316\u6280\u3092 \u53D7\u3051\u305A\u306B \u305D\u306E\u307E\u307E \u8FD4\u3059 \u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    move: "#magiccoat"
  },
  magicguard: {
    name: "\u30DE\u30B8\u30C3\u30AF\u30AC\u30FC\u30C9",
    desc: "\u653B\u6483 \u4EE5\u5916\u3067\u306F \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  magician: {
    name: "\u30DE\u30B8\u30B7\u30E3\u30F3",
    desc: "\u6280\u3092 \u5F53\u3066\u305F \u76F8\u624B\u306E \u9053\u5177\u3092 \u596A\u3063\u3066\u3057\u307E\u3046\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magmaarmor: {
    name: "\u30DE\u30B0\u30DE\u306E\u3088\u308D\u3044",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magnetpull: {
    name: "\u3058\u308A\u3087\u304F",
    desc: "\u306F\u304C\u306D\u30BF\u30A4\u30D7\u306E \u30DD\u30B1\u30E2\u30F3\u3092 \u78C1\u529B\u3067 \u5F15\u304D\u3064\u3051\u3066 \u9003\u3052\u3089\u308C\u306A\u304F\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  marvelscale: {
    name: "\u3075\u3057\u304E\u306A\u3046\u308D\u3053",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megalauncher: {
    name: "\u30E1\u30AC\u30E9\u30F3\u30C1\u30E3\u30FC",
    desc: "\u6CE2\u52D5\u306E \u6280\u306E \u5A01\u529B\u304C \u9AD8\u304F\u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megasol: {
    name: "\u30E1\u30AC\u30BD\u30FC\u30E9\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  merciless: {
    name: "\u3072\u3068\u3067\u306A\u3057",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mimicry: {
    name: "\u304E\u305F\u3044",
    desc: "\u30D5\u30A3\u30FC\u30EB\u30C9\u306E \u72B6\u614B\u306B \u3042\u308F\u305B\u3066 \u30DD\u30B1\u30E2\u30F3\u306E \u30BF\u30A4\u30D7\u304C \u5909\u308F\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u306F \u30BF\u30A4\u30D7\u304C \u5143\u306B \u623B\u3063\u305F\uFF01"
  },
  mindseye: {
    name: "\u3057\u3093\u304C\u3093",
    desc: "\u30CE\u30FC\u30DE\u30EB \u304B\u304F\u3068\u3046\u30BF\u30A4\u30D7\u306E\u6280\u3092 \u30B4\u30FC\u30B9\u30C8\u30BF\u30A4\u30D7\u306B \u5F53\u3066\u308B\u3053\u3068\u304C \u3067\u304D\u308B\u3002 \u76F8\u624B\u306E \u56DE\u907F\u7387\u306E \u5909\u5316\u3092 \u7121\u8996\u3057 \u547D\u4E2D\u7387\u3082 \u4E0B\u3052\u3089\u308C\u306A\u3044\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  minus: {
    name: "\u30DE\u30A4\u30CA\u30B9",
    desc: "\u30D7\u30E9\u30B9\u304B \u30DE\u30A4\u30CA\u30B9\u306E \u7279\u6027\u3092 \u6301\u3064 \u30DD\u30B1\u30E2\u30F3\u304C \u4EF2\u9593\u306B \u3044\u308B\u3068 \u81EA\u5206\u306E \u7279\u653B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  mirrorarmor: {
    name: "\u30DF\u30E9\u30FC\u30A2\u30FC\u30DE\u30FC",
    desc: "\u81EA\u5206\u304C \u53D7\u3051\u305F \u80FD\u529B \u30C0\u30A6\u30F3\u306E \u52B9\u679C \u3060\u3051\u3092 \u8DF3\u306D\u8FD4\u3059\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mistysurge: {
    name: "\u30DF\u30B9\u30C8\u30E1\u30A4\u30AB\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moldbreaker: {
    name: "\u304B\u305F\u3084\u3076\u308A",
    desc: "\u76F8\u624B\u306E \u7279\u6027\u306B \u30B8\u30E3\u30DE\u3055\u308C\u308B \u3053\u3068\u306A\u304F \u76F8\u624B\u306B \u6280\u3092 \u51FA\u3059\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  [POKEMON]\u306F \u304B\u305F\u3084\u3076\u308A\u3060\uFF01"
  },
  moody: {
    name: "\u30E0\u30E9\u3063\u3051",
    desc: "\u6BCE\u30BF\u30FC\u30F3 \u80FD\u529B\u306E \u3069\u308C\u304B\u304C \u3050\u30FC\u3093\u3068 \u4E0A\u304C\u3063\u3066 \u3069\u308C\u304B\u304C \u4E0B\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  motordrive: {
    name: "\u3067\u3093\u304D\u30A8\u30F3\u30B8\u30F3",
    desc: "\u3067\u3093\u304D\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u308B\u3068 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305A\u306B \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moxie: {
    name: "\u3058\u3057\u3093\u304B\u3058\u3087\u3046",
    desc: "\u76F8\u624B\u3092 \u5012\u3059\u3068 \u81EA\u4FE1\u304C \u3064\u3044\u3066 \u653B\u6483\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multiscale: {
    name: "\u30DE\u30EB\u30C1\u30B9\u30B1\u30A4\u30EB",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multitype: {
    name: "\u30DE\u30EB\u30C1\u30BF\u30A4\u30D7",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  mummy: {
    name: "\u30DF\u30A4\u30E9",
    desc: "\u76F8\u624B\u306B \u89E6\u3089\u308C\u308B\u3068 \u76F8\u624B\u3092 \u30DF\u30A4\u30E9\u306B \u3057\u3066\u3057\u307E\u3046\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "  [TARGET]\u306F \u7279\u6027\u304C \u30DF\u30A4\u30E9\u306B\u306A\u3063\u3061\u3083\u3063\u305F\uFF01"
  },
  myceliummight: {
    name: "\u304D\u3093\u3057\u306E\u3061\u304B\u3089",
    desc: "\u5909\u5316\u6280\u3092 \u51FA\u3059\u3068\u304D \u5FC5\u305A \u884C\u52D5\u304C \u9045\u304F\u306A\u308B\u304C \u76F8\u624B\u306E \u7279\u6027\u306B \u30B8\u30E3\u30DE\u3055\u308C\u306A\u3044\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  naturalcure: {
    name: "\u3057\u305C\u3093\u304B\u3044\u3075\u304F",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  neuroforce: {
    name: "\u30D6\u30EC\u30A4\u30F3\u30D5\u30A9\u30FC\u30B9",
    desc: "\u52B9\u679C\u30D0\u30C4\u30B0\u30F3\u306E \u653B\u6483\u3067 \u5A01\u529B\u304C \u3055\u3089\u306B \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  neutralizinggas: {
    name: "\u304B\u304C\u304F\u3078\u3093\u304B\u30AC\u30B9",
    desc: "\u304B\u304C\u304F\u3078\u3093\u304B\u30AC\u30B9\u306E \u30DD\u30B1\u30E2\u30F3\u304C \u5834\u306B\u3044\u308B\u3068 \u3059\u3079\u3066\u306E \u30DD\u30B1\u30E2\u30F3\u306E \u7279\u6027\u306E \u52B9\u679C\u304C \u6D88\u3048\u305F\u308A \u767A\u52D5 \u3057\u306A\u304F\u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  \u3042\u305F\u308A\u306B \u304B\u304C\u304F\u3078\u3093\u304B\u30AC\u30B9\u304C \u5145\u6E80\u3057\u305F\uFF01",
    end: "  \u304B\u304C\u304F\u3078\u3093\u304B\u30AC\u30B9\u306E \u52B9\u679C\u304C \u5207\u308C\u305F\uFF01"
  },
  noguard: {
    name: "\u30CE\u30FC\u30AC\u30FC\u30C9",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  normalize: {
    name: "\u30CE\u30FC\u30DE\u30EB\u30B9\u30AD\u30F3",
    desc: "\u3069\u3093\u306A \u30BF\u30A4\u30D7\u306E \u6280\u3067\u3082 \u3059\u3079\u3066 \u30CE\u30FC\u30DE\u30EB\u30BF\u30A4\u30D7\u306B \u306A\u308B\u3002 \u5A01\u529B\u304C \u5C11\u3057 \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  oblivious: {
    name: "\u3069\u3093\u304B\u3093",
    desc: "\u920D\u611F\u306A\u306E\u3067 \u30E1\u30ED\u30E1\u30ED\u3084 \u3061\u3087\u3046\u306F\u3064\u72B6\u614B\u306B \u306A\u3089\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  opportunist: {
    name: "\u3073\u3093\u3058\u3087\u3046",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  orichalcumpulse: {
    name: "\u3072\u3072\u3044\u308D\u306E\u3053\u3069\u3046",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306F \u3072\u3056\u3057\u3092 \u5F37\u3081 \u53E4\u4EE3\u306E\u9F13\u52D5\u304C \u66B4\u308C\u3060\u3059\uFF01\uFF01",
    activate: "  [POKEMON]\u306F \u3072\u3056\u3057\u3092 \u53D7\u3051\u3066 \u53E4\u4EE3\u306E\u9F13\u52D5\u304C \u66B4\u308C\u3060\u3059\uFF01\uFF01"
  },
  overcoat: {
    name: "\u307C\u3046\u3058\u3093",
    desc: "\u3059\u306A\u3042\u3089\u3057\u3084 \u3042\u3089\u308C\u306A\u3069\u306E \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u306A\u3044\u3002 \u7C89\u306E \u6280\u3092 \u53D7\u3051\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  overgrow: {
    name: "\u3057\u3093\u308A\u3087\u304F",
    desc: "\uFF28\uFF30\u304C \u6E1B\u3063\u305F\u3068\u304D \u304F\u3055\u30BF\u30A4\u30D7\u306E \u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  owntempo: {
    name: "\u30DE\u30A4\u30DA\u30FC\u30B9",
    desc: "\u30DE\u30A4\u30DA\u30FC\u30B9\u306A\u306E\u3067 \u3053\u3093\u3089\u3093\u72B6\u614B\u306B \u306A\u3089\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  parentalbond: {
    name: "\u304A\u3084\u3053\u3042\u3044",
    desc: "\u89AA\u5B50 \uFF12\u5339\u3067 \uFF12\u56DE \u653B\u6483\u3059\u308B\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  pastelveil: {
    name: "\u30D1\u30B9\u30C6\u30EB\u30D9\u30FC\u30EB",
    desc: "\u81EA\u5206\u3082 \u5473\u65B9\u3082 \u3069\u304F\u306E \u72B6\u614B\u7570\u5E38\u3092 \u53D7\u3051\u306A\u304F\u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  perishbody: {
    name: "\u307B\u308D\u3073\u306E\u30DC\u30C7\u30A3",
    desc: "\u63A5\u89E6\u3059\u308B \u6280\u3092 \u53D7\u3051\u308B\u3068 \u304A\u4E92\u3044 \uFF13\u30BF\u30FC\u30F3 \u305F\u3064\u3068 \u3072\u3093\u3057\u306B\u306A\u308B\u3002 \u4EA4\u4EE3\u3059\u308B\u3068 \u52B9\u679C\u306F \u306A\u304F\u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \u304A\u305F\u304C\u3044\u306F \uFF13\u30BF\u30FC\u30F3\u5F8C\u306B \u6EC5\u3073\u3066\u3057\u307E\u3046\uFF01"
  },
  pickpocket: {
    name: "\u308F\u308B\u3044\u3066\u3050\u305B",
    desc: "\u89E6\u3089\u308C\u305F \u76F8\u624B\u306E \u9053\u5177\u3092 \u76D7\u3093\u3067 \u3057\u307E\u3046\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pickup: {
    name: "\u3082\u306E\u3072\u308D\u3044",
    desc: "\u76F8\u624B\u306E \u4F7F\u3063\u305F \u9053\u5177\u3092 \u62FE\u3063\u3066\u304F\u308B\u3053\u3068\u304C \u3042\u308B\u3002 \u5192\u967A\u4E2D\u3082 \u62FE\u3063\u3066\u304F\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    addItem: "#recycle"
  },
  piercingdrill: {
    name: "\u304B\u3093\u3064\u3046\u30C9\u30EA\u30EB",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pixilate: {
    name: "\u30D5\u30A7\u30A2\u30EA\u30FC\u30B9\u30AD\u30F3",
    desc: "\u30CE\u30FC\u30DE\u30EB\u30BF\u30A4\u30D7\u306E \u6280\u304C \u30D5\u30A7\u30A2\u30EA\u30FC\u30BF\u30A4\u30D7\u306B\u306A\u308B\u3002 \u5A01\u529B\u304C \u5C11\u3057 \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  plus: {
    name: "\u30D7\u30E9\u30B9",
    desc: "\u30D7\u30E9\u30B9\u304B \u30DE\u30A4\u30CA\u30B9\u306E \u7279\u6027\u3092 \u6301\u3064 \u30DD\u30B1\u30E2\u30F3\u304C \u4EF2\u9593\u306B \u3044\u308B\u3068 \u81EA\u5206\u306E \u7279\u653B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  poisonheal: {
    name: "\u30DD\u30A4\u30BA\u30F3\u30D2\u30FC\u30EB",
    desc: "\u3069\u304F\u72B6\u614B\u306B \u306A\u308B\u3068 \uFF28\uFF30\u304C \u6E1B\u3089\u305A\u306B \u5897\u3048\u3066\u3044\u304F\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisonpoint: {
    name: "\u3069\u304F\u306E\u30C8\u30B2",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  poisonpuppeteer: {
    name: "\u3069\u304F\u304F\u3050\u3064",
    desc: "\u30E2\u30E2\u30EF\u30ED\u30A6\u306E \u6280\u306B\u3088\u3063\u3066 \u3069\u304F\u72B6\u614B\u306B \u306A\u3063\u305F \u76F8\u624B\u306F \u3053\u3093\u3089\u3093\u72B6\u614B\u306B\u3082 \u306A\u3063\u3066\u3057\u307E\u3046\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisontouch: {
    name: "\u3069\u304F\u3057\u3085",
    desc: "\u89E6\u308B \u3060\u3051\u3067 \u76F8\u624B\u3092 \u3069\u304F \u72B6\u614B\u306B \u3059\u308B\u3053\u3068\u304C\u3042\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  powerconstruct: {
    name: "\u30B9\u30EF\u30FC\u30E0\u30C1\u30A7\u30F3\u30B8",
    desc: "\uFF28\uFF30\u304C \u534A\u5206\u306B \u306A\u308B\u3068 \u30BB\u30EB\u305F\u3061\u304C \u5FDC\u63F4\u306B \u99C6\u3051\u3064\u3051 \u30D1\u30FC\u30D5\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30E0\u306B \u59FF\u3092 \u5909\u3048\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \u305F\u304F\u3055\u3093\u306E \u6C17\u914D\u3092 \u611F\u3058\u308B\u2026\u2026\uFF01",
    transform: "[POKEMON]\u306F \u30D1\u30FC\u30D5\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30E0\u306B \u5909\u308F\u3063\u305F\uFF01"
  },
  powerofalchemy: {
    name: "\u304B\u304C\u304F\u306E\u3061\u304B\u3089",
    desc: "\u5012\u3055\u308C\u305F \u5473\u65B9\u306E \u7279\u6027\u3092 \u53D7\u3051\u7D99\u304E \u540C\u3058 \u7279\u6027\u306B \u5909\u308F\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "#receiver"
  },
  powerspot: {
    name: "\u30D1\u30EF\u30FC\u30B9\u30DD\u30C3\u30C8",
    desc: "\u96A3\u306B \u3044\u308B\u3060\u3051\u3067 \u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prankster: {
    name: "\u3044\u305F\u305A\u3089\u3054\u3053\u308D",
    desc: "\u5909\u5316\u6280\u3092 \u5148\u5236\u3067 \u51FA\u3059\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  pressure: {
    name: "\u30D7\u30EC\u30C3\u30B7\u30E3\u30FC",
    desc: "\u30D7\u30EC\u30C3\u30B7\u30E3\u30FC\u3092 \u3042\u305F\u3048\u3066 \u76F8\u624B\u306E \u4F7F\u3046 \u6280\u306E \uFF30\uFF30\u3092 \u591A\u304F \u6E1B\u3089\u3059\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  [POKEMON]\u306F \u30D7\u30EC\u30C3\u30B7\u30E3\u30FC\u3092 \u653E\u3063\u3066\u3044\u308B\uFF01"
  },
  primordialsea: {
    name: "\u306F\u3058\u307E\u308A\u306E\u3046\u307F",
    desc: "\u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u653B\u6483\u3092 \u53D7\u3051\u306A\u3044 \u5929\u6C17\u306B\u3059\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prismarmor: {
    name: "\u30D7\u30EA\u30BA\u30E0\u30A2\u30FC\u30DE\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  propellertail: {
    name: "\u30B9\u30AF\u30EA\u30E5\u30FC\u304A\u3073\u308C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  protean: {
    name: "\u3078\u3093\u3052\u3093\u3058\u3056\u3044",
    desc: "\u81EA\u5206\u304C \u51FA\u3059 \u6280\u3068 \u540C\u3058 \u30BF\u30A4\u30D7\u306B \u5909\u5316\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  protosynthesis: {
    name: "\u3053\u3060\u3044\u304B\u3063\u305B\u3044",
    desc: "\u30D6\u30FC\u30B9\u30C8\u30A8\u30CA\u30B8\u30FC\u3092 \u6301\u305F\u305B\u308B\u304B \u5929\u6C17\u304C \u6674\u308C\u306E\u3068\u304D \u3044\u3061\u3070\u3093 \u9AD8\u3044\u80FD\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u306F \u306B\u307B\u3093\u3070\u308C\u3067 \u3053\u3060\u3044\u304B\u3063\u305B\u3044\u3092 \u767A\u52D5\u3057\u305F\uFF01",
    activateFromItem: "  [POKEMON]\u306F \u30D6\u30FC\u30B9\u30C8\u30A8\u30CA\u30B8\u30FC\u3067 \u3053\u3060\u3044\u304B\u3063\u305B\u3044\u3092 \u767A\u52D5\u3057\u305F\uFF01",
    start: "  [POKEMON]\u306E [STAT]\u304C \u9AD8\u307E\u3063\u305F\uFF01",
    end: "  [POKEMON]\u306F \u3053\u3060\u3044\u304B\u3063\u305B\u3044\u306E \u52B9\u679C\u304C \u5207\u308C\u305F\uFF01"
  },
  psychicsurge: {
    name: "\u30B5\u30A4\u30B3\u30E1\u30A4\u30AB\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  punkrock: {
    name: "\u30D1\u30F3\u30AF\u30ED\u30C3\u30AF",
    desc: "\u97F3\u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002 \u53D7\u3051\u305F \u97F3\u6280\u306E \u30C0\u30E1\u30FC\u30B8\u306F \u534A\u5206\u306B \u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purepower: {
    name: "\u30E8\u30AC\u30D1\u30EF\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purifyingsalt: {
    name: "\u304D\u3088\u3081\u306E\u3057\u304A",
    desc: "\u6E05\u3089\u304B\u306A\u5869\u3067 \u72B6\u614B\u7570\u5E38\u306B \u306A\u3089\u306A\u3044\u3002 \u30B4\u30FC\u30B9\u30C8\u30BF\u30A4\u30D7\u306E \u6280\u306E \u30C0\u30E1\u30FC\u30B8\u3092 \u534A\u6E1B\u3055\u305B\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  quarkdrive: {
    name: "\u30AF\u30A9\u30FC\u30AF\u30C1\u30E3\u30FC\u30B8",
    desc: "\u30D6\u30FC\u30B9\u30C8\u30A8\u30CA\u30B8\u30FC\u3092 \u6301\u305F\u305B\u308B\u304B \u30A8\u30EC\u30AD\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u3068\u304D \u3044\u3061\u3070\u3093 \u9AD8\u3044\u80FD\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u306F \u30A8\u30EC\u30AD\u30D5\u30A3\u30FC\u30EB\u30C9\u3067 \u30AF\u30A9\u30FC\u30AF\u30C1\u30E3\u30FC\u30B8\u3092 \u767A\u52D5\u3057\u305F\uFF01",
    activateFromItem: "  [POKEMON]\u306F \u30D6\u30FC\u30B9\u30C8\u30A8\u30CA\u30B8\u30FC\u3067 \u30AF\u30A9\u30FC\u30AF\u30C1\u30E3\u30FC\u30B8\u3092 \u767A\u52D5\u3057\u305F\uFF01",
    start: "  [POKEMON]\u306E [STAT]\u304C \u9AD8\u307E\u3063\u305F\uFF01",
    end: "  [POKEMON]\u306F \u30AF\u30A9\u30FC\u30AF\u30C1\u30E3\u30FC\u30B8\u306E \u52B9\u679C\u304C \u5207\u308C\u305F\uFF01"
  },
  queenlymajesty: {
    name: "\u3058\u3087\u304A\u3046\u306E\u3044\u3052\u3093",
    desc: "\u76F8\u624B\u306B \u5A01\u5727\u611F\u3092 \u3042\u305F\u3048 \u3053\u3061\u3089\u306B \u3080\u304B\u3063\u3066 \u5148\u5236\u6280\u3092 \u51FA\u305B\u306A\u3044 \u3088\u3046\u306B\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  quickdraw: {
    name: "\u30AF\u30A4\u30C3\u30AF\u30C9\u30ED\u30A6",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u306F \u30AF\u30A4\u30C3\u30AF\u30C9\u30ED\u30A6\u3067 \u884C\u52D5\u304C \u306F\u3084\u304F\u306A\u3063\u305F\uFF01"
  },
  quickfeet: {
    name: "\u306F\u3084\u3042\u3057",
    desc: "\u72B6\u614B\u7570\u5E38\u306B \u306A\u308B\u3068 \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  raindish: {
    name: "\u3042\u3081\u3046\u3051\u3056\u3089",
    desc: "\u5929\u6C17\u304C \u96E8\u306E\u3068\u304D \u5C11\u3057\u305A\u3064 \uFF28\uFF30\u3092 \u56DE\u5FA9\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  rattled: {
    name: "\u3073\u3073\u308A",
    desc: "\u3042\u304F\u30BF\u30A4\u30D7\u3068 \u30B4\u30FC\u30B9\u30C8\u30BF\u30A4\u30D7\u3068 \u3080\u3057\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u308B\u3068 \u3073\u3073\u3063\u3066 \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  receiver: {
    name: "\u30EC\u30B7\u30FC\u30D0\u30FC",
    desc: "\u5012\u3055\u308C\u305F \u5473\u65B9\u306E \u7279\u6027\u3092 \u53D7\u3051\u7D99\u3044\u3067 \u540C\u3058 \u7279\u6027\u306B \u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "  [SOURCE]\u306E [ABILITY]\u3092 \u5F15\u304D\u7D99\u3044\u3060\uFF01"
  },
  reckless: {
    name: "\u3059\u3066\u307F",
    desc: "\u53CD\u52D5\u3067 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u308B \u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  refrigerate: {
    name: "\u30D5\u30EA\u30FC\u30BA\u30B9\u30AD\u30F3",
    desc: "\u30CE\u30FC\u30DE\u30EB\u30BF\u30A4\u30D7\u306E \u6280\u304C \u3053\u304A\u308A\u30BF\u30A4\u30D7\u306B \u306A\u308B\u3002 \u5A01\u529B\u304C \u5C11\u3057 \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  regenerator: {
    name: "\u3055\u3044\u305B\u3044\u308A\u3087\u304F",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  ripen: {
    name: "\u3058\u3085\u304F\u305B\u3044",
    desc: "\u719F\u6210 \u3055\u305B\u308B\u3053\u3068\u3067 \u304D\u306E\u307F\u306E \u52B9\u679C\u304C \u500D\u306B \u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rivalry: {
    name: "\u3068\u3046\u305D\u3046\u3057\u3093",
    desc: "\u6027\u5225\u304C \u540C\u3058\u3060\u3068 \u95D8\u4E89\u5FC3\u3092 \u71C3\u3084\u3057\u3066 \u5F37\u304F\u306A\u308B\u3002 \u6027\u5225\u304C \u9055\u3046\u3068 \u5F31\u304F\u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rkssystem: {
    name: "\uFF21\uFF32\u30B7\u30B9\u30C6\u30E0",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rockhead: {
    name: "\u3044\u3057\u3042\u305F\u307E",
    desc: "\u53CD\u52D5\u3092 \u53D7\u3051\u308B \u6280\u3092 \u51FA\u3057\u3066\u3082 \uFF28\uFF30\u304C \u6E1B\u3089\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  rockypayload: {
    name: "\u3044\u308F\u306F\u3053\u3073",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  roughskin: {
    name: "\u3055\u3081\u306F\u3060",
    desc: "\u653B\u6483\u3092 \u53D7\u3051\u305F\u3068\u304D \u81EA\u5206\u306B \u89E6\u308C\u305F \u76F8\u624B\u3092 \u3056\u3089\u3056\u3089\u306E \u808C\u3067 \u30AD\u30BA\u3064\u3051\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  [POKEMON]\u306F \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01"
  },
  runaway: {
    name: "\u306B\u3052\u3042\u3057",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandforce: {
    name: "\u3059\u306A\u306E\u3061\u304B\u3089",
    desc: "\u5929\u6C17\u304C \u3059\u306A\u3042\u3089\u3057\u306E \u3068\u304D \u3044\u308F\u30BF\u30A4\u30D7\u3068 \u3058\u3081\u3093\u30BF\u30A4\u30D7\u3068 \u306F\u304C\u306D\u30BF\u30A4\u30D7\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandrush: {
    name: "\u3059\u306A\u304B\u304D",
    desc: "\u5929\u6C17\u304C \u3059\u306A\u3042\u3089\u3057 \u306E\u3068\u304D \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandspit: {
    name: "\u3059\u306A\u306F\u304D",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sandstream: {
    name: "\u3059\u306A\u304A\u3053\u3057",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandveil: {
    name: "\u3059\u306A\u304C\u304F\u308C",
    desc: "\u7802\u3042\u3089\u3057\u306E \u3068\u304D \u56DE\u907F\u7387\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sapsipper: {
    name: "\u305D\u3046\u3057\u3087\u304F",
    desc: "\u304F\u3055\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u308B\u3068 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305A\u306B \u653B\u6483\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  schooling: {
    name: "\u304E\u3087\u3050\u3093",
    desc: "\uFF28\uFF30\u304C \u591A\u3044\u3068\u304D\u306F \u7FA4\u308C\u3066 \u5F37\u304F\u306A\u308B\u3002 \uFF28\uFF30\u306E \u6B8B\u308A\u304C \u5C11\u306A\u304F\u306A\u308B\u3068 \u7FA4\u308C\u306F \u6563\u308A\u6563\u308A\u306B \u306A\u3063\u3066\u3057\u307E\u3046\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON]\u306E \u7FA4\u308C\u304C \u96C6\u307E\u3063\u305F\uFF01",
    transformEnd: "[POKEMON]\u306E \u7FA4\u308C\u306F \u3061\u308A\u3062\u308A\u306B \u306A\u3063\u305F\uFF01"
  },
  scrappy: {
    name: "\u304D\u3082\u3063\u305F\u307E",
    desc: "\u30B4\u30FC\u30B9\u30C8\u30BF\u30A4\u30D7\u306E \u30DD\u30B1\u30E2\u30F3\u306B \u30CE\u30FC\u30DE\u30EB\u30BF\u30A4\u30D7\u3068 \u304B\u304F\u3068\u3046\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u5F53\u3066\u308B\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  screencleaner: {
    name: "\u30D0\u30EA\u30A2\u30D5\u30EA\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  seedsower: {
    name: "\u3053\u307C\u308C\u30C0\u30CD",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  serenegrace: {
    name: "\u3066\u3093\u306E\u3081\u3050\u307F",
    desc: "\u5929\u306E\u6075\u307F\u306E \u304A\u304B\u3052\u3067 \u6280\u306E \u8FFD\u52A0\u52B9\u679C\u304C \u3067\u3084\u3059\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  shadowshield: {
    name: "\u30D5\u30A1\u30F3\u30C8\u30E0\u30AC\u30FC\u30C9",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shadowtag: {
    name: "\u304B\u3052\u3075\u307F",
    desc: "\u76F8\u624B\u306E \u5F71\u3092 \u8E0F\u307F \u9003\u3052\u305F\u308A \u4EA4\u4EE3 \u3067\u304D\u306A\u304F\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sharpness: {
    name: "\u304D\u308C\u3042\u3058",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shedskin: {
    name: "\u3060\u3063\u3074",
    desc: "\u4F53\u306E \u76AE\u3092 \u8131\u304E\u6368\u3066\u308B\u3053\u3068\u3067 \u72B6\u614B\u7570\u5E38\u3092 \u6CBB\u3059\u3053\u3068\u304C \u3042\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sheerforce: {
    name: "\u3061\u304B\u3089\u305A\u304F",
    desc: "\u6280\u306E \u8FFD\u52A0\u52B9\u679C\u306F \u306A\u304F\u306A\u308B\u304C \u305D\u306E\u3076\u3093 \u9AD8\u3044 \u5A01\u529B\u3067 \u6280\u3092 \u51FA\u3059\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  shellarmor: {
    name: "\u30B7\u30A7\u30EB\u30A2\u30FC\u30DE\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shielddust: {
    name: "\u308A\u3093\u3077\u3093",
    desc: "\u308A\u3093\u3077\u3093\u306B \u5B88\u3089\u308C\u3066 \u6280\u306E \u8FFD\u52A0\u52B9\u679C\u3092 \u53D7\u3051\u306A\u304F\u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  shieldsdown: {
    name: "\u30EA\u30DF\u30C3\u30C8\u30B7\u30FC\u30EB\u30C9",
    desc: "\uFF28\uFF30\u304C \u534A\u5206\u306B \u306A\u308B\u3068 \u6BBB\u304C \u58CA\u308C\u3066 \u653B\u6483\u7684\u306B \u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "\u30EA\u30DF\u30C3\u30C8\u30B7\u30FC\u30EB\u30C9 \u767A\u52D5\uFF01",
    transformEnd: "\u30EA\u30DF\u30C3\u30C8\u30B7\u30FC\u30EB\u30C9 \u89E3\u9664\uFF01"
  },
  simple: {
    name: "\u305F\u3093\u3058\u3085\u3093",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  skilllink: {
    name: "\u30B9\u30AD\u30EB\u30EA\u30F3\u30AF",
    desc: "\u9023\u7D9A\u6280\u3092 \u4F7F\u3046\u3068 \u3044\u3064\u3082 \u6700\u9AD8\u56DE\u6570 \u51FA\u3059\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  slowstart: {
    name: "\u30B9\u30ED\u30FC\u30B9\u30BF\u30FC\u30C8",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  [POKEMON]\u306F \u8ABF\u5B50\u304C \u4E0A\u304C\u3089\u306A\u3044\uFF01",
    end: "  [POKEMON]\u306F \u8ABF\u5B50\u3092 \u53D6\u308A\u623B\u3057\u305F\uFF01"
  },
  slushrush: {
    name: "\u3086\u304D\u304B\u304D",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sniper: {
    name: "\u30B9\u30CA\u30A4\u30D1\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  snowcloak: {
    name: "\u3086\u304D\u304C\u304F\u308C",
    desc: "\u5929\u6C17\u304C \u3042\u3089\u308C\u306E\u3068\u304D \u56DE\u907F\u7387\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  snowwarning: {
    name: "\u3086\u304D\u3075\u3089\u3057",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solarpower: {
    name: "\u30B5\u30F3\u30D1\u30EF\u30FC",
    desc: "\u5929\u6C17\u304C \u6674\u308C\u308B\u3068 \u7279\u653B\u304C \u4E0A\u304C\u308B\u304C \u6BCE\u30BF\u30FC\u30F3 \uFF28\uFF30\u304C \u6E1B\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solidrock: {
    name: "\u30CF\u30FC\u30C9\u30ED\u30C3\u30AF",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soulheart: {
    name: "\u30BD\u30A6\u30EB\u30CF\u30FC\u30C8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soundproof: {
    name: "\u307C\u3046\u304A\u3093",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  speedboost: {
    name: "\u304B\u305D\u304F",
    desc: "\u6BCE\u30BF\u30FC\u30F3 \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  spicyspray: {
    name: "\u3068\u3073\u3060\u3059\u30CF\u30D0\u30CD\u30ED",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stakeout: {
    name: "\u306F\u308A\u3053\u307F",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stall: {
    name: "\u3042\u3068\u3060\u3057",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stalwart: {
    name: "\u3059\u3058\u304C\u306D\u3044\u308A",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stamina: {
    name: "\u3058\u304D\u3085\u3046\u308A\u3087\u304F",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stancechange: {
    name: "\u30D0\u30C8\u30EB\u30B9\u30A4\u30C3\u30C1",
    desc: "\u653B\u6483\u6280\u3092 \u51FA\u3059\u3068 \u30D6\u30EC\u30FC\u30C9\u30D5\u30A9\u30EB\u30E0\u306B \u6280 \u30AD\u30F3\u30B0\u30B7\u30FC\u30EB\u30C9\u3092 \u51FA\u3059\u3068 \u30B7\u30FC\u30EB\u30C9\u30D5\u30A9\u30EB\u30E0\u306B \u5909\u5316\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    transform: "\u30D6\u30EC\u30FC\u30C9\u30D5\u30A9\u30EB\u30E0 \u30C1\u30A7\u30F3\u30B8\uFF01",
    transformEnd: "\u30B7\u30FC\u30EB\u30C9\u30D5\u30A9\u30EB\u30E0 \u30C1\u30A7\u30F3\u30B8\uFF01"
  },
  static: {
    name: "\u305B\u3044\u3067\u3093\u304D",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  steadfast: {
    name: "\u3075\u304F\u3064\u306E\u3053\u3053\u308D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steamengine: {
    name: "\u3058\u3087\u3046\u304D\u304D\u304B\u3093",
    desc: "\u307F\u305A\u30BF\u30A4\u30D7 \u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u308B\u3068 \u7D20\u65E9\u3055\u304C \u3050\u3050\u30FC\u3093\u3068 \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelworker: {
    name: "\u306F\u304C\u306D\u3064\u304B\u3044",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelyspirit: {
    name: "\u306F\u304C\u306D\u306E\u305B\u3044\u3057\u3093",
    desc: "\u5473\u65B9\u306E \u306F\u304C\u306D\u30BF\u30A4\u30D7\u306E \u653B\u6483\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stench: {
    name: "\u3042\u304F\u3057\u3085\u3046",
    desc: "\u81ED\u3044 \u306B\u304A\u3044\u3092 \u653E\u3064\u3053\u3068\u306B\u3088\u3063\u3066 \u653B\u6483\u3057\u305F \u3068\u304D\u306B \u76F8\u624B\u3092 \u3072\u308B\u307E\u305B\u308B\u3053\u3068\u304C \u3042\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  stickyhold: {
    name: "\u306D\u3093\u3061\u3083\u304F",
    desc: "\u7C98\u7740\u8CEA\u306E \u4F53\u306B \u9053\u5177\u304C \u304F\u3063\u3064\u3044\u3066\u3044\u308B\u305F\u3081 \u76F8\u624B\u306B \u9053\u5177\u3092 \u596A\u308F\u308C\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  [POKEMON]\u306E \u9053\u5177\u3092 \u596A\u3048\u306A\u3044\uFF01"
  },
  stormdrain: {
    name: "\u3088\u3073\u307F\u305A",
    desc: "\u307F\u305A\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u81EA\u5206\u306B \u3088\u305B\u3064\u3051 \u30C0\u30E1\u30FC\u30B8\u306F \u53D7\u3051\u305A\u306B \u7279\u653B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "#lightningrod"
  },
  strongjaw: {
    name: "\u304C\u3093\u3058\u3087\u3046\u3042\u3054",
    desc: "\u3042\u3054\u304C \u9811\u4E08\u3067 \u565B\u3080 \u6280\u306E \u5A01\u529B\u304C \u9AD8\u304F\u306A\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sturdy: {
    name: "\u304C\u3093\u3058\u3087\u3046",
    desc: "\u76F8\u624B\u306E \u6280\u3092 \u53D7\u3051\u3066\u3082 \u4E00\u6483\u3067 \u5012\u3055\u308C\u308B\u3053\u3068\u304C \u306A\u3044\u3002 \u4E00\u6483\u5FC5\u6BBA\u6280\u3082 \u52B9\u304B\u306A\u3044\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u306F \u653B\u6483\u3092 \u3053\u3089\u3048\u305F\uFF01"
  },
  suctioncups: {
    name: "\u304D\u3085\u3046\u3070\u3093",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u306F \u304D\u3085\u3046\u3070\u3093\u3067 \u306F\u308A\u3064\u3044\u3066\u3044\u308B\uFF01"
  },
  superluck: {
    name: "\u304D\u3087\u3046\u3046\u3093",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  supersweetsyrup: {
    name: "\u304B\u3093\u308D\u306A\u30DF\u30C4",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306E \u30DF\u30C4\u304B\u3089 \u3042\u307E\u3044\u304B\u304A\u308A\u304C \u305F\u3060\u3088\u3063\u3066\u3044\u308B\uFF01"
  },
  supremeoverlord: {
    name: "\u305D\u3046\u3060\u3044\u3057\u3087\u3046",
    desc: "\u767B\u5834\u3057\u305F\u3068\u304D \u4ECA\u307E\u3067 \u5012\u3055\u308C\u305F \u5473\u65B9\u306E \u6570\u304C \u591A\u3044\u307B\u3069 \u5C11\u3057\u305A\u3064 \u653B\u6483\u3068 \u7279\u653B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u306F \u5012\u3055\u308C\u305F \u4EF2\u9593\u304B\u3089 \u529B\u3092 \u3082\u3089\u3063\u305F\uFF01"
  },
  surgesurfer: {
    name: "\u30B5\u30FC\u30D5\u30C6\u30FC\u30EB",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  swarm: {
    name: "\u3080\u3057\u306E\u3057\u3089\u305B",
    desc: "\uFF28\uFF30\u304C \u6E1B\u3063\u305F\u3068\u304D \u3080\u3057\u30BF\u30A4\u30D7\u306E \u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sweetveil: {
    name: "\u30B9\u30A4\u30FC\u30C8\u30D9\u30FC\u30EB",
    desc: "\u5473\u65B9\u306E \u30DD\u30B1\u30E2\u30F3\u306F \u7720\u3089\u306A\u304F\u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u306F \u30B9\u30A4\u30FC\u30C8\u30D9\u30FC\u30EB\u3067 \u7720\u3089\u306A\u3044\uFF01"
  },
  swiftswim: {
    name: "\u3059\u3044\u3059\u3044",
    desc: "\u5929\u6C17\u304C \u96E8\u306E\u3068\u304D \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  swordofruin: {
    name: "\u308F\u3056\u308F\u3044\u306E\u3064\u308B\u304E",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306E \u308F\u3056\u308F\u3044\u306E\u3064\u308B\u304E\u3067 \u307E\u308F\u308A\u306E \u9632\u5FA1\u304C \u5F31\u307E\u3063\u305F\uFF01"
  },
  symbiosis: {
    name: "\u304D\u3087\u3046\u305B\u3044",
    desc: "\u5473\u65B9\u304C \u9053\u5177\u3092 \u4F7F\u3046\u3068 \u81EA\u5206\u306E \u6301\u3063\u3066\u3044\u308B \u9053\u5177\u3092 \u5473\u65B9\u306B \u6E21\u3059\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u306F [ITEM]\u3092 [TARGET]\u306B \u6301\u305F\u305B\u305F\uFF01"
  },
  synchronize: {
    name: "\u30B7\u30F3\u30AF\u30ED",
    desc: "\u81EA\u5206\u304C \u306A\u3063\u3066\u3057\u307E\u3063\u305F \u3069\u304F\u3084 \u307E\u3072\u3084 \u3084\u3051\u3069\u3092 \u76F8\u624B\u306B \u3046\u3064\u3059\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  tabletsofruin: {
    name: "\u308F\u3056\u308F\u3044\u306E\u304A\u3075\u3060",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306E \u308F\u3056\u308F\u3044\u306E\u304A\u3075\u3060\u3067 \u307E\u308F\u308A\u306E \u653B\u6483\u304C \u5F31\u307E\u3063\u305F\uFF01"
  },
  tangledfeet: {
    name: "\u3061\u3069\u308A\u3042\u3057",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  tanglinghair: {
    name: "\u30AB\u30FC\u30EA\u30FC\u30D8\u30A2\u30FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  technician: {
    name: "\u30C6\u30AF\u30CB\u30B7\u30E3\u30F3",
    desc: "\u5A01\u529B\u304C \u4F4E\u3044 \u6280\u306E \u5A01\u529B\u3092 \u9AD8\u304F\u3057\u3066 \u653B\u6483\u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  telepathy: {
    name: "\u30C6\u30EC\u30D1\u30B7\u30FC",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u306F \u5473\u65B9\u304B\u3089\u306E \u653B\u6483\u3092 \u53D7\u3051\u306A\u3044\uFF01"
  },
  teraformzero: {
    name: "\u30BC\u30ED\u30D5\u30A9\u30FC\u30DF\u30F3\u30B0",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  terashell: {
    name: "\u30C6\u30E9\u30B9\u30B7\u30A7\u30EB",
    desc: "\u5168\u30BF\u30A4\u30D7\u306E\u529B\u3092 \u79D8\u3081\u305F\u7532\u7F85\u306F HP\u304C \u6E80\u30BF\u30F3\u306E \u3068\u304D\u306B \u53D7\u3051\u308B \u30C0\u30E1\u30FC\u30B8\u3092 \u3059\u3079\u3066 \u4ECA\u3072\u3068\u3064\u306B \u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u306F \u7532\u7F85\u3092 \u304B\u304C\u3084\u304B\u305B \u30BF\u30A4\u30D7\u76F8\u6027\u3092 \u6B6A\u3081\u308B\uFF01\uFF01"
  },
  terashift: {
    name: "\u30C6\u30E9\u30B9\u30C1\u30A7\u30F3\u30B8",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON]\u306E \u59FF\u304C \u5909\u5316\u3057\u305F\uFF01"
  },
  teravolt: {
    name: "\u30C6\u30E9\u30DC\u30EB\u30C6\u30FC\u30B8",
    desc: "\u76F8\u624B\u306E \u7279\u6027\u306B \u30B8\u30E3\u30DE\u3055\u308C\u305A \u76F8\u624B\u306B \u6280\u3092 \u51FA\u3059\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  [POKEMON]\u306F \u5F3E\u3051\u308B \u30AA\u30FC\u30E9\u3092 \u653E\u3063\u3066\u3044\u308B\uFF01"
  },
  thermalexchange: {
    name: "\u306D\u3064\u3053\u3046\u304B\u3093",
    desc: "\u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u308B\u3068 \u653B\u6483\u304C \u4E0A\u304C\u308B\u3002 \u3084\u3051\u3069\u72B6\u614B\u306B \u306A\u3089\u306A\u3044\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  thickfat: {
    name: "\u3042\u3064\u3044\u3057\u307C\u3046",
    desc: "\u539A\u3044 \u8102\u80AA\u3067 \u5B88\u3089\u308C\u3066\u3044\u308B\u306E\u3067 \u307B\u306E\u304A\u30BF\u30A4\u30D7\u3068 \u3053\u304A\u308A\u30BF\u30A4\u30D7\u306E \u6280\u306E \u30C0\u30E1\u30FC\u30B8\u3092 \u534A\u6E1B\u3055\u305B\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  tintedlens: {
    name: "\u3044\u308D\u3081\u304C\u306D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  torrent: {
    name: "\u3052\u304D\u308A\u3085\u3046",
    desc: "\uFF28\uFF30\u304C \u6E1B\u3063\u305F\u3068\u304D \u307F\u305A\u30BF\u30A4\u30D7\u306E \u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  toughclaws: {
    name: "\u304B\u305F\u3044\u30C4\u30E1",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicboost: {
    name: "\u3069\u304F\u307C\u3046\u305D\u3046",
    desc: "\u3069\u304F\u72B6\u614B\u306B \u306A\u3063\u305F\u3068\u304D \u7269\u7406\u6280\u306E \u5A01\u529B\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicchain: {
    name: "\u3069\u304F\u306E\u304F\u3055\u308A",
    desc: "\u6BD2\u7D20\u3092 \u3075\u304F\u3093\u3060 \u9396\u306E\u529B\u3067 \u6280\u3092 \u5F53\u3066\u305F \u76F8\u624B\u3092 \u731B\u6BD2\u306E\u72B6\u614B\u306B \u3059\u308B\u3053\u3068\u304C \u3042\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicdebris: {
    name: "\u3069\u304F\u3052\u3057\u3087\u3046",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  trace: {
    name: "\u30C8\u30EC\u30FC\u30B9",
    desc: "\u767B\u5834 \u3057\u305F\u3068\u304D \u76F8\u624B\u306E \u7279\u6027\u3092 \u30C8\u30EC\u30FC\u30B9\u3057\u3066 \u540C\u3058 \u7279\u6027\u306B \u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "  [POKEMON]\u306F [SOURCE]\u306E [ABILITY]\u3092 \u30C8\u30EC\u30FC\u30B9\u3057\u305F\uFF01"
  },
  transistor: {
    name: "\u30C8\u30E9\u30F3\u30B8\u30B9\u30BF",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  triage: {
    name: "\u30D2\u30FC\u30EA\u30F3\u30B0\u30B7\u30D5\u30C8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  truant: {
    name: "\u306A\u307E\u3051",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    cant: "[POKEMON]\u306F \u306A\u307E\u3051\u3066\u3044\u308B"
  },
  turboblaze: {
    name: "\u30BF\u30FC\u30DC\u30D6\u30EC\u30A4\u30BA",
    desc: "\u76F8\u624B\u306E \u7279\u6027\u306B \u30B8\u30E3\u30DE\u3055\u308C\u305A \u76F8\u624B\u306B \u6280\u3092 \u51FA\u3059\u3053\u3068\u304C \u3067\u304D\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  [POKEMON]\u306F \u71C3\u3048\u76DB\u308B \u30AA\u30FC\u30E9\u3092 \u653E\u3063\u3066\u3044\u308B\uFF01"
  },
  unaware: {
    name: "\u3066\u3093\u306D\u3093",
    desc: "\u76F8\u624B\u306E \u80FD\u529B\u306E \u5909\u5316\u3092 \u7121\u8996\u3057\u3066 \u653B\u6483\u304C \u3067\u304D\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unburden: {
    name: "\u304B\u308B\u308F\u3056",
    desc: "\u6301\u3063\u3066\u3044\u305F \u9053\u5177\u304C \u306A\u304F\u306A\u308B\u3068 \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unnerve: {
    name: "\u304D\u3093\u3061\u3087\u3046\u304B\u3093",
    desc: "\u76F8\u624B\u3092 \u7DCA\u5F35\u3055\u305B\u3066 \u304D\u306E\u307F\u3092 \u98DF\u3079\u3089\u308C\u306A\u304F \u3055\u305B\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [TEAM]\u306F \u7DCA\u5F35\u3057\u3066 \u304D\u306E\u307F\u304C \u98DF\u3079\u3089\u308C\u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  unseenfist: {
    name: "\u3075\u304B\u3057\u306E\u3053\u3076\u3057",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    champions: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "\u308F\u3056\u308F\u3044\u306E\u3046\u3064\u308F",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u306E \u308F\u3056\u308F\u3044\u306E\u3046\u3064\u308F\u3067 \u307E\u308F\u308A\u306E \u7279\u653B\u304C \u5F31\u307E\u3063\u305F\uFF01"
  },
  victorystar: {
    name: "\u3057\u3087\u3046\u308A\u306E\u307B\u3057",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  vitalspirit: {
    name: "\u3084\u308B\u304D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  voltabsorb: {
    name: "\u3061\u304F\u3067\u3093",
    desc: "\u3067\u3093\u304D\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u308B\u3068 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305A\u306B \u56DE\u5FA9\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen3: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  wanderingspirit: {
    name: "\u3055\u307E\u3088\u3046\u305F\u307E\u3057\u3044",
    desc: "\u63A5\u89E6\u3059\u308B \u6280\u3067 \u653B\u6483 \u3057\u3066\u304D\u305F \u30DD\u30B1\u30E2\u30F3\u3068 \u7279\u6027\u3092 \u5165\u308C\u66FF\u3048\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "#skillswap"
  },
  waterabsorb: {
    name: "\u3061\u3087\u3059\u3044",
    desc: "\u307F\u305A\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u308B\u3068 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305A\u306B \u56DE\u5FA9\u3059\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterbubble: {
    name: "\u3059\u3044\u307B\u3046",
    desc: "\u81EA\u5206\u306B \u5BFE\u3059\u308B \u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u6280\u306E \u5A01\u529B\u3092 \u4E0B\u3052\u308B\u3002 \u3084\u3051\u3069 \u3057\u306A\u3044\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  watercompaction: {
    name: "\u307F\u305A\u304C\u305F\u3081",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterveil: {
    name: "\u307F\u305A\u306E\u30D9\u30FC\u30EB",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  weakarmor: {
    name: "\u304F\u3060\u3051\u308B\u3088\u308D\u3044",
    desc: "\u7269\u7406\u6280\u3067 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u308B\u3068 \u9632\u5FA1\u304C \u4E0B\u304C\u308A \u7D20\u65E9\u3055\u304C \u3050\u30FC\u3093\u3068 \u4E0A\u304C\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  wellbakedbody: {
    name: "\u3053\u3093\u304C\u308A\u30DC\u30C7\u30A3",
    desc: "\u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u6280\u3092 \u53D7\u3051\u308B\u3068 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305A\u306B \u9632\u5FA1\u304C \u3050\u30FC\u3093\u3068 \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  whitesmoke: {
    name: "\u3057\u308D\u3044\u3051\u3080\u308A",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wimpout: {
    name: "\u306B\u3052\u3054\u3057",
    desc: "\uFF28\uFF30\u304C \u534A\u5206\u306B \u306A\u308B\u3068 \u3042\u308F\u3066\u3066 \u9003\u3052\u51FA\u3057\u3066 \u624B\u6301\u3061\u306B \u5F15\u3063\u8FBC\u3093\u3067 \u3057\u307E\u3046\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  windpower: {
    name: "\u3075\u3046\u308A\u3087\u304F\u3067\u3093\u304D",
    desc: "\u98A8\u6280\u3092 \u53D7\u3051\u308B\u3068 \u3058\u3085\u3046\u3067\u3093 \u72B6\u614B\u306B \u306A\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#electromorphosis"
  },
  windrider: {
    name: "\u304B\u305C\u306E\u308A",
    desc: "\u304A\u3044\u304B\u305C\u304C \u5439\u3044\u305F\u308A \u98A8\u6280\u3092 \u53D7\u3051\u308B\u3068 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305A\u306B \u653B\u6483\u304C \u4E0A\u304C\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wonderguard: {
    name: "\u3075\u3057\u304E\u306A\u307E\u3082\u308A",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen3: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  wonderskin: {
    name: "\u30DF\u30E9\u30AF\u30EB\u30B9\u30AD\u30F3",
    desc: "\u5909\u5316\u6280\u3092 \u53D7\u3051\u306B\u304F\u3044 \u4F53\u306B \u306A\u3063\u3066\u3044\u308B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  zenmode: {
    name: "\u30C0\u30EB\u30DE\u30E2\u30FC\u30C9",
    desc: "\uFF28\uFF30\u304C \u534A\u5206 \u4EE5\u4E0B\u306B \u306A\u308B\u3068 \u59FF\u304C \u5909\u5316\u3059\u308B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    transform: "\u30C0\u30EB\u30DE\u30E2\u30FC\u30C9 \u767A\u52D5\uFF01",
    transformEnd: "\u30C0\u30EB\u30DE\u30E2\u30FC\u30C9 \u89E3\u9664\uFF01"
  },
  zerotohero: {
    name: "\u30DE\u30A4\u30C6\u30A3\u30C1\u30A7\u30F3\u30B8",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u306F \u5909\u8EAB\u3057\u3066 \u5E30\u3063\u3066\u304D\u305F\uFF01"
  },
  // CAP
  mountaineer: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rebound: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    move: "#magiccoat"
  },
  persistent: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: ""
    // NEEDS TRANSLATION: Showdown custom text
  }
};
//# sourceMappingURL=abilities.js.map
