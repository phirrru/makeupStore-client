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
// import { Link } from "react-router-dom";

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

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
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
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    console.log("1");
    // e.preventDefault();
    logout(dispatch);
  };
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <form>
            <SearchContainer>
              <Input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
              />
              <Search style={{ color: "gray", fontSize: 16 }} />
              <Link to={`products/search_${search}`}>
                <button></button>
              </Link>
            </SearchContainer>
          </form> */}
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
                {/* <Badge
                overlap="rectangular"
                badgeContent={products?.products?.length}
                color="primary" */}
                {/* > */}
                <ShoppingCartOutlined />
                {/* </Badge> */}
              </MenuItem>
            </Link>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
