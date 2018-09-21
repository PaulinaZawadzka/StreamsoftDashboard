import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { Member } from './model/member';
import { MemberService } from './services/member.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

List: Array<Member>  = [];
  constructor(private  httpService: HttpService, private memberService: MemberService) {
this.getMembers();

this.memberService.getMembersListObs().subscribe
    (list => {this.List = list; }
  );
  }

getMembers() {
this.httpService.getMembers()
.subscribe(members => {console.log(members);
});
  }


}

