import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() Click:EventEmitter<any>=new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  updateStudent():void{
    this.Click.emit();
  }

}
