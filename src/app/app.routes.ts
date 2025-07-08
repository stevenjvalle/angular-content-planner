import { Routes } from '@angular/router';
import {Login} from './login/login'
import {Timeline} from './timeline/timeline';
import {Approvals} from './approvals/approvals';
import {PostSubmission} from './post-submission/post-submission';
export const routes: Routes = [
    // {path:'login', component: Login},
    // {path: '',redirectTo: 'login', pathMatch: 'full' },
    // {path: '**', redirectTo: 'login'},
  {path: '', redirectTo: '/timeline', pathMatch: 'full' },
  { path: 'timeline', component: Timeline },
  { path: 'login', component: Login },
  { path: 'approvals', component: Approvals },
  { path: 'submit', component: PostSubmission },




];
