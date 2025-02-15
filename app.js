const express = require( 'express' );
const app = express();
const URL = require( './models/url.js' );
const { router } = require( './routes/url.js' ); // router for /url
const { connectToMongoDb } = require( './connections.js' );

const PORT = 8082;

connectToMongoDb( 'mongodb://localhost:27017/short-url' );

app.use( express.urlencoded( {extended: false} ) );
app.use( express.json() );

app.use( '/url', router );

app.get( '/:shortId', async ( req, res ) => {

    const shortId = req.params.shortId;

    try{


    const entry = await URL.findOneAndUpdate( {shortId},  // During this pause, other code outside of that function 
        // (in other parts of your program) can continue executing.
    
    
            {
                $push : {
                    visitHistory : {
                        timestamp : Date.now()
                    }
                }
            },
            { new: true }
            
        );
        console.log( "redirect url is   :  "+entry.redirectUrl );
        // if( !entry || !entry.redirectUrl ) return  res.status( 404 ).send( " No such url found..please try another url ..." );
        // console.log("coming here");
        return res.redirect(entry.redirectUrl);
        
    }catch( error ){

        console.error( " some error occured in fetching data of this url ", error );
        res.status(500).send('Internal Server Error');
        
    }

} )


app.listen( PORT, () => {
    console.log("server started");
});

