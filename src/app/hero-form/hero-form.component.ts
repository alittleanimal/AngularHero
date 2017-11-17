import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import { Router} from '@angular/router';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(21, 'admin', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(value) {
    if (value.name === 'admin' && value.password === 'admin') {
      this.router.navigate(['/dashboard']);
    }
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
