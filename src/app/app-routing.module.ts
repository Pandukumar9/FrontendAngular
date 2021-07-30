import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

const routes: Routes = [
  {path:'',redirectTo: 'employeelist',pathMatch:'full'},
  {path:'employees', component:EmployeeCreateComponent},
  {path:'employeelist', component:EmployeeListComponent},
  {path:'update_employee/:id', component:EmployeeUpdateComponent},
  {path:'employee_details/:id', component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
