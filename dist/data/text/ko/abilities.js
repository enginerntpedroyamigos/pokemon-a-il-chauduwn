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
    name: "\uC801\uC751\uB825",
    desc: "\uC790\uC2E0\uACFC \uAC19\uC740 \uD0C0\uC785\uC758 \uAE30\uC220 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aerilate: {
    name: "\uC2A4\uCE74\uC774\uC2A4\uD0A8",
    desc: "\uB178\uB9D0\uD0C0\uC785\uC758 \uAE30\uC220\uC774 \uBE44\uD589\uD0C0\uC785\uC774 \uB41C\uB2E4. \uC704\uB825\uC774 \uC870\uAE08 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uC720\uD3ED",
    desc: "\uAE30\uC808\uD588\uC744 \uB54C \uC811\uCD09\uD55C \uC0C1\uB300\uC5D0\uAC8C \uB370\uBBF8\uC9C0\uB97C \uC900\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "  [POKEMON] \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!"
  },
  airlock: {
    name: "\uC5D0\uC5B4\uB85D",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \uB0A0\uC528\uC758 \uC601\uD5A5\uC774 \uC5C6\uC5B4\uC84C\uB2E4!"
  },
  analytic: {
    name: "\uC560\uB110\uB77C\uC774\uC988",
    desc: "\uC81C\uC77C \uB9C8\uC9C0\uB9C9\uC5D0 \uAE30\uC220\uC744 \uC4F0\uBA74 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  angerpoint: {
    name: "\uBD84\uB178\uC758\uACBD\uD608",
    desc: "\uAE09\uC18C\uC5D0 \uACF5\uACA9\uC774 \uB9DE\uC73C\uBA74 \uD06C\uAC8C \uBD84\uB178\uD574 \uACF5\uACA9\uB825\uC774 \uCD5C\uB300\uAC00 \uB41C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    boost: "  [POKEMON:topic] \uACF5\uACA9\uC774 \uCD5C\uACE0\uCE58\uAE4C\uC9C0 \uC62C\uB77C\uAC14\uB2E4!"
  },
  angershell: {
    name: "\uBD84\uB178\uC758\uAECD\uC9C8",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  anticipation: {
    name: "\uC704\uD5D8\uC608\uC9C0",
    desc: "\uC0C1\uB300\uAC00 \uC9C0\uB2CC \uC704\uD5D8\uD55C \uAE30\uC220\uC744 \uAC10\uC9C0\uD560 \uC218 \uC788\uB2E4.",
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
    activate: "  [POKEMON:topic] \uBAB8\uC744 \uB5A8\uC5C8\uB2E4!"
  },
  arenatrap: {
    name: "\uAC1C\uBBF8\uC9C0\uC625",
    desc: "\uBC30\uD2C0\uC5D0\uC11C \uC0C1\uB300\uB97C \uB3C4\uB9DD\uCE60 \uC218 \uC5C6\uAC8C \uD55C\uB2E4.",
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
    name: "\uD14C\uC77C\uC544\uBA38",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  aromaveil: {
    name: "\uC544\uB85C\uB9C8\uBCA0\uC77C",
    desc: "\uC790\uC2E0\uACFC \uAC19\uC740 \uD3B8\uC73C\uB85C \uD5A5\uD558\uB294 \uBA58\uD0C8 \uACF5\uACA9\uC744 \uB9C9\uC744 \uC218 \uC788\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON:object] \uC544\uB85C\uB9C8\uBCA0\uC77C\uC774 \uC9C0\uCF1C \uC8FC\uACE0 \uC788\uB2E4!"
  },
  asone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON:topic] \uB450 \uAC00\uC9C0 \uD2B9\uC131\uC744 \uACB8\uBE44\uD55C\uB2E4!"
  },
  asoneglastrier: {
    name: "\uD63C\uC5F0\uC77C\uCCB4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  asonespectrier: {
    name: "\uD63C\uC5F0\uC77C\uCCB4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aurabreak: {
    name: "\uC624\uB77C\uBE0C\uB808\uC774\uD06C",
    desc: "\uC624\uB77C\uC758 \uD6A8\uACFC\uB97C \uC5ED\uC804\uC2DC\uCF1C \uC704\uB825\uC744 \uB5A8\uC5B4\uB728\uB9B0\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON:topic] \uBAA8\uB4E0 \uC624\uB77C\uB97C \uC81C\uC555\uD55C\uB2E4!"
  },
  baddreams: {
    name: "\uB098\uC774\uD2B8\uBA54\uC5B4",
    desc: "\uC7A0\uB4E6 \uC0C1\uD0DC\uC758 \uC0C1\uB300\uC5D0\uAC8C \uB370\uBBF8\uC9C0\uB97C \uC900\uB2E4.",
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
    damage: "  [POKEMON:topic] \uB098\uC774\uD2B8\uBA54\uC5B4\uC5D0 \uC2DC\uB2EC\uB9AC\uACE0 \uC788\uB2E4!"
  },
  ballfetch: {
    name: "\uBCFC\uC90D\uAE30",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battery: {
    name: "\uBC30\uD130\uB9AC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlearmor: {
    name: "\uC804\uD22C\uBB34\uC7A5",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlebond: {
    name: "\uC720\uB300\uBCC0\uD654",
    desc: "\uC0C1\uB300\uB97C \uC4F0\uB7EC\uB728\uB9AC\uBA74 \uD2B8\uB808\uC774\uB108\uC640\uC758 \uC720\uB300\uAC10\uC774 \uAE4A\uC5B4\uC838\uC11C \uC9C0\uC6B0\uAC1C\uAD74\uB2CC\uC790\uB85C \uBCC0\uD55C\uB2E4. \uBB3C\uC218\uB9AC\uAC80\uC774 \uAC15\uD574\uC9C4\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON:directional]\uB85C\uBD80\uD130 \uC720\uB300\uC758 \uD798\uC774 \uB118\uCCD0\uD750\uB978\uB2E4!",
    transform: "[POKEMON:topic] \uC9C0\uC6B0\uAC1C\uAD74\uB2CC\uC790\uB85C \uBCC0\uD588\uB2E4!"
  },
  beadsofruin: {
    name: "\uC7AC\uC559\uC758\uAD6C\uC2AC",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\uC758 \uC7AC\uC559\uC758\uAD6C\uC2AC\uC5D0 \uC758\uD574 \uC8FC\uC704\uC758 \uD2B9\uC218\uBC29\uC5B4\uAC00 \uC57D\uD574\uC84C\uB2E4!"
  },
  beastboost: {
    name: "\uBE44\uC2A4\uD2B8\uBD80\uC2A4\uD2B8",
    desc: "\uC0C1\uB300\uB97C \uAE30\uC808\uC2DC\uCF30\uC744 \uB54C \uC790\uC2E0\uC758 \uAC00\uC7A5 \uB192\uC740 \uB2A5\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  berserk: {
    name: "\uBC1C\uB048",
    desc: "\uC0C1\uB300\uC758 \uACF5\uACA9\uC73C\uB85C HP\uAC00 \uC808\uBC18\uC774 \uB418\uBA74 \uD2B9\uC218\uACF5\uACA9\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  bigpecks: {
    name: "\uBD80\uD480\uB9B0\uAC00\uC2B4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  blaze: {
    name: "\uB9F9\uD654",
    desc: "HP\uAC00 \uC904\uC5C8\uC744 \uB54C \uBD88\uAF43\uD0C0\uC785 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uBC29\uD0C4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cheekpouch: {
    name: "\uBCFC\uC8FC\uBA38\uB2C8",
    desc: "\uC5B4\uB5A4 \uB098\uBB34\uC5F4\uB9E4\uB77C\uB3C4 \uBA39\uC73C\uBA74 HP\uB3C4 \uD68C\uBCF5\uD55C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  chillingneigh: {
    name: "\uBC31\uC758\uC6B8\uC74C",
    desc: "\uC0C1\uB300\uB97C \uC4F0\uB7EC\uB728\uB9AC\uBA74 \uCC28\uAC00\uC6B4 \uC6B8\uC74C\uC18C\uB9AC\uB97C \uB0B4\uBA74\uC11C \uACF5\uACA9\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  chlorophyll: {
    name: "\uC5FD\uB85D\uC18C",
    desc: "\uB0A0\uC528\uAC00 \uB9D1\uC744 \uB54C \uC2A4\uD53C\uB4DC\uAC00 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  clearbody: {
    name: "\uD074\uB9AC\uC5B4\uBC14\uB514",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cloudnine: {
    name: "\uB0A0\uC528\uBD80\uC815",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#airlock"
  },
  colorchange: {
    name: "\uBCC0\uC0C9",
    desc: "\uC0C1\uB300\uC5D0\uAC8C \uBC1B\uC740 \uAE30\uC220\uC758 \uD0C0\uC785\uC73C\uB85C \uC790\uC2E0\uC758 \uD0C0\uC785\uC774 \uBCC0\uD654\uD55C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  comatose: {
    name: "\uC808\uB300\uC548\uAE78",
    desc: "\uD56D\uC0C1 \uBE44\uBABD\uC0AC\uBABD \uC0C1\uD0DC\uB85C \uC808\uB300 \uAE68\uC9C0 \uC54A\uB294\uB2E4. \uC7A0\uB4E0 \uC0C1\uD0DC\uB85C \uACF5\uACA9\uD560 \uC218 \uC788\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON:topic] \uBE44\uBABD\uC0AC\uBABD \uC0C1\uD0DC!"
  },
  commander: {
    name: "\uC0AC\uB839\uD0D1",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON:topic] \uC0AC\uB839\uD0D1\uC774 \uB418\uC5B4 [TARGET]\uC5D0\uAC8C \uC0BC\uCF1C\uC84C\uB2E4!"
  },
  competitive: {
    name: "\uC2B9\uAE30",
    desc: "\uB2A5\uB825\uC774 \uB5A8\uC5B4\uC9C0\uBA74 \uD2B9\uC218\uACF5\uACA9\uC774 \uD06C\uAC8C \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  compoundeyes: {
    name: "\uBCF5\uC548",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  contrary: {
    name: "\uC2EC\uC220\uAFB8\uB7EC\uAE30",
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
    name: "\uBD80\uC2DD",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  costar: {
    name: "\uD611\uC5F0",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cottondown: {
    name: "\uC19C\uD138",
    desc: "\uACF5\uACA9\uC744 \uBC1B\uC73C\uBA74 \uC19C\uD138\uC744 \uD769\uBFCC\uB824\uC11C \uC790\uC2E0\uC744 \uC81C\uC678\uD55C \uBAA8\uB4E0 \uD3EC\uCF13\uBAAC\uC758 \uC2A4\uD53C\uB4DC\uB97C \uB5A8\uC5B4\uB728\uB9B0\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cudchew: {
    name: "\uB418\uC0C8\uAE40\uC9C8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  curiousmedicine: {
    name: "\uAE30\uBB18\uD55C\uC57D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cursedbody: {
    name: "\uC800\uC8FC\uBC1B\uC740\uBC14\uB514",
    desc: "\uACF5\uACA9\uC744 \uBC1B\uC73C\uBA74 \uC0C1\uB300\uC758 \uAE30\uC220\uC744 \uC0AC\uC2AC\uBB36\uAE30 \uC0C1\uD0DC\uB85C \uB9CC\uB4E4 \uB54C\uAC00 \uC788\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cutecharm: {
    name: "\uD5E4\uB871\uD5E4\uB871\uBC14\uB514",
    desc: "\uC790\uC2E0\uACFC \uC811\uCD09\uD55C \uC0C1\uB300\uB97C \uD5E4\uB871\uD5E4\uB871 \uC0C1\uD0DC\uB85C \uB9CC\uB4E4 \uB54C\uAC00 \uC788\uB2E4.",
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
    name: "\uC2B5\uAE30",
    desc: "\uC8FC\uBCC0\uC744 \uC2B5\uD558\uAC8C \uD568\uC73C\uB85C\uC368 \uC790\uD3ED \uB4F1 \uD3ED\uBC1C\uD558\uB294 \uAE30\uC220\uC744 \uC544\uBB34\uB3C4 \uBABB \uC4F0\uAC8C \uD55C\uB2E4.",
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
    block: "  [SOURCE:topic] [MOVE:object] \uC4F8 \uC218 \uC5C6\uB2E4!"
  },
  dancer: {
    name: "\uBB34\uD76C",
    desc: "\uB204\uAD70\uAC00 \uCDA4 \uAE30\uC220\uC744 \uC4F0\uBA74 \uC790\uC2E0\uB3C4 \uC774\uC5B4\uC11C \uCDA4 \uAE30\uC220\uC744 \uC4F8 \uC218 \uC788\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  darkaura: {
    name: "\uB2E4\uD06C\uC624\uB77C",
    desc: "\uC804\uC6D0\uC758 \uC545\uD0C0\uC785 \uAE30\uC220\uC774 \uAC15\uD574\uC9C4\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON:topic] \uB2E4\uD06C\uC624\uB77C\uB97C \uBC1C\uC0B0\uD558\uACE0 \uC788\uB2E4!"
  },
  dauntlessshield: {
    name: "\uBD88\uAD74\uC758\uBC29\uD328",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  dazzling: {
    name: "\uBE44\uBE44\uB4DC\uBC14\uB514",
    desc: "\uC0C1\uB300\uB97C \uB180\uB77C\uAC8C \uD574\uC11C \uC774\uCABD\uC744 \uD5A5\uD55C \uC120\uC81C \uAE30\uC220\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uAC8C \uD55C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  defeatist: {
    name: "\uBB34\uAE30\uB825",
    desc: "HP\uAC00 \uC808\uBC18\uC774 \uB418\uBA74 \uBB34\uAE30\uB825\uD574\uC838\uC11C \uACF5\uACA9\uACFC \uD2B9\uC218\uACF5\uACA9\uC774 \uBC18\uAC10\uB41C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  defiant: {
    name: "\uC624\uAE30",
    desc: "\uB2A5\uB825\uC774 \uB5A8\uC5B4\uC9C0\uBA74 \uACF5\uACA9\uC774 \uD06C\uAC8C \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  deltastream: {
    name: "\uB378\uD0C0\uC2A4\uD2B8\uB9BC",
    desc: "\uBE44\uD589\uD0C0\uC785\uC758 \uC57D\uC810\uC774 \uC5C6\uC5B4\uC9C0\uB294 \uB0A0\uC528\uB85C \uB9CC\uB4E0\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  desolateland: {
    name: "\uB05D\uC758\uB300\uC9C0",
    desc: "\uBB3C\uD0C0\uC785\uC758 \uACF5\uACA9\uC744 \uBC1B\uC9C0 \uC54A\uB294 \uB0A0\uC528\uB85C \uB9CC\uB4E0\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  disguise: {
    name: "\uD0C8",
    desc: "\uBAB8\uC744 \uB36E\uB294 \uD0C8\uB85C 1\uBC88 \uACF5\uACA9\uC744 \uB9C9\uC744 \uC218 \uC788\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  \uD0C8\uC774 \uB300\uD0C0\uAC00 \uB418\uC5C8\uB2E4!",
    transform: "[POKEMON]\uC758 \uC815\uCCB4\uAC00 \uB4DC\uB7EC\uB0AC\uB2E4!"
  },
  download: {
    name: "\uB2E4\uC6B4\uB85C\uB4DC",
    desc: "\uC0C1\uB300\uC758 \uBC29\uC5B4\uC640 \uD2B9\uC218\uBC29\uC5B4\uB97C \uBE44\uAD50\uD574\uC11C \uB0AE\uC740 \uCABD \uB2A5\uB825\uC5D0 \uB9DE\uCDB0\uC11C \uC790\uC2E0\uC758 \uACF5\uACA9\uC774\uB098 \uD2B9\uC218\uACF5\uACA9\uC744 \uC62C\uB9B0\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonize: {
    name: "\uB4DC\uB798\uACE4\uC2A4\uD0A8",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonsmaw: {
    name: "\uC6A9\uC758\uD131",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drizzle: {
    name: "\uC794\uBE44",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drought: {
    name: "\uAC00\uBB44",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dryskin: {
    name: "\uAC74\uC870\uD53C\uBD80",
    desc: "\uBE44\uAC00 \uC624\uB294 \uB0A0\uC528\uB098 \uBB3C\uD0C0\uC785\uC758 \uAE30\uC220\uB85C HP\uAC00 \uD68C\uBCF5\uB418\uACE0 \uB9D1\uC744 \uB54C\uB098 \uBD88\uAF43\uD0C0\uC785\uC758 \uAE30\uC220\uB85C\uB294 \uC904\uC5B4\uB4E0\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  ([POKEMON:topic] \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!)"
  },
  earlybird: {
    name: "\uC77C\uCC0D\uAE30\uC0C1",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  eartheater: {
    name: "\uD759\uBA39\uAE30",
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
    name: "\uD3EC\uC790",
    desc: "\uACF5\uACA9\uC73C\uB85C \uC790\uC2E0\uC5D0\uAC8C \uC811\uCD09\uD55C \uC0C1\uB300\uB97C \uB3C5\uC774\uB098 \uB9C8\uBE44, \uC7A0\uB4E6 \uC0C1\uD0DC\uB85C \uB9CC\uB4E4 \uB54C\uAC00 \uC788\uB2E4.",
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
    name: "\uC77C\uB809\uD2B8\uB9AD\uBA54\uC774\uCEE4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  electromorphosis: {
    name: "\uC804\uAE30\uB85C\uBC14\uAFB8\uAE30",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON:topic] [MOVE]\uC5D0 \uB9DE\uC544 \uCDA9\uC804\uB418\uC5C8\uB2E4!"
  },
  embodyaspectcornerstone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON:topic] \uC8FC\uCDA7\uB3CC\uC758\uAC00\uBA74\uC744 \uBE5B\uB098\uAC8C \uD558\uC5EC \uBC29\uC5B4\uAC00 \uC62C\uB77C\uAC14\uB2E4!"
  },
  embodyaspecthearthflame: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON:topic] \uD654\uB355\uC758\uAC00\uBA74\uC744 \uBE5B\uB098\uAC8C \uD558\uC5EC \uACF5\uACA9\uC774 \uC62C\uB77C\uAC14\uB2E4!"
  },
  embodyaspectteal: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON:topic] \uBCBD\uB85D\uC758\uAC00\uBA74\uC744 \uBE5B\uB098\uAC8C \uD558\uC5EC \uC2A4\uD53C\uB4DC\uAC00 \uC62C\uB77C\uAC14\uB2E4!"
  },
  embodyaspectwellspring: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON:topic] \uC6B0\uBB3C\uC758\uAC00\uBA74\uC744 \uBE5B\uB098\uAC8C \uD558\uC5EC \uD2B9\uC218\uBC29\uC5B4\uAC00 \uC62C\uB77C\uAC14\uB2E4!"
  },
  emergencyexit: {
    name: "\uC704\uAE30\uD68C\uD53C",
    desc: "HP\uAC00 \uC808\uBC18\uC774 \uB418\uBA74 \uC704\uD5D8\uC744 \uD68C\uD53C\uD558\uAE30 \uC704\uD574 \uC9C0\uB2CC \uD3EC\uCF13\uBAAC\uC73C\uB85C \uB3CC\uC544\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  fairyaura: {
    name: "\uD398\uC5B4\uB9AC\uC624\uB77C",
    desc: "\uC804\uC6D0\uC758 \uD398\uC5B4\uB9AC\uD0C0\uC785 \uAE30\uC220\uC774 \uAC15\uD574\uC9C4\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON:topic] \uD398\uC5B4\uB9AC\uC624\uB77C\uB97C \uBC1C\uC0B0\uD558\uACE0 \uC788\uB2E4!"
  },
  filter: {
    name: "\uD544\uD130",
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
    name: "\uBD88\uAF43\uBAB8",
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
    name: "\uC5F4\uD3ED\uC8FC",
    desc: "\uD654\uC0C1 \uC0C1\uD0DC\uAC00 \uB418\uC5C8\uC744 \uB54C \uD2B9\uC218 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  flashfire: {
    name: "\uD0C0\uC624\uB974\uB294\uBD88\uAF43",
    desc: "\uBD88\uAF43\uD0C0\uC785\uC758 \uAE30\uC220\uC744 \uBC1B\uC73C\uBA74 \uBD88\uAF43\uC744 \uBC1B\uC544\uC11C \uC790\uC2E0\uC774 \uC0AC\uC6A9\uD558\uB294 \uBD88\uAF43\uD0C0\uC785\uC758 \uAE30\uC220\uC774 \uAC15\uD574\uC9C4\uB2E4.",
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
    start: "  [POKEMON:topic] \uBD88\uAF43\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC14\uB2E4!"
  },
  flowergift: {
    name: "\uD50C\uB77C\uC6CC\uAE30\uD504\uD2B8",
    desc: "\uB0A0\uC528\uAC00 \uB9D1\uC744 \uB54C \uC790\uC2E0\uACFC \uAC19\uC740 \uD3B8\uC758 \uACF5\uACA9\uACFC \uD2B9\uC218\uBC29\uC5B4\uC758 \uB2A5\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uD50C\uB77C\uC6CC\uBCA0\uC77C",
    desc: "\uAC19\uC740 \uD3B8\uC758 \uD480\uD0C0\uC785 \uD3EC\uCF13\uBAAC\uC740 \uB2A5\uB825\uC774 \uB5A8\uC5B4\uC9C0\uC9C0 \uC54A\uACE0 \uC0C1\uD0DC \uC774\uC0C1\uB3C4 \uB418\uC9C0 \uC54A\uB294\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON:object] \uD50C\uB77C\uC6CC\uBCA0\uC77C\uC774 \uC9C0\uCF1C \uC8FC\uACE0 \uC788\uB2E4!"
  },
  fluffy: {
    name: "\uBCF5\uC2AC\uBCF5\uC2AC",
    desc: "\uC0C1\uB300\uB85C\uBD80\uD130 \uBC1B\uC740 \uC811\uCD09\uD558\uB294 \uAE30\uC220\uC758 \uB370\uBBF8\uC9C0\uB97C \uBC18\uAC10\uC2DC\uD0A4\uC9C0\uB9CC \uBD88\uAF43\uD0C0\uC785 \uAE30\uC220\uC758 \uB370\uBBF8\uC9C0\uB294 2\uBC30\uAC00 \uB41C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  forecast: {
    name: "\uAE30\uBD84\uD30C",
    desc: "\uB0A0\uC528\uC758 \uC601\uD5A5\uC744 \uBC1B\uC544 \uBB3C\uD0C0\uC785, \uBD88\uAF43\uD0C0\uC785, \uC5BC\uC74C\uD0C0\uC785 \uC911 \uD558\uB098\uB85C \uBCC0\uD654\uD55C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  forewarn: {
    name: "\uC608\uC9C0\uBABD",
    desc: "\uB4F1\uC7A5\uD588\uC744 \uB54C \uC0C1\uB300\uAC00 \uC9C0\uB2CC \uAE30\uC220\uC744 \uD558\uB098\uB9CC \uAFF0\uB6AB\uC5B4\uBCF8\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [TARGET]\uC758 [MOVE:object] \uAC04\uD30C\uD588\uB2E4!",
    activateNoTarget: "  [POKEMON] \uC608\uC9C0\uBABD\uC73C\uB85C [MOVE] \uAC04\uD30C\uD588\uB2E4!"
  },
  friendguard: {
    name: "\uD504\uB80C\uB4DC\uAC00\uB4DC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  frisk: {
    name: "\uD1B5\uCC30",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON:topic] [TARGET]\uC758 [ITEM:object] \uD1B5\uCC30\uD588\uB2E4!",
    activateNoTarget: "  [POKEMON:topic] [ITEM:object] \uD1B5\uCC30\uD588\uB2E4!"
  },
  fullmetalbody: {
    name: "\uBA54\uD0C8\uD504\uB85C\uD14D\uD2B8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  furcoat: {
    name: "\uD37C\uCF54\uD2B8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  galewings: {
    name: "\uC9C8\uD48D\uB0A0\uAC1C",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  galvanize: {
    name: "\uC77C\uB809\uD2B8\uB9AD\uC2A4\uD0A8",
    desc: "\uB178\uB9D0\uD0C0\uC785 \uAE30\uC220\uC774 \uC804\uAE30\uD0C0\uC785\uC774 \uB41C\uB2E4. \uC704\uB825\uC774 \uC870\uAE08 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gluttony: {
    name: "\uBA39\uBCF4",
    desc: "HP\uAC00 \uC904\uC5B4\uB4E4\uBA74 \uBA39\uC744 \uB098\uBB34\uC5F4\uB9E4\uB97C HP\uAC00 \uC808\uBC18\uC77C \uB54C \uBA39\uC5B4\uBC84\uB9B0\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  goodasgold: {
    name: "\uD669\uAE08\uBAB8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gooey: {
    name: "\uBBF8\uB048\uBBF8\uB048",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gorillatactics: {
    name: "\uBB34\uC544\uC9C0\uACBD",
    desc: "\uACF5\uACA9\uC774 \uC62C\uB77C\uAC00\uC9C0\uB9CC \uCC98\uC74C\uC5D0 \uC120\uD0DD\uD55C \uAE30\uC220 \uC678\uC5D0\uB294 \uC4F8 \uC218 \uC5C6\uAC8C \uB41C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grasspelt: {
    name: "\uD480\uBAA8\uD53C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grassysurge: {
    name: "\uADF8\uB798\uC2A4\uBA54\uC774\uCEE4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grimneigh: {
    name: "\uD751\uC758\uC6B8\uC74C",
    desc: "\uC0C1\uB300\uB97C \uC4F0\uB7EC\uB728\uB9AC\uBA74 \uBB34\uC11C\uC6B4 \uC6B8\uC74C\uC18C\uB9AC\uB97C \uB0B4\uBA74\uC11C \uD2B9\uC218\uACF5\uACA9\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guarddog: {
    name: "\uD30C\uC218\uACAC",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gulpmissile: {
    name: "\uADF8\uB300\uB85C\uAFC0\uAEBD\uBBF8\uC0AC\uC77C",
    desc: "\uD30C\uB3C4\uD0C0\uAE30\uB098 \uB2E4\uC774\uBE59\uC744 \uC4F0\uBA74 \uBA39\uC774\uB97C \uBB3C\uC5B4\uC628\uB2E4. \uB370\uBBF8\uC9C0\uB97C \uBC1B\uC73C\uBA74 \uBA39\uC774\uB97C \uD1A0\uD574\uB0B4\uC11C \uACF5\uACA9\uD55C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guts: {
    name: "\uADFC\uC131",
    desc: "\uC0C1\uD0DC \uC774\uC0C1\uC774 \uB418\uBA74 \uADFC\uC131\uC744 \uBCF4\uC5EC\uC11C \uACF5\uACA9\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hadronengine: {
    name: "\uD558\uB4DC\uB860\uC5D4\uC9C4",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON:topic] \uC77C\uB809\uD2B8\uB9AD\uD544\uB4DC\uB97C \uC804\uAC1C\uD558\uC5EC \uBBF8\uB798 \uAE30\uAD00\uC744 \uAC00\uB3D9\uD588\uB2E4!!",
    activate: "  [POKEMON:topic] \uC77C\uB809\uD2B8\uB9AD\uD544\uB4DC\uC758 \uD798\uC73C\uB85C \uBBF8\uB798 \uAE30\uAD00\uC744 \uAC00\uB3D9\uD588\uB2E4!!"
  },
  harvest: {
    name: "\uC218\uD655",
    desc: "\uC0AC\uC6A9\uD55C \uB098\uBB34\uC5F4\uB9E4\uB97C \uBA87 \uBC88\uC774\uACE0 \uB9CC\uB4E4\uC5B4 \uB0B8\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    addItem: "  [POKEMON:topic] [ITEM:object] \uC218\uD655\uD588\uB2E4!"
  },
  healer: {
    name: "\uCE58\uC720\uC758\uB9C8\uC74C",
    desc: "\uAC19\uC740 \uD3B8\uC758 \uC0C1\uD0DC \uC774\uC0C1\uC744 \uAC00\uB054 \uD68C\uBCF5\uC2DC\uD0A8\uB2E4.",
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
    name: "\uB0B4\uC5F4",
    desc: "\uB0B4\uC5F4\uC778 \uBAB8\uC73C\uB85C \uC778\uD574 \uBD88\uAF43\uD0C0\uC785 \uACF5\uACA9\uC758 \uB370\uBBF8\uC9C0\uB97C \uBC18\uAC10\uD55C\uB2E4.",
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
    name: "\uD5E4\uBE44\uBA54\uD0C8",
    desc: "\uC790\uC2E0\uC758 \uBB34\uAC8C\uAC00 2\uBC30\uAC00 \uB41C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  honeygather: {
    name: "\uAFC0\uBAA8\uC73C\uAE30",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hospitality: {
    name: "\uB300\uC811",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    heal: "  [SOURCE:subject] \uB0B4\uC628 \uCC28\uB97C [POKEMON:subject] \uBAA8\uB450 \uBE44\uC6E0\uB2E4!"
  },
  hugepower: {
    name: "\uCC9C\uD558\uC7A5\uC0AC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hungerswitch: {
    name: "\uAF2C\uB974\uB975\uC2A4\uC704\uCE58",
    desc: "\uD134\uC774 \uB05D\uB0A0 \uB54C\uB9C8\uB2E4 \uBC30\uBD80\uB978 \uBAA8\uC591, \uBC30\uACE0\uD508 \uBAA8\uC591, \uBC30\uBD80\uB978 \uBAA8\uC591...\uC73C\uB85C \uBC88\uAC08\uC544\uC11C \uBAA8\uC2B5\uC744 \uBC14\uAFBC\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hustle: {
    name: "\uC758\uC695",
    desc: "\uC790\uC2E0\uC758 \uACF5\uACA9\uC774 \uB192\uC544\uC9C0\uC9C0\uB9CC \uBA85\uC911\uB960\uC774 \uB5A8\uC5B4\uC9C4\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hydration: {
    name: "\uCD09\uCD09\uBC14\uB514",
    desc: "\uBE44\uAC00 \uC624\uB294 \uB0A0\uC528\uC77C \uB54C \uC0C1\uD0DC \uC774\uC0C1\uC774 \uD68C\uBCF5\uB41C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  hypercutter: {
    name: "\uAD34\uB825\uC9D1\uAC8C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  icebody: {
    name: "\uC544\uC774\uC2A4\uBC14\uB514",
    desc: "\uB0A0\uC528\uAC00 \uC2F8\uB77C\uAE30\uB208\uC77C \uB54C HP\uB97C \uC870\uAE08\uC529 \uD68C\uBCF5\uD55C\uB2E4.",
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
    name: "\uC544\uC774\uC2A4\uD398\uC774\uC2A4",
    desc: "\uBB3C\uB9AC\uACF5\uACA9\uC744 \uBA38\uB9AC\uC758 \uC5BC\uC74C\uC774 \uB300\uC2E0 \uB9DE\uC544\uC8FC\uC9C0\uB9CC \uBAA8\uC2B5\uB3C4 \uBC14\uB010\uB2E4. \uC5BC\uC74C\uC740 \uC2F8\uB77C\uAE30\uB208\uC774 \uB0B4\uB9AC\uBA74 \uC6D0\uB798\uB300\uB85C \uB3CC\uC544\uC628\uB2E4.",
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
    name: "\uC5BC\uC74C\uC778\uBD84",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  illuminate: {
    name: "\uBC1C\uAD11",
    desc: "\uC8FC\uBCC0\uC744 \uBC1D\uAC8C \uD558\uB294 \uAC83\uC73C\uB85C \uC57C\uC0DD \uD3EC\uCF13\uBAAC\uACFC \uB9CC\uB098\uAE30 \uC26C\uC6CC\uC9C4\uB2E4.",
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
    name: "\uC77C\uB8E8\uC804",
    desc: "\uC9C0\uB2CC \uD3EC\uCF13\uBAAC \uC911 \uC81C\uC77C \uB4A4\uC5D0 \uC788\uB294 \uD3EC\uCF13\uBAAC\uC73C\uB85C \uB454\uAC11\uD558\uC5EC \uB098\uC640\uC11C \uC0C1\uB300\uB97C \uC18D\uC778\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    end: "  [POKEMON]\uC758 \uC77C\uB8E8\uC804\uC774 \uD480\uB838\uB2E4!"
  },
  immunity: {
    name: "\uBA74\uC5ED",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  imposter: {
    name: "\uAD34\uC9DC",
    desc: "\uB208\uC55E\uC758 \uD3EC\uCF13\uBAAC\uC73C\uB85C \uBCC0\uC2E0\uD574\uBC84\uB9B0\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  infiltrator: {
    name: "\uD2C8\uC0C8\uD3EC\uCC29",
    desc: "\uC0C1\uB300\uC758 \uBCBD\uC774\uB098 \uB300\uD0C0\uCD9C\uB3D9\uC744 \uB6AB\uACE0 \uACF5\uACA9\uD560 \uC218 \uC788\uB2E4.",
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
    name: "\uB0B4\uC6A9\uBB3C\uBD84\uCD9C",
    desc: "\uC0C1\uB300\uAC00 \uC4F0\uB7EC\uB728\uB838\uC744 \uB54C HP\uC758 \uB0A8\uC740 \uC591\uB9CC\uD07C \uC0C1\uB300\uC5D0\uAC8C \uB370\uBBF8\uC9C0\uB97C \uC900\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#aftermath"
  },
  innerfocus: {
    name: "\uC815\uC2E0\uB825",
    desc: "\uB2E8\uB828\uD55C \uC815\uC2E0\uC73C\uB85C \uC778\uD558\uC5EC \uC0C1\uB300\uC758 \uACF5\uACA9\uC5D0 \uD480\uC8FD\uC9C0 \uC54A\uB294\uB2E4.",
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
    name: "\uBD88\uBA74",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  intimidate: {
    name: "\uC704\uD611",
    desc: "\uB4F1\uC7A5\uD588\uC744 \uB54C \uC704\uD611\uD574\uC11C \uC0C1\uB300\uB97C \uC704\uCD95\uC2DC\uCF1C \uC0C1\uB300\uC758 \uACF5\uACA9\uC744 \uB5A8\uC5B4\uB728\uB9B0\uB2E4.",
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
    name: "\uBD88\uC694\uC758\uAC80",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  ironbarbs: {
    name: "\uCCA0\uAC00\uC2DC",
    desc: "\uC790\uC2E0\uACFC \uC811\uCD09\uD55C \uC0C1\uB300\uC5D0\uAC8C \uCCA0\uAC00\uC2DC\uB85C \uB370\uBBF8\uC9C0\uB97C \uC900\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#roughskin"
  },
  ironfist: {
    name: "\uCCA0\uC8FC\uBA39",
    desc: "\uD380\uCE58\uB97C \uC0AC\uC6A9\uD558\uB294 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  justified: {
    name: "\uC815\uC758\uC758\uB9C8\uC74C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  keeneye: {
    name: "\uB0A0\uCE74\uB85C\uC6B4\uB208",
    desc: "\uB0A0\uCE74\uB85C\uC6B4 \uB208 \uB355\uBD84\uC5D0 \uBA85\uC911\uB960\uC774 \uB5A8\uC5B4\uC9C0\uC9C0 \uC54A\uB294\uB2E4.",
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
    name: "\uC11C\uD22C\uB984",
    desc: "\uC9C0\uB2C8\uACE0 \uC788\uB294 \uB3C4\uAD6C\uB97C \uC4F8 \uC218 \uC5C6\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  leafguard: {
    name: "\uB9AC\uD504\uAC00\uB4DC",
    desc: "\uB0A0\uC528\uAC00 \uB9D1\uC744 \uB54C\uB294 \uC0C1\uD0DC \uC774\uC0C1\uC774 \uB418\uC9C0 \uC54A\uB294\uB2E4.",
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
    name: "\uBD80\uC720",
    desc: "\uB545\uC5D0\uC11C \uB728\uB294 \uAC83\uC73C\uB85C \uB545\uD0C0\uC785\uC758 \uAE30\uC220\uC744 \uBC1B\uC9C0 \uC54A\uB294\uB2E4.",
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
    name: "\uB9AC\uBCA0\uB85C",
    desc: "\uC790\uC2E0\uC774 \uC0AC\uC6A9\uD55C \uAE30\uC220\uACFC \uAC19\uC740 \uD0C0\uC785\uC73C\uB85C \uBCC0\uD654\uD55C\uB2E4.",
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
    name: "\uB77C\uC774\uD2B8\uBA54\uD0C8",
    desc: "\uC790\uC2E0\uC758 \uBB34\uAC8C\uAC00 \uC808\uBC18\uC774 \uB41C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lightningrod: {
    name: "\uD53C\uB8B0\uCE68",
    desc: "\uC804\uAE30\uD0C0\uC785\uC758 \uAE30\uC220\uC744 \uC790\uC2E0\uC5D0\uAC8C \uB04C\uC5B4\uBAA8\uC544 \uB370\uBBF8\uC9C0\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uD2B9\uC218\uACF5\uACA9\uC744 \uC62C\uB9B0\uB2E4.",
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
    activate: "  [POKEMON:topic] \uACF5\uACA9\uC744 \uB04C\uC5B4\uB4E4\uC600\uB2E4!"
  },
  limber: {
    name: "\uC720\uC5F0",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lingeringaroma: {
    name: "\uAC00\uC2DC\uC9C0\uC54A\uB294\uD5A5\uAE30",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "  [TARGET]\uC5D0\uAC8C \uD5A5\uAE30\uAC00 \uBC30\uC5B4\uC11C \uAC00\uC2DC\uC9C0 \uC54A\uAC8C \uB418\uC5C8\uB2E4!"
  },
  liquidooze: {
    name: "\uD574\uAC10\uC561",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  [POKEMON:topic] \uD574\uAC10\uC561\uC744 \uD761\uC218\uD588\uB2E4!"
  },
  liquidvoice: {
    name: "\uCD09\uCD09\uBCF4\uC774\uC2A4",
    desc: "\uBAA8\uB4E0 \uC18C\uB9AC \uAE30\uC220\uC774 \uBB3C\uD0C0\uC785\uC774 \uB41C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  longreach: {
    name: "\uC6D0\uACA9",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magicbounce: {
    name: "\uB9E4\uC9C1\uBBF8\uB7EC",
    desc: "\uC0C1\uB300\uAC00 \uC4F4 \uBCC0\uD654 \uAE30\uC220\uC744 \uBC1B\uC9C0 \uC54A\uACE0 \uADF8\uB300\uB85C \uB418\uBC1B\uC544\uCE60 \uC218 \uC788\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    move: "#magiccoat"
  },
  magicguard: {
    name: "\uB9E4\uC9C1\uAC00\uB4DC",
    desc: "\uACF5\uACA9 \uC774\uC678\uC5D0\uB294 \uB370\uBBF8\uC9C0\uB97C \uC785\uC9C0 \uC54A\uB294\uB2E4.",
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
    name: "\uB9E4\uC9C0\uC158",
    desc: "\uAE30\uC220\uC744 \uB9DE\uC740 \uC0C1\uB300\uC758 \uB3C4\uAD6C\uB97C \uBE7C\uC557\uC544 \uBC84\uB9B0\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magmaarmor: {
    name: "\uB9C8\uADF8\uB9C8\uC758\uBB34\uC7A5",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magnetpull: {
    name: "\uC790\uB825",
    desc: "\uAC15\uCCA0\uD0C0\uC785\uC758 \uD3EC\uCF13\uBAAC\uC744 \uC790\uB825\uC73C\uB85C \uB04C\uC5B4\uBAA8\uC544 \uB3C4\uB9DD\uCE60 \uC218 \uC5C6\uAC8C \uD55C\uB2E4.",
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
    name: "\uC774\uC0C1\uD55C\uBE44\uB298",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megalauncher: {
    name: "\uBA54\uAC00\uB7F0\uCC98",
    desc: "\uD30C\uB3D9 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megasol: {
    name: "\uBA54\uAC00\uC194\uB77C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  merciless: {
    name: "\uBB34\uB3C4\uD55C\uD589\uB3D9",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mimicry: {
    name: "\uC758\uD0DC",
    desc: "\uD544\uB4DC\uC758 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uD3EC\uCF13\uBAAC\uC758 \uD0C0\uC785\uC774 \uBC14\uB010\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON]\uC758 \uD0C0\uC785\uC774 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uC544\uC654\uB2E4!"
  },
  mindseye: {
    name: "\uC2EC\uC548",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  minus: {
    name: "\uB9C8\uC774\uB108\uC2A4",
    desc: "\uD50C\uB7EC\uC2A4\uB098 \uB9C8\uC774\uB108\uC2A4\uC758 \uD2B9\uC131\uC744 \uAC00\uC9C4 \uD3EC\uCF13\uBAAC\uC774 \uB3D9\uB8CC\uC5D0 \uC788\uC73C\uBA74 \uC790\uC2E0\uC758 \uD2B9\uC218\uACF5\uACA9\uC774 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uBBF8\uB7EC\uC544\uBA38",
    desc: "\uC790\uC2E0\uC774 \uBC1B\uB294 \uB2A5\uB825 \uB2E4\uC6B4 \uD6A8\uACFC\uC5D0 \uD55C\uD574 \uB418\uBC1B\uC544\uCE5C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mistysurge: {
    name: "\uBBF8\uC2A4\uD2B8\uBA54\uC774\uCEE4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moldbreaker: {
    name: "\uD2C0\uAE68\uAE30",
    desc: "\uC0C1\uB300 \uD2B9\uC131\uC5D0 \uBC29\uD574\uBC1B\uC9C0 \uC54A\uACE0 \uC0C1\uB300\uC5D0\uAC8C \uAE30\uC220\uC744 \uC4F8 \uC218 \uC788\uB2E4.",
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
    start: "  [POKEMON]\uC758 \uD2C0\uAE68\uAE30!"
  },
  moody: {
    name: "\uBCC0\uB355\uC7C1\uC774",
    desc: "\uB9E4 \uD134 \uB2A5\uB825 \uC911 \uD558\uB098\uAC00 \uD06C\uAC8C \uC624\uB974\uACE0 \uD558\uB098\uAC00 \uB5A8\uC5B4\uC9C4\uB2E4.",
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
    name: "\uC804\uAE30\uC5D4\uC9C4",
    desc: "\uC804\uAE30\uD0C0\uC785\uC758 \uAE30\uC220\uC744 \uBC1B\uC73C\uBA74 \uB370\uBBF8\uC9C0\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC2A4\uD53C\uB4DC\uAC00 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moxie: {
    name: "\uC790\uAE30\uACFC\uC2E0",
    desc: "\uC0C1\uB300\uB97C \uC4F0\uB7EC\uB728\uB9AC\uBA74 \uC790\uC2E0\uAC10\uC774 \uBD99\uC5B4\uC11C \uACF5\uACA9\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multiscale: {
    name: "\uBA40\uD2F0\uC2A4\uCF00\uC77C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multitype: {
    name: "\uBA40\uD2F0\uD0C0\uC785",
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
    name: "\uBBF8\uB77C",
    desc: "\uC0C1\uB300\uAC00 \uC811\uCD09\uD558\uBA74 \uC0C1\uB300\uB97C \uBBF8\uB77C\uB85C \uB9CC\uB4E4\uC5B4\uBC84\uB9B0\uB2E4.",
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
    changeAbility: "  [TARGET:topic] \uD2B9\uC131\uC774 \uBBF8\uB77C\uAC00 \uB418\uC5B4 \uBC84\uB838\uB2E4!"
  },
  myceliummight: {
    name: "\uADE0\uC0AC\uC758\uD798",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  naturalcure: {
    name: "\uC790\uC5F0\uD68C\uBCF5",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  neuroforce: {
    name: "\uBE0C\uB808\uC778\uD3EC\uC2A4",
    desc: "\uD6A8\uACFC\uAC00 \uAD49\uC7A5\uD55C \uACF5\uACA9\uC758 \uC704\uB825\uC774 \uB354\uC6B1 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  neutralizinggas: {
    name: "\uD654\uD559\uBCC0\uD654\uAC00\uC2A4",
    desc: "\uD654\uD559\uBCC0\uD654\uAC00\uC2A4\uB97C \uAC00\uC9C4 \uD3EC\uCF13\uBAAC\uC774 \uBC30\uD2C0\uC5D0 \uB098\uC640 \uC788\uC73C\uBA74 \uBAA8\uB4E0 \uD3EC\uCF13\uBAAC\uC774 \uAC00\uC9C4 \uD2B9\uC131\uC758 \uD6A8\uACFC\uAC00 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBC1C\uB3D9\uD558\uC9C0 \uC54A\uAC8C \uB41C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  \uC8FC\uC704\uAC00 \uD654\uD559\uBCC0\uD654\uAC00\uC2A4\uB85C \uAC00\uB4DD \uCC3C\uB2E4!",
    end: "  \uD654\uD559\uBCC0\uD654\uAC00\uC2A4\uC758 \uD6A8\uACFC\uAC00 \uC0AC\uB77C\uC84C\uB2E4!"
  },
  noguard: {
    name: "\uB178\uAC00\uB4DC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  normalize: {
    name: "\uB178\uB9D0\uC2A4\uD0A8",
    desc: "\uC5B4\uB5A4 \uD0C0\uC785\uC758 \uAE30\uC220\uB3C4 \uBAA8\uB450 \uB178\uB9D0\uD0C0\uC785\uC774 \uB41C\uB2E4. \uC704\uB825\uC774 \uC870\uAE08 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uB454\uAC10",
    desc: "\uB454\uAC10\uD574\uC11C \uD5E4\uB871\uD5E4\uB871\uC774\uB098 \uB3C4\uBC1C \uC0C1\uD0DC\uAC00 \uB418\uC9C0 \uC54A\uB294\uB2E4.",
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
    name: "\uD3B8\uC2B9",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  orichalcumpulse: {
    name: "\uC9C4\uD64D\uBE5B\uACE0\uB3D9",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON:topic] \uD587\uC0B4\uC744 \uAC15\uD558\uAC8C \uD558\uC5EC \uACE0\uB300\uC758 \uACE0\uB3D9\uC744 \uD3ED\uBC1C\uC2DC\uCF30\uB2E4!!",
    activate: "  [POKEMON:topic] \uD587\uC0B4\uC744 \uBC1B\uC544 \uACE0\uB300\uC758 \uACE0\uB3D9\uC744 \uD3ED\uBC1C\uC2DC\uCF30\uB2E4!!"
  },
  overcoat: {
    name: "\uBC29\uC9C4",
    desc: "\uBAA8\uB798\uBC14\uB78C\uC774\uB098 \uC2F8\uB77C\uAE30\uB208 \uB4F1\uC758 \uB370\uBBF8\uC9C0\uB97C \uC785\uC9C0 \uC54A\uB294\uB2E4. \uAC00\uB8E8\uC758 \uAE30\uC220\uC744 \uBC1B\uC9C0 \uC54A\uB294\uB2E4.",
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
    name: "\uC2EC\uB85D",
    desc: "HP\uAC00 \uC904\uC5C8\uC744 \uB54C \uD480\uD0C0\uC785 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uB9C8\uC774\uD398\uC774\uC2A4",
    desc: "\uB9C8\uC774\uD398\uC774\uC2A4\uB77C\uC11C \uD63C\uB780 \uC0C1\uD0DC\uAC00 \uB418\uC9C0 \uC54A\uB294\uB2E4.",
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
    name: "\uBD80\uC790\uC720\uCE5C",
    desc: "\uBD80\uBAA8\uC640 \uC790\uC2DD 2\uB9C8\uB9AC\uB85C 2\uBC88 \uACF5\uACA9\uD560 \uC218 \uC788\uB2E4.",
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
    name: "\uD30C\uC2A4\uD154\uBCA0\uC77C",
    desc: "\uC790\uC2E0\uACFC \uAC19\uC740 \uD3B8\uC774 \uB3C5\uC758 \uC0C1\uD0DC \uC774\uC0C1 \uD6A8\uACFC\uB97C \uBC1B\uC9C0 \uC54A\uAC8C \uB41C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  perishbody: {
    name: "\uBA78\uB9DD\uC758\uBC14\uB514",
    desc: "\uC811\uCD09\uD558\uB294 \uAE30\uC220\uC744 \uBC1B\uC73C\uBA74 3\uD134 \uD6C4\uC5D0 \uC591\uCABD \uBAA8\uB450 \uAE30\uC808\uD55C\uB2E4. \uAD50\uCCB4\uB418\uBA74 \uD6A8\uACFC\uAC00 \uC5C6\uC5B4\uC9C4\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \uB450 \uD3EC\uCF13\uBAAC \uBAA8\uB450 3\uD134 \uD6C4\uC5D0 \uC4F0\uB7EC\uC838 \uBC84\uB9B0\uB2E4!"
  },
  pickpocket: {
    name: "\uB098\uC05C\uC190\uBC84\uB987",
    desc: "\uC811\uCD09\uD55C \uC0C1\uB300\uC758 \uB3C4\uAD6C\uB97C \uD6D4\uCE5C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pickup: {
    name: "\uD53D\uC5C5",
    desc: "\uC0C1\uB300\uAC00 \uC0AC\uC6A9\uD55C \uB3C4\uAD6C\uB97C \uC8FC\uC6CC\uC62C \uB54C\uAC00 \uC788\uB2E4. \uBAA8\uD5D8 \uC911\uC5D0\uB3C4 \uC8FC\uC6CC\uC628\uB2E4.",
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
    name: "\uAD00\uD1B5\uB4DC\uB9B4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pixilate: {
    name: "\uD398\uC5B4\uB9AC\uC2A4\uD0A8",
    desc: "\uB178\uB9D0\uD0C0\uC785\uC758 \uAE30\uC220\uC774 \uD398\uC5B4\uB9AC\uD0C0\uC785\uC774 \uB41C\uB2E4. \uC704\uB825\uC774 \uC870\uAE08 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uD50C\uB7EC\uC2A4",
    desc: "\uD50C\uB7EC\uC2A4\uB098 \uB9C8\uC774\uB108\uC2A4\uC758 \uD2B9\uC131\uC744 \uAC00\uC9C4 \uD3EC\uCF13\uBAAC\uC774 \uB3D9\uB8CC\uC5D0 \uC788\uC73C\uBA74 \uC790\uC2E0\uC758 \uD2B9\uC218\uACF5\uACA9\uC774 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uD3EC\uC774\uC98C\uD790",
    desc: "\uB3C5 \uC0C1\uD0DC\uAC00 \uB418\uBA74 HP\uAC00 \uC904\uC9C0 \uC54A\uACE0 \uC99D\uAC00\uD55C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisonpoint: {
    name: "\uB3C5\uAC00\uC2DC",
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
    name: "\uB3C5\uC870\uC885",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisontouch: {
    name: "\uB3C5\uC218",
    desc: "\uC811\uCD09\uD558\uAE30\uB9CC \uD574\uB3C4 \uC0C1\uB300\uB97C \uB3C5 \uC0C1\uD0DC\uB85C \uB9CC\uB4E4 \uB54C\uAC00 \uC788\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  powerconstruct: {
    name: "\uC2A4\uC6DC\uCCB4\uC778\uC9C0",
    desc: "HP\uAC00 \uC808\uBC18\uC774 \uB418\uBA74 \uC140\uB4E4\uC774 \uC751\uC6D0\uD558\uB7EC \uB2EC\uB824\uC640 \uD37C\uD399\uD2B8\uD3FC\uC73C\uB85C \uBAA8\uC2B5\uC774 \uBCC0\uD55C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \uB9CE\uC740 \uAE30\uCC99\uC774 \uB290\uAEF4\uC9C4\uB2E4...!",
    transform: "[POKEMON:topic] \uD37C\uD399\uD2B8\uD3FC\uC73C\uB85C \uBC14\uB00C\uC5C8\uB2E4!"
  },
  powerofalchemy: {
    name: "\uACFC\uD559\uC758\uD798",
    desc: "\uC4F0\uB7EC\uC9C4 \uAC19\uC740 \uD3B8\uC758 \uD2B9\uC131\uC744 \uC774\uC5B4\uBC1B\uC544 \uAC19\uC740 \uD2B9\uC131\uC73C\uB85C \uBC14\uB010\uB2E4.",
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
    name: "\uD30C\uC6CC\uC2A4\uD3FF",
    desc: "\uC606\uC5D0 \uC788\uAE30\uB9CC \uD574\uB3C4 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prankster: {
    name: "\uC9D3\uAD82\uC740\uB9C8\uC74C",
    desc: "\uBCC0\uD654 \uAE30\uC220\uC744 \uBA3C\uC800 \uC4F8 \uC218 \uC788\uB2E4.",
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
    name: "\uD504\uB808\uC154",
    desc: "\uD504\uB808\uC154\uB97C \uC918\uC11C \uC0C1\uB300\uAC00 \uC4F0\uB294 \uAE30\uC220\uC758 PP\uB97C \uB9CE\uC774 \uC904\uC778\uB2E4.",
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
    start: "  [POKEMON:topic] \uD504\uB808\uC154\uB97C \uBC1C\uC0B0\uD558\uACE0 \uC788\uB2E4!"
  },
  primordialsea: {
    name: "\uC2DC\uC791\uC758\uBC14\uB2E4",
    desc: "\uBD88\uAF43\uD0C0\uC785\uC758 \uACF5\uACA9\uC744 \uBC1B\uC9C0 \uC54A\uB294 \uB0A0\uC528\uB85C \uB9CC\uB4E0\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prismarmor: {
    name: "\uD504\uB9AC\uC998\uC544\uBA38",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  propellertail: {
    name: "\uC2A4\uD06C\uB8E8\uC9C0\uB290\uB7EC\uBBF8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  protean: {
    name: "\uBCC0\uD658\uC790\uC7AC",
    desc: "\uC790\uC2E0\uC774 \uC0AC\uC6A9\uD55C \uAE30\uC220\uACFC \uAC19\uC740 \uD0C0\uC785\uC73C\uB85C \uBCC0\uD654\uD55C\uB2E4.",
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
    name: "\uACE0\uB300\uD65C\uC131",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON:topic] \uCF8C\uCCAD\uC5D0 \uC758\uD574 \uACE0\uB300\uD65C\uC131\uC744 \uBC1C\uB3D9\uD588\uB2E4!",
    activateFromItem: "  [POKEMON:topic] \uBD80\uC2A4\uD2B8\uC5D0\uB108\uC9C0\uC5D0 \uC758\uD574 \uACE0\uB300\uD65C\uC131\uC744 \uBC1C\uB3D9\uD588\uB2E4!",
    start: "  [POKEMON]\uC758 [STAT:subject] \uAC15\uD654\uB418\uC5C8\uB2E4!",
    end: "  [POKEMON]\uC5D0\uAC8C\uC11C \uACE0\uB300\uD65C\uC131\uC758 \uD6A8\uACFC\uAC00 \uC0AC\uB77C\uC84C\uB2E4!"
  },
  psychicsurge: {
    name: "\uC0AC\uC774\uCF54\uBA54\uC774\uCEE4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  punkrock: {
    name: "\uD391\uD06C\uB85D",
    desc: "\uC18C\uB9AC \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4. \uC0C1\uB300\uB85C\uBD80\uD130 \uBC1B\uB294 \uC18C\uB9AC \uAE30\uC220\uC758 \uB370\uBBF8\uC9C0\uB294 \uC808\uBC18\uC774 \uB41C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purepower: {
    name: "\uC21C\uC218\uD55C\uD798",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purifyingsalt: {
    name: "\uC815\uD654\uC758\uC18C\uAE08",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  quarkdrive: {
    name: "\uCFFC\uD06C\uCC28\uC9C0",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON:topic] \uC77C\uB809\uD2B8\uB9AD\uD544\uB4DC\uC5D0 \uC758\uD574 \uCFFC\uD06C\uCC28\uC9C0\uB97C \uBC1C\uB3D9\uD588\uB2E4!",
    activateFromItem: "  [POKEMON:topic] \uBD80\uC2A4\uD2B8\uC5D0\uB108\uC9C0\uC5D0 \uC758\uD574 \uCFFC\uD06C\uCC28\uC9C0\uB97C \uBC1C\uB3D9\uD588\uB2E4!",
    start: "  [POKEMON]\uC758 [STAT:subject] \uAC15\uD654\uB418\uC5C8\uB2E4!",
    end: "  [POKEMON]\uC5D0\uAC8C\uC11C \uCFFC\uD06C\uCC28\uC9C0\uC758 \uD6A8\uACFC\uAC00 \uC0AC\uB77C\uC84C\uB2E4!"
  },
  queenlymajesty: {
    name: "\uC5EC\uC655\uC758\uC704\uC5C4",
    desc: "\uC0C1\uB300\uC5D0\uAC8C \uC704\uC555\uAC10\uC744 \uC918\uC11C \uC774\uCABD\uC744 \uD5A5\uD55C \uC120\uC81C \uAE30\uC220\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uAC8C \uD55C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  quickdraw: {
    name: "\uD035\uB4DC\uB85C",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON:topic] \uD035\uB4DC\uB85C\uC5D0 \uC758\uD574 \uD589\uB3D9\uC774 \uBE68\uB77C\uC84C\uB2E4!"
  },
  quickfeet: {
    name: "\uC18D\uBCF4",
    desc: "\uC0C1\uD0DC \uC774\uC0C1\uC774 \uB418\uBA74 \uC2A4\uD53C\uB4DC\uAC00 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  raindish: {
    name: "\uC816\uC740\uC811\uC2DC",
    desc: "\uBE44\uAC00 \uC624\uB294 \uB0A0\uC528\uC77C \uB54C \uC870\uAE08\uC529 HP\uB97C \uD68C\uBCF5\uD55C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  rattled: {
    name: "\uC8FC\uB205",
    desc: "\uC545\uD0C0\uC785\uACFC \uACE0\uC2A4\uD2B8\uD0C0\uC785\uACFC \uBC8C\uB808\uD0C0\uC785\uC758 \uAE30\uC220\uC744 \uBC1B\uC73C\uBA74 \uC8FC\uB205\uC774 \uB4E4\uC5B4 \uC2A4\uD53C\uB4DC\uAC00 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uB9AC\uC2DC\uBC84",
    desc: "\uC4F0\uB7EC\uC9C4 \uAC19\uC740 \uD3B8\uC758 \uD2B9\uC131\uC744 \uC774\uC5B4\uBC1B\uC544 \uAC19\uC740 \uD2B9\uC131\uC774 \uB41C\uB2E4.",
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
    changeAbility: "  [SOURCE]\uC758 [ABILITY:object] \uC774\uC5B4\uBC1B\uC558\uB2E4!"
  },
  reckless: {
    name: "\uC774\uD310\uC0AC\uD310",
    desc: "\uBC18\uB3D9 \uB370\uBBF8\uC9C0\uB97C \uBC1B\uB294 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  refrigerate: {
    name: "\uD504\uB9AC\uC988\uC2A4\uD0A8",
    desc: "\uB178\uB9D0\uD0C0\uC785\uC758 \uAE30\uC220\uC774 \uC5BC\uC74C\uD0C0\uC785\uC774 \uB41C\uB2E4. \uC704\uB825\uC774 \uC870\uAE08 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uC7AC\uC0DD\uB825",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  ripen: {
    name: "\uC219\uC131",
    desc: "\uB098\uBB34\uC5F4\uB9E4\uB97C \uC219\uC131\uC2DC\uCF1C\uC11C \uD6A8\uACFC\uAC00 2\uBC30\uAC00 \uB41C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rivalry: {
    name: "\uD22C\uC7C1\uC2EC",
    desc: "\uC131\uBCC4\uC774 \uAC19\uC73C\uBA74 \uD22C\uC7C1\uC2EC\uC744 \uBD88\uD0DC\uC6CC \uAC15\uD574\uC9C4\uB2E4. \uC131\uBCC4\uC774 \uB2E4\uB974\uBA74 \uC57D\uD574\uC9C4\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rkssystem: {
    name: "AR\uC2DC\uC2A4\uD15C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rockhead: {
    name: "\uB3CC\uBA38\uB9AC",
    desc: "\uBC18\uB3D9\uC744 \uBC1B\uB294 \uAE30\uC220\uC744 \uC0AC\uC6A9\uD574\uB3C4 HP\uAC00 \uC904\uC9C0 \uC54A\uB294\uB2E4.",
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
    name: "\uBC14\uC704\uB098\uB974\uAE30",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  roughskin: {
    name: "\uAE4C\uCE60\uD55C\uD53C\uBD80",
    desc: "\uACF5\uACA9\uC744 \uBC1B\uC558\uC744 \uB54C \uC790\uC2E0\uC5D0\uAC8C \uC811\uCD09\uD55C \uC0C1\uB300\uB97C \uAE4C\uCE60\uAE4C\uCE60\uD55C \uD53C\uBD80\uB85C \uC0C1\uCC98\uB97C \uC785\uD78C\uB2E4.",
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
    damage: "  [POKEMON] \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!"
  },
  runaway: {
    name: "\uB3C4\uC8FC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandforce: {
    name: "\uBAA8\uB798\uC758\uD798",
    desc: "\uB0A0\uC528\uAC00 \uBAA8\uB798\uBC14\uB78C\uC77C \uB54C \uBC14\uC704\uD0C0\uC785\uACFC \uB545\uD0C0\uC785\uACFC \uAC15\uCCA0\uD0C0\uC785\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandrush: {
    name: "\uBAA8\uB798\uD5E4\uCE58\uAE30",
    desc: "\uB0A0\uC528\uAC00 \uBAA8\uB798\uBC14\uB78C\uC77C \uB54C \uC2A4\uD53C\uB4DC\uAC00 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandspit: {
    name: "\uBAA8\uB798\uBFDC\uAE30",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sandstream: {
    name: "\uBAA8\uB798\uB0A0\uB9BC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandveil: {
    name: "\uBAA8\uB798\uC228\uAE30",
    desc: "\uBAA8\uB798\uBC14\uB78C\uC77C \uB54C \uD68C\uD53C\uC728\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sapsipper: {
    name: "\uCD08\uC2DD",
    desc: "\uD480\uD0C0\uC785 \uAE30\uC220\uC744 \uBC1B\uC73C\uBA74 \uB370\uBBF8\uC9C0\uB97C \uC785\uC9C0 \uC54A\uACE0 \uACF5\uACA9\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  schooling: {
    name: "\uC5B4\uAD70",
    desc: "HP\uAC00 \uB9CE\uC744 \uB54C \uBB34\uB9AC\uC9C0\uC5B4 \uAC15\uD574\uC9C4\uB2E4. HP\uAC00 \uC5BC\uB9C8 \uB0A8\uC9C0 \uC54A\uC73C\uBA74 \uBB34\uB9AC\uB294 \uBFD4\uBFD4\uC774 \uD769\uC5B4\uC9C4\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON]\uC758 \uBB34\uB9AC\uAC00 \uBAA8\uC600\uB2E4!",
    transformEnd: "[POKEMON]\uC758 \uBB34\uB9AC\uB294 \uBFD4\uBFD4\uC774 \uD769\uC5B4\uC84C\uB2E4!"
  },
  scrappy: {
    name: "\uBC30\uC9F1",
    desc: "\uACE0\uC2A4\uD2B8\uD0C0\uC785 \uD3EC\uCF13\uBAAC\uC5D0\uAC8C \uB178\uB9D0\uD0C0\uC785\uACFC \uACA9\uD22C\uD0C0\uC785\uC758 \uAE30\uC220\uC744 \uB9DE\uAC8C \uD55C\uB2E4.",
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
    name: "\uBC30\uB9AC\uC5B4\uD504\uB9AC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  seedsower: {
    name: "\uB118\uCE58\uB294\uC528",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  serenegrace: {
    name: "\uD558\uB298\uC758\uC740\uCD1D",
    desc: "\uD558\uB298\uC758 \uC740\uCD1D \uB355\uBD84\uC5D0 \uAE30\uC220\uC758 \uCD94\uAC00 \uD6A8\uACFC\uAC00 \uB098\uC624\uAE30 \uC27D\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  shadowshield: {
    name: "\uC2A4\uD399\uD130\uAC00\uB4DC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shadowtag: {
    name: "\uADF8\uB9BC\uC790\uBC1F\uAE30",
    desc: "\uC0C1\uB300\uC758 \uADF8\uB9BC\uC790\uB97C \uBC1F\uC544 \uB3C4\uB9DD\uCE58\uAC70\uB098 \uAD50\uCCB4\uD560 \uC218 \uC5C6\uAC8C \uD55C\uB2E4.",
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
    name: "\uC608\uB9AC\uD568",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shedskin: {
    name: "\uD0C8\uD53C",
    desc: "\uBAB8\uC758 \uAECD\uC9C8\uC744 \uBC97\uC5B4 \uB358\uC838 \uC0C1\uD0DC \uC774\uC0C1\uC744 \uD68C\uBCF5\uD560 \uB54C\uAC00 \uC788\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sheerforce: {
    name: "\uC6B0\uACA9\uB2E4\uC9D0",
    desc: "\uAE30\uC220\uC758 \uCD94\uAC00 \uD6A8\uACFC\uAC00 \uC5C6\uC5B4\uC9C0\uC9C0\uB9CC \uADF8\uB9CC\uD07C \uB192\uC740 \uC704\uB825\uC73C\uB85C \uAE30\uC220\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.",
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
    name: "\uC870\uAC00\uBE44\uAC11\uC637",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shielddust: {
    name: "\uC778\uBD84",
    desc: "\uC778\uBD84\uC5D0 \uBCF4\uD638\uBC1B\uC544 \uAE30\uC220\uC758 \uCD94\uAC00 \uD6A8\uACFC\uB97C \uBC1B\uC9C0 \uC54A\uAC8C \uB41C\uB2E4.",
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
    name: "\uB9AC\uBC0B\uC2E4\uB4DC",
    desc: "HP\uAC00 \uC808\uBC18\uC774 \uB418\uBA74 \uAECD\uC9C8\uC774 \uAE68\uC838 \uACF5\uACA9\uC801\uC73C\uB85C \uB41C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "\uB9AC\uBC0B\uC2E4\uB4DC \uBC1C\uB3D9!",
    transformEnd: "\uB9AC\uBC0B\uC2E4\uB4DC \uD574\uC81C!"
  },
  simple: {
    name: "\uB2E8\uC21C",
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
    name: "\uC2A4\uD0AC\uB9C1\uD06C",
    desc: "\uC5F0\uC18D \uAE30\uC220\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD56D\uC0C1 \uCD5C\uACE0 \uD69F\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.",
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
    name: "\uC2AC\uB85C\uC2A4\uD0C0\uD2B8",
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
    start: "  [POKEMON:topic] \uCEE8\uB514\uC158\uC774 \uC88B\uC544\uC9C0\uC9C0 \uC54A\uB294\uB2E4!",
    end: "  [POKEMON:topic] \uCEE8\uB514\uC158\uC744 \uD68C\uBCF5\uD588\uB2E4!"
  },
  slushrush: {
    name: "\uB208\uCE58\uC6B0\uAE30",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sniper: {
    name: "\uC2A4\uB098\uC774\uD37C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  snowcloak: {
    name: "\uB208\uC228\uAE30",
    desc: "\uB0A0\uC528\uAC00 \uC2F8\uB77C\uAE30\uB208\uC77C \uB54C \uD68C\uD53C\uC728\uC774 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uB208\uD37C\uB728\uB9AC\uAE30",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solarpower: {
    name: "\uC120\uD30C\uC6CC",
    desc: "\uB0A0\uC528\uAC00 \uB9D1\uC73C\uBA74 \uD2B9\uC218\uACF5\uACA9\uC774 \uC62C\uB77C\uAC00\uC9C0\uB9CC \uB9E4 \uD134 HP\uAC00 \uC904\uC5B4\uB4E0\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solidrock: {
    name: "\uD558\uB4DC\uB85D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soulheart: {
    name: "\uC18C\uC6B8\uD558\uD2B8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soundproof: {
    name: "\uBC29\uC74C",
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
    name: "\uAC00\uC18D",
    desc: "\uB9E4 \uD134 \uC2A4\uD53C\uB4DC\uAC00 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  spicyspray: {
    name: "\uD558\uBC14\uB124\uB85C\uBD84\uCD9C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stakeout: {
    name: "\uC7A0\uBCF5",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stall: {
    name: "\uC2DC\uAC04\uBC8C\uAE30",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stalwart: {
    name: "\uAD73\uAC74\uD55C\uC2E0\uB150",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stamina: {
    name: "\uC9C0\uAD6C\uB825",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stancechange: {
    name: "\uBC30\uD2C0\uC2A4\uC704\uCE58",
    desc: "\uACF5\uACA9 \uAE30\uC220\uC744 \uC4F0\uBA74 \uBE14\uB808\uC774\uB4DC\uD3FC\uC73C\uB85C \uAE30\uC220 \uD0B9\uC2E4\uB4DC\uB97C \uC4F0\uBA74 \uC2E4\uB4DC\uD3FC\uC73C\uB85C \uBCC0\uD55C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    transform: "\uBE14\uB808\uC774\uB4DC\uD3FC \uCCB4\uC778\uC9C0!",
    transformEnd: "\uC2E4\uB4DC\uD3FC \uCCB4\uC778\uC9C0!"
  },
  static: {
    name: "\uC815\uC804\uAE30",
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
    name: "\uBD88\uAD74\uC758\uB9C8\uC74C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steamengine: {
    name: "\uC99D\uAE30\uAE30\uAD00",
    desc: "\uBB3C\uD0C0\uC785\uC774\uB098 \uBD88\uAF43\uD0C0\uC785 \uAE30\uC220\uC744 \uBC1B\uC73C\uBA74 \uC2A4\uD53C\uB4DC\uAC00 \uB9E4\uC6B0 \uD06C\uAC8C \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelworker: {
    name: "\uAC15\uCCA0\uC220\uC0AC",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelyspirit: {
    name: "\uAC15\uCCA0\uC815\uC2E0",
    desc: "\uAC19\uC740 \uD3B8\uC758 \uAC15\uCCA0\uD0C0\uC785 \uACF5\uACA9\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stench: {
    name: "\uC545\uCDE8",
    desc: "\uC545\uCDE8\uB97C \uD48D\uACA8\uC11C \uACF5\uACA9\uD588\uC744 \uB54C \uC0C1\uB300\uAC00 \uD480\uC8FD\uC744 \uB54C\uAC00 \uC788\uB2E4.",
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
    name: "\uC810\uCC29",
    desc: "\uC810\uCC29\uC9C8\uC758 \uBAB8\uC5D0 \uB3C4\uAD6C\uAC00 \uB2EC\uB77C\uBD99\uC5B4 \uC788\uC5B4 \uC0C1\uB300\uC5D0\uAC8C \uB3C4\uAD6C\uB97C \uBE8F\uAE30\uC9C0 \uC54A\uB294\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  [POKEMON]\uC758 \uB3C4\uAD6C\uB97C \uBE7C\uC557\uC744 \uC218 \uC5C6\uB2E4!"
  },
  stormdrain: {
    name: "\uB9C8\uC911\uBB3C",
    desc: "\uBB3C\uD0C0\uC785\uC758 \uAE30\uC220\uC744 \uC790\uC2E0\uC5D0\uAC8C \uB04C\uC5B4\uBAA8\uC544 \uB370\uBBF8\uC9C0\uB294 \uBC1B\uC9C0 \uC54A\uACE0 \uD2B9\uC218\uACF5\uACA9\uC774 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uC639\uACE8\uCC2C\uD131",
    desc: "\uD131\uC774 \uD2BC\uD2BC\uD558\uC5EC \uBB34\uB294 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sturdy: {
    name: "\uC639\uACE8\uCC38",
    desc: "\uC0C1\uB300 \uAE30\uC220\uC744 \uBC1B\uC544\uB3C4 \uC77C\uACA9\uC73C\uB85C \uC4F0\uB7EC\uC9C0\uC9C0 \uC54A\uB294\uB2E4. \uC77C\uACA9\uD544\uC0B4 \uAE30\uC220\uB3C4 \uD6A8\uACFC \uC5C6\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON:topic] \uACF5\uACA9\uC744 \uBC84\uD17C\uB2E4!"
  },
  suctioncups: {
    name: "\uD761\uBC18",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON:topic] \uD761\uBC18 \uB54C\uBB38\uC5D0 \uB4E4\uB7EC\uBD99\uC5B4 \uC788\uB2E4!"
  },
  superluck: {
    name: "\uB300\uC6B4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  supersweetsyrup: {
    name: "\uAC10\uBBF8\uB85C\uC6B4\uAFC0",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\uC758 \uAFC0\uC5D0\uC11C \uB2EC\uCF64\uD55C \uD5A5\uAE30\uAC00 \uB098\uACE0 \uC788\uB2E4!"
  },
  supremeoverlord: {
    name: "\uCD1D\uB300\uC7A5",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON:topic] \uC4F0\uB7EC\uC9C4 \uB3D9\uB8CC\uC5D0\uAC8C\uC11C \uD798\uC744 \uBC1B\uC558\uB2E4!"
  },
  surgesurfer: {
    name: "\uC11C\uD551\uD14C\uC77C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  swarm: {
    name: "\uBC8C\uB808\uC758\uC54C\uB9BC",
    desc: "HP\uAC00 \uC904\uC5C8\uC744 \uB54C \uBC8C\uB808\uD0C0\uC785 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uC2A4\uC704\uD2B8\uBCA0\uC77C",
    desc: "\uAC19\uC740 \uD3B8\uC758 \uD3EC\uCF13\uBAAC\uC774 \uC7A0\uB4E4\uC9C0 \uC54A\uAC8C \uB41C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON:topic] \uC2A4\uC704\uD2B8\uBCA0\uC77C \uB54C\uBB38\uC5D0 \uC7A0\uB4E4\uC9C0 \uC54A\uB294\uB2E4!"
  },
  swiftswim: {
    name: "\uC4F1\uC4F1",
    desc: "\uBE44\uAC00 \uC624\uB294 \uB0A0\uC528\uC77C \uB54C \uC2A4\uD53C\uB4DC\uAC00 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  swordofruin: {
    name: "\uC7AC\uC559\uC758\uAC80",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\uC758 \uC7AC\uC559\uC758\uAC80\uC5D0 \uC758\uD574 \uC8FC\uC704\uC758 \uBC29\uC5B4\uAC00 \uC57D\uD574\uC84C\uB2E4!"
  },
  symbiosis: {
    name: "\uACF5\uC0DD",
    desc: "\uAC19\uC740 \uD3B8\uC774 \uB3C4\uAD6C\uB97C \uC4F0\uBA74 \uC790\uC2E0\uC774 \uC9C0\uB2C8\uACE0 \uC788\uB294 \uB3C4\uAD6C\uB97C \uAC19\uC740 \uD3B8\uC5D0\uAC8C \uAC74\uB128\uB2E4.",
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
    activate: "  [POKEMON:topic] [ITEM:object] [TARGET]\uC5D0\uAC8C \uC9C0\uB2C8\uAC8C \uD588\uB2E4!"
  },
  synchronize: {
    name: "\uC2F1\uD06C\uB85C",
    desc: "\uC790\uC2E0\uC774 \uAC78\uB9B0 \uB3C5\uC774\uB098 \uB9C8\uBE44, \uD654\uC0C1\uC744 \uC0C1\uB300\uC5D0\uAC8C \uC62E\uAE34\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  tabletsofruin: {
    name: "\uC7AC\uC559\uC758\uBAA9\uAC04",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\uC758 \uC7AC\uC559\uC758\uBAA9\uAC04\uC5D0 \uC758\uD574 \uC8FC\uC704\uC758 \uACF5\uACA9\uC774 \uC57D\uD574\uC84C\uB2E4!"
  },
  tangledfeet: {
    name: "\uAC08\uC9C0\uC790\uAC78\uC74C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  tanglinghair: {
    name: "\uCEEC\uB9AC\uD5E4\uC5B4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  technician: {
    name: "\uD14C\uD06C\uB2C8\uC158",
    desc: "\uC704\uB825\uC774 \uC57D\uD55C \uAE30\uC220\uC758 \uC704\uB825\uC744 \uC62C\uB824\uC11C \uACF5\uACA9\uD560 \uC218 \uC788\uB2E4.",
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
    name: "\uD154\uB808\uD30C\uC2DC",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON:topic] \uAC19\uC740 \uD3B8\uC758 \uACF5\uACA9\uC744 \uBC1B\uC9C0 \uC54A\uB294\uB2E4!"
  },
  teraformzero: {
    name: "\uC81C\uB85C\uD3EC\uBC0D",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  terashell: {
    name: "\uD14C\uB77C\uC178",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON:topic] \uB4F1\uAECD\uC9C8\uC744 \uBE5B\uB098\uAC8C \uD558\uC5EC \uD0C0\uC785 \uC0C1\uC131\uC744 \uC65C\uACE1\uC2DC\uCF30\uB2E4!!"
  },
  terashift: {
    name: "\uD14C\uB77C\uCCB4\uC778\uC9C0",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON]\uC758 \uBAA8\uC2B5\uC774 \uBCC0\uD654\uD588\uB2E4!"
  },
  teravolt: {
    name: "\uD14C\uB77C\uBCFC\uD2F0\uC9C0",
    desc: "\uC0C1\uB300 \uD2B9\uC131\uC5D0 \uBC29\uD574\uBC1B\uC9C0 \uC54A\uACE0 \uC0C1\uB300\uC5D0\uAC8C \uAE30\uC220\uC744 \uC4F8 \uC218 \uC788\uB2E4.",
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
    start: "  [POKEMON:topic] \uC138\uCC28\uAC8C \uD280\uB294 \uC624\uB77C\uB97C \uBC1C\uC0B0\uD558\uACE0 \uC788\uB2E4!"
  },
  thermalexchange: {
    name: "\uC5F4\uAD50\uD658",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  thickfat: {
    name: "\uB450\uAEBC\uC6B4\uC9C0\uBC29",
    desc: "\uB450\uAEBC\uC6B4 \uC9C0\uBC29\uC73C\uB85C \uBCF4\uD638\uB418\uACE0 \uC788\uC5B4 \uBD88\uAF43\uD0C0\uC785\uACFC \uC5BC\uC74C\uD0C0\uC785\uC758 \uAE30\uC220\uC758 \uB370\uBBF8\uC9C0\uB97C \uBC18\uAC10\uC2DC\uD0A8\uB2E4.",
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
    name: "\uC0C9\uC548\uACBD",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  torrent: {
    name: "\uAE09\uB958",
    desc: "HP\uAC00 \uC904\uC5C8\uC744 \uB54C \uBB3C\uD0C0\uC785 \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uB2E8\uB2E8\uD55C\uBC1C\uD1B1",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicboost: {
    name: "\uB3C5\uD3ED\uC8FC",
    desc: "\uB3C5 \uC0C1\uD0DC\uAC00 \uB418\uC5C8\uC744 \uB54C \uBB3C\uB9AC \uAE30\uC220\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicchain: {
    name: "\uB3C5\uC0AC\uC2AC",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicdebris: {
    name: "\uB3C5\uCE58\uC7A5",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  trace: {
    name: "\uD2B8\uB808\uC774\uC2A4",
    desc: "\uB4F1\uC7A5\uD588\uC744 \uB54C \uC0C1\uB300\uC758 \uD2B9\uC131\uC744 \uD2B8\uB808\uC774\uC2A4\uD574\uC11C \uAC19\uC740 \uD2B9\uC131\uC774 \uB41C\uB2E4.",
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
    changeAbility: "  [POKEMON] [SOURCE]\uC758 [ABILITY] \uD2B8\uB808\uC774\uC2A4\uD588\uB2E4!"
  },
  transistor: {
    name: "\uD2B8\uB79C\uC9C0\uC2A4\uD130",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  triage: {
    name: "\uD790\uB9C1\uC2DC\uD504\uD2B8",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  truant: {
    name: "\uAC8C\uC73C\uB984",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    cant: "[POKEMON:topic] \uAC8C\uC73C\uB984\uC744 \uD53C\uC6B0\uACE0 \uC788\uB2E4."
  },
  turboblaze: {
    name: "\uD130\uBCF4\uBE14\uB808\uC774\uC988",
    desc: "\uC0C1\uB300 \uD2B9\uC131\uC5D0 \uBC29\uD574\uBC1B\uC9C0 \uC54A\uACE0 \uC0C1\uB300\uC5D0\uAC8C \uAE30\uC220\uC744 \uC4F8 \uC218 \uC788\uB2E4.",
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
    start: "  [POKEMON:topic] \uD65C\uD65C \uD0C0\uC624\uB974\uB294 \uC624\uB77C\uB97C \uBC1C\uC0B0\uD558\uACE0 \uC788\uB2E4!"
  },
  unaware: {
    name: "\uCC9C\uC9C4",
    desc: "\uC0C1\uB300\uC758 \uB2A5\uB825 \uBCC0\uD654\uB97C \uBB34\uC2DC\uD558\uACE0 \uACF5\uACA9\uD560 \uC218 \uC788\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unburden: {
    name: "\uACE1\uC608",
    desc: "\uC9C0\uB2C8\uB358 \uB3C4\uAD6C\uAC00 \uC5C6\uC5B4\uC9C0\uBA74 \uC2A4\uD53C\uB4DC\uAC00 \uC62C\uB77C\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unnerve: {
    name: "\uAE34\uC7A5\uAC10",
    desc: "\uC0C1\uB300\uB97C \uAE34\uC7A5\uC2DC\uCF1C \uB098\uBB34\uC5F4\uB9E4\uB97C \uBA39\uC9C0 \uBABB\uD558\uAC8C \uD55C\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [TEAM:topic] \uAE34\uC7A5\uD574\uC11C \uB098\uBB34\uC5F4\uB9E4\uB97C \uBA39\uC744 \uC218 \uC5C6\uAC8C \uB418\uC5C8\uB2E4!"
  },
  unseenfist: {
    name: "\uBCF4\uC774\uC9C0\uC54A\uB294\uC8FC\uBA39",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    champions: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "\uC7AC\uC559\uC758\uADF8\uB987",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON]\uC758 \uC7AC\uC559\uC758\uADF8\uB987\uC5D0 \uC758\uD574 \uC8FC\uC704\uC758 \uD2B9\uC218\uACF5\uACA9\uC774 \uC57D\uD574\uC84C\uB2E4!"
  },
  victorystar: {
    name: "\uC2B9\uB9AC\uC758\uBCC4",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  vitalspirit: {
    name: "\uC758\uAE30\uC591\uC591",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  voltabsorb: {
    name: "\uCD95\uC804",
    desc: "\uC804\uAE30\uD0C0\uC785\uC758 \uAE30\uC220\uC744 \uBC1B\uC73C\uBA74 \uB370\uBBF8\uC9C0\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uD68C\uBCF5\uD55C\uB2E4.",
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
    name: "\uB5A0\uB3C4\uB294\uC601\uD63C",
    desc: "\uC811\uCD09\uD558\uB294 \uAE30\uC220\uB85C \uACF5\uACA9\uD574\uC628 \uD3EC\uCF13\uBAAC\uACFC \uD2B9\uC131\uC744 \uBC14\uAFBC\uB2E4.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "#skillswap"
  },
  waterabsorb: {
    name: "\uC800\uC218",
    desc: "\uBB3C\uD0C0\uC785\uC758 \uAE30\uC220\uC744 \uBC1B\uC73C\uBA74 \uB370\uBBF8\uC9C0\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uD68C\uBCF5\uD55C\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterbubble: {
    name: "\uC218\uD3EC",
    desc: "\uC790\uC2E0\uC744 \uD5A5\uD558\uB294 \uBD88\uAF43\uD0C0\uC785 \uAE30\uC220\uC758 \uC704\uB825\uC744 \uB5A8\uC5B4\uB728\uB9B0\uB2E4. \uD654\uC0C1\uC744 \uC785\uC9C0 \uC54A\uB294\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  watercompaction: {
    name: "\uAFB8\uB355\uAFB8\uB355\uAD73\uAE30",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterveil: {
    name: "\uC218\uC758\uBCA0\uC77C",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  weakarmor: {
    name: "\uAE68\uC5B4\uC9C4\uAC11\uC637",
    desc: "\uBB3C\uB9AC \uAE30\uC220\uB85C \uB370\uBBF8\uC9C0\uB97C \uBC1B\uC73C\uBA74 \uBC29\uC5B4\uAC00 \uB5A8\uC5B4\uC9C0\uACE0 \uC2A4\uD53C\uB4DC\uAC00 \uD06C\uAC8C \uC62C\uB77C\uAC04\uB2E4.",
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
    name: "\uB178\uB987\uB178\uB987\uBC14\uB514",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  whitesmoke: {
    name: "\uD558\uC580\uC5F0\uAE30",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wimpout: {
    name: "\uB3C4\uB9DD\uD0DC\uC138",
    desc: "HP\uAC00 \uC808\uBC18\uC774 \uB418\uBA74 \uD669\uAE09\uD788 \uB3C4\uB9DD\uCCD0\uC11C \uC9C0\uB2CC \uD3EC\uCF13\uBAAC\uC73C\uB85C \uB3CC\uC544\uAC04\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  windpower: {
    name: "\uD48D\uB825\uBC1C\uC804",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#electromorphosis"
  },
  windrider: {
    name: "\uBC14\uB78C\uD0C0\uAE30",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wonderguard: {
    name: "\uBD88\uAC00\uC0AC\uC758\uBD80\uC801",
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
    name: "\uBBF8\uB77C\uD074\uC2A4\uD0A8",
    desc: "\uBCC0\uD654 \uAE30\uC220\uC744 \uBC1B\uAE30 \uC5B4\uB824\uC6B4 \uBAB8\uC73C\uB85C \uB418\uC5B4 \uC788\uB2E4.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  zenmode: {
    name: "\uB2EC\uB9C8\uBAA8\uB4DC",
    desc: "HP\uAC00 \uC808\uBC18 \uC774\uD558\uAC00 \uB418\uBA74 \uBAA8\uC2B5\uC774 \uBCC0\uD654\uD55C\uB2E4.",
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
    transform: "\uB2EC\uB9C8\uBAA8\uB4DC \uBC1C\uB3D9!",
    transformEnd: "\uB2EC\uB9C8\uBAA8\uB4DC \uD574\uC81C!"
  },
  zerotohero: {
    name: "\uB9C8\uC774\uD2F0\uCCB4\uC778\uC9C0",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON:topic] \uBCC0\uC2E0\uD558\uACE0 \uB3CC\uC544\uC654\uB2E4!"
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
