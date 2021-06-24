import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getImuebles(startPage: Number) {
    let url = `https://apidev.holapisos.com/es/api/node/inmuebles?page%5blimit%5d=32&page%5boffset%5d=${startPage}&sort%5bweight%5d%5bpath%5d=field_inmu_peso_orde&sort%5bweight%5d%5bdirection%5d=DESC&sort%5brelevancy%5d%5bpath%5d=relevancy&sort%5brelevancy%5d%5bdirection%5d=DESC&fields%5bnode--inmuebles%5d=field_inmu_imag_arra,field_inmu_prec,field_inmu_nume_habi,field_inmu_refe,field_inmu_pobl,field_inmu_area_cons,field_inmu_tipo_sin_agru,field_inmu_tipo_via,field_inmu_nomb_call`;
    return this.http.get(url)
      .pipe(map((data:any) => {
        console.log(data.data);
        return data.data;
      }));
  }

}
