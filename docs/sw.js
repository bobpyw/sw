importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '85893849466'
  });

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  notification = JSON.parse(payload.data.notification);
  return self.registration.showNotification(notification.title, notification);
});