import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  constructor(
    private localStorage: LocalStorageService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = this.fb.group({
      fname: '',
      mname: '',
      lname: '',
      age: '',
      gender: '',
      hobby: this.fb.group({
        cricket: '',
        dancing: '',
        reading: '',
        singing: '',
        treaking: '',
      }),
      company: '',
    });
  }

  number: any;

  user: any;

  data: any[] = [];

  ngOnInit() {
    this.number = this.route.snapshot.params['number'];
    this.data = JSON.parse(localStorage.getItem(this.number) || '{}');
  }

  company = [
    'techExtensor',
    'Google',
    'MicroSoft',
    'Amazon',
    'Adobe',
    'IBM',
    'Spotify',
    'Facebook',
  ];

  OnLoad() {
    console.log(this.data);
    // this.user = this.fb.group({
    //   fname: [this.data[0]['fname']],
    //   mname: [this.data[0]['mname']],
    //   lname: [this.data[0]['lname']],
    //   age: [this.data[0]['age']],
    //   gender: [this.data[0]['gender']],
    //   hobby: this.fb.group({
    //     cricket: [this.data[0]['hobby']['cricket']],
    //     dancing: [this.data[0]['hobby']['dancing']],
    //     reading: [this.data[0]['hobby']['reading']],
    //     singing: [this.data[0]['hobby']['signing']],
    //     treaking: [this.data[0]['hobby']['treaking']],
    //   }),
    //   company: [this.data[0]['company']],
    // });

    // this.user.setValue({
    //   fname: [this.data[0]['fname']],
    //   mname: [this.data[0]['mname']],
    //   lname: [this.data[0]['lname']],
    //   age: [this.data[0]['age']],
    //   gender: this.data[0]['gender'],
    //   hobby: {
    //     cricket: [this.data[0]['hobby']['cricket']],
    //     dancing: [this.data[0]['hobby']['dancing']],
    //     reading: [this.data[0]['hobby']['reading']],
    //     singing: [this.data[0]['hobby']['signing']],
    //     treaking: [this.data[0]['hobby']['treaking']],
    //   },
    //   company: [this.data[0]['company']],
    // });

      this.user.setValue({
      fname: [this.data[0]['fname']],
      mname: [this.data[0]['mname']],
      lname: [this.data[0]['lname']],
      age: [this.data[0]['age']],
      gender: this.data[0]['gender'],
      hobby: this.data[0]['hobby'],
      company: [this.data[0]['company']],
    });
  }

  OnSubmit() {
    this.number = this.route.snapshot.params['number'];
    const user = this.user.value;
    const tmp = [user];
    this.localStorage.editItem(this.number, tmp);
    this.router.navigate(['Home']);
  }
}
