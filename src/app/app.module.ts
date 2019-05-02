import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftScreenComponent } from './leftscreen/leftscreen.component';
import { AdminModule } from './admin/admin.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DatabaseService } from './services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.fireabse),
    AngularFirestoreModule,
    DatabaseService

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
