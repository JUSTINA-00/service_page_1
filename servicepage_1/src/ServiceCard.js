import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: height 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    height: 300px; 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 768px) {
    width: 350px; 
    height: 200px; 
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  transition: height 0.3s ease, opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  max-height: ${(props) => (props.expanded ? '150px' : '50px')}; 
  opacity: ${(props) => (props.expanded ? '1' : '0.8')}; 
  overflow: hidden; 
`;

const Title = styled.h3`
  margin: 0;
  padding-bottom: 10px; 
  flex-shrink: 0; 
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  overflow-y: auto; 
  max-height: ${(props) => (props.expanded ? '100px' : '0')}; 
  transition: max-height 0.3s ease; 
`;

const ServiceCard = ({ title, image, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
      <Image src={image} alt={title} style={{ opacity: expanded ? '0.6' : '1' }} />
      <Info expanded={expanded}>
        <Title>{title}</Title>
        <Description expanded={expanded}>{description}</Description>
      </Info>
    </Card>
  );
};

export default ServiceCard;
