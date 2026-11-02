
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
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

const whatsappLink =
  "https://wa.me/263775700720?text=" +
  encodeURIComponent(
    "Hello Rue's Glam! I would like to enquire about your beauty services and make an appointment."
  );

const serviceCategories = [
  {
    number: "01",
    title: "Nail Artistry",
    subtitle: "The art of beautiful details",
    description:
      "From timeless elegance to expressive designs, discover nail treatments that complement your individual style.",
    items: [
      {
        title: "Nail Extensions",
        description:
          "Beautifully shaped extensions for a polished, sophisticated finish.",
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
      },
      {
        title: "Gel Polish",
        description:
          "A sleek, glossy finish for effortlessly elegant nails.",
        image:
          "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85",
      },
      {
        title: "Creative Nail Art",
        description:
          "Express your personality through creative colours and nail designs.",
        image:
          "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
  {
    number: "02",
    title: "Professional Makeup",
    subtitle: "Make every moment unforgettable",
    description:
      "Whether understated or glamorous, discover makeup looks designed to celebrate your natural beauty.",
    items: [
      {
        title: "Soft Glam",
        description:
          "A beautifully balanced look for effortless everyday elegance.",
        image:
          "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",
      },
      {
        title: "Bridal Makeup",
        description:
          "Elegant bridal beauty for one of life's most memorable occasions.",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
      },
      {
        title: "Occasion Makeup",
        description:
          "A glamorous finish for celebrations, parties and special events.",
        image:
          "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
  {
    number: "03",
    title: "Wig Installations",
    subtitle: "Confidence in every strand",
    description:
      "Discover polished wig styling and installation services designed to complete your look.",
    items: [
      {
        title: "Frontal Installation",
        description:
          "A carefully styled installation for a seamless-looking finish.",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
      },
      {
        title: "Wig Customisation",
        description:
          "Personalised wig preparation to complement your preferred style.",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
      },
      {
        title: "Wig Styling",
        description:
          "Finishing touches and styling to bring your desired look together.",
        image:
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
  {
    number: "04",
    title: "Eyelash Extensions",
    subtitle: "Let your eyes make a statement",
    description:
      "Enhance your eyes with lash looks ranging from subtle definition to glamorous finishes.",
    items: [
      {
        title: "Natural Lash Look",
        description:
          "Soft-looking lashes for a subtle and graceful enhancement.",
        image:
          "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
      },
      {
        title: "Volume Lashes",
        description:
          "A fuller lash appearance for an expressive, glamorous finish.",
        image:
          "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&w=900&q=85",
      },
      {
        title: "Glam Lash Look",
        description:
          "A statement-making lash style for those special occasions.",
        image:
          "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
  {
    number: "05",
    title: "Permanent Eyebrows",
    subtitle: "Beautifully defined, effortlessly confident",
    description:
      "Explore brow enhancement options designed around your features and preferred aesthetic.",
    items: [
      {
        title: "Brow Shaping",
        description:
          "Thoughtful brow shaping to complement your natural features.",
        image:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
      },
      {
        title: "Brow Enhancement",
        description:
          "Defined brows with a look tailored to your personal preference.",
        image:
          "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
      },
      {
        title: "Permanent Brow Enquiry",
        description:
          "Enquire about available permanent eyebrow treatments and options.",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="#home" className="brand" aria-label="Rue's Glam home">
            <span className="brand-mark">R.</span>
            <span className="brand-copy">
              <span className="brand-name">RUE&apos;S GLAM</span>
              <span className="brand-caption">
                BEAUTY · ELEGANCE · CONFIDENCE
              </span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="#home">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#gallery">Gallery</Link>
          </nav>

          <a
            className="header-book"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
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

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <div className="container hero-content">
          <span className="eyebrow hero-eyebrow">
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

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
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

        <a
          className="scroll-cue"
          href="#services"
          aria-label="Scroll to services"
        >
          <FiArrowDownRight />
        </a>
      </section>

      {/* INTRODUCTION */}
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

          {/* SERVICE CATEGORIES */}
          <div className="service-categories">
            {serviceCategories.map((category, categoryIndex) => (
              <section
                className="service-category"
                key={category.number}
                id={`category-${category.number}`}
              >
                <div className="category-heading">
                  <div className="category-title-group">
                    <span className="category-number">
                      {category.number}
                    </span>

                    <div>
                      <span className="category-subtitle">
                        {category.subtitle}
                      </span>
                      <h3>{category.title}</h3>
                    </div>
                  </div>

                  <p>{category.description}</p>
                </div>

                <div className="services-grid">
                  {category.items.map((service, serviceIndex) => (
                    <article
                      className="service-card premium-service-card"
                      key={service.title}
                      style={
                        {
                          "--card-delay": `${serviceIndex * 120}ms`,
                        } as CSSProperties
                      }
                    >
                      <div className="service-image-wrap">
                        <Image
                          src={service.image}
                          alt={`${service.title} beauty service`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="service-image"
                        />

                        <span className="service-number">
                          {category.number}.{serviceIndex + 1}
                        </span>

                        <span className="service-image-overlay">
                          <FiArrowRight />
                        </span>
                      </div>

                      <div className="service-card-content">
                        <span className="service-category-label">
                          {category.title}
                        </span>

                        <h4>{service.title}</h4>
                        <p>{service.description}</p>

                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noreferrer"
                          className="service-link"
                        >
                          Enquire Now <FiArrowRight />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
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

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Let&apos;s Talk Beauty <FiArrowRight />
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-placeholder section-padding" id="gallery">
        <div className="container gallery-placeholder-inner">
          <span className="eyebrow">YOUR NEXT LOOK STARTS HERE</span>

          <h2 className="section-heading">
            Beauty in every detail.
          </h2>

          <p className="section-description">
            We&apos;re preparing a showcase of Rue&apos;s Glam creations.
            Contact us to enquire about your next beauty appointment.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            Enquire on WhatsApp <FiArrowRight />
          </a>
        </div>
      </section>

      {/* FOOTER */}
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
              © 2026 Rue&apos;s Glam. All rights reserved.
            </span>

            <span className="footer-credit">
              Website crafted by <strong>Silent Programs</strong>
            </span>
          </div>
        </div>
      </footer>

      {/* FLOATING BOOKING BUTTON */}
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
