
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RestServices } from '../util/restServices';
@Injectable({
  providedIn: 'root'
})
export class TalosService {
  serverUrl = environment.serverUrl;
  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
  }

  getPostsData() {
    return this.http.get('./assets/data/posts.json');
  }

  getSelectedPostDetails(id: string) {
    return this.http.get('./assets/data/postSelected.json');
    // return this.http.get(this.serverUrl + RestServices.postUrl + "/" + Id);
  }

  postAddService(data: any): Observable<any> {
    let url = this.serverUrl + RestServices.addPost;
    return this.http.put(url, data);
  }

}

