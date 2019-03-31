import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import {HttpClientModule} from '@angular/common/http';
import { GithubService }  from './services/github.service';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    GitsearchComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
