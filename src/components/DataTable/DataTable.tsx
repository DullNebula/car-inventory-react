import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api'
import { useGetData } from '../../custom-hooks';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material'
import { CarForm } from '../../components';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 130 },
    {
        field: 'name',
        headerName: 'Drone',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'make',
        headerName: 'Make',
        description: 'This column has a value getter and is not sortable.',
        width: 90,
        editable: true,
    },
    {
        field: 'miles_per_gallon',
        headerName: 'MPG',
        description: 'This column has a value getter and is not sortable.',
        width: 90,
        editable: true,
    },
    {
        field: 'dimensions',
        headerName: 'Dimensions',
        description: 'This column has a value getter and is not sortable.',
        width: 90,
        editable: true,
    },
    {
        field: 'weight',
        headerName: 'Weight',
        description: 'This column has a value getter and is not sortable.',
        width: 90,
        editable: true,
    },
    {
        field: 'speed',
        headerName: 'Top Speed',
        description: 'This column has a value getter and is not sortable.',
        width: 90,
        editable: true,
    },
    {
        field: 'cost_of_production',
        headerName: 'Cost',
        description: 'This column has a value getter and is not sortable.',
        width: 90,
        editable: true,
    },
    {
        field: 'series',
        headerName: 'Series',
        description: 'This column has a value getter and is not sortable.',
        width: 90,
        editable: true,
    },
    {
        field: 'seats',
        headerName: 'Seats',
        description: 'This column has a value getter and is not sortable.',
        width: 90,
        editable: true,
    },
]

interface gridData {
    data: {
        id?: string;
        name?: string;

    }
}

export const DataTable = () => {
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])
    let handleOpen = () => setOpen(true);
    let handleClose = () => setOpen(false);

    let deleteData = async () => {
        await serverCalls.delete(`${gridData[0]}`)
        getData();
    }
    console.log(gridData) // a list of id's from the checked rows
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Cars In Inventory</h2>
            <DataGrid
                rows={carData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onSelectionModelChange={newSelectionModel => setData(newSelectionModel)}
                {...carData}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            {/*Dialog Pop Up begin */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update A Car</DialogTitle>
                <DialogContent>
                    <DialogContentText>Car id: {gridData[0]}</DialogContentText>
                    <CarForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}