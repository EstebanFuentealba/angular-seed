import { AppActions } from './actions/app.actions';
import { IAppState } from './interfaces/IAppState';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer } from './reducers/root.reducer';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, HomeModule, SharedModule.forRoot(), NgReduxModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, AppActions],
  bootstrap: [AppComponent]

})
export class AppModule { 
  constructor(private ngRedux: NgRedux<IAppState>,
              private devTool: DevToolsExtension) {
    ngRedux.configureStore(rootReducer, {}, [  ],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
    ngRedux.dispatch({ type: AppActions.APP_LOADED })
  }
}
