import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/book.model';

const baseUrl ='http://10.10.2.5:3000';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

   getAllBookings(){
    return this.http.get(baseUrl+'/');
  }

  getAll(): Observable<Booking[]> {
    return this.http.get<Booking[]>(baseUrl);
  }

  get(id: any): Observable<Booking> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

    delete(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }

    deleteAll(): Observable<any> {
      return this.delete(baseUrl);
    }

  // addAppointment(key: string, value: any){
  //   this.storage.set(key,value)
  // }

  // deleteAppointment(key: string){
  //   this.storage.remove(key) 
  // }

  // updateAppointment(key: string, newValue: any){
  //   this.storage.set(key, newValue)
  //   this.getAllAppointments()
  // }

  // getAllAppointments(){
  //   let appointments: any = []
  //   this.storage.forEach((key, value, index) => {
  //     appointments.push({'key':value, 'value':key})
  //   }); 
  //   return appointments;
  // }

  // async init(){
  //   await this.storage.create()
  // }


}