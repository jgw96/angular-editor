import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularIdeAppComponent } from '../app/angular-ide.component';

beforeEachProviders(() => [AngularIdeAppComponent]);

describe('App: AngularIde', () => {
  it('should create the app',
      inject([AngularIdeAppComponent], (app: AngularIdeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-ide works!\'',
      inject([AngularIdeAppComponent], (app: AngularIdeAppComponent) => {
    expect(app.title).toEqual('angular-ide works!');
  }));
});
