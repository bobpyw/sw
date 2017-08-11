import { Inject, Injectable } from "@angular/core";
import { FirebaseApp } from "angularfire2";
import * as firebase from 'firebase';

@Injectable()
export class FCMService {

    private _messaging: firebase.messaging.Messaging;
    private sentToServer: boolean; 

    constructor(@Inject(FirebaseApp) private _firebaseApp: firebase.app.App) {




        this._messaging = firebase.messaging(this._firebaseApp);
        
        this._messaging.requestPermission()
            .then((result) => {

                if (result == 'granted'){
                    navigator.serviceWorker.ready.then((registration) => {
                     registration.showNotification('Notification with servicework');
                    })
                  }
             })
            .catch((error) => { 
                console.log('Error: ', error);
             });

        this._messaging.getToken()
             .then((currentToken) => {
               if (currentToken) {
                  this.sendTokenToServer(currentToken);
                 this.updateUIForPushEnabled(currentToken);
               } else {
                 // Show permission request.
                 console.log('No Instance ID token available. Request permission to generate one.');
                 // Show permission UI.
                 this.updateUIForPushPermissionRequired();
                 this.setTokenSentToServer(false);
               }
             })
             .catch((err) => {
               console.log('An error occurred while retrieving token. ', err);
               this.setTokenSentToServer(false);
             });

        this._messaging.onTokenRefresh(() => {
              this._messaging.getToken()
              .then(function(refreshedToken) {
                window.prompt('Token refreshed.', refreshedToken);
                // Indicate that the new Instance ID token has not yet been sent to the
                // app server.
                this.setTokenSentToServer(false);
                // Send Instance ID token to app server.
                this.sendTokenToServer(refreshedToken);
                // ...
              })
              .catch(function(err) {
                console.log('Unable to retrieve refreshed token ', err);
              });

            })


        this._messaging.onMessage((payload) => {
          console.log("Message received. ", payload);
        })
        

        
    }

    private isTokenSentToServer() {
      return this.sentToServer;
    }
    private setTokenSentToServer(sent) {
      this.sentToServer = sent;
    }

    private updateUIForPushPermissionRequired () {
      console.log('Push permission required...');
    }

    private updateUIForPushEnabled (currentToken){
      window.prompt('Push enabled with token: ', currentToken);
    }
    private sendTokenToServer (currentToken): void {
      if (!this.isTokenSentToServer()) {
        console.log('Sending token to server...');
        // TODO(developer): Send the current token to your server.
        this.setTokenSentToServer(true);
      } else {
        console.log('Token already sent to server so won\'t send it again ' +
            'unless it changes');
      }
    }


    private showToken (currentToken):void {
      // Show token in console and UI.
      var tokenElement = document.querySelector('#token');
      tokenElement.textContent = currentToken;
    }
}