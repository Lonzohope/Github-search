import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GitComponent  } from './git/git.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { AppComponent } from './app.component';
import { FormsModule } from  "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    GitComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
