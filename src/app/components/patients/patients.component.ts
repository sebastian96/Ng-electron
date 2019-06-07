import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditPatientComponent } from '../edit-patient/edit-patient.component';
import { AddPatientComponent } from '../add-patient/add-patient.component';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  
  public patients = [];

  constructor(public api: CrudService, private dialog: MatDialog) { }
  
  deletePatient(documentID) {
    this.api.deletePatient(documentID).then(() => {
      console.log('Paciente eliminado');
    }, (error) => {
      console.error(error);
    });
  }

  openDialog(documentID, documentData ) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: documentID,
      data: documentData
    };

    const dialogRef = this.dialog.open(EditPatientComponent, dialogConfig);
    dialogRef.afterClosed();
  }

  addPatient() {
    const dialogRef = this.dialog.open(AddPatientComponent);
    dialogRef.afterClosed();
  }

  ngOnInit() {
    this.api.getPatients().subscribe(
      (response) => {
        this.patients = [];
        response.forEach(value => {
          this.patients.push({
            id: value.payload.doc.id,
            data: value.payload.doc.data()
          });
        });
        console.log(response);
      }
    )
  }

}
