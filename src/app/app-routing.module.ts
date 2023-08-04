import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NodesTableComponent } from './nodes-table/nodes-table.component'
import {SidebarComponent } from './sidebar/sidebar.component'

/*tensech li zedt lenna tass */

const routes: Routes = [
  { path: 'nodes-table', component: NodesTableComponent },
  { path: 'sidebar', component: SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
