import barberBg from "../assets/images/barber-bg.jpg";

export default function Barber() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${barberBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          background: "rgba(0,0,0,0.65)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            color: "white",
            textAlign: "center",
            fontFamily: "Arial",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Never Lose Another Client Call
          </h1>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.6",
              maxWidth: "850px",
              margin: "0 auto 40px",
            }}
          >
            AI-powered missed call text-back system for barbershops.
            Automatically recover missed bookings, reply instantly,
            and turn missed calls into paying customers.
          </p>

          <button
            style={{
              padding: "18px 40px",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}