import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search } from "@material-ui/icons";

const Background = styled.div`
  background-color: black;
`;

const SearchContainer = styled.div`
  width: 200px;
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-left: 30px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Home = () => {
  const [search, setSearch] = useState();
  return (
    <div>
      {/* <Background> */}
      <Navbar />
      <form>
        <SearchContainer>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск"
          />
          {/* <button onClick={handleClick}>Искать</button> */}
          {/* <button> */}
          <Link to={`products/search_${search}`}>
            <button>
              <Search style={{ color: "gray", fontSize: 16 }} />
            </button>
          </Link>
          {/* </button> */}
        </SearchContainer>
      </form>
      <Categories></Categories>
      <Announcement />
      <Products />
      <Footer />
      {/* </Background> */}
    </div>
  );
};

export default Home;
