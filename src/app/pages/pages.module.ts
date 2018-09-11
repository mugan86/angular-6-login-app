import { NgModule } from '@angular/core';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

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
  imports: [PAGE_ROUTES,
   BrowserModule,
    FormsModule,
    SharedModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })
  ],
  exports: COMPONENTS,
  declarations: DECLARATIONS
})
export class PagesModule {}
