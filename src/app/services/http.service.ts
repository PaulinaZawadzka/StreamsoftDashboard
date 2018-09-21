import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, interval, timer } from 'rxjs';
import { Member } from '../model/member';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/3cx-members/collections/Members?';
  readonly param = new HttpParams().set('apiKey', 'LTf-vjJ3HQIKMsgfNSNYW2fgo6HPAnEI'
  );


constructor(private http: HttpClient) {
  this.getMembers();
}

getMembers(): Observable<Array<Member>> {
  return timer(0, 1000).pipe(
    switchMap(_ => this.http.get<Array<Member>>(this.URL_DB, {params: this.param})
    )
 );


}

}
