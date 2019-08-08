import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-component6',
  templateUrl: './component6.component.html',
  styleUrls: ['./component6.component.css']
})
export class Component6Component implements OnInit {
  @Output('')public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(name){
   this.childEvent.emit(name);
  }


}
