import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
// import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardHeaderComponent,
    SubHeaderComponent,
    SearchBarComponent,
    DeletePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  exports:[
    DeletePatientComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeletePatientComponent]
})
export class AppModule { }
