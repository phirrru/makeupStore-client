import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRequest, userRequest } from "../requestMethods";
import { logout } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 60px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  margin-left: 10px;
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  text-decoration: none;
  color: black;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    console.log("1");
    logout(dispatch);
  };
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>CHOU.</Logo>
        </Left>
        <Center></Center>
        <Right>
          {user?.isAdmin && (
            <Link to={`/admin`}>
              <MenuItem>ADMIN</MenuItem>
            </Link>
          )}
          {
            <Link to={`/`}>
              <MenuItem>КАТАЛОГ</MenuItem>
            </Link>
          }
          {!user && (
            <Link to={`/register`}>
              <MenuItem>РЕГИСТРАЦИЯ</MenuItem>
            </Link>
          )}
          {!user && (
            <Link to={`/login`}>
              <MenuItem>ВОЙТИ</MenuItem>
            </Link>
          )}
          {user && (
            <Link onClick={handleLogout}>
              <MenuItem>ВЫЙТИ</MenuItem>
            </Link>
          )}
          {user && (
            <Link to="/cart">
              <MenuItem>
                <ShoppingCartOutlined />
              </MenuItem>
            </Link>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
