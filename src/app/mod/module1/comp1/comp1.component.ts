import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  // Initializing variables
  n1: number = 0;
  n2: number = 0;
  result: number = 0;
  name: string = 'CJC';
  x: number = 30;
  y: number = 50;
  p: string = '';
  r: string = 'THIS IS INITIAL VALUE';

  constructor() { }
  
  ngOnInit(): void {
  }

  // Function to handle button click event
  print(): void {
    this.p = "This is event binding";
  }

  // Function to insert data (Console log is not clear, consider improving this function)
  insertData(): void {
    console.log("Event binding example"); // Consider providing a clearer message or purpose
  }

  // Function to show alert message
  show(): void {
    alert("Hello");
  }

  // Function to handle mouseover event
  j(): void {
    this.r = 'Mouse over called';
  }

  // Function to handle mouseout event
  k(): void {
    this.r = 'Mouse out called';
  }

  // Function to perform addition
  add(): number {
    this.result = this.n1 + this.n2;
    return this.result;
  }  
}
