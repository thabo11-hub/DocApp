import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from 'src/service/todo.service';
import { Booking } from '../../../models/book.model';

@Component({
  selector: 'app-add-new-appointment',
  templateUrl: './add-new-appointment.page.html',
  styleUrls: ['./add-new-appointment.page.scss'],
})
export class AddNewAppointmentPage implements OnInit {
  display = "none";

  bookingList: Booking= {
    id: '',
    userId: '',
    date: '',
    docId: '',
    description: '',
  };

  submitted = false;

  constructor(public modalCtlr: ModalController, public todoService : TodoService) { }

  ngOnInit() { }

  saveBooking(): void {
    const data = {
      id: this.bookingList.id,
      userId: this.bookingList.userId,
      date: this.bookingList.date,
      docId: this.bookingList.docId,
      description: this.bookingList.description
    };

    this.todoService.create(data)
    .subscribe(
      (response: any) => {
        console.log(response);
        this.submitted = true;
      },
      (error: any) => {
        console.log(error);
      });

  }

  newBooking(): void {
    this.submitted = false;
    this.bookingList = {
    id: '',
    userId: '',
    date: '',
    docId: '',
    description: ''
    };
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  
}