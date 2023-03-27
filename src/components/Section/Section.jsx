import PropTypes from 'prop-types';

import { Container, SectionTitle } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
