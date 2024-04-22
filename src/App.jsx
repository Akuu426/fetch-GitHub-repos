import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Repos from "./components/Repos";
import RepoDetails from "./components/RepoDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
// import NavBar from "./components/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(3);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Akuu426/repos"
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);
  console.log(repos);

  // const GITHUB_TOKEN =
  //   "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";

  // const axiosInstance = axios.create({
  //   baseURL: "https://api.github.com",
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`,
  //   },
  // });

  const indexOfLastRepos = currentPage * reposPerPage;
  const indexOfFirstRepos = indexOfLastRepos - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepos, indexOfLastRepos);

  const totalPages = Math.ceil(repos.length / reposPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Repos repos={currentRepos} />}></Route>
            <Route path="/repo/:id" element={<RepoDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>

      <div>
        <button onClick={handlePreviousPage} disabled={currentPage <= 1}>
          Previous
        </button>
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button onClick={handleNextPage} disabled={currentPage >= totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;
