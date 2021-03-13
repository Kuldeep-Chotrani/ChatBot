import { Component, OnInit } from '@angular/core';
import {departments} from '../department';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() { }
  DEPARTMENTS: departments[] = [        
    { id: 1, name:'Commerce', principal: 'XYZ'},
    { id:2, name:'Engineering', principal: 'ABC'},
    { id: 3, name:'Law', principal: 'XYZ'},
    { id:4, name:'Arts', principal: 'ABC'},
    { id: 5, name:'Diploma', principal: 'XYZ'},
    { id:6, name: 'Design', principal: 'ABC'},
    { id: 7, name:'Navy', principal: 'XYZ'},
    { id:8, name: 'Doctorate', principal: 'ABC'},
    { id:9, name:'Pharmacy', principal: 'XYZ'},
 

];
  ngOnInit(): void {
  }

}
