import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
  width: 355px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

const ImageDark = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: black;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  opacity: 0.9;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <ImageDark>
        <Link to={`products/${item.name}`}>
          <Image src={item.img} />
          <Info>
            <Title>{item.translation}</Title>
            <Button>ПЕРЕЙТИ К ТОВАРАМ</Button>
          </Info>
        </Link>
      </ImageDark>
    </Container>
  );
};

export default CategoryItem;
