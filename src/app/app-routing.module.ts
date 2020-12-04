import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EvenOddComponent} from './components/even-odd/even-odd.component';

const routes: Routes = [
    { path: '', redirectTo: '/even_odd', pathMatch: 'full' },
    {
        path: 'even_odd',
        component: EvenOddComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})

export class AppRoutingModule { }
