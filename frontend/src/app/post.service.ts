import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offer} from "./offer";

@Injectable({
  providedIn: 'root'
})
export class PostService{
  url='http://127.0.0.1:8000/api/id/offer/'
  constructor(private http:HttpClient) {
  }
  getPosts(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.url);
  }
}
