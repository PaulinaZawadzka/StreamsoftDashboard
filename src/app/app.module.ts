import { MemberService } from './services/member.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    AppComponent,
        MemberComponent,

      ],
  imports: [
    BrowserModule,
    HttpClientModule
    ],
  providers: [HttpService, MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
