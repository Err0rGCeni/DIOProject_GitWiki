import { useState } from "react";
import gitLogo from "../assets/github.svg";
import { api } from "../services/api";
import { Container } from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
        }

        setCurrentRepo("");
      } else {
        alert("Repositório Não Encontrado!");
      }
    } catch (error) {
      console.error("Erro ao buscar repositório:", error);
      alert("Erro ao buscar repositório! Tente novamente.");
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prevRepos) => prevRepos.filter((repo) => repo.id !== id));
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub Logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo
          key={repo.id}
          repo={repo}
          handleRemoveRepo={handleRemoveRepo}
        />
      ))}
    </Container>
  );
}

export default App;
