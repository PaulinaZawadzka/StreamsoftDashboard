import { HttpService } from './http.service';
import {Injectable} from '@angular/core';
import { Member } from '../model/member';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class MemberService {

  private membersListObs = new BehaviorSubject<Array<Member>>([]);

  constructor(private httpService: HttpService) {
   this.httpService.getMembers().subscribe
   (list => {this.membersListObs.next(list);
   });

}

getMembersListObs(): Observable<Array<Member>> {
  return this.membersListObs.asObservable(); }

}
