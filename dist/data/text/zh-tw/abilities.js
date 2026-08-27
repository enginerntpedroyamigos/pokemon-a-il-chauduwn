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
    name: "\u9069\u61C9\u529B",
    desc: "\u8207\u81EA\u8EAB\u540C\u5C6C\u6027\u7684\u62DB\u5F0F \u5A01\u529B\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aerilate: {
    name: "\u98DB\u884C\u76AE\u819A",
    desc: "\u4E00\u822C\u5C6C\u6027\u7684\u62DB\u5F0F \u6703\u8B8A\u70BA\u98DB\u884C\u5C6C\u6027\u3002 \u5A01\u529B\u6703\u5C11\u91CF\u63D0\u9AD8\u3002",
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
    desc: "\u7015\u6B7B\u6642\uFF0C \u6703\u5C0D\u63A5\u89F8\u5230\u81EA\u5DF1\u7684\u5C0D\u624B\u9020\u6210\u50B7\u5BB3\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "  [POKEMON]\u53D7\u5230\u4E86\u50B7\u5BB3\uFF01"
  },
  airlock: {
    name: "\u6C23\u9598",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \u5929\u6C23\u7684\u5F71\u97FF\u6D88\u5931\u4E86\uFF01"
  },
  analytic: {
    name: "\u5206\u6790",
    desc: "\u5982\u679C\u5728\u6700\u5F8C\u4F7F\u51FA\u62DB\u5F0F\uFF0C \u62DB\u5F0F\u7684\u5A01\u529B\u5C31\u6703\u8B8A\u5F37\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  angerpoint: {
    name: "\u61A4\u6012\u7A74\u4F4D",
    desc: "\u8981\u5BB3\u88AB\u64CA\u4E2D\u6642\u6703\u5927\u767C\u96F7\u9706\u3002 \u653B\u64CA\u529B\u6703\u63D0\u9AD8\u5230\u6700\u5927\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    boost: "  [POKEMON]\u7684\u653B\u64CA\u88AB\u63D0\u9AD8\u5230\u4E86\u6700\u5927\uFF01"
  },
  angershell: {
    name: "\u61A4\u6012\u7532\u6BBC",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  anticipation: {
    name: "\u5371\u96AA\u9810\u77E5",
    desc: "\u5BDF\u89BA\u5C0D\u624B\u6301\u6709\u7684 \u5371\u96AA\u62DB\u5F0F\u3002",
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
    activate: "  [POKEMON]\u767C\u6296\u4E86\uFF01"
  },
  arenatrap: {
    name: "\u6C99\u7A74",
    desc: "\u5728\u6230\u9B25\u4E2D\u8B93\u5C0D\u624B\u7121\u6CD5\u9003\u8D70\u3002",
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
    desc: "\u53EF\u9632\u4F4F\u5411\u81EA\u5DF1\u548C\u540C\u4F34 \u767C\u51FA\u7684\u5FC3\u9748\u653B\u64CA\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u6B63\u53D7\u5230\u82B3\u9999\u5E55\u7684\u4FDD\u8B77\uFF01"
  },
  asone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u517C\u5177\uFF12\u7A2E\u7279\u6027\uFF01"
  },
  asoneglastrier: {
    name: "\u4EBA\u99AC\u4E00\u9AD4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  asonespectrier: {
    name: "\u4EBA\u99AC\u4E00\u9AD4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aurabreak: {
    name: "\u6C23\u5834\u7834\u58DE",
    desc: "\u8B93\u6C23\u5834\u7684\u6548\u679C\u9006\u8F49\uFF0C \u4E26\u964D\u4F4E\u5A01\u529B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u58D3\u5236\u4E86\u6240\u6709\u6C23\u5834\uFF01"
  },
  baddreams: {
    name: "\u5922\u9B58",
    desc: "\u7D66\u4E88\u9677\u5165\u7761\u7720\u72C0\u614B\u7684\u5C0D\u624B\u50B7\u5BB3\u3002",
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
    damage: "  [POKEMON]\u6B63\u88AB\u60E1\u5922\u7E8F\u8EAB\uFF01"
  },
  ballfetch: {
    name: "\u64BF\u7403",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battery: {
    name: "\u84C4\u96FB\u6C60",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlearmor: {
    name: "\u6230\u9B25\u76D4\u7532",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlebond: {
    name: "\u727D\u7D46\u8B8A\u8EAB",
    desc: "\u6253\u5012\u5C0D\u624B\u6642\uFF0C\u8207\u8A13\u7DF4\u5BB6\u7684\u727D\u7D46\u6703\u52A0\u6DF1\uFF0C \u8B8A\u5316\u6210\u5C0F\u667A\u7248\u7532\u8CC0\u5FCD\u86D9\u3002 \u98DB\u6C34\u624B\u88E1\u528D\u7684\u5A01\u529B\u6703\u589E\u5F37\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u6E3E\u8EAB\u5145\u6EFF\u4E86\u727D\u7D46\u4E4B\u529B\uFF01",
    transform: "[POKEMON]\u8B8A\u8EAB\u6210\u4E86\u5C0F\u667A\u7248\u7532\u8CC0\u5FCD\u86D9\uFF01"
  },
  beadsofruin: {
    name: "\u707D\u798D\u4E4B\u7389",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \u56E0\u70BA[POKEMON]\u7684\u707D\u798D\u4E4B\u7389\uFF0C\u5468\u570D\u7684\u7279\u9632\u6E1B\u5F31\u4E86\uFF01"
  },
  beastboost: {
    name: "\u7570\u7378\u63D0\u5347",
    desc: "\u6253\u5012\u5C0D\u624B\u7684\u6642\u5019\uFF0C \u6703\u63D0\u9AD8\u81EA\u5DF1\u6700\u9AD8\u7684\u90A3\u9805\u80FD\u529B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  berserk: {
    name: "\u6012\u706B\u6C96\u5929",
    desc: "\uFF28\uFF30\u56E0\u5C0D\u624B\u7684\u653B\u64CA \u964D\u5230\u4E00\u534A\u6642\uFF0C \u7279\u653B\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  bigpecks: {
    name: "\u5065\u58EF\u80F8\u808C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  blaze: {
    name: "\u731B\u706B",
    desc: "\uFF28\uFF30\u6E1B\u5C11\u7684\u6642\u5019\uFF0C \u706B\u5C6C\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u6703\u63D0\u9AD8\u3002",
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
    name: "\u9632\u5F48",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cheekpouch: {
    name: "\u9830\u56CA",
    desc: "\u7121\u8AD6\u662F\u54EA\u7A2E\u6A39\u679C\uFF0C \u5403\u4E0B\u53BB\u5F8C\uFF28\uFF30\u90FD\u6703\u56DE\u5FA9\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  chillingneigh: {
    name: "\u84BC\u767D\u5636\u9CF4",
    desc: "\u6253\u5012\u5C0D\u624B\u6642 \u6703\u7528\u51B0\u51B7\u7684\u8072\u97F3\u5636\u9CF4 \u4E26\u63D0\u9AD8\u653B\u64CA\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  chlorophyll: {
    name: "\u8449\u7DA0\u7D20",
    desc: "\u5929\u6C23\u70BA\u6674\u6717\u6642\uFF0C \u901F\u5EA6\u6703\u63D0\u9AD8\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  clearbody: {
    name: "\u6046\u6DE8\u4E4B\u8EC0",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cloudnine: {
    name: "\u7121\u95DC\u5929\u6C23",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#airlock"
  },
  colorchange: {
    name: "\u8B8A\u8272",
    desc: "\u81EA\u5DF1\u7684\u5C6C\u6027\u6703\u8B8A\u70BA \u64CA\u4E2D\u81EA\u5DF1\u7684\u5C0D\u624B\u62DB\u5F0F\u7684\u5C6C\u6027\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  comatose: {
    name: "\u7D55\u5C0D\u7761\u7720",
    desc: "\u7E3D\u662F\u534A\u5922\u534A\u9192\u7684\u72C0\u614B\uFF0C \u7D55\u5C0D\u4E0D\u6703\u9192\u4F86\u3002 \u53EF\u5728\u7761\u8457\u7684\u72C0\u6CC1\u4E0B\u9032\u884C\u653B\u64CA\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u8655\u65BC\u534A\u5922\u534A\u9192\u72C0\u614B\uFF01"
  },
  commander: {
    name: "\u767C\u865F\u65BD\u4EE4",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u4F5C\u70BA\u767C\u865F\u65BD\u4EE4\u8005\u88AB[TARGET]\u541E\u4E0B\u53BB\u4E86\uFF01"
  },
  competitive: {
    name: "\u597D\u52DD",
    desc: "\u80FD\u529B\u88AB\u964D\u4F4E\u6642\uFF0C \u7279\u653B\u6703\u5927\u5E45\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  compoundeyes: {
    name: "\u8907\u773C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  contrary: {
    name: "\u5531\u53CD\u8ABF",
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
    name: "\u8150\u8755",
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
    desc: "\u53D7\u5230\u653B\u64CA\u6642\u6703\u6492\u4E0B\u68C9\u7D6E\uFF0C \u964D\u4F4E\u9664\u81EA\u5DF1\u4EE5\u5916\u7684 \u6240\u6709\u5BF6\u53EF\u5922\u7684\u901F\u5EA6\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cudchew: {
    name: "\u53CD\u82BB",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  curiousmedicine: {
    name: "\u602A\u85E5",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cursedbody: {
    name: "\u8A5B\u5492\u4E4B\u8EC0",
    desc: "\u53D7\u5230\u653B\u64CA\u6642\uFF0C \u6709\u6642\u6703\u628A\u5C0D\u624B\u7684\u62DB\u5F0F \u8B8A\u70BA\u5B9A\u8EAB\u6CD5\u72C0\u614B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cutecharm: {
    name: "\u8FF7\u4EBA\u4E4B\u8EC0",
    desc: "\u6709\u6642\u6703\u8B93\u63A5\u89F8\u5230\u81EA\u5DF1\u7684\u5C0D\u624B \u9677\u5165\u8457\u8FF7\u72C0\u614B\u3002",
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
    name: "\u6FD5\u6C23",
    desc: "\u900F\u904E\u628A\u5468\u570D\u90FD\u5F04\u6FD5\uFF0C \u4F7F\u8AB0\u90FD\u7121\u6CD5\u4F7F\u7528\u81EA\u7206\u7B49\u7206\u70B8\u985E\u7684\u62DB\u5F0F\u3002",
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
    block: "  [SOURCE]\u7121\u6CD5\u4F7F\u7528[MOVE]\uFF01"
  },
  dancer: {
    name: "\u821E\u8005",
    desc: "\u7576\u6709\u8AB0\u4F7F\u51FA\u8DF3\u821E\u62DB\u5F0F\u6642\uFF0C \u81EA\u5DF1\u4E5F\u80FD\u63A5\u8457\u4F7F\u51FA\u8DF3\u821E\u62DB\u5F0F\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  darkaura: {
    name: "\u6697\u9ED1\u6C23\u5834",
    desc: "\u5168\u9AD4\u7684\u60E1\u5C6C\u6027\u62DB\u5F0F\u8B8A\u5F37\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u91CB\u653E\u8457\u6697\u9ED1\u6C23\u5834\uFF01"
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
    name: "\u9BAE\u8277\u4E4B\u8EC0",
    desc: "\u8B93\u5C0D\u624B\u5687\u4E00\u8DF3\uFF0C \u4F7F\u5176\u7121\u6CD5\u5C0D\u6211\u65B9\u4F7F\u51FA\u5148\u5236\u62DB\u5F0F\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  defeatist: {
    name: "\u8EDF\u5F31",
    desc: "\uFF28\uFF30\u964D\u5230\u4E00\u534A\u4EE5\u4E0B\u6642\uFF0C \u6703\u8B8A\u5F97\u8EDF\u5F31\u800C\u4F7F\u5F97 \u653B\u64CA\u548C\u7279\u653B\u6E1B\u534A\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  defiant: {
    name: "\u4E0D\u670D\u8F38",
    desc: "\u80FD\u529B\u88AB\u964D\u4F4E\u6642\uFF0C \u653B\u64CA\u6703\u5927\u5E45\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  deltastream: {
    name: "\u5FB7\u723E\u5854\u6C23\u6D41",
    desc: "\u8B8A\u70BA\u4EE4\u98DB\u884C\u5C6C\u6027\u7684\u5F31\u9EDE \u6D88\u5931\u7684\u5929\u6C23\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  desolateland: {
    name: "\u7D42\u7D50\u4E4B\u5730",
    desc: "\u8B8A\u70BA\u8B93\u6C34\u5C6C\u6027\u653B\u64CA \u5931\u6548\u7684\u5929\u6C23\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  disguise: {
    name: "\u756B\u76AE",
    desc: "\u7528\u756B\u76AE\u8986\u84CB\u4F4F\u8EAB\u9AD4\uFF0C \u53EF\u9632\u4F4F\uFF11\u6B21\u653B\u64CA\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  \u756B\u76AE\u8B8A\u6210\u4E86\u66FF\u8EAB\uFF01",
    transform: "[POKEMON]\u7684\u756B\u76AE\u812B\u843D\u4E86\uFF01"
  },
  download: {
    name: "\u4E0B\u8F09",
    desc: "\u6BD4\u8F03\u5C0D\u624B\u7684\u9632\u79A6\u548C\u7279\u9632\uFF0C \u6839\u64DA\u8F03\u4F4E\u7684\u90A3\u9805\u80FD\u529B \u76F8\u61C9\u5730\u63D0\u9AD8\u81EA\u5DF1\u7684\u653B\u64CA\u6216\u7279\u653B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonize: {
    name: "\u9F8D\u76AE\u819A",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonsmaw: {
    name: "\u9F8D\u984E",
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
    name: "\u4E7E\u71E5\u76AE\u819A",
    desc: "\u4E0B\u96E8\u5929\u6C23\u6642\u548C\u53D7\u5230\u6C34\u5C6C\u6027\u7684\u62DB\u5F0F\u653B\u64CA\u6642\uFF0C \uFF28\uFF30\u6703\u56DE\u5FA9\u3002\u6674\u6717\u5929\u6C23\u6642\u548C\u53D7\u5230\u706B\u5C6C\u6027\u7684 \u62DB\u5F0F\u653B\u64CA\u6642\uFF0C\uFF28\uFF30\u6703\u6E1B\u5C11\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  ([POKEMON]\u53D7\u5230\u4E86\u50B7\u5BB3\uFF01)"
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
    desc: "\u53D7\u5230\u653B\u64CA\u6642\uFF0C \u6709\u6642\u6703\u8B93\u63A5\u89F8\u5230\u81EA\u5DF1\u7684\u5C0D\u624B \u9677\u5165\u4E2D\u6BD2\u3001\u9EBB\u75FA\u6216\u7761\u7720\u72C0\u614B\u3002",
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
    name: "\u96FB\u6C23\u88FD\u9020\u8005",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  electromorphosis: {
    name: "\u96FB\u529B\u8F49\u63DB",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u53D7\u5230[MOVE]\u800C\u5145\u96FB\u4E86\uFF01"
  },
  embodyaspectcornerstone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u8B93\u790E\u4E4B\u5047\u9762\u7DBB\u653E\u5149\u8F1D\uFF0C\u63D0\u9AD8\u4E86\u9632\u79A6\uFF01"
  },
  embodyaspecthearthflame: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u8B93\u7076\u4E4B\u5047\u9762\u7DBB\u653E\u5149\u8F1D\uFF0C\u63D0\u9AD8\u4E86\u653B\u64CA\uFF01"
  },
  embodyaspectteal: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u8B93\u78A7\u4E4B\u5047\u9762\u7DBB\u653E\u5149\u8F1D\uFF0C\u63D0\u9AD8\u4E86\u901F\u5EA6\uFF01"
  },
  embodyaspectwellspring: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON]\u8B93\u4E95\u4E4B\u5047\u9762\u7DBB\u653E\u5149\u8F1D\uFF0C\u63D0\u9AD8\u4E86\u7279\u9632\uFF01"
  },
  emergencyexit: {
    name: "\u5371\u96AA\u8FF4\u907F",
    desc: "\uFF28\uFF30\u6E1B\u5230\u4E00\u534A\u6642\uFF0C \u70BA\u4E86\u907F\u958B\u5371\u96AA\uFF0C \u6703\u9000\u56DE\u540C\u884C\u968A\u4F0D\u88E1\u9762\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  fairyaura: {
    name: "\u5996\u7CBE\u6C23\u5834",
    desc: "\u5168\u9AD4\u7684\u5996\u7CBE\u5C6C\u6027\u62DB\u5F0F\u8B8A\u5F37\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u91CB\u653E\u8457\u5996\u7CBE\u6C23\u5834\uFF01"
  },
  filter: {
    name: "\u904E\u6FFE",
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
    name: "\u706B\u7130\u4E4B\u8EC0",
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
    name: "\u53D7\u71B1\u6FC0\u5347",
    desc: "\u9677\u5165\u707C\u50B7\u72C0\u614B\u6642\uFF0C \u7279\u6B8A\u62DB\u5F0F\u7684\u5A01\u529B\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  flashfire: {
    name: "\u5F15\u706B",
    desc: "\u53D7\u5230\u706B\u5C6C\u6027\u7684\u62DB\u5F0F\u653B\u64CA\u6642\uFF0C \u5438\u6536\u706B\u7130\uFF0C\u8B93\u81EA\u5DF1\u4F7F\u51FA\u7684 \u706B\u5C6C\u6027\u62DB\u5F0F\u8B8A\u5F37\u3002",
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
    name: "\u82B1\u4E4B\u79AE",
    desc: "\u5929\u6C23\u70BA\u6674\u6717\u6642\uFF0C \u81EA\u5DF1\u548C\u540C\u4F34\u7684\u653B\u64CA\u548C \u7279\u9632\u80FD\u529B\u6703\u63D0\u9AD8\u3002",
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
    desc: "\u6211\u65B9\u7684\u8349\u5C6C\u6027\u5BF6\u53EF\u5922 \u80FD\u529B\u4E0D\u6703\u964D\u4F4E\u3002 \u4E5F\u4E0D\u6703\u9677\u5165\u7570\u5E38\u72C0\u614B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u6B63\u53D7\u5230\u82B1\u5E55\u7684\u4FDD\u8B77\uFF01"
  },
  fluffy: {
    name: "\u6BDB\u8338\u8338",
    desc: "\u6703\u5C07\u5C0D\u624B\u6240\u7D66\u4E88\u7684\u63A5\u89F8\u985E\u62DB\u5F0F\u7684\u50B7\u5BB3\u6E1B\u534A\uFF0C \u4F46\u706B\u5C6C\u6027\u62DB\u5F0F\u7684\u50B7\u5BB3\u6703\u8B8A\u70BA\uFF12\u500D\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  forecast: {
    name: "\u9670\u6674\u4E0D\u5B9A",
    desc: "\u5728\u5929\u6C23\u7684\u5F71\u97FF\u4E0B\uFF0C \u6703\u8B8A\u6210\u6C34\u5C6C\u6027\u3001\u706B\u5C6C\u6027 \u6216\u51B0\u5C6C\u6027\u4E4B\u4E2D\u7684\u4E00\u7A2E\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  forewarn: {
    name: "\u9810\u77E5\u5922",
    desc: "\u51FA\u5834\u6642\uFF0C\u9810\u898B\uFF11\u500B \u5C0D\u624B\u6301\u6709\u7684\u62DB\u5F0F\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  \u8B80\u53D6\u4E86[TARGET]\u7684[MOVE]\uFF01",
    activateNoTarget: ""
    // NEEDS TRANSLATION: predates Chinese support
  },
  friendguard: {
    name: "\u53CB\u60C5\u9632\u5B88",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  frisk: {
    name: "\u5BDF\u89BA",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u5BDF\u89BA\u5230\u4E86[TARGET]\u7684[ITEM]\uFF01",
    activateNoTarget: ""
    // NEEDS TRANSLATION: predates Chinese support
  },
  fullmetalbody: {
    name: "\u91D1\u5C6C\u9632\u8B77",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  furcoat: {
    name: "\u6BDB\u76AE\u5927\u8863",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  galewings: {
    name: "\u75BE\u98A8\u4E4B\u7FFC",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  galvanize: {
    name: "\u96FB\u6C23\u76AE\u819A",
    desc: "\u4E00\u822C\u5C6C\u6027\u7684\u62DB\u5F0F \u6703\u8B8A\u70BA\u96FB\u5C6C\u6027\u3002 \u5A01\u529B\u6703\u5C11\u91CF\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gluttony: {
    name: "\u8CAA\u5403\u9B3C",
    desc: "\u539F\u672C\uFF28\uFF30\u8B8A\u5F97\u5F88\u5C11\u6642\u624D\u6703\u5403\u7684\u6A39\u679C\uFF0C \u5728\uFF28\uFF30\u9084\u6709\u4E00\u534A\u6642\u5C31\u6703\u628A\u5B83\u5403\u6389\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  goodasgold: {
    name: "\u9EC3\u91D1\u4E4B\u8EC0",
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
    desc: "\u653B\u64CA\u96D6\u7136\u6703\u63D0\u9AD8\uFF0C \u4F46\u53EA\u80FD\u4F7F\u51FA \u6700\u521D\u9078\u64C7\u7684\u62DB\u5F0F\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grasspelt: {
    name: "\u8349\u4E4B\u6BDB\u76AE",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grassysurge: {
    name: "\u9752\u8349\u88FD\u9020\u8005",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grimneigh: {
    name: "\u6F06\u9ED1\u5636\u9CF4",
    desc: "\u6253\u5012\u5C0D\u624B\u6642 \u6703\u7528\u6050\u6016\u7684\u8072\u97F3\u5636\u9CF4 \u4E26\u63D0\u9AD8\u7279\u653B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guarddog: {
    name: "\u770B\u9580\u72AC",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gulpmissile: {
    name: "\u4E00\u53E3\u98DB\u5F48",
    desc: "\u885D\u6D6A\u6216\u6F5B\u6C34\u6642\u6703\u53FC\u4F86\u7375\u7269\u3002 \u7576\u53D7\u5230\u50B7\u5BB3\u6642\uFF0C \u6703\u5410\u51FA\u7375\u7269\u653B\u64CA\u5C0D\u624B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guts: {
    name: "\u6BC5\u529B",
    desc: "\u9677\u5165\u7570\u5E38\u72C0\u614B\u6642\uFF0C \u6703\u62FF\u51FA\u6BC5\u529B\uFF0C \u653B\u64CA\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hadronengine: {
    name: "\u5F37\u5B50\u5F15\u64CE",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u5E03\u4E0B\u96FB\u6C23\u5834\u5730\uFF0C\u4F7F\u672A\u4F86\u7684\u6A5F\u95DC\u8E8D\u52D5\u8D77\u4F86\uFF01\uFF01",
    activate: "  [POKEMON]\u900F\u904E\u96FB\u6C23\u5834\u5730\u4F7F\u672A\u4F86\u7684\u6A5F\u95DC\u8E8D\u52D5\u8D77\u4F86\uFF01\uFF01"
  },
  harvest: {
    name: "\u6536\u7A6B",
    desc: "\u53EF\u591A\u6B21\u63A1\u6536 \u5DF2\u88AB\u4F7F\u7528\u904E\u7684\u6A39\u679C\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    addItem: "  [POKEMON]\u6536\u7A6B\u4E86[ITEM]\uFF01"
  },
  healer: {
    name: "\u6CBB\u7652\u4E4B\u5FC3",
    desc: "\u6709\u6642\u6703\u6CBB\u7652\u540C\u4F34\u7684\u7570\u5E38\u72C0\u614B\u3002",
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
    name: "\u8010\u71B1",
    desc: "\u9760\u8457\u8010\u71B1\u7684\u9AD4\u8CEA\uFF0C \u8B93\u706B\u5C6C\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u6E1B\u534A\u3002",
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
    name: "\u91CD\u91D1\u5C6C",
    desc: "\u81EA\u5DF1\u7684\u91CD\u91CF\u6703\u8B8A\u70BA\uFF12\u500D\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  honeygather: {
    name: "\u63A1\u871C",
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
    name: "\u98FD\u4E86\u53C8\u9913",
    desc: "\u5728\u6BCF\u500B\u56DE\u5408\u7D50\u675F\u6642\uFF0C \u6703\u5728\u6EFF\u8179\u82B1\u7D0B\u548C\u7A7A\u8179\u82B1\u7D0B\u4E4B\u9593 \u4EA4\u66FF\u6539\u8B8A\u6A23\u5B50\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hustle: {
    name: "\u6D3B\u529B",
    desc: "\u81EA\u5DF1\u7684\u653B\u64CA\u96D6\u6703\u8B8A\u9AD8\uFF0C \u4F46\u547D\u4E2D\u7387\u6703\u964D\u4F4E\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hydration: {
    name: "\u6FD5\u6F64\u4E4B\u8EC0",
    desc: "\u5929\u6C23\u70BA\u4E0B\u96E8\u6642\uFF0C \u6703\u6CBB\u7652\u7570\u5E38\u72C0\u614B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  hypercutter: {
    name: "\u602A\u529B\u9257",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  icebody: {
    name: "\u51B0\u51CD\u4E4B\u8EC0",
    desc: "\u5929\u6C23\u70BA\u51B0\u96F9\u6642\uFF0C \u6703\u6F38\u6F38\u56DE\u5FA9\uFF28\uFF30\u3002",
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
    name: "\u7D50\u51CD\u982D",
    desc: "\u982D\u90E8\u7684\u51B0\u6703\u4EE3\u66FF\u81EA\u5DF1\u627F\u53D7 \u7269\u7406\u653B\u64CA\uFF0C\u4F46\u662F\u6A23\u5B50\u6703\u6539\u8B8A\u3002 \u4E0B\u51B0\u96F9\u6642\uFF0C\u51B0\u6703\u56DE\u5FA9\u539F\u72C0\u3002",
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
    name: "\u51B0\u9C57\u7C89",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  illuminate: {
    name: "\u767C\u5149",
    desc: "\u900F\u904E\u8B93\u5468\u570D\u8B8A\u4EAE\uFF0C \u8B8A\u5F97\u5BB9\u6613\u9047\u898B\u91CE\u751F\u7684\u5BF6\u53EF\u5922\u3002",
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
    name: "\u5E7B\u89BA",
    desc: "\u5047\u626E\u6210\u540C\u884C\u968A\u4F0D\u4E2D\u7684 \u6700\u5F8C\u4E00\u96BB\u5BF6\u53EF\u5922\u51FA\u5834\uFF0C \u8FF7\u60D1\u5C0D\u624B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    end: "  [POKEMON]\u9020\u6210\u7684\u5E7B\u89BA\u89E3\u9664\u4E86\uFF01"
  },
  immunity: {
    name: "\u514D\u75AB",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  imposter: {
    name: "\u8B8A\u8EAB\u8005",
    desc: "\u8B8A\u8EAB\u70BA\u7576\u524D\u9762\u5C0D\u7684\u5BF6\u53EF\u5922\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  infiltrator: {
    name: "\u7A7F\u900F",
    desc: "\u53EF\u7A7F\u900F\u5C0D\u624B\u7684\u5C4F\u969C \u6216\u66FF\u8EAB\u9032\u884C\u653B\u64CA\u3002",
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
    name: "\u98DB\u51FA\u7684\u5167\u5728\u7269",
    desc: "\u88AB\u5C0D\u624B\u6253\u5012\u7684\u6642\u5019\uFF0C \u6703\u7D66\u4E88\u5C0D\u624B\u76F8\u7576\u65BC \uFF28\uFF30\u5269\u9918\u91CF\u7684\u50B7\u5BB3\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#aftermath"
  },
  innerfocus: {
    name: "\u7CBE\u795E\u529B",
    desc: "\u9760\u8457\u7D93\u904E\u935B\u934A\u7684\u7CBE\u795E\uFF0C \u4E0D\u6703\u56E0\u5C0D\u624B\u7684\u653B\u64CA\u800C\u754F\u7E2E\u3002",
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
    name: "\u5A01\u5687",
    desc: "\u51FA\u5834\u6642\u5A01\u5687\u5C0D\u624B\uFF0C \u4F7F\u5176\u9000\u7E2E\uFF0C \u5F9E\u800C\u964D\u4F4E\u5C0D\u624B\u7684\u653B\u64CA\u3002",
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
    name: "\u4E0D\u6493\u4E4B\u528D",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  ironbarbs: {
    name: "\u9435\u523A",
    desc: "\u7528\u9435\u523A\u7D66\u4E88\u63A5\u89F8\u5230\u81EA\u5DF1\u7684 \u5C0D\u624B\u50B7\u5BB3\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#roughskin"
  },
  ironfist: {
    name: "\u9435\u62F3",
    desc: "\u4F7F\u7528\u5230\u62F3\u982D\u7684\u62DB\u5F0F \u5A01\u529B\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  justified: {
    name: "\u6B63\u7FA9\u4E4B\u5FC3",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  keeneye: {
    name: "\u92B3\u5229\u76EE\u5149",
    desc: "\u9760\u8457\u92B3\u5229\u7684\u76EE\u5149\uFF0C \u547D\u4E2D\u7387\u4E0D\u6703\u88AB\u964D\u4F4E\u3002",
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
    desc: "\u7121\u6CD5\u4F7F\u7528\u6301\u6709\u7684\u9053\u5177\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  leafguard: {
    name: "\u8449\u5B50\u9632\u5B88",
    desc: "\u5929\u6C23\u70BA\u6674\u6717\u6642\uFF0C \u4E0D\u6703\u9677\u5165\u7570\u5E38\u72C0\u614B\u3002",
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
    name: "\u98C4\u6D6E",
    desc: "\u5F9E\u5730\u9762\u6D6E\u8D77\uFF0C \u5F9E\u800C\u4E0D\u6703\u53D7\u5230\u5730\u9762\u5C6C\u6027\u62DB\u5F0F\u7684\u653B\u64CA\u3002",
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
    desc: "\u8B8A\u70BA\u8207\u81EA\u5DF1\u4F7F\u51FA\u7684\u62DB\u5F0F \u76F8\u540C\u7684\u5C6C\u6027\u3002",
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
    name: "\u8F15\u91D1\u5C6C",
    desc: "\u81EA\u5DF1\u7684\u91CD\u91CF\u6703\u6E1B\u534A\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lightningrod: {
    name: "\u907F\u96F7\u91DD",
    desc: "\u5C07\u96FB\u5C6C\u6027\u7684\u62DB\u5F0F\u5438\u5F15\u5230\u81EA\u5DF1\u8EAB\u4E0A\uFF0C \u4E0D\u4F46\u4E0D\u6703\u53D7\u5230\u50B7\u5BB3\uFF0C\u53CD\u800C\u6703\u63D0\u9AD8\u7279\u653B\u3002",
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
    activate: "  [POKEMON]\u5438\u5F15\u4E86\u653B\u64CA\uFF01"
  },
  limber: {
    name: "\u67D4\u8EDF",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lingeringaroma: {
    name: "\u7529\u4E0D\u6389\u7684\u6C23\u5473",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "  [TARGET]\u88AB\u67D3\u4E0A\u4E86\u7529\u4E0D\u6389\u7684\u6C23\u5473\uFF01"
  },
  liquidooze: {
    name: "\u6C61\u6CE5\u6F3F",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  [POKEMON]\u5438\u5230\u4E86\u6C61\u6CE5\u6F3F\uFF01"
  },
  liquidvoice: {
    name: "\u6FD5\u6F64\u4E4B\u8072",
    desc: "\u6240\u6709\u7684\u8072\u97F3\u62DB\u5F0F \u90FD\u8B8A\u70BA\u6C34\u5C6C\u6027\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  longreach: {
    name: "\u9060\u9694",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magicbounce: {
    name: "\u9B54\u6CD5\u93E1",
    desc: "\u53EF\u4E0D\u53D7\u5230\u7531\u5C0D\u624B\u4F7F\u51FA\u7684 \u8B8A\u5316\u985E\u62DB\u5F0F\u6240\u5F71\u97FF\uFF0C\u4E26\u5C07\u5176\u53CD\u5F48\u3002",
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
    desc: "\u4E0D\u6703\u53D7\u5230\u653B\u64CA\u4EE5\u5916\u7684\u50B7\u5BB3\u3002",
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
    name: "\u9B54\u8853\u5E2B",
    desc: "\u596A\u8D70\u88AB\u81EA\u5DF1\u62DB\u5F0F \u64CA\u4E2D\u7684\u5C0D\u624B\u7684\u9053\u5177\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magmaarmor: {
    name: "\u7194\u5CA9\u93A7\u7532",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magnetpull: {
    name: "\u78C1\u529B",
    desc: "\u7528\u78C1\u529B\u5438\u4F4F\u92FC\u5C6C\u6027\u7684\u5BF6\u53EF\u5922\uFF0C \u4F7F\u5176\u7121\u6CD5\u9003\u8D70\u3002",
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
    name: "\u795E\u5947\u9C57\u7247",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megalauncher: {
    name: "\u8D85\u7D1A\u767C\u5C04\u5668",
    desc: "\u6CE2\u52D5\u548C\u6CE2\u5C0E\u985E\u62DB\u5F0F\u7684 \u5A01\u529B\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megasol: {
    name: "\u8D85\u7D1A\u65E5\u5149",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  merciless: {
    name: "\u4E0D\u4EC1\u4E0D\u7FA9",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mimicry: {
    name: "\u64EC\u614B",
    desc: "\u5BF6\u53EF\u5922\u7684\u5C6C\u6027\u6703\u96A8\u8457 \u5834\u5730\u7684\u72C0\u614B\u800C\u6539\u8B8A\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u8B8A\u56DE\u539F\u4F86\u7684\u5C6C\u6027\u4E86\uFF01"
  },
  mindseye: {
    name: "\u5FC3\u773C",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  minus: {
    name: "\u8CA0\u96FB",
    desc: "\u5834\u4E0A\u7684\u5925\u4F34\u4E4B\u4E2D\uFF0C \u5982\u679C\u6709\u6B63\u96FB\u6216\u8CA0\u96FB\u7279\u6027\u7684\u5BF6\u53EF\u5922\uFF0C \u81EA\u5DF1\u7684\u7279\u653B\u6703\u63D0\u9AD8\u3002",
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
    name: "\u93E1\u7532",
    desc: "\u53EA\u53CD\u5F48\u81EA\u5DF1\u53D7\u5230\u7684 \u80FD\u529B\u964D\u4F4E\u6548\u679C\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mistysurge: {
    name: "\u8584\u9727\u88FD\u9020\u8005",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moldbreaker: {
    name: "\u7834\u683C",
    desc: "\u53EF\u4E0D\u53D7\u7279\u6027\u5F71\u97FF\uFF0C \u5411\u5C0D\u624B\u4F7F\u51FA\u62DB\u5F0F\u3002",
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
    start: "  [POKEMON]\u6253\u7834\u4E86\u5E38\u898F\uFF01"
  },
  moody: {
    name: "\u5FC3\u60C5\u4E0D\u5B9A",
    desc: "\u6BCF\u4E00\u56DE\u5408\uFF0C\u80FD\u529B\u4E2D\u7684\u67D0\u9805 \u6703\u5927\u5E45\u63D0\u9AD8\uFF0C\u76F8\u5C0D\u5730\u67D0\u9805\u6703\u964D\u4F4E\u3002",
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
    name: "\u96FB\u6C23\u5F15\u64CE",
    desc: "\u53D7\u5230\u96FB\u5C6C\u6027\u7684\u62DB\u5F0F\u653B\u64CA\u6642\uFF0C \u4E0D\u4F46\u4E0D\u6703\u53D7\u5230\u50B7\u5BB3\uFF0C\u53CD\u800C\u901F\u5EA6\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moxie: {
    name: "\u81EA\u4FE1\u904E\u5EA6",
    desc: "\u5982\u679C\u6253\u5012\u5C0D\u624B\uFF0C \u6703\u5145\u6EFF\u81EA\u4FE1\u4E26\u63D0\u9AD8\u653B\u64CA\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multiscale: {
    name: "\u591A\u91CD\u9C57\u7247",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multitype: {
    name: "\u591A\u5C6C\u6027",
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
    desc: "\u88AB\u5C0D\u624B\u63A5\u89F8\u5230\u6642\uFF0C \u6703\u5C07\u5C0D\u624B\u8B8A\u6210\u6728\u4E43\u4F0A\u3002",
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
    changeAbility: "  [TARGET]\u7684\u7279\u6027\u8B8A\u6210\u4E86\u6728\u4E43\u4F0A\uFF01"
  },
  myceliummight: {
    name: "\u83CC\u7D72\u4E4B\u529B",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  naturalcure: {
    name: "\u81EA\u7136\u56DE\u5FA9",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  neuroforce: {
    name: "\u8166\u6838\u4E4B\u529B",
    desc: "\u53EF\u9032\u4E00\u6B65\u63D0\u5347 \u6548\u679C\u7D55\u4F73\u62DB\u5F0F\u7684\u5A01\u529B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  neutralizinggas: {
    name: "\u5316\u5B78\u8B8A\u5316\u6C23\u9AD4",
    desc: "\u7576\u5834\u4E0A\u6709\u7279\u6027\u662F\u5316\u5B78\u8B8A\u5316\u6C23\u9AD4\u7684\u5BF6\u53EF\u5922\u6642\uFF0C \u6240\u6709\u5BF6\u53EF\u5922\u7684\u7279\u6027\u6548\u679C \u90FD\u6703\u6D88\u5931\u6216\u7121\u6CD5\u767C\u52D5\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  \u5468\u570D\u5145\u6EFF\u4E86\u5316\u5B78\u8B8A\u5316\u6C23\u9AD4\uFF01",
    end: "  \u5316\u5B78\u8B8A\u5316\u6C23\u9AD4\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  noguard: {
    name: "\u7121\u9632\u5B88",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  normalize: {
    name: "\u4E00\u822C\u76AE\u819A",
    desc: "\u7121\u8AD6\u662F\u4EC0\u9EBC\u5C6C\u6027\u7684\u62DB\u5F0F\uFF0C \u5168\u90E8\u90FD\u6703\u8B8A\u70BA\u4E00\u822C\u5C6C\u6027\u3002 \u5A01\u529B\u6703\u5C11\u91CF\u63D0\u9AD8\u3002",
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
    name: "\u9072\u920D",
    desc: "\u611F\u89BA\u9072\u920D\uFF0C \u4E0D\u6703\u9677\u5165\u8457\u8FF7\u548C\u88AB\u6311\u91C1\u72C0\u614B\u3002",
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
    name: "\u8DDF\u98A8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  orichalcumpulse: {
    name: "\u7DCB\u7D05\u8108\u52D5",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u52A0\u5F37\u65E5\u7167\uFF0C\u4F7F\u53E4\u4EE3\u7684\u8108\u52D5\u72C2\u66B4\u8D77\u4F86\uFF01\uFF01",
    activate: "  [POKEMON]\u53D7\u5230\u65E5\u7167\uFF0C\u4F7F\u53E4\u4EE3\u7684\u8108\u52D5\u72C2\u66B4\u8D77\u4F86\uFF01\uFF01"
  },
  overcoat: {
    name: "\u9632\u5875",
    desc: "\u4E0D\u6703\u53D7\u5230\u6C99\u66B4\u6216\u51B0\u96F9\u7B49\u7684\u50B7\u5BB3\u3002 \u4E0D\u6703\u53D7\u5230\u7C89\u672B\u985E\u62DB\u5F0F\u7684\u653B\u64CA\u3002",
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
    desc: "\uFF28\uFF30\u6E1B\u5C11\u7684\u6642\u5019\uFF0C \u8349\u5C6C\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u6703\u63D0\u9AD8\u3002",
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
    desc: "\u56E0\u70BA\u6211\u884C\u6211\u7D20\uFF0C \u4E0D\u6703\u9677\u5165\u6DF7\u4E82\u72C0\u614B\u3002",
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
    name: "\u89AA\u5B50\u611B",
    desc: "\u89AA\u5B50\u5006\u53EF\u5408\u8A08\u653B\u64CA\uFF12\u6B21\u3002",
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
    name: "\u7C89\u5F69\u8B77\u5E55",
    desc: "\u81EA\u5DF1\u548C\u6211\u65B9\u540C\u4F34\u90FD\u4E0D\u6703 \u9677\u5165\u4E2D\u6BD2\u7684\u7570\u5E38\u72C0\u614B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  perishbody: {
    name: "\u6EC5\u4EA1\u4E4B\u8EC0",
    desc: "\u5728\u53D7\u5230\u63A5\u89F8\u985E\u62DB\u5F0F\u653B\u64CA\u6642\uFF0C \uFF13\u500B\u56DE\u5408\u5F8C\u96D9\u65B9\u90FD\u6703\u9677\u5165\u7015\u6B7B\u3002 \u66FF\u63DB\u5BF6\u53EF\u5922\u5F8C\u6548\u679C\u5C31\u6703\u6D88\u5931\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \u96D9\u65B9\u5C07\u5728\uFF13\u56DE\u5408\u5F8C\u6EC5\u4EA1\uFF01"
  },
  pickpocket: {
    name: "\u9806\u624B\u727D\u7F8A",
    desc: "\u76DC\u53D6\u63A5\u89F8\u5230\u81EA\u5DF1\u7684 \u5C0D\u624B\u7684\u9053\u5177\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pickup: {
    name: "\u64BF\u62FE",
    desc: "\u6709\u6642\u6703\u64BF\u4F86\u5C0D\u624B\u7528\u904E\u7684\u9053\u5177\u3002 \u5192\u96AA\u904E\u7A0B\u4E2D\u4E5F\u6703\u64BF\u4F86\u3002",
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
    name: "\u8CAB\u7A7F\u947D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pixilate: {
    name: "\u5996\u7CBE\u76AE\u819A",
    desc: "\u4E00\u822C\u5C6C\u6027\u7684\u62DB\u5F0F \u6703\u8B8A\u70BA\u5996\u7CBE\u5C6C\u6027\u3002 \u5A01\u529B\u6703\u5C11\u91CF\u63D0\u9AD8\u3002",
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
    name: "\u6B63\u96FB",
    desc: "\u5834\u4E0A\u7684\u5925\u4F34\u4E4B\u4E2D\uFF0C \u5982\u679C\u6709\u6B63\u96FB\u6216\u8CA0\u96FB\u7279\u6027\u7684\u5BF6\u53EF\u5922\uFF0C \u81EA\u5DF1\u7684\u7279\u653B\u6703\u63D0\u9AD8\u3002",
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
    name: "\u6BD2\u7642",
    desc: "\u9677\u5165\u4E2D\u6BD2\u72C0\u614B\u6642\uFF0C \uFF28\uFF30\u4E0D\u6703\u6E1B\u5C11\uFF0C\u53CD\u800C\u6703\u6F38\u6F38\u589E\u52A0\u3002",
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
    desc: "\u6709\u6642\u50C5\u662F\u63A5\u89F8 \u5C31\u80FD\u8B93\u5C0D\u624B\u4E2D\u6BD2\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  powerconstruct: {
    name: "\u7FA4\u805A\u8B8A\u5F62",
    desc: "\uFF28\uFF30\u8B8A\u70BA\u4E00\u534A\u6642\uFF0C \u7D30\u80DE\u5011\u6703\u8D95\u4F86\u652F\u63F4\uFF0C \u8B8A\u70BA\u5B8C\u5168\u9AD4\u5F62\u614B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \u611F\u53D7\u5230\u5927\u91CF\u7684\u6C23\u606F\u5B58\u5728\u2026\u2026\uFF01",
    transform: "[POKEMON]\u8B8A\u6210\u4E86\u5B8C\u5168\u9AD4\u5F62\u614B\uFF01"
  },
  powerofalchemy: {
    name: "\u5316\u5B78\u4E4B\u529B",
    desc: "\u7E7C\u627F\u88AB\u6253\u5012\u7684\u540C\u4F34\u7684\u7279\u6027\uFF0C \u8B8A\u70BA\u76F8\u540C\u7684\u7279\u6027\u3002",
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
    name: "\u80FD\u91CF\u9EDE",
    desc: "\u53EA\u8981\u7AD9\u5728\u65C1\u908A\uFF0C \u62DB\u5F0F\u7684\u5A01\u529B\u5C31\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prankster: {
    name: "\u60E1\u4F5C\u5287\u4E4B\u5FC3",
    desc: "\u53EF\u4EE5\u6436\u5148\u4F7F\u51FA\u8B8A\u5316\u985E\u62DB\u5F0F\u3002",
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
    name: "\u58D3\u8FEB\u611F",
    desc: "\u7D66\u4E88\u5C0D\u624B\u58D3\u8FEB\u611F\uFF0C \u5927\u91CF\u6E1B\u5C11\u5176\u4F7F\u7528\u62DB\u5F0F\u7684\uFF30\uFF30\u3002",
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
    start: "  [POKEMON]\u91CB\u653E\u8457\u58D3\u8FEB\u611F\uFF01"
  },
  primordialsea: {
    name: "\u59CB\u6E90\u4E4B\u6D77",
    desc: "\u8B8A\u70BA\u8B93\u706B\u5C6C\u6027\u653B\u64CA \u5931\u6548\u7684\u5929\u6C23\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prismarmor: {
    name: "\u7A1C\u93E1\u88DD\u7532",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  propellertail: {
    name: "\u87BA\u65CB\u5C3E\u9C2D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  protean: {
    name: "\u8B8A\u5E7B\u81EA\u5982",
    desc: "\u8B8A\u70BA\u8207\u81EA\u5DF1\u4F7F\u51FA\u7684\u62DB\u5F0F \u76F8\u540C\u7684\u5C6C\u6027\u3002",
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
    activate: "  [POKEMON]\u7528\u5927\u6674\u5929\u767C\u52D5\u4E86\u53E4\u4EE3\u6D3B\u6027\uFF01",
    activateFromItem: "  [POKEMON]\u7528\u9A45\u52C1\u80FD\u91CF\u767C\u52D5\u4E86\u53E4\u4EE3\u6D3B\u6027\uFF01",
    start: "  [POKEMON]\u7684[STAT]\u5347\u9AD8\u4E86\uFF01",
    end: "  [POKEMON]\u7684\u53E4\u4EE3\u6D3B\u6027\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  psychicsurge: {
    name: "\u7CBE\u795E\u88FD\u9020\u8005",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  punkrock: {
    name: "\u9F90\u514B\u6416\u6EFE",
    desc: "\u8072\u97F3\u62DB\u5F0F\u7684\u5A01\u529B\u6703\u63D0\u9AD8\u3002 \u53D7\u5230\u8072\u97F3\u62DB\u5F0F\u7684\u50B7\u5BB3\u6703\u6E1B\u534A\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purepower: {
    name: "\u745C\u4F3D\u4E4B\u529B",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purifyingsalt: {
    name: "\u6F54\u6DE8\u4E4B\u9E7D",
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
    activate: "  [POKEMON]\u900F\u904E\u96FB\u6C23\u5834\u5730\u767C\u52D5\u4E86\u5938\u514B\u5145\u80FD\uFF01",
    activateFromItem: "  [POKEMON]\u7528\u9A45\u52C1\u80FD\u91CF\u767C\u52D5\u4E86\u5938\u514B\u5145\u80FD\uFF01",
    start: "  [POKEMON]\u7684[STAT]\u5347\u9AD8\u4E86\uFF01",
    end: "  [POKEMON]\u7684\u5938\u514B\u5145\u80FD\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  queenlymajesty: {
    name: "\u5973\u738B\u7684\u5A01\u56B4",
    desc: "\u5411\u5C0D\u624B\u65BD\u52A0\u5A01\u61FE\u529B\uFF0C \u4F7F\u5176\u7121\u6CD5\u5C0D\u6211\u65B9\u4F7F\u51FA\u5148\u5236\u62DB\u5F0F\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  quickdraw: {
    name: "\u901F\u64CA",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \u901F\u64CA\u4F7F[POKEMON]\u884C\u52D5\u8B8A\u5FEB\u4E86\uFF01"
  },
  quickfeet: {
    name: "\u98DB\u6BDB\u817F",
    desc: "\u9677\u5165\u7570\u5E38\u72C0\u614B\u6642\uFF0C \u901F\u5EA6\u6703\u63D0\u9AD8\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  raindish: {
    name: "\u96E8\u76E4",
    desc: "\u5929\u6C23\u70BA\u4E0B\u96E8\u6642\uFF0C \u6703\u6F38\u6F38\u56DE\u5FA9\uFF28\uFF30\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  rattled: {
    name: "\u81BD\u602F",
    desc: "\u53D7\u5230\u60E1\u5C6C\u6027\u3001\u5E7D\u9748\u5C6C\u6027 \u548C\u87F2\u5C6C\u6027\u7684\u62DB\u5F0F\u653B\u64CA\u6642\uFF0C \u6703\u56E0\u81BD\u602F\u800C\u4F7F\u5F97\u901F\u5EA6\u63D0\u9AD8\u3002",
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
    desc: "\u7E7C\u627F\u88AB\u6253\u5012\u7684\u540C\u4F34\u7684\u7279\u6027\uFF0C \u8B8A\u70BA\u76F8\u540C\u7684\u7279\u6027\u3002",
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
    changeAbility: "  \u7E7C\u627F\u4E86[SOURCE]\u7684[ABILITY]\uFF01"
  },
  reckless: {
    name: "\u6368\u8EAB",
    desc: "\u6703\u8B93\u81EA\u5DF1\u56E0\u53CD\u4F5C\u7528\u529B\u800C\u53D7\u50B7\u7684\u62DB\u5F0F \u5A01\u529B\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  refrigerate: {
    name: "\u51B0\u51CD\u76AE\u819A",
    desc: "\u4E00\u822C\u5C6C\u6027\u7684\u62DB\u5F0F \u6703\u8B8A\u70BA\u51B0\u5C6C\u6027\u3002 \u5A01\u529B\u6703\u5C11\u91CF\u63D0\u9AD8\u3002",
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
    desc: "\u8B93\u6A39\u679C\u6210\u719F\uFF0C \u4F7F\u6548\u679C\u8B8A\u70BA\uFF12\u500D\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rivalry: {
    name: "\u9B25\u722D\u5FC3",
    desc: "\u9762\u5C0D\u6027\u5225\u76F8\u540C\u7684\u5C0D\u624B\uFF0C \u6703\u71C3\u8D77\u9B25\u722D\u5FC3\uFF0C\u8B8A\u5F97\u66F4\u5F37\u3002 \u9762\u5C0D\u6027\u5225\u4E0D\u540C\u7684\u5C0D\u624B\u6642\u5247\u6703\u8B8A\u5F31\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rkssystem: {
    name: "\uFF21\uFF32\u7CFB\u7D71",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rockhead: {
    name: "\u5805\u786C\u8166\u888B",
    desc: "\u5373\u4F7F\u4F7F\u51FA\u6703\u53D7\u53CD\u4F5C\u7528\u529B\u50B7\u5BB3\u7684\u62DB\u5F0F\uFF0C \uFF28\uFF30\u4E5F\u4E0D\u6703\u6E1B\u5C11\u3002",
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
    name: "\u7C97\u7CD9\u76AE\u819A",
    desc: "\u53D7\u5230\u653B\u64CA\u6642\uFF0C \u7528\u7C97\u7CD9\u7684\u76AE\u819A\u5F04\u50B7 \u63A5\u89F8\u5230\u81EA\u5DF1\u7684\u5C0D\u624B\u3002",
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
    damage: "  [POKEMON]\u53D7\u5230\u4E86\u50B7\u5BB3\uFF01"
  },
  runaway: {
    name: "\u9003\u8DD1",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandforce: {
    name: "\u6C99\u4E4B\u529B",
    desc: "\u5929\u6C23\u70BA\u6C99\u66B4\u6642\uFF0C \u5CA9\u77F3\u5C6C\u6027\u3001\u5730\u9762\u5C6C\u6027 \u548C\u92FC\u5C6C\u6027\u62DB\u5F0F\u7684\u5A01\u529B\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandrush: {
    name: "\u64A5\u6C99",
    desc: "\u5929\u6C23\u70BA\u6C99\u66B4\u6642\uFF0C \u901F\u5EA6\u6703\u63D0\u9AD8\u3002",
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
    name: "\u63DA\u6C99",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandveil: {
    name: "\u6C99\u96B1",
    desc: "\u5728\u6C99\u66B4\u4E2D \u9583\u907F\u7387\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sapsipper: {
    name: "\u98DF\u8349",
    desc: "\u53D7\u5230\u8349\u5C6C\u6027\u7684\u62DB\u5F0F\u653B\u64CA\u6642\uFF0C \u4E0D\u4F46\u4E0D\u6703\u53D7\u5230\u50B7\u5BB3\uFF0C\u53CD\u800C\u653B\u64CA\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  schooling: {
    name: "\u9B5A\u7FA4",
    desc: "\uFF28\uFF30\u591A\u7684\u6642\u5019\u6703\u805A\u8D77\u4F86\u8B8A\u5F37\u3002 \uFF28\uFF30\u5269\u9918\u91CF\u8B8A\u5C11\u6642\uFF0C \u7FA4\u9AD4\u6703\u5206\u5D29\u96E2\u6790\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON]\u7684\u7FA4\u9AD4\u805A\u96C6\u8D77\u4F86\u4E86\uFF01",
    transformEnd: "[POKEMON]\u7684\u7FA4\u9AD4\u56DB\u6563\u800C\u53BB\u4E86\uFF01"
  },
  scrappy: {
    name: "\u81BD\u91CF",
    desc: "\u4E00\u822C\u5C6C\u6027\u548C\u683C\u9B25\u5C6C\u6027\u7684\u62DB\u5F0F \u53EF\u64CA\u4E2D\u5E7D\u9748\u5C6C\u6027\u7684\u5BF6\u53EF\u5922\u3002",
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
    name: "\u6389\u51FA\u7A2E\u5B50",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  serenegrace: {
    name: "\u5929\u6069",
    desc: "\u53D7\u5230\u4E0A\u5929\u4FDD\u4F51\uFF0C \u5BB9\u6613\u51FA\u73FE\u62DB\u5F0F\u7684\u8FFD\u52A0\u6548\u679C\u3002",
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
    desc: "\u8E29\u4F4F\u5C0D\u624B\u7684\u5F71\u5B50 \u4F7F\u5176\u7121\u6CD5\u9003\u8D70\u6216\u66FF\u63DB\u3002",
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
    name: "\u92D2\u92B3",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shedskin: {
    name: "\u86FB\u76AE",
    desc: "\u900F\u904E\u86FB\u53BB\u8EAB\u4E0A\u7684\u76AE\uFF0C \u6709\u6642\u6703\u6CBB\u7652\u7570\u5E38\u72C0\u614B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sheerforce: {
    name: "\u5F37\u884C",
    desc: "\u62DB\u5F0F\u6703\u5931\u53BB\u8FFD\u52A0\u6548\u679C\uFF0C \u4F46\u53EF\u4EE5\u7528\u66F4\u9AD8\u7684\u5A01\u529B\u4F7F\u51FA\u62DB\u5F0F\u3002",
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
    name: "\u786C\u6BBC\u76D4\u7532",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shielddust: {
    name: "\u9C57\u7C89",
    desc: "\u88AB\u9C57\u7C89\u5B88\u8B77\u8457\uFF0C \u4E0D\u6703\u53D7\u5230\u62DB\u5F0F\u7684\u8FFD\u52A0\u6548\u679C\u5F71\u97FF\u3002",
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
    name: "\u754C\u9650\u76FE\u6BBC",
    desc: "\uFF28\uFF30\u8B8A\u70BA\u4E00\u534A\u6642\uFF0C \u6BBC\u6703\u58DE\u6389\uFF0C\u8B8A\u5F97\u66F4\u6709\u653B\u64CA\u6027\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "\u754C\u9650\u76FE\u6BBC\uFF0C\u555F\u52D5\uFF01",
    transformEnd: "\u754C\u9650\u76FE\u6BBC\uFF0C\u89E3\u9664\uFF01"
  },
  simple: {
    name: "\u55AE\u7D14",
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
    name: "\u9023\u7E8C\u653B\u64CA",
    desc: "\u4F7F\u7528\u9023\u7E8C\u62DB\u5F0F\u6642\uFF0C \u6BCF\u56DE\u90FD\u80FD\u4EE5\u6700\u591A\u6B21\u6578\u9032\u884C\u653B\u64CA\u3002",
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
    name: "\u6162\u555F\u52D5",
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
    start: "  [POKEMON]\u7121\u6CD5\u62FF\u51FA\u5E73\u6642\u7684\u6C34\u6E96\uFF01",
    end: "  [POKEMON]\u6062\u5FA9\u4E86\u5E73\u6642\u7684\u6C34\u6E96\uFF01"
  },
  slushrush: {
    name: "\u64A5\u96EA",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sniper: {
    name: "\u72D9\u64CA\u624B",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  snowcloak: {
    name: "\u96EA\u96B1",
    desc: "\u5929\u6C23\u70BA\u51B0\u96F9\u6642\uFF0C \u9583\u907F\u7387\u6703\u63D0\u9AD8\u3002",
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
    name: "\u592A\u967D\u4E4B\u529B",
    desc: "\u5929\u6C23\u70BA\u6674\u6717\u6642\u7279\u653B\u6703\u63D0\u9AD8\uFF0C \u4F46\u6BCF\u56DE\u5408\uFF28\uFF30\u6703\u6E1B\u5C11\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solidrock: {
    name: "\u5805\u786C\u5CA9\u77F3",
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
    desc: "\u6BCF\u4E00\u56DE\u5408\u901F\u5EA6\u6703\u8B8A\u5FEB\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  spicyspray: {
    name: "\u8FA3\u6912\u5674\u767C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stakeout: {
    name: "\u76E3\u8996",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stall: {
    name: "\u6162\u51FA",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stalwart: {
    name: "\u5805\u6BC5",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stamina: {
    name: "\u6301\u4E45\u529B",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stancechange: {
    name: "\u6230\u9B25\u5207\u63DB",
    desc: "\u82E5\u4F7F\u51FA\u653B\u64CA\u62DB\u5F0F\uFF0C\u6703\u8B8A\u70BA\u5200\u528D\u5F62\u614B\uFF0C \u82E5\u4F7F\u51FA\u62DB\u5F0F\u300C\u738B\u8005\u76FE\u724C\u300D\uFF0C \u6703\u8B8A\u70BA\u76FE\u724C\u5F62\u614B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    transform: "\u5200\u528D\u5F62\u614B\uFF0C\u8B8A\u5F62\uFF01",
    transformEnd: "\u76FE\u724C\u5F62\u614B\uFF0C\u8B8A\u5F62\uFF01"
  },
  static: {
    name: "\u975C\u96FB",
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
    name: "\u84B8\u6C7D\u6A5F",
    desc: "\u53D7\u5230\u6C34\u5C6C\u6027\u6216 \u706B\u5C6C\u6027\u62DB\u5F0F\u653B\u64CA\u6642\uFF0C \u901F\u5EA6\u6703\u6975\u5927\u5E45\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelworker: {
    name: "\u92FC\u80FD\u529B\u8005",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelyspirit: {
    name: "\u92FC\u4E4B\u610F\u5FD7",
    desc: "\u6211\u65B9\u7684\u92FC\u5C6C\u6027 \u653B\u64CA\u5A01\u529B\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stench: {
    name: "\u60E1\u81ED",
    desc: "\u767C\u51FA\u81ED\u6C23\uFF0C \u5728\u653B\u64CA\u7684\u6642\u5019\uFF0C \u6709\u6642\u6703\u4F7F\u5C0D\u624B\u754F\u7E2E\u3002",
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
    name: "\u9ECF\u8457",
    desc: "\u9053\u5177\u6703\u9ECF\u5728 \u5177\u6709\u9ECF\u6027\u7684\u8EAB\u9AD4\u4E0A\uFF0C \u4E0D\u6703\u88AB\u5C0D\u624B\u596A\u8D70\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  \u7121\u6CD5\u596A\u53D6[POKEMON]\u7684\u9053\u5177\uFF01"
  },
  stormdrain: {
    name: "\u5F15\u6C34",
    desc: "\u5C07\u6C34\u5C6C\u6027\u7684\u62DB\u5F0F\u5F15\u5230\u81EA\u5DF1\u8EAB\u4E0A\uFF0C \u4E0D\u4F46\u4E0D\u6703\u53D7\u5230\u50B7\u5BB3\uFF0C \u53CD\u800C\u6703\u63D0\u9AD8\u7279\u653B\u3002",
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
    name: "\u5F37\u58EF\u4E4B\u984E",
    desc: "\u984E\u90E8\u5F37\u58EF\uFF0C \u6703\u63D0\u9AD8\u5543\u54AC\u985E\u62DB\u5F0F\u7684\u5A01\u529B\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sturdy: {
    name: "\u7D50\u5BE6",
    desc: "\u53D7\u5230\u5C0D\u624B\u7684\u62DB\u5F0F\u653B\u64CA\u6642 \u4E0D\u6703\u88AB\u4E00\u64CA\u6253\u5012\u3002 \u4E00\u64CA\u5FC5\u6BBA\u7684\u62DB\u5F0F\u4E5F\u6C92\u6709\u6548\u679C\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON]\u633A\u4F4F\u4E86\u653B\u64CA\uFF01"
  },
  suctioncups: {
    name: "\u5438\u76E4",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u7528\u5438\u76E4\u5438\u4F4F\u4E86\uFF01"
  },
  superluck: {
    name: "\u8D85\u5E78\u904B",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  supersweetsyrup: {
    name: "\u7518\u9732\u4E4B\u871C",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\u7684\u871C\u6563\u767C\u51FA\u751C\u751C\u7684\u6C23\u5473\uFF01"
  },
  supremeoverlord: {
    name: "\u5927\u5C07",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u5F9E\u88AB\u6253\u5012\u7684\u5925\u4F34\u90A3\u88E1\u5F97\u5230\u4E86\u529B\u91CF\uFF01"
  },
  surgesurfer: {
    name: "\u885D\u6D6A\u4E4B\u5C3E",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  swarm: {
    name: "\u87F2\u4E4B\u9810\u611F",
    desc: "\uFF28\uFF30\u6E1B\u5C11\u7684\u6642\u5019\uFF0C \u87F2\u5C6C\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u6703\u63D0\u9AD8\u3002",
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
    desc: "\u6211\u65B9\u7684\u5BF6\u53EF\u5922 \u4E0D\u6703\u9677\u5165\u7761\u7720\u72C0\u614B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u56E0\u751C\u5E55\u800C\u4E0D\u6703\u7761\u8457\uFF01"
  },
  swiftswim: {
    name: "\u60A0\u6E38\u81EA\u5982",
    desc: "\u5929\u6C23\u70BA\u4E0B\u96E8\u6642\uFF0C \u901F\u5EA6\u6703\u63D0\u9AD8\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  swordofruin: {
    name: "\u707D\u798D\u4E4B\u528D",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \u56E0\u70BA[POKEMON]\u7684\u707D\u798D\u4E4B\u528D\uFF0C\u5468\u570D\u7684\u9632\u79A6\u6E1B\u5F31\u4E86\uFF01"
  },
  symbiosis: {
    name: "\u5171\u751F",
    desc: "\u540C\u4F34\u4F7F\u7528\u9053\u5177\u6642\uFF0C \u6703\u628A\u81EA\u5DF1\u6301\u6709\u7684\u9053\u5177\u4EA4\u7D66\u540C\u4F34\u3002",
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
    activate: "  [POKEMON]\u5C07[ITEM]\u4EA4\u7D66\u4E86[TARGET]\uFF01"
  },
  synchronize: {
    name: "\u540C\u6B65",
    desc: "\u5C07\u81EA\u5DF1\u7684\u4E2D\u6BD2\u3001\u9EBB\u75FA\u6216 \u707C\u50B7\u72C0\u614B\u50B3\u67D3\u7D66\u5C0D\u624B\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  tabletsofruin: {
    name: "\u707D\u798D\u4E4B\u7C21",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \u56E0\u70BA[POKEMON]\u7684\u707D\u798D\u4E4B\u7C21\uFF0C\u5468\u570D\u7684\u653B\u64CA\u6E1B\u5F31\u4E86\uFF01"
  },
  tangledfeet: {
    name: "\u8E63\u8DDA",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  tanglinghair: {
    name: "\u6372\u9AEE",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  technician: {
    name: "\u6280\u8853\u9AD8\u624B",
    desc: "\u53EF\u8B93\u5A01\u529B\u4F4E\u7684\u62DB\u5F0F \u63D0\u9AD8\u5A01\u529B\u4F86\u9032\u884C\u653B\u64CA\u3002",
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
    name: "\u5FC3\u9748\u611F\u61C9",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON]\u4E0D\u6703\u53D7\u5230\u540C\u4F34\u7684\u653B\u64CA\uFF01"
  },
  teraformzero: {
    name: "\u6B78\u96F6\u5316\u5883",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  terashell: {
    name: "\u592A\u6676\u7532\u6BBC",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u8B93\u7532\u6BBC\u7DBB\u653E\u5149\u8F1D\uFF0C\u626D\u66F2\u4E86\u5C6C\u6027\u76F8\u524B\u95DC\u4FC2\uFF01\uFF01"
  },
  terashift: {
    name: "\u592A\u6676\u8B8A\u5F62",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON]\u7684\u6A23\u5B50\u767C\u751F\u4E86\u8B8A\u5316\uFF01"
  },
  teravolt: {
    name: "\u5146\u7D1A\u96FB\u58D3",
    desc: "\u53EF\u4EE5\u4E0D\u53D7\u5C0D\u624B\u7279\u6027\u7684\u5E72\u64FE\uFF0C \u5411\u5C0D\u624B\u4F7F\u51FA\u62DB\u5F0F\u3002",
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
    start: "  [POKEMON]\u91CB\u653E\u8457\u6FFA\u5C04\u6C23\u5834\uFF01"
  },
  thermalexchange: {
    name: "\u71B1\u4EA4\u63DB",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  thickfat: {
    name: "\u539A\u8102\u80AA",
    desc: "\u88AB\u539A\u539A\u7684\u8102\u80AA\u4FDD\u8B77\u8457\uFF0C \u80FD\u5920\u8B93\u706B\u5C6C\u6027\u548C\u51B0\u5C6C\u6027 \u62DB\u5F0F\u7684\u50B7\u5BB3\u6E1B\u534A\u3002",
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
    name: "\u6709\u8272\u773C\u93E1",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  torrent: {
    name: "\u6FC0\u6D41",
    desc: "\uFF28\uFF30\u6E1B\u5C11\u7684\u6642\u5019\uFF0C \u6C34\u5C6C\u6027\u7684\u62DB\u5F0F\u5A01\u529B\u6703\u63D0\u9AD8\u3002",
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
    desc: "\u9677\u5165\u4E2D\u6BD2\u72C0\u614B\u6642\uFF0C \u7269\u7406\u62DB\u5F0F\u7684\u5A01\u529B\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicchain: {
    name: "\u6BD2\u9396\u93C8",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicdebris: {
    name: "\u6BD2\u6EFF\u5730",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  trace: {
    name: "\u8907\u88FD",
    desc: "\u51FA\u5834\u6642\uFF0C\u8907\u88FD\u5C0D\u624B\u7684\u7279\u6027\uFF0C \u8B8A\u70BA\u8207\u4E4B\u76F8\u540C\u7684\u7279\u6027\u3002",
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
    changeAbility: "  \u8907\u88FD\u4E86[SOURCE]\u7684[ABILITY]\uFF01"
  },
  transistor: {
    name: "\u96FB\u6676\u9AD4",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  triage: {
    name: "\u5148\u884C\u6CBB\u7642",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  truant: {
    name: "\u61F6\u60F0",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    cant: "[POKEMON]\u6B63\u5728\u5077\u61F6\u3002"
  },
  turboblaze: {
    name: "\u6E26\u8F2A\u706B\u7130",
    desc: "\u53EF\u4EE5\u4E0D\u53D7\u5C0D\u624B\u7279\u6027\u7684\u5E72\u64FE\uFF0C \u5411\u5C0D\u624B\u4F7F\u51FA\u62DB\u5F0F\u3002",
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
    start: "  [POKEMON]\u91CB\u653E\u8457\u71BE\u7130\u6C23\u5834\uFF01"
  },
  unaware: {
    name: "\u7D14\u6A38",
    desc: "\u53EF\u7121\u8996\u5C0D\u624B\u80FD\u529B\u7684\u8B8A\u5316\uFF0C \u9032\u884C\u653B\u64CA\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unburden: {
    name: "\u8F15\u88DD",
    desc: "\u5931\u53BB\u6240\u6301\u6709\u7684\u9053\u5177\u6642\uFF0C \u901F\u5EA6\u6703\u63D0\u9AD8\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unnerve: {
    name: "\u7DCA\u5F35\u611F",
    desc: "\u8B93\u5C0D\u624B\u611F\u5230\u7DCA\u5F35\uFF0C \u7121\u6CD5\u5403\u6A39\u679C\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [TEAM]\u56E0\u592A\u7DCA\u5F35\u800C\u7121\u6CD5\u98DF\u7528\u6A39\u679C\uFF01"
  },
  unseenfist: {
    name: "\u7121\u5F62\u62F3",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    champions: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "\u707D\u798D\u4E4B\u9F0E",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \u56E0\u70BA[POKEMON]\u7684\u707D\u798D\u4E4B\u9F0E\uFF0C\u5468\u570D\u7684\u7279\u653B\u6E1B\u5F31\u4E86\uFF01"
  },
  victorystar: {
    name: "\u52DD\u5229\u4E4B\u661F",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  vitalspirit: {
    name: "\u5E79\u52C1",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  voltabsorb: {
    name: "\u84C4\u96FB",
    desc: "\u53D7\u5230\u96FB\u5C6C\u6027\u7684\u62DB\u5F0F\u653B\u64CA\u6642\uFF0C \u4E0D\u6703\u53D7\u5230\u50B7\u5BB3\uFF0C\u800C\u662F\u6703\u56DE\u5FA9\u3002",
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
    name: "\u904A\u9B42",
    desc: "\u8207\u4F7F\u7528\u63A5\u89F8\u985E\u62DB\u5F0F \u653B\u64CA\u81EA\u5DF1\u7684\u5BF6\u53EF\u5922\u4E92\u63DB\u7279\u6027\u3002",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "#skillswap"
  },
  waterabsorb: {
    name: "\u5132\u6C34",
    desc: "\u53D7\u5230\u6C34\u5C6C\u6027\u7684\u62DB\u5F0F\u653B\u64CA\u6642\uFF0C \u4E0D\u6703\u53D7\u5230\u50B7\u5BB3\uFF0C\u800C\u662F\u6703\u56DE\u5FA9\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterbubble: {
    name: "\u6C34\u6CE1",
    desc: "\u964D\u4F4E\u81EA\u5DF1\u53D7\u5230\u7684\u706B\u5C6C\u6027 \u62DB\u5F0F\u7684\u5A01\u529B\u3002\u4E0D\u6703\u707C\u50B7\u3002",
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
    name: "\u788E\u88C2\u93A7\u7532",
    desc: "\u56E0\u7269\u7406\u62DB\u5F0F\u53D7\u5230\u50B7\u5BB3\u6642\uFF0C \u9632\u79A6\u6703\u964D\u4F4E\uFF0C \u901F\u5EA6\u6703\u5927\u5E45\u63D0\u9AD8\u3002",
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
    name: "\u7126\u9999\u4E4B\u8EC0",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  whitesmoke: {
    name: "\u767D\u8272\u7159\u9727",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wimpout: {
    name: "\u8E8D\u8E8D\u6B32\u9003",
    desc: "\uFF28\uFF30\u8B8A\u70BA\u4E00\u534A\u6642\uFF0C \u6703\u614C\u614C\u5F35\u5F35\u9003\u8D70\uFF0C \u9000\u56DE\u540C\u884C\u968A\u4F0D\u88E1\u9762\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  windpower: {
    name: "\u98A8\u529B\u767C\u96FB",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#electromorphosis"
  },
  windrider: {
    name: "\u4E58\u98A8",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wonderguard: {
    name: "\u795E\u5947\u5B88\u8B77",
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
    name: "\u5947\u8DE1\u76AE\u819A",
    desc: "\u4E0D\u6613\u53D7\u5230\u8B8A\u5316\u985E\u62DB\u5F0F \u653B\u64CA\u7684\u8EAB\u9AD4\u3002",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  zenmode: {
    name: "\u9054\u6469\u6A21\u5F0F",
    desc: "\uFF28\uFF30\u8B8A\u70BA\u4E00\u534A\u4EE5\u4E0B\u6642\uFF0C \u6A23\u5B50\u6703\u6539\u8B8A\u3002",
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
    transform: "\u9054\u6469\u6A21\u5F0F\uFF0C\u555F\u52D5\uFF01",
    transformEnd: "\u9054\u6469\u6A21\u5F0F\uFF0C\u89E3\u9664\uFF01"
  },
  zerotohero: {
    name: "\u5168\u80FD\u8B8A\u8EAB",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\u5728\u8B8A\u8EAB\u4E4B\u5F8C\u56DE\u4F86\u4E86\uFF01"
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
