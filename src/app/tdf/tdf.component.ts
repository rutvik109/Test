import { Component } from '@angular/core';
import { User } from '../user';
import { LocalStorageService } from '../local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {

  constructor(private localStorage : LocalStorageService,private route : ActivatedRoute,private router : Router){}


  number = this.route.snapshot.params['number'];



 company = [
  "techExtensor",
  "Google",
  "MicroSoft",
  "Amazon",
  "Adobe",
  "IBM",
  "Spotify",
  "Facebook",
 ]

  user = new User("","","","","","",{"cricket": "","dancing":"","reading":"","singing":"","treaking":""},"");

  userData : any[]= [];

  data : any[] = [];


 ngOnInit(){
 

  if (localStorage.getItem(this.number) != null) {
    this.data = JSON.parse(localStorage.getItem(this.number) || '{}');
    this.user = new User(this.data[0]['fname'],this.data[0]['mname'],this.data[0]['lname'],this.data[0]['textarea'],this.data[0]['age'],this.data[0]['gender'],this.data[0]['hobby'],this.data[0]['company']);
  } 
 }



  OnSubmit(){
    
    this.user.textarea = this.user.fname + " "+ this.user.mname +" "+ this.user.lname;
    console.log(this.user);
    this.userData.push(this.user);
    this.localStorage.setItem(this.number,this.userData);
    this.router.navigate(['reactive/'+this.number])
  }

  OnClear(){
   this.user = new User("","","","","","",{"cricket": "","dancing":"","reading":"","singing":"","treaking":""},"");
  }

  OnBack(){
    this.router.navigate(['../',{relativeTo:this.route}])
  }

}
