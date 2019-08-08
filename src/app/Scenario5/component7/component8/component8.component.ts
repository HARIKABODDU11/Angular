import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component8',
  templateUrl: './component8.component.html',
  styleUrls: ['./component8.component.css']
})
export class Component8Component implements OnInit {
  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(name){
    this.childEvent.emit(name);
   }
 

}
