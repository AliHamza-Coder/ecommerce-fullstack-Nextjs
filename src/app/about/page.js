import "../styles/AboutPage.css";
const About = () => {
  return (
    <>
      <div class="about-hero">
        <div class="about-hero-content">
            <h1>About Cozy Home Furniture</h1>
            <p>Crafting comfort and style for your living spaces since 1995</p>
        </div>
    </div>
    <main class="container">
        <section class="about-section">
            <h2>Our Story</h2>
            <p>Cozy Home Furniture began with a simple idea: everyone deserves a comfortable and stylish living space. Founded in 1995 by John and Jane Doe, our company has grown from a small workshop to a leading furniture retailer, all while maintaining our commitment to quality craftsmanship and customer satisfaction.</p>
            <p>Over the years, we've expanded our collection to include a wide range of styles, from classic to contemporary, ensuring that every customer can find the perfect pieces to make their house feel like home.</p>
        </section>

        <section class="about-section">
            <h2>Our Values</h2>
            <div class="values">
                <div class="value-item">
                    <img src="/placeholder.svg?height=80&width=80" alt="Quality icon"/>
                    <h3>Quality</h3>
                    <p>We use only the finest materials and employ skilled craftsmen to ensure our furniture stands the test of time.</p>
                </div>
                <div class="value-item">
                    <img src="/placeholder.svg?height=80&width=80" alt="Sustainability icon"/>
                    <h3>Sustainability</h3>
                    <p>We're committed to eco-friendly practices, using responsibly sourced materials and minimizing our environmental impact.</p>
                </div>
                <div class="value-item">
                    <img src="/placeholder.svg?height=80&width=80" alt="Customer Service icon"/>
                    <h3>Customer Service</h3>
                    <p>Our dedicated team is always ready to assist you in finding the perfect furniture for your home.</p>
                </div>
            </div>
        </section>

        <section class="about-section">
            <h2>Our Commitment</h2>
            <p>At Cozy Home Furniture, we're not just selling furniture; we're helping you create the home of your dreams. We understand that furniture is an investment, and we're committed to providing you with pieces that you'll love for years to come.</p>
            <p>From our showroom to your living room, we're with you every step of the way. Our expert staff is always available to offer advice on design, functionality, and care for your furniture.</p>
        </section>
    </main>/
    </>
  )
}

export default About
