// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}
// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let vikingWarrior = Math.floor(Math.random() * this.vikingArmy.length);
    let chosenViking = this.vikingArmy[vikingWarrior];
    let saxonWarrior = Math.floor(Math.random() * this.saxonArmy.length);
    let chosenSaxon = this.saxonArmy[saxonWarrior];
    let saxonDamageTaken = chosenSaxon.receiveDamage(chosenViking.attack());
    if (chosenSaxon.health <= 0) {
      this.saxonArmy.splice(saxonWarrior, 1);
    }
    return saxonDamageTaken;
  }
  saxonAttack() {
    let vikingWarrior = Math.floor(Math.random() * this.vikingArmy.length);
    let chosenViking = this.vikingArmy[vikingWarrior];
    let saxonWarrior = Math.floor(Math.random() * this.saxonArmy.length);
    let chosenSaxon = this.saxonArmy[saxonWarrior];
    let vikingDamageTaken = chosenViking.receiveDamage(chosenSaxon.attack());
    if (chosenViking.health <= 0) {
      this.vikingArmy.splice(vikingWarrior, 1);
    }
    return vikingDamageTaken;
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    } else if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

const viking = new Viking('Claudio', 100, 14);
const viking2 = new Viking('Claudio', 200, 12);
const viking3 = new Viking('Claudio', 50, 40);
const saxon1 = new Saxon(100, 14);
const saxon2 = new Saxon(200, 12);
const saxon3 = new Saxon(50, 40);
const war = new War();

war.addViking(viking);
war.addViking(viking2);
war.addViking(viking3);
war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);

console.log(war.saxonAttack());
console.log(war.saxonAttack());
console.log(war.saxonAttack());
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.vikingAttack());

// addViking(viking);
// vikingAttack();
// saxonAttack();
// vikingAttack();
// saxonAttack();
// vikingAttack();
// saxonAttack();
// vikingAttack();
// saxonAttack();
// vikingAttack();
// saxonAttack();
// vikingAttack();

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
