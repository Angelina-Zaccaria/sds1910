import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CurrentShowComponent,
    PastShowsComponent,
    GettingInvolvedComponent,
    GettingInvolvedStudentsComponent,
    GettingInvolvedAlumniComponent,
    ContactComponent,
    PastShowsListComponent,
    FamilyTreeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
