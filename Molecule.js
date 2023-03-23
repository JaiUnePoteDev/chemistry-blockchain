// On retrouve ici tous les atomes (blocks) liés entre eux
const crypto = require('crypto');
const { Creation } = require('./Creation');
const { Atome } = require('./Atome');

class Molecule {
    static instance = new Molecule();

    // On doit créer un atome par défaut afin d'initialiser le début de chaîne (molécule)
    constructor() {
        this.molecule = [new Atome('', new Creation(333, 'Lilith', 'TheWitch'))];
    }

    // On récupère chaque dernier hash pour les transmettre aux atomes suivants
    getPreviousAtomeHash() {
        return this.molecule[this.molecule.length - 1].getHash();
    }

    // On crée puis insère l'atome dans la molécule
    insertAtome(transaction, senderPublicKey, signature) {
        //On crée une vérification préalable
        const verify = crypto.createVerify('SHA256');
        verify.update(transaction.toString());
        const isValid = verify.verify(senderPublicKey, signature);
        
        if(isValid) {
            const atome = new Atome(this.getPreviousAtomeHash(), transaction);
            console.log('atome ajouté', atome.toString());
            // On ajoute l'atome à la molécule
            this.molecule.push(atome);
        }
    }
}

module.exports = { Molecule }; // On la récupère dans l'univers (le wallet)