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
    name: "\u9002\u5E94\u529B",
    desc: "\u4E0E\u81EA\u8EAB\u540C\u5C5E\u6027\u7684\u62DB\u5F0F \u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aerilate: {
    name: "\u98DE\u884C\u76AE\u80A4",
    desc: "\u4E00\u822C\u5C5E\u6027\u7684\u62DB\u5F0F \u4F1A\u53D8\u4E3A\u98DE\u884C\u5C5E\u6027\u3002 \u5A01\u529B\u4F1A\u5C11\u91CF\u63D0\u9AD8\u3002",
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
    name: "\u5F15\u7206",
    desc: "\u53D8\u4E3A\u6FD2\u6B7B\u65F6\uFF0C \u4F1A\u5BF9\u63A5\u89E6\u5230\u81EA\u5DF1\u7684\u5BF9\u624B\u9020\u6210\u4F24\u5BB3\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "  [POKEMON]\u53D7\u5230\u4E86\u4F24\u5BB3\uFF01"
  },
  airlock: {
    name: "\u6C14\u95F8",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \u5929\u6C14\u7684\u5F71\u54CD\u6D88\u5931\u4E86\uFF01"
  },
  analytic: {
    name: "\u5206\u6790",
    desc: "\u5982\u679C\u5728\u6700\u540E\u4F7F\u51FA\u62DB\u5F0F\uFF0C \u62DB\u5F0F\u7684\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  angerpoint: {
    name: "\u6124\u6012\u7A74\u4F4D",
    desc: "\u8981\u5BB3\u88AB\u51FB\u4E2D\u65F6\uFF0C \u4F1A\u5927\u53D1\u96F7\u9706\uFF0C \u653B\u51FB\u529B\u53D8\u4E3A\u6700\u5927\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    boost: "  [POKEMON]\u7684\u653B\u51FB\u88AB\u63D0\u9AD8\u5230\u4E86\u6700\u5927\uFF01"
  },
  angershell: {
    name: "\u6124\u6012\u7532\u58F3",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  anticipation: {
    name: "\u5371\u9669\u9884\u77E5",
    desc: "\u53EF\u4EE5\u5BDF\u89C9\u5230 \u5BF9\u624B\u62E5\u6709\u7684\u5371\u9669\u62DB\u5F0F\u3002",
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
    activate: "  [POKEMON]\u53D1\u6296\u4E86\uFF01"
  },
  arenatrap: {
    name: "\u6C99\u7A74",
    desc: "\u5728\u6218\u6597\u4E2D\u8BA9\u5BF9\u624B\u65E0\u6CD5\u9003\u8D70\u3002",
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
    name: "\u5C3E\u7532",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  aromaveil: {
    name: "\u82B3\u9999\u5E55",
    desc: "\u53EF\u4EE5\u9632\u4F4F\u5411\u81EA\u5DF1\u548C\u540C\u4F34 \u53D1\u51FA\u7684\u5FC3\u7075\u653B\u51FB\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u6B63\u53D7\u5230\u82B3\u9999\u5E55\u7684\u4FDD\u62A4\uFF01"
  },
  asone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u540C\u65F6\u62E5\u6709\u4E86\u4E24\u79CD\u7279\u6027\uFF01"
  },
  asoneglastrier: {
    name: "\u4EBA\u9A6C\u4E00\u4F53",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  asonespectrier: {
    name: "\u4EBA\u9A6C\u4E00\u4F53",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aurabreak: {
    name: "\u6C14\u573A\u7834\u574F",
    desc: "\u8BA9\u6C14\u573A\u7684\u6548\u679C\u53D1\u751F\u9006\u8F6C\uFF0C \u964D\u4F4E\u5A01\u529B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u538B\u5236\u4E86\u6240\u6709\u6C14\u573A\uFF01"
  },
  baddreams: {
    name: "\u68A6\u9B47",
    desc: "\u7ED9\u4E88\u7761\u7720\u72B6\u6001\u7684\u5BF9\u624B\u4F24\u5BB3\u3002",
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
    damage: "  [POKEMON]\u6B63\u88AB\u6076\u68A6\u7F20\u8EAB\uFF01"
  },
  ballfetch: {
    name: "\u6361\u7403",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battery: {
    name: "\u84C4\u7535\u6C60",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlearmor: {
    name: "\u6218\u6597\u76D4\u7532",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlebond: {
    name: "\u7275\u7ECA\u53D8\u8EAB",
    desc: "\u6253\u5012\u5BF9\u624B\u65F6\uFF0C\u4E0E\u8BAD\u7EC3\u5BB6\u7684\u7275\u7ECA\u4F1A\u589E\u5F3A\uFF0C \u53D8\u4E3A\u5C0F\u667A\u7248\u7532\u8D3A\u5FCD\u86D9\u3002 \u98DE\u6C34\u624B\u91CC\u5251\u7684\u62DB\u5F0F\u5A01\u529B\u4F1A\u589E\u5F3A\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u6D51\u8EAB\u5145\u6EE1\u4E86\u7275\u7ECA\u4E4B\u529B\uFF01",
    transform: "[POKEMON]\u53D8\u8EAB\u6210\u4E86\u5C0F\u667A\u7248\u7532\u8D3A\u5FCD\u86D9\uFF01"
  },
  beadsofruin: {
    name: "\u707E\u7978\u4E4B\u7389",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u7684\u707E\u7978\u4E4B\u7389\u4EE4\u5468\u56F4\u7684\u5B9D\u53EF\u68A6\u7684\u7279\u9632\u51CF\u5F31\u4E86\uFF01"
  },
  beastboost: {
    name: "\u5F02\u517D\u63D0\u5347",
    desc: "\u6253\u5012\u5BF9\u624B\u7684\u65F6\u5019\uFF0C \u81EA\u5DF1\u6700\u9AD8\u7684\u90A3\u9879\u80FD\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  berserk: {
    name: "\u6012\u706B\u51B2\u5929",
    desc: "\u56E0\u5BF9\u624B\u7684\u653B\u51FB \uFF28\uFF30\u53D8\u4E3A\u4E00\u534A\u65F6\uFF0C \u7279\u653B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  bigpecks: {
    name: "\u5065\u58EE\u80F8\u808C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  blaze: {
    name: "\u731B\u706B",
    desc: "\uFF28\uFF30\u51CF\u5C11\u7684\u65F6\u5019\uFF0C \u706B\u5C5E\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
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
    name: "\u9632\u5F39",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cheekpouch: {
    name: "\u988A\u56CA",
    desc: "\u65E0\u8BBA\u662F\u54EA\u79CD\u6811\u679C\uFF0C \u98DF\u7528\u540E\uFF0C\uFF28\uFF30\u90FD\u4F1A\u56DE\u590D\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  chillingneigh: {
    name: "\u82CD\u767D\u5636\u9E23",
    desc: "\u6253\u5012\u5BF9\u624B\u65F6 \u4F1A\u7528\u51B0\u51B7\u7684\u58F0\u97F3\u5636\u9E23 \u5E76\u63D0\u9AD8\u653B\u51FB\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  chlorophyll: {
    name: "\u53F6\u7EFF\u7D20",
    desc: "\u6674\u6717\u5929\u6C14\u65F6\uFF0C \u901F\u5EA6\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  clearbody: {
    name: "\u6052\u51C0\u4E4B\u8EAF",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cloudnine: {
    name: "\u65E0\u5173\u5929\u6C14",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#airlock"
  },
  colorchange: {
    name: "\u53D8\u8272",
    desc: "\u81EA\u5DF1\u7684\u5C5E\u6027\u4F1A\u53D8\u4E3A \u4ECE\u5BF9\u624B\u5904\u6240\u53D7\u62DB\u5F0F\u7684\u5C5E\u6027\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  comatose: {
    name: "\u7EDD\u5BF9\u7761\u7720",
    desc: "\u603B\u662F\u534A\u68A6\u534A\u9192\u7684\u72B6\u6001\uFF0C \u7EDD\u5BF9\u4E0D\u4F1A\u9192\u6765\u3002 \u53EF\u4EE5\u5C31\u8FD9\u4E48\u7761\u7740\u8FDB\u884C\u653B\u51FB\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u5904\u4E8E\u534A\u68A6\u534A\u9192\u72B6\u6001\uFF01"
  },
  commander: {
    name: "\u53D1\u53F7\u65BD\u4EE4",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u4F5C\u4E3A\u53D1\u53F7\u65BD\u4EE4\u7684\u8981\u5458\u800C\u88AB[TARGET]\u541E\u4E0B\u53BB\u4E86\uFF01"
  },
  competitive: {
    name: "\u597D\u80DC",
    desc: "\u5982\u679C\u80FD\u529B\u88AB\u964D\u4F4E\uFF0C \u7279\u653B\u5C31\u4F1A\u5927\u5E45\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  compoundeyes: {
    name: "\u590D\u773C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  contrary: {
    name: "\u5531\u53CD\u8C03",
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
    name: "\u8150\u8680",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  costar: {
    name: "\u540C\u53F0\u5171\u6F14",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cottondown: {
    name: "\u68C9\u7D6E",
    desc: "\u53D7\u5230\u653B\u51FB\u540E\u6492\u4E0B\u68C9\u7D6E\uFF0C \u964D\u4F4E\u9664\u81EA\u5DF1\u4EE5\u5916\u7684 \u6240\u6709\u5B9D\u53EF\u68A6\u7684\u901F\u5EA6\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cudchew: {
    name: "\u53CD\u520D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  curiousmedicine: {
    name: "\u602A\u836F",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cursedbody: {
    name: "\u8BC5\u5492\u4E4B\u8EAF",
    desc: "\u53D7\u5230\u653B\u51FB\u65F6\uFF0C \u6709\u65F6\u4F1A\u628A\u5BF9\u624B\u7684\u62DB\u5F0F \u53D8\u4E3A\u5B9A\u8EAB\u6CD5\u72B6\u6001\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cutecharm: {
    name: "\u8FF7\u4EBA\u4E4B\u8EAF",
    desc: "\u6709\u65F6\u4F1A\u8BA9\u63A5\u89E6\u5230\u81EA\u5DF1\u7684\u5BF9\u624B\u7740\u8FF7\u3002",
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
    name: "\u6E7F\u6C14",
    desc: "\u901A\u8FC7\u628A\u5468\u56F4\u90FD\u5F04\u6E7F\uFF0C \u4F7F\u8C01\u90FD\u65E0\u6CD5\u4F7F\u7528\u81EA\u7206\u7B49\u7206\u70B8\u7C7B\u7684\u62DB\u5F0F\u3002",
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
    block: "  [SOURCE]\u65E0\u6CD5\u4F7F\u7528[MOVE]\uFF01"
  },
  dancer: {
    name: "\u821E\u8005",
    desc: "\u6709\u8C01\u4F7F\u51FA\u8DF3\u821E\u62DB\u5F0F\u65F6\uFF0C \u81EA\u5DF1\u4E5F\u80FD\u5C31\u8FD9\u4E48\u63A5\u7740\u4F7F\u51FA\u8DF3\u821E\u62DB\u5F0F\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  darkaura: {
    name: "\u6697\u9ED1\u6C14\u573A",
    desc: "\u5168\u4F53\u7684\u6076\u5C5E\u6027\u62DB\u5F0F\u53D8\u5F3A\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u6B63\u5728\u91CA\u653E\u6697\u9ED1\u6C14\u573A\uFF01"
  },
  dauntlessshield: {
    name: "\u4E0D\u5C48\u4E4B\u76FE",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  dazzling: {
    name: "\u9C9C\u8273\u4E4B\u8EAF",
    desc: "\u8BA9\u5BF9\u624B\u5413\u4E00\u8DF3\uFF0C \u4F7F\u5176\u65E0\u6CD5\u5BF9\u6211\u65B9\u4F7F\u51FA\u5148\u5236\u62DB\u5F0F\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  defeatist: {
    name: "\u8F6F\u5F31",
    desc: "\uFF28\uFF30\u51CF\u534A\u65F6\uFF0C \u4F1A\u53D8\u5F97\u8F6F\u5F31\uFF0C \u653B\u51FB\u548C\u7279\u653B\u4F1A\u51CF\u534A\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  defiant: {
    name: "\u4E0D\u670D\u8F93",
    desc: "\u80FD\u529B\u88AB\u964D\u4F4E\u65F6\uFF0C \u653B\u51FB\u4F1A\u5927\u5E45\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  deltastream: {
    name: "\u5FB7\u5C14\u5854\u6C14\u6D41",
    desc: "\u53D8\u4E3A\u4EE4\u98DE\u884C\u5C5E\u6027\u7684\u5F31\u70B9 \u6D88\u5931\u7684\u5929\u6C14\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  desolateland: {
    name: "\u7EC8\u7ED3\u4E4B\u5730",
    desc: "\u53D8\u4E3A\u4E0D\u4F1A\u53D7\u5230 \u6C34\u5C5E\u6027\u653B\u51FB\u7684\u5929\u6C14\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  disguise: {
    name: "\u753B\u76AE",
    desc: "\u901A\u8FC7\u753B\u76AE\u8986\u76D6\u4F4F\u8EAB\u4F53\uFF0C \u53EF\u4EE5\u9632\u4F4F\uFF11\u6B21\u653B\u51FB\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  \u753B\u76AE\u53D8\u6210\u4E86\u66FF\u8EAB\uFF01",
    transform: "[POKEMON]\u7684\u753B\u76AE\u8131\u843D\u4E86\uFF01"
  },
  download: {
    name: "\u4E0B\u8F7D",
    desc: "\u6BD4\u8F83\u5BF9\u624B\u7684\u9632\u5FA1\u548C\u7279\u9632\uFF0C \u6839\u636E\u8F83\u4F4E\u7684\u90A3\u9879\u80FD\u529B \u76F8\u5E94\u5730\u63D0\u9AD8\u81EA\u5DF1\u7684\u653B\u51FB\u6216\u7279\u653B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonize: {
    name: "\u9F99\u76AE\u80A4",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonsmaw: {
    name: "\u9F99\u989A",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drizzle: {
    name: "\u964D\u96E8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drought: {
    name: "\u65E5\u7167",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dryskin: {
    name: "\u5E72\u71E5\u76AE\u80A4",
    desc: "\u4E0B\u96E8\u5929\u6C14\u65F6\u548C\u53D7\u5230\u6C34\u5C5E\u6027\u7684\u62DB\u5F0F\u65F6\uFF0C \uFF28\uFF30\u4F1A\u56DE\u590D\u3002\u6674\u6717\u5929\u6C14\u65F6\u548C\u53D7\u5230\u706B\u5C5E\u6027\u7684 \u62DB\u5F0F\u65F6\uFF0C\uFF28\uFF30\u4F1A\u51CF\u5C11\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  ([POKEMON]\u53D7\u5230\u4E86\u4F24\u5BB3\uFF01)"
  },
  earlybird: {
    name: "\u65E9\u8D77",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  eartheater: {
    name: "\u98DF\u571F",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
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
    name: "\u5B62\u5B50",
    desc: "\u53D7\u5230\u653B\u51FB\u65F6\uFF0C \u6709\u65F6\u4F1A\u628A\u63A5\u89E6\u5230\u81EA\u5DF1\u7684\u5BF9\u624B \u53D8\u4E3A\u4E2D\u6BD2\u3001\u9EBB\u75F9\u6216\u7761\u7720\u72B6\u6001\u3002",
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
    name: "\u7535\u6C14\u5236\u9020\u8005",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  electromorphosis: {
    name: "\u7535\u529B\u8F6C\u6362",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u53D7\u5230[MOVE]\u800C\u5145\u7535\u4E86\uFF01"
  },
  embodyaspectcornerstone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u8BA9\u7840\u4E4B\u5047\u9762\u53D1\u51FA\u5149\u8F89\uFF0C\u9632\u5FA1\u63D0\u9AD8\u4E86\uFF01"
  },
  embodyaspecthearthflame: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u8BA9\u7076\u4E4B\u5047\u9762\u53D1\u51FA\u5149\u8F89\uFF0C\u653B\u51FB\u63D0\u9AD8\u4E86\uFF01"
  },
  embodyaspectteal: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u8BA9\u78A7\u4E4B\u5047\u9762\u53D1\u51FA\u5149\u8F89\uFF0C\u901F\u5EA6\u63D0\u9AD8\u4E86\uFF01"
  },
  embodyaspectwellspring: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u8BA9\u4E95\u4E4B\u5047\u9762\u53D1\u51FA\u5149\u8F89\uFF0C\u7279\u9632\u63D0\u9AD8\u4E86\uFF01"
  },
  emergencyexit: {
    name: "\u5371\u9669\u56DE\u907F",
    desc: "\uFF28\uFF30\u53D8\u4E3A\u4E00\u534A\u65F6\uFF0C \u4E3A\u4E86\u56DE\u907F\u5371\u9669\uFF0C \u4F1A\u9000\u56DE\u5230\u540C\u884C\u961F\u4F0D\u4E2D\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  fairyaura: {
    name: "\u5996\u7CBE\u6C14\u573A",
    desc: "\u5168\u4F53\u7684\u5996\u7CBE\u5C5E\u6027\u62DB\u5F0F\u53D8\u5F3A\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u6B63\u5728\u91CA\u653E\u5996\u7CBE\u6C14\u573A\uFF01"
  },
  filter: {
    name: "\u8FC7\u6EE4",
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
    name: "\u706B\u7130\u4E4B\u8EAF",
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
    name: "\u53D7\u70ED\u6FC0\u5347",
    desc: "\u53D8\u4E3A\u707C\u4F24\u72B6\u6001\u65F6\uFF0C \u7279\u6B8A\u62DB\u5F0F\u7684\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  flashfire: {
    name: "\u5F15\u706B",
    desc: "\u53D7\u5230\u706B\u5C5E\u6027\u7684\u62DB\u5F0F\u653B\u51FB\u65F6\uFF0C \u5438\u6536\u706B\u7130\uFF0C\u81EA\u5DF1\u4F7F\u51FA\u7684 \u706B\u5C5E\u6027\u62DB\u5F0F\u4F1A\u53D8\u5F3A\u3002",
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
    start: "  [POKEMON]\u7684\u706B\u7130\u5A01\u529B\u63D0\u9AD8\u4E86\uFF01"
  },
  flowergift: {
    name: "\u82B1\u4E4B\u793C",
    desc: "\u6674\u6717\u5929\u6C14\u65F6\uFF0C \u81EA\u5DF1\u4E0E\u540C\u4F34\u7684\u653B\u51FB\u548C \u7279\u9632\u80FD\u529B\u4F1A\u63D0\u9AD8\u3002",
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
    name: "\u82B1\u5E55",
    desc: "\u6211\u65B9\u7684\u8349\u5C5E\u6027\u5B9D\u53EF\u68A6 \u80FD\u529B\u4E0D\u4F1A\u964D\u4F4E\uFF0C \u4E5F\u4E0D\u4F1A\u53D8\u4E3A\u5F02\u5E38\u72B6\u6001\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u6B63\u53D7\u5230\u82B1\u5E55\u7684\u4FDD\u62A4\uFF01"
  },
  fluffy: {
    name: "\u6BDB\u8338\u8338",
    desc: "\u4F1A\u5C06\u5BF9\u624B\u6240\u7ED9\u4E88\u7684\u63A5\u89E6\u7C7B\u62DB\u5F0F\u7684\u4F24\u5BB3\u51CF\u534A\uFF0C \u4F46\u706B\u5C5E\u6027\u62DB\u5F0F\u7684\u4F24\u5BB3\u4F1A\u53D8\u4E3A\uFF12\u500D\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  forecast: {
    name: "\u9634\u6674\u4E0D\u5B9A",
    desc: "\u53D7\u5929\u6C14\u7684\u5F71\u54CD\uFF0C \u4F1A\u53D8\u4E3A\u6C34\u5C5E\u6027\u3001\u706B\u5C5E\u6027 \u6216\u51B0\u5C5E\u6027\u4E2D\u7684\u67D0\u4E00\u4E2A\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  forewarn: {
    name: "\u9884\u77E5\u68A6",
    desc: "\u51FA\u573A\u65F6\uFF0C \u53EA\u8BFB\u53D6\uFF11\u4E2A\u5BF9\u624B\u62E5\u6709\u7684\u62DB\u5F0F\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  \u8BFB\u53D6\u4E86[TARGET]\u7684[MOVE]\uFF01",
    activateNoTarget: ""
    // NEEDS TRANSLATION: predates Chinese support
  },
  friendguard: {
    name: "\u53CB\u60C5\u9632\u5B88",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  frisk: {
    name: "\u5BDF\u89C9",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u5BDF\u89C9\u5230\u4E86[TARGET]\u7684[ITEM]\uFF01",
    activateNoTarget: ""
    // NEEDS TRANSLATION: predates Chinese support
  },
  fullmetalbody: {
    name: "\u91D1\u5C5E\u9632\u62A4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  furcoat: {
    name: "\u6BDB\u76AE\u5927\u8863",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  galewings: {
    name: "\u75BE\u98CE\u4E4B\u7FFC",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  galvanize: {
    name: "\u7535\u6C14\u76AE\u80A4",
    desc: "\u4E00\u822C\u5C5E\u6027\u7684\u62DB\u5F0F \u4F1A\u53D8\u4E3A\u7535\u5C5E\u6027\u3002 \u5A01\u529B\u4F1A\u5C11\u91CF\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gluttony: {
    name: "\u8D2A\u5403\u9B3C",
    desc: "\u539F\u672C\uFF28\uFF30\u53D8\u5F97\u5F88\u5C11\u65F6\u624D\u4F1A\u5403\u6811\u679C\uFF0C \u5728\uFF28\uFF30\u8FD8\u6709\u4E00\u534A\u65F6\u5C31\u4F1A\u628A\u5B83\u5403\u6389\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  goodasgold: {
    name: "\u9EC4\u91D1\u4E4B\u8EAF",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gooey: {
    name: "\u9ECF\u6ED1",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gorillatactics: {
    name: "\u4E00\u7329\u4E00\u610F",
    desc: "\u867D\u7136\u653B\u51FB\u4F1A\u63D0\u9AD8\uFF0C \u4F46\u662F\u53EA\u80FD\u4F7F\u51FA \u4E00\u5F00\u59CB\u6240\u9009\u7684\u62DB\u5F0F\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grasspelt: {
    name: "\u8349\u4E4B\u6BDB\u76AE",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grassysurge: {
    name: "\u9752\u8349\u5236\u9020\u8005",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grimneigh: {
    name: "\u6F06\u9ED1\u5636\u9E23",
    desc: "\u6253\u5012\u5BF9\u624B\u65F6 \u4F1A\u7528\u6050\u6016\u7684\u58F0\u97F3\u5636\u9E23 \u5E76\u63D0\u9AD8\u7279\u653B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guarddog: {
    name: "\u770B\u95E8\u72AC",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gulpmissile: {
    name: "\u4E00\u53E3\u5BFC\u5F39",
    desc: "\u51B2\u6D6A\u6216\u6F5C\u6C34\u65F6\u4F1A\u53FC\u6765\u730E\u7269\u3002 \u53D7\u5230\u4F24\u5BB3\u65F6\uFF0C \u4F1A\u5410\u51FA\u730E\u7269\u8FDB\u884C\u653B\u51FB\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guts: {
    name: "\u6BC5\u529B",
    desc: "\u5982\u679C\u53D8\u4E3A\u5F02\u5E38\u72B6\u6001\uFF0C \u4F1A\u62FF\u51FA\u6BC5\u529B\uFF0C \u653B\u51FB\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hadronengine: {
    name: "\u5F3A\u5B50\u5F15\u64CE",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u5E03\u4E0B\u7535\u6C14\u573A\u5730\u4F7F\u672A\u6765\u7684\u673A\u5173\u8DC3\u52A8\u8D77\u6765\uFF01\uFF01",
    activate: "  [POKEMON]\u7528\u7535\u6C14\u573A\u5730\u4F7F\u672A\u6765\u7684\u673A\u5173\u8DC3\u52A8\u8D77\u6765\uFF01\uFF01"
  },
  harvest: {
    name: "\u6536\u83B7",
    desc: "\u53EF\u4EE5\u591A\u6B21\u5236\u4F5C\u51FA \u5DF2\u88AB\u4F7F\u7528\u6389\u7684\u6811\u679C\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    addItem: "  [POKEMON]\u6536\u83B7\u4E86[ITEM]\uFF01"
  },
  healer: {
    name: "\u6CBB\u6108\u4E4B\u5FC3",
    desc: "\u6709\u65F6\u4F1A\u6CBB\u6108\u5F02\u5E38\u72B6\u6001\u7684\u540C\u4F34\u3002",
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
    name: "\u8010\u70ED",
    desc: "\u8010\u70ED\u7684\u4F53\u8D28\u4F1A \u8BA9\u706B\u5C5E\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u51CF\u534A\u3002",
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
    name: "\u91CD\u91D1\u5C5E",
    desc: "\u81EA\u8EAB\u7684\u91CD\u91CF\u4F1A\u53D8\u4E3A\uFF12\u500D\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  honeygather: {
    name: "\u91C7\u871C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hospitality: {
    name: "\u6B3E\u5F85",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    heal: "  [POKEMON]\u559D\u5149\u4E86[SOURCE]\u6CE1\u7684\u8336\uFF01"
  },
  hugepower: {
    name: "\u5927\u529B\u58EB",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hungerswitch: {
    name: "\u9971\u4E86\u53C8\u997F",
    desc: "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6\u4F1A\u5728 \u6EE1\u8179\u82B1\u7EB9\u4E0E\u7A7A\u8179\u82B1\u7EB9\u4E4B\u95F4 \u4EA4\u66FF\u6539\u53D8\u6837\u5B50\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hustle: {
    name: "\u6D3B\u529B",
    desc: "\u81EA\u5DF1\u7684\u653B\u51FB\u53D8\u9AD8\uFF0C \u4F46\u547D\u4E2D\u7387\u4F1A\u964D\u4F4E\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hydration: {
    name: "\u6E7F\u6DA6\u4E4B\u8EAF",
    desc: "\u4E0B\u96E8\u5929\u6C14\u65F6\uFF0C \u5F02\u5E38\u72B6\u6001\u4F1A\u6CBB\u6108\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  hypercutter: {
    name: "\u602A\u529B\u94B3",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  icebody: {
    name: "\u51B0\u51BB\u4E4B\u8EAF",
    desc: "\u51B0\u96F9\u5929\u6C14\u65F6\uFF0C \u4F1A\u7F13\u7F13\u56DE\u590D\uFF28\uFF30\u3002",
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
    name: "\u7ED3\u51BB\u5934",
    desc: "\u5934\u90E8\u7684\u51B0\u4F1A\u4EE3\u66FF\u81EA\u5DF1\u627F\u53D7 \u7269\u7406\u653B\u51FB\uFF0C\u4F46\u662F\u6837\u5B50\u4F1A\u6539\u53D8\u3002 \u4E0B\u51B0\u96F9\u65F6\uFF0C\u51B0\u4F1A\u6062\u590D\u539F\u72B6\u3002",
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
    name: "\u51B0\u9CDE\u7C89",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  illuminate: {
    name: "\u53D1\u5149",
    desc: "\u901A\u8FC7\u8BA9\u5468\u56F4\u53D8\u4EAE\uFF0C \u53D8\u5F97\u5BB9\u6613\u9047\u5230\u91CE\u751F\u7684\u5B9D\u53EF\u68A6\u3002",
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
    name: "\u5E7B\u89C9",
    desc: "\u5047\u626E\u6210\u540C\u884C\u961F\u4F0D\u4E2D\u7684 \u6700\u540E\u4E00\u53EA\u5B9D\u53EF\u68A6\u51FA\u573A\uFF0C \u8FF7\u60D1\u5BF9\u624B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    end: "  [POKEMON]\u9020\u6210\u7684\u5E7B\u89C9\u89E3\u9664\u4E86\uFF01"
  },
  immunity: {
    name: "\u514D\u75AB",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  imposter: {
    name: "\u53D8\u8EAB\u8005",
    desc: "\u53D8\u8EAB\u4E3A\u5F53\u524D\u9762\u5BF9\u7684\u5B9D\u53EF\u68A6\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  infiltrator: {
    name: "\u7A7F\u900F",
    desc: "\u53EF\u4EE5\u7A7F\u900F\u5BF9\u624B\u7684\u58C1\u969C \u6216\u66FF\u8EAB\u8FDB\u884C\u653B\u51FB\u3002",
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
    name: "\u98DE\u51FA\u7684\u5185\u5728\u7269",
    desc: "\u88AB\u5BF9\u624B\u6253\u5012\u7684\u65F6\u5019\uFF0C \u4F1A\u7ED9\u4E88\u5BF9\u624B\u76F8\u5F53\u4E8E \uFF28\uFF30\u5269\u4F59\u91CF\u7684\u4F24\u5BB3\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#aftermath"
  },
  innerfocus: {
    name: "\u7CBE\u795E\u529B",
    desc: "\u62E5\u6709\u7ECF\u8FC7\u953B\u70BC\u7684\u7CBE\u795E\uFF0C \u800C\u4E0D\u4F1A\u56E0\u5BF9\u624B\u7684\u653B\u51FB\u800C\u754F\u7F29\u3002",
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
    name: "\u4E0D\u7720",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  intimidate: {
    name: "\u5A01\u5413",
    desc: "\u51FA\u573A\u65F6\u5A01\u5413\u5BF9\u624B\uFF0C \u8BA9\u5176\u9000\u7F29\uFF0C \u964D\u4F4E\u5BF9\u624B\u7684\u653B\u51FB\u3002",
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
    name: "\u4E0D\u6320\u4E4B\u5251",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  ironbarbs: {
    name: "\u94C1\u523A",
    desc: "\u7528\u94C1\u523A\u7ED9\u4E88\u63A5\u89E6\u5230\u81EA\u5DF1\u7684 \u5BF9\u624B\u4F24\u5BB3\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#roughskin"
  },
  ironfist: {
    name: "\u94C1\u62F3",
    desc: "\u4F7F\u7528\u62F3\u7C7B\u62DB\u5F0F\u7684\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  justified: {
    name: "\u6B63\u4E49\u4E4B\u5FC3",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  keeneye: {
    name: "\u9510\u5229\u76EE\u5149",
    desc: "\u591A\u4E8F\u4E86\u9510\u5229\u7684\u76EE\u5149\uFF0C \u547D\u4E2D\u7387\u4E0D\u4F1A\u88AB\u964D\u4F4E\u3002",
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
    name: "\u7B28\u62D9",
    desc: "\u65E0\u6CD5\u4F7F\u7528\u6301\u6709\u7684\u9053\u5177\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  leafguard: {
    name: "\u53F6\u5B50\u9632\u5B88",
    desc: "\u6674\u6717\u5929\u6C14\u65F6\uFF0C \u4E0D\u4F1A\u53D8\u4E3A\u5F02\u5E38\u72B6\u6001\u3002",
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
    name: "\u98D8\u6D6E",
    desc: "\u4ECE\u5730\u9762\u6D6E\u8D77\uFF0C \u4ECE\u800C\u4E0D\u4F1A\u53D7\u5230\u5730\u9762\u5C5E\u6027\u62DB\u5F0F\u7684\u653B\u51FB\u3002",
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
    name: "\u81EA\u7531\u8005",
    desc: "\u53D8\u4E3A\u4E0E\u81EA\u5DF1\u4F7F\u51FA\u7684\u62DB\u5F0F \u76F8\u540C\u7684\u5C5E\u6027\u3002",
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
    name: "\u8F7B\u91D1\u5C5E",
    desc: "\u81EA\u8EAB\u7684\u91CD\u91CF\u4F1A\u51CF\u534A\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lightningrod: {
    name: "\u907F\u96F7\u9488",
    desc: "\u5C06\u7535\u5C5E\u6027\u7684\u62DB\u5F0F\u5438\u5F15\u5230\u81EA\u5DF1\u8EAB\u4E0A\uFF0C \u4E0D\u4F1A\u53D7\u5230\u4F24\u5BB3\uFF0C\u800C\u662F\u4F1A\u63D0\u9AD8\u7279\u653B\u3002",
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
    activate: "  [POKEMON]\u5438\u5F15\u4E86\u653B\u51FB\uFF01"
  },
  limber: {
    name: "\u67D4\u8F6F",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lingeringaroma: {
    name: "\u7529\u4E0D\u6389\u7684\u6C14\u5473",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "  [TARGET]\u6CBE\u4E0A\u4E86\u5473\u9053\u4E14\u6325\u4E4B\u4E0D\u53BB\uFF01"
  },
  liquidooze: {
    name: "\u6C61\u6CE5\u6D46",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  [POKEMON]\u5438\u5230\u4E86\u6C61\u6CE5\u6D46\uFF01"
  },
  liquidvoice: {
    name: "\u6E7F\u6DA6\u4E4B\u58F0",
    desc: "\u6240\u6709\u7684\u58F0\u97F3\u62DB\u5F0F \u90FD\u53D8\u4E3A\u6C34\u5C5E\u6027\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  longreach: {
    name: "\u8FDC\u9694",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magicbounce: {
    name: "\u9B54\u6CD5\u955C",
    desc: "\u53EF\u4EE5\u4E0D\u53D7\u5230\u7531\u5BF9\u624B\u4F7F\u51FA\u7684 \u53D8\u5316\u62DB\u5F0F\u5F71\u54CD\uFF0C\u5E76\u5C06\u5176\u53CD\u5F39\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    move: "#magiccoat"
  },
  magicguard: {
    name: "\u9B54\u6CD5\u9632\u5B88",
    desc: "\u4E0D\u4F1A\u53D7\u5230\u653B\u51FB\u4EE5\u5916\u7684\u4F24\u5BB3\u3002",
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
    name: "\u9B54\u672F\u5E08",
    desc: "\u593A\u8D70\u88AB\u81EA\u5DF1\u7684\u62DB\u5F0F \u51FB\u4E2D\u7684\u5BF9\u624B\u7684\u9053\u5177\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magmaarmor: {
    name: "\u7194\u5CA9\u94E0\u7532",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magnetpull: {
    name: "\u78C1\u529B",
    desc: "\u7528\u78C1\u529B\u5438\u4F4F\u94A2\u5C5E\u6027\u7684\u5B9D\u53EF\u68A6\uFF0C \u4F7F\u5176\u65E0\u6CD5\u9003\u8D70\u3002",
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
    name: "\u795E\u5947\u9CDE\u7247",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megalauncher: {
    name: "\u8D85\u7EA7\u53D1\u5C04\u5668",
    desc: "\u6CE2\u52A8\u548C\u6CE2\u5BFC\u7C7B\u62DB\u5F0F\u7684 \u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megasol: {
    name: "\u8D85\u7EA7\u65E5\u5149",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  merciless: {
    name: "\u4E0D\u4EC1\u4E0D\u4E49",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mimicry: {
    name: "\u62DF\u6001",
    desc: "\u5B9D\u53EF\u68A6\u7684\u5C5E\u6027\u4F1A\u6839\u636E \u573A\u5730\u7684\u72B6\u6001\u800C\u53D8\u5316\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u53D8\u56DE\u4E86\u539F\u6765\u7684\u5C5E\u6027\uFF01"
  },
  mindseye: {
    name: "\u5FC3\u773C",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  minus: {
    name: "\u8D1F\u7535",
    desc: "\u51FA\u573A\u7684\u4F19\u4F34\u4E4B\u95F4 \u5982\u679C\u6709\u6B63\u7535\u6216\u8D1F\u7535\u7279\u6027\u7684\u5B9D\u53EF\u68A6\uFF0C \u81EA\u5DF1\u7684\u7279\u653B\u4F1A\u63D0\u9AD8\u3002",
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
    name: "\u955C\u7532",
    desc: "\u53EA\u53CD\u5F39\u81EA\u5DF1\u53D7\u5230\u7684 \u80FD\u529B\u964D\u4F4E\u6548\u679C\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mistysurge: {
    name: "\u8584\u96FE\u5236\u9020\u8005",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moldbreaker: {
    name: "\u7834\u683C",
    desc: "\u53EF\u4EE5\u4E0D\u53D7\u5BF9\u624B\u7279\u6027\u7684\u5E72\u6270\uFF0C \u5411\u5BF9\u624B\u4F7F\u51FA\u62DB\u5F0F\u3002",
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
    start: "  [POKEMON]\u6253\u7834\u4E86\u5E38\u89C4\uFF01"
  },
  moody: {
    name: "\u5FC3\u60C5\u4E0D\u5B9A",
    desc: "\u6BCF\u4E00\u56DE\u5408\uFF0C\u80FD\u529B\u4E2D\u7684\u67D0\u9879 \u4F1A\u5927\u5E45\u63D0\u9AD8\uFF0C\u800C\u67D0\u9879\u4F1A\u964D\u4F4E\u3002",
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
    name: "\u7535\u6C14\u5F15\u64CE",
    desc: "\u53D7\u5230\u7535\u5C5E\u6027\u7684\u62DB\u5F0F\u653B\u51FB\u65F6\uFF0C \u4E0D\u4F1A\u53D7\u5230\u4F24\u5BB3\uFF0C\u800C\u662F\u901F\u5EA6\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moxie: {
    name: "\u81EA\u4FE1\u8FC7\u5EA6",
    desc: "\u5982\u679C\u6253\u5012\u5BF9\u624B\uFF0C \u5C31\u4F1A\u5145\u6EE1\u81EA\u4FE1\uFF0C\u653B\u51FB\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multiscale: {
    name: "\u591A\u91CD\u9CDE\u7247",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multitype: {
    name: "\u591A\u5C5E\u6027",
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
    name: "\u6728\u4E43\u4F0A",
    desc: "\u88AB\u5BF9\u624B\u63A5\u89E6\u5230\u540E\uFF0C \u4F1A\u5C06\u5BF9\u624B\u53D8\u4E3A\u6728\u4E43\u4F0A\u3002",
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
    changeAbility: "  [TARGET]\u7684\u7279\u6027\u53D8\u6210\u4E86\u6728\u4E43\u4F0A\uFF01"
  },
  myceliummight: {
    name: "\u83CC\u4E1D\u4E4B\u529B",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  naturalcure: {
    name: "\u81EA\u7136\u56DE\u590D",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  neuroforce: {
    name: "\u8111\u6838\u4E4B\u529B",
    desc: "\u6548\u679C\u7EDD\u4F73\u7684\u653B\u51FB\uFF0C \u5A01\u529B\u4F1A\u53D8\u5F97\u66F4\u5F3A\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  neutralizinggas: {
    name: "\u5316\u5B66\u53D8\u5316\u6C14\u4F53",
    desc: "\u7279\u6027\u4E3A\u5316\u5B66\u53D8\u5316\u6C14\u4F53\u7684\u5B9D\u53EF\u68A6\u5728\u573A\u65F6\uFF0C \u573A\u4E0A\u6240\u6709\u5B9D\u53EF\u68A6\u7684 \u7279\u6027\u6548\u679C\u90FD\u4F1A\u6D88\u5931\u6216\u8005\u65E0\u6CD5\u751F\u6548\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  \u5468\u56F4\u5145\u6EE1\u4E86\u5316\u5B66\u53D8\u5316\u6C14\u4F53\uFF01",
    end: "  \u5316\u5B66\u53D8\u5316\u6C14\u4F53\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  noguard: {
    name: "\u65E0\u9632\u5B88",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  normalize: {
    name: "\u4E00\u822C\u76AE\u80A4",
    desc: "\u65E0\u8BBA\u662F\u4EC0\u4E48\u5C5E\u6027\u7684\u62DB\u5F0F\uFF0C \u5168\u90E8\u4F1A\u53D8\u4E3A\u4E00\u822C\u5C5E\u6027\u3002 \u5A01\u529B\u4F1A\u5C11\u91CF\u63D0\u9AD8\u3002",
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
    name: "\u8FDF\u949D",
    desc: "\u56E0\u4E3A\u611F\u89C9\u8FDF\u949D\uFF0C \u4E0D\u4F1A\u53D8\u4E3A\u7740\u8FF7\u548C\u88AB\u6311\u8845\u72B6\u6001\u3002",
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
    name: "\u8DDF\u98CE",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  orichalcumpulse: {
    name: "\u7EEF\u7EA2\u8109\u52A8",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u4EE4\u65E5\u7167\u53D8\u5F3A\uFF0C\u6FC0\u8D77\u4E86\u53E4\u4EE3\u7684\u8109\u52A8\uFF01",
    activate: "  [POKEMON]\u53D7\u5230\u65E5\u7167\u800C\u6FC0\u8D77\u4E86\u53E4\u4EE3\u7684\u8109\u52A8\uFF01\uFF01"
  },
  overcoat: {
    name: "\u9632\u5C18",
    desc: "\u4E0D\u4F1A\u53D7\u5230\u6C99\u66B4\u6216\u51B0\u96F9\u7B49\u7684\u4F24\u5BB3\u3002 \u4E0D\u4F1A\u53D7\u5230\u7C89\u672B\u7C7B\u62DB\u5F0F\u7684\u653B\u51FB\u3002",
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
    name: "\u8302\u76DB",
    desc: "\uFF28\uFF30\u51CF\u5C11\u7684\u65F6\u5019\uFF0C \u8349\u5C5E\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
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
    name: "\u6211\u884C\u6211\u7D20",
    desc: "\u56E0\u4E3A\u6211\u884C\u6211\u7D20\uFF0C \u4E0D\u4F1A\u53D8\u4E3A\u6DF7\u4E71\u72B6\u6001\u3002",
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
    name: "\u4EB2\u5B50\u7231",
    desc: "\u4EB2\u5B50\u4FE9\u53EF\u4EE5\u5408\u8BA1\u653B\u51FB\uFF12\u6B21\u3002",
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
    name: "\u7C89\u5F69\u62A4\u5E55",
    desc: "\u81EA\u5DF1\u548C\u540C\u4F34\u90FD\u4E0D\u4F1A \u9677\u5165\u4E2D\u6BD2\u7684\u5F02\u5E38\u72B6\u6001\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  perishbody: {
    name: "\u706D\u4EA1\u4E4B\u8EAF",
    desc: "\u53D7\u5230\u63A5\u89E6\u7C7B\u62DB\u5F0F\u653B\u51FB\u65F6\uFF0C \u53CC\u65B9\u90FD\u4F1A\u5728\uFF13\u56DE\u5408\u540E\u53D8\u4E3A\u6FD2\u6B7B\u72B6\u6001\u3002 \u66FF\u6362\u540E\u6548\u679C\u6D88\u5931\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \u53CC\u65B9\u5C06\u5728\uFF13\u56DE\u5408\u540E\u706D\u4EA1\uFF01"
  },
  pickpocket: {
    name: "\u987A\u624B\u7275\u7F8A",
    desc: "\u76D7\u53D6\u63A5\u89E6\u5230\u81EA\u5DF1\u7684 \u5BF9\u624B\u7684\u9053\u5177\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pickup: {
    name: "\u6361\u62FE",
    desc: "\u6709\u65F6\u4F1A\u6361\u6765\u5BF9\u624B\u7528\u8FC7\u7684\u9053\u5177\uFF0C \u5192\u9669\u8FC7\u7A0B\u4E2D\u4E5F\u4F1A\u6361\u5230\u3002",
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
    name: "\u8D2F\u7A7F\u94BB",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pixilate: {
    name: "\u5996\u7CBE\u76AE\u80A4",
    desc: "\u4E00\u822C\u5C5E\u6027\u7684\u62DB\u5F0F \u4F1A\u53D8\u4E3A\u5996\u7CBE\u5C5E\u6027\u3002 \u5A01\u529B\u4F1A\u5C11\u91CF\u63D0\u9AD8\u3002",
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
    name: "\u6B63\u7535",
    desc: "\u51FA\u573A\u7684\u4F19\u4F34\u4E4B\u95F4 \u5982\u679C\u6709\u6B63\u7535\u6216\u8D1F\u7535\u7279\u6027\u7684\u5B9D\u53EF\u68A6\uFF0C \u81EA\u5DF1\u7684\u7279\u653B\u4F1A\u63D0\u9AD8\u3002",
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
    name: "\u6BD2\u7597",
    desc: "\u53D8\u4E3A\u4E2D\u6BD2\u72B6\u6001\u65F6\uFF0C \uFF28\uFF30\u4E0D\u4F1A\u51CF\u5C11\uFF0C\u53CD\u800C\u4F1A\u589E\u52A0\u8D77\u6765\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisonpoint: {
    name: "\u6BD2\u523A",
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
    name: "\u6BD2\u5080\u5121",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisontouch: {
    name: "\u6BD2\u624B",
    desc: "\u53EA\u901A\u8FC7\u63A5\u89E6\u5C31\u6709\u53EF\u80FD \u8BA9\u5BF9\u624B\u53D8\u4E3A\u4E2D\u6BD2\u72B6\u6001\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  powerconstruct: {
    name: "\u7FA4\u805A\u53D8\u5F62",
    desc: "\uFF28\uFF30\u53D8\u4E3A\u4E00\u534A\u65F6\uFF0C \u7EC6\u80DE\u4EEC\u4F1A\u8D76\u6765\u652F\u63F4\uFF0C \u53D8\u4E3A\u5B8C\u5168\u4F53\u5F62\u6001\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \u4F60\u611F\u53D7\u5230\u4E86\u5927\u91CF\u7684\u6C14\u606F\u2026\u2026\uFF01",
    transform: "[POKEMON]\u53D8\u6210\u4E86\u5B8C\u5168\u4F53\u5F62\u6001\uFF01"
  },
  powerofalchemy: {
    name: "\u5316\u5B66\u4E4B\u529B",
    desc: "\u7EE7\u627F\u88AB\u6253\u5012\u7684\u540C\u4F34\u7684\u7279\u6027\uFF0C \u53D8\u4E3A\u76F8\u540C\u7684\u7279\u6027\u3002",
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
    name: "\u80FD\u91CF\u70B9",
    desc: "\u53EA\u8981\u5904\u5728\u76F8\u90BB\u4F4D\u7F6E\uFF0C \u62DB\u5F0F\u7684\u5A01\u529B\u5C31\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prankster: {
    name: "\u6076\u4F5C\u5267\u4E4B\u5FC3",
    desc: "\u53EF\u4EE5\u7387\u5148\u4F7F\u51FA\u53D8\u5316\u62DB\u5F0F\u3002",
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
    name: "\u538B\u8FEB\u611F",
    desc: "\u7ED9\u4E88\u5BF9\u624B\u538B\u8FEB\u611F\uFF0C \u5927\u91CF\u51CF\u5C11\u5176\u4F7F\u7528\u62DB\u5F0F\u7684\uFF30\uFF30\u3002",
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
    start: "  \u4ECE[POKEMON]\u7684\u8EAB\u4E0A\u611F\u5230\u4E86\u4E00\u79CD\u538B\u8FEB\u611F\uFF01"
  },
  primordialsea: {
    name: "\u59CB\u6E90\u4E4B\u6D77",
    desc: "\u53D8\u4E3A\u4E0D\u4F1A\u53D7\u5230 \u706B\u5C5E\u6027\u653B\u51FB\u7684\u5929\u6C14\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prismarmor: {
    name: "\u68F1\u955C\u88C5\u7532",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  propellertail: {
    name: "\u87BA\u65CB\u5C3E\u9CCD",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  protean: {
    name: "\u53D8\u5E7B\u81EA\u5982",
    desc: "\u53D8\u4E3A\u4E0E\u81EA\u5DF1\u4F7F\u51FA\u7684\u62DB\u5F0F \u76F8\u540C\u7684\u5C5E\u6027\u3002",
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
    name: "\u53E4\u4EE3\u6D3B\u6027",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u901A\u8FC7\u5927\u6674\u5929\u53D1\u52A8\u4E86\u53E4\u4EE3\u6D3B\u6027\uFF01",
    activateFromItem: "  [POKEMON]\u901A\u8FC7\u9A71\u52B2\u80FD\u91CF\u53D1\u52A8\u4E86\u53E4\u4EE3\u6D3B\u6027\uFF01",
    start: "  [POKEMON]\u7684[STAT]\u5347\u9AD8\u4E86\uFF01",
    end: "  [POKEMON]\u53E4\u4EE3\u6D3B\u6027\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  psychicsurge: {
    name: "\u7CBE\u795E\u5236\u9020\u8005",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  punkrock: {
    name: "\u5E9E\u514B\u6447\u6EDA",
    desc: "\u58F0\u97F3\u62DB\u5F0F\u7684\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002 \u53D7\u5230\u7684\u58F0\u97F3\u62DB\u5F0F\u4F24\u5BB3\u4F1A\u51CF\u534A\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purepower: {
    name: "\u745C\u4F3D\u4E4B\u529B",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purifyingsalt: {
    name: "\u6D01\u51C0\u4E4B\u76D0",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  quarkdrive: {
    name: "\u5938\u514B\u5145\u80FD",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u901A\u8FC7\u7535\u6C14\u573A\u5730\u53D1\u52A8\u4E86\u5938\u514B\u5145\u80FD\uFF01",
    activateFromItem: "  [POKEMON]\u901A\u8FC7\u9A71\u52B2\u80FD\u91CF\u53D1\u52A8\u4E86\u5938\u514B\u5145\u80FD\uFF01",
    start: "  [POKEMON]\u7684[STAT]\u5347\u9AD8\u4E86\uFF01",
    end: "  [POKEMON]\u5938\u514B\u5145\u80FD\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  queenlymajesty: {
    name: "\u5973\u738B\u7684\u5A01\u4E25",
    desc: "\u5411\u5BF9\u624B\u65BD\u52A0\u5A01\u6151\u529B\uFF0C \u4F7F\u5176\u65E0\u6CD5\u5BF9\u6211\u65B9\u4F7F\u51FA\u5148\u5236\u62DB\u5F0F\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  quickdraw: {
    name: "\u901F\u51FB",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \u901F\u51FB\u4F7F[POKEMON]\u884C\u52A8\u53D8\u5FEB\u4E86\uFF01"
  },
  quickfeet: {
    name: "\u98DE\u6BDB\u817F",
    desc: "\u53D8\u4E3A\u5F02\u5E38\u72B6\u6001\u65F6\uFF0C \u901F\u5EA6\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  raindish: {
    name: "\u96E8\u76D8",
    desc: "\u4E0B\u96E8\u5929\u6C14\u65F6\uFF0C \u4F1A\u7F13\u7F13\u56DE\u590D\uFF28\uFF30\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  rattled: {
    name: "\u80C6\u602F",
    desc: "\u53D7\u5230\u6076\u5C5E\u6027\u3001\u5E7D\u7075\u5C5E\u6027 \u548C\u866B\u5C5E\u6027\u7684\u62DB\u5F0F\u653B\u51FB\u65F6\uFF0C \u4F1A\u56E0\u80C6\u602F\u800C\u901F\u5EA6\u63D0\u9AD8\u3002",
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
    name: "\u63A5\u7403\u624B",
    desc: "\u7EE7\u627F\u88AB\u6253\u5012\u7684\u540C\u4F34\u7684\u7279\u6027\uFF0C \u53D8\u4E3A\u76F8\u540C\u7684\u7279\u6027\u3002",
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
    changeAbility: "  \u7EE7\u627F\u4E86[SOURCE]\u7684[ABILITY]\uFF01"
  },
  reckless: {
    name: "\u820D\u8EAB",
    desc: "\u81EA\u5DF1\u4F1A\u56E0\u53CD\u4F5C\u7528\u529B\u53D7\u4F24\u7684\u62DB\u5F0F\uFF0C \u5176\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  refrigerate: {
    name: "\u51B0\u51BB\u76AE\u80A4",
    desc: "\u4E00\u822C\u5C5E\u6027\u7684\u62DB\u5F0F \u4F1A\u53D8\u4E3A\u51B0\u5C5E\u6027\u3002 \u5A01\u529B\u4F1A\u5C11\u91CF\u63D0\u9AD8\u3002",
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
    name: "\u518D\u751F\u529B",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  ripen: {
    name: "\u719F\u6210",
    desc: "\u4F7F\u6811\u679C\u6210\u719F\uFF0C \u6548\u679C\u53D8\u4E3A\uFF12\u500D\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rivalry: {
    name: "\u6597\u4E89\u5FC3",
    desc: "\u9762\u5BF9\u6027\u522B\u76F8\u540C\u7684\u5BF9\u624B\uFF0C \u4F1A\u71C3\u8D77\u6597\u4E89\u5FC3\uFF0C\u53D8\u5F97\u66F4\u5F3A\u3002 \u800C\u9762\u5BF9\u6027\u522B\u4E0D\u540C\u7684\uFF0C\u5219\u4F1A\u53D8\u5F31\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rkssystem: {
    name: "\uFF21\uFF32\u7CFB\u7EDF",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rockhead: {
    name: "\u575A\u786C\u8111\u888B",
    desc: "\u5373\u4F7F\u4F7F\u51FA\u4F1A\u53D7\u53CD\u4F5C\u7528\u529B\u4F24\u5BB3\u7684\u62DB\u5F0F\uFF0C \uFF28\uFF30\u4E5F\u4E0D\u4F1A\u51CF\u5C11\u3002",
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
    name: "\u642C\u5CA9",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  roughskin: {
    name: "\u7C97\u7CD9\u76AE\u80A4",
    desc: "\u53D7\u5230\u653B\u51FB\u65F6\uFF0C \u7528\u7C97\u7CD9\u7684\u76AE\u80A4\u5F04\u4F24 \u63A5\u89E6\u5230\u81EA\u5DF1\u7684\u5BF9\u624B\u3002",
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
    damage: "  [POKEMON]\u53D7\u5230\u4E86\u4F24\u5BB3\uFF01"
  },
  runaway: {
    name: "\u9003\u8DD1",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandforce: {
    name: "\u6C99\u4E4B\u529B",
    desc: "\u6C99\u66B4\u5929\u6C14\u65F6\uFF0C \u5CA9\u77F3\u5C5E\u6027\u3001\u5730\u9762\u5C5E\u6027 \u548C\u94A2\u5C5E\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandrush: {
    name: "\u62E8\u6C99",
    desc: "\u6C99\u66B4\u5929\u6C14\u65F6\uFF0C \u901F\u5EA6\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandspit: {
    name: "\u5410\u6C99",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sandstream: {
    name: "\u626C\u6C99",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandveil: {
    name: "\u6C99\u9690",
    desc: "\u5728\u6C99\u66B4\u7684\u65F6\u5019\uFF0C \u95EA\u907F\u7387\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sapsipper: {
    name: "\u98DF\u8349",
    desc: "\u53D7\u5230\u8349\u5C5E\u6027\u7684\u62DB\u5F0F\u653B\u51FB\u65F6\uFF0C \u4E0D\u4F1A\u53D7\u5230\u4F24\u5BB3\uFF0C\u800C\u662F\u653B\u51FB\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  schooling: {
    name: "\u9C7C\u7FA4",
    desc: "\uFF28\uFF30\u591A\u7684\u65F6\u5019\u4F1A\u805A\u8D77\u6765\u53D8\u5F3A\u3002 \uFF28\uFF30\u5269\u4F59\u91CF\u53D8\u5C11\u65F6\uFF0C \u7FA4\u4F53\u4F1A\u5206\u5D29\u79BB\u6790\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON]\u4E00\u7FA4\u7FA4\u5730\u805A\u96C6\u8D77\u6765\u4E86\uFF01",
    transformEnd: "[POKEMON]\u4E00\u7FA4\u7FA4\u5730\u56DB\u6563\u800C\u53BB\u4E86\uFF01"
  },
  scrappy: {
    name: "\u80C6\u91CF",
    desc: "\u4E00\u822C\u5C5E\u6027\u548C\u683C\u6597\u5C5E\u6027\u7684\u62DB\u5F0F \u53EF\u4EE5\u51FB\u4E2D\u5E7D\u7075\u5C5E\u6027\u7684\u5B9D\u53EF\u68A6\u3002",
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
    name: "\u9664\u969C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  seedsower: {
    name: "\u6389\u51FA\u79CD\u5B50",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  serenegrace: {
    name: "\u5929\u6069",
    desc: "\u6258\u5929\u6069\u7684\u798F\uFF0C \u62DB\u5F0F\u7684\u8FFD\u52A0\u6548\u679C\u5BB9\u6613\u51FA\u73B0\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  shadowshield: {
    name: "\u5E7B\u5F71\u9632\u5B88",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shadowtag: {
    name: "\u8E29\u5F71",
    desc: "\u8E29\u4F4F\u5BF9\u624B\u7684\u5F71\u5B50 \u4F7F\u5176\u65E0\u6CD5\u9003\u8D70\u6216\u66FF\u6362\u3002",
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
    name: "\u950B\u9510",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shedskin: {
    name: "\u8715\u76AE",
    desc: "\u901A\u8FC7\u8715\u53BB\u8EAB\u4E0A\u7684\u76AE\uFF0C \u6709\u65F6\u4F1A\u6CBB\u6108\u5F02\u5E38\u72B6\u6001\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sheerforce: {
    name: "\u5F3A\u884C",
    desc: "\u62DB\u5F0F\u7684\u8FFD\u52A0\u6548\u679C\u6D88\u5931\uFF0C \u4F46\u56E0\u6B64\u80FD\u4EE5\u66F4\u9AD8\u7684\u5A01\u529B\u4F7F\u51FA\u62DB\u5F0F\u3002",
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
    name: "\u786C\u58F3\u76D4\u7532",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shielddust: {
    name: "\u9CDE\u7C89",
    desc: "\u88AB\u9CDE\u7C89\u5B88\u62A4\u7740\uFF0C \u4E0D\u4F1A\u53D7\u5230\u62DB\u5F0F\u7684\u8FFD\u52A0\u6548\u679C\u5F71\u54CD\u3002",
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
    name: "\u754C\u9650\u76FE\u58F3",
    desc: "\uFF28\uFF30\u53D8\u4E3A\u4E00\u534A\u65F6\uFF0C \u58F3\u4F1A\u574F\u6389\uFF0C\u53D8\u5F97\u6709\u653B\u51FB\u6027\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "\u754C\u9650\u76FE\u58F3\u542F\u52A8\uFF01",
    transformEnd: "\u754C\u9650\u76FE\u58F3\u89E3\u9664\uFF01"
  },
  simple: {
    name: "\u5355\u7EAF",
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
    name: "\u8FDE\u7EED\u653B\u51FB",
    desc: "\u5982\u679C\u4F7F\u7528\u8FDE\u7EED\u62DB\u5F0F\uFF0C \u603B\u662F\u80FD\u4F7F\u51FA\u6700\u9AD8\u6B21\u6570\u3002",
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
    name: "\u6162\u542F\u52A8",
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
    start: "  [POKEMON]\u65E0\u6CD5\u62FF\u51FA\u5E73\u65F6\u7684\u6C34\u5E73\uFF01",
    end: "  [POKEMON]\u6062\u590D\u4E86\u5E73\u65F6\u7684\u6C34\u5E73\uFF01"
  },
  slushrush: {
    name: "\u62E8\u96EA",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sniper: {
    name: "\u72D9\u51FB\u624B",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  snowcloak: {
    name: "\u96EA\u9690",
    desc: "\u51B0\u96F9\u5929\u6C14\u65F6\uFF0C \u95EA\u907F\u7387\u4F1A\u63D0\u9AD8\u3002",
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
    name: "\u964D\u96EA",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solarpower: {
    name: "\u592A\u9633\u4E4B\u529B",
    desc: "\u6674\u6717\u5929\u6C14\u65F6\uFF0C \u7279\u653B\u4F1A\u63D0\u9AD8\uFF0C \u800C\u6BCF\u56DE\u5408\uFF28\uFF30\u4F1A\u51CF\u5C11\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solidrock: {
    name: "\u575A\u786C\u5CA9\u77F3",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soulheart: {
    name: "\u9B42\u5FC3",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soundproof: {
    name: "\u9694\u97F3",
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
    name: "\u52A0\u901F",
    desc: "\u6BCF\u4E00\u56DE\u5408\u901F\u5EA6\u4F1A\u53D8\u5FEB\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  spicyspray: {
    name: "\u8FA3\u6912\u55B7\u53D1",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stakeout: {
    name: "\u8E72\u5B88",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stall: {
    name: "\u6162\u51FA",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stalwart: {
    name: "\u575A\u6BC5",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stamina: {
    name: "\u6301\u4E45\u529B",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stancechange: {
    name: "\u6218\u6597\u5207\u6362",
    desc: "\u5982\u679C\u4F7F\u51FA\u653B\u51FB\u62DB\u5F0F\uFF0C\u4F1A\u53D8\u4E3A\u5200\u5251\u5F62\u6001\uFF0C \u5982\u679C\u4F7F\u51FA\u62DB\u5F0F\u201C\u738B\u8005\u76FE\u724C\u201D\uFF0C \u4F1A\u53D8\u4E3A\u76FE\u724C\u5F62\u6001\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    transform: "\u5200\u5251\u5F62\u6001\uFF0C\u53D8\u5F62\uFF01",
    transformEnd: "\u76FE\u724C\u5F62\u6001\uFF0C\u53D8\u5F62\uFF01"
  },
  static: {
    name: "\u9759\u7535",
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
    name: "\u4E0D\u5C48\u4E4B\u5FC3",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steamengine: {
    name: "\u84B8\u6C7D\u673A",
    desc: "\u53D7\u5230\u6C34\u5C5E\u6027\u6216 \u706B\u5C5E\u6027\u7684\u62DB\u5F0F\u653B\u51FB\u65F6\uFF0C \u901F\u5EA6\u4F1A\u5DE8\u5E45\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelworker: {
    name: "\u94A2\u80FD\u529B\u8005",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelyspirit: {
    name: "\u94A2\u4E4B\u610F\u5FD7",
    desc: "\u6211\u65B9\u7684\u94A2\u5C5E\u6027 \u653B\u51FB\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stench: {
    name: "\u6076\u81ED",
    desc: "\u901A\u8FC7\u91CA\u653E\u81ED\u81ED\u7684\u6C14\u5473\uFF0C \u5728\u653B\u51FB\u7684\u65F6\u5019\uFF0C \u6709\u65F6\u4F1A\u4F7F\u5BF9\u624B\u754F\u7F29\u3002",
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
    name: "\u9ECF\u7740",
    desc: "\u56E0\u4E3A\u9053\u5177\u662F\u7C98\u5728\u9ECF\u6027\u8EAB\u4F53\u4E0A\u7684\uFF0C \u6240\u4EE5\u4E0D\u4F1A\u88AB\u5BF9\u624B\u593A\u8D70\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  \u65E0\u6CD5\u593A\u53D6[POKEMON]\u7684\u9053\u5177\uFF01"
  },
  stormdrain: {
    name: "\u5F15\u6C34",
    desc: "\u5C06\u6C34\u5C5E\u6027\u7684\u62DB\u5F0F\u5F15\u5230\u81EA\u5DF1\u8EAB\u4E0A\uFF0C \u4E0D\u4F1A\u53D7\u5230\u4F24\u5BB3\uFF0C\u800C\u662F\u4F1A\u63D0\u9AD8\u7279\u653B\u3002",
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
    name: "\u5F3A\u58EE\u4E4B\u989A",
    desc: "\u56E0\u4E3A\u989A\u90E8\u5F3A\u58EE\uFF0C \u5543\u54AC\u7C7B\u62DB\u5F0F\u7684\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sturdy: {
    name: "\u7ED3\u5B9E",
    desc: "\u5373\u4F7F\u53D7\u5230\u5BF9\u624B\u7684\u62DB\u5F0F\u653B\u51FB\uFF0C \u4E5F\u4E0D\u4F1A\u88AB\u4E00\u51FB\u6253\u5012\u3002 \u4E00\u51FB\u5FC5\u6740\u7684\u62DB\u5F0F\u4E5F\u6CA1\u6709\u6548\u679C\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u633A\u4F4F\u4E86\u653B\u51FB\uFF01"
  },
  suctioncups: {
    name: "\u5438\u76D8",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u7528\u5438\u76D8\u5438\u4F4F\u4E86\uFF01"
  },
  superluck: {
    name: "\u8D85\u5E78\u8FD0",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  supersweetsyrup: {
    name: "\u7518\u9732\u4E4B\u871C",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u7684\u871C\u6563\u53D1\u51FA\u4E86\u751C\u751C\u9999\u6C14\uFF01"
  },
  supremeoverlord: {
    name: "\u5927\u5C06",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u4ECE\u88AB\u6253\u5012\u7684\u540C\u4F34\u8EAB\u4E0A\u5F97\u5230\u529B\u91CF\u4E86\uFF01"
  },
  surgesurfer: {
    name: "\u51B2\u6D6A\u4E4B\u5C3E",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  swarm: {
    name: "\u866B\u4E4B\u9884\u611F",
    desc: "\uFF28\uFF30\u51CF\u5C11\u7684\u65F6\u5019\uFF0C \u866B\u5C5E\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
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
    name: "\u751C\u5E55",
    desc: "\u6211\u65B9\u7684\u5B9D\u53EF\u68A6 \u4E0D\u4F1A\u53D8\u4E3A\u7761\u7720\u72B6\u6001\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u56E0\u751C\u5E55\u800C\u4E0D\u4F1A\u7761\u7740\uFF01"
  },
  swiftswim: {
    name: "\u60A0\u6E38\u81EA\u5982",
    desc: "\u4E0B\u96E8\u5929\u6C14\u65F6\uFF0C \u901F\u5EA6\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  swordofruin: {
    name: "\u707E\u7978\u4E4B\u5251",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u7684\u707E\u7978\u4E4B\u5251\u4EE4\u5468\u56F4\u7684\u5B9D\u53EF\u68A6\u7684\u9632\u5FA1\u51CF\u5F31\u4E86\uFF01"
  },
  symbiosis: {
    name: "\u5171\u751F",
    desc: "\u540C\u4F34\u4F7F\u7528\u9053\u5177\u65F6\uFF0C \u4F1A\u628A\u81EA\u5DF1\u6301\u6709\u7684\u9053\u5177\u4F20\u9012\u7ED9\u540C\u4F34\u3002",
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
    activate: "  [POKEMON]\u5C06[ITEM]\u4EA4\u7ED9\u4E86[TARGET]\uFF01"
  },
  synchronize: {
    name: "\u540C\u6B65",
    desc: "\u5C06\u81EA\u5DF1\u7684\u4E2D\u6BD2\u3001\u9EBB\u75F9 \u6216\u707C\u4F24\u72B6\u6001\u4F20\u67D3\u7ED9\u5BF9\u624B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  tabletsofruin: {
    name: "\u707E\u7978\u4E4B\u7B80",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u7684\u707E\u7978\u4E4B\u7B80\u4EE4\u5468\u56F4\u7684\u5B9D\u53EF\u68A6\u7684\u653B\u51FB\u51CF\u5F31\u4E86\uFF01"
  },
  tangledfeet: {
    name: "\u8E52\u8DDA",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  tanglinghair: {
    name: "\u5377\u53D1",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  technician: {
    name: "\u6280\u672F\u9AD8\u624B",
    desc: "\u653B\u51FB\u65F6\u53EF\u4EE5\u5C06 \u4F4E\u5A01\u529B\u62DB\u5F0F\u7684\u5A01\u529B\u63D0\u9AD8\u3002",
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
    name: "\u5FC3\u7075\u611F\u5E94",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u4E0D\u4F1A\u53D7\u5230\u540C\u4F34\u7684\u653B\u51FB\uFF01"
  },
  teraformzero: {
    name: "\u5F52\u96F6\u5316\u5883",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  terashell: {
    name: "\u592A\u6676\u7532\u58F3",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u8BA9\u7532\u58F3\u53D1\u51FA\u5149\u8F89\uFF0C\u4F7F\u5C5E\u6027\u76F8\u514B\u53D1\u751F\u626D\u66F2\uFF01\uFF01"
  },
  terashift: {
    name: "\u592A\u6676\u53D8\u5F62",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON]\u7684\u6837\u5B50\u53D1\u751F\u4E86\u53D8\u5316\uFF01"
  },
  teravolt: {
    name: "\u5146\u7EA7\u7535\u538B",
    desc: "\u53EF\u4EE5\u4E0D\u53D7\u5BF9\u624B\u7279\u6027\u7684\u5E72\u6270\uFF0C \u5411\u5BF9\u624B\u4F7F\u51FA\u62DB\u5F0F\u3002",
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
    start: "  [POKEMON]\u6B63\u5728\u91CA\u653E\u6E85\u5C04\u6C14\u573A\uFF01"
  },
  thermalexchange: {
    name: "\u70ED\u4EA4\u6362",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  thickfat: {
    name: "\u539A\u8102\u80AA",
    desc: "\u56E0\u4E3A\u88AB\u539A\u539A\u7684\u8102\u80AA\u4FDD\u62A4\u7740\uFF0C \u4F1A\u8BA9\u706B\u5C5E\u6027\u548C\u51B0\u5C5E\u6027\u7684\u62DB\u5F0F\u4F24\u5BB3\u51CF\u534A\u3002",
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
    name: "\u6709\u8272\u773C\u955C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  torrent: {
    name: "\u6FC0\u6D41",
    desc: "\uFF28\uFF30\u51CF\u5C11\u7684\u65F6\u5019\uFF0C \u6C34\u5C5E\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
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
    name: "\u786C\u722A",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicboost: {
    name: "\u4E2D\u6BD2\u6FC0\u5347",
    desc: "\u53D8\u4E3A\u4E2D\u6BD2\u72B6\u6001\u65F6\uFF0C \u7269\u7406\u62DB\u5F0F\u7684\u5A01\u529B\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicchain: {
    name: "\u6BD2\u9501\u94FE",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicdebris: {
    name: "\u6BD2\u6EE1\u5730",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  trace: {
    name: "\u590D\u5236",
    desc: "\u51FA\u573A\u65F6\uFF0C\u590D\u5236\u5BF9\u624B\u7684\u7279\u6027\uFF0C \u53D8\u4E3A\u4E0E\u4E4B\u76F8\u540C\u7684\u7279\u6027\u3002",
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
    changeAbility: "  \u590D\u5236\u4E86[SOURCE]\u7684[ABILITY]\uFF01"
  },
  transistor: {
    name: "\u7535\u6676\u4F53",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  triage: {
    name: "\u5148\u884C\u6CBB\u7597",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  truant: {
    name: "\u61D2\u60F0",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    cant: "[POKEMON]\u6B63\u5728\u5077\u61D2\u3002"
  },
  turboblaze: {
    name: "\u6DA1\u8F6E\u706B\u7130",
    desc: "\u53EF\u4EE5\u4E0D\u53D7\u5BF9\u624B\u7279\u6027\u7684\u5E72\u6270\uFF0C \u5411\u5BF9\u624B\u4F7F\u51FA\u62DB\u5F0F\u3002",
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
    start: "  [POKEMON]\u6B63\u5728\u91CA\u653E\u70BD\u7130\u6C14\u573A\uFF01"
  },
  unaware: {
    name: "\u7EAF\u6734",
    desc: "\u53EF\u4EE5\u65E0\u89C6\u5BF9\u624B\u80FD\u529B\u7684\u53D8\u5316\uFF0C \u8FDB\u884C\u653B\u51FB\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unburden: {
    name: "\u8F7B\u88C5",
    desc: "\u5931\u53BB\u6240\u6301\u6709\u7684\u9053\u5177\u65F6\uFF0C \u901F\u5EA6\u4F1A\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unnerve: {
    name: "\u7D27\u5F20\u611F",
    desc: "\u8BA9\u5BF9\u624B\u7D27\u5F20\uFF0C \u4F7F\u5176\u65E0\u6CD5\u98DF\u7528\u6811\u679C\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [TEAM]\u56E0\u592A\u7D27\u5F20\u800C\u65E0\u6CD5\u98DF\u7528\u6811\u679C\uFF01"
  },
  unseenfist: {
    name: "\u65E0\u5F62\u62F3",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    champions: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "\u707E\u7978\u4E4B\u9F0E",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u7684\u707E\u7978\u4E4B\u9F0E\u4EE4\u5468\u56F4\u7684\u5B9D\u53EF\u68A6\u7684\u7279\u653B\u51CF\u5F31\u4E86\uFF01"
  },
  victorystar: {
    name: "\u80DC\u5229\u4E4B\u661F",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  vitalspirit: {
    name: "\u5E72\u52B2",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  voltabsorb: {
    name: "\u84C4\u7535",
    desc: "\u53D7\u5230\u7535\u5C5E\u6027\u7684\u62DB\u5F0F\u653B\u51FB\u65F6\uFF0C \u4E0D\u4F1A\u53D7\u5230\u4F24\u5BB3\uFF0C\u800C\u662F\u4F1A\u56DE\u590D\u3002",
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
    name: "\u6E38\u9B42",
    desc: "\u4E0E\u4F7F\u7528\u63A5\u89E6\u7C7B\u62DB\u5F0F \u653B\u51FB\u81EA\u5DF1\u7684\u5B9D\u53EF\u68A6\u4E92\u6362\u7279\u6027\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "#skillswap"
  },
  waterabsorb: {
    name: "\u50A8\u6C34",
    desc: "\u53D7\u5230\u6C34\u5C5E\u6027\u7684\u62DB\u5F0F\u653B\u51FB\u65F6\uFF0C \u4E0D\u4F1A\u53D7\u5230\u4F24\u5BB3\uFF0C\u800C\u662F\u4F1A\u56DE\u590D\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterbubble: {
    name: "\u6C34\u6CE1",
    desc: "\u964D\u4F4E\u81EA\u5DF1\u53D7\u5230\u7684\u706B\u5C5E\u6027 \u62DB\u5F0F\u7684\u5A01\u529B\uFF0C\u4E0D\u4F1A\u707C\u4F24\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  watercompaction: {
    name: "\u9047\u6C34\u51DD\u56FA",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterveil: {
    name: "\u6C34\u5E55",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  weakarmor: {
    name: "\u788E\u88C2\u94E0\u7532",
    desc: "\u5982\u679C\u56E0\u7269\u7406\u62DB\u5F0F\u53D7\u5230\u4F24\u5BB3\uFF0C \u9632\u5FA1\u4F1A\u964D\u4F4E\uFF0C \u901F\u5EA6\u4F1A\u5927\u5E45\u63D0\u9AD8\u3002",
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
    name: "\u7126\u9999\u4E4B\u8EAF",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  whitesmoke: {
    name: "\u767D\u8272\u70DF\u96FE",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wimpout: {
    name: "\u8DC3\u8DC3\u6B32\u9003",
    desc: "\uFF28\uFF30\u53D8\u4E3A\u4E00\u534A\u65F6\uFF0C \u4F1A\u614C\u614C\u5F20\u5F20\u9003\u8D70\uFF0C \u9000\u56DE\u540C\u884C\u961F\u4F0D\u4E2D\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  windpower: {
    name: "\u98CE\u529B\u53D1\u7535",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#electromorphosis"
  },
  windrider: {
    name: "\u4E58\u98CE",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wonderguard: {
    name: "\u795E\u5947\u5B88\u62A4",
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
    name: "\u5947\u8FF9\u76AE\u80A4",
    desc: "\u6210\u4E3A\u4E0D\u6613\u53D7\u5230\u53D8\u5316\u62DB\u5F0F \u653B\u51FB\u7684\u8EAB\u4F53\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  zenmode: {
    name: "\u8FBE\u6469\u6A21\u5F0F",
    desc: "\uFF28\uFF30\u53D8\u4E3A\u4E00\u534A\u4EE5\u4E0B\u65F6\uFF0C \u6837\u5B50\u4F1A\u6539\u53D8\u3002",
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
    transform: "\u8FBE\u6469\u6A21\u5F0F\uFF0C\u542F\u52A8\uFF01",
    transformEnd: "\u8FBE\u6469\u6A21\u5F0F\uFF0C\u89E3\u9664\uFF01"
  },
  zerotohero: {
    name: "\u5168\u80FD\u53D8\u8EAB",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u53D8\u8EAB\u540E\u5F52\u6765\u4E86\uFF01"
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
