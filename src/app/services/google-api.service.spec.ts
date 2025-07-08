// import {TestBed} from '@angular/core/testing';
// import {GoogleApiService} from './google-api.service';
//
// const mockSignIn = jasmine.createSpy().and.returnValue(Promise.resolve({}))
// const mockSignOut = jasmine.createSpy()
// const mockIsSignedIn = jasmine.createSpy().and.returnValue(true)
// const mockGetBasicProfile = jasmine.createSpy().and.returnValue({getEmail: () => 'user@example.com' })
//
// const mockGapi = {
//   load: jasmine.createSpy().and.callFake((_, cb) => cb())
//   auth2: {
//     getAuthInstance: () => ({
//       signIn: mockSignIn,
//       signOut: mockSignOut,
//       isSignedIn: {
//         get: mockIsSignedIn
//       },
//       currentUser: {
//         get: () => ({
//           getBasicProfile: mockGetBasicProfile
//         })
//       }
//     })
//   },
//   client: {
//     init: jasmine.createSpy().and.returnValue(Promise.resolve()),
//     calendar: {
//       events: {
//         list: jasmine.createSpy().and.returnValue(Promise.resolve({result: {items: [{summary: 'Test Event'}]}})),
//         insert: jasmine.createSpy().and.returnValue(Promise.resolve({ result: { id: '123' } })),
//       }
//     }
//   }
// }
//
// beforeEach(() => {
//   (window as any).gapi = mockGapi;
//   TestBed.configureTestingModule({
//     providers: [GoogleApiService]
//   })
//   service = TestBed.inject(GoogleApiService)
// })
//
// it('should be created', () => {
//   expect(service).toBeTrue()
// })
