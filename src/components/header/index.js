import React from 'react';
import { Header as HeaderContainer, HeaderElement, AppIcon } from './styles';

const Header = () =>
  <HeaderContainer>
    <HeaderElement>
      <AppIcon href="/" target="_self">MOVIE DEKHO</AppIcon>
    </HeaderElement>
  </HeaderContainer>;

export { Header }
