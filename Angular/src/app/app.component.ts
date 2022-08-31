import { Component, ViewChild } from "@angular/core";

import { DxDataGridComponent } from 'devextreme-angular';

import { Order, Service } from './app.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [Service]
})
export class AppComponent {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent | undefined;

  orders: Order[];

  constructor(service: Service) {
    this.orders = service.getOrders();
  }
  getFilteredAndSortedData(){
    const grid: any = this.dataGrid?.instance;
    const filterExpr = grid.getCombinedFilter(true);
    const dataSource = grid.getDataSource();
    const loadOptions = dataSource.loadOptions();

    dataSource
      .store()
      .load({ filter: filterExpr, sort: loadOptions.sort, group: loadOptions.group })
      .then((result: any) => {
        // your code...
        console.log(result);
        alert("check the browser console");
      });
  }
}
