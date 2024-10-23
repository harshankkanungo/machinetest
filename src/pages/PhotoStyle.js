import React from "react";
import "./PhotoStyle.css"; 

const PhotoStyle = () => {
  return (
    <div className="photo-style-page">
      <h1 className="photo-style-heading">Make Your Photo Style</h1>
      <p className="photo-style-subtext">
        Explore our unique features to enhance your photos and make them stand
        out.
      </p>
      <div className="photo-card-container">
        <div className="photo-card">
          <img
            src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg"
            alt="Photo Editing"
            className="photo-img"
          />
          <h3>Photo Editing</h3>
          <p>
            Enhance your photos with our easy-to-use editing tools. Adjust
            brightness, contrast, and more.
          </p>
        </div>
        <div className="photo-card">
          <img
            src="https://media.istockphoto.com/id/120903127/photo/business-team.jpg?s=612x612&w=is&k=20&c=XbgD6sgzZ215FiiFoMukpwyEWJnAolEJ66UeNB8nJnI="
            alt="Filters"
            className="photo-img"
          />
          <h3>Creative Filters</h3>
          <p>
            Apply unique filters to your photos to create stunning effects and
            match your style.
          </p>
        </div>
        <div className="photo-card">
          <img
            src="https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg?semt=ais_hybrid"
            alt="Collage"
            className="photo-img"
          />
          <h3>Collage Maker</h3>
          <p>
            Combine multiple images into beautiful collages and tell a story
            with your photos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoStyle;
