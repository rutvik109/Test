import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private fb : FormBuilder,private router : Router){}

  homeForm = this.fb.group({
    number: ['',[Validators.required]]
  })


  OnSubmit(value:any){
    console.log(this.homeForm.value);
    this.router.navigate(["Home/"+value])
  }
}
