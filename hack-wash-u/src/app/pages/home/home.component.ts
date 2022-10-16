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
    this._snackBar.open("Order 572BEC successfully completed, code send to Liam Havens.", "close");
    }
  

  selectedValue: string | undefined;

  
  drinks: Drink[] = [
    {value: 'steak-0', viewValue: 'Moscow Mule'},
    {value: 'pizza-1', viewValue: 'Mojito'},
    {value: 'pizza-1', viewValue: 'Whiskey'},
    {value: 'pizza-1', viewValue: 'French 75'},
    {value: 'pizza-1', viewValue: 'Manhattan'},
    {value: 'pizza-1', viewValue: 'Spritz'},
    {value: 'pizza-1', viewValue: 'Gimlet'},
    {value: 'pizza-1', viewValue: 'Sazerac'},
    {value: 'pizza-1', viewValue: 'Mimosa'},
  ];
  retailers: Retailer[] = [
    {value: 'steak-0', viewValue: 'Last Shop'},
    {value: 'pizza-1', viewValue: 'Spoke'},
    {value: 'pizza-1', viewValue: 'Stackers Pub'},
    {value: 'pizza-1', viewValue: 'The Harp Irish Pub'},
    {value: 'pizza-1', viewValue: 'Hangar Pub And Grill'},
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
