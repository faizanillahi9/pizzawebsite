import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebtnWrap,
} from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Pizza</SidebarLink>
        <SidebarLink to='/'>Dessert</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SidebtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
