// Mod Añil: registra manualmente los índices de ícono para Royaleon y Cefireon,
// ya que sus números de Pokédex (-5015/-5016) quedan fuera del rango normal (0-1025)
// que el cliente usa para calcular la posición en pokemonicons-sheet.png.
// Usamos los 2 últimos huecos libres de la hoja oficial: índices 1642 y 1643.
window.BattlePokemonIconIndexes = window.BattlePokemonIconIndexes || {};
window.BattlePokemonIconIndexes.royaleon = 1642;
window.BattlePokemonIconIndexes.cefireon = 1643;
