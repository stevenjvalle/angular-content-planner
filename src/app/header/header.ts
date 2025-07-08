import {Component, inject} from '@angular/core';
import { MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {RouterLinkActive} from '@angular/router';
import {GoogleApiService} from '../services/google-api.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatButton],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  googleApi = inject(GoogleApiService);
  get userEmail(): string  | null {
    return this.googleApi.getCurrentUserEmail()
  }
  signOut(): void {
    this.googleApi.signOut()
  }
}
