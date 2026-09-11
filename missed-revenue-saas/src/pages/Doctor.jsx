import "../App.css";

export default function Doctor() {
  return (
    <div className="page">
      <section className="hero">
        <div className="heroLeft">
          <div className="tag">MEDICAL PRACTICE BOOKING AUTOMATION</div>

          <h1>Stop losing patients from missed calls.</h1>

          <p className="heroText">
            Automatically follow up with missed callers and help patients
            request appointments without waiting for a callback.
          </p>

          <div className="heroButtons">
            <a href="/contact" className="demoButton">Book A Demo</a>
            <a href="/contact" className="secondaryButton">Contact Us</a>
          </div>
        </div>

        <div className="phoneWrap">
          <div className="smsCard">
            <h3>Your Medical Practice</h3>
            <p>Sorry we couldn't answer your call right now.</p>
            <p>Request your appointment here:</p>
            <a href="/contact" className="smsLink">Book Appointment</a>
          </div>
        </div>
      </section>
    </div>
  );
}