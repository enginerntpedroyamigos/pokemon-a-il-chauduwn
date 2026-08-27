'use strict';
const Sim = require('./dist/sim');
const Dex = Sim.Dex;

// Encontrar los formatids reales que genera Showdown para nuestros formatos
const formats = Dex.formats.all().filter(f => f.mod === 'anil');
console.log('Formatos del mod anil encontrados:');
for (const f of formats) console.log(' -', f.id, '|', f.name);

const customGameFormat = formats.find(f => f.id.includes('customgame'));
if (!customGameFormat) throw new Error('No se encontró el Custom Game de Añil');

function runTest(name, team1, team2, turns, checks) {
	console.log('\n=== ' + name + ' ===');
	const battle = new Sim.Battle({
		format: customGameFormat,
		p1: { team: team1 },
		p2: { team: team2 },
		seed: [1, 2, 3, 4],
		debug: false,
	});
	if (battle.requestState === 'teampreview') {
		battle.makeChoices('team 1', 'team 1');
	}
	for (let i = 0; i < turns; i++) {
		if (battle.ended) break;
		battle.makeChoices('move 1', 'move 1');
	}
	checks(battle);
	battle.destroy();
}

// --- Test 1: Royaleon existe con los stats correctos y la habilidad Realeza funciona ---
runTest(
	'Royaleon + Realeza',
	[{ species: 'Royaleon', ability: 'Realeza', moves: ['tackle'], level: 100 }],
	[{ species: 'Wobbuffet', ability: 'Shadow Tag', moves: ['splash'], level: 100 }],
	1,
	(battle) => {
		const royaleon = battle.p1.active[0];
		console.log('Especie:', royaleon.species.name, '| BST:', Object.values(royaleon.species.baseStats).reduce((a, b) => a + b));
		console.log('Habilidad activa:', royaleon.ability);
		const hasBoostLog = battle.log.some(l => l.includes('Tackle') || l.includes('move|'));
		console.log('¿Usó Tackle?', hasBoostLog);
	}
);

// --- Test 2: Escalofrío (movimiento custom) debe congelar directamente ---
runTest(
	'Escalofrío congela',
	[{ species: 'Regirock', moves: ['escalofro'], level: 100 }],
	[{ species: 'Wobbuffet', moves: ['splash'], level: 100 }],
	1,
	(battle) => {
		const target = battle.p2.active[0];
		console.log('Status del objetivo tras Escalofrío:', target.status);
		console.log('Log relevante:', battle.log.filter(l => l.includes('frz') || l.includes('Escalofr')).join(' | '));
	}
);

// --- Test 3: Atrapabicho debe ser "super effective" contra un tipo Bicho puro ---
runTest(
	'Atrapabicho vs tipo Bicho',
	[{ species: 'Registeel', moves: ['atrapabicho'], level: 100 }],
	[{ species: 'Scyther', moves: ['splash'], level: 100 }],
	1,
	(battle) => {
		const log = battle.log.filter(l => l.includes('-supereffective') || l.includes('-damage') || l.includes('move|')).join(' | ');
		console.log('Log:', log);
	}
);

// --- Test 4: Triple Golpe (multihit creciente) ---
runTest(
	'Triple Golpe multihit',
	[{ species: 'Machamp', moves: ['triplegolpe'], level: 100 }],
	[{ species: 'Snorlax', moves: ['splash'], level: 100 }],
	1,
	(battle) => {
		const hits = battle.log.filter(l => l.startsWith('|-damage|')).length;
		console.log('Golpes registrados:', hits);
		console.log(battle.log.filter(l => l.includes('hitcount') || l.startsWith('|-damage|')).join(' | '));
	}
);

// --- Test 4b: Luz Devastadora debe pegarle neutral a un tipo Hada puro ---
runTest(
	'Luz Devastadora vs tipo Hada',
	[{ species: 'Regidrago', moves: ['luzdevastadora'], level: 100 }],
	[{ species: 'Sylveon', moves: ['splash'], level: 100 }],
	1,
	(battle) => {
		const log = battle.log.filter(l => l.includes('-immune') || l.includes('-damage') || l.includes('move|')).join(' | ');
		console.log('Log:', log);
	}
);

// --- Test 5: Toque Ardiente (habilidad custom, quema por contacto) — 200 intentos para ver proc ---
{
	console.log('\n=== Toque Ardiente (probabilidad de quemar) ===');
	let burns = 0;
	const N = 100;
	for (let i = 0; i < N; i++) {
		const battle = new Sim.Battle({
			format: customGameFormat,
			p1: { team: [{ species: 'Machamp', ability: 'Toque Ardiente', moves: ['tackle'], level: 100 }] },
			p2: { team: [{ species: 'Blissey', moves: ['splash'], level: 100 }] },
			seed: [i + 1, i + 2, i + 3, i + 4],
			debug: false,
		});
		if (battle.requestState === 'teampreview') battle.makeChoices('team 1', 'team 1');
		battle.makeChoices('move 1', 'move 1');
		if (battle.p2.active[0].status === 'brn') burns++;
		battle.destroy();
	}
	console.log(`Quemados: ${burns}/${N} (~${burns}% , esperado ~30%)`);
}

// --- Test 6: Validar que el team validator acepta un equipo con contenido custom ---
{
	console.log('\n=== Team Validator ===');
	const TeamValidator = Sim.TeamValidator;
	const validator = new TeamValidator(customGameFormat);
	const team = Dex.mod('anil').fastUnpackTeam ?
		null : null;
	const testTeam = [
		{ species: 'Royaleon', ability: 'Realeza', moves: ['tackle', 'triplegolpe'], level: 100 },
		{ species: 'Cefireon', ability: 'Lightning Rod', moves: ['escalofro'], level: 100 },
		{ species: 'Farfetchd', ability: 'Keen Eye', moves: ['atrapabicho'], level: 100 },
	];
	const problems = validator.validateTeam(testTeam);
	console.log('Problemas encontrados:', problems || 'ninguno (equipo válido)');
}

console.log('\n=== FIN DE PRUEBAS ===');
