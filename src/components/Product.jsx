import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 110%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div`
  flex: 1;
  margin: 2% 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const H4 = styled.h4`
  margin: 0px;
  padding: 0px;
  color: black;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Link to={`/product/${item._id}`}>
        <Info></Info>
        <TextContainer>
          <H4>{item.title}</H4>
          <H4>{item.price} ₽</H4>
        </TextContainer>
      </Link>
    </Container>
  );
};

export default Product;
