import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

interface EditGastoModalProps {
  open: boolean;
  handleClose: () => void;
  handleSave: () => void;
  editDetalle: string;
  setEditDetalle: (value: string) => void;
  editMonto: number | string;
  setEditMonto: (value: number | string) => void;
}

const EditGastoModal: React.FC<EditGastoModalProps> = ({
  open,
  handleClose,
  handleSave,
  editDetalle,
  setEditDetalle,
  editMonto,
  setEditMonto
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar Gasto</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, edite el detalle y el monto del gasto.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Detalle"
          type="text"
          fullWidth
          value={editDetalle}
          onChange={(e) => setEditDetalle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Monto"
          type="number"
          fullWidth
          value={editMonto}
          onChange={(e) => setEditMonto(e.target.value)}
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

export default EditGastoModal;