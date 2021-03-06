import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-cards-inmuebles',
  templateUrl: './cards-inmuebles.component.html',
  styleUrls: ['./cards-inmuebles.component.scss']
})
export class CardsInmueblesComponent implements OnInit {

  @Input() infoInmueble:any = null;

  defaultImage = 'assets/img/default.png';

  constructor() { }

  ngOnInit(): void {  }



}
