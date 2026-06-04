export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
         <img src="/CoffeeFirstLogo.png" alt="Coffee First Logo" />
      </div>

      <ul>
        <li><a href="#video">Promo</a></li>
        <li><a href="#about">About</a></li>       
        <li><a href="#podcast">Podcast</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}