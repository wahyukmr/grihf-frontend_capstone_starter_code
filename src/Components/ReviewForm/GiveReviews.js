// import Popup from "reactjs-popup";
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
// import './GiveReviews.css';

// function GiveReviews({onHandleReview}) {
//   const [showForm, setShowForm] = useState(false);
//   const [showWarning, setShowWarning] = useState(false);
//   const [formData, setFormData] = useState({ name: '', review: '', rating: 0 });

//   const handleButtonClick = () => {
//     setShowForm(true);
//   };

//   const handleChange = (e) => {
//     // Perbarui formData sesuai dengan perubahan input
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     onHandleReview(formData)

//     // Perbarui formData menjadi nilai awal setelah submit
//     setFormData({ name: '', review: '', rating: 0 });
//     setShowForm(false)

//     // if (formData.name && formData.review && formData.rating > 0) {
//     if (formData.name && formData.review) {
//       setShowWarning(false);
//     } else {
//       setShowWarning(true);
//     }
//   };

//   return (
//     <div>
//       <Button variant="primary" size='sm' onClick={handleButtonClick} disabled >Click Here</Button>

//       <Popup
//         style={{ backgroundColor: "#FFFFFF" }}
//         modal
//         open={showForm}
//         onClose={() => setShowForm(false)}
//       >
//         <form onSubmit={handleSubmit}>
//           <h2 style={{textAlign: "center", marginBottom: "20px"}}>Give Your Review</h2>
//           {showWarning && <p className="warning">Please fill out all fields.</p>}
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
//           </div>
//           <div>
//             <label htmlFor="review">Review:</label>
//             <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
//           </div>
//           {/* Tambahkan input untuk rating */}
//           {/* <div>
//             <label htmlFor="rating">Rating:</label>
//             <input type="number" maxLength="5" minLength="1" id="rating" name="rating" value={formData.rating} onChange={handleChange} />
//           </div> */}
//           <Button style={{marginTop: "20px"}} variant="primary" type="submit">Submit</Button>
//         </form>
//       </Popup>
//     </div>
//   );
// }

// export default GiveReviews;

import Popup from "reactjs-popup";
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Star from './Star'; // Import komponen bintang
import './GiveReviews.css';

function ReviewForm() {
  const [showForm, setShowForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({ name: '', review: '', rating: 0 });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({ name: '', review: '', rating: 0 });

    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }

    setShowForm(false)
  };

  const handleStarClick = (starIndex) => {
    setFormData({ ...formData, rating: starIndex + 1 });
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          selected={i < formData.rating}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <Button variant="primary" disabled size='sm' onClick={handleButtonClick}>Click Here</Button>

      <Popup
        style={{ backgroundColor: "#FFFFFF" }}
        modal
        open={showForm}
        onClose={() => setShowForm(false)}
      >
        <form onSubmit={handleSubmit}>
          <h2>Give Your Review</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Rating:</label>
            <div className="rating">
              {renderStars()}
            </div>
          </div>
          <Button variant="primary" type="submit">Submit</Button>
        </form>
      </Popup>
    </div>
  );
}

export default ReviewForm;