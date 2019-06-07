import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';

import { environment } from '../environments/environment';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AddPatientComponent,
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    EditPatientComponent,
    AddPatientComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
