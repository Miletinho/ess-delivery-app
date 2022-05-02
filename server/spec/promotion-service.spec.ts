// import 'jasmine';
// import { Car } from '../src/car';
// import { CarService } from '../src/cars-service';
// import { Coupon } from '../src/coupon';
// import { PromotionService } from '../src/promotion-service';

// describe("O servico de carros", () => {
//   var promotionService: PromotionService;

//   beforeEach(() => promotionService = new PromotionService())
  
//   // it("é inicialmente vazio", () => {
//   //   expect(carService.cars.length).toBe(0);
//   // })

//   it("cadastra cupons corretamente", () => {
//     const sample = {
//       name: "Lancer",
//       brand: "Mitsubishi",
//       price: 1,
//       color: "BLACK"
//     }
//     promotionService.add(sample);
      
//     // expect(promotionService.coupons.length).toBe(1);
//     const result = promotionService.coupons[0];
//     expect(result.name).toBe(sample.name);
//     expect(result.discount).toBe(sample.discount);
//     expect(result.adm).toBe(sample.adm);
//     expect(result.product).toBe(sample.product);
//   })
// })