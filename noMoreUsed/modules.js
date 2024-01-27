const {john, peter} = require('./names')
const sayHi         = require('./utils')
const data          = require('./alternative-flavor')
console.log(data);

sayHi('susan');
sayHi(john);
sayHi(peter);