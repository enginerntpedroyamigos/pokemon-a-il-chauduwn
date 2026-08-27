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
    name: "Adaptabilit\xE9",
    desc: "Quand le Pok\xE9mon utilise une capacit\xE9 du m\xEAme type que lui, le bonus de puissance qu'elle re\xE7oit est encore plus important que normalement.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aerilate: {
    name: "Peau C\xE9leste",
    desc: "Les capacit\xE9s de type Normal deviennent de type Vol. Leur puissance augmente l\xE9g\xE8rement.",
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
    name: "Boom Final",
    desc: "Si le Pok\xE9mon est mis K.O. par une attaque directe, il inflige des d\xE9g\xE2ts \xE0 l\u2019attaquant avant de s\u2019\xE9vanouir.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "  [POKEMON] est bless\xE9 !"
  },
  airlock: {
    name: "Air Lock",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Les effets de la m\xE9t\xE9o se dissipent !"
  },
  analytic: {
    name: "Analyste",
    desc: "Augmente la puissance des capacit\xE9s du Pok\xE9mon s\u2019il attaque en dernier.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  angerpoint: {
    name: "Col\xE9rique",
    desc: "Si le Pok\xE9mon subit un coup critique, il entre dans une col\xE8re noire qui augmente son Attaque au maximum.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    boost: "  [POKEMON] monte son Attaque au maximum !"
  },
  angershell: {
    name: "Courroupace",
    desc: "Le Pok\xE9mon enrage s\u2019il a moins de la moiti\xE9 de ses PV apr\xE8s avoir subi une attaque. Sa D\xE9f. et sa D\xE9f. Sp\xE9. baissent, et son Atq., son Atq. Sp\xE9. et sa Vit. augmentent.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  anticipation: {
    name: "Anticipation",
    desc: "Le Pok\xE9mon devine si l'adversaire conna\xEEt une capacit\xE9 dangereuse pour lui.",
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
    activate: "  [POKEMON] est tout tremblant !"
  },
  arenatrap: {
    name: "Pi\xE8ge Sable",
    desc: "Emp\xEAche l'adversaire de quitter le terrain.",
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
    name: "Armure Caudale",
    desc: "Une \xE9trange queue recouvre la t\xEAte du Pok\xE9mon, ce qui emp\xEAche ce dernier et ses alli\xE9s d\u2019\xEAtre vis\xE9s par une capacit\xE9 prioritaire.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  aromaveil: {
    name: "Aroma-Voile",
    desc: "Prot\xE8ge le Pok\xE9mon et ses alli\xE9s des effets limitant le libre arbitre.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON] est prot\xE9g\xE9 par Aroma-Voile !"
  },
  asone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] a deux talents !"
  },
  asoneglastrier: {
    name: "Osmose \xC9quine",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  asonespectrier: {
    name: "Osmose \xC9quine",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aurabreak: {
    name: "Aura Invers\xE9e",
    desc: "Inverse l\u2019effet des talents \xAB Aura \xBB afin que ceux-ci baissent la puissance des capacit\xE9s affect\xE9es au lieu de l\u2019augmenter.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] inverse toutes les auras !"
  },
  baddreams: {
    name: "Mauvais R\xEAve",
    desc: "Inflige des d\xE9g\xE2ts aux ennemis endormis.",
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
    damage: "  [POKEMON] a le sommeil agit\xE9 !"
  },
  ballfetch: {
    name: "Ramasse Ball",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battery: {
    name: "Batterie",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlearmor: {
    name: "Armurbaston",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlebond: {
    name: "Synergie",
    desc: "En battant un ennemi, ce Pok\xE9mon renforce ses liens avec son Dresseur, ce qui augmente son Attaque, son Attaque Sp\xE9ciale et sa Vitesse.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON] sent la force de la synergie !",
    transform: "[POKEMON] se transforme en Sachanobi !"
  },
  beadsofruin: {
    name: "Perles du Fl\xE9au",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Les Perles du Fl\xE9au [POKEMON:de] affaiblissent la D\xE9fense Sp\xE9ciale des Pok\xE9mon alentour !"
  },
  beastboost: {
    name: "Boost Chim\xE8re",
    desc: "Augmente la stat la plus \xE9lev\xE9e du Pok\xE9mon quand il met K.O. un autre Pok\xE9mon.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  berserk: {
    name: "Folle Furie",
    desc: "Augmente l\u2019Attaque Sp\xE9ciale du Pok\xE9mon lorsque ses PV tombent \xE0 la moiti\xE9 \xE0 cause d\u2019une attaque de l\u2019adversaire.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  bigpecks: {
    name: "C\u0153ur de Coq",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  blaze: {
    name: "Brasier",
    desc: "Augmente la puissance des capacit\xE9s de type Feu du Pok\xE9mon quand il a perdu une certaine quantit\xE9 de PV.",
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
    name: "Pare-Balles",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cheekpouch: {
    name: "Bajoues",
    desc: "Le Pok\xE9mon r\xE9cup\xE8re des PV lorsqu\u2019il consomme n\u2019importe quelle Baie en plus de b\xE9n\xE9ficier de ses effets habituels.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  chillingneigh: {
    name: "Blanche Ruade",
    desc: "Quand le Pok\xE9mon met un ennemi K.O., il \xE9met un hennissement gla\xE7ant, ce qui augmente son Attaque.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  chlorophyll: {
    name: "Chlorophylle",
    desc: "Augmente la Vitesse du Pok\xE9mon s'il y a du soleil.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  clearbody: {
    name: "Corps Sain",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cloudnine: {
    name: "Ciel Gris",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#airlock"
  },
  colorchange: {
    name: "Homochromie",
    desc: "Lorsque le Pok\xE9mon est touch\xE9 par une capacit\xE9, il prend le type de celle-ci.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  comatose: {
    name: "Hypersommeil",
    desc: "Le Pok\xE9mon r\xEAve en permanence et ne se r\xE9veille jamais. Il est capable d\u2019attaquer normalement tout en dormant.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] est en Hypersommeil !"
  },
  commander: {
    name: "Commandant",
    desc: "Si un Oyacata alli\xE9 est sur le terrain quand ce Pok\xE9mon rejoint le combat, ce dernier entre dans sa bouche et devient son commandant.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] a \xE9t\xE9 aval\xE9 par [TARGET] et devient son commandant."
  },
  competitive: {
    name: "Battant",
    desc: "Augmente beaucoup l\u2019Attaque Sp\xE9ciale du Pok\xE9mon quand ses stats ont \xE9t\xE9 baiss\xE9es par l\u2019adversaire.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  compoundeyes: {
    name: "\u0152il Compos\xE9",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  contrary: {
    name: "Contestation",
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
    name: "Corrosion",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  costar: {
    name: "Collab",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cottondown: {
    name: "Effilochage",
    desc: "Quand le Pok\xE9mon est touch\xE9 par une attaque, il diss\xE9mine des aigrettes qui diminuent la Vitesse de tout le monde, sauf la sienne.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cudchew: {
    name: "Ruminant",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  curiousmedicine: {
    name: "Breuvage Suspect",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cursedbody: {
    name: "Corps Maudit",
    desc: "Quand le Pok\xE9mon est touch\xE9 par une capacit\xE9 adverse, il inflige parfois Entrave sur celle-ci.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cutecharm: {
    name: "Joli Sourire",
    desc: "Peut s\xE9duire l'attaquant lorsque le Pok\xE9mon subit une attaque directe.",
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
    name: "Moiteur",
    desc: "Le Pok\xE9mon augmente l'humidit\xE9 de l'air, ce qui emp\xEAche tous les Pok\xE9mon d'utiliser des capacit\xE9s explosives telles que Destruction.",
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
    block: "  [SOURCE] ne peut pas utiliser la capacit\xE9 [MOVE] !"
  },
  dancer: {
    name: "Danseuse",
    desc: "Si n\u2019importe quel Pok\xE9mon utilise une capacit\xE9 dansante, le Pok\xE9mon utilise imm\xE9diatement cette danse lui aussi.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  darkaura: {
    name: "Aura T\xE9n\xE9breuse",
    desc: "Augmente la puissance des capacit\xE9s de type T\xE9n\xE8bres de tous les Pok\xE9mon.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] d\xE9gage une aura t\xE9n\xE9breuse !"
  },
  dauntlessshield: {
    name: "\xC9gide Inflexible",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  dazzling: {
    name: "Corps Color\xE9",
    desc: "L\u2019adversaire est abasourdi par le Pok\xE9mon, ce qui l\u2019emp\xEAche de viser ce dernier et ses alli\xE9s avec une capacit\xE9 prioritaire.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  defeatist: {
    name: "D\xE9faitiste",
    desc: "Le Pok\xE9mon devient d\xE9faitiste quand ses PV tombent \xE0 la moiti\xE9, et son Attaque et son Attaque Sp\xE9ciale sont divis\xE9es par deux.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  defiant: {
    name: "Acharn\xE9",
    desc: "Augmente beaucoup l'Attaque du Pok\xE9mon quand ses stats sont baiss\xE9es par l'adversaire.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  deltastream: {
    name: "Souffle Delta",
    desc: "Alt\xE8re les conditions m\xE9t\xE9o pour annuler les faiblesses du type Vol.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  desolateland: {
    name: "Terre Finale",
    desc: "Alt\xE8re les conditions m\xE9t\xE9o pour neutraliser les attaques de type Eau.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  disguise: {
    name: "Fant\xF4masque",
    desc: "Le d\xE9guisement qui recouvre le corps du Pok\xE9mon est capable de le prot\xE9ger d\u2019une attaque.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  Le d\xE9guisement absorbe l\u2019attaque !",
    transform: "Le d\xE9guisement [POKEMON:de] tombe !"
  },
  download: {
    name: "T\xE9l\xE9charge",
    desc: "Le Pok\xE9mon compare la D\xE9fense et la D\xE9fense Sp\xE9ciale de l\u2019adversaire et, en fonction de la stat la plus basse, il augmente sa propre Attaque ou Attaque Sp\xE9ciale.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonize: {
    name: "Peau Draconique",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonsmaw: {
    name: "Dent de Dragon",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drizzle: {
    name: "Crachin",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drought: {
    name: "S\xE9cheresse",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dryskin: {
    name: "Peau S\xE8che",
    desc: "Quand le soleil brille, le Pok\xE9mon perd des PV et subit plus de d\xE9g\xE2ts des capacit\xE9s Feu, mais il regagne des PV lorsqu'il pleut ou s'il est touch\xE9 par une capacit\xE9 Eau.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  ([POKEMON] est bless\xE9 !)"
  },
  earlybird: {
    name: "Matinal",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  eartheater: {
    name: "Absorbe-Terre",
    desc: "Si le Pok\xE9mon est touch\xE9 par une capacit\xE9 de type Sol, il regagne des PV au lieu de subir des d\xE9g\xE2ts.",
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
    name: "Pose Spore",
    desc: "Peut paralyser, empoisonner ou endormir l'attaquant lorsque le Pok\xE9mon subit une attaque directe.",
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
    name: "Cr\xE9a-\xC9lec",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  electromorphosis: {
    name: "Grecharge",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] a \xE9t\xE9 touch\xE9 par la capacit\xE9 [MOVE] et se charge en \xE9lectricit\xE9 !"
  },
  embodyaspectcornerstone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON] fait briller le Masque de la Pierre et sa D\xE9fense augmente !"
  },
  embodyaspecthearthflame: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON] fait briller le Masque du Fourneau et son Attaque augmente !"
  },
  embodyaspectteal: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON] fait briller le Masque Turquoise et sa Vitesse augmente !"
  },
  embodyaspectwellspring: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  [POKEMON] fait briller le Masque du Puits et sa D\xE9fense Sp\xE9ciale augmente !"
  },
  emergencyexit: {
    name: "Repli Tactique",
    desc: "Le Pok\xE9mon \xE9vite les situations inutilement dangereuses. Quand ses PV tombent \xE0 la moiti\xE9, il se r\xE9fugie dans sa Pok\xE9 Ball.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  fairyaura: {
    name: "Aura F\xE9\xE9rique",
    desc: "Augmente la puissance des capacit\xE9s de type F\xE9e de tous les Pok\xE9mon.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] d\xE9gage une aura f\xE9\xE9rique !"
  },
  filter: {
    name: "Filtre",
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
    name: "Corps Ardent",
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
    name: "Rage Br\xFBlure",
    desc: "Augmente la puissance des capacit\xE9s sp\xE9ciales quand le Pok\xE9mon est br\xFBl\xE9.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  flashfire: {
    name: "Torche",
    desc: "Lorsque le Pok\xE9mon est touch\xE9 par une capacit\xE9 de type Feu, il absorbe la chaleur pour renforcer ses propres capacit\xE9s Feu.",
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
    start: "  [POKEMON] augmente la puissance de ses capacit\xE9s de type Feu !"
  },
  flowergift: {
    name: "Don Floral",
    desc: "Augmente l\u2019Attaque et la D\xE9fense Sp\xE9ciale du Pok\xE9mon et de ses alli\xE9s lorsque le soleil brille.",
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
    name: "Flora-Voile",
    desc: "Emp\xEAche les alli\xE9s de type Plante de subir des baisses de stats et des alt\xE9rations de statut.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON] est prot\xE9g\xE9 par Flora-Voile !"
  },
  fluffy: {
    name: "Boule de Poils",
    desc: "Divise par deux les d\xE9g\xE2ts des attaques directes subies par le Pok\xE9mon, mais double les d\xE9g\xE2ts des capacit\xE9s de type Feu.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  forecast: {
    name: "M\xE9t\xE9o",
    desc: "Le Pok\xE9mon prend le type Eau, Feu ou Glace en fonction de la m\xE9t\xE9o.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  forewarn: {
    name: "Pr\xE9diction",
    desc: "R\xE9v\xE8le l\u2019une des capacit\xE9s de l\u2019adversaire quand le combat commence.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  La capacit\xE9 [MOVE] [TARGET:de] a \xE9t\xE9 d\xE9tect\xE9e\u202F!",
    activateNoTarget: "  Pr\xE9diction du [POKEMON] lui signale [MOVE]!"
  },
  friendguard: {
    name: "Garde-Ami",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  frisk: {
    name: "Fouille",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON] fouille [TARGET] et trouve [ITEM:indefinite:classified] !",
    activateNoTarget: "  [POKEMON] a d\xE9cel\xE9 l'objet: [ITEM]!"
  },
  fullmetalbody: {
    name: "M\xE9tallo-Garde",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  furcoat: {
    name: "Toison \xC9paisse",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  galewings: {
    name: "Ailes Bourrasque",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  galvanize: {
    name: "Peau \xC9lectrique",
    desc: "Les capacit\xE9s de type Normal deviennent de type \xC9lectrik. Leur puissance augmente l\xE9g\xE8rement.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gluttony: {
    name: "Gloutonnerie",
    desc: "Si le Pok\xE9mon tient une Baie \xE0 manger en cas de PV bas, il la mange d\xE8s qu'il a perdu la moiti\xE9 de ses PV.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  goodasgold: {
    name: "Corps en Or",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gooey: {
    name: "Poisseux",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gorillatactics: {
    name: "Ent\xEAtement",
    desc: "Augmente l\u2019Attaque, mais emp\xEAche d\u2019utiliser toute autre capacit\xE9 que celle utilis\xE9e en premier par le Pok\xE9mon.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grasspelt: {
    name: "Toison Herbue",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grassysurge: {
    name: "Cr\xE9a-Herbe",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grimneigh: {
    name: "Sombre Ruade",
    desc: "Quand le Pok\xE9mon met un ennemi K.O., il \xE9met un hennissement terrifiant qui augmente son Attaque Sp\xE9ciale.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guarddog: {
    name: "Chien de Garde",
    desc: "L\u2019Attaque du Pok\xE9mon augmente s\u2019il subit l\u2019effet du talent Intimidation. Les capacit\xE9s ou objets qui font changer de Pok\xE9mon n\u2019ont aucun effet sur lui.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gulpmissile: {
    name: "D\xE9gobage",
    desc: "Quand le Pok\xE9mon utilise Surf ou Plong\xE9e, il revient avec une proie. Lorsqu\u2019il subit des d\xE9g\xE2ts par la suite, il attaque en recrachant sa proie.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guts: {
    name: "Cran",
    desc: "Augmente l'Attaque du Pok\xE9mon s'il est affect\xE9 par une alt\xE9ration de statut.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hadronengine: {
    name: "Moteur \xE0 Hadrons",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [POKEMON] cr\xE9e un champ \xE9lectrifi\xE9 et active une machine du futur !",
    activate: "  [POKEMON] active une machine du futur gr\xE2ce au champ \xE9lectrifi\xE9 !"
  },
  harvest: {
    name: "R\xE9colte",
    desc: "Permet de r\xE9utiliser une m\xEAme Baie plusieurs fois.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    addItem: "  [POKEMON] a r\xE9colt\xE9 [ITEM:indefinite]\u202F!"
  },
  healer: {
    name: "C\u0153ur Soin",
    desc: "Soigne parfois une alt\xE9ration de statut d\u2019un alli\xE9 proche.",
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
    name: "Ignifug\xE9",
    desc: "Diminue de moiti\xE9 les d\xE9g\xE2ts inflig\xE9s au Pok\xE9mon par les capacit\xE9s de type Feu.",
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
    name: "Heavy Metal",
    desc: "Double le poids du Pok\xE9mon.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  honeygather: {
    name: "Cherche Miel",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hospitality: {
    name: "Aux Petits Soins",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    heal: "  [POKEMON] boit le th\xE9 pr\xE9par\xE9 par [SOURCE] !"
  },
  hugepower: {
    name: "Coloforce",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hungerswitch: {
    name: "D\xE9clic Fringale",
    desc: "\xC0 la fin de chaque tour, le Pok\xE9mon alterne entre ses formes Mode Rassasi\xE9 et Mode Affam\xE9.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hustle: {
    name: "Agitation",
    desc: "Am\xE9liore l'Attaque du Pok\xE9mon, mais diminue la Pr\xE9cision.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hydration: {
    name: "Hydratation",
    desc: "Soigne les alt\xE9rations de statut du Pok\xE9mon quand il pleut.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  hypercutter: {
    name: "Hyper Cutter",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  icebody: {
    name: "Corps Gel",
    desc: "R\xE9g\xE9n\xE8re peu \xE0 peu les PV du Pok\xE9mon quand il neige.",
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
    name: "T\xEAte de Gel",
    desc: "Le gla\xE7on sur sa t\xEAte encaisse les attaques physiques \xE0 la place du Pok\xE9mon, mais sa destruction modifie son apparence. Le gla\xE7on se reforme quand il neige.",
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
    name: "\xC9cailles Glac\xE9es",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  illuminate: {
    name: "Lumiattirance",
    desc: "Le Pok\xE9mon illumine les alentours, ce qui emp\xEAche sa Pr\xE9cision de baisser.",
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
    name: "Illusion",
    desc: "Le Pok\xE9mon prend l\u2019apparence du dernier membre de l\u2019\xE9quipe pour tromper l\u2019adversaire.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    end: "  L\u2019illusion [POKEMON:de] se brise !"
  },
  immunity: {
    name: "Vaccin",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  imposter: {
    name: "Imposteur",
    desc: "Le Pok\xE9mon prend l\u2019apparence du Pok\xE9mon adverse.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  infiltrator: {
    name: "Infiltration",
    desc: "Traverse les barri\xE8res et les clones adverses pour attaquer directement.",
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
    name: "Expuls\u2019Organes",
    desc: "Le Pok\xE9mon inflige \xE0 l\u2019adversaire l\u2019ayant mis K.O. des d\xE9g\xE2ts \xE9gaux au nombre de PV qu\u2019il lui restait avant le coup de gr\xE2ce.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#aftermath"
  },
  innerfocus: {
    name: "Attention",
    desc: "Le Pok\xE9mon a un mental \xE0 toute \xE9preuve qui emp\xEAche les attaques ennemies de lui faire peur. Il est aussi immunis\xE9 contre le talent Intimidation.",
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
    name: "Intimidation",
    desc: "Le Pok\xE9mon rugit lorsqu'il arrive au combat, ce qui intimide l'ennemi et baisse son Attaque.",
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
    name: "Lame Indomptable",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  ironbarbs: {
    name: "\xC9pine de Fer",
    desc: "Inflige des d\xE9g\xE2ts \xE0 l\u2019attaquant lorsque le Pok\xE9mon subit une attaque directe.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#roughskin"
  },
  ironfist: {
    name: "Poing de Fer",
    desc: "Augmente la puissance des capacit\xE9s coups de poing.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  justified: {
    name: "C\u0153ur Noble",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  keeneye: {
    name: "Regard Vif",
    desc: "Les yeux per\xE7ants du Pok\xE9mon emp\xEAchent sa Pr\xE9cision de baisser.",
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
    name: "Maladresse",
    desc: "Le Pok\xE9mon ne peut utiliser aucun objet tenu.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  leafguard: {
    name: "Feuille Garde",
    desc: "Prot\xE8ge le Pok\xE9mon contre les alt\xE9rations de statut quand le soleil brille.",
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
    name: "L\xE9vitation",
    desc: "Le Pok\xE9mon flotte, ce qui l'immunise contre les capacit\xE9s de type Sol.",
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
    name: "Lib\xE9ro",
    desc: "Le Pok\xE9mon prend le type de la capacit\xE9 qu\u2019il utilise. Ce talent ne peut se d\xE9clencher qu\u2019une fois par entr\xE9e au combat du Pok\xE9mon.",
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
    name: "Light Metal",
    desc: "Divise par deux le poids du Pok\xE9mon.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lightningrod: {
    name: "Paratonnerre",
    desc: "Le Pok\xE9mon d\xE9tourne sur lui les capacit\xE9s de type \xC9lectrik et les neutralise, tout en augmentant son Attaque Sp\xE9ciale.",
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
    activate: "  [POKEMON] attire l\u2019attaque sur lui !"
  },
  limber: {
    name: "\xC9chauffement",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lingeringaroma: {
    name: "Odeur Tenace",
    desc: "Lorsque le Pok\xE9mon subit une attaque directe, le talent de l\u2019attaquant est remplac\xE9 par Odeur Tenace.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "  Une odeur tenace impr\xE8gne [TARGET] !"
  },
  liquidooze: {
    name: "Suintement",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  [POKEMON] aspire le suintement !"
  },
  liquidvoice: {
    name: "Hydrata-Son",
    desc: "Toutes les attaques sonores du Pok\xE9mon prennent le type Eau.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  longreach: {
    name: "Longue Port\xE9e",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magicbounce: {
    name: "Miroir Magik",
    desc: "Annule les effets des capacit\xE9s de statut subies par le Pok\xE9mon et les retourne \xE0 l\u2019envoyeur.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    move: "#magiccoat"
  },
  magicguard: {
    name: "Garde Magik",
    desc: "Seules les attaques peuvent blesser le Pok\xE9mon.",
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
    name: "Magicien",
    desc: "Les capacit\xE9s volent aussi l\u2019objet tenu par la cible.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magmaarmor: {
    name: "Armumagma",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magnetpull: {
    name: "Magn\xE9pi\xE8ge",
    desc: "Attire les Pok\xE9mon Acier gr\xE2ce \xE0 un champ magn\xE9tique, ce qui les emp\xEAche de quitter le terrain.",
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
    name: "\xC9caille Sp\xE9ciale",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megalauncher: {
    name: "M\xE9ga Blaster",
    desc: "Augmente la puissance des capacit\xE9s qui projettent une aura.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megasol: {
    name: "M\xE9ga-Soleil",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  merciless: {
    name: "Cruaut\xE9",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mimicry: {
    name: "Mim\xE9tisme",
    desc: "Le Pok\xE9mon adopte le m\xEAme type que le terrain lorsqu\u2019un champ est actif.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] a repris son type d\u2019origine !"
  },
  mindseye: {
    name: "\u0152il R\xE9v\xE9lateur",
    desc: "Le Pok\xE9mon ignore les changements d\u2019Esquive des cibles et peut toucher les Pok\xE9mon Spectre avec des capacit\xE9s Normal ou Combat. Sa Pr\xE9cision ne peut pas baisser.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  minus: {
    name: "Moins",
    desc: "L\u2019Attaque Sp\xE9ciale du Pok\xE9mon augmente si un Pok\xE9mon alli\xE9 a le talent Moins ou Plus.",
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
    name: "Armure Miroir",
    desc: "Le Pok\xE9mon renvoie les effets r\xE9ducteurs de stats qu\u2019il re\xE7oit.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mistysurge: {
    name: "Cr\xE9a-Brume",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moldbreaker: {
    name: "Brise Moule",
    desc: "Le Pok\xE9mon ignore les talents adverses qui auraient un effet sur ses capacit\xE9s.",
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
    start: "  [POKEMON] brise le moule !"
  },
  moody: {
    name: "Lunatique",
    desc: "Augmente beaucoup une stat du Pok\xE9mon et en baisse une autre au hasard \xE0 chaque tour.",
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
    name: "Motoris\xE9",
    desc: "Si le Pok\xE9mon est touch\xE9 par une capacit\xE9 de type \xC9lectrik, il ne subit aucun d\xE9g\xE2t et sa Vitesse augmente.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moxie: {
    name: "Impudence",
    desc: "Quand le Pok\xE9mon met un ennemi K.O., sa confiance en lui ne conna\xEEt plus de limite et son Attaque augmente.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multiscale: {
    name: "Multi\xE9caille",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multitype: {
    name: "Multi-Type",
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
    name: "Momie",
    desc: "Lorsque le Pok\xE9mon subit une attaque directe, le talent de l\u2019attaquant est remplac\xE9 par Momie.",
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
    changeAbility: "  Le talent [TARGET:de] devient Momie !"
  },
  myceliummight: {
    name: "Force Fongique",
    desc: "Le Pok\xE9mon agit toujours plus lentement quand il utilise une capacit\xE9 de statut, mais il ignore les talents adverses.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  naturalcure: {
    name: "M\xE9dic Nature",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  neuroforce: {
    name: "C\xE9r\xE9bro-Force",
    desc: "Augmente encore plus la puissance des attaques super efficaces.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  neutralizinggas: {
    name: "Gaz Inhibiteur",
    desc: "Si un Pok\xE9mon avec Gaz Inhibiteur est sur le terrain, les effets des talents de tous les autres Pok\xE9mon ne s\u2019activent pas ou sont neutralis\xE9s.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  Un gaz inhibiteur envahit les lieux !",
    end: "  Les effets du gaz inhibiteur se sont dissip\xE9s."
  },
  noguard: {
    name: "Annule Garde",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  normalize: {
    name: "Normalise",
    desc: "Toutes les capacit\xE9s du Pok\xE9mon deviennent de type Normal, quel que soit leur type original. Leur puissance augmente l\xE9g\xE8rement.",
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
    name: "Ben\xEAt",
    desc: "Le Pok\xE9mon est un grand ben\xEAt, ce qui l'immunise contre l'attraction, la provocation ou l'intimidation.",
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
    name: "Opportuniste",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  orichalcumpulse: {
    name: "Pouls Orichalque",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Le soleil brille et [POKEMON] lib\xE8re l\u2019\xE9nergie d\u2019une pulsation primitive !",
    activate: "  [POKEMON] tire profit des rayons du soleil et lib\xE8re l\u2019\xE9nergie d\u2019une pulsation primitive !"
  },
  overcoat: {
    name: "Envelocape",
    desc: "Prot\xE8ge des d\xE9g\xE2ts occasionn\xE9s par les temp\xEAtes de sable, ainsi que des effets des capacit\xE9s qui lib\xE8rent de la poudre et des spores.",
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
    name: "Engrais",
    desc: "Augmente la puissance des capacit\xE9s de type Plante du Pok\xE9mon quand il a perdu une certaine quantit\xE9 de PV.",
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
    name: "Tempo Perso",
    desc: "Le Pok\xE9mon vit sa vie \xE0 son propre rythme, ce qui l'immunise contre la confusion et l'intimidation.",
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
    name: "Amour Filial",
    desc: "La m\xE8re et son petit unissent leurs forces pour attaquer deux fois d\u2019affil\xE9e.",
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
    name: "Voile Pastel",
    desc: "Prot\xE8ge le Pok\xE9mon et ses alli\xE9s contre toutes les alt\xE9rations de statut li\xE9es \xE0 l\u2019empoisonnement.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  perishbody: {
    name: "Corps Condamn\xE9",
    desc: "Lorsque le Pok\xE9mon est directement touch\xE9 par une capacit\xE9, l\u2019assaillant et lui tomberont K.O. dans trois tours, \xE0 moins qu\u2019ils ne soient remplac\xE9s entre temps.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Les deux Pok\xE9mon seront K.O. dans trois tours !"
  },
  pickpocket: {
    name: "Pickpocket",
    desc: "Vole l\u2019objet que tient l\u2019attaquant quand le Pok\xE9mon subit une attaque directe.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pickup: {
    name: "Ramassage",
    desc: "Permet parfois au Pok\xE9mon de ramasser les objets que d\u2019autres Pok\xE9mon ont utilis\xE9s. Il lui arrive aussi d\u2019en trouver hors des combats.",
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
    name: "Transperceuse",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pixilate: {
    name: "Peau F\xE9\xE9rique",
    desc: "Les capacit\xE9s de type Normal deviennent de type F\xE9e. Leur puissance augmente l\xE9g\xE8rement.",
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
    desc: "L\u2019Attaque Sp\xE9ciale du Pok\xE9mon augmente si un Pok\xE9mon alli\xE9 a le talent Moins ou Plus.",
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
    name: "Soin Poison",
    desc: "Quand le Pok\xE9mon est empoisonn\xE9, il regagne des PV au lieu d\u2019en perdre.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisonpoint: {
    name: "Point Poison",
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
    name: "Emprise Toxique",
    desc: "Lorsque P\xEAchaminus empoisonne un Pok\xE9mon gr\xE2ce \xE0 l\u2019une de ses capacit\xE9s, ce dernier devient \xE9galement confus.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisontouch: {
    name: "Toxitouche",
    desc: "Peut empoisonner l\u2019ennemi par simple contact.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  powerconstruct: {
    name: "Rassemblement",
    desc: "Lorsque le Pok\xE9mon perd la moiti\xE9 de ses PV, ses Cellules se rassemblent pour l\u2019encourager, ce qui lui permet de prendre sa Forme Parfaite.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  Vous sentez la pr\xE9sence d\u2019un grand nombre d\u2019individus !",
    transform: "[POKEMON] prend sa Forme Parfaite !"
  },
  powerofalchemy: {
    name: "Osmose",
    desc: "Le Pok\xE9mon acquiert le talent d\u2019un alli\xE9 mis K.O.",
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
    name: "Cercle d\u2019\xC9nergie",
    desc: "Augmente la puissance des capacit\xE9s des Pok\xE9mon qui se trouvent \xE0 proximit\xE9.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prankster: {
    name: "Farceur",
    desc: "Rend les capacit\xE9s de statut du Pok\xE9mon prioritaires.",
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
    name: "Pression",
    desc: "Met la pression \xE0 l\u2019adversaire pour le forcer \xE0 d\xE9penser plus de PP.",
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
    start: "  [POKEMON] augmente la pression !"
  },
  primordialsea: {
    name: "Mer Primaire",
    desc: "Alt\xE8re les conditions m\xE9t\xE9o pour neutraliser les attaques de type Feu.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prismarmor: {
    name: "Prisme-Armure",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  propellertail: {
    name: "Propulseur",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  protean: {
    name: "Prot\xE9en",
    desc: "Le Pok\xE9mon prend le type de la capacit\xE9 qu\u2019il utilise. Ce talent ne peut se d\xE9clencher qu\u2019une fois par entr\xE9e au combat du Pok\xE9mon.",
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
    name: "Pal\xE9osynth\xE8se",
    desc: "Quand le soleil brille ou que le Pok\xE9mon tient une capsule d\u2019\xC9nergie Booster, sa stat la plus \xE9lev\xE9e augmente.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  Le soleil brille, ce qui a permis \xE0 [POKEMON] d\u2019activer Pal\xE9osynth\xE8se !",
    activateFromItem: "  [POKEMON] a activ\xE9 Pal\xE9osynth\xE8se gr\xE2ce \xE0 son \xC9nergie Booster !",
    start: "  [STAT:definite:capitalize] [POKEMON:de] est renforc\xE9e !",
    end: "  L\u2019effet du talent Pal\xE9osynth\xE8se [POKEMON:de] s\u2019est dissip\xE9 !"
  },
  psychicsurge: {
    name: "Cr\xE9a-Psy",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  punkrock: {
    name: "Punk Rock",
    desc: "Augmente la puissance des capacit\xE9s bas\xE9es sur le son. Le Pok\xE9mon ne subit que la moiti\xE9 des d\xE9g\xE2ts quand il est touch\xE9 par ce genre de capacit\xE9s.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purepower: {
    name: "Force Pure",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purifyingsalt: {
    name: "Sel Purificateur",
    desc: "Le sel pur immunise le Pok\xE9mon contre les alt\xE9rations de statut, et diminue de moiti\xE9 les d\xE9g\xE2ts des capacit\xE9s de type Spectre.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  quarkdrive: {
    name: "Charge Quantique",
    desc: "Quand un champ \xE9lectrifi\xE9 est actif ou que le Pok\xE9mon tient une capsule d\u2019\xC9nergie Booster, sa stat la plus \xE9lev\xE9e augmente.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] a activ\xE9 Charge Quantique gr\xE2ce au champ \xE9lectrifi\xE9 !",
    activateFromItem: "  [POKEMON] a activ\xE9 Charge Quantique gr\xE2ce \xE0 son \xC9nergie Booster !",
    start: "  [STAT:definite:capitalize] [POKEMON:de] est renforc\xE9e !",
    end: "  L\u2019effet du talent Charge Quantique [POKEMON:de] s\u2019est dissip\xE9 !"
  },
  queenlymajesty: {
    name: "Prestance Royale",
    desc: "L\u2019adversaire est impressionn\xE9 par la majest\xE9 du Pok\xE9mon, ce qui l\u2019emp\xEAche de viser ce dernier et ses alli\xE9s avec une capacit\xE9 prioritaire.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  quickdraw: {
    name: "Tir Vif",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  Tir Vif permet \xE0 [POKEMON] d\u2019agir plus vite que d\u2019habitude !"
  },
  quickfeet: {
    name: "Pied V\xE9loce",
    desc: "Augmente la Vitesse du Pok\xE9mon en cas d'alt\xE9ration de statut.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  raindish: {
    name: "Cuvette",
    desc: "Le Pok\xE9mon r\xE9cup\xE8re progressivement des PV lorsqu'il pleut.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  rattled: {
    name: "Phobique",
    desc: "Si le Pok\xE9mon est touch\xE9 par le talent Intimidation ou une attaque de type T\xE9n\xE8bres, Spectre ou Insecte, sa phobie se r\xE9v\xE8le et sa Vitesse augmente.",
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
    name: "Receveur",
    desc: "Le Pok\xE9mon re\xE7oit le talent d\u2019un alli\xE9 mis K.O.",
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
    changeAbility: "  Le Pok\xE9mon re\xE7oit le talent [ABILITY] [SOURCE:de] !"
  },
  reckless: {
    name: "T\xE9m\xE9raire",
    desc: "Augmente la puissance des capacit\xE9s occasionnant un contrecoup.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  refrigerate: {
    name: "Peau Gel\xE9e",
    desc: "Les capacit\xE9s de type Normal deviennent de type Glace. Leur puissance augmente l\xE9g\xE8rement.",
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
    name: "R\xE9g\xE9-Force",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  ripen: {
    name: "M\xFBrissement",
    desc: "Le Pok\xE9mon fait m\xFBrir la Baie qu\u2019il tient et double ainsi son effet.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rivalry: {
    name: "Rivalit\xE9",
    desc: "Le Pok\xE9mon d\xE9teste la concurrence et inflige plus de d\xE9g\xE2ts si sa cible est du m\xEAme sexe. Par contre, il en inflige moins si sa cible est du sexe oppos\xE9.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rkssystem: {
    name: "Syst\xE8me Alpha",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rockhead: {
    name: "T\xEAte de Roc",
    desc: "Le Pok\xE9mon peut utiliser des capacit\xE9s occasionnant un contrecoup sans perdre de PV.",
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
    name: "Porte-Roche",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  roughskin: {
    name: "Peau Dure",
    desc: "Blesse l'attaquant lorsque le Pok\xE9mon subit une attaque directe.",
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
    damage: "  [POKEMON] est bless\xE9 !"
  },
  runaway: {
    name: "Fuite",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandforce: {
    name: "Force Sable",
    desc: "Augmente la puissance des capacit\xE9s de types Roche, Sol et Acier en cas de temp\xEAte de sable.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandrush: {
    name: "Baigne Sable",
    desc: "Augmente la Vitesse lors des temp\xEAtes de sable.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandspit: {
    name: "Expul\u2019Sable",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sandstream: {
    name: "Sable Volant",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandveil: {
    name: "Voile Sable",
    desc: "Augmente l'Esquive du Pok\xE9mon lors des temp\xEAtes de sable.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sapsipper: {
    name: "Herbivore",
    desc: "Annule les attaques de type Plante subies par le Pok\xE9mon et augmente son Attaque.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  schooling: {
    name: "Banc",
    desc: "Le Pok\xE9mon se rassemble avec ses cong\xE9n\xE8res quand ses PV sont \xE9lev\xE9s. Quand il ne lui reste plus beaucoup de PV, le banc se disperse.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON] forme un banc !",
    transformEnd: "Le banc [POKEMON:de] se d\xE9sagr\xE8ge !"
  },
  scrappy: {
    name: "Querelleur",
    desc: "Permet aux capacit\xE9s de type Normal ou Combat du Pok\xE9mon de toucher les Pok\xE9mon de type Spectre. Immunise aussi contre le talent Intimidation.",
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
    name: "Brise-Barri\xE8re",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  seedsower: {
    name: "Semencier",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  serenegrace: {
    name: "S\xE9r\xE9nit\xE9",
    desc: "Augmente les chances d'infliger des effets additionnels.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  shadowshield: {
    name: "Spectro-Bouclier",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shadowtag: {
    name: "Marque Ombre",
    desc: "Emp\xEAche les Pok\xE9mon ennemis de quitter le terrain.",
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
    name: "Incisif",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shedskin: {
    name: "Mue",
    desc: "Le Pok\xE9mon soigne parfois ses alt\xE9rations de statut en muant.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sheerforce: {
    name: "Sans Limite",
    desc: "Les capacit\xE9s ayant un effet additionnel le perdent, mais leur puissance augmente.",
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
    name: "Coque Armure",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shielddust: {
    name: "\xC9cran Poudre",
    desc: "Le Pok\xE9mon dispose d'un \xE9cran naturel qui le prot\xE8ge des effets additionnels des attaques ennemies.",
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
    name: "Bouclier-Carcan",
    desc: "Lorsque le Pok\xE9mon perd la moiti\xE9 de ses PV, son enveloppe se brise et il adopte une posture offensive.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "Le talent Bouclier-Carcan s\u2019active !",
    transformEnd: "Le talent Bouclier-Carcan n\u2019est plus actif !"
  },
  simple: {
    name: "Simple",
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
    name: "Multi-Coups",
    desc: "Les capacit\xE9s pouvant frapper plusieurs fois frappent toujours le nombre maximal de coups.",
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
    name: "D\xE9but Calme",
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
    start: "  [POKEMON] n\u2019arrive pas \xE0 se motiver\u202F!",
    end: "  [POKEMON] arrive enfin \xE0 s\u2019y mettre s\xE9rieusement !"
  },
  slushrush: {
    name: "Chasse-Neige",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sniper: {
    name: "Sniper",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  snowcloak: {
    name: "Rideau Neige",
    desc: "Augmente l'Esquive du Pok\xE9mon quand il neige.",
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
    name: "Alerte Neige",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solarpower: {
    name: "Force Soleil",
    desc: "Quand le soleil brille, l'Attaque Sp\xE9ciale du Pok\xE9mon augmente mais il perd des PV \xE0 chaque tour.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solidrock: {
    name: "Solide Roc",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soulheart: {
    name: "Animac\u0153ur",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soundproof: {
    name: "Anti-Bruit",
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
    name: "Turbo",
    desc: "La Vitesse du Pok\xE9mon augmente \xE0 chaque tour.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  spicyspray: {
    name: "Haban\xE9ruption",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stakeout: {
    name: "Filature",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stall: {
    name: "Frein",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stalwart: {
    name: "Nerfs d\u2019Acier",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stamina: {
    name: "Endurance",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stancechange: {
    name: "D\xE9clic Tactique",
    desc: "Le Pok\xE9mon prend la Forme Assaut lorsqu\u2019il utilise une capacit\xE9 offensive, et la Forme Parade lorsqu\u2019il utilise Bouclier Royal.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    transform: "Passage en Forme Assaut !",
    transformEnd: "Passage en Forme Parade !"
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
    name: "Impassible",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steamengine: {
    name: "Turbine",
    desc: "Lorsque le Pok\xE9mon est touch\xE9 par des capacit\xE9s de type Eau ou Feu, sa Vitesse augmente \xE9norm\xE9ment.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelworker: {
    name: "Expert Acier",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelyspirit: {
    name: "Boost Acier",
    desc: "Augmente la puissance des attaques de type Acier du Pok\xE9mon et de ses alli\xE9s.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stench: {
    name: "Puanteur",
    desc: "Le Pok\xE9mon \xE9met une odeur si naus\xE9abonde qu'il peut effrayer sa cible en l'attaquant.",
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
    name: "Glu",
    desc: "Les objets sont coll\xE9s au corps gluant du Pok\xE9mon, ce qui emp\xEAche ses adversaires de les d\xE9rober.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  L\u2019objet [POKEMON:de] ne peut pas \xEAtre vol\xE9 !"
  },
  stormdrain: {
    name: "Lavabo",
    desc: "Le Pok\xE9mon d\xE9tourne sur lui les capacit\xE9s de type Eau et les neutralise, tout en augmentant son Attaque Sp\xE9ciale.",
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
    name: "Prognathe",
    desc: "Le Pok\xE9mon a une m\xE2choire robuste qui augmente la puissance de ses capacit\xE9s de morsure.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sturdy: {
    name: "Fermet\xE9",
    desc: "Le Pok\xE9mon encaisse toujours au moins une attaque s\u2019il a tous ses PV. Il est \xE9galement immunis\xE9 contre les capacit\xE9s pouvant mettre K.O. en un coup.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  [POKEMON] encaisse les coups !"
  },
  suctioncups: {
    name: "Ventouse",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON] s\u2019accroche avec ses ventouses !"
  },
  superluck: {
    name: "Chanceux",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  supersweetsyrup: {
    name: "Nectar Mielleux",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Le nectar [POKEMON:de] d\xE9gage un parfum sucr\xE9 !"
  },
  supremeoverlord: {
    name: "G\xE9n\xE9ral Supr\xEAme",
    desc: "Quand le Pok\xE9mon entre sur le terrain, son Attaque et son Attaque Sp\xE9ciale augmentent l\xE9g\xE8rement pour chaque alli\xE9 mis K.O. auparavant.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] re\xE7oit la puissance de ses alli\xE9s mis K.O. !"
  },
  surgesurfer: {
    name: "Surf Caudal",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  swarm: {
    name: "Essaim",
    desc: "Augmente la puissance des capacit\xE9s de type Insecte du Pok\xE9mon quand il a perdu une certaine quantit\xE9 de PV.",
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
    name: "Gluco-Voile",
    desc: "Le Pok\xE9mon et ses alli\xE9s ne peuvent pas s\u2019endormir.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  Gluco-Voile emp\xEAche [POKEMON] de dormir !"
  },
  swiftswim: {
    name: "Glissade",
    desc: "Augmente la Vitesse du Pok\xE9mon s'il pleut.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  swordofruin: {
    name: "\xC9p\xE9e du Fl\xE9au",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  L\u2019\xC9p\xE9e du Fl\xE9au [POKEMON:de] affaiblit la D\xE9fense des Pok\xE9mon alentour !"
  },
  symbiosis: {
    name: "Symbiose",
    desc: "Quand les alli\xE9s utilisent l\u2019objet qu\u2019ils tiennent, le Pok\xE9mon leur donne l\u2019objet qu\u2019il tient en remplacement.",
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
    activate: "  [POKEMON] donne [ITEM:definite:classified] \xE0 [TARGET] !"
  },
  synchronize: {
    name: "Synchro",
    desc: "Quand le Pok\xE9mon est br\xFBl\xE9, paralys\xE9 ou empoisonn\xE9 par un autre Pok\xE9mon, il partage ce statut avec celui-ci.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  tabletsofruin: {
    name: "Bois du Fl\xE9au",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Le Bois du Fl\xE9au [POKEMON:de] affaiblit l\u2019Attaque des Pok\xE9mon alentour !"
  },
  tangledfeet: {
    name: "Pieds Confus",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  tanglinghair: {
    name: "M\xE8che Rebelle",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  technician: {
    name: "Technicien",
    desc: "Augmente la puissance des capacit\xE9s les plus faibles.",
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
    name: "T\xE9l\xE9pathe",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  [POKEMON] ne peut pas \xEAtre attaqu\xE9 par ses alli\xE9s !"
  },
  teraformzero: {
    name: "T\xE9raformation 0",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  terashell: {
    name: "T\xE9ra-Carapace",
    desc: "Gr\xE2ce \xE0 sa carapace qui renferme l\u2019\xE9nergie de tous les types, les capacit\xE9s subies par ce Pok\xE9mon quand ses PV sont au maximum ne sont pas tr\xE8s efficaces.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] fait briller sa carapace et fausse les affinit\xE9s de type !"
  },
  terashift: {
    name: "T\xE9ramorphose",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "[POKEMON] se transforme !"
  },
  teravolt: {
    name: "T\xE9ra-Voltage",
    desc: "Le Pok\xE9mon ignore les talents adverses qui auraient un effet sur ses capacit\xE9s.",
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
    start: "  [POKEMON] d\xE9gage une aura \xE9lectrique instable !"
  },
  thermalexchange: {
    name: "Thermodynamique",
    desc: "Lorsque le Pok\xE9mon est touch\xE9 par une capacit\xE9 de type Feu, son Attaque augmente. Il ne peut pas \xEAtre br\xFBl\xE9.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  thickfat: {
    name: "Isograisse",
    desc: "Le Pok\xE9mon est prot\xE9g\xE9 par une \xE9paisse couche de graisse qui diminue de moiti\xE9 les d\xE9g\xE2ts qu'il subit des capacit\xE9s de types Feu et Glace.",
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
    name: "Lentiteint\xE9e",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  torrent: {
    name: "Torrent",
    desc: "Augmente la puissance des capacit\xE9s de type Eau du Pok\xE9mon quand il a perdu une certaine quantit\xE9 de PV.",
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
    name: "Griffe Dure",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicboost: {
    name: "Rage Poison",
    desc: "Augmente la puissance des capacit\xE9s physiques quand le Pok\xE9mon est empoisonn\xE9.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicchain: {
    name: "Cha\xEEne Toxique",
    desc: "Gr\xE2ce aux pouvoirs de sa cha\xEEne impr\xE9gn\xE9e de toxines, le Pok\xE9mon peut empoisonner gravement sa cible en la touchant avec une capacit\xE9.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicdebris: {
    name: "D\xE9p\xF4t Toxique",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  trace: {
    name: "Calque",
    desc: "Lorsque le Pok\xE9mon entre au combat, il calque le talent d'un ennemi pour remplacer le sien.",
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
    changeAbility: "  [POKEMON] Calque [ABILITY] du [SOURCE]!"
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
    name: "Priogu\xE9rison",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  truant: {
    name: "Absent\xE9isme",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    cant: "[POKEMON] paresse !"
  },
  turboblaze: {
    name: "Turbo Brasier",
    desc: "Le Pok\xE9mon ignore les talents adverses qui auraient un effet sur ses capacit\xE9s.",
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
    start: "  [POKEMON] d\xE9gage une aura de flammes incandescentes !"
  },
  unaware: {
    name: "Inconscient",
    desc: "Le Pok\xE9mon ignore les changements de stats des autres Pok\xE9mon, qu'il attaque ou soit attaqu\xE9.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unburden: {
    name: "D\xE9lestage",
    desc: "Augmente la Vitesse du Pok\xE9mon s'il perd ou utilise l'objet qu'il tenait au d\xE9but du combat.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unnerve: {
    name: "Tension",
    desc: "Fait stresser l\u2019adversaire, ce qui l\u2019emp\xEAche de manger des Baies.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  [TEAM:capitalize] est tendue et ne peut plus manger de Baies !"
  },
  unseenfist: {
    name: "Poing Invisible",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    champions: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "Urne du Fl\xE9au",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  L\u2019Urne du Fl\xE9au [POKEMON:de] affaiblit l\u2019Attaque Sp\xE9ciale des Pok\xE9mon alentour !"
  },
  victorystar: {
    name: "Victorieux",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  vitalspirit: {
    name: "Esprit Vital",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  voltabsorb: {
    name: "Absorbe-Volt",
    desc: "Si le Pok\xE9mon est touch\xE9 par une capacit\xE9 \xC9lectrik, il ne subit aucun d\xE9g\xE2t et regagne des PV \xE0 la place.",
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
    name: "\xC2me Vagabonde",
    desc: "Lorsque le Pok\xE9mon est directement touch\xE9 par une capacit\xE9, il \xE9change son talent avec celui de l\u2019assaillant.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "#skillswap"
  },
  waterabsorb: {
    name: "Absorbe-Eau",
    desc: "Si le Pok\xE9mon est touch\xE9 par une capacit\xE9 Eau, il ne subit aucun d\xE9g\xE2t et regagne des PV \xE0 la place.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterbubble: {
    name: "Aquabulle",
    desc: "R\xE9duit la puissance des capacit\xE9s de type Feu subies par le Pok\xE9mon. Il est \xE9galement immunis\xE9 contre les br\xFBlures.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  watercompaction: {
    name: "Sable Humide",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterveil: {
    name: "Ignifu-Voile",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  weakarmor: {
    name: "Armurouill\xE9e",
    desc: "Quand le Pok\xE9mon est touch\xE9 par une capacit\xE9 physique, sa D\xE9fense baisse mais sa Vitesse augmente beaucoup.",
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
    name: "Bien Cuit",
    desc: "Si le Pok\xE9mon est touch\xE9 par une capacit\xE9 de type Feu, il ne subit aucun d\xE9g\xE2t et sa D\xE9fense augmente beaucoup.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  whitesmoke: {
    name: "\xC9cran Fum\xE9e",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wimpout: {
    name: "Escampette",
    desc: "Le Pok\xE9mon perd confiance quand ses PV tombent \xE0 la moiti\xE9 et s\u2019enfuit dans sa Pok\xE9 Ball.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  windpower: {
    name: "Turbine \xC9olienne",
    desc: "Si le Pok\xE9mon est touch\xE9 par une capacit\xE9 faisant appel au vent, il se charge en \xE9lectricit\xE9.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#electromorphosis"
  },
  windrider: {
    name: "A\xE9roport\xE9",
    desc: "L\u2019Attaque du Pok\xE9mon augmente si un vent arri\xE8re souffle ou s\u2019il est touch\xE9 par une capacit\xE9 faisant appel au vent. Dans ce dernier cas, il ne subit aucun d\xE9g\xE2t.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wonderguard: {
    name: "Garde Mystik",
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
    name: "Peau Miracle",
    desc: "Le Pok\xE9mon r\xE9siste mieux aux capacit\xE9s de statut.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  zenmode: {
    name: "Mode Transe",
    desc: "Le Pok\xE9mon change de forme quand il lui reste moins de la moiti\xE9 de ses PV.",
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
    transform: "Le talent Mode Transe s\u2019active !",
    transformEnd: "Le talent Mode Transe n\u2019est plus actif !"
  },
  zerotohero: {
    name: "Supermutation",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  [POKEMON] est revenu sous une autre forme !"
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
