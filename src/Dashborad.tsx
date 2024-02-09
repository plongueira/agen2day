import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h4">Dashboard</Typography>
          {/* Aquí puedes agregar otros componentes de Material-UI para mostrar widgets y estadísticas */}
        </Paper>
      </Grid>
      {/* Aquí puedes agregar más Grid items para otros componentes del dashboard */}
    </Grid>
  );
}

export default Dashboard;
