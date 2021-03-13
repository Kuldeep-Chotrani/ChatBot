import { Component, OnInit } from '@angular/core';
import {TOPICS} from '../topics';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  topics: TOPICS[] = [        
    {name:'Achievements'},
    {name:'Placements'},
    {name:'Departments'},
    {name:'Extra-curricular Activities'},
    {name:'Courses Offered'},
    {name:'Fees'},
    {name:'Hostel Facilities'},
    {name:'About'},
    {name :'Reviews'}

];
  ngOnInit(): void {
  }

}
