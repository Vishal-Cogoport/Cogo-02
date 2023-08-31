import React from 'react';
import Link from 'next/link';

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/Vishal-Cogoport/${name}/contents` // Corrected template literal usage
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === 'dir');
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link> {/* Corrected template literal usage */}
          </li>
        ))}
      </ul>
    </>
  ); 
};

export default RepoDirs;
