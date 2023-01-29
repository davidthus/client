import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const BottomSection = styled.p`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.accessToken) {
      alert("login successful");
    } else {
      alert("login failed");
    }
  }

  return (
    <Wrapper>
      <h1>Login</h1>
      <FormContainer onSubmit={loginUser}>
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
        <button type="submit">login</button>
      </FormContainer>
      <Link href="/signup">
        <BottomSection>Don&#39;t have an account?</BottomSection>
      </Link>
    </Wrapper>
  );
}

export default Login;
