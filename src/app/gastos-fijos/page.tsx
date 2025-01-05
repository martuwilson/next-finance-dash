"use client";

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Card, CardContent, Box } from '@mui/material';

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

  const handleAddGasto = () => {
    // Lógica para agregar un nuevo gasto
    const newGasto: GastoFijo = { id: gastosFijos.length + 1, detalle: 'Nuevo Gasto', monto: 0 };
    setGastosFijos([...gastosFijos, newGasto]);
  };

  const handleEditGasto = (id: number) => {
    // Lógica para editar un gasto
    console.log('Editar gasto', id);
  };

  const handleDeleteGasto = (id: number) => {
    // Lógica para eliminar un gasto
    setGastosFijos(gastosFijos.filter(gasto => gasto.id !== id));
  };

  const totalGastoFijo = gastosFijos.reduce((total, gasto) => total + gasto.monto, 0);

  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb={4}>
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
    </div>
  );
}