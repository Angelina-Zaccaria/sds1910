import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import { PastShowsComponent } from './past-shows/past-shows.component';
import { GettingInvolvedComponent } from './getting-involved/getting-involved.component';
import { GettingInvolvedStudentsComponent } from './getting-involved-students/getting-involved-students.component';
import { GettingInvolvedAlumniComponent } from './getting-involved-alumni/getting-involved-alumni.component';
import { ContactComponent } from './contact/contact.component';

import { PastShowsListComponent } from './past-shows-list/past-shows-list.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'current-show', component: CurrentShowComponent },
  { path: 'past-shows', component: PastShowsListComponent }, 
  { path: 'past-shows/:show', component: PastShowsComponent},
  { path: 'getting-involved', component: GettingInvolvedComponent},
  { path: 'getting-involved/students', component: GettingInvolvedStudentsComponent},
  { path: 'getting-involved/alumni', component: GettingInvolvedAlumniComponent},
  // { path: 'getting-involved', component: GettingInvolvedComponent,
  //   children:  [
  //     { path: 'students', component: GettingInvolvedStudentsComponent },
  //     { path: 'alumni', component: GettingInvolvedAlumniComponent },
  //   ]
  // },
  { path: 'contact', component: ContactComponent},
  { path: 'family-tree', component: FamilyTreeComponent},
  { path: '**', component: PageNotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
