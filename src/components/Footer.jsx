export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay">

        <p>© 2026 Coffee First. All rights reserved.</p>

        <div className="social-icons">
          <a href="https://www.facebook.com/coffeefirstcalbayog" target="_blank" rel="noreferrer">
            <img src="/src/assets/FacebookLogo.png" alt="Facebook" />
          </a>

          <a href="https://www.instagram.com/coffeefirst_cyp/" target="_blank" rel="noreferrer">
            <img src="/src/assets/InstagramLogo.png" alt="Instagram" />
          </a>

          <a href="mailto:calbayog.coffee.first@gmail.com">
            <img src="/src/assets/GmailLogo.png" alt="Gmail" />
          </a>
        </div>

      </div>
    </footer>
  );
}