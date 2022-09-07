import { Injectable } from '@angular/core';

export class Order {
  ID: number | undefined;

  OrderNumber: number| undefined;

  OrderDate: string| undefined;

  DeliveryDate: string| undefined;

  SaleAmount: number| undefined;

  Terms: string| undefined;

  CustomerStoreCity: string| undefined;

  Employee: string| undefined;
}

const orders: Order[] = [{
  ID: 1,
  OrderNumber: 35703,
  OrderDate: '2017/04/10',
  DeliveryDate: '2017/04/13 9:00',
  SaleAmount: 11800,
  Terms: '15 Days',
  CustomerStoreCity: 'Los Angeles, CA',
  Employee: 'Harv Mudd',
}, {
  ID: 4,
  OrderNumber: 35711,
  OrderDate: '2017/01/12',
  DeliveryDate: '2017/01/13 9:00',
  SaleAmount: 16050,
  Terms: '15 Days',
  CustomerStoreCity: 'San Jose, CA',
  Employee: 'Jim Packard',
}, {
  ID: 5,
  OrderNumber: 35714,
  OrderDate: '2017/01/22',
  DeliveryDate: '2017/01/27 9:00',
  SaleAmount: 14750,
  Terms: '15 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
}, {
  ID: 7,
  OrderNumber: 35983,
  OrderDate: '2017/02/07',
  DeliveryDate: '2017/02/10 13:00',
  SaleAmount: 3725,
  Terms: '15 Days',
  CustomerStoreCity: 'Denver, CO',
  Employee: 'Todd Hoffman',
}, {
  ID: 11,
  OrderNumber: 38466,
  OrderDate: '2017/03/01',
  DeliveryDate: '2017/03/03 17:45',
  SaleAmount: 7800,
  Terms: '15 Days',
  CustomerStoreCity: 'Los Angeles, CA',
  Employee: 'Harv Mudd',
}, {
  ID: 14,
  OrderNumber: 39420,
  OrderDate: '2017/02/15',
  DeliveryDate: '2017/02/17 11:45',
  SaleAmount: 20500,
  Terms: '15 Days',
  CustomerStoreCity: 'San Jose, CA',
  Employee: 'Jim Packard',
}, {
  ID: 15,
  OrderNumber: 39874,
  OrderDate: '2017/02/04',
  DeliveryDate: '2017/02/10 15:00',
  SaleAmount: 9050,
  Terms: '30 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
}, {
  ID: 18,
  OrderNumber: 42847,
  OrderDate: '2017/02/15',
  DeliveryDate: '2017/02/17 8:30',
  SaleAmount: 20400,
  Terms: '30 Days',
  CustomerStoreCity: 'Casper, WY',
  Employee: 'Todd Hoffman',
}, {
  ID: 30,
  OrderNumber: 57429,
  OrderDate: '2017/05/16',
  DeliveryDate: '2017/05/19 11:45',
  SaleAmount: 11050,
  Terms: '30 Days',
  CustomerStoreCity: 'Phoenix, AZ',
  Employee: 'Clark Morgan',
}, {
  ID: 32,
  OrderNumber: 58292,
  OrderDate: '2017/05/13',
  DeliveryDate: '2017/05/19 14:30',
  SaleAmount: 13500,
  Terms: '15 Days',
  CustomerStoreCity: 'Los Angeles, CA',
  Employee: 'Harv Mudd',
}];


@Injectable()
export class Service {
  getOrders(): Order[] {
    return orders;
  }
}
