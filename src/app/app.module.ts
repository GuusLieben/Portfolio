import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FocusElementComponent } from './focus-element/focus-element.component';
import { CursorComponent } from './cursor/cursor.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FocusElementComponent,
    CursorComponent,
    TimelineComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
