export class ProductsService {
    products = [
        { "title": 'USB Car Charger', "description": "Forget the old car chargers. This allows you to charge your phone in the car via usb." },
        { "title": 'USB flash drive', "description": 'It is a data storage device that includes flash memory with an integrated USB interface' }
      ];

    addProduct(product: any) {
        this.products.push(product);
    }

    removeProduct(index: number) {
        this.products.splice(index, 1);
    }
}