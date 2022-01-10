import "./styles.css";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      setUsername("Mohan");
    }, 1000);
  });
  const handleClick = () => {
    setCount(count - 1);
    setUsername("Lishventh");
  };
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Timer {count} times!</h1>
      <Button onClick={handleClick}>Change</Button>
      <input type="text" onChange={handleChange} />
      <h1>{username}</h1>
    </div>
  );
}
const Button = styled.button`
  padding: 0.6rem 2.5rem;
  border: 1px solid black;
  background: green;
  color: white;
  font-weight: 800;
  border-radius: 15px;
  &:hover {
    background: gray;
    cursor: pointer;
  }
`;
