// interface is not present in javascript.so we assume three function inside MainEntity as one interface compare to other language

const mover = {
    move() {
        console.log(`${this.name} moved`)
    }
}

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
        targetEntity.takeDamage(this.attackDamage)
    }
}

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount
        console.log(`${this.name} has ${this.health} health remaining`)
    }
}

class Entity {
    constructor(name) {
        this.name = name;
    }
}

class Character extends Entity {
    constructor(name,attackDamage,health) {
        super(name);
        this.attackDamage = attackDamage
        this.health = health
    }

}

Object.assign(Character.prototype,mover);
Object.assign(Character.prototype,attacker);
Object.assign(Character.prototype,hasHealth)

class Wall extends Entity {
    constructor(name, health) {
        super(name);
        this.health = health
    }
}
Object.assign(Wall.prototype,hasHealth)

class Turret extends Entity {
    constructor(name,takeDamage) {
        super(name);
        this.takeDamage = takeDamage;
    }
}
Object.assign(Turret.prototype,attacker)

const turret = new Turret('Turret', 5);
const character = new Character('Character', 3, 200)
const wall = new Wall('Wall', 200);
turret.attack(character);
character.move()
character.attack(wall)