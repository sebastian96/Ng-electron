import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private afs: AngularFirestore) { 
    console.log('servicio de firebase :D');
    
  }
  
  // CREA UN PACIENTE EN FIREBASE EN LA 'TABLA' => patients 
  public createPatient (data:{
    name: string,
    document: string,
    city: string,
    url: string
  }) {
    return this.afs.collection('patients').add(data);
  }

  // OBTIENE UN PACIENTE DE LA 'TABLA' => patients

  public getPatient(documentID: string) {
    return this.afs.collection('patients').doc(documentID).snapshotChanges();
  }

  // OBTIENE TODOS LOS PACIENTES DE LA 'TABLA' => patients

  public getPatients() {
    return this.afs.collection('patients').snapshotChanges();
  }

  // ACTUALIZAR PACIENTES DE LA 'TABLA' => patients

  public updatePatients(documentID: string, data:{
    name?: string,
    document?: string,
    city?: string,
    url?: string
  }){
    return this.afs.collection('patients').doc(documentID).set(data);
  }

  // ELIMINAR PACIENTES DE LA 'TABLA' => patients

  public deletePatient(documentID: string) {
    return this.afs.collection('patients').doc(documentID).delete();
  }
}
