import React from 'react';

function ScholarshipDetail({ match }) {
  const { id } = match.params;

  // Fetch scholarship details based on ID (replace with real data fetching)
  const scholarship = {
    title: `Scholarship ${id}`,
    description: `Detailed description of Scholarship ${id}.`,
    criteria: `Eligibility criteria for Scholarship ${id}.`,
    link: "https://example.com/apply"
  };

  return (
    <div className="scholarship-detail-container mt-8 px-4">
      <h1 className="text-3xl font-bold">{scholarship.title}</h1>
      <p className="mt-4 text-lg">{scholarship.description}</p>
      <ul className="mt-4 list-disc list-inside">
        <li>{scholarship.criteria}</li>
      </ul>
      <a href={scholarship.link} className="mt-8 inline-block bg-blue-500 text-white p-2 rounded">Apply Now</a>
    </div>
  );
}

export default ScholarshipDetail;