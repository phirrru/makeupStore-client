import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { publicRequest, userRequest } from "../requestMethods";

import { useState, useEffect } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  background: #f2f2f2;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const ButtonDelete = styled.button`
  width: 40%;
  padding: 10px;
  margin: 20px 0px 10px 0px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  // const products = [];
  // const cart = useSelector((state) => state.cart);
  // const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  // const getProducts = async () => {
  //   try {
  //     const res = await userRequest.get("cart/findCart/" + user._id);
  //     console.log(res.data.products);
  //     products = res.data.products;
  //   } catch {}
  // };
  // getProducts();

  const [total, setTotal] = useState();
  // const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);

  // const actualProducts = [];
  useEffect(() => {
    const getProducts = async () => {
      try {
        // const res = await userRequest.get("cart/findCart/" + user._id);
        const res2 = await userRequest.get("cart/findCartProducts/" + user._id);
        // setProducts(res.data);
        setProducts2(res2.data);
        // setTotal();
        // console.log(res.data);
        console.log(res2.data);
      } catch {}
    };
    getProducts();
    // console.log(products?.products);
    console.log(products2?.products);

    const getTotal = async () => {
      try {
        const res = await userRequest.get("cart/findCart/" + user._id);
        setTotal(res.data.total);
      } catch {}
    };
    getTotal();
  }, []);

  const handleClick = (deleteProductId) => {
    // deleteUserId.preventDefault();
    const deleteProduct = async () => {
      try {
        console.log(deleteProductId);
        const res = await userRequest.delete(
          "cart/delete_product/" + deleteProductId + "/" + user._id
        );
      } catch (err) {
        console.log(err);
      }
    };
    deleteProduct();

    window.location.reload();
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>КОРЗИНА</Title>
        <Top>
          <Link to={`/`}>
            <TopButton>ВЕРНУТЬСЯ В КАТАЛОГ</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {products2?.products?.map(
              (product) =>
                product.productId && (
                  <Product>
                    <ProductDetail>
                      <Image src={product?.productId?.img} />
                      <Details>
                        <ProductName>
                          <b>Товар:</b> {product?.productId?.title}
                        </ProductName>
                        <ProductName>
                          <b>Описание:</b> {product?.productId?.desc}
                        </ProductName>
                        {/* <ProductId>
                      <b>ID:</b> {product.productId.productId}
                    </ProductId> */}
                        <ProductSize>
                          {/* <b>Оттенок:</b> {product.productId.color} */}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        {/* <Add /> */}
                        <ProductAmount>{product?.quantity} шт</ProductAmount>
                        {/* <Remove /> */}
                      </ProductAmountContainer>
                      <ProductPrice>
                        {product?.productId?.price * product.quantity + "р"}
                      </ProductPrice>
                      <ButtonDelete
                        id="delete"
                        type="submit"
                        onClick={() => {
                          handleClick(product?._id);
                        }}
                      >
                        Удалить
                      </ButtonDelete>
                    </PriceDetail>
                  </Product>
                )
            )}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>О ЗАКАЗЕ</SummaryTitle>
            {/* <SummaryItem>
              <SummaryItemText>Доставка</SummaryItemText>
              <SummaryItemPrice>400 руб</SummaryItemPrice>
            </SummaryItem> */}
            <SummaryItem type="total">
              <SummaryItemText>Сумма заказа</SummaryItemText>
              <SummaryItemPrice>{total}</SummaryItemPrice>
            </SummaryItem>
            <Button>ОФОРМИТЬ ЗАКАЗ</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
