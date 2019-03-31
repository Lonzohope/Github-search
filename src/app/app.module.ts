import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GitComponent  } from './git/git.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
