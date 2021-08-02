import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanBanComponent } from './pages/kan-ban/kan-ban.component';

const routes: Routes = [
  {
    path: 'kanban',
    component: KanBanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
