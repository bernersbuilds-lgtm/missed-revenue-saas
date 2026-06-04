import barberBg from "/images/barber-bg.jpg";
import "../App.css";

export default function Barber() {
  return (
    <div className="page">
     <section
  className="hero"
  style={{
    backgroundImage: `linear-gradient(rgba(245,243,250,0.88), rgba(245,243,250,0.88)), url(${barberBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
        <div className="heroLeft">
          <div className="tag">
            BARBERSHOP BOOKING AUTOMATION
          </div>

          <h1>
            Stop losing haircut appointments from missed calls.
          </h1>

          <p className="heroText">
            Automatically text missed callers your booking link so your shop
            stays fully booked every week.
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
            <h3>Modern Barbershop</h3>

            <p>
              Sorry we couldn't answer your call right now.
            </p>

            <p>
              Book your haircut instantly here:
            </p>

            <a href="/" className="smsLink">
              barber.com/book
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}