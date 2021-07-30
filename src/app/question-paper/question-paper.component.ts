import { Component, OnInit } from '@angular/core';

export class ExamModel
{
   Id:number | undefined;
   ExamName:string | undefined;
}
export class QuestionModel{
Id:number | undefined;
QuestionName:string | undefined;
ExamId:number | undefined
}

export class Option{
  optiontId:number |undefined;
  optionText:string | undefined;
  }

  export class Options{
OptionData:Option[]=[];
QuestionId:number;
  }

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {
ExamData:ExamModel=new ExamModel();
QuestionData:QuestionModel=new QuestionModel();
OptionsData:Options=new Options();
SingleOptionData:Option=new Option();
Question2Data:QuestionModel=new QuestionModel();
Single2OptionData:Option=new Option();
Options2Data:Options=new Options();
Question3Data:QuestionModel=new QuestionModel();
Single3OptionData:Option=new Option();
Options3Data:Options=new Options();
  constructor() { }

  ngOnInit(): void {
    this.ExamData.Id=1;
    this.ExamData.ExamName='Angular11';

    this.QuestionData.Id=1;
    this.QuestionData.QuestionName='howmany times use the phone?';

    this.Question2Data.Id=2;
    this.Question2Data.QuestionName='how many times use the Car?';

    this.Question3Data.Id=3;
    this.Question3Data.QuestionName='how many times use the Bike?';



    this.SingleOptionData =new Option();
    this.SingleOptionData.optiontId=1;
    this.SingleOptionData.optionText="Test1";
    
    this.OptionsData.OptionData.push(this.SingleOptionData);

    this.SingleOptionData =new Option();
    this.SingleOptionData.optiontId=2;
    this.SingleOptionData.optionText="Test2";

    this.OptionsData.OptionData.push(this.SingleOptionData);

    this.SingleOptionData =new Option();
    this.SingleOptionData.optiontId=3;
    this.SingleOptionData.optionText="Test3";

    this.OptionsData.OptionData.push(this.SingleOptionData);
    this.SingleOptionData =new Option();
    this.SingleOptionData.optiontId=4;
    this.SingleOptionData.optionText="Test4";

    this.OptionsData.OptionData.push(this.SingleOptionData);
    this.OptionsData.QuestionId=1;
    
this.Single2OptionData =new Option();
this.Single2OptionData.optiontId=1;
this.Single2OptionData.optionText="Test1";

this.Options2Data.OptionData.push(this.Single2OptionData);

this.Single2OptionData =new Option();
this.Single2OptionData.optiontId=2;
this.Single2OptionData.optionText="Test2";

this.Options2Data.OptionData.push(this.Single2OptionData);
this.Single2OptionData =new Option();
this.Single2OptionData.optiontId=3;
this.Single2OptionData.optionText="Test3";

this.Options2Data.OptionData.push(this.Single2OptionData);
this.Single2OptionData =new Option();
this.Single2OptionData.optiontId=4;
this.Single2OptionData.optionText="Test4";

this.Options2Data.OptionData.push(this.Single2OptionData)
this.Options2Data.QuestionId=2;

this.Single3OptionData =new Option();
this.Single3OptionData.optiontId=1;
this.Single3OptionData.optionText="Test1";

this.Options3Data.OptionData.push(this.Single3OptionData);

this.Single3OptionData =new Option();
this.Single3OptionData.optiontId=2;
this.Single3OptionData.optionText="Test2";

this.Options3Data.OptionData.push(this.Single3OptionData);
this.Single3OptionData =new Option();
this.Single3OptionData.optiontId=3;
this.Single3OptionData.optionText="Test3";

this.Options3Data.OptionData.push(this.Single3OptionData);
this.Single3OptionData =new Option();
this.Single3OptionData.optiontId=4;
this.Single3OptionData.optionText="Test4";

this.Options3Data.OptionData.push(this.Single3OptionData)
this.Options3Data.QuestionId=3;


   }

}