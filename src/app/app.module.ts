import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StudentManagmentService} from './student-managment.service';
import {AppComponent} from './app.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {
        path: 'StudentDetails',
        component: StudentDetailsComponent
      }
    ])
  ],
  providers: [StudentManagmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
