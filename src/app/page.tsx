import Image from "next/image";
import Link from "next/link";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiMenu,
  FiStar,
  FiInstagram,
FiFacebook,
FiMusic,
FiMessageCircle,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Nail Artistry",
    description:
      "Creative nail designs, elegant finishes and beautiful details tailored to your personal style.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Professional Makeup",
    description:
      "Beautiful makeup looks for everyday elegance, special occasions and unforgettable celebrations.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Wig Installations",
    description:
      "Polished installations and styling designed to complement your look and boost your confidence.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Eyelash Extensions",
    description:
      "Enhance your eyes with lash looks ranging from subtle definition to glamorous finishes.",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "Permanent Eyebrows",
    description:
      "Beautifully defined brows designed to complement your features and preferred look.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
  },
];

const whatsappLink =
  "https://wa.me/263775700720?text=" +
  encodeURIComponent(
    "Hello Rue's Glam! I would like to enquire about your beauty services and make an appointment.",
  );

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="#home" className="brand" aria-label="Rue's Glam home">
            <span className="brand-mark">R.</span>
            <span className="brand-copy">
              <span className="brand-name">RUE&apos;S GLAM</span>
              <span className="brand-caption">BEAUTY · ELEGANCE · CONFIDENCE</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="#home">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#gallery">Gallery</Link>
          </nav>

          <a className="header-book" href={whatsappLink} target="_blank" rel="noreferrer">
            Book an Appointment <FiArrowRight />
          </a>

          <a
  className="mobile-menu"
  href="#services"
  aria-label="View services"
>
  <FiMenu size={24} />
</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <div className="container hero-content">
          <span className="eyebrow">
            <FiStar /> YOUR BEAUTY DESTINATION
          </span>

          <h1>
            Your Beauty.
            <br />
            Your Confidence.
            <br />
            <span>Your Glam.</span>
          </h1>

          <p className="hero-description">
            Discover the art of feeling beautiful. From flawless makeup to
            exquisite nail artistry, every detail is designed to bring out
            your most confident self.
          </p>

          <div className="hero-actions">
            <a href="#services" className="primary-button">
              Explore Our Services <FiArrowRight />
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="secondary-button">
              Book an Appointment
            </a>
          </div>

          <div className="hero-bottom">
            <span>EVERYDAY GLAM</span>
            <span className="hero-bottom-line" />
            <span>BRIDAL BEAUTY</span>
            <span className="hero-bottom-line" />
            <span>SPECIAL OCCASIONS</span>
          </div>
        </div>

        <a className="scroll-cue" href="#services" aria-label="Scroll to services">
          <FiArrowDownRight />
        </a>
      </section>

      <section className="services-section section-padding" id="services">
        <div className="container">
          <div className="services-heading">
            <div>
              <span className="eyebrow">THE RUE&apos;S GLAM EXPERIENCE</span>
              <h2 className="section-heading">
                A little luxury.
                <br />
                <span className="gold-text">A lot of confidence.</span>
              </h2>
            </div>

            <p className="section-description">
              Your beauty deserves thoughtful care and a personal touch.
              Explore our services, created to help you look and feel your best.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-image-wrap">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="service-image"
                  />
                  <span className="service-number">{service.number}</span>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="service-link">
                    Enquire Now <FiArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-preview section-padding" id="about">
        <div className="container about-preview-inner">
          <span className="eyebrow">BEAUTY THAT FEELS LIKE YOU</span>
          <h2 className="section-heading">
            More than a look.
            <br />
            <span className="gold-text">It&apos;s how you feel.</span>
          </h2>
          <p className="section-description">
            Rue&apos;s Glam is dedicated to enhancing your natural beauty
            through professional, creative services for everyday moments,
            special occasions and bridal celebrations.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="primary-button">
            Let&apos;s Talk Beauty <FiArrowRight />
          </a>
        </div>
      </section>

      <section className="gallery-placeholder section-padding" id="gallery">
        <div className="container gallery-placeholder-inner">
          <span className="eyebrow">YOUR NEXT LOOK STARTS HERE</span>
          <h2 className="section-heading">Beauty in every detail.</h2>
          <p className="section-description">
            We&apos;re preparing a showcase of Rue&apos;s Glam creations.
            Contact us to enquire about your next beauty appointment.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="secondary-button">
            Enquire on WhatsApp <FiArrowRight />
          </a>
        </div>
      </section>

     <footer className="site-footer">
  <div className="container footer-inner">
    <div className="footer-main">
      <div className="footer-brand-section">
        <Link href="#home" className="footer-brand">
          RUE&apos;S <span>GLAM</span>
        </Link>

        <p>
          Enhancing your natural beauty with creativity,
          elegance and professional care.
        </p>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FiFacebook />
          </a>

          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <FiMusic />
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FiMessageCircle />
          </a>
        </div>
      </div>

      <div className="footer-links">
        <h3>Explore</h3>
        <Link href="#home">Home</Link>
        <Link href="#services">Our Services</Link>
        <Link href="#about">About Us</Link>
        <Link href="#gallery">Gallery</Link>
      </div>

      <div className="footer-contact">
        <h3>Get in Touch</h3>
        <p>Ready for your beauty transformation?</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="footer-booking"
        >
          Book an Appointment <FiArrowRight />
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <span>
        © {new Date().getFullYear()} Rue&apos;s Glam. All rights reserved.
      </span>

      <span className="footer-credit">
        Website crafted by <strong>Silent Programs</strong>
      </span>
    </div>
  </div>
</footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="floating-book"
        aria-label="Book an appointment on WhatsApp"
      >
        Book on WhatsApp <FiArrowRight />
      </a>
    </main>
  );
}