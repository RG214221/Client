import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFormComponent } from './details-form/details-form.component';
import { FormInstructionsComponent } from './form-instructions/form-instructions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserEndComponent } from './user-end/user-end.component';


const routes: Routes = [
  {path:'detailsForm',component:DetailsFormComponent},
  {path:'formInstructions',component:FormInstructionsComponent},
  {path:'home',component:HomePageComponent},
  {path:'end',component:UserEndComponent},
  {path:'',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
