import ContactForm from "./ContactForm";
import Reviews from "./Reviews";
import { IconCamera, IconHammer, IconBath, IconLayers, IconRuler, IconInstagram, IconPhone } from "./Icons";
import "./styles.css";

const SERVER_URL = "https://resume-backend-f553.onrender.com";
const GALLERY_URL = "https://www.instagram.com/built.by.peter/";
const PHONE_NUMBER = "+19299001378";
const PHONE_DISPLAY = "(929) 900-1378";

const SERVICES = [
  { icon: IconLayers, title: "Kitchens", body: "Full kitchen remodels, cabinetry, and finishes built to last." },
  { icon: IconBath, title: "Bathrooms", body: "Modern, functional bathroom renovations from floor to ceiling." },
  { icon: IconHammer, title: "Basements", body: "Turn unfinished space into a room your family will love." },
  { icon: IconRuler, title: "Carpentry & Trim", body: "Custom molding, millwork, and detail work, done right." },
];

const Main = () => {
  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#top">
          <img src="logo.png" alt="Built By Peter logo" />
          <span className="brand-text">BUILT BY PETER</span>
        </a>
        <div className="header-actions">
          <a className="icon-btn" href={`tel:${PHONE_NUMBER}`} aria-label="Call Built By Peter">
            <IconPhone className="icon" />
          </a>
          <a className="btn btn-primary btn-sm" href="#contact">
            Free Quote
          </a>
        </div>
      </header>

      <section
        className="hero"
        id="top"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(20, 28, 23, 0.55), rgba(20, 28, 23, 0.82)), url(hero.jpg)",
        }}
      >
        <div className="hero-inner">
          <img className="hero-logo" src="logo-white.png" alt="Built By Peter" />
          <h1>BUILT BY PETER</h1>
          <p className="hero-tagline">just for you</p>
          <p className="hero-sub">Residential Remodeling</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get a Free Quote
            </a>
            <a
              className="btn btn-outline"
              href={GALLERY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconCamera className="icon" />
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title">Built for how you live</h2>
          <p className="section-body">
            From full remodels to the finishing touches, every project is handled with the same
            care and attention to detail.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <div className="service-card" key={title}>
              <Icon className="service-icon" />
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-head">
          <p className="eyebrow">Reviews</p>
          <h2 className="section-title">What clients say</h2>
        </div>
        <div className="reviews-wrap" style={{ maxWidth: 560, margin: "0 auto" }}>
          <Reviews host={SERVER_URL} />
        </div>
      </section>

      <section className="section section-dark" id="contact">
        <div className="section-head">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">Let's build something great</h2>
          <p className="section-body">
            Reach out for a free, no-obligation quote. Call, text, or send a message below.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <ContactForm phone={PHONE_NUMBER} />
          </div>

          <div className="contact-info">
            <div>
              <h3 style={{ color: "var(--cream)" }}>Contact</h3>
            </div>
            <a className="contact-row" href={`tel:${PHONE_NUMBER}`}>
              <span className="icon-btn">
                <IconPhone className="icon" />
              </span>
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              className="contact-row"
              href={GALLERY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-btn">
                <IconInstagram className="icon" />
              </span>
              <span>@built.by.peter</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <img className="footer-logo" src="logo-white.png" alt="Built By Peter" />
          <div className="footer-links">
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_DISPLAY}</a>
            <a href={GALLERY_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="#contact">Free Quote</a>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Built By Peter. Licensed & Insured.</p>
        </div>
      </footer>
    </div>
  );
};

export default Main;
