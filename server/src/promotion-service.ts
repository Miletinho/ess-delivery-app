import { Coupon } from "./coupon";

import crypto = require('crypto');

import * as fs from 'fs';

export class PromotionService {
  coupons: Coupon[] = [];
  
  add(coupon: Coupon): Coupon {
    const idCount = crypto.randomBytes(4).toString('HEX'); 
    //serve para ele gerar 4 bytes de caracteres aleatórios e depois transformar tudo em uma sting no formato hexadecimal

    const newCoupon = new Coupon(<Coupon> { id: idCount, ...coupon });
    // if (newCoupon.price <= 0) {
    //   throw Error("Price can't equal or less than zero")
    // }
    console.log(newCoupon);

    this.coupons.push(newCoupon);
    return newCoupon;
  
  }
  
  getByName(couponName: string) : Coupon {
    return this.coupons.find(({ name }) => name == couponName);
  }

  update(couponName: string, coupon: Coupon) : Coupon {
    var result: Coupon = this.getByName(couponName);
    var couponIndex = this.coupons.findIndex((result) => result.id == couponName); // retorna o índice do cupom no array

    if (result) {
      this.coupons[couponIndex] = <Coupon> { 
        ...this.coupons[couponIndex],  // preserva tudo que já tem no cupom 
        ...coupon                      // altera apenas o que é necessário
      }      
    }

    return result;
  }

  get() : Coupon[] {
    return this.coupons;
  }

  delete(couponName: string) : Coupon {
    var result: Coupon = this.getByName(couponName);
    var couponIndex = this.coupons.findIndex((result) => result.id == couponName);
    
    if (result) {
      this.coupons.splice(couponIndex, 1);
    }
    return result;
  }

  updateFile(fileName: string){
    fs.writeFile(fileName, JSON.stringify(this.coupons), (err) => {
      if(err){
        console.log(err);
      }else{
        console.log(`Arquivo ${fileName} atualizado!`);
      }
    })
  }
  
}