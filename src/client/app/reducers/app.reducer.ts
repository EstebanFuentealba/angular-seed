import { AppActions } from '../actions/app.actions';
import { IApp } from '../interfaces/IApp';
const INITIAL_STATE: IApp = {
  loading:true
};
export function appReducer(state:IApp = INITIAL_STATE, action:any) {
  switch (action.type) {
    case AppActions.APP_LOADING:
      return Object.assign({}, state, { loading: true });
    case AppActions.APP_LOADED:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
}