export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
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
		name: "Escalofrío",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: 'frz',
		target: "normal",
		type: "Ice",
		shortDesc: "Congela al objetivo. No hace daño directo.",
		contestType: "Clever",
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
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Ice",
		shortDesc: "Sube la Velocidad del usuario en 1 tras el golpe.",
		contestType: "Cool",
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
			// Especialmente eficaz contra Bicho, sin importar el tipo chart normal
			if (type === 'Bug') return 1;
		},
		target: "normal",
		type: "Grass",
		shortDesc: "Muy eficaz contra Pokémon de tipo Bicho.",
		contestType: "Cool",
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
		shortDesc: "Golpea 3 veces; cada golpe es más fuerte que el anterior (15/30/45).",
		contestType: "Cool",
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
		ignoreImmunity: { 'Dragon': true },
		target: "normal",
		type: "Dragon",
		shortDesc: "Golpea neutralmente a tipo Hada. Ignora cambios de Def. Esp. y Evasión del rival.",
		contestType: "Cool",
	},
};
