const {Sequelize} = require('sequelize');

const sequelize = new Sequelize ('toughts2', 'root', 'jande', {
    host: '172.17.0.2',
    dialect: 'mysql',
})

try{
    sequelize.authenticate()
    console.log('Connected in dbdata sucessfull')
}catch(err){
    console.log(`No possible connected in dbdata ${err}`);
}

module.exports = sequelize 
