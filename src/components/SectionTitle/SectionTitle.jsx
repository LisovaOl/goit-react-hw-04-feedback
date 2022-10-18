import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, Title } from './SectionTitle.styled';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
