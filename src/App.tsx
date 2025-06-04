import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const showVideo = (index: number) => {
    setVideoIndex(index);
  };

  useEffect(() => {
    document.querySelectorAll(".video-slide").forEach((el, i) => {
      (el as HTMLElement).style.display = i === videoIndex ? "block" : "none";
    });
  }, [videoIndex]);

  // Bootstrap Carousel Initialization
  useEffect(() => {
    const initCarousel = async () => {
      const module = await import("bootstrap/js/dist/carousel");
      const Carousel = module.default;

      const element = document.getElementById("hoverCarousel");
      if (element) {
        new Carousel(element);
      }
    };

    initCarousel();
  }, []);

  return (
    <div>
      <header className="header">
        <span className="menu-icon" onClick={() => setShowSidebar(true)}>☰</span>
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </header>

      <nav className={`sidebar ${showSidebar ? "show" : ""}`}>
        <a href="#" className="closebtn" onClick={() => setShowSidebar(false)}>×</a>
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">CATEGORY</a>
        <a href="#">OFFERS</a>
        <a href="#">STORE LOCATOR</a>
      </nav>

      <div className="content">
        <div className="container mt-4">
          <div id="hoverCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {[0, 1, 2].map((i) => (
                <button key={i} type="button" data-bs-target="#hoverCarousel" data-bs-slide-to={i} className={i === 0 ? "active" : ""}></button>
              ))}
            </div>
            <div className="carousel-inner">
              {["image1.jpg", "image2.jpg", "image3.jpg"].map((img, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <img src={`/images/${img}`} className="d-block w-100" alt={`Slide ${i}`} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Caption {i + 1}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="centered-heading">Top Grocery Offers of the week</h2>
        <div className="offers-container">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="offer-item">
              <img src={`/images/img${n}.jpg`} alt={`Product ${n}`} />
              <p>Product {n}</p>
            </div>
          ))}
        </div>

        <h2 className="centered-heading">Videos</h2>
        <div className="video-slider">
          {["7CQ4ZNCa-Gk", "hB9fES8fapc", "lCfKLs6rOtg", "3iWGgP-FS0c"].map((id, i) => (
            <div key={i} className="video-slide">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
                title={`Video ${i}`}
              ></iframe>
            </div>
          ))}
          <div className="dots-container">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`dot ${i === videoIndex ? "active" : ""}`} onClick={() => showVideo(i)}></span>
            ))}
          </div>
        </div>

        <img className="full-width-image" src="/48ac2aa3-84d1-4970-84e4-8d95bd2ff2a7.jpg" alt="Banner" />

        <h2 className="centered-heading">Top Non Grocery Offers of the week</h2>
        <div className="offers-container">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="offer-item">
              <img src={`/images/${n}.jpg`} alt={`Product ${n}`} />
              <p>Product {n}</p>
            </div>
          ))}
        </div>

        <h2 className="centered-heading">Key Promotions At the Store</h2>
        <div className="offers-container">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="offer-item">
              <img src={`/images/i${n}.jpg`} alt={`Promo ${n}`} />
            </div>
          ))}
        </div>

        <img className="full-width-image" src="/images/last.jpg" alt="Last Promo" />
      </div>

      <footer className="footer">
        <button className="footer-btn"><img src="/images/offers.jpg" alt="Offers" /></button>
        <button className="footer-btn" onClick={() => alert("About Us Page")}>
          <div className="d-flex flex-column align-items-center">
            <img src="/images/Aboutus.jpg" alt="About Us" width="28" height="28" />
            <small className="text-muted">About Us</small>
          </div>
        </button>
        <button className="footer-btn"><img src="/images/Store.jpg" alt="Store" /></button>
      </footer>
    </div>
  );
}

export default App;
