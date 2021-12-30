import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// src\app\components\delete-patient
// C:\Users\nivip\Documents\prep\patient-dashboard\src\app\components\delete-patient
@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss']
})
export class DeletePatientComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: any){
    let snackBarRef = this.snackBar.open(message, action, {duration: 1500});
    snackBarRef.afterDismissed().subscribe(() =>{
      console.log("delete snack bar is dismissed");
    });
    snackBarRef.onAction().subscribe(() =>{
      console.log("delete snack bar is in action");
    });
  }
  
  ngOnInit(): void {
  }

}
