import React from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"; 

async function fetchRepos() {
  const response = await fetch(`https://api.github.com/users/Vishal-Cogoport/repos`); // corrected the URL
  await new Promise((resolve) => setTimeout(resolve,1000));
  const repos = await response.json();
  return repos;
}

const Repopages = async () => {
  try {
    const repos = await fetchRepos();
    console.log(repos);
    return (
      <div className='repos-container'>
        <h2>Repositories</h2>
        <ul className='repo-list'>
          {repos.map((repo)=>(
          <li key={repo.id}>
            <Link href={'/code/repos/${repo.name}'}>
              <h3>{repo.name}</h3>
              <p>{repo.decsription}</p>
             <div className='repo-details'>
              <span>
                <FaStar /> {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch />{repo.forks_count}
              </span>
              <span>
                <FaEye /> {repo.watchers_count}
              </span>
             </div>
              </Link></li>
          ))}
        </ul>
        
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div>
        Error fetching repositories.
      </div>
    );
  }
};

export default Repopages;
