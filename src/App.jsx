import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://github.com/Akuu426?tab=repositories"
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);
  return (
    <>
      <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href="https://github.com/Akuu426?tab=repositories">{repo.name}</a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default App
