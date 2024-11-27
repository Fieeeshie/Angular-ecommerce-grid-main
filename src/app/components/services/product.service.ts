import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    private gadget: Product[] = [
        { id: 1, name: 'Air Fryer', price: 3190, description: 'The Air Fryer lets you cook delicious, crispy meals with little to no oil, offering a healthier alternative to traditional frying.', img: 'assets/img/product__img1.jpg' },
        { id: 2, name: 'Coffee Maker', price: 2500, description: 'Start your day with a fresh, aromatic cup of coffee from this easy-to-use coffee maker, featuring multiple brew settings and a large water reservoir.', img: 'assets/img/product__img2.jpg' },
        { id: 3, name: 'Blender', price: 1800, description: 'Blend, puree, and mix your favorite ingredients effortlessly with this powerful blender, perfect for smoothies, soups, and more.', img: 'assets/img/product__img3.jpg' },
        { id: 4, name: 'Microwave Oven', price: 4500, description: 'Quickly heat, cook, or defrost your meals with this efficient microwave oven featuring preset cooking modes and an easy-to-clean interior.', img: 'assets/img/product__img4.jpg' },
        { id: 5, name: 'Electric Kettle', price: 1200, description: 'Boil water in minutes with this sleek, energy-efficient electric kettle, designed for quick tea or coffee preparation.', img: 'assets/img/product__img5.jpg' },
    ];
    

    private furniture: Product[] = [
        { id: 1, name: 'Air Purifier', price: 20000, description: 'High-performance air purifier designed to eliminate dust, allergens, and pollutants, ensuring fresh air in your home.', img: 'assets/img/product__img6.jpg' },
        { id: 2, name: 'Vacuum Cleaner', price: 15000, description: 'Powerful vacuum cleaner with multiple attachments, ideal for deep cleaning carpets, floors, and upholstery.', img: 'assets/img/product__img8.jpg' },
        { id: 3, name: 'Dehumidifier', price: 30000, description: 'Efficient dehumidifier that reduces excess moisture in the air, preventing mold and improving air quality.', img: 'assets/img/product__img9.jpg' },
        { id: 4, name: 'Electric Fan', price: 5000, description: 'Energy-efficient electric fan with multiple speed settings, providing a cool breeze during hot weather.', img: 'assets/img/product__img10.jpg' },
        { id: 5, name: 'Water Dispenser', price: 7000, description: 'Convenient water dispenser with hot and cold options, perfect for hydration at home or in the office.', img: 'assets/img/product__img11.jpg' },
    ];
    

    private shoe: Product[] = [
        { id: 1, name: 'Smartphone', price: 8000, description: 'Sleek and powerful smartphone with a high-resolution display, long battery life, and advanced features for everyday use.', img: 'assets/img/product__img13.jpg' },
        { id: 2, name: 'Wireless Headphones', price: 10000, description: 'High-quality wireless headphones with noise-cancellation, deep bass, and long-lasting comfort for an immersive audio experience.', img: 'assets/img/product__img14.jpg' },
        { id: 3, name: 'Tablet', price: 6000, description: 'Portable tablet with a large display, fast processor, and a versatile design for work, play, and everything in between.', img: 'assets/img/product__img15.jpg' },
        { id: 4, name: 'Smartwatch', price: 12000, description: 'Feature-packed smartwatch with fitness tracking, heart rate monitoring, and smart notifications to keep you connected and healthy.', img: 'assets/img/product__img16.jpg' },
        { id: 5, name: 'Bluetooth Speaker', price: 9000, description: 'Compact and portable Bluetooth speaker with exceptional sound quality, perfect for any occasion or outdoor adventure.', img: 'assets/img/product__img17.jpg' },
    ];
    
    
    getGadgets(): Product[] {
    return this.gadget;
    }

    getFurniture(): Product[] {
    return this.furniture;
    }

    getShoes(): Product[] {
    return this.shoe;
    }
}