import { Component, OnInit } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private http:Http) { }
  
    ngOnInit() {
    }
  
  public roomList: Object[] = [
    
    {'unit_id' : '1', 'unit_name' : 'And', 'unit_area' : '55', 'availability' : '1', 'unit_price' : '150', 'Unit_img' : 'path'},
    {'unit_id' : '2', 'unit_name' : 'Cmd', 'unit_area' : '50', 'availability' : '1', 'unit_price' : '200', 'Unit_img' : 'path'},
    {'unit_id' : '3', 'unit_name' : 'Car', 'unit_area' : '80', 'availability' : '0', 'unit_price' : '50', 'Unit_img' : 'path'},
    {'unit_id' : '4', 'unit_name' : 'Der', 'unit_area' : '100', 'availability' : '0', 'unit_price' : '150', 'Unit_img' : 'path'},
    {'unit_id' : '5', 'unit_name' : 'End', 'unit_area' : '77', 'availability' : '1', 'unit_price' : '750', 'Unit_img' : 'path'},
  ];

  order() : object[] {
     
      var available : object[] = [];
      for (var i = 0; i < this.roomList.length; i++) {
        var room = this.roomList[i];
        if (room["availability"] == true) {
          available.push(room);
        }
      }
      return available;
    }
    
    Book(id) : void {
      for (var i = 0; i < this.roomList.length; i++) {
        if (this.roomList[i]['unit_name'] == id) {
          this.roomList[i]['availability'] = false;
          break;
        }
      }
    }
  
  }
  
  
