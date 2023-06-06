import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";

import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  // background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  // text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 100%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #a0522d;
  color: white;
  cursor: pointer;
  // display: block;
`;

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();

  // const changeEmailHandler = () => {
  //   setEmail =
  // };

  async function submit(e) {
    console.log(username, password, email);
    e.preventDefault();
    try {
      await publicRequest.post("auth/register", {
        username: username,
        email: email,
        password: password,
      });
      window.confirm("Аккаунт создан!");
      login(dispatch, { username, password });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>СОЗДАНИЕ АККАУНТА</Title>
        <Form>
          {/* <Input placeholder="name" />
          <Input placeholder="last name" /> */}
          <Input
            placeholder="имя пользователя"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="пароль"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Input placeholder="confirm password" /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={submit}>СОЗДАТЬ АККАУНТ</Button>
        </Form>
        <Link1>
          <Link to={`/login`}>Уже есть аккаунт?</Link>
        </Link1>
      </Wrapper>
    </Container>
  );
};

export default Register;
