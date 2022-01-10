const mongoose = require('mongoose');

const dbConnection=()=>{
    try {
        mongoose.connect(process.env.DB_CNN);
        console.log('DB On line');
    } catch( error ){
        console.error( error );
        throw new Error('Error a la hora de iniciar base de datos');
    }
};


module.exports = {
    dbConnection,
}