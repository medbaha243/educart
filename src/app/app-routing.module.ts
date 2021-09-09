import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './conponet/todo-list/todo-list.component';
import {DonelistComponent} from './conponet/donelist/donelist.component';

const routes: Routes = [
  {path: 'all-todoitem', component: TodoListComponent},
  {path: 'all-done', component: DonelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
