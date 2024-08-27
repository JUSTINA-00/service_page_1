import React from 'react';
import ServiceCard from './ServiceCard';
import services from './data';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 50px; /* Space between cards */
  justify-content: center; /* Center the grid items horizontally */
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 3rem; /* Corrected font size */
  color: #333;
  margin: 20px 0;
  margin-left: 23px;
  font-weight: bold;
`;

const App = () => {
  return (
    <div>
      <Title>Hey!</Title>
      <Container>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </Container>
    </div>
  );
};

export default App;
