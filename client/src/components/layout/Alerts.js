import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div
        key={alert.id}
        className={`alert alert-${alert.type}`}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <i className='fas fa-exclamation-circle' style={{ fontSize: '2rem' }} />{' '}
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
