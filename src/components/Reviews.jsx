export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <h2>What Our Customers Say</h2>

      <div className="reviews-container">

        <div className="review-card">
          <p className="review-text">
            “Best coffee in Calbayog! The atmosphere is so relaxing.”
          </p>
          <p className="review-name">— Maria S.</p>
          <div className="stars">★★★★★</div>
        </div>

        <div className="review-card">
          <p className="review-text">
            “Their coffee tastes fresh and consistent every time.”
          </p>
          <p className="review-name">— Trexie Q.</p>
          <div className="stars">★★★★★</div>
        </div>

        <div className="review-card">
          <p className="review-text">
            “Perfect place to study, chill, or hang out with friends.”
          </p>
          <p className="review-name">— Nicole E.</p>
          <div className="stars">★★★★★</div>
        </div>

      </div>
    </section>
  );
}