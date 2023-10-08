let prenom = "John"
let sante_mentale = 10
let liste_musique = ["Anissa - Wejdene", "Call Your Friends - Rod Wave", "La Vache - Sadek", "Je marche seul - Jean-Jacques Goldman", "Black or White - Michael Jackson"]
let nb_feu_rouge = 30
let nb_changements = 0

function musique_acutelle() {
    nb_feu_rouge--;

    const musique_radio = Math.floor(Math.random() * 5);

    if (liste_musique[musique_radio] == liste_musique[0]) {
        sante_mentale -= 1
        nb_changements += 1;
    }

    return musique_radio;
}

    
while (nb_feu_rouge > 0 && sante_mentale > 0) {
    const musique = musique_acutelle();
    console.log(`La musique jouée actuellement est ${musique}. Il reste ${nb_feu_rouge} feu(x) à parcourir.`)
}

if (nb_feu_rouge == 0) {
    console.log(`Vous êtes bien arrivé, il vous aura fallu ${nb_changements} changements pour arriver à bon port. Votre santé mentale est de ${sante_mentale}.`)
}

if (sante_mentale == 0) {
    console.log(`Santé mentale critique : EXPLOSION !!`)
}