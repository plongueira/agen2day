import React from 'react';
import { TextField } from '@mui/material';

const Calendar = () => {
  return (
    <div>
      <TextField
        label="Selecciona una fecha"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      {/* Aquí puedes agregar más componentes de calendario según sea necesario */}
    </div>
  );
}

export default Calendar;
