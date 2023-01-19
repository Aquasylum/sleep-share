import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { ScoreDisplayComponent } from './components/score-display/score-display.component';
import { DisplayFriendDataComponent } from './components/display-friend-data/display-friend-data.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsfeedComponent,
    ScoreDisplayComponent,
    DisplayFriendDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
