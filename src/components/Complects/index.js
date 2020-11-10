import React from 'react';
import {
  ComplectsContainer,
  ComplectsWrapper,
  ComplectsHeading,
  ComplectsTitle,
  ComplectsCard,
  ComplectsImg,
  ComplectsInfo,
  ComplectsDesc,
  ComplectsPrice,
  ComplectsButton
} from './ComplectsElements';

const Complects = ({ heading, data }) => {
  return (
    <ComplectsContainer>
      <ComplectsHeading>{heading}</ComplectsHeading>
      <ComplectsWrapper>
        {data.map((complects, index) => {
          return (
            <ComplectsCard key={index}>
              <ComplectsImg src={complects.img} alt={complects.alt} />
              <ComplectsInfo>
                <ComplectsTitle>{complects.name}</ComplectsTitle>
                <ComplectsDesc>{complects.desc}</ComplectsDesc>
                <ComplectsPrice>{complects.price}</ComplectsPrice>
                <ComplectsButton>{complects.button}</ComplectsButton>
              </ComplectsInfo>
            </ComplectsCard>
          );
        })}
      </ComplectsWrapper>
    </ComplectsContainer>
  );
};

export default Complects;
