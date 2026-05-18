import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';

// Assets
import heroImg from './assets/hero.png';
import mehakImg from './assets/mehak.JPG';
import bridalImg from './assets/bridal.png';
import editorialImg from './assets/editorial.png';
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';

// Components
const Slideshow = () => {
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 150px)', overflow: 'hidden', marginBottom: '1rem' }}>
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundImage: `url(${slide})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 1s ease-in-out',
          opacity: current === i ? 1 : 0,
          zIndex: current === i ? 1 : 0
        }}></div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav style={{
      position: 'relative',
      top: 'auto',
      width: '100%',
      zIndex: 1000,
      background: 'rgba(240, 234, 232, 0.95)',
      backdropFilter: 'blur(10px)',
      borderTop: isHome ? '1px solid #e5dfdd' : 'none',
      borderBottom: '1px solid #e5dfdd'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: isHome ? 'center' : 'space-between',
        alignItems: 'center',
        height: isHome ? '50px' : '80px',
        width: '100%',
        padding: isHome ? '0 5%' : '0 2rem',
        margin: '0 auto',
        maxWidth: isHome ? '100%' : '1400px'
      }}>
        {!isHome && (
          <Link to="/" className="navbar-brand-link" style={{
            fontWeight: 400,
            color: '#000',
            whiteSpace: 'nowrap',
            fontFamily: "'Aboreto', cursive"
          }}>MEHAK CHAWLA</Link>
        )}

        {/* Desktop Menu */}
        <div className="desktop-nav" style={{
          gap: isHome ? '0' : '3rem',
          width: isHome ? '100%' : 'auto',
          justifyContent: isHome ? 'space-around' : 'flex-end',
          alignItems: 'center'
        }}>
          <Link to="/" className="nav-link" style={isHome ? { fontSize: '1.1rem', letterSpacing: '0.2em', fontWeight: 300 } : {}}>HOME</Link>
          <div
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <Link to="/portfolio" className="nav-link" style={isHome ? { fontSize: '1.1rem', letterSpacing: '0.2em', fontWeight: 300 } : {}}>PORTFOLIO</Link>
            {portfolioOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(240, 234, 232, 1)',
                minWidth: '350px',
                padding: '2.5rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.8rem',
                border: '1px solid #e5dfdd',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                zIndex: 1001,
                marginTop: '0'
              }}>
                <Link to="/portfolio/bridal" className="dropdown-link">Bridal Looks</Link>
                <Link to="/portfolio/engagement" className="dropdown-link">Engagement Looks</Link>
                <Link to="/portfolio/glam" className="dropdown-link">Glam & Glitz Looks</Link>
                <Link to="/portfolio/fantasy" className="dropdown-link">Fantasy Looks</Link>
                <Link to="/portfolio/reception" className="dropdown-link">Reception Looks</Link>
                <Link to="/portfolio/sfx" className="dropdown-link">Special Effects Looks</Link>
                <Link to="/portfolio/editorial" className="dropdown-link">Editorial Looks</Link>
              </div>
            )}
          </div>
          <Link to="/about" className="nav-link" style={isHome ? { fontSize: '1.1rem', letterSpacing: '0.2em', fontWeight: 300 } : {}}>ABOUT</Link>
          <Link to="/contact" className="nav-link" style={isHome ? { fontSize: '1.1rem', letterSpacing: '0.2em', fontWeight: 300 } : {}}>CONTACT</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)} style={{ fontSize: '2rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Home</Link>
        <Link to="/portfolio" onClick={() => setIsOpen(false)} style={{ fontSize: '2rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Portfolio</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} style={{ fontSize: '2rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} style={{ fontSize: '2rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Contact</Link>
      </div>
      <style>{`
        .nav-link {
          font-size: 1.3rem;
          letter-spacing: 0.15em;
          color: #000;
          font-weight: 300;
          position: relative;
        }
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -5px;
          left: 0;
          background-color: var(--accent);
          transition: var(--transition);
        }
        .nav-link:hover:after {
          width: 100%;
        }
        .dropdown-link {
          font-family: var(--font-body);
          font-size: 1.2rem;
          color: #333;
          text-decoration: none;
          text-align: center;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          font-weight: 300;
        }
        .dropdown-link:hover {
          background-color: rgba(0, 0, 0, 0.05);
          color: #000;
          letter-spacing: 0.15em;
        }
        .nav-link:hover {
          color: #000;
        }
      `}</style>
    </nav>
  );
};

const Footer = () => {
  const location = useLocation();
  const isAbout = location.pathname === '/about';

  return (
    <footer style={{
      padding: isAbout ? '0 0 1.5rem 0' : '1.5rem 0',
      background: '#fff',
      borderTop: isAbout ? 'none' : '1px solid #f0f0f0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        flexWrap: 'wrap'
      }}>
        <a href="https://instagram.com/mehak.mua" className="footer-link">INSTAGRAM</a>
        <a href="https://youtube.com/@carebymehak" className="footer-link">YOUTUBE</a>
        <a href="https://www.linkedin.com/in/mehak-chawla-168523338?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="footer-link">LINKEDIN</a>
        <a href="https://x.com/mehakxchawla?s=21" className="footer-link">X</a>
        <a href="https://snapchat.com/t/1pLorlJ3" className="footer-link">SNAPCHAT</a>
        <a href="mailto:Work.mehakchawla@gmail.com" className="footer-link email-link">
          <span className="email-label">EMAIL</span>
          <span className="email-address">WORK.MEHAKCHAWLA@GMAIL.COM</span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61567723573835&mibextid=wwXIfr&rdid=FCcnuxips6qzIBHb#" className="footer-link">FACEBOOK</a>
      </div>
      <style>{`
        .footer-link {
          font-size: 0.9rem;
          letter-spacing: 0.15em;
          color: #444;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 400;
          display: inline-block;
        }
        .footer-link:hover {
          color: #000;
          letter-spacing: 0.2em;
        }
        .email-link .email-address {
          display: none;
        }
        .email-link:hover .email-label {
          display: none;
        }
        .email-link:hover .email-address {
          display: inline-block;
          letter-spacing: 0.05em;
          text-transform: lowercase;
        }
      `}</style>
    </footer>
  );
};

// Pages
const Home = () => (
  <div className="fade-in">
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      color: '#fff',
      backgroundImage: `url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginBottom: '0.5rem'
    }}>
      {/* 
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: -2
        }}
      >
        <source src="https://video.wixstatic.com/video/11062b_9f35737083464506944a95610818206d/1080p/mp4/file.mp4" type="video/mp4" />
      </video> 
      */}
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        background: 'rgba(0,0,0,0.4)',
        zIndex: -1
      }}></div>

      {/* Name and Title with precise vertical alignment */}
      <div className="hero-text-wrapper">
        <div className="hero-name">
          <span style={{ textAlign: 'right' }}>MEHAK</span>
          <span style={{ width: '0.8em' }}>&nbsp;</span>
          <span style={{ textAlign: 'left' }}>CHAWLA</span>
        </div>

        <div className="hero-title">
          <span style={{ textAlign: 'right' }}>COSMETOLOGIST</span>
          <span style={{ width: '2.5rem', textAlign: 'center' }}>|</span>
          <span style={{ textAlign: 'left' }}>MAKE-UP ARTIST</span>
        </div>
      </div>
    </section>

    <Navbar />

    <section className="section-padding" style={{ background: '#fff', paddingTop: '0.1rem', paddingBottom: '1rem' }}>
      <div className="container">
        <h2 style={{
          textAlign: 'center',
          fontSize: '3.5rem',
          letterSpacing: '0.4em',
          marginBottom: '1rem',
          fontFamily: "'Aboreto', cursive",
          fontWeight: 400
        }}>MEHAK CHAWLA</h2>

        <div className="grid-home">
          <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}>
            <p style={{ marginBottom: '2rem' }}>
              Hey, I’m Mehak Chawla a Delhi, India based cosmetologist specialising in makeup artistry. I’m thrilled to welcome you to my official website! In the portfolio section, you’ll find a curated collection of my work, featuring a variety of styles including bridal and engagement looks, special effects, creative concepts, fantasy themes, and glamorous makeup.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              If you’d like to book me for your wedding, special occasion, or any other makeup services, I’d love to collaborate and explore ideas with you from makeup and beyond.
            </p>
            <p>
              Feel free to reach out through my social media links or send me a message via the contact page.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '4 / 5',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
            }}>
              <img src={mehakImg} alt="Mehak Chawla" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '100% 0%',
                transform: 'scale(1.15) translateX(-6%)',
                transformOrigin: 'top'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const CATEGORIES = [
  { title: "Editorial Looks", img: editorialImg },
  { title: "Bridal Looks", img: bridalImg },
  { title: "Engagement Looks", img: bridalImg },
  { title: "Glam & Glitz Looks", img: editorialImg },
  { title: "Fantasy Looks", img: editorialImg },
  { title: "Reception Looks", img: bridalImg },
  { title: "Special Effects Looks", img: editorialImg }
];

const Lightbox = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ffffff',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'zoom-out',
        animation: 'fadeIn 0.4s ease'
      }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <img
          src={src}
          alt="Macro view"
          style={{
            maxWidth: '100%',
            maxHeight: '85vh',
            objectFit: 'contain',
            boxShadow: '0 40px 100px rgba(0,0,0,0.15)',
            backgroundColor: 'transparent'
          }}
        />
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        style={{
          position: 'absolute',
          top: '2rem', right: '2rem',
          background: '#000', border: 'none',
          width: '45px', height: '45px',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', cursor: 'pointer',
          color: '#fff',
          fontWeight: 200,
          zIndex: 10001
        }}
      >×</button>
    </div>
  );
};

const PortfolioSection = ({ title, img, isLast, onImageClick }) => {
  const photos = Array(8).fill(img);
  const id = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div id={id} style={{ marginBottom: isLast ? '4rem' : '10rem', scrollMarginTop: '100px' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.8rem',
        letterSpacing: '0.5em',
        marginBottom: '4rem',
        fontWeight: 300,
        paddingLeft: '0.5em',
        fontFamily: "'Aboreto', cursive"
      }}>{title.toUpperCase()}</h2>

      <div className="grid-portfolio">
        {photos.map((src, i) => (
          <div
            key={i}
            onClick={() => onImageClick(src)}
            style={{
              aspectRatio: '3/4',
              overflow: 'hidden',
              backgroundColor: '#f9f9f9',
              cursor: 'zoom-in'
            }}
          >
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to={`/portfolio/${id}`} className="btn btn-filled" style={{
          padding: '1.2rem 5rem',
          fontSize: '0.9rem',
          letterSpacing: '0.3em'
        }}>LOAD MORE</Link>
      </div>
    </div>
  );
};

const PortfolioNav = ({ categories }) => {
  const line1 = categories.slice(0, 4);
  const line2 = categories.slice(4);

  const linkStyle = {
    fontSize: '1.1rem',
    letterSpacing: '0.2em',
    color: '#666',
    textTransform: 'uppercase',
    fontWeight: 400,
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{ marginBottom: '6rem', width: '100%' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {line1.map((cat, i) => (
          <a
            key={i}
            href={`#${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="portfolio-nav-link"
            style={linkStyle}
          >
            {cat.title}
          </a>
        ))}
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        flexWrap: 'wrap'
      }}>
        {line2.map((cat, i) => (
          <a
            key={i}
            href={`#${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="portfolio-nav-link"
            style={linkStyle}
          >
            {cat.title}
          </a>
        ))}
      </div>
      <style>{`
        .portfolio-nav-link:hover {
          color: #000 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

const Portfolio = ({ onImageClick }) => {
  return (
    <div className="fade-in" style={{ scrollBehavior: 'smooth' }}>
      <Slideshow />
      <div className="container">
        <h1 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '3.5rem',
          letterSpacing: '0.6em',
          fontWeight: 300,
          textTransform: 'uppercase',
          paddingLeft: '0.6em',
          fontFamily: "'Aboreto', cursive"
        }}>PORTFOLIO</h1>

        <PortfolioNav categories={CATEGORIES} />

        {CATEGORIES.map((cat, i) => (
          <PortfolioSection
            key={i}
            title={cat.title}
            img={cat.img}
            isLast={i === CATEGORIES.length - 1}
            onImageClick={onImageClick}
          />
        ))}
      </div>
    </div>
  );
};

const CategoryDetail = ({ onImageClick }) => {
  const { category } = useParams();
  const catData = CATEGORIES.find(c => c.title.toLowerCase().replace(/\s+/g, '-') === category);
  const title = catData ? catData.title : category.replace(/-/g, ' ');
  const img = catData ? catData.img : editorialImg;
  const photos = Array(24).fill(img);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fade-in">
      <Navbar />
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Link to="/portfolio" className="portfolio-nav-link" style={{
            fontSize: '4.5rem',
            letterSpacing: '0.6em',
            color: '#000',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'inline-block',
            fontFamily: "'Aboreto', cursive",
            fontWeight: 300,
            paddingLeft: '0.6em'
          }}>PORTFOLIO</Link>
        </div>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '6rem',
          fontSize: '2rem',
          letterSpacing: '0.4em',
          fontWeight: 300,
          textTransform: 'uppercase',
          color: '#666',
          fontFamily: "'Aboreto', cursive"
        }}>{title}</h1>

        <div className="grid-portfolio" style={{ marginBottom: '0.5rem' }}>
          {photos.map((src, i) => (
            <div
              key={i}
              onClick={() => onImageClick(src)}
              style={{
                aspectRatio: '3/4',
                overflow: 'hidden',
                backgroundColor: '#f9f9f9',
                cursor: 'zoom-in'
              }}
            >
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const About = () => (
  <div className="fade-in">
    <div className="container section-padding" style={{ paddingTop: '1.5rem', paddingBottom: '1rem' }}>
      <div className="grid-about">
        <div>
          <h1 style={{
            marginBottom: '2.5rem',
            fontSize: '3.5rem',
            fontFamily: 'var(--font-body)',
            textDecoration: 'underline',
            textUnderlineOffset: '15px',
            textDecorationThickness: '1px',
            display: 'inline-block',
            letterSpacing: '0.05em',
            textTransform: 'none'
          }}>About Mehak</h1>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            Mehak Chawla is a Delhi, India based Cosmetologist Specialising in Makeup Artistry whose work blends technical mastery with a modern, editorial sensibility. Her journey began at Orane International Academy, where she completed her Post-Graduation Diploma in Cosmetology.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#444' }}>
            With this foundation, Mehak developed a style defined by precision, softness, and skin integrity. She believes makeup should feel like a second skin — refined, radiant, and seamlessly blended. Her work is guided by contemporary global aesthetics: luminous bases, subtle sculpting, and airy coverage.
          </p>
          <p style={{ marginBottom: '3rem', fontSize: '1.1rem', color: '#444' }}>
            As a freelancer, Mehak has worked across bridal, event, and shoot environments, crafting looks that translate beautifully both in person and on camera. Her role as Beauty Head for a startup’s marketing division strengthened her ability to design makeup for high-resolution photography.
          </p>
          <Link to="/contact" className="btn btn-filled">CONTACT US</Link>
        </div>
        <div className="about-image" style={{
          backgroundImage: `url(${mehakImg})`,
          backgroundSize: 'cover',
          backgroundPosition: '100% 5%',
          height: '100%',
          minHeight: '550px',
          marginLeft: '4rem',
          boxShadow: '-10px 10px 0px var(--bg-soft)'
        }}></div>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const scriptURL = "https://script.google.com/macros/s/AKfycbwUPCh5smTCsoiC7iH0ftkwexEgufc2ijxrbEgzQ36MzMdeLZGm7ozfR_XGPb2CA-CY/exec";

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', mobile: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('error');
    }
  };

  return (
    <div className="fade-in">
      <div className="container" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '3rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            letterSpacing: '0.05em',
            textTransform: 'none',
            display: 'inline-block'
          }}>Drop Your Message</h1>
        </div>
        <div className="grid-contact">
          {/* Left Side: Text Content */}
          <div style={{ paddingTop: '2rem' }}>
            <p style={{ fontSize: '2rem', lineHeight: '1.4', color: '#333', marginBottom: '1.5rem', maxWidth: '500px', fontWeight: 300 }}>
              Have a booking query, a collaboration idea, or something you'd love to chat about? Drop your message and I'll reach out to you shortly!
            </p>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '1.4rem', letterSpacing: '0.1em', color: '#666' }}>Delhi, India</p>
            </div>
            {status === 'success' && (
              <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0fdf4', color: '#166534', borderLeft: '4px solid #22c55e', fontSize: '1.1rem' }}>
                Your message has been delivered!
              </div>
            )}
          </div>

          {/* Right Side: Form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div className="form-row">
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: '#999', textTransform: 'uppercase' }}>First Name *</label>
                  <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid #ddd', outline: 'none', fontSize: '1.1rem' }} required />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: '#999', textTransform: 'uppercase' }}>Last Name</label>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid #ddd', outline: 'none', fontSize: '1.1rem' }} />
                </div>
              </div>

              <div className="form-row">
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: '#999', textTransform: 'uppercase' }}>Email *</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid #ddd', outline: 'none', fontSize: '1.1rem' }} required />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: '#999', textTransform: 'uppercase' }}>Mobile No. *</label>
                  <input name="mobile" value={formData.mobile} onChange={handleChange} type="tel" style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid #ddd', outline: 'none', fontSize: '1.1rem' }} required />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: '#999', textTransform: 'uppercase' }}>Subject</label>
                <input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="I want to enquire about charges..." style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid #ddd', outline: 'none', fontSize: '1.1rem' }} />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: '#999', textTransform: 'uppercase' }}>Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="3" style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid #ddd', outline: 'none', resize: 'none', fontSize: '1.1rem' }} required></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-filled"
                disabled={status === 'submitting'}
                style={{ width: '100%', marginTop: '0.5rem', opacity: status === 'submitting' ? 0.7 : 1 }}
              >
                {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT'}
              </button>

              {status === 'error' && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<><Navbar /><Portfolio onImageClick={setLightboxImg} /></>} />
            <Route path="/portfolio/:category" element={<CategoryDetail onImageClick={setLightboxImg} />} />
            <Route path="/about" element={<><Navbar /><About /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /></>} />
          </Routes>
        </main>
        <Footer />
        <Lightbox src={lightboxImg} onClose={() => setLightboxImg(null)} />
      </div>
    </Router>
  );
}

export default App;

