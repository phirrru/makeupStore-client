import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  // const [categories, setCategories] = useState([]);
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <Left>
        <Logo>CHOU.</Logo>
        <Desc>
          Chou - это интернет-магазин высококачественной косметики
          премиум-класса с широким ассортиментом товаров от ведущих мировых
          брендов. Наша продукция доступна для разных возрастных групп и типов
          кожи, и гарантируется качество подлинных продуктов от официальных
          дистрибьюторов.
        </Desc>
        {/* <SocialContainer>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer> */}
      </Left>
      <Center>
        {/* <Title>Полезные ссылки</Title>
        <List>
          <Link to="/">
            <ListItem>Каталог</ListItem>
          </Link>{" "}
          <br />
          <br />
          <Link to="/cart">
            <ListItem>Корзина</ListItem>
          </Link>
          {user && (
            <Link to="/register">
              <ListItem>Регистрация</ListItem>
            </Link>
          )}
          {user && (
            <Link to="/login">
              <ListItem>Авторизация</ListItem>
            </Link>
          )}
        </List> */}
      </Center>
      <Right>
        <Title>Контакты</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> РТУ МИРЭА
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@gmail.com
        </ContactItem>
        {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
      </Right>
    </Container>
  );
};

export default Footer;
