const {Sequelize} = require('sequelize');

const sequelize = new Sequelize ('toughts2', 'root', '12345', {
    host: '172.18.0.2',
    dialect: 'mysql',
})

try{
    sequelize.authenticate()
    console.log('Connected in dbdata sucessfull')
}catch(err){
    console.log(`No possible connected in dbdata ${err}`);
}

module.exports = sequelize 
