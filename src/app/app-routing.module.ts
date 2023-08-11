import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NodesTableComponent } from './nodes-table/nodes-table.component';
import { CallsTableComponent } from './calls-table/calls-table.component';
import { NewNodeComponent } from './new-node/new-node.component';
import { NewCallComponent } from './new-call/new-call.component';

/*tensech li zedt lenna tass */

const routes: Routes = [
  { path: '', component: NodesTableComponent },
  { path: 'calls-table', component: CallsTableComponent },
  { path: 'new-node', component: NewNodeComponent},
  { path: 'new-call', component: NewCallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
