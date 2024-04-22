import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RepoDetails() {
  const { id } = useParams();
  const [repository, setRepository] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repositories/${id}`)
      .then((response) => {
        setRepository(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  if (error) {
    return <div>Error fetching repository details: {error.message}</div>;
  }

  if (!repository) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
      <p>Stars: {repository.stargazers_count}</p>
      <p>Forks: {repository.forks_count}</p>
      <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
        Visit Repository on GitHub
      </a>
    </div>
  );
}

export default RepoDetails;