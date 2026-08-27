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
    name: "Anpassung",
    desc: "Erh\xF6ht die St\xE4rke von Attacken, die dem Typ des Pok\xE9mon entsprechen.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aerilate: {
    name: "Zenithaut",
    desc: "Attacken vom Typ Normal nehmen den Typ Flug an und ihre St\xE4rke erh\xF6ht sich ein wenig.",
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
    name: "Finalschlag",
    desc: "Wird das Pok\xE9mon durch eine direkte Attacke besiegt, f\xFCgt es dem Angreifer Schaden zu.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "  [POKEMON] wurde Schaden zugef\xFCgt!"
  },
  airlock: {
    name: "Klimaschutz",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Jegliche wetterbedingten Effekte wurden aufgehoben!"
  },
  analytic: {
    name: "Analyse",
    desc: "Greift das Pok\xE9mon zuletzt an, erh\xF6ht sich die St\xE4rke der Attacke, die es einsetzt.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  angerpoint: {
    name: "Kurzschluss",
    desc: "Wird nach Einstecken eines Volltreffers w\xFCtend und maximiert dabei seinen Angriffs-Wert.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    boost: "  Der Angriffs-Wert von [POKEMON] erreicht das Maximum!"
  },
  angershell: {
    name: "Wutpanzer",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  anticipation: {
    name: "Vorahnung",
    desc: "Kann gef\xE4hrliche gegnerische Attacken erahnen.",
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
    activate: "  [POKEMON] erschaudert!"
  },
  arenatrap: {
    name: "Ausweglos",
    desc: "Hindert Gegner im Kampf an der Flucht.",
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
    name: "Schweifr\xFCstung",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  aromaveil: {
    name: "Dufth\xFClle",
    desc: "Kann alle Team-Pok\xE9mon vor mentalen Angriffen sch\xFCtzen.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON] wird von Dufth\xFClle gesch\xFCtzt!"
  },
  asone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] verf\xFCgt \xFCber zwei F\xE4higkeiten!"
  },
  asoneglastrier: {
    name: "Reitgespann",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  asonespectrier: {
    name: "Reitgespann",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aurabreak: {
    name: "Aura-Umkehr",
    desc: "Kehrt die Wirkung von Auren um und senkt so die St\xE4rke bestimmter Attacken, anstatt sie zu erh\xF6hen.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] kehrt die Wirkung aller Aura-F\xE4higkeiten um!"
  },
  baddreams: {
    name: "Alptraum",
    desc: "F\xFCgt schlafenden Gegnern Schaden zu.",
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
    damage: "  [POKEMON] ist in einem Alptraum gefangen!"
  },
  ballfetch: {
    name: "Apport",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battery: {
    name: "Batterie",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlearmor: {
    name: "Kampfpanzer",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlebond: {
    name: "Freundschaftsakt",
    desc: "Besiegt es ein Ziel, vertieft dies die Freundschaft zu seinem Trainer, wodurch es die Ash-Form annimmt und sein Wasser-Shuriken st\xE4rker wird.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON] ist von der Macht der Freundschaft erf\xFCllt!",
    transform: "[POKEMON] hat die Ash-Form angenommen!"
  },
  beadsofruin: {
    name: "Unheilsjuwelen",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Unheilsjuwelen von [POKEMON] schw\xE4cht die Spezial-Verteidigung aller Pok\xE9mon im Umkreis!"
  },
  beastboost: {
    name: "Bestien-Boost",
    desc: "Erh\xF6ht in jeder Runde, in der es ein anderes Pok\xE9mon besiegt, seinen h\xF6chsten Statuswert.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  berserk: {
    name: "Wutausbruch",
    desc: "Fallen seine KP nach einem Angriff auf die H\xE4lfte des Maximalwerts oder weniger, steigt sein Spezial-Angriff.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  bigpecks: {
    name: "Brustbieter",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  blaze: {
    name: "Gro\xDFbrand",
    desc: "Erh\xF6ht die St\xE4rke von Feuer-Attacken, wenn die KP auf einen gewissen Wert fallen.",
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
    name: "Kugelsicher",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cheekpouch: {
    name: "Backentaschen",
    desc: "Regeneriert beim Konsum von Beeren ungeachtet der Beerensorte KP.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  chillingneigh: {
    name: "Helles Wiehern",
    desc: "Besiegt es ein Pok\xE9mon, st\xF6\xDFt es ein frostiges Wiehern aus und erh\xF6ht damit seinen Angriff.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  chlorophyll: {
    name: "Chlorophyll",
    desc: "Erh\xF6ht bei Sonnenschein die Initiative.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  clearbody: {
    name: "Neutraltorso",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cloudnine: {
    name: "Wolke Sieben",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#airlock"
  },
  colorchange: {
    name: "Farbwechsel",
    desc: "\xC4ndert seinen Typ zu dem der Attacke des Angreifers.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  comatose: {
    name: "Dauerschlaf",
    desc: "Das Pok\xE9mon befindet sich ununterbrochen im Halbschlaf und wacht nie vollst\xE4ndig auf. Es kann jedoch im Schlaf angreifen.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] befindet sich im Halbschlaf!"
  },
  commander: {
    name: "Kommandant",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] wurde von [TARGET] verschluckt und \xFCbernimmt das Kommando!"
  },
  competitive: {
    name: "Unbeugsamkeit",
    desc: "Erh\xF6ht den Spezial-Angriff stark, wenn ein Statuswert gesenkt wurde.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  compoundeyes: {
    name: "Facettenauge",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  contrary: {
    name: "Umkehrung",
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
    name: "Korrosion",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  costar: {
    name: "Synchronauftritt",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cottondown: {
    name: "Wollflaum",
    desc: "Wird es von einem Angriff getroffen, verstreut es Teile seines Wollflaums, wodurch die Initiative aller anderen Pok\xE9mon sinkt.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cudchew: {
    name: "Wiederk\xE4uer",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  curiousmedicine: {
    name: "Kuriose Arznei",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cursedbody: {
    name: "Tastfluch",
    desc: "Blockiert eventuell die Attacke, mit welcher der Angreifer es getroffen hat.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cutecharm: {
    name: "Charmebolzen",
    desc: "Wird dieses Pok\xE9mon durch eine direkte Attacke angegriffen, verliebt sich der Gegner eventuell in es.",
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
    name: "Feuchtigkeit",
    desc: "Befeuchtet die Umgebung und verhindert so den Einsatz von Attacken wie Finale, die Explosionen ausl\xF6sen.",
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
    block: "  [SOURCE] kann [MOVE] nicht einsetzen!"
  },
  dancer: {
    name: "T\xE4nzer",
    desc: "Kann direkt im Anschluss an die Tanz-Attacke eines anderen Pok\xE9mon ebenfalls eine solche einsetzen.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  darkaura: {
    name: "Dunkelaura",
    desc: "Erh\xF6ht die St\xE4rke aller Attacken des Typs Unlicht.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] strahlt eine dunkle Aura aus!"
  },
  dauntlessshield: {
    name: "Wackerer Schild",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  dazzling: {
    name: "Buntk\xF6rper",
    desc: "\xDCberrascht Gegner und hindert sie so daran, Erstschlag-Attacken gegen es einzusetzen.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  defeatist: {
    name: "Schw\xE4chling",
    desc: "Fallen seine KP auf die H\xE4lfte des Maximalwerts oder weniger, bekommt es Angst. Dadurch wird die St\xE4rke seines Angriffs und Spezial-Angriffs halbiert.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  defiant: {
    name: "Siegeswille",
    desc: "Erh\xF6ht den Angriff stark, wenn ein Statuswert gesenkt wurde.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  deltastream: {
    name: "Delta-Wind",
    desc: "\xC4ndert das Wetter, um die Schw\xE4chen des Typs Flug zu beseitigen.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  desolateland: {
    name: "Endland",
    desc: "\xC4ndert das Wetter, um Wasser-Attacken wirkungslos zu machen.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  disguise: {
    name: "Kost\xFCmspuk",
    desc: "Kann ein Mal pro Kampf mit seinem gruseligen Kost\xFCm einen Angriff abwehren.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  Sein Kost\xFCm hat die Attacke absorbiert!",
    transform: "Die Tarnung von [POKEMON] ist aufgeflogen!"
  },
  download: {
    name: "Download",
    desc: "Ist die Spezial-Verteidigung des Gegners h\xF6her als seine Verteidigung, wird der eigene Spezial-Angriff erh\xF6ht. Ist die Verteidigung h\xF6her, steigt der Angriff.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonize: {
    name: "Drachenschicht",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonsmaw: {
    name: "Drachenkiefer",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drizzle: {
    name: "Niesel",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drought: {
    name: "D\xFCrre",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dryskin: {
    name: "Trockenheit",
    desc: "Bei Sonnenschein verliert das Pok\xE9mon KP und der Schaden durch Feuer-Attacken steigt. Bei Regen und Treffern durch Wasser-Attacken regeneriert es KP.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  ([POKEMON] wurde Schaden zugef\xFCgt!)"
  },
  earlybird: {
    name: "Fr\xFChwecker",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  eartheater: {
    name: "Bodenschmaus",
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
    name: "Sporenwirt",
    desc: "Wird dieses Pok\xE9mon durch eine direkte Attacke angegriffen, kann das beim Gegner Paralyse, Vergiftung oder Schlaf ausl\xF6sen.",
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
    name: "Elektro-Erzeuger",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  electromorphosis: {
    name: "Dynamo",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] wurde von [MOVE] getroffen und l\xE4dt sich auf!"
  },
  embodyaspectcornerstone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  Die Fundamentmaske von [POKEMON] funkelt und erh\xF6ht seine Verteidigung!"
  },
  embodyaspecthearthflame: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  Die Ofenmaske von [POKEMON] funkelt und erh\xF6ht seinen Angriff!"
  },
  embodyaspectteal: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  Die T\xFCrkisgr\xFCne Maske von [POKEMON] funkelt und erh\xF6ht seine Initiative!"
  },
  embodyaspectwellspring: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  Die Brunnenmaske von [POKEMON] funkelt und erh\xF6ht seine Spezial-Verteidigung!"
  },
  emergencyexit: {
    name: "R\xFCckzug",
    desc: "Fallen seine KP auf die H\xE4lfte des Maximalwerts oder weniger, bringt es sich in Sicherheit.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  fairyaura: {
    name: "Feenaura",
    desc: "Erh\xF6ht die St\xE4rke aller Attacken des Typs Fee.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] strahlt eine Feenaura aus!"
  },
  filter: {
    name: "Filter",
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
    name: "Flammk\xF6rper",
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
    name: "Hitzewahn",
    desc: "Erh\xF6ht bei Verbrennungen die St\xE4rke von Spezial-Attacken.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  flashfire: {
    name: "Feuerf\xE4nger",
    desc: "Verst\xE4rkt Feuer-Attacken, wenn es von Feuer-Attacken getroffen wird.",
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
    start: "  Die St\xE4rke der Feuer-Attacken von [POKEMON] wurde erh\xF6ht!"
  },
  flowergift: {
    name: "Pflanzengabe",
    desc: "Erh\xF6ht bei Sonnenschein den Angriff und die Spezial-Verteidigung aller Team-Pok\xE9mon.",
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
    name: "Bl\xFCtenh\xFClle",
    desc: "Sch\xFCtzt Mitstreiter vom Typ Pflanze vor dem Senken ihrer Statuswerte sowie vor Statusproblemen.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON] wird von Bl\xFCtenh\xFClle gesch\xFCtzt!"
  },
  fluffy: {
    name: "Flauschigkeit",
    desc: "Halbiert den Schaden, den es durch direkte Attacken nimmt, aber verdoppelt daf\xFCr den durch Feuer-Attacken erlittenen Schaden.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  forecast: {
    name: "Prognose",
    desc: "Nimmt je nach Wetter entweder den Typ Wasser, Feuer oder Eis an.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  forewarn: {
    name: "Vorwarnung",
    desc: "Gibt bei Kampfantritt Auskunft \xFCber eine Attacke aus dem gegnerischen Repertoire.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [MOVE] von [TARGET] wurde enth\xFCllt!",
    activateNoTarget: "  Vorwarnung von [POKEMON]: Konzentration auf [MOVE]!"
  },
  friendguard: {
    name: "Freundeshut",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  frisk: {
    name: "Schn\xFCffler",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON] hat das Item [ITEM] von [TARGET] erschn\xFCffelt!",
    activateNoTarget: "  [POKEMON] hat [ITEM] erschn\xFCffelt!"
  },
  fullmetalbody: {
    name: "Metallprotektor",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  furcoat: {
    name: "Fellkleid",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  galewings: {
    name: "Orkanschwingen",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  galvanize: {
    name: "Elektrohaut",
    desc: "Attacken vom Typ Normal nehmen den Typ Elektro an und ihre St\xE4rke erh\xF6ht sich ein wenig.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gluttony: {
    name: "V\xF6llerei",
    desc: "Setzt bestimmte Beeren nicht erst in einer Notlage ein, sondern bereits dann, wenn seine KP auf die H\xE4lfte des Maximalwerts fallen.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  goodasgold: {
    name: "Goldk\xF6rper",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gooey: {
    name: "Viskosit\xE4t",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gorillatactics: {
    name: "Affenfokus",
    desc: "Erh\xF6ht den Angriff, aber nur die zuerst gew\xE4hlte Attacke kann eingesetzt werden.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grasspelt: {
    name: "Pflanzenpelz",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grassysurge: {
    name: "Gras-Erzeuger",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grimneigh: {
    name: "Dunkles Wiehern",
    desc: "Besiegt es ein Pok\xE9mon, st\xF6\xDFt es ein furchteinfl\xF6\xDFendes Wiehern aus und erh\xF6ht damit seinen Spezial-Angriff.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guarddog: {
    name: "Wachhund",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gulpmissile: {
    name: "W\xFCrggeschoss",
    desc: "Wenn das Pok\xE9mon Surfer oder Taucher einsetzt, f\xE4ngt es sich dabei Beute. Erleidet es anschlie\xDFend Schaden, greift es an, indem es die Beute wieder ausspuckt.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guts: {
    name: "Adrenalin",
    desc: "Bei Statusproblemen setzt es Adrenalin frei und erh\xF6ht so seinen Angriffs-Wert.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hadronengine: {
    name: "Hadronen-Motor",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] erzeugt ein Elektrofeld und setzt dadurch einen futuristischen Motor in Gang!",
    activate: "  [POKEMON] setzt durch das Elektrofeld einen futuristischen Motor in Gang!"
  },
  harvest: {
    name: "Reiche Ernte",
    desc: "Dieselbe Beere kann mehrmals verwendet werden.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    addItem: "  [POKEMON] hat [ITEM] geerntet!"
  },
  healer: {
    name: "Heilherz",
    desc: "Befreit Mitstreiter gelegentlich von Statusproblemen.",
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
    name: "Hitzeschutz",
    desc: "Sein Hitze abweisender K\xF6rper halbiert den durch Feuer-Attacken erlittenen Schaden.",
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
    name: "Schwermetall",
    desc: "Verdoppelt das eigene Gewicht.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  honeygather: {
    name: "Honigmaul",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hospitality: {
    name: "Gastlichkeit",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    heal: "  [POKEMON] trinkt den von [SOURCE] zubereiteten Tee!"
  },
  hugepower: {
    name: "Kraftkoloss",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hungerswitch: {
    name: "Hei\xDFhunger",
    desc: "Das Pok\xE9mon \xE4ndert zum Ende jeder Runde seine Form und wechselt somit zwischen dem Pappsatt- und dem Kohldampfmuster.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hustle: {
    name: "\xDCbereifer",
    desc: "Erh\xF6ht den Angriffs-Wert, aber senkt die Genauigkeit.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hydration: {
    name: "Hydration",
    desc: "Heilt bei Regen Statusprobleme.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  hypercutter: {
    name: "Scherenmacht",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  icebody: {
    name: "Eishaut",
    desc: "Regeneriert bei Hagel nach und nach KP.",
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
    name: "Tiefk\xFChlkopf",
    desc: "Der Eisblock um seinen Kopf blockt eine physische Attacke ab. Dies bewirkt jedoch einen Formwechsel. Durch Hagel wird der Eisblock wiederhergestellt.",
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
    name: "Eisfl\xFCgelstaub",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  illuminate: {
    name: "Erleuchtung",
    desc: "Erhellt die Umgebung und erh\xF6ht dadurch die Wahrscheinlichkeit, wilden Pok\xE9mon zu begegnen.",
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
    name: "Trugbild",
    desc: "F\xFChrt den Gegner hinters Licht, indem es bei Kampfantritt die Gestalt des Pok\xE9mon an der letzten Stelle im Team annimmt.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    end: "  Das Trugbild von [POKEMON] verschwindet!"
  },
  immunity: {
    name: "Immunit\xE4t",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  imposter: {
    name: "Doppelg\xE4nger",
    desc: "K\xE4mpft als Kopie seines Gegen\xFCbers.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  infiltrator: {
    name: "Schwebedurch",
    desc: "\xDCberwindet gegnerische Schilde sowie Delegatoren und greift an.",
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
    name: "Magenkrempler",
    desc: "Wird es durch eine Attacke besiegt, f\xFCgt es dem Angreifer Schaden in H\xF6he des KP-Werts zu, den es besa\xDF, bevor es kampfunf\xE4hig wurde.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#aftermath"
  },
  innerfocus: {
    name: "Konzentrator",
    desc: "Verhindert durch erh\xF6hte Konzentrationsf\xE4higkeit Zur\xFCckschrecken.",
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
    name: "Insomnia",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  intimidate: {
    name: "Bedroher",
    desc: "Senkt den Angriff der Gegner, indem es sie gleich zu Kampfantritt bedroht und einsch\xFCchtert.",
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
    name: "K\xFChnes Schwert",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  ironbarbs: {
    name: "Eisenstachel",
    desc: "F\xFCgt dem Angreifer bei Ber\xFChrung mit eisernen Stacheln Schaden zu.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#roughskin"
  },
  ironfist: {
    name: "Eisenfaust",
    desc: "Erh\xF6ht die St\xE4rke von Hieb-, Punch-, Faust- und Schlag-Attacken.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  justified: {
    name: "Redlichkeit",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  keeneye: {
    name: "Adlerauge",
    desc: "Sein scharfer Blick hindert Angreifer daran, seine Genauigkeit zu senken.",
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
    name: "Tollpatsch",
    desc: "Das Pok\xE9mon kann keine getragenen Items verwenden.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  leafguard: {
    name: "Floraschild",
    desc: "Verhindert bei Sonnenschein Statusprobleme.",
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
    name: "Schwebe",
    desc: "Verleiht volle Immunit\xE4t gegen alle Boden-Attacken durch Schwebezustand.",
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
    name: "Libero",
    desc: "Das Pok\xE9mon nimmt bei Einsatz einer Attacke deren Typ an.",
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
    name: "Leichtmetall",
    desc: "Halbiert das eigene Gewicht.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lightningrod: {
    name: "Blitzf\xE4nger",
    desc: "Zieht Elektro-Attacken an. Statt durch diese Schaden zu nehmen, erh\xF6ht es den eigenen Spezial-Angriff.",
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
    activate: "  [POKEMON] zieht den Angriff auf sich!"
  },
  limber: {
    name: "Flexibilit\xE4t",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lingeringaroma: {
    name: "Duftschwade",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "  [TARGET] haftet ein penetranter Geruch an!"
  },
  liquidooze: {
    name: "Kloakenso\xDFe",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  [POKEMON] saugt Kloakenso\xDFe auf!"
  },
  liquidvoice: {
    name: "Pl\xE4tscherstimme",
    desc: "Bewirkt, dass alle L\xE4rm-Attacken des Pok\xE9mon den Typ Wasser annehmen.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  longreach: {
    name: "Langstrecke",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magicbounce: {
    name: "Magiespiegel",
    desc: "Lenkt Status-Attacken auf den Angreifer um, ohne selbst von ihnen getroffen zu werden.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    move: "#magiccoat"
  },
  magicguard: {
    name: "Magieschild",
    desc: "Das Pok\xE9mon nimmt nur durch Offensiv-Attacken Schaden.",
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
    name: "Zauberer",
    desc: "Trifft das Pok\xE9mon ein Ziel mit einer Attacke, kann es ihm dabei sein Item stehlen.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magmaarmor: {
    name: "Magmapanzer",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magnetpull: {
    name: "Magnetfalle",
    desc: "Hindert Stahl-Pok\xE9mon durch Magnetismus an der Flucht.",
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
    name: "Notschutz",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megalauncher: {
    name: "Megawumme",
    desc: "Erh\xF6ht die St\xE4rke einiger Wellen-, Aura- und Puls-Attacken.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megasol: {
    name: "Mega-Solarladung",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  merciless: {
    name: "Qu\xE4lerei",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mimicry: {
    name: "Mimese",
    desc: "Der Typ des Pok\xE9mon \xE4ndert sich in Abh\xE4ngigkeit vom Zustand des Feldes.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] nimmt wieder seinen urspr\xFCnglichen Typ an!"
  },
  mindseye: {
    name: "Geistiges Auge",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  minus: {
    name: "Minus",
    desc: "Erh\xF6ht den Spezial-Angriff, wenn das Pok\xE9mon einen Mitstreiter mit der F\xE4higkeit Plus oder Minus hat.",
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
    name: "Spiegelr\xFCstung",
    desc: "Lenkt ausschlie\xDFlich Effekte, welche die Statuswerte des Pok\xE9mon senken w\xFCrden, auf den Angreifer um.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mistysurge: {
    name: "Nebel-Erzeuger",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moldbreaker: {
    name: "\xDCberbr\xFCckung",
    desc: "Attacken k\xF6nnen ungeachtet der F\xE4higkeiten des Zieles verwendet werden.",
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
    start: "  [POKEMON] gelingt es, gegnerische F\xE4higkeiten zu \xFCberbr\xFCcken!"
  },
  moody: {
    name: "Gef\xFChlswippe",
    desc: "Erh\xF6ht in jeder Runde aufs Neue einen Statuswert stark und senkt einen anderen.",
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
    name: "Starthilfe",
    desc: "Treffer durch Elektro-Attacken verursachen keinen Schaden, sondern geben dem Pok\xE9mon eine Starthilfe und erh\xF6hen so seine Initiative.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moxie: {
    name: "Hochmut",
    desc: "Besiegt es ein Pok\xE9mon, steigt sein Selbstvertrauen und somit auch sein Angriff.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multiscale: {
    name: "Multischuppe",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multitype: {
    name: "Variabilit\xE4t",
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
    name: "Mumie",
    desc: "\xDCbertr\xE4gt bei Ber\xFChrung die F\xE4higkeit Mumie auf den Angreifer.",
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
    changeAbility: "  [TARGET] hat die F\xE4higkeit Mumie angenommen!"
  },
  myceliummight: {
    name: "Myzelienkraft",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  naturalcure: {
    name: "Innere Kraft",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  neuroforce: {
    name: "Zerebralmacht",
    desc: "Erh\xF6ht die St\xE4rke von sehr effektiven Attacken.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  neutralizinggas: {
    name: "Reaktionsgas",
    desc: "Solange ein Pok\xE9mon mit der F\xE4higkeit Reaktionsgas am Kampf beteiligt ist, werden die F\xE4higkeiten aller anderen Pok\xE9mon unterdr\xFCckt oder aufgehoben.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  Reaktionsgas hat sich in der Umgebung ausgebreitet!",
    end: "  Das Reaktionsgas h\xF6rt auf zu wirken!"
  },
  noguard: {
    name: "Schildlos",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  normalize: {
    name: "Regulierung",
    desc: "Alle Attacken des Pok\xE9mon nehmen den Typ Normal an und ihre St\xE4rke erh\xF6ht sich ein wenig.",
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
    name: "D\xF6sigkeit",
    desc: "Das Pok\xE9mon ist so apathisch, dass es nicht bet\xF6rt oder provoziert werden kann.",
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
    name: "Profiteur",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  orichalcumpulse: {
    name: "Orichalkum-Puls",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] verst\xE4rkt das Sonnenlicht und entfesselt dadurch einen urzeitlichen Puls!",
    activate: "  [POKEMON] badet im Sonnenlicht und entfesselt dadurch einen urzeitlichen Puls!"
  },
  overcoat: {
    name: "Partikelschutz",
    desc: "Nimmt weder durch Wetterlagen wie Sandsturm oder Hagel noch durch Pulver oder Puder Schaden.",
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
    name: "Notd\xFCnger",
    desc: "Erh\xF6ht die St\xE4rke von Pflanzen-Attacken, wenn die KP auf einen gewissen Wert fallen.",
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
    name: "Tempomacher",
    desc: "Das Pok\xE9mon l\xE4sst sich nicht aus der Ruhe bringen und verhindert so Verwirrung.",
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
    name: "Familienbande",
    desc: "Zwei Generationen setzen jeweils ein Mal zum Angriff an.",
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
    name: "Pastellh\xFClle",
    desc: "Sch\xFCtzt das Pok\xE9mon und seine Mitstreiter vor Vergiftung.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  perishbody: {
    name: "Unheilsk\xF6rper",
    desc: "Erleidet es einen Treffer von einer direkten Attacke, wird es zusammen mit dem Angreifer nach drei Runden besiegt. Rettung ist durch Austausch m\xF6glich.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Beide Pok\xE9mon gehen nach drei Runden K.O.!"
  },
  pickpocket: {
    name: "Langfinger",
    desc: "Stiehlt das Item des Angreifers bei Ber\xFChrung.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pickup: {
    name: "Mitnahme",
    desc: "Hebt gelegentlich von Gegnern benutzte Items auf. Dies geschieht nicht nur w\xE4hrend K\xE4mpfen, sondern auch unterwegs.",
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
    name: "Stichbohrer",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pixilate: {
    name: "Feenschicht",
    desc: "Attacken vom Typ Normal nehmen den Typ Fee an und ihre St\xE4rke erh\xF6ht sich ein wenig.",
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
    name: "Plus",
    desc: "Erh\xF6ht den Spezial-Angriff, wenn das Pok\xE9mon einen Mitstreiter mit der F\xE4higkeit Plus oder Minus hat.",
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
    name: "Aufheber",
    desc: "Das Pok\xE9mon erleidet keinen Schaden durch Vergiftung, sondern regeneriert KP.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisonpoint: {
    name: "Giftdorn",
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
    name: "Giftpuppenspiel",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisontouch: {
    name: "Giftgriff",
    desc: "Kann das Ziel durch blo\xDFes Ber\xFChren vergiften.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  powerconstruct: {
    name: "Scharwandel",
    desc: "Fallen seine KP auf die H\xE4lfte des Maximalwerts oder weniger, eilen ihm weitere Zellen zu Hilfe und es nimmt die Optimumform an.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  Du sp\xFCrst die Pr\xE4senz vieler Zellen...!",
    transform: "[POKEMON] hat die Optimumform angenommen!"
  },
  powerofalchemy: {
    name: "Chemiekraft",
    desc: "Wechselt seine F\xE4higkeit zu der eines kampfunf\xE4hig gewordenen Mitstreiters.",
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
    name: "Kraftquelle",
    desc: "Erh\xF6ht bei direkt benachbarten Pok\xE9mon die St\xE4rke von Attacken.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prankster: {
    name: "Strolch",
    desc: "Erm\xF6glicht einen Erstschlag mit Status-Attacken.",
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
    name: "Erzwinger",
    desc: "Zwingt Gegner dazu, beim Einsatz von Attacken mehr AP zu verbrauchen.",
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
    start: "  [POKEMON] setzt Gegner mit Erzwinger unter Druck!"
  },
  primordialsea: {
    name: "Urmeer",
    desc: "\xC4ndert das Wetter, um Feuer-Attacken wirkungslos zu machen.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prismarmor: {
    name: "Prismar\xFCstung",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  propellertail: {
    name: "Schraubflosse",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  protean: {
    name: "Wandlungskunst",
    desc: "Das Pok\xE9mon nimmt bei Einsatz einer Attacke deren Typ an.",
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
    name: "Pal\xE4osynthese",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] leitet dank des Sonnenscheins die Pal\xE4osynthese ein!",
    activateFromItem: "  [POKEMON] nutzt das Item Energiekapsel, um die Pal\xE4osynthese einzuleiten.",
    start: "  [STAT] von [POKEMON] wird verst\xE4rkt!",
    end: "  Der Effekt der Pal\xE4osynthese von [POKEMON] l\xE4sst nach!"
  },
  psychicsurge: {
    name: "Psycho-Erzeuger",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  punkrock: {
    name: "Punk Rock",
    desc: "Erh\xF6ht die St\xE4rke von eigenen L\xE4rm-Attacken und halbiert den Schaden, den das Pok\xE9mon selbst durch L\xE4rm-Attacken erleidet.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purepower: {
    name: "Mentalkraft",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purifyingsalt: {
    name: "L\xE4utersalz",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  quarkdrive: {
    name: "Quantenantrieb",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] aktiviert dank des Elektrofelds den Quantenantrieb!",
    activateFromItem: "  [POKEMON] nutzt das Item Energiekapsel, um den Quantenantrieb zu aktivieren.",
    start: "  [STAT] von [POKEMON] wird verst\xE4rkt!",
    end: "  Der Effekt des Quantenantriebs von [POKEMON] l\xE4sst nach!"
  },
  queenlymajesty: {
    name: "Majest\xE4t",
    desc: "Sch\xFCchtert Gegner ein und hindert sie so daran, Erstschlag-Attacken gegen es einzusetzen.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  quickdraw: {
    name: "Schnellschuss",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  Durch Schnellschuss kann [POKEMON] schneller handeln als sonst!"
  },
  quickfeet: {
    name: "Rasanz",
    desc: "Erh\xF6ht bei Statusproblemen die Initiative.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  raindish: {
    name: "Regengenuss",
    desc: "Regeneriert bei Regen nach und nach KP.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  rattled: {
    name: "Hasenfu\xDF",
    desc: "Wird es von einer Unlicht-, Geister- oder K\xE4fer-Attacke getroffen, bekommt es Angst und seine Initiative steigt.",
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
    name: "Receiver",
    desc: "Wird einer seiner Mitstreiter besiegt, erh\xE4lt es dessen F\xE4higkeit.",
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
    changeAbility: "  Die F\xE4higkeit [ABILITY] von [SOURCE] wurde \xFCbernommen!"
  },
  reckless: {
    name: "Achtlos",
    desc: "Erh\xF6ht die St\xE4rke von Attacken mit R\xFCcksto\xDFschaden.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  refrigerate: {
    name: "Frostschicht",
    desc: "Attacken vom Typ Normal nehmen den Typ Eis an und ihre St\xE4rke erh\xF6ht sich ein wenig.",
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
    name: "Belebekraft",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  ripen: {
    name: "Heranreifen",
    desc: "Verdoppelt den Effekt von Beeren, indem es sie heranreifen l\xE4sst.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rivalry: {
    name: "Rivalit\xE4t",
    desc: "Greift es einen Rivalen desselben Geschlechts an, wird es st\xE4rker. Greift es ein Ziel des anderen Geschlechts an, wird es schw\xE4cher.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rkssystem: {
    name: "Alpha-System",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rockhead: {
    name: "Steinhaupt",
    desc: "Verhindert Schaden, der durch R\xFCcksto\xDF entstehen w\xFCrde.",
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
    name: "Steintr\xE4ger",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  roughskin: {
    name: "Rauhaut",
    desc: "Angreifer werden durch die raue Haut des Pok\xE9mon bei direkten Attacken verletzt.",
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
    damage: "  [POKEMON] wurde Schaden zugef\xFCgt!"
  },
  runaway: {
    name: "Angsthase",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandforce: {
    name: "Sandgewalt",
    desc: "Erh\xF6ht in Sandst\xFCrmen die St\xE4rke von Gesteins-, Boden- und Stahl-Attacken.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandrush: {
    name: "Sandscharrer",
    desc: "Erh\xF6ht in Sandst\xFCrmen die Initiative.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandspit: {
    name: "Sandspeier",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sandstream: {
    name: "Sandsturm",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandveil: {
    name: "Sandschleier",
    desc: "Erh\xF6ht in Sandst\xFCrmen den Ausweichwert.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sapsipper: {
    name: "Vegetarier",
    desc: "Wird es von einer Pflanzen-Attacke getroffen, erleidet es keinerlei Schaden und sein Angriff steigt.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  schooling: {
    name: "Fischschwarm",
    desc: "Verf\xFCgt es \xFCber einen hohen KP-Wert, wird es zu einem Schwarm und gewinnt an St\xE4rke. Ist der KP-Wert niedrig, l\xF6st sich der Schwarm wieder auf.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON] hat einen Schwarm gebildet!",
    transformEnd: "Der Schwarm von [POKEMON] hat sich zerstreut!"
  },
  scrappy: {
    name: "Rauflust",
    desc: "Bewirkt, dass Normal- und Kampf-Attacken auch Pok\xE9mon vom Typ Geist treffen k\xF6nnen.",
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
    name: "Hemmungslos",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  seedsower: {
    name: "Streusaat",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  serenegrace: {
    name: "Edelmut",
    desc: "Erh\xF6ht die Wahrscheinlichkeit, dass Zusatzeffekte von Attacken auftreten.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  shadowshield: {
    name: "Phantomschutz",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shadowtag: {
    name: "Wegsperre",
    desc: "Hindert Gegner an der Flucht beziehungsweise am Auswechseln, indem es ihnen den Weg versperrt.",
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
    name: "Scharfkantig",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shedskin: {
    name: "Expidermis",
    desc: "Das Pok\xE9mon befreit sich eventuell von Statusproblemen, indem es seine Haut abstreift.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sheerforce: {
    name: "Rohe Gewalt",
    desc: "Erh\xF6ht die St\xE4rke von Attacken, aber hebt daf\xFCr ihre Zusatzeffekte auf.",
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
    name: "Panzerhaut",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shielddust: {
    name: "Puderabwehr",
    desc: "Blockiert durch Puder die Zusatzeffekte gegnerischer Angriffe.",
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
    name: "Limitschild",
    desc: "Fallen seine KP auf die H\xE4lfte des Maximalwerts oder weniger, zerbricht die Panzerung des Pok\xE9mon und es wird aggressiver.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "Limitschild wird aktiviert!",
    transformEnd: "Limitschild wird aufgehoben!"
  },
  simple: {
    name: "Wankelmut",
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
    name: "Wertelink",
    desc: "Landet mit Serien-Attacken immer die maximale Anzahl an Treffern.",
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
    name: "Saumselig",
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
    start: "  [POKEMON] kommt nicht in Fahrt!",
    end: "  [POKEMON] kriegt schlie\xDFlich doch noch die Kurve!"
  },
  slushrush: {
    name: "Schneescharrer",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sniper: {
    name: "Supersch\xFCtze",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  snowcloak: {
    name: "Schneemantel",
    desc: "Erh\xF6ht bei Hagel den Ausweichwert.",
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
    name: "Hagelalarm",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solarpower: {
    name: "Solarkraft",
    desc: "F\xFChrt bei Sonnenschein in jeder Runde zu KP-Verlusten, erh\xF6ht aber den Spezial-Angriff.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solidrock: {
    name: "Felskern",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soulheart: {
    name: "Seelenherz",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soundproof: {
    name: "L\xE4rmschutz",
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
    name: "Temposchub",
    desc: "Erh\xF6ht in jeder Runde die Initiative.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  spicyspray: {
    name: "Chilispritzer",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stakeout: {
    name: "Beschattung",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stall: {
    name: "Zeitspiel",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stalwart: {
    name: "Stahlr\xFCckgrat",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stamina: {
    name: "Z\xE4higkeit",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stancechange: {
    name: "Taktikwechsel",
    desc: "Setzt das Pok\xE9mon eine Offensiv-Attacke ein, nimmt es die Klingenform an. Setzt es danach die Attacke K\xF6nigsschild ein, nimmt es die Schildform an.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    transform: "Formwechsel zur Klingenform!",
    transformEnd: "Formwechsel zur Schildform!"
  },
  static: {
    name: "Statik",
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
    name: "Felsenfest",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steamengine: {
    name: "Dampfantrieb",
    desc: "Wird es von einer Wasser- oder Feuer-Attacke getroffen, steigt seine Initiative drastisch.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelworker: {
    name: "Stahlprofi",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelyspirit: {
    name: "St\xE4hlerner Wille",
    desc: "Erh\xF6ht die St\xE4rke von Stahl-Attacken auf Mitstreiterseite.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stench: {
    name: "Duftnote",
    desc: "L\xE4sst das Ziel beim Angriff eventuell durch Gestank zur\xFCckschrecken.",
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
    name: "Klebek\xF6rper",
    desc: "Tr\xE4gt es ein Item, bleibt dieses an seinem klebrigen K\xF6rper haften, wodurch Item-Diebstahl verhindert wird.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  [POKEMON] konnte kein Item abgenommen werden!"
  },
  stormdrain: {
    name: "Sturmsog",
    desc: "Zieht Wasser-Attacken an. Statt durch diese Schaden zu nehmen, erh\xF6ht es den eigenen Spezial-Angriff.",
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
    name: "Titankiefer",
    desc: "Der kr\xE4ftige Kiefer des Pok\xE9mon erh\xF6ht die St\xE4rke von Biss-Attacken.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sturdy: {
    name: "Robustheit",
    desc: "Bietet Schutz gegen K.O.-Attacken. Bei vollen KP \xFCbersteht das Pok\xE9mon auch K.O.-Treffer.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON] \xFCbersteht die Attacke!"
  },
  suctioncups: {
    name: "Saugnapf",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON] verankert sich mithilfe von Saugnapf!"
  },
  superluck: {
    name: "Gl\xFCckspilz",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  supersweetsyrup: {
    name: "S\xFC\xDFer Nektar",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Der Nektar von [POKEMON] verstr\xF6mt einen s\xFC\xDFen Geruch!"
  },
  supremeoverlord: {
    name: "Feldherr",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] gewinnt durch gefallene Mitstreiter an Kraft!"
  },
  surgesurfer: {
    name: "Surf-Schweif",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  swarm: {
    name: "Hexaplaga",
    desc: "Erh\xF6ht die St\xE4rke von K\xE4fer-Attacken, wenn die KP auf einen gewissen Wert fallen.",
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
    name: "Zuckerh\xFClle",
    desc: "Alle Team-Pok\xE9mon k\xF6nnen nicht einschlafen.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON] schl\xE4ft aufgrund von Zuckerh\xFClle nicht ein!"
  },
  swiftswim: {
    name: "Wassertempo",
    desc: "Erh\xF6ht bei Regen die Initiative.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  swordofruin: {
    name: "Unheilsschwert",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Unheilsschwert von [POKEMON] schw\xE4cht die Verteidigung aller Pok\xE9mon im Umkreis!"
  },
  symbiosis: {
    name: "Nutznie\xDFer",
    desc: "Gibt Mitstreitern, die ihr Item aufgebraucht haben, sein eigenes Item.",
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
    activate: "  [POKEMON] gibt [TARGET] das Item [ITEM] zum Tragen!"
  },
  synchronize: {
    name: "Synchro",
    desc: "Erleidet das Pok\xE9mon Verbrennungen, Vergiftungen oder Paralyse, ereilt das jeweilige Statusproblem auch den Verursacher.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  tabletsofruin: {
    name: "Unheilstafeln",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Unheilstafeln von [POKEMON] schw\xE4cht den Angriff aller Pok\xE9mon im Umkreis!"
  },
  tangledfeet: {
    name: "Fu\xDFangel",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  tanglinghair: {
    name: "Lockenkopf",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  technician: {
    name: "Techniker",
    desc: "Erh\xF6ht die St\xE4rke von schw\xE4cheren Attacken.",
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
    name: "Telepathie",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON] nimmt keinen Schaden durch Angriffe von Mitstreitern!"
  },
  teraformzero: {
    name: "Teraforming Null",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  terashell: {
    name: "Tera-Panzer",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  Der Panzer von [POKEMON] funkelt und verzerrt die Wechselwirkungen zwischen den Typen!"
  },
  terashift: {
    name: "Tera-Wandel",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON] verwandelt sich!"
  },
  teravolt: {
    name: "Teravolt",
    desc: "Attacken k\xF6nnen ungeachtet der F\xE4higkeit des Zieles eingesetzt werden.",
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
    start: "  [POKEMON] strahlt eine knisternde Aura aus!"
  },
  thermalexchange: {
    name: "Thermowandel",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  thickfat: {
    name: "Speckschicht",
    desc: "Das Pok\xE9mon wird von einer dicken Fettschicht gesch\xFCtzt, was den durch Feuer- und Eis-Attacken erlittenen Schaden halbiert.",
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
    name: "Aufwertung",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  torrent: {
    name: "Sturzbach",
    desc: "Erh\xF6ht die St\xE4rke von Wasser-Attacken, wenn die KP auf einen gewissen Wert fallen.",
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
    name: "Krallenwucht",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicboost: {
    name: "Giftwahn",
    desc: "Erh\xF6ht bei Vergiftungen die St\xE4rke von physischen Attacken.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicchain: {
    name: "Giftkette",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicdebris: {
    name: "Giftbelag",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  trace: {
    name: "Erfassen",
    desc: "Kopiert bei Kampfantritt die F\xE4higkeit eines Gegners.",
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
    changeAbility: "  F\xE4hrte von [POKEMON] erkennt [ABILITY] von [SOURCE]!"
  },
  transistor: {
    name: "Transistor",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  triage: {
    name: "Heilwandel",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  truant: {
    name: "Schnarchnase",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    cant: "[POKEMON] faulenzt!"
  },
  turboblaze: {
    name: "Turbobrand",
    desc: "Attacken k\xF6nnen ungeachtet der F\xE4higkeit des Zieles eingesetzt werden.",
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
    start: "  [POKEMON] strahlt eine lodernde Aura aus!"
  },
  unaware: {
    name: "Unkenntnis",
    desc: "Greift das Pok\xE9mon an, ignoriert es s\xE4mtliche Statusver\xE4nderungen des Zieles.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unburden: {
    name: "Entlastung",
    desc: "Wenn das von ihm getragene Item verwendet wird oder verloren geht, erh\xF6ht dies seine Initiative.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unnerve: {
    name: "Anspannung",
    desc: "Erzeugt bei Gegnern Stress und hindert sie so daran, Beeren zu konsumieren.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [TEAM:capitalize] kriegen vor Anspannung keine Beeren mehr runter!"
  },
  unseenfist: {
    name: "Verborgene Faust",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    champions: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "Unheilsgef\xE4\xDF",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Unheilsgef\xE4\xDF von [POKEMON] schw\xE4cht den Spezial-Angriff aller Pok\xE9mon im Umkreis!"
  },
  victorystar: {
    name: "Triumphstern",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  vitalspirit: {
    name: "Munterkeit",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  voltabsorb: {
    name: "Voltabsorber",
    desc: "Treffer durch Elektro-Attacken verursachen keinen Schaden, sondern regenerieren stattdessen KP.",
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
    name: "Rastlose Seele",
    desc: "Wird das Pok\xE9mon von einer direkten Attacke getroffen, tauscht es seine F\xE4higkeit mit der des Angreifers.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "#skillswap"
  },
  waterabsorb: {
    name: "H2O-Absorber",
    desc: "Treffer durch Wasser-Attacken verursachen keinen Schaden, sondern regenerieren stattdessen KP.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterbubble: {
    name: "Wasserblase",
    desc: "Feuer-Attacken f\xFCgen dem Pok\xE9mon weniger Schaden zu. Verhindert Verbrennungen.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  watercompaction: {
    name: "Verklumpen",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterveil: {
    name: "Aquah\xFClle",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  weakarmor: {
    name: "Bruchr\xFCstung",
    desc: "Senkt bei erlittenem Treffer durch eine physische Attacke die Verteidigung des Pok\xE9mon, aber erh\xF6ht daf\xFCr seine Initiative stark.",
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
    name: "Knusperkruste",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  whitesmoke: {
    name: "Pulverrauch",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wimpout: {
    name: "Rei\xDFaus",
    desc: "Fallen seine KP auf die H\xE4lfte des Maximalwerts oder weniger, zieht es sich \xE4ngstlich zur\xFCck.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  windpower: {
    name: "Windkraft",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#electromorphosis"
  },
  windrider: {
    name: "Windreiter",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wonderguard: {
    name: "Wunderwache",
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
    name: "Wunderhaut",
    desc: "Wehrt mit robustem K\xF6rper viele Status-Attacken ab.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  zenmode: {
    name: "Trance-Modus",
    desc: "Fallen seine KP auf die H\xE4lfte des Maximalwerts oder weniger, wechselt es seine Gestalt.",
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
    transform: "Es verf\xE4llt in den Trance-Modus!",
    transformEnd: "Es verl\xE4sst den Trance-Modus!"
  },
  zerotohero: {
    name: "Superwechsel",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] hat sich verwandelt und ist zur\xFCckgekehrt!"
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
