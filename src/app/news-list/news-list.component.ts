import { Component, OnInit } from '@angular/core';
import {ApiService} from './news-list.service'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  // eventList;
  constructor( private service: ApiService) { }

  ngOnInit() {
    // this.eventList = event    
    this.service.getNews().subscribe(data=>{
      console.log(data)
    })
  }

  searchNews(value) {
    // if(value == ''){
    //   this.eventList=event;
    //   return
    // }
    // this.eventList = this.eventList.filter(e => {
    //   return e.name.toLowerCase().includes(value.toLowerCase());
    // })
  }

  // bookEvent(e){    
  //   this.router.navigate(['./eventbook'], { queryParams: { event: JSON.stringify(e) } }, )
  // }


}
