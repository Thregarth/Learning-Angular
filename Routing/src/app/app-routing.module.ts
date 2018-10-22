import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component'
import { PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path:'',redirectTo:'/users', pathMatch:'full' },
  {path:'users', component: UsersListComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponents =[UsersListComponent, PageNotFoundComponent]
