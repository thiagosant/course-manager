import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './courses/star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ErrorComponent } from './error/error.component';
import { CourseInfoComponent } from './course-info/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    ErrorComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent, pathMatch: 'full'
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: ErrorComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
