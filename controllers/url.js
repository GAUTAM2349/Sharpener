const shortid = require( 'shortid' );
const URL = require( '../models/url.js' ); // database


async function handleGenerateNewShortUrl( req, res ){

    console.log( "a request came to /url  " );
    const body = req.body;
    if( !body.url ){
        return res.status( 400 ).json( { error : 'Please give url to process...'});
    }

    const shortId = shortid( 8 );

    await URL.create(
        {
            shortId : shortId,
            redirectUrl : body.url,
            visitHistory: []
        }
    );

    res.json( {
        id : shortId
    }

   )

};

module.exports = {
    handleGenerateNewShortUrl
}