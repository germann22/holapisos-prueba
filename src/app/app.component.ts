import { Component, OnInit } from '@angular/core';
import { Inmueble } from './model/inmueble.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  defaultImage = 'assets/img/default.png';


  inmueblesList: Inmueble[] = [];
  startPage : number = 0;
  loading:boolean = false;
  constructor(private api: ApiService){}

  ngOnInit() {

    //Call api for get Inmuebles
    this.getInmuebles()

  }


  getInmuebles() {
    this.api.getImuebles(this.startPage).subscribe({
      next: (data) => {
        this.saveInmuebles(data);
        this.loading = false;
      },
      error(msg) {
        console.log('Error', msg);
      }
    })
  }

  //Save inmuebles in array list
  saveInmuebles(data:any[]) {
    data.forEach(element => {

      const inmuebles: Inmueble = {
        images: element.attributes.field_inmu_imag_arra,
        price: Number(element.attributes.field_inmu_prec),
        address: element.attributes.field_inmu_nomb_call
      }

      this.inmueblesList.push(inmuebles);

    });

  }


  showMoreItems() {
    this.loading = true;
    this.startPage = this.startPage+32;
    setTimeout(() => {
      this.getInmuebles()   
    }, 500);
   }

}
