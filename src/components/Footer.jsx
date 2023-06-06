import { MailOutline, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";
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

const Center = styled.div`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

const Title = styled.h3`
  margin-bottom: 30px;
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
      </Left>
      <Center></Center>
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
      </Right>
    </Container>
  );
};

export default Footer;
