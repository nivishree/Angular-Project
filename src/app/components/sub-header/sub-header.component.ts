import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig}  from '@angular/material/dialog';
import { DeletePatientComponent } from '../delete-patient/delete-patient.component';
// import { DeletePatientComponent } from './delete-patient/delete-patient.component';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDeletePatient(){
    this.dialog.open(DeletePatientComponent);
  }
  ngOnInit(): void {
  }

}
