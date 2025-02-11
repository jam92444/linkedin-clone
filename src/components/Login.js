import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signInApi } from "../actions";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = (props) => {
  // const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = async () => {
    try {
      await props.signIn(); // Await the sign-in to ensure it completes
    } catch (error) {
      console.error("Sign-in error:", error); // Log any errors
    }
  };

  // Effect to navigate when user state changes
  // useEffect(() => {
  //   if (props.user) {
  //     navigate('/home'); // Navigate to home if user is set
  //   }
  // }, [props.user, navigate]); // Run this effect when props.user changes

  // Log the current user state
  console.log("Current user:", props.user);

  return (
    <Container>
      {props.user ? (
        <Navigate to="/home" replace /> // Redirect if user is authenticated
      ) : (
     <>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="Login Logo" />
        </a>
        <Link to="/home">Go to Home</Link>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="Hero" />
        </Hero>
        <Form>
          <Google onClick={handleSignIn}>
            <img src="/images/google.svg" alt="Google Icon" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
     </>)}
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    min-height: 0;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    width: 700px;
    height: 670px;
    position: absolute;
    top: 50px;
    right: -200px;
    @media (max-width: 768px) {
      top: 230px;
      width: auto;
      height: auto;
      position: static;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  background-color: #fff;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0);
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  transition-duration: 167ms;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
