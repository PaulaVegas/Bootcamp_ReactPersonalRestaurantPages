import BurguerIcon from "../assets/icons/burguer.png"

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
          <h1 className="hero-title">
    <img src={BurguerIcon} className="icon" alt="Burger Icon" />
    Code & Bites
  </h1>
      <p className="hero-subtitle">Where Code Meets Culinary Delight</p>
      </header>

      <section className="features">
        <h2>Our Specialties</h2>
        <ul>
          <li>Elven Vegan Burgers</li>
          <li>Vulcan Vegan Wraps</li>
          <li>Cyborg Cheesesteaks</li>
          <li>JavaScript Lattes</li>
        </ul>
      </section>
    </div>
  )
}
export default Home