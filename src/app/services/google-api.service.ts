import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

declare var gapi: any
@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  private gapiLoaded:boolean   = false;
  private readonly clientId: string = environment.googleClientId;
  private readonly scopes: string = 'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly'
  constructor () {
    this.loadGapiScript().then( () => this.initClient())
  }
  private loadGapiScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const node = document.createElement('script');
      node.src = 'https://apis.google.com/js/api.js';
      node.onload = () => {
        gapi.load('client:auth2', resolve)
      }
      node.onerror = reject
      document.body.appendChild(node)
    })
  }
  private async initClient(): Promise<void> {
    await gapi.client.init({
      clientId: this.clientId,
      scope: this.scopes,
    })
    this.gapiLoaded = true;
  }

  signIn(): Promise<any> {
    return gapi.auth2.getAuthInstance().signIn();
  }
  signOut(): void {
    gapi.auth2.getAuthInstance().signOut();
  }
  isSignedIn(): boolean {
    return gapi.auth2.getAuthInstance().isSignedIn.get();
  }
  getCurrentUserEmail(): string |  null {
    if(!this.isSignedIn()){ return null }
    return gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail();
  }

  async listEvents(calendarId: string): Promise<any[]> {
    const now = new Date().toISOString();
    const response = await gapi.client.calendar.events.list({
      calendarId,
      timeMin: now,
      singleEvents: true,
      showDeleted: false,
      orderBy: 'startTime',
      maxResults: 50
    })
    return response.result.items;
  }

  async insertEvent(calendarId: string, event: any): Promise<any> {
    const response = await gapi.client.calendar.events.insert({
      calendarId,
      resource: event
    })

    return response.result;
  }

}
