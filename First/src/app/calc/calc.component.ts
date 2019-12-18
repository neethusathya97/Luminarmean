import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
title="calculator"
result="";
  constructor() { }

  ngOnInit() {
  }
add(data)
{
  this.result+=data;
}

showResult(){
  this.result=eval(this.result);
}
}
