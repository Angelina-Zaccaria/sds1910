import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import { PastShowsComponent } from './past-shows/past-shows.component';
import { GettingInvolvedComponent } from './getting-involved/getting-involved.component';
import { ContactComponent } from './contact/contact.component';

import { PastShowsListComponent } from './past-shows-list/past-shows-list.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'current-show', component: CurrentShowComponent },
  { path: 'past-shows', component: PastShowsListComponent }, 
  { path: 'past-shows/:show', component: PastShowsComponent},
  { path: 'getting-involved', component: GettingInvolvedComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'family-tree', component: FamilyTreeComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
