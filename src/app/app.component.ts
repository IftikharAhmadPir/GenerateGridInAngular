import { Component } from '@angular/core';
import { AppService } from '../app/app.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  value: any;
  constructor(private Service: AppService){
  }
  title = 'AngularGrid';

  ngOnInit(): void {
    this.getvalue();
  }

  sortvalue():void{
    this.value.sort((a,b) => a.Id - b.Id);
  }

  getvalue():any{
    debugger;
   this.value = this.Service.getvalue();
  }
}
