import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 2rem;
`;
const BottomSection = styled.p`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();
  }

  return (
    <Wrapper>
      <h1>Sign up</h1>
      <FormContainer onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">sign up</button>
      </FormContainer>
      <Link href="/login">
        <BottomSection>Already have an account?</BottomSection>
      </Link>
    </Wrapper>
  );
}

export default Signup;
