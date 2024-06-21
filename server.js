const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

// Reemplaza esto con la ruta a tu archivo de credenciales JSON
const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/sendNotification', (req, res) => {
  const message = {
    notification: {
      title: 'Emergencia',
      body: req.body.message
    },
    topic: 'emergency'
  };

  admin.messaging().send(message)
    .then((response) => {
      res.status(200).send('Successfully sent message: ' + response);
    })
    .catch((error) => {
      res.status(500).send('Error sending message: ' + error);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
