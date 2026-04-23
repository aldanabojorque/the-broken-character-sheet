

const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;

let health = 80;
let mana = 120;
let attack = 45;
let defense = 30;


function calculateDamage(attackValue, defenseValue) {
  const rawDamage = attackValue - defenseValue;
  return rawDamage > 0 ? rawDamage : 0;
}


const isAlive = (currentHealth) => currentHealth > 0;

const canCastSpell = (currentMana, spellCost, isStunned) =>
  currentMana >= spellCost && !isStunned;


function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}



console.log("=== Presentación del personaje ===");
console.log(getPresentation(name, characterClass, level));

console.log("\n=== Cálculo de daño ===");
console.log("Daño causado:", calculateDamage(attack, defense));

console.log("\n=== Estado de vida ===");
console.log("¿Sigue con vida?", isAlive(health));

console.log("\n=== Lanzamiento de hechizo ===");
const spellCost = 30;
const isStunned = false;
console.log(
  "¿Puede lanzar el hechizo?",
  canCastSpell(mana, spellCost, isStunned)
);
