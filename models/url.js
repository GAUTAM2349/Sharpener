const mongoose = require( 'mongoose' );


const urlSchema = new mongoose.Schema( {    // schema of the collection, inside database

    shortId: {
        type : String,
        required: true,
        unique: true
    },

    redirectUrl: {
        type: String,
        required: true
    },

    visitHistory: [ { timestamp: { type: Number } } ],
    /* visitHistory: This is the name of the field. It's an array ([]) because the value will 
    store multiple records of visits, not just one. This suggests that for each URL stored in the database, you might track multiple visits.

[{ timestamp: { type: Number } }]: This is defining the structure of each item in the array.

timestamp: Each object in the visitHistory array will have a timestamp field.
{ type: Number }: The timestamp is defined as a Number type, which likely represents the date and time of the visit 
 (such as a Unix timestamp — the number of milliseconds since January 1, 1970). */
},

{ timestamps: true }

);

/* The { timestamps: true } option in Mongoose schema definitions automatically adds two special fields to your documents:

createdAt: This field records the timestamp of when the document was first created.
updatedAt: This field records the timestamp of the last time the document was updated. */


const URL = mongoose.model( 'url', urlSchema );

module.exports = URL;
