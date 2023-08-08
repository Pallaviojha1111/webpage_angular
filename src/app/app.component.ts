import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{

  title = 'assesment';
  private _status = false;
  public get status() {
    return this._status;
  }
  public set status(value) {
    this._status = value;
  }
  tableData: { date: string; status: string; }[] | undefined;
  addToggle()
  {
    this.status = !this.status;       
  }
  constructor() { }

  
    ngOnInit(): void {
      // Replace this with your actual logic to fetch or set the 'tableData' array.
      this.tableData = [
        { date: '01-10-2023', status: 'Completed' },
        { date: '01-10-2023', status: 'Pending' },
        { date: '01-10-2023', status: 'Process' },
        { date: '01-10-2023', status: 'Pending' },
        { date: '01-10-2023', status: 'Completed' },
        // Add more data as needed.
      ];
    }
  
  
    
    
  
    getStatusClass(status: string): string {
      switch (status) {
        case 'Completed':
          return 'completed';
        case 'Pending':
          return 'pending';
        case 'Process':
          return 'process';
        default:
          return '';
      }
    }
  }
