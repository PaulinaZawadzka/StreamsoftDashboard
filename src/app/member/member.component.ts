import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../model/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {


allMembersList: Array<Member>  = [];

constructor(private memberService: MemberService ) {
  this.memberService.getMembersListObs().subscribe
  (list => {this.allMembersList = list; }
);
}


  ngOnInit() {
  }

}




