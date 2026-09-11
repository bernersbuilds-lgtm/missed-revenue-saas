import "../App.css";

export default function NailSalon() {
  return (
    <div className="page">
      <section className="hero">
        <div className="heroLeft">
          <div className="tag">NAIL SALON BOOKING AUTOMATION</div>
          <h1>Stop losing appointments from missed calls.</h1>
          <p className="heroText">
            Automatically text missed callers your booking link so your
            salon can stay booked throughout the week.
          </p>
          <div className="heroButtons">
            <a href="/contact" className="demoButton">Book A Demo</a>
            <a href="/contact" className="secondaryButton">Contact Us</a>
          </div>
        </div>

        <div className="phoneWrap">
          <div className="smsCard">
            <h3>Your Nail Salon</h3>
            <p>Sorry we couldn't answer your call right now.</p>
            <p>Book your appointment here:</p>
            <a href="/contact" className="smsLink">Book Appointment</a>
          </div>
        </div>
      </section>
    </div>
  );
}