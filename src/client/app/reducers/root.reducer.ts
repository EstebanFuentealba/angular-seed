import { appReducer } from './app.reducer';
import { IAppState } from '../interfaces/IAppState';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers<IAppState>({
  app: appReducer
});