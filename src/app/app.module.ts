import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {CdkTableModule} from '@angular/cdk/table';

import {
   MatFormFieldModule,
   MatAutocompleteModule,
   MatButtonModule,
   MatButtonToggleModule,
   MatCardModule,
   MatCheckboxModule,
   MatChipsModule,
   MatDatepickerModule,
   MatDialogModule,
   MatExpansionModule,
   MatGridListModule,
   MatIconModule,
   MatInputModule,
   MatListModule,
   MatMenuModule,
   MatNativeDateModule,
   MatPaginatorModule,
   MatProgressBarModule,
   MatProgressSpinnerModule,
   MatRadioModule,
   MatRippleModule,
   MatSelectModule,
   MatSidenavModule,
   MatSliderModule,
   MatSlideToggleModule,
   MatSnackBarModule,
   MatSortModule,
   MatTableModule,
   MatTabsModule,
   MatToolbarModule,
   MatTooltipModule,
   MatStepperModule,
  } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
