//Ce fichier représentera notre transaction

class Creation {
    constructor(amount, senderPublicKey, recieverPublicKey) {
        this.amount = amount,
        this.senderPublicKey = senderPublicKey,
        this.recieverPublicKey = recieverPublicKey
    }

    //On transforme les datas de la classe en Json, ce qui permettra d'être crypté (hashé)
    toString() {
        return JSON.stringify(this);
    }
}

module.exports = { Creation }; //On va la récupérer dans un atome (block)

