import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

import { TodoService } from 'src/service/todo.service';
import Swal from 'sweetalert2';
import { AddNewAppointmentPage } from '../add-new-appointment/add-new-appointment.page';
import { Button, Key } from 'protractor';
import { Booking } from '../../../models/book.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  display = "none";
  modalOpen?: boolean;

  today: number = Date.now();

  booking?: Booking[];

  bookingList: Booking= {
    id: '',
    userId: '',
    date: '',
    docId: '',
    description: '',
    
  };

  currentBooking: Booking = {
    
  };
  currentIndex = -1;
  firstname = '';

  constructor(public modalCtlr: ModalController,public bookingService:TodoService) {  }

  ngOnInit(): void {
    this.retrieveBooking();
  }
  
  retrieveBooking(): void {
    this.bookingService.getAll()
      .subscribe({
        next: (data) => {
          this.booking = data
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  refreshList(): void {
    this.retrieveBooking();
    this.currentBooking = {};
    this.currentIndex = -1;
  }

  setActiveBooking(booking:Booking, index: number): void {
    this.currentBooking = booking;
    this.currentIndex = index;
  }

  updateBooking(booking: any): void {
    
    if(this.currentBooking.id == 0){
      Swal.fire('Booking Id cannot be equal to 0');
    }

    else if(!this.currentBooking.date || !this.currentBooking.description){
      Swal.fire('Please fill in all fields!');
    }

    else{
    

    this.bookingService.update(booking._id, this.currentBooking)
      .subscribe(
        response => {
          console.log(response);
          //this.onCloseHandled();
          window.location.reload();
        
        alert("Data was successfully updated!");
          //this.message = response.message ? response.message : 'Booking was updated successfully!';
        },
        error => {
          console.log(error);
        });
      }
  }

  deleteBooking(booking: any): void {


  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    this.bookingService.delete(booking._id)
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        });
        Swal.fire(
      'Deleted!',
      'Your appointment has been deleted.',
      'success'
    )
    this.retrieveBooking();
  }
})

    
  }

  removeAllBooking(): void {

    Swal.fire({
      title: 'Are you sure you want to delete all?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.bookingService.deleteAll()
      .subscribe(
        (response: any) => {
          console.log(response);
          this.refreshList();
        },
        (error: any) => {
          console.log(error);
        });

        Swal.fire(
          'Deleted!',
          'All data is deleted!',
          'success'
        )
      }
    })

  }

  // searchBookings(): void {
  //   this.currentBooking = {};
  //   this.currentIndex = -1;

  //   this.bookingService.findById(this.bookingService.getAllBookings())
  //     .subscribe(
  //       (data: any) => {
  //         this.bookingList = data;
  //         console.log(data);
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       });
  // }

  // updateIcon = faPencilAlt;
  // closeModalIcon = faTimes;
  // deleteIcon = faTrash;

  OpenModal(){
    this.modalOpen = true;
  }

  closeModal(){
    this.modalOpen = false;
  }

  closeModalEvent(event: any){
    if(event.target.id === "modal-cont"){
      this.modalOpen = false;
    }
  }

}