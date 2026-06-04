import img1 from "../assets/CoffeeFirstAboutImage1.jpg";
import img2 from "../assets/CoffeeFirstAboutImage2.jpg";
import img3 from "../assets/CoffeeFirstAboutImage3.jpg";
import img4 from "../assets/CoffeeFirstAboutImage4.jpg";
import img5 from "../assets/CoffeeFirstAboutImage5.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-text">

          <h2>Why Coffee First?</h2>

          <p>
            At Coffee First, we believe coffee is more than just a drink,
            it’s a daily ritual that brings people together. We are committed
            to serving high-quality coffee made from carefully selected beans,
            brewed with care, and served in a welcoming space where everyone feels
            at home. Our goal is to create moments of comfort and connection,
            whether you’re starting your day, taking a break, or sharing time with friends.
            Every cup is crafted with passion to ensure a rich and satisfying experience
            that keeps you coming back.
          </p>

          {/* CTA */}
          <div className="about-cta">
            <p className="about-cta-text">
              Want to experience the quality and care behind every cup?
            </p>

            <a
              href="https://www.facebook.com/coffeefirstcalbayog"
              target="_blank"
              rel="noreferrer"
              className="about-btn"
            >
              Shop Now
            </a>
          </div>

        </div>

        {/* RIGHT SIDE (IMAGES STAYS SAME) */}
        <div className="about-images">
          <img src={img1} className="img img1" />
          <img src={img2} className="img img2" />
          <img src={img3} className="img img3" />
          <img src={img4} className="img img4" />
          <img src={img5} className="img img5" />
        </div>

      </div>
    </section>
  );
}