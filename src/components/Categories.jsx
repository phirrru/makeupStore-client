import styled from "styled-components";
// import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { publicRequest } from "../requestMethods";
import axios from "axios";

import { useState, useEffect } from "react";

const Container = styled.div`
  flex-flow: row wrap;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-content: space-between;
`;

const Categories = () => {
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
    // <div>
    //   <Popular>Популярные категории: </Popular>
    <Container>
      {categories?.slice(0, 4).map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    // </div>
  );
};

export default Categories;
