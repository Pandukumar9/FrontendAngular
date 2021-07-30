import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  id:number=0;
  employee: Employee= new Employee();
  constructor(private empService:EmployeeService,private actRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    this.empService.getEmployeeById(this.id)
    .subscribe(data => { this.employee = data
    },error => console.log(error) );
  }

  onSubmit(){
    this.empService.updateEmployee(this.id,this.employee)
    .subscribe(data => {
      this.goToEmployeeList()
    },error => console.log(error) )
  }

  goToEmployeeList(){
    this.router.navigate(['employees'])
  }
}
