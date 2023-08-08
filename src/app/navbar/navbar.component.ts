import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

  export class NavbarComponent {
    // Add the addToggle property and set its initial value
    tableData: { date: string; status: string; }[] | undefined;
  status: boolean | undefined;
  addToggle()
  {
    this.status = !this.status;       
  }
  }


