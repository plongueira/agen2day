import React from 'react';

import ContactManager from './ContactManager';
import Calendar from './Calendar';
import FinanceTracker from './FinanceManager';
import Dashboard from './Dashborad';


const MainPage = () => {
  return (
    <div>
      <h1>Asistente Virtual para Autónomos</h1>
      <div style={{ marginBottom: '40px' }}>
        <h2>Dashboard</h2>
        <Dashboard />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Gestión de Contactos</h2>
        <ContactManager />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Calendario y Agenda</h2>
        <Calendar />
      </div>
      <div>
        <h2>Finanzas</h2>
        <FinanceTracker />
      </div>
    </div>
  );
}

export default MainPage;
