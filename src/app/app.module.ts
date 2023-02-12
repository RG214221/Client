import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormInstructionsComponent } from './form-instructions/form-instructions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ShowOneChildComponent } from './show-one-child/show-one-child.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { HomePageComponent } from './home-page/home-page.component';
import { UserEndComponent } from './user-end/user-end.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsFormComponent,
    FormInstructionsComponent,
    NavbarComponent,
    ShowOneChildComponent,
    HomePageComponent,
    UserEndComponent
  ],
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
