import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
// import TopButton from "/Cart";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const TopButton = styled.button`
  padding: 10px;
  margin: 30px 20px 10px 20px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState("newest");
  return (
    <Container>
      <Navbar />
      <Link to={`/`}>
        <TopButton>ВЕРНУТЬСЯ В КАТАЛОГ</TopButton>
      </Link>
      <FilterContainer>
        <Filter>
          <FilterText>Сортировать:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Новые</Option>
            <Option value="asc">Цена (по возрастанию)</Option>
            <Option value="desc">Цена (по убыванию)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;
