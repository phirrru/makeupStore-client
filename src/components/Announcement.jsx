import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import axios from "axios";

const Container = styled.div`
  height: 30px;
  background-color: #a0522d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const AllCats = styled.h4`
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin: 0px 10px;
`;

const Announcement = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await publicRequest.get("/cat");
        setCategories(res.data);
      } catch {}
    };
    getCats();
  }, []);
  console.log(categories);
  return (
    <Container>
      <AllCats>Все категории:</AllCats>
      {categories?.map((item) => (
        // <CategoryItem item={item} key={item.id} />
        <Link to={`products/${item.name}`}>
          <AllCats>{item.translation} </AllCats>
        </Link>
      ))}
    </Container>
  );
};

export default Announcement;
