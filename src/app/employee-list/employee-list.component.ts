import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]=[];
  constructor(private empservice:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  //   this.employees= [
  //     {
  //       "id":1,
  //       "firstName":"pandu",
  //       "lastName": "kumar",
  //       "emailId": "pandu@gmail.com"
  //     },
  //     {
  //       "id":2,
  //       "firstName":"sai",
  //       "lastName": "sathis",
  //       "emailId": "sai@gmail.com"
  //     }
  //   ]
  }
  getEmployees(){
    this.empservice.getEmployeesList()
    .subscribe(data => this.employees =data);

  }

  updateEmployee(id: any){
    this.router.navigate(['update_employee', id]);
  }
 
  deleteEmployee(id: any){
    this.empservice.deleteEmployee(id)
    .subscribe( data => {
       console.log(data);
       this.getEmployees();
    });
  }

  employeeDetails(id: any){
    this.router.navigate(['employee_details', id]);
  }
  page:number=0

   //sorting
   key: string = 'name'; //set default
   reverse: boolean = false;
   sort(key:any){
     this.key = key;
     this.reverse = !this.reverse;
   }
}



