"use client";

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Card, CardContent, Box } from '@mui/material';
import AddGastoModal from '@/components/AddGastoModal';
import EditGastoModal from '@/components/EditGastoModal'

interface GastoFijo {
  id: number;
  detalle: string;
  monto: number;
}

const initialGastosFijos: GastoFijo[] = [
  { id: 1, detalle: 'Renta', monto: 500 },
  { id: 2, detalle: 'Electricidad', monto: 100 },
  { id: 3, detalle: 'Internet', monto: 50 },
];

export default function GastosFijos() {
  const [gastosFijos, setGastosFijos] = useState<GastoFijo[]>(initialGastosFijos);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [newDetalle, setNewDetalle] = useState('');
  const [newMonto, setNewMonto] = useState<number | string>('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editDetalle, setEditDetalle] = useState('');
  const [editMonto, setEditMonto] = useState<number | string>('');

  const handleAddGasto = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSaveAdd = () => {
    const newGasto: GastoFijo = { id: gastosFijos.length + 1, detalle: newDetalle, monto: Number(newMonto) };
    setGastosFijos([...gastosFijos, newGasto]);
    setOpenAdd(false);
    setNewDetalle('');
    setNewMonto('');
  };

  const handleEditGasto = (id: number) => {
    const gasto = gastosFijos.find(g => g.id === id);
    if (gasto) {
      setEditId(id);
      setEditDetalle(gasto.detalle);
      setEditMonto(gasto.monto);
      setOpenEdit(true);
    }
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleSaveEdit = () => {
    if (editId !== null) {
      setGastosFijos(gastosFijos.map(gasto => 
        gasto.id === editId ? { ...gasto, detalle: editDetalle, monto: Number(editMonto) } : gasto
      ));
      setOpenEdit(false);
      setEditId(null);
      setEditDetalle('');
      setEditMonto('');
    }
  };

  const handleDeleteGasto = (id: number) => {
    setGastosFijos(gastosFijos.filter(gasto => gasto.id !== id));
  };

  const totalGastoFijo = gastosFijos.reduce((total, gasto) => total + gasto.monto, 0);

  return (
    <div>
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>Gastos Fijos</Typography>
        <Button variant="contained" color="primary" onClick={handleAddGasto}>Agregar Gasto</Button>
      </Box>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Detalle</TableCell>
              <TableCell>Monto</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gastosFijos.map((gasto) => (
              <TableRow key={gasto.id}>
                <TableCell>{gasto.detalle}</TableCell>
                <TableCell>{gasto.monto}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditGasto(gasto.id)}>Editar</Button>
                  <Button onClick={() => handleDeleteGasto(gasto.id)}>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Card style={{ marginTop: 20 }}>
        <CardContent>
          <Typography variant="h6">Total gasto fijo:</Typography>
          <Typography variant="h4" color="primary">${totalGastoFijo}</Typography>
        </CardContent>
      </Card>

      <AddGastoModal
        open={openAdd}
        handleClose={handleCloseAdd}
        handleSave={handleSaveAdd}
        newDetalle={newDetalle}
        setNewDetalle={setNewDetalle}
        newMonto={newMonto}
        setNewMonto={setNewMonto}
      />

      <EditGastoModal
        open={openEdit}
        handleClose={handleCloseEdit}
        handleSave={handleSaveEdit}
        editDetalle={editDetalle}
        setEditDetalle={setEditDetalle}
        editMonto={editMonto}
        setEditMonto={setEditMonto}
      />
    </div>
  );
}