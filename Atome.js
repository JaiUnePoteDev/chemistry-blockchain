const crypto = require('crypto'); //Natif dans node, pas besoin de l'installer
const { Creation } = require('./Creation');

//On va créer notre modèle d'atome (block)

class Atome {
    constructor(previousHash, transaction = Creation, timestamp = Date.now()) {
        this.previousHash = previousHash,
        this.transaction = transaction,
        this.timestamp = timestamp
    }

    //On génère le hash
    getHash() {
        const json = JSON.stringify(this);
        const hash = crypto.createHash('SHA256'); // prouvera la légitimité
        hash.update(json).end();
        const hex = hash.digest('hex');
        return hex;
    }

    toString() {
        JSON.stringify(this);
    }
}

module.exports = { Atome }; //On le récupère dans la molécule (blockchain)