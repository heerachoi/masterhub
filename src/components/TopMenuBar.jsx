import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
`
const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 100px;
`
const UserMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`
const LogoContainer = styled(Link)`
  font-weight: 800;
  font-size: 20px;
  text-decoration: none;
  color: black;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

`

const TopMenuBar = () => {
  return (
    <HeaderWrapper>
      <LogoContainer to='/'>MASTERHUB</LogoContainer>
      <MenuWrapper>
        <StyledLink to='/community'>커뮤니티</StyledLink>
        <StyledLink to='/study'>학습</StyledLink>
        <StyledLink to='/ranking'>랭킹</StyledLink>
        <StyledLink to='/faq'>FAQ</StyledLink>
      </MenuWrapper>
      <UserMenuWrapper>
        <div>로그인</div>
        <div>회원가입</div>
      </UserMenuWrapper>
  </HeaderWrapper>
  );
}

export default TopMenuBar;
