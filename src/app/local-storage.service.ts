import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  data:any;

  setItem(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  
  editItem(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

}
