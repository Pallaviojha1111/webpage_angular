import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NotificationComponent } from './notification/notification.component';
const routes: Routes = [

    {path: '', component:SidebarComponent},
    { path: 'table-list', component: TableListComponent },
    {path:'dashboard',component:DashboardComponent},
    {path:'userprofile',component:UserprofileComponent},
    {path:'notification',component:NotificationComponent}
 
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
