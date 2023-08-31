import React from 'react'
import Link from 'next/link';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
const Repopage = ({params:{name}}) => {
  return (
    <div className="card">
        <Link href='/code/repos' className='btn btn-back'>
            Back to Repositories
        </Link>
    <Repo name={name} />
    <RepoDirs name={name} />
    </div>
  );
};

export default Repopage