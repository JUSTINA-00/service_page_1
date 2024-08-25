import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  height: 200px;
  margin: 20px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: height 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    height: 300px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;
  background-color: white;
  height: ${(props) => (props.expanded ? '100px' : '0')};
  opacity: ${(props) => (props.expanded ? '1' : '0')};
  transition: height 0.3s ease, opacity 0.3s ease;
`;

const ServiceCard = ({ title, image, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
      <Image src={image} alt={title} />
      <Info expanded={expanded}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Info>
    </Card>
  );
};

export default ServiceCard;
