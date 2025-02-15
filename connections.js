const mongoose = require( 'mongoose' );

async function connectToMongoDb( url ){

    try{

        await mongoose.connect( url );
        console.log( "databaseconnected successfully...");
        
    } catch( error ){

        console.error( "Error connecting to database : ", error);
        process.exit( 1 );
        
    }
    
};

module.exports = {
    connectToMongoDb
}