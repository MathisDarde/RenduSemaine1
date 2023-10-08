let nom_heros = ["Corey", "Shawn", "Steven", "Antony", "Terry"];

let competence = [" le geek", " la terreur", " l'intellectuel", " l'idiot", " le touriste"]

let tableaumorts = ""

class Personnage {
    constructor(nom, pointsdevie, hit, attaque_prob, death_hit_prob) {
        this.nom = nom
        this.pdv = pointsdevie
        this.degats = hit
        this.attaque = attaque_prob
        this.contrecoup = death_hit_prob
    }

    attaquer(target){
        if (Math.random() < this.attaque) {
            console.log(`${this.nom} attaque ${target.nom} et lui inflige ${this.degats} points de dégats.`)
            target.pdv -= this.degats;
        }
        else {
            console.log(`${this.nom} a raté son attaque contre ${target.nom}.`);
        }
    }

    encaisserDegats(hit) {
        if (Math.random() < this.contrecoup) {
            console.log(`${this.nom} contre-attaque et encaisse ${hit} points de dégâts.`);
            this.pdv -= hit;
        }
        else {
            console.log(`${this.nom} encaisse ${hit} points de dégâts.`);
        }

        if (this.pdv <= 0) {
            console.log(`${this.nom} a été vaincu.`);
        }
    }
}

class Mechant {
    constructor(nom_mechant, pointsdevie, hit, attaque_prob, death_hit_prob) {
        this.nom = nom_mechant
        this.pdv = pointsdevie
        this.degats = hit
        this.attaque = attaque_prob
        this.contrecoup = death_hit_prob
    }

    attaquer(target){
        if (Math.random() < this.attaque) {
            console.log(`${this.nom} attaque ${target.nom} et lui inflige ${this.degats} points de dégats.`)
            target.pdv -= this.degats;
        }
        else {
            console.log(`${this.nom} a raté son attaque contre ${target.nom}.`);
        }
    }

    encaisserDegats(hit) {
        if (Math.random() < this.contrecoup) {
            console.log(`${this.nom} contre-attaque et encaisse ${hit} points de dégâts.`);
            this.pdv -= hit;
        }
        else {
            console.log(`${this.nom} encaisse ${hit} points de dégâts.`);
        }

        if (this.pdv <= 0) {
            console.log(`${this.nom} a été vaincu.`);
        }
    }
}

let heros = new Personnage(nom_heros[Math.floor(Math.random()*4)] + competence[Math.floor(Math.random() * 4)], 100, 20, 0.8, 0.2);
let heros2 = new Personnage(nom_heros[Math.floor(Math.random()*4)] + competence[Math.floor(Math.random() * 4)], 100, 20, 0.6, 0.4);
let heros3 = new Personnage(nom_heros[Math.floor(Math.random()*4)] + competence[Math.floor(Math.random() * 4)], 100, 20, 0.7, 0.3);
let heros4 = new Personnage(nom_heros[Math.floor(Math.random()*4)] + competence[Math.floor(Math.random() * 4)], 100, 20, 0.8, 0.2);
let heros5 = new Personnage(nom_heros[Math.floor(Math.random()*4)] + competence[Math.floor(Math.random() * 4)], 100, 20, 0.7, 0.3);

let tableauheros = [heros, heros2, heros3, heros4, heros5];

let i = 0;

let tueur = new Mechant("Jason l'assassin", 100, 80, 0.7, 0.3);

let tour = 1;
while (tableauheros[i%tableauheros.length].pdv > 0 && tueur.pdv > 0) {
    console.log(`Tour ${tour}:`);

    tableauheros[i%tableauheros.length].attaquer(tueur);

    if (tueur.pdv <= 0) {
        console.log(`${tableauheros[i%tableauheros.length].nom} a vaincu Jason l'assassin.`)
        break;
    }

    tueur.attaquer(tableauheros[i%tableauheros.length]);

    if (tableauheros[i%tableauheros.length].pdv <= 0) {
        console.log(`${tueur.nom} a vaincu ${tableauheros[i%tableauheros.length].nom}`)
        tableaumorts += tableauheros[i%tableauheros.length].nom + ", ";
        break;
    }

    console.log(`${tableauheros[i%tableauheros.length].nom} : ${tableauheros[i%tableauheros.length].pdv} points de vie`);
    console.log(`${tueur.nom} : ${tueur.pdv} points de vie`);
    tour++;
    i++;
}

if (tableauheros[i%tableauheros.length].pdv <= 0) {
    console.log("Le héros a été vaincu par le tueur. Le tueur gagne !");
    console.log("Les héros suivants sont décédés au cours de la bataille : " + tableaumorts)
  } else if (tueur.pdv <= 0) {
    console.log("Le tueur a été vaincu par le héros ! Le héros gagne !");
    console.log("Les héros suivants sont décédés au cours de la bataille : " + tableaumorts)
  } else {
    console.log("Le combat se termine en match nul. Le héros et le tueur sont tous les deux épuisés !");
    console.log("Les héros suivants sont décédés au cours de la bataille : " + tableaumorts)
  }