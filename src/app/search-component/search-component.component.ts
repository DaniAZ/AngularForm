import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'search',
  template: `<h2>{{title[2]}}</h2>
             <ul>
             <li *ngFor="let t of title">{{t}}</li>
             </ul> 
            `,
  
})
export class SearchComponentComponent implements OnInit {

   title=["d","d","dfsd","dfsda"];
     
  constructor() { }

  ngOnInit() {
  }

}
