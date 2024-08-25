import React from 'react';
import ServiceCard from './ServiceCard';
import services from './data';

const App = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Hey!</h1>
      {/* Corrected the structure here */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
