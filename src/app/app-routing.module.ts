import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';

const routes: Routes = [ { path:'', component:ViewbooksComponent}, { path: 'addbook', component:AddbookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
