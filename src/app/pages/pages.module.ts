import { NgModule } from '@angular/core';

// Components
import { PagesComponent } from './pages.component';
import { PrivateComponent } from './private/private.component';
import { HomeComponent } from './home/home.component';

// Routes
import { PAGE_ROUTES } from './pages.routes';

const COMPONENTS = [
  PrivateComponent,
  HomeComponent
];

const PIPES = [];

const DIRECTIVES = [  ];

const DECLARATIONS = [...[PagesComponent], ...PIPES, ...DIRECTIVES, ...COMPONENTS];

@NgModule({
  imports: [PAGE_ROUTES],
  exports: COMPONENTS,
  declarations: DECLARATIONS
})
export class PagesModule {}
