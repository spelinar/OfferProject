import { Component } from '@angular/core';
import {PostService} from "./post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Offers: any;
  searchValue: any;
  title = '';
  filterString: any;
  constructor(private postData:PostService) {
  }
  ngOnInit(){
    this.postData.getPosts().subscribe((Offer)=>{
        this.Offers = Offer;
        console.log(Offer)
    });
  }
}
