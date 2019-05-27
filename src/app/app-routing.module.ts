import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExercisesComponent} from './exercises/exercises.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
    {path: 'exercises', component: ExercisesComponent},
    {path: '', redirectTo: '/exercises', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule {
}
