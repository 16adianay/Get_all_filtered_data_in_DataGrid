<template>
  <div>
    <button @click="getFilteredAndSortedData">
      Get All Filtered And Sorted Data
    </button>
    <DxDataGrid
        id="gridContainer"
        :ref="dataGridRefName"
        :data-source="orders"
        key-expr="ID"
        :show-borders="true"
    >
      <DxFilterRow :visible="true" />
      <DxHeaderFilter :visible="true" />
      <DxSearchPanel :visible="true" />
    </DxDataGrid>
  </div>
</template>
<script>
import {
  DxDataGrid,
  DxHeaderFilter,
  DxSearchPanel,
  DxFilterRow,
} from 'devextreme-vue/data-grid';
import service from "./data.js";

export default {
  components: {
    DxDataGrid,
    DxHeaderFilter,
    DxSearchPanel,
    DxFilterRow
  },
  data() {
    return {
      orders: service.getOrders(),
      dataGridRefName: 'dataGrid'
    };
  },
  methods: {
    getFilteredAndSortedData(){

      const grid = this.dataGrid;
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
    }
  },
  computed: {
    dataGrid: function() {
      return this.$refs[this.dataGridRefName].instance;
    },
  }
};
</script>
