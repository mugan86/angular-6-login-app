import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
const COMPONENTS = [NotFoundComponent, NavbarComponent];
const PIPES = [];

const DECLARATIONS = [...PIPES, ...COMPONENTS];
@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: DECLARATIONS,
    exports: DECLARATIONS
})
export class SharedModule { }
