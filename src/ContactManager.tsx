import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';

const ContactManager = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpenDialog}>Agregar Contacto</Button>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Agregar Contacto</DialogTitle>
        <DialogContent>
          <TextField label="Nombre" fullWidth />
          <TextField label="Email" fullWidth />
          <TextField label="Teléfono" fullWidth />
          {/* Agregar más campos según sea necesario */}
          <Button variant="contained" onClick={handleCloseDialog}>Guardar</Button>
        </DialogContent>
      </Dialog>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              {/* Agregar más encabezados de columna según sea necesario */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Aquí puedes mapear los contactos y mostrarlos en filas de la tabla */}
            {/* Ejemplo: 
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
              </TableRow>
            ))}
            */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ContactManager;
