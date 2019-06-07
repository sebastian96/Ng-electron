import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
    
  isLinear: true;
  nameForm: FormGroup;
  documentForm: FormGroup;
  cityForm: FormGroup;
  syntomForm: FormGroup;
  urlForm: FormGroup;

  constructor(public api: CrudService, private formBuilder: FormBuilder) { 
    
    this.nameForm = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this.documentForm = this.formBuilder.group({
      document: ['', Validators.required]
    });

    this.cityForm = this.formBuilder.group({
      city: ['', Validators.required]
    });

    this.cityForm = this.formBuilder.group({
      city: ['', Validators.required]
    });

    this.syntomForm = this.formBuilder.group({
      syntom: ['', Validators.required]
    });

    this.urlForm = this.formBuilder.group({
      url: ['', Validators.required]
    });
  }

  dataForm() {
    const DATA = {
      name: this.nameForm.value.name,
      document: this.documentForm.value.document,
      city: this.cityForm.value.city,
      symptom: this.syntomForm.value.syntom,
      url: this.urlForm.value.url
    };

    this.api.createPatient(DATA).then(() =>{
      console.log('Paciente creado');
    }, (error) => {
      console.error(error);
    });
  }

  ngOnInit() {
  }

}
