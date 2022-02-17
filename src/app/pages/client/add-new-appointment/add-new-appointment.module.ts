import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewAppointmentPageRoutingModule } from './add-new-appointment-routing.module';

import { AddNewAppointmentPage } from './add-new-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewAppointmentPageRoutingModule
  ],
  declarations: [AddNewAppointmentPage]
})
export class AddNewAppointmentPageModule {}
