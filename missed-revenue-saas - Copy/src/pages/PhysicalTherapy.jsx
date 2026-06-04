import "../App.css";

export default function PhysicalTherapy() {
  return (
    <div className="page">
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,243,250,0.88), rgba(245,243,250,0.88)), url('/images/pt-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="heroLeft">
          <div className="tag">
            PHYSICAL THERAPY AUTOMATION
          </div>

          <h1>
            Recover missed physical therapy bookings automatically.
          </h1>

          <p className="heroText">
            Automatically text missed callers and keep your therapy schedule
            full without manual follow-up.
          </p>

          <div className="heroButtons">
            <a href="/contact" className="demoButton">
              Book A Demo
            </a>

            <a href="/contact" className="secondaryButton">
              Contact Us
            </a>
          </div>
        </div>

        <div className="phoneWrap">
          <div className="phoneMockup"></div>

          <div className="smsCard">
            <h3>Physical Therapy Clinic</h3>

            <p>
              Sorry we couldn’t answer your call right now.
            </p>

            <p>
              Book your appointment instantly here:
            </p>

            <a href="/" className="smsLink">
              clinic.com/book
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}