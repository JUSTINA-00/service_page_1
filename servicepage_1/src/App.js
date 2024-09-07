import React from 'react';
import ServiceCard from './ServiceCard';
import services from './data';
import styled from 'styled-components';
import MessageBox from './MessageBox';


const Container = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 50px; /* Space between cards */
  justify-content: center; /* Center the grid items horizontally */
  box-sizing: border-box;
`;


const Title = styled.h1`
  font-size: 5rem; /* Corrected font size */
  font-family: 'Impact', sans-serif;
  font-weight: normal; /* Impact is inherently bold */
  color: #78290f;
  padding: 20px;
  margin: 0px ;
  margin-left: 23px;
  font-weight: normal;
`;

const PageWrapper = styled.div`
  background-color: #fefae0; /* Change color as needed */
  min-height: 100vh; /* Ensure full height */
`;
const App = () => {
  return (
    <div >
      <PageWrapper>
      <Title>Heading!</Title>
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
      </PageWrapper>
      <MessageBox />
    </div>
    
  );
};

export default App;
