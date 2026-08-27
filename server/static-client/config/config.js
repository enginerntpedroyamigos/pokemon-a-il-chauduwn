/** @type {import('../play.pokemonshowdown.com/src/client-main').PSConfig} */
var Config = Config || {};

/* version */ Config.version = "0";

Config.bannedHosts = ['cool.jit.su', 'pokeball-nixonserver.rhcloud.com'];

Config.whitelist = [
	'wikipedia.org'
];

// MOD AÑIL: en vez de valores fijos (que habría que editar a mano cada vez que
// cambia dónde está hosteado esto), detectamos en vivo desde dónde se está
// sirviendo esta página y usamos eso. Sirve igual corriendo en localhost que
// en Render/Railway/lo que sea, sin tocar nada.
Config.routes = {
	root: location.host,
	client: location.host,
	dex: 'dex.pokemonshowdown.com',
	replays: 'replay.pokemonshowdown.com',
	users: location.host + '/users',
	teams: 'teams.pokemonshowdown.com',
};

// `defaultserver` especifica el servidor a usar cuando el dominio en la
// barra de direcciones es `Config.routes.client` (siempre, en nuestro caso,
// ya que cliente y servidor de batalla viven en el mismo origen).
Config.defaultserver = {
	id: 'anil',
	host: location.hostname,
	port: location.protocol === 'https:' ? 443 : (Number(location.port) || 80),
	httpport: location.protocol === 'https:' ? 443 : (Number(location.port) || 80),
	altport: location.protocol === 'https:' ? 443 : (Number(location.port) || 80),
	registered: false
};

Config.roomsFirstOpenScript = function () {
};

Config.customcolors = {
	'zarel': 'aeo'
};

Config.version = "0.11.2-anil";
