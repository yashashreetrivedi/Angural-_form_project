import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserSettingFromComponent } from './user-setting-from/user-setting-from.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingFromComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
