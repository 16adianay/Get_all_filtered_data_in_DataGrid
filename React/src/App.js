import React, { useRef } from "react";
import DataGrid, {
  FilterRow, HeaderFilter, SearchPanel,
} from 'devextreme-react/data-grid';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import service from "./data.js";

const orders = service.getOrders();

export default function App() {
  const dataGridRef = useRef(null);

  const getFilteredAndSortedData = React.useCallback(() => {
    const grid = dataGridRef.current.instance;
    const filterExpr = grid.getCombinedFilter(true);
    const dataSource = grid.getDataSource();
    const loadOptions = dataSource.loadOptions();

    dataSource
        .store()
        .load({ filter: filterExpr, sort: loadOptions.sort, group: loadOptions.group })
        .then((result) => {
          // your code...
          console.log(result);
          alert("check the browser console");
        });
  }, [dataGridRef]);

  return (
      <div>
          <button onClick={getFilteredAndSortedData}>
              Get All Filtered And Sorted Data
          </button>
        <DataGrid id="gridContainer"
            ref={ dataGridRef }
            dataSource={orders}
            keyExpr="ID"
            showBorders={true}>
          <FilterRow visible={true} />
          <HeaderFilter visible={true} />
          <SearchPanel visible={true} />
        </DataGrid>
      </div>
  );
}
