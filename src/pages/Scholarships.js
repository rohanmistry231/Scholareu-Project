import React, { useEffect, useState } from "react";
import { client } from "../sanityClient";
import Modal from "react-modal";
import "./Scholarships.css"; // Import the CSS file

Modal.setAppElement("#root"); // Ensure accessibility

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Add search term state

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const data = await client.fetch(`*[_type == "scholarship"]{
          title,
          description,
          link,
          criteria,
          funding,
          university,
          level,
          subjects,
          students,
          country,
          deadline
        }`);
        setScholarships(data);
        setFilteredScholarships(data); // Initialize filtered scholarships
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  // Update filtered scholarships when search term changes
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredScholarships(scholarships);
    } else {
      setFilteredScholarships(
        scholarships.filter(
          (scholarship) =>
            scholarship.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            scholarship.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, scholarships]);

  const openModal = (scholarship) => {
    setSelectedScholarship(scholarship);
  };

  const closeModal = () => {
    setSelectedScholarship(null);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p className="loading-text">Loading scholarships...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          placeholder="Search scholarships..."
        />
      </div>
      <div className="scholarships-container">
        {filteredScholarships.length > 0 ? (
          filteredScholarships.map((scholarship, index) => (
            <div key={index} className="scholarship-card">
              <h2 className="scholarship-card-title">{scholarship.title}</h2>
              <div className="scholarship-card-tags">
                {/* Render tags dynamically if needed */}
                <span className="scholarship-tag">{scholarship.funding}</span>
                <span className="scholarship-tag">
                  {scholarship.university}
                </span>
                <span className="scholarship-tag">{scholarship.level}</span>
                <span className="scholarship-tag">{scholarship.subjects}</span>
                <span className="scholarship-tag">{scholarship.students}</span>
                <span className="scholarship-tag">{scholarship.country}</span>
                <span className="scholarship-tag">{scholarship.deadline}</span>
              </div>
              <button
                onClick={() => openModal(scholarship)}
                className="scholarship-details-button"
              >
                More Detailsf
              </button>
            </div>
          ))
        ) : (
          <p>No scholarships found.</p>
        )}

        {/* Modal */}
        {selectedScholarship && (
          <Modal
            isOpen={!!selectedScholarship}
            onRequestClose={closeModal}
            contentLabel="Scholarship Details"
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <h2 className="modal-title">{selectedScholarship.title}</h2>
            <p className="modal-description">
              {selectedScholarship.description}
            </p>
            <p className="modal-detail">
              <strong>Criteria:</strong> {selectedScholarship.criteria}
            </p>
            <p className="modal-detail">
              <strong>Funding:</strong> {selectedScholarship.funding}
            </p>
            <p className="modal-detail">
              <strong>University:</strong> {selectedScholarship.university}
            </p>
            <p className="modal-detail">
              <strong>Level:</strong> {selectedScholarship.level}
            </p>
            <p className="modal-detail">
              <strong>Subjects:</strong> {selectedScholarship.subjects}
            </p>
            <p className="modal-detail">
              <strong>Students:</strong> {selectedScholarship.students}
            </p>
            <p className="modal-detail">
              <strong>Country:</strong> {selectedScholarship.country}
            </p>
            <p className="modal-detail">
              <strong>Deadline:</strong> {selectedScholarship.deadline}
            </p>
            <a
              href={selectedScholarship.link}
              className="modal-apply-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Here
            </a>
            <button onClick={closeModal} className="modal-close-button">
              Close
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Scholarships;
