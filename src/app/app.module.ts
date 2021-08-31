import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AppComponent } from './app.component';

const config = {
  apiKey: 'AIzaSyD6E9OYBX72KCRcnwPAzDjVy8MmDbbEgfw',
  authDomain: 'stackblitzfire.firebaseapp.com',
  databaseURL: 'https://stackblitzfire.firebaseio.com',
  storageBucket: 'stackblitzfire.appspot.com',
  messagingSenderId: '42917465053',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
