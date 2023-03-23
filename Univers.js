//Voici notre Wallet

const crypto = require('crypto');
const { Creation } = require('./Creation');
const { Molecule } = require('./Molecule');

class Univers {
    constructor() {
        //On indique les formats utilisés
        const keys = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {type: 'spki', format: 'pem'},
            privateKeyEncoding: {type: 'pkcs8', format: 'pem'},
        });

        this.privateKey = keys.privateKey,
        this.publicKey = keys.publicKey
    }

    // Pour envoyer nos composants dans d'autres univers (wallets) sur le réseau :
    send(amount, recieverPublicKey) {
        const transaction = new Creation(
            amount,
            this.publicKey,
            recieverPublicKey
        );

        const shaSign = crypto.createSign('SHA256');
        shaSign.update(transaction.toString()).end();

        // Signature avec la clef privée
        const signaturePrivee = shaSign.sign(this.privateKey);
        //Ajout dans notre molécule (chaîne)
        Molecule.instance.insertAtome(transaction, this.publicKey, signaturePrivee);
    }
}

module.exports = { Univers };