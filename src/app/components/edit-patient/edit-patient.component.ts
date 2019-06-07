import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  
  editarForm: FormGroup;
  documentID: string;
  patientData = <any>{};

  constructor(
    private FormBuilder: FormBuilder,
    private api: CrudService, 
    private dialog: MatDialogRef<EditPatientComponent>,
    @Inject(MAT_DIALOG_DATA) data) 
  { 
    this.documentID = data.id;
    this.patientData =data.data;
  }

  updatePatient() {
    const formValues = {
      name: this.editarForm.value.name,
      document: this.editarForm.value.document,
      city: this.editarForm.value.city,
      symptom: this.editarForm.value.syntom,
      url: this.editarForm.value.url
    }
    
    this.api.updatePatients(this.documentID, formValues);
    this.dialog.close();
  }
  
  closeDialog() {
    this.dialog.close();
  }

  ngOnInit() {
    this.editarForm = this.FormBuilder.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      city: ['', Validators.required],
      syntom: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

}
