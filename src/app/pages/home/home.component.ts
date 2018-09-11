import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.user = this.localStorageService.takeUserLoginData();
    if (this.user === null) {
      this.router.navigate(['/login']);
    }
  }
}
