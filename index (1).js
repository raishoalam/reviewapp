// src/components/Reviews.js
import {useState, useEffect} from 'react'
import axios from 'axios'

import './index.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          'https://admin.tomedes.com/api/v1/get-reviews?page=1',
        )
        setReviews(response.data.data) // Assuming reviews are under 'data' key
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    fetchReviews()
  }, [])

  return (
    <div className="review-container">
      <h2 className="review-heading">What Our Customers Say</h2>
      <ul>
        <div className="card-wrappers">
          {reviews.map((review, index) => (
            <li key={review.id}>
              {' '}
              {/* Assuming 'id' is a unique identifier */}
              <div className="review-card">
                <div className="image">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/7350/7350737.png"
                    alt="text"
                    className="Img"
                  />
                </div>
                <strong>Reviews:</strong>{' '}
                <span className="review-para">{review.Reviews}</span>
                <br />
                <strong>Name:</strong>
                <span className="review-para">{review.Name}</span>
                <br />
                <strong>Platform:</strong>
                <span className="review-para">{review.Platform}</span>
                <br />
                <strong>Rating:</strong>
                <span className="review-para">{review.rating}</span>
                <br />
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Reviews
