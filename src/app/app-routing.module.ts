import { NgModule } from '@angular/core';
//dipendenze del router
import { RouterModule, Routes } from '@angular/router';
//dipendenze dei componenti
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';


//const routes: Routes = [];
//definizione delle rotte
const routes: Routes = [
  { path: 'primo', component: PrimoComponent },
  { path: 'secondo', component: SecondoComponent },
  { path: 'terzo', redirectTo: '/primo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
