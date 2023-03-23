const { Univers } = require('./Univers');
const { Molecule } = require('./Molecule');

// Il est temps de tester les créations d'univers (wallets)
// et leurs transactions (créations) entre utilisateurices...

const karaba = new Univers();
const babaYaga = new Univers();

karaba.send(88, babaYaga.publicKey);
babaYaga.send(33, karaba.publicKey);

console.log(Molecule.instance);