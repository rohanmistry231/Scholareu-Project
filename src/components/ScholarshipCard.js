import React from 'react';
import { Link } from 'react-router-dom';

function ScholarshipCard({ id, title, description, criteria }) {
  return (
    <div className="bg-white p-4 m-4 rounded shadow-md w-full md:w-1/3">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-2 text-gray-800"><strong>Criteria:</strong> {criteria}</p>
      <Link to={`/scholarships/${id}`} className="mt-4 inline-block bg-blue-500 text-white p-2 rounded">View Details</Link>
    </div>
  );
}

export default ScholarshipCard;
