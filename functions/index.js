const firebase = require('firebase');
const functions = require('firebase-functions');
const express = require('express');


firebase.initializeApp({
    apiKey: "AIzaSyCwOrmAK9r6yrRhZRetypNYbpyPiqwa42c",
    authDomain: "breaking-the-code.firebaseapp.com",
    databaseURL: "https://breaking-the-code.firebaseio.com",
    projectId: "breaking-the-code",
    storageBucket: "breaking-the-code.appspot.com",
    messagingSenderId: "124113959400"
});


const app = express();

app.get('/time' , (request , response ) => {

	var consultarBanco = firebase.database().ref('/'+ request._parsedUrl.query ).once('value').then(function(snapshot) {
       var consulta = snapshot.val()

       response.send(consulta);

   });
});

exports.app = functions.https.onRequest(app);

