import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewAppointmentPage } from './add-new-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewAppointmentPageRoutingModule {}
