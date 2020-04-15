abstract class Item {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    energy: number;

    constructor(name: string, energy: number) {
        super(name, 3);
        this.energy = energy;

    }

}

class Arrow extends Item {
    power: number;

    constructor(name: string, power: number) {
        super(name, 1);
        this.power = power;

    }
}

class Player {
    name: string;
    life: number;
    itemBag: Array<Item>;
    sizeUsed: number;

    constructor(name: string) {
        this.name = name;
        this.life = 3;
        this.itemBag = new Array<Item>();
        this.sizeUsed = 0;

    }

    getItem(item: Item): boolean {

        let itemSize = item.size + this.sizeUsed;
        if (this.sizeUsed <= 9) {
            this.itemBag.push(item);
            this.sizeUsed += itemSize;
            console.log("Victoire !! votre" + item.name + " à été ajouté !");
            return true;
        } else {
            console.log("Vous n'avez plus de place dans votre sac !");
            return false;
        }
    }
}

let newPlayer: Player = new Player("Arthas");

let tpDalaran: Teleporter = new Teleporter(" Tp pour Dalaran", 8);
let tpOrgri: Teleporter = new Teleporter("Orgrimar", 6);

let arrowBlack: Arrow = new Arrow(" Flèche Artic", 500);

newPlayer.getItem(tpDalaran);
newPlayer.getItem(arrowBlack);
newPlayer.getItem(tpOrgri);
newPlayer.getItem(arrowBlack);
newPlayer.getItem(tpDalaran);
newPlayer.getItem(tpDalaran);

console.log(newPlayer);
