const functions = require ("firebase-functions");
const express = require ('express');
const cors = require ("cors");
const stripe = require("stripe")('sk_test_51KXGZySCWPa0RuAendTzgSX1wTthS6m4qmoPJnukZO2b7L68TVYNxQeDuw6h5ZztXcPF7WKkS4b3BMHpwgnFStiQ00bZ5Up9DL')

//API

//App config
const app = express();

//middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request,response) => response.status(200).send('hello world'))

//app.get('/UP', (request,response) => response.status(200).send('Whats UP'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request received !!!',total)
   
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunit of currency
        currency: "indian",
    });

     response.status(201).send({
         clientSecret: paymentIntent.client_secret,
     })

})

exports.api = functions.https.onRequest(app)
//example endpoint
//http://localhost:5001/clone-5ec40/us-central1/api
