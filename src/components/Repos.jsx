import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Repos = ({ repos, reposPerPage }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  if (loading) {
    setLoading(true);
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <h1 className="title mt-14">My GitHub Repositories</h1>
      <ul>
        {repos
          .filter((item) => item?.name.includes(search))
          .map((repos) => (
            <li key={repos.id}>
              <Link to={`/repo/${repos.id}`}>{repos.name}</Link>
              <p>{repos.description}</p>
            </li>
          ))}
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </ul>
    </>
  );
};

export default Repos;
