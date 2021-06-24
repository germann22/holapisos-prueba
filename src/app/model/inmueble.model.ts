export class Inmueble {
    images: string;
    price: number;
    address: string;
    
    constructor(
        images:string,
        price:number,
        address:string
    ){
        this.images = images;
        this.price = price;
        this.address = address;
    }

}
