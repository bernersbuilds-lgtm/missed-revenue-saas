import "../App.css";

export default function Medspa() {
  return (
    <div className="page">
      <section className="hero">
        <div className="heroLeft">
          <div className="tag">MED SPA BOOKING AUTOMATION</div>
          <h1>Stop losing clients from missed calls.</h1>
          <p className="heroText">
            Automatically follow up with missed callers and help clients
            request appointments without waiting for a callback.
          </p>
          <div className="heroButtons">
            <a href="/contact" className="demoButton">Book A Demo</a>
            <a href="/contact" className="secondaryButton">Contact Us</a>
          </div>
        </div>

        <div className="phoneWrap">
          <div className="smsCard">
            <h3>Your Med Spa</h3>
            <p>Sorry we couldn't answer your call right now.</p>
            <p>Request your appointment here:</p>
            <a href="/contact" className="smsLink">Book Appointment</a>
          </div>
        </div>
      </section>
    </div>
  );
}