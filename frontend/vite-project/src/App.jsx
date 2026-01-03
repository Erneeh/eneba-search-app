import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Grid from "./components/Grid";
import Container from "./components/Container";

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState(
    new URLSearchParams(window.location.search).get("search") || ""
  );

  useEffect(() => {
    fetch(`${API_URL}/list?search=${search}`)
      .then(res => res.json())
      .then(data => setGames(data));
  }, [search]);

const API_URL = import.meta.env.VITE_API_URL;


  return (
   
    <div className="min-h-screen bg-[#4618ac] text-[1.6rem]">
      <Header search={search} setSearch={setSearch}></Header>
      <Nav/>
      <Container count={games.length}>
        <Grid games={games} />
      </Container>
    </div>
  );
}

export default App;