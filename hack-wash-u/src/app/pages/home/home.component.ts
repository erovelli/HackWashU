// import { Component, OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


interface Retailer {
  value: string;
  viewValue: string;
}

interface Drink {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  demo() {
    this._snackBar.open("Thank you for ordering a Moscow Mule at The Last Shop", "close");
    }
  

  selectedValue: string | undefined;

  
  drinks: Drink[] = [
    {value: 'steak-0', viewValue: 'Moscow Mule'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  retailers: Retailer[] = [
    {value: 'steak-0', viewValue: 'The Last Shop'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];



  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();


  
 
}
