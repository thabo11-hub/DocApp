import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ModalController } from '@ionic/angular';
import { AddNewAppointmentPage } from '../pages/client/add-new-appointment/add-new-appointment.page';
// import { UpdateAppointmentPage } from '../update-appointment/update-appointment.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  todoList = []
  
  today: number = Date.now();

  model: NgbDateStruct;
  date: {year: number, month: number};
  show = true;

  constructor(private calendar: NgbCalendar,private menu: MenuController,public modalCtlr: ModalController) {
    // this.getAllAppointment()
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddNewAppointmentPage,
    })
    modal.onDidDismiss().then(newAppointment =>{
      // this.getAllAppointment();
    })
    return await modal.present();
  }

  // getAllAppointment(){
  //   this.todoList = this.todoService.getAllAppointments()
  //   console.log(this.todoService.getAllAppointments());
  // }

  // delete(key: string) { 
  //   this.todoService.deleteAppointment(key)
  //   this.getAllAppointment()
  // }

  async update(selectedAppointment: any){
    // const modal = await this.modalCtlr.create({
    //   component: UpdateAppointmentPage,
    //   componentProps: {appointment: selectedAppointment}
    // })

    // modal.onDidDismiss().then(()=>{
    //   this.getAllAppointment()
    // })
    
    // return await modal.present()
  }

}
