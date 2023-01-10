import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FocusElementComponent } from './focus-element/focus-element.component';
import { CursorComponent } from './cursor/cursor.component';

@NgModule({
  declarations: [
    AppComponent,
    FocusElementComponent,
    CursorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
