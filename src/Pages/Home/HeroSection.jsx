export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Halo, saya Defan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">UI/UX</span> <br />
            FRONTEND DEV
          </h1>
          <p className="hero--section-description">
            Saya menciptakan desain yang menarik dan pengalaman digital yang
            fungsional.
            <br /> Mari wujudkan ide Anda menjadi sesuatu yang luar biasa!
          </p>
        </div>
        <div class="container">
          <a
            href="https://www.linkedin.com/in/defan-pratama-320153341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            class="btn btn-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
