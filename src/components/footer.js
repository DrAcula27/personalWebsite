import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
  a {
    padding: 10px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledCredit tabindex="-1">
      <a href="https://brittanychiang.com">
        <div>Template forked from Brittany Chiang</div>
      </a>
    </StyledCredit>
  </StyledFooter>
);

export default Footer;
