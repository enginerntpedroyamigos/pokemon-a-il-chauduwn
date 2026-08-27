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
    name: "Adaptable",
    desc: "Potencia a\xFAn m\xE1s los movimientos cuyo tipo coincida con el suyo.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aerilate: {
    name: "Piel Celeste",
    desc: "Convierte los movimientos de tipo Normal en tipo Volador y aumenta ligeramente su potencia.",
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
    name: "Detonaci\xF3n",
    desc: "Da\xF1a al agresor que le ha dado el golpe de gracia con un movimiento de contacto.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "  \xA1[POKEMON] ha resultado herido!"
  },
  airlock: {
    name: "Bucle Aire",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  Los efectos del tiempo atmosf\xE9rico se han neutralizado."
  },
  analytic: {
    name: "C\xE1lculo Final",
    desc: "Aumenta la potencia de su movimiento si es el \xFAltimo en atacar.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  angerpoint: {
    name: "Irascible",
    desc: "Si recibe un golpe cr\xEDtico, monta en c\xF3lera y sube su Ataque hasta el m\xE1ximo.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    boost: "  \xA1El Ataque de [POKEMON] ha aumentado al m\xE1ximo!"
  },
  angershell: {
    name: "Coraza Ira",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  anticipation: {
    name: "Anticipaci\xF3n",
    desc: "Prev\xE9 los movimientos peligrosos del rival.",
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
    activate: "  \xA1[POKEMON] se ha estremecido!"
  },
  arenatrap: {
    name: "Trampa Arena",
    desc: "Evita que el rival huya.",
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
    name: "Cola Armadura",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  aromaveil: {
    name: "Velo Aroma",
    desc: "Se protege a s\xED mismo y a sus aliados de ataques que impiden elegir movimientos.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  \xA1Velo Aroma ha protegido a [POKEMON]!"
  },
  asone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] tiene dos habilidades!"
  },
  asoneglastrier: {
    name: "Unidad Ecuestre",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  asonespectrier: {
    name: "Unidad Ecuestre",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  aurabreak: {
    name: "Rompeaura",
    desc: "Invierte los efectos de las auras, por lo que baja la potencia de ciertos movimientos en vez de subirla.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] ha invertido todas las auras!"
  },
  baddreams: {
    name: "Mal Sue\xF1o",
    desc: "Inflige da\xF1o a cualquier rival que est\xE9 dormido.",
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
    damage: "  \xA1[POKEMON] est\xE1 inmerso en un sue\xF1o agitado!"
  },
  ballfetch: {
    name: "Recogebolas",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battery: {
    name: "Bater\xEDa",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlearmor: {
    name: "Armadura Batalla",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  battlebond: {
    name: "Fuerte Afecto",
    desc: "Al derrotar a un rival, los v\xEDnculos con su Entrenador se refuerzan y se convierte en Greninja Ash. Su Shuriken de Agua tambi\xE9n se ve potenciado.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  \xA1[POKEMON] siente la fuerza de vuestro afecto mutuo!",
    transform: "\xA1[POKEMON] se ha convertido en Greninja Ash!"
  },
  beadsofruin: {
    name: "Abalorio Debacle",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] ha mermado la Defensa Especial de los dem\xE1s Pok\xE9mon con Abalorio Debacle!"
  },
  beastboost: {
    name: "Ultraimpulso",
    desc: "Si derrota a un rival en ese turno, aumenta su caracter\xEDstica m\xE1s fuerte.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  berserk: {
    name: "C\xF3lera",
    desc: "Aumenta su Ataque Especial si sus PS se ven reducidos a la mitad debido a alg\xFAn ataque.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  bigpecks: {
    name: "Sacapecho",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  blaze: {
    name: "Mar Llamas",
    desc: "Potencia sus movimientos de tipo Fuego cuando le quedan pocos PS.",
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
    name: "Antibalas",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cheekpouch: {
    name: "Carrillo",
    desc: "Recupera PS al comer cualquier baya.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  chillingneigh: {
    name: "Relincho Blanco",
    desc: "Al derrotar a un objetivo, emite un relincho g\xE9lido y aumenta su Ataque.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  chlorophyll: {
    name: "Clorofila",
    desc: "Sube su Velocidad cuando hace sol.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  clearbody: {
    name: "Cuerpo Puro",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cloudnine: {
    name: "Aclimataci\xF3n",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#airlock"
  },
  colorchange: {
    name: "Cambio Color",
    desc: "Adopta el tipo del \xFAltimo movimiento del que es blanco.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  comatose: {
    name: "Letargo Perenne",
    desc: "No despierta jam\xE1s de su profundo letargo e incluso ataca dormido.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] est\xE1 sumido en un profundo letargo!"
  },
  commander: {
    name: "Comandar",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \xA1[POKEMON] ha sido engullido por [TARGET] y se ha convertido en su comandante!"
  },
  competitive: {
    name: "Tenacidad",
    desc: "Aumenta mucho su Ataque Especial cuando el rival le baja cualquiera de sus caracter\xEDsticas.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  compoundeyes: {
    name: "Ojo Compuesto",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  contrary: {
    name: "Respond\xF3n",
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
    name: "Corrosi\xF3n",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  costar: {
    name: "Un\xEDsono",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cottondown: {
    name: "Pelusa",
    desc: "Al ser alcanzado por un ataque, suelta una pelusa de algod\xF3n que reduce la Velocidad de todos los dem\xE1s Pok\xE9mon.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cudchew: {
    name: "Rumia",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  curiousmedicine: {
    name: "Medicina Extra\xF1a",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cursedbody: {
    name: "Cuerpo Maldito",
    desc: "Puede anular el movimiento usado en su contra.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  cutecharm: {
    name: "Gran Encanto",
    desc: "Puede causar enamoramiento al rival que lo toque.",
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
    name: "Humedad",
    desc: "Aumenta la humedad del entorno y evita que se puedan utilizar movimientos explosivos, tales como Autodestrucci\xF3n.",
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
    block: "  \xA1[SOURCE] no puede usar [MOVE]!"
  },
  dancer: {
    name: "Pareja de Baile",
    desc: "Puede copiar inmediatamente cualquier movimiento de baile que haya usado otro Pok\xE9mon presente en el combate.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  darkaura: {
    name: "Aura Oscura",
    desc: "Aumenta la potencia de todos los movimientos de tipo Siniestro.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] irradia un aura oscura!"
  },
  dauntlessshield: {
    name: "Escudo Recio",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  dazzling: {
    name: "Cuerpo V\xEDvido",
    desc: "Desconcierta al rival y le impide utilizar movimientos con prioridad en su contra.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  defeatist: {
    name: "Flaqueza",
    desc: "Se debilita tanto cuando sus PS se ven reducidos a la mitad que su Ataque y su Ataque Especial bajan.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  defiant: {
    name: "Competitivo",
    desc: "Sube mucho su Ataque cuando el rival le baja las caracter\xEDsticas.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  deltastream: {
    name: "R\xE1faga Delta",
    desc: "Altera el clima para anular las vulnerabilidades del tipo Volador.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  desolateland: {
    name: "Tierra del Ocaso",
    desc: "Altera el clima para anular los ataques de tipo Agua.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  disguise: {
    name: "Disfraz",
    desc: "Puede eludir un ataque vali\xE9ndose de la tela que le cubre el cuerpo una vez por combate.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  \xA1El disfraz ha actuado como se\xF1uelo!",
    transform: "\xA1El disfraz de [POKEMON] se ha roto!"
  },
  download: {
    name: "Descarga",
    desc: "Compara la Defensa y la Defensa Especial del rival para ver cu\xE1l es inferior y aumenta su propio Ataque o Ataque Especial seg\xFAn sea lo m\xE1s eficaz.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonize: {
    name: "Piel Dragontina",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dragonsmaw: {
    name: "Mand\xEDbula Drag\xF3n",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drizzle: {
    name: "Llovizna",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  drought: {
    name: "Sequ\xEDa",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  dryskin: {
    name: "Piel Seca",
    desc: "Pierde PS si hace sol y los recupera si llueve o recibe un movimiento de tipo Agua. Los movimientos de tipo Fuego, por su parte, le hacen m\xE1s da\xF1o de lo normal.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  (\xA1[POKEMON] ha resultado herido!)"
  },
  earlybird: {
    name: "Madrugar",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  eartheater: {
    name: "Geofagia",
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
    name: "Efecto Espora",
    desc: "Puede dormir, envenenar o paralizar al Pok\xE9mon con el que entre en contacto al recibir un ataque.",
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
    name: "Electrog\xE9nesis",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  electromorphosis: {
    name: "Dinamo",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] se ha cargado de electricidad gracias a [MOVE]!"
  },
  embodyaspectcornerstone: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  \xA1[POKEMON] ha hecho brillar la M\xE1scara Cimiento y ha aumentado su Defensa!"
  },
  embodyaspecthearthflame: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  \xA1[POKEMON] ha hecho brillar la M\xE1scara Horno y ha aumentado su Ataque!"
  },
  embodyaspectteal: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  \xA1[POKEMON] ha hecho brillar la M\xE1scara Turquesa y ha aumentado su Velocidad!"
  },
  embodyaspectwellspring: {
    name: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    boost: "  \xA1[POKEMON] ha hecho brillar la M\xE1scara Fuente y ha aumentado su Defensa Especial!"
  },
  emergencyexit: {
    name: "Retirada",
    desc: "Abandona el terreno de combate cuando sus PS se ven reducidos a la mitad para evitar males mayores.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  fairyaura: {
    name: "Aura Fe\xE9rica",
    desc: "Aumenta la potencia de todos los movimientos de tipo Hada.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] irradia un aura fe\xE9rica!"
  },
  filter: {
    name: "Filtro",
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
    name: "Cuerpo Llama",
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
    name: "\xCDmpetu Ardiente",
    desc: "Aumenta la potencia de sus ataques especiales cuando sufre quemaduras.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  flashfire: {
    name: "Absorbe Fuego",
    desc: "Si le alcanza alg\xFAn movimiento de tipo Fuego, potencia sus propios movimientos de dicho tipo.",
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
    start: "  \xA1La potencia de los movimientos de tipo Fuego de [POKEMON] ha aumentado!"
  },
  flowergift: {
    name: "Don Floral",
    desc: "Si hace sol, aumenta su Ataque y su Defensa Especial, as\xED como los de sus aliados.",
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
    name: "Velo Flor",
    desc: "Evita que los Pok\xE9mon de tipo Planta aliados sufran problemas de estado o que les bajen sus caracter\xEDsticas.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  \xA1Velo Flor ha protegido a [POKEMON]!"
  },
  fluffy: {
    name: "Peluche",
    desc: "Reduce a la mitad el da\xF1o provocado por los movimientos de contacto, pero duplica el infligido por los de tipo Fuego.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  forecast: {
    name: "Predicci\xF3n",
    desc: "Cambia a tipo Agua, Fuego o Hielo en funci\xF3n del tiempo atmosf\xE9rico.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  forewarn: {
    name: "Alerta",
    desc: "Indica el movimiento m\xE1s potente del rival al entrar en combate.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  \xA1Se ha detectado el movimiento [MOVE] de [TARGET]!",
    activateNoTarget: "  \xA1Alerta de [POKEMON] detect\xF3 [MOVE]!"
  },
  friendguard: {
    name: "Compiescolta",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  frisk: {
    name: "Cacheo",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  \xA1[POKEMON] ha cacheado a [TARGET] y ha hallado [ITEM:indefinite:classified]!",
    activateNoTarget: "  \xA1[POKEMON] ha cacheado a su rival y ha encontrado [ITEM]!"
  },
  fullmetalbody: {
    name: "Guardia Met\xE1lica",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  furcoat: {
    name: "Pelaje Recio",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  galewings: {
    name: "Alas Vendaval",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  galvanize: {
    name: "Piel El\xE9ctrica",
    desc: "Convierte los movimientos de tipo Normal en tipo El\xE9ctrico y aumenta ligeramente su potencia.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gluttony: {
    name: "Gula",
    desc: "Cuando sus PS se ven reducidos a la mitad, engulle la baya que normalmente solo se comer\xEDa cuando le quedasen pocos PS.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  goodasgold: {
    name: "Cuerpo \xC1ureo",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gooey: {
    name: "Baba",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gorillatactics: {
    name: "Monotema",
    desc: "Potencia su Ataque, pero solo puede usar el primer movimiento escogido.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grasspelt: {
    name: "Manto Frondoso",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grassysurge: {
    name: "Herbog\xE9nesis",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  grimneigh: {
    name: "Relincho Negro",
    desc: "Al derrotar a un objetivo, emite un relincho aterrador y aumenta su Ataque Especial.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guarddog: {
    name: "Perro Guardi\xE1n",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  gulpmissile: {
    name: "Tragamisil",
    desc: "Tras usar Surf o Buceo, emerge con una presa en la boca. Al recibir da\xF1o, ataca escupi\xE9ndola al rival.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  guts: {
    name: "Agallas",
    desc: "Si sufre un problema de estado, se viene arriba y aumenta su Ataque.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hadronengine: {
    name: "Motor Hadr\xF3nico",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] crea un campo el\xE9ctrico que impulsa su motor futurista!",
    activate: "  \xA1El campo el\xE9ctrico impulsa el motor futurista de [POKEMON]!"
  },
  harvest: {
    name: "Cosecha",
    desc: "Puede reutilizar varias veces una misma baya.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    addItem: "  \xA1[POKEMON] ha recogido [ITEM:indefinite]!"
  },
  healer: {
    name: "Alma Cura",
    desc: "A veces cura los problemas de estado de un aliado.",
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
    name: "Ign\xEDfugo",
    desc: "Su cuerpo, resistente al calor, reduce a la mitad el da\xF1o recibido por movimientos de tipo Fuego.",
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
    name: "Metal Pesado",
    desc: "Duplica su peso.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  honeygather: {
    name: "Recogemiel",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hospitality: {
    name: "Hospitalidad",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    heal: "  \xA1[POKEMON] se ha bebido el t\xE9 que ha preparado [SOURCE]!"
  },
  hugepower: {
    name: "Potencia",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hungerswitch: {
    name: "Mutapetito",
    desc: "Alterna entre su Forma Saciada y Forma Voraz al final de cada turno.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hustle: {
    name: "Entusiasmo",
    desc: "Aumenta su Ataque, pero reduce su Precisi\xF3n.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  hydration: {
    name: "Hidrataci\xF3n",
    desc: "Cura los problemas de estado si est\xE1 lloviendo.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  hypercutter: {
    name: "Corte Fuerte",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  icebody: {
    name: "G\xE9lido",
    desc: "Recupera PS de forma gradual cuando hay tormentas de granizo.",
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
    name: "Cara de Hielo",
    desc: "Absorbe el da\xF1o de un ataque f\xEDsico con el hielo de la cabeza, tras lo cual cambia de forma. El hielo se regenerar\xE1 la pr\xF3xima vez que granice.",
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
    name: "Escama de Hielo",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  illuminate: {
    name: "Iluminaci\xF3n",
    desc: "Aumenta la probabilidad de encontrar Pok\xE9mon al iluminar el entorno.",
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
    name: "Ilusi\xF3n",
    desc: "Adopta el aspecto del \xFAltimo Pok\xE9mon del equipo al entrar en combate para desconcertar al rival.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    end: "  \xA1La ilusi\xF3n de [POKEMON] se ha desvanecido!"
  },
  immunity: {
    name: "Inmunidad",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  imposter: {
    name: "Impostor",
    desc: "Se transforma en el Pok\xE9mon que tiene enfrente.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  infiltrator: {
    name: "Allanamiento",
    desc: "Ataca sorteando la barrera o el sustituto del rival.",
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
    name: "Rev\xE9s",
    desc: "Al caer debilitado, inflige al rival un da\xF1o equivalente a los PS que le quedaran.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#aftermath"
  },
  innerfocus: {
    name: "Fuerza Mental",
    desc: "Gracias a su profunda concentraci\xF3n, no se amedrenta ante los ataques del rival.",
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
    name: "Insomnio",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  intimidate: {
    name: "Intimidaci\xF3n",
    desc: "Al entrar en combate amilana al rival de tal manera que su Ataque disminuye.",
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
    name: "Espada Ind\xF3mita",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  ironbarbs: {
    name: "Punta Acero",
    desc: "Inflige da\xF1o al rival si este le golpea con un movimiento de contacto.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    damage: "#roughskin"
  },
  ironfist: {
    name: "Pu\xF1o F\xE9rreo",
    desc: "Aumenta la potencia de los pu\xF1etazos.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  justified: {
    name: "Justiciero",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  keeneye: {
    name: "Vista Lince",
    desc: "Su aguda vista evita que le disminuya la Precisi\xF3n.",
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
    name: "Zoquete",
    desc: "No puede usar objetos equipados.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  leafguard: {
    name: "Defensa Hoja",
    desc: "Evita los problemas de estado si hace sol.",
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
    name: "Levitaci\xF3n",
    desc: "Su capacidad de flotar sobre el suelo le proporciona inmunidad frente a los movimientos de tipo Tierra.",
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
    name: "L\xEDbero",
    desc: "Cambia su tipo al del movimiento que va a usar.",
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
    name: "Metal Liviano",
    desc: "Reduce a la mitad su peso.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lightningrod: {
    name: "Pararrayos",
    desc: "Atrae y neutraliza los movimientos de tipo El\xE9ctrico, que adem\xE1s le suben el Ataque Especial.",
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
    activate: "  \xA1[POKEMON] ha atra\xEDdo el ataque!"
  },
  limber: {
    name: "Flexibilidad",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  lingeringaroma: {
    name: "Olor Persistente",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    changeAbility: "  \xA1Un olor persistente impregna a [TARGET]!"
  },
  liquidooze: {
    name: "Lodo L\xEDquido",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    damage: "  \xA1[POKEMON] ha absorbido la secreci\xF3n viscosa t\xF3xica!"
  },
  liquidvoice: {
    name: "Voz Fluida",
    desc: "Hace que todos sus movimientos que usan sonido pasen a ser de tipo Agua.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  longreach: {
    name: "Remoto",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magicbounce: {
    name: "Espejo M\xE1gico",
    desc: "Puede devolver los movimientos de estado lanzados por el rival, sin verse afectado por ellos.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen5: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    move: "#magiccoat"
  },
  magicguard: {
    name: "Muro M\xE1gico",
    desc: "Solo recibe da\xF1o de ataques.",
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
    name: "Prestidigitador",
    desc: "Roba el objeto del Pok\xE9mon al que alcance con un movimiento.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magmaarmor: {
    name: "Escudo Magma",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  magnetpull: {
    name: "Im\xE1n",
    desc: "Su magnetismo atrae a los Pok\xE9mon de tipo Acero y les impide huir.",
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
    name: "Escama Especial",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megalauncher: {
    name: "Megadisparador",
    desc: "Aumenta la potencia de algunos movimientos de pulsos y auras.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  megasol: {
    name: "Megasolar",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  merciless: {
    name: "Ensa\xF1amiento",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mimicry: {
    name: "Mimetismo",
    desc: "Cambia su tipo seg\xFAn el campo que haya en el terreno de combate.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \xA1[POKEMON] ha recobrado su tipo original!"
  },
  mindseye: {
    name: "Ojo Mental",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  minus: {
    name: "Menos",
    desc: "Potencia su Ataque Especial si un Pok\xE9mon aliado tiene la habilidad M\xE1s o Menos.",
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
    name: "Coraza Reflejo",
    desc: "Refleja los efectos que reducen las caracter\xEDsticas.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  mistysurge: {
    name: "Nebulog\xE9nesis",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moldbreaker: {
    name: "Rompemoldes",
    desc: "Las habilidades del objetivo no afectan a los movimientos que emplea.",
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
    start: "  \xA1[POKEMON] rompe el molde!"
  },
  moody: {
    name: "Veleta",
    desc: "Una caracter\xEDstica le sube mucho en cada turno, pero le baja otra.",
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
    name: "Electromotor",
    desc: "Si le alcanza un movimiento de tipo El\xE9ctrico, le sube la Velocidad en vez de sufrir da\xF1o.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  moxie: {
    name: "Autoestima",
    desc: "Al debilitar a un objetivo, su confianza se refuerza de tal manera que aumenta su Ataque.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multiscale: {
    name: "Multiescamas",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  multitype: {
    name: "Multitipo",
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
    name: "Momia",
    desc: "Contagia la habilidad Momia al rival que entre en contacto con \xE9l.",
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
    changeAbility: "  \xA1La habilidad de [TARGET] es ahora Momia!"
  },
  myceliummight: {
    name: "Poder F\xFAngico",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  naturalcure: {
    name: "Cura Natural",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: ""
    // NEEDS TRANSLATION: Showdown custom text
  },
  neuroforce: {
    name: "Fuerza Cerebral",
    desc: "Potencia los ataques supereficaces.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  neutralizinggas: {
    name: "Gas Reactivo",
    desc: "Anula los efectos de las habilidades de los dem\xE1s Pok\xE9mon presentes mientras est\xE9 en el terreno de combate.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    start: "  \xA1Un gas reactivo se propaga por toda la zona!",
    end: "  El gas reactivo se ha disipado."
  },
  noguard: {
    name: "Indefenso",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  normalize: {
    name: "Normalidad",
    desc: "Hace que todos sus movimientos se vuelvan de tipo Normal y aumenten ligeramente su potencia.",
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
    name: "Despiste",
    desc: "Su indiferencia evita que sea provocado o caiga presa del enamoramiento.",
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
    name: "Oportunista",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  orichalcumpulse: {
    name: "Latido Oricalco",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] intensifica el brillo del sol y desata su pulso primigenio!",
    activate: "  \xA1[POKEMON] recibe los rayos del sol y desata su pulso primigenio!"
  },
  overcoat: {
    name: "Funda",
    desc: "No le afectan las tormentas de arena, el granizo y los movimientos con polvos.",
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
    name: "Espesura",
    desc: "Potencia sus movimientos de tipo Planta cuando le quedan pocos PS.",
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
    name: "Ritmo Propio",
    desc: "Como le gusta hacer las cosas a su manera, los rivales no logran confundirlo.",
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
    name: "Amor Filial",
    desc: "Une fuerzas con su cr\xEDa y ataca dos veces.",
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
    name: "Velo Pastel",
    desc: "Se protege a s\xED mismo y a sus aliados del envenenamiento.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  perishbody: {
    name: "Cuerpo Mortal",
    desc: "Si le alcanza un movimiento de contacto, se debilitar\xE1 al cabo de 3 turnos, as\xED como su agresor, a menos que abandonen el terreno de combate.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1Ambos Pok\xE9mon se debilitar\xE1n dentro de tres turnos!"
  },
  pickpocket: {
    name: "Hurto",
    desc: "Si el rival usa un movimiento de contacto al atacar, le roba el objeto.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pickup: {
    name: "Recogida",
    desc: "Puede recoger objetos que el rival haya usado, o bien otros que encuentre en plena aventura.",
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
    name: "Turbotaladro",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  pixilate: {
    name: "Piel Fe\xE9rica",
    desc: "Convierte los movimientos de tipo Normal en tipo Hada y aumenta ligeramente su potencia.",
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
    name: "M\xE1s",
    desc: "Potencia su Ataque Especial si un Pok\xE9mon aliado tiene la habilidad M\xE1s o Menos.",
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
    name: "Ant\xEDdoto",
    desc: "Si resulta envenenado, recupera PS en vez de perderlos.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisonpoint: {
    name: "Punto T\xF3xico",
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
    name: "T\xEDtere T\xF3xico",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  poisontouch: {
    name: "Toque T\xF3xico",
    desc: "Puede envenenar al objetivo con solo tocarlo.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  powerconstruct: {
    name: "Agrupamiento",
    desc: "Cuando sus PS se ven reducidos a la mitad, las c\xE9lulas se reagrupan y adopta su Forma Completa.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  Sientes m\xFAltiples presencias...",
    transform: "\xA1[POKEMON] ha adoptado la Forma Completa!"
  },
  powerofalchemy: {
    name: "Reacci\xF3n Qu\xEDmica",
    desc: "Reacciona copiando la habilidad de un aliado debilitado.",
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
    name: "Fuente Energ\xEDa",
    desc: "Potencia los movimientos de los Pok\xE9mon adyacentes.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prankster: {
    name: "Bromista",
    desc: "Sus movimientos de estado tienen prioridad alta.",
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
    name: "Presi\xF3n",
    desc: "Presiona al rival para que sus PP se acaben antes.",
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
    start: "  \xA1[POKEMON] ejerce presi\xF3n!"
  },
  primordialsea: {
    name: "Mar del Albor",
    desc: "Altera el clima para anular los ataques de tipo Fuego.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  prismarmor: {
    name: "Armadura Prisma",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  propellertail: {
    name: "H\xE9lice Caudal",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  protean: {
    name: "Mutatipo",
    desc: "Cambia su tipo al del movimiento que va a usar.",
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
    name: "Paleos\xEDntesis",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \xA1La habilidad Paleos\xEDntesis de [POKEMON] se ha activado gracial al sol!",
    activateFromItem: "  \xA1[POKEMON] ha usado la Energ\xEDa Potenciadora para activar Paleos\xEDntesis!",
    start: "  \xA1[STAT:definite:capitalize] de [POKEMON] se ha reforzado!",
    end: "  \xA1El efecto de Paleos\xEDntesis de [POKEMON] ha desaparecido!"
  },
  psychicsurge: {
    name: "Psicog\xE9nesis",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  punkrock: {
    name: "Punk Rock",
    desc: "Potencia los movimientos que usan sonido y reduce a la mitad el da\xF1o que le infligen dichos movimientos.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purepower: {
    name: "Energ\xEDa Pura",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  purifyingsalt: {
    name: "Sal Purificadora",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  quarkdrive: {
    name: "Carga Cuark",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \xA1La habilidad Carga Cuark de [POKEMON] se ha activado gracias al campo el\xE9ctrico!",
    activateFromItem: "  \xA1[POKEMON] ha usado la Energ\xEDa Potenciadora para activar Carga Cuark!",
    start: "  \xA1[STAT:definite:capitalize] de [POKEMON] se ha reforzado!",
    end: "  \xA1El efecto de Carga Cuark de [POKEMON] ha desaparecido!"
  },
  queenlymajesty: {
    name: "Regia Presencia",
    desc: "Intimida al objetivo y le impide usar movimientos con prioridad.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "#damp"
  },
  quickdraw: {
    name: "Mano R\xE1pida",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \xA1[POKEMON] ataca primero gracias a la habilidad Mano R\xE1pida!"
  },
  quickfeet: {
    name: "Pies R\xE1pidos",
    desc: "Aumenta la Velocidad si sufre problemas de estado.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  raindish: {
    name: "Cura Lluvia",
    desc: "Recupera PS de forma gradual cuando llueve.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  rattled: {
    name: "Cobard\xEDa",
    desc: "Si le alcanza un movimiento de tipo Siniestro, Bicho o Fantasma, el miedo hace que le suba la Velocidad.",
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
    name: "Receptor",
    desc: "Adquiere la habilidad de un aliado debilitado.",
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
    changeAbility: "  \xA1El Pok\xE9mon ha recibido la habilidad [ABILITY] de [SOURCE]!"
  },
  reckless: {
    name: "Audaz",
    desc: "Potencia los movimientos que tambi\xE9n da\xF1an al usuario.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  refrigerate: {
    name: "Piel Helada",
    desc: "Convierte los movimientos de tipo Normal en tipo Hielo y aumenta ligeramente su potencia.",
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
    name: "Regeneraci\xF3n",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  ripen: {
    name: "Maduraci\xF3n",
    desc: "Hace madurar las bayas, por lo que duplica sus efectos.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rivalry: {
    name: "Rivalidad",
    desc: "Si el objetivo es del mismo sexo, su competitividad le lleva a infligir m\xE1s da\xF1o. Si es del sexo contrario, en cambio, el da\xF1o ser\xE1 menor.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rkssystem: {
    name: "Sistema Alfa",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  rockhead: {
    name: "Cabeza Roca",
    desc: "No puede da\xF1arse con sus propios movimientos.",
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
    name: "Transportarrocas",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  roughskin: {
    name: "Piel Tosca",
    desc: "Hiere con su piel \xE1spera al rival que lo ataque con un movimiento de contacto.",
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
    damage: "  \xA1[POKEMON] ha resultado herido!"
  },
  runaway: {
    name: "Fuga",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandforce: {
    name: "Poder Arena",
    desc: "Potencia los movimientos de tipo Tierra, Acero y Roca durante las tormentas de arena.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandrush: {
    name: "\xCDmpetu Arena",
    desc: "Aumenta su Velocidad durante las tormentas de arena.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandspit: {
    name: "Expulsarena",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sandstream: {
    name: "Chorro Arena",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sandveil: {
    name: "Velo Arena",
    desc: "Aumenta su Evasi\xF3n durante las tormentas de arena.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sapsipper: {
    name: "Herb\xEDvoro",
    desc: "Neutraliza los movimientos de tipo Planta y sube su Ataque.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  schooling: {
    name: "Banco",
    desc: "Forma bancos con sus cong\xE9neres cuando tiene muchos PS, lo cual le otorga m\xE1s fuerza. Cuando le quedan pocos PS, el banco se dispersa.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "\xA1[POKEMON] ha formado un banco!",
    transformEnd: "\xA1El banco de [POKEMON] se ha dispersado!"
  },
  scrappy: {
    name: "Intr\xE9pido",
    desc: "Puede alcanzar a Pok\xE9mon de tipo Fantasma con movimientos de tipo Normal o Lucha.",
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
    name: "Antibarrera",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  seedsower: {
    name: "Disemillar",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  serenegrace: {
    name: "Dicha",
    desc: "Aumenta la probabilidad de que los movimientos causen efectos secundarios.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  shadowshield: {
    name: "Guardia Espectro",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shadowtag: {
    name: "Sombra Trampa",
    desc: "Impide que el enemigo huya o sea cambiado por otro.",
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
    name: "Cortante",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shedskin: {
    name: "Mudar",
    desc: "Puede curar sus problemas de estado al mudar la piel.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sheerforce: {
    name: "Potencia Bruta",
    desc: "Sube la potencia de sus movimientos en detrimento de los efectos secundarios, que se ven anulados.",
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
    name: "Caparaz\xF3n",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  shielddust: {
    name: "Polvo Escudo",
    desc: "El polvo de escamas que lo envuelve lo protege de los efectos secundarios de los ataques recibidos.",
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
    name: "Escudo Limitado",
    desc: "Rompe su coraza cuando sus PS se ven reducidos a la mitad y adopta una forma ofensiva.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "\xA1Escudo Limitado activado!",
    transformEnd: "Escudo Limitado desactivado."
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
    name: "Encadenado",
    desc: "Ejecuta siempre los movimientos m\xFAltiples con el n\xFAmero m\xE1ximo de golpes.",
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
    name: "Inicio Lento",
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
    start: "  \xA1[POKEMON] no rinde todo lo que podr\xEDa!",
    end: "  \xA1[POKEMON] ahora va a a por todas!"
  },
  slushrush: {
    name: "Quitanieves",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  sniper: {
    name: "Francotirador",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  snowcloak: {
    name: "Manto N\xEDveo",
    desc: "Sube la Evasi\xF3n cuando graniza.",
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
    name: "Nevada",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solarpower: {
    name: "Poder Solar",
    desc: "Si hace sol, aumenta su Ataque Especial, pero pierde PS en cada turno.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  solidrock: {
    name: "Roca S\xF3lida",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soulheart: {
    name: "Cor\xE1nima",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  soundproof: {
    name: "Insonorizar",
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
    name: "Impulso",
    desc: "Aumenta su Velocidad en cada turno.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  spicyspray: {
    name: "Salpicante",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stakeout: {
    name: "Vigilante",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stall: {
    name: "Rezagado",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stalwart: {
    name: "Ac\xE9rrimo",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stamina: {
    name: "Firmeza",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stancechange: {
    name: "Cambio T\xE1ctico",
    desc: "Adopta la Forma Filo al lanzar un ataque, o bien la Forma Escudo si usa el movimiento Escudo Real.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen6: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    transform: "\xA1Cambio a Forma Filo!",
    transformEnd: "\xA1Cambio a Forma Escudo!"
  },
  static: {
    name: "Electricidad Est\xE1tica",
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
    name: "Impasible",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steamengine: {
    name: "Combustible",
    desc: "Si le alcanza un movimiento de tipo Fuego o Agua, le sube much\xEDsimo la Velocidad.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelworker: {
    name: "Acero Templado",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  steelyspirit: {
    name: "Alma Acerada",
    desc: "Potencia los movimientos de tipo Acero de los aliados.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  stench: {
    name: "Hedor",
    desc: "Puede amedrentar al rival al atacarlo debido al mal olor que emana.",
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
    name: "Viscosidad",
    desc: "Los objetos se quedan pegados a su cuerpo, por lo que no pueden rob\xE1rselos.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    block: "  \xA1Es imposible robarle objetos a [POKEMON]!"
  },
  stormdrain: {
    name: "Colector",
    desc: "Atrae y neutraliza los movimientos de tipo Agua, que adem\xE1s le suben el Ataque Especial.",
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
    name: "Mand\xEDbula Fuerte",
    desc: "Su robusta mand\xEDbula le confiere una mordedura potente.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  sturdy: {
    name: "Robustez",
    desc: "Evita que el rival pueda debilitarlo de un solo golpe cuando tiene los PS al m\xE1ximo. Tambi\xE9n evita los movimientos fulminantes.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: "",
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "  \xA1[POKEMON] ha aguantado el golpe!"
  },
  suctioncups: {
    name: "Ventosas",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  \xA1[POKEMON] se aferra al suelo gracias a la habilidad Ventosas!"
  },
  superluck: {
    name: "Afortunado",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  supersweetsyrup: {
    name: "N\xE9ctar Dulce",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1El n\xE9ctar de [POKEMON] desprende un aroma dulz\xF3n!"
  },
  supremeoverlord: {
    name: "General Supremo",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \xA1[POKEMON] recibe fuerzas de los aliados ca\xEDdos!"
  },
  surgesurfer: {
    name: "Cola Surf",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  swarm: {
    name: "Enjambre",
    desc: "Potencia sus movimientos de tipo Bicho cuando le quedan pocos PS.",
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
    name: "Velo Dulce",
    desc: "No cae dormido y evita tambi\xE9n que sus aliados se duerman.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  \xA1[POKEMON] no se ha dormido debido al efecto de Velo Dulce!"
  },
  swiftswim: {
    name: "Nado R\xE1pido",
    desc: "Sube su Velocidad cuando llueve.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen7: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  swordofruin: {
    name: "Espada Debacle",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] ha mermado la Defensa de los dem\xE1s Pok\xE9mon con Espada Debacle!"
  },
  symbiosis: {
    name: "Simbiosis",
    desc: "Pasa su objeto a un aliado que ya haya utilizado el suyo.",
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
    activate: "  \xA1[POKEMON] le ha dado [ITEM:definite:classified] a [TARGET]!"
  },
  synchronize: {
    name: "Sincron\xEDa",
    desc: "Contagia el envenenamiento, las quemaduras o la par\xE1lisis al Pok\xE9mon que le cause ese estado.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen4: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  tabletsofruin: {
    name: "Tablilla Debacle",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] ha mermado el Ataque de los dem\xE1s Pok\xE9mon con Tablilla Debacle!"
  },
  tangledfeet: {
    name: "Tumbos",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  tanglinghair: {
    name: "Rizos Rebeldes",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  technician: {
    name: "Experto",
    desc: "Potencia sus movimientos m\xE1s d\xE9biles.",
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
    name: "Telepat\xEDa",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    block: "  \xA1[POKEMON] no ha sufrido el ataque de su aliado!"
  },
  teraformzero: {
    name: "Teraformaci\xF3n 0",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  terashell: {
    name: "Teracaparaz\xF3n",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \xA1[POKEMON] ha hecho brillar su caparaz\xF3n y ha alterado su compatibilidad entre tipos!"
  },
  terashift: {
    name: "Teracambio",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    transform: "\xA1[POKEMON] se ha transformado!"
  },
  teravolt: {
    name: "Terravoltaje",
    desc: "Las habilidades del objetivo no afectan a los movimientos que emplea.",
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
    start: "  \xA1[POKEMON] desprende un aura chisporroteante!"
  },
  thermalexchange: {
    name: "Termoconversi\xF3n",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  thickfat: {
    name: "Sebo",
    desc: "Gracias a la gruesa capa de grasa que lo protege, reduce a la mitad el da\xF1o que recibe de ataques de tipo Fuego o Hielo.",
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
    name: "Cromolente",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  torrent: {
    name: "Torrente",
    desc: "Potencia sus movimientos de tipo Agua cuando le quedan pocos PS.",
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
    name: "Garra Dura",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicboost: {
    name: "\xCDmpetu T\xF3xico",
    desc: "Aumenta la potencia de sus ataques f\xEDsicos cuando est\xE1 envenenado.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicchain: {
    name: "Cadena T\xF3xica",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  toxicdebris: {
    name: "Capa T\xF3xica",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  trace: {
    name: "Calco",
    desc: "Al entrar en combate copia la habilidad del rival.",
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
    changeAbility: "  \xA1[POKEMON] rastre\xF3 [ABILITY] de [SOURCE]!"
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
    name: "Primer Auxilio",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  truant: {
    name: "Ausente",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen3: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    cant: "\xA1[POKEMON] est\xE1 holgazaneando!"
  },
  turboblaze: {
    name: "Turbollama",
    desc: "Las habilidades del objetivo no afectan a los movimientos que emplea.",
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
    start: "  \xA1[POKEMON] desprende un aura llameante!"
  },
  unaware: {
    name: "Ignorante",
    desc: "Pasa por alto las mejoras en las caracter\xEDsticas del rival al atacar.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unburden: {
    name: "Liviano",
    desc: "Sube su Velocidad si usa o pierde el objeto que lleva.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  unnerve: {
    name: "Nerviosismo",
    desc: "Pone nervioso al rival y le impide usar bayas.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[TEAM:capitalize] est\xE1 muy nervioso y no puede comer bayas!"
  },
  unseenfist: {
    name: "Pu\xF1o Invisible",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    champions: {
      shortDesc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "Caldero Debacle",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "  \xA1[POKEMON] ha mermado el Ataque Especial de los dem\xE1s Pok\xE9mon con Caldero Debacle!"
  },
  victorystar: {
    name: "Tinovictoria",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  vitalspirit: {
    name: "Esp\xEDritu Vital",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  voltabsorb: {
    name: "Absorbe Electricidad",
    desc: "Si le alcanza un movimiento de tipo El\xE9ctrico, recupera PS en vez de sufrir da\xF1o.",
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
    name: "Alma Errante",
    desc: "Si le alcanza un movimiento de contacto, intercambia su habilidad con la del agresor.",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    gen8: {
      desc: ""
      // NEEDS TRANSLATION: not in PokeAPI
    },
    activate: "#skillswap"
  },
  waterabsorb: {
    name: "Absorbe Agua",
    desc: "Si le alcanza un movimiento de tipo Agua, recupera PS en vez de sufrir da\xF1o.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterbubble: {
    name: "Pompa",
    desc: "Reduce el da\xF1o que le provocan los movimientos de tipo Fuego y es inmune a las quemaduras.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  watercompaction: {
    name: "Hidrorrefuerzo",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  waterveil: {
    name: "Velo Agua",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  weakarmor: {
    name: "Armadura Fr\xE1gil",
    desc: "Al recibir da\xF1o de un ataque f\xEDsico, le baja la Defensa, pero le sube mucho la Velocidad.",
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
    name: "Cuerpo Horneado",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  whitesmoke: {
    name: "Humo Blanco",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wimpout: {
    name: "Huida",
    desc: "Se asusta y abandona el terreno de combate cuando sus PS se ven reducidos a la mitad.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  windpower: {
    name: "Energ\xEDa E\xF3lica",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    start: "#electromorphosis"
  },
  windrider: {
    name: "Surcavientos",
    desc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  wonderguard: {
    name: "Superguarda",
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
    name: "Piel Milagro",
    desc: "Presenta una mayor resistencia ante los movimientos de estado.",
    shortDesc: ""
    // NEEDS TRANSLATION: not in PokeAPI
  },
  zenmode: {
    name: "Modo Daruma",
    desc: "Cambia de forma si sus PS se ven reducidos a la mitad.",
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
    transform: "\xA1Modo Daruma activado!",
    transformEnd: "Modo Daruma desactivado."
  },
  zerotohero: {
    name: "Cambio Heroico",
    shortDesc: "",
    // NEEDS TRANSLATION: not in PokeAPI
    activate: "  \xA1[POKEMON] ha vuelto con una transformaci\xF3n heroica!"
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
