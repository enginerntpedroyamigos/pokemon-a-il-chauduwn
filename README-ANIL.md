# Pokémon Añil — mod para Pokémon Showdown

Fork funcional de [Pokémon Showdown](https://github.com/smogon/pokemon-showdown) con un mod completo
(`data/mods/anil/`) que replica el contenido competitivo de **Pokémon Añil v4.0** (fangame de EricLostie):

- **283 Pokémon con stats rebalanceados** respecto a los juegos oficiales (`pokedex.ts`)
- **2 especies nuevas**: Royaleon y Cefireon, Eeveelutions exclusivas de Añil (`pokedex.ts`)
- **12 habilidades inventadas**, con su lógica de combate real implementada (`abilities.ts`)
- **5 movimientos inventados**, con su mecánica real implementada (`moves.ts`)
- **Movesets completos** (nivel + tutor + huevo) de las 1027 especies, sacados directo del juego (`learnsets.ts`)
- **2 formatos jugables** ya registrados: `[Gen 9] Añil OU` y `[Gen 9] Añil Custom Game`

Todo esto fue probado con una batería de tests reales usando el simulador (`anil-test.js`, incluido) —
Escalofrío congela, Realeza sube el daño, Atrapabicho le pega fuerte a tipo Bicho, Triple Golpe golpea
3 veces creciendo en potencia, Luz Devastadora le pega neutral a tipo Hada, Toque Ardiente quema por
contacto (~30% de las veces), y el Team Validator acepta equipos con el contenido custom sin errores.

## Cómo correrlo

Necesitás [Node.js](https://nodejs.org/) 18 o superior.

```bash
npm install
node build
node pokemon-showdown start --no-security
```

Esto levanta un servidor local en `http://localhost:8000`. Abrilo en el navegador y ya vas a poder
elegir "[Gen 9] Añil OU" o "[Gen 9] Añil Custom Game" en la lista de formatos para armar equipos y
batallar — igual que en [play.radicalred.net](https://play.radicalred.net), pero para Añil.

`--no-security` es solo para pruebas locales (no exige registro de cuenta). Para algo público de verdad
hay que revisar `config/config.js` (se genera solo la primera vez que corrés `node pokemon-showdown`)
y seguir la [documentación oficial de hosting de Showdown](https://github.com/smogon/pokemon-showdown/blob/master/config/config-example.js).

## Cómo correr las pruebas que ya hicimos

```bash
node anil-test.js
```

Corre 6 pruebas contra el simulador real (no contra un servidor) y muestra el log de batalla de cada una.

## Qué falta / limitaciones conocidas

- **MTs (TMs) por Pokémon**: la fuente de datos (Fakedex) no trackea qué MTs puede aprender cada
  Pokémon individualmente — Añil usa el sistema de Essentials donde las MTs son enseñables por
  compatibilidad de tipo, no por Pokémon. Así que `learnsets.ts` solo tiene nivel + tutor + huevo.
  Si querés MTs reales, hay que sacarlas de las PBS del juego (`Moves.txt`/`Pokemon.txt`) directamente.
- **Formas alternativas** (Megas, formas regionales, etc.): el dataset trae 492 formas adicionales
  (`pokemonForms` en el JSON crudo) que todavía no se pasaron al mod — solo están las 1025 especies
  base + Royaleon + Cefireon.
- **Evolución de Royaleon/Cefireon**: no encontré el disparador exacto (nivel, hora del día, amistad,
  etc.) en las fuentes que consulté — dejé un nivel 30 de placeholder marcado con `// TODO` en
  `pokedex.ts`. Vale la pena confirmarlo jugando el juego o preguntando en el Discord del creador.
- **Luz Devastadora**: vale aclarar que no es 100% invención de Eric — Showdown ya trae dataminado un
  movimiento futuro llamado "Nihil Light" con exactamente el mismo mecanismo (ignora la inmunidad
  Dragón/Hada, ignora Def. Esp. y Evasión). Eric lo tomó de ahí y le subió la potencia de 100 a 200.
- **Solo 1 tier**: por ahora "Añil OU" no tiene una lista de baneos propia (usa el ruleset `Standard`
  tal cual) — si el objetivo es tener una liga competitiva real, tocaría armar un banlist a mano.

## Estructura

```
data/mods/anil/
  pokedex.ts      — 283 stats rebalanceados + Royaleon + Cefireon + Eevee actualizado
  abilities.ts    — 12 habilidades custom
  moves.ts        — 5 movimientos custom
  learnsets.ts    — movesets de las 1027 especies
config/formats.ts — acá se registraron los 2 formatos nuevos (buscar "Pokémon Añil")
anil-test.js      — script de pruebas contra el simulador
```
