const express = required( 'express' );
const app = express();

const PORT = 8082;

app.listen( PORT, () => {
    console.log("server started");
})