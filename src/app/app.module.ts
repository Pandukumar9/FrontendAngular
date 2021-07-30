import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { FormsModule } from '@angular/forms';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import {DpDatePickerModule} from 'ng2-date-picker';
// import { FileSelectDirective } from 'ng2-file-upload';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { EmployeeService } from './employee.service';
import {QuestionPaperComponent} from './question-paper/question-paper.component';
import {TestwebComponent} from './testweb/testweb.component';
import {FlipkartComponent} from './flipkart/flipkart.component';

@NgModule({
  declarations: [
    AppComponent, 
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeDetailsComponent, 
    QuestionPaperComponent,
    TestwebComponent,
    FlipkartComponent
    // FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
    ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
