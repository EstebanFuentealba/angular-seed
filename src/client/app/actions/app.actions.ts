import { IAppState } from '../interfaces/IAppState';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

/**
 * Action creators in Angular 2. We may as well adopt a more
 * class-based approach to satisfy Angular 2's OOP idiom. It
 * has the advantage of letting us use the dependency injector
 * as a replacement for redux-thunk.
 */
@Injectable()
export class AppActions {
  constructor (private ngRedux: NgRedux<IAppState>) {}

  static APP_LOADING: string = 'APP_LOADING';
  static APP_LOADED: string = 'APP_LOADED';

}