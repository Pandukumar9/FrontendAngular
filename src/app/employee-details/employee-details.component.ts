import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute, private empService:EmployeeService) { }
   id:number=0;
   employee = new Employee();
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];

    this.empService.getEmployeeById(this.id).subscribe(data => {
      this.employee =data;
    });
  }

}
