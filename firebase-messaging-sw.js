// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAeKuAT6nu0ZxKAGl_w_ZY9ZK4RLtojjPg",
    authDomain: "your-firebase-project.firebaseapp.com",
    projectId: "your-firebase-project",
    storageBucket: "your-firebase-project.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
    measurementId: "your-measurement-id"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const notificationTitle = 'Emergencia';
    const notificationOptions = {
        body: payload.data.message,
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
