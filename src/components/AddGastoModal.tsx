import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

interface AddGastoModalProps {
  open: boolean;
  handleClose: () => void;
  handleSave: () => void;
  newDetalle: string;
  setNewDetalle: (value: string) => void;
  newMonto: number | string;
  setNewMonto: (value: number | string) => void;
}

const AddGastoModal: React.FC<AddGastoModalProps> = ({
  open,
  handleClose,
  handleSave,
  newDetalle,
  setNewDetalle,
  newMonto,
  setNewMonto
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Agregar Gasto</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, ingrese el detalle y el monto del nuevo gasto.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Detalle"
          type="text"
          fullWidth
          value={newDetalle}
          onChange={(e) => setNewDetalle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Monto"
          type="number"
          fullWidth
          value={newMonto}
          onChange={(e) => setNewMonto(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddGastoModal;