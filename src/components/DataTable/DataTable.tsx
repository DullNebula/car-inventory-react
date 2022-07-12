import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'carModel',
    headerName: 'Car Model',
    width: 150,
    editable: true,
  },
  {
    field: 'carBrand',
    headerName: 'Car Brand',
    width: 150,
    editable: true,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.carBrand || ''} ${ params.row.carModel|| ''}`,
  },
];

const rows = [
  { id: 1, carBrand: 'CarBrand', carModel: 'Model1', stock: 0 },
  { id: 2, carBrand: 'CarBrand', carModel: 'Model2', stock: 7 },
  { id: 3, carBrand: 'CarBrand', carModel: 'Model3', stock: 2 },
  { id: 4, carBrand: 'CarBrand', carModel: 'Model4', stock: 5 },
  { id: 5, carBrand: 'CarBrand', carModel: 'Model5', stock: 3 },
  { id: 6, carBrand: 'CarBrand', carModel: 'Model6', stock: 10 },
  { id: 7, carBrand: 'CarBrand', carModel: 'Model7', stock: 8 },
  { id: 8, carBrand: 'CarBrand', carModel: 'Model8', stock: 9 },
  { id: 9, carBrand: 'CarBrand', carModel: 'Model9', stock: 8 },
];

export const DataTable = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}