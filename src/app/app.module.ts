import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Modules Custom
import { LoginModule } from './login/login.module';
import { PagesModule } from './pages/pages.module';

// Routes
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    APP_ROUTES,
    LoginModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
