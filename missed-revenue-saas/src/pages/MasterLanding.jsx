import { useState } from "react";

export default function MasterLanding() {
  const [missedCalls, setMissedCalls] = useState(20);
  const [customerValue, setCustomerValue] = useState(100);

  const recoveredRevenue = Math.round(
    missedCalls * customerValue * 0.35
  );

  const industries = [
    "Dentist",
    "Dermatologist",
    "Doctor",
    "Med Spa",
    "Nail Salon",
    "Hair Salon",
    "Lash Studio",
    "Physical Therapy",
    "Chiropractor",
    "Beauty Clinic",
    "Barber",
    "Clinic",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f7fc",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          background: "white",
          padding: "20px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#7c3aed",
            }}
          >
            Berners Build
          </h2>

          <small>
            Missed Call Booking AI
          </small>
        </div>

        <button
          style={{
            background: "#7c3aed",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </nav>

      <section
        style={{
          padding: "80px 8%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(36px,5vw,64px)",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          Stop Losing Revenue
          From Missed Calls
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "25px auto",
            fontSize: "22px",
            color: "#4b5563",
          }}
        >
          AI instantly follows up missed callers,
          qualifies leads, and books appointments
          automatically.
        </p>
      </section>

      <section
        style={{
          padding: "0 8% 80px",
        }}
      >
        <div
          style={{
            background: "white",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "40px",
            borderRadius: "24px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Revenue Recovery Calculator
          </h2>

          <p>
            Missed Calls Per Month:
            {" "}
            {missedCalls}
          </p>

          <input
            type="range"
            min="1"
            max="100"
            value={missedCalls}
            onChange={(e) =>
              setMissedCalls(
                Number(e.target.value)
              )
            }
            style={{
              width: "100%",
            }}
          />

          <p>
            Average Customer Value:
            {" "}
            ${customerValue}
          </p>

          <input
            type="range"
            min="50"
            max="500"
            value={customerValue}
            onChange={(e) =>
              setCustomerValue(
                Number(e.target.value)
              )
            }
            style={{
              width: "100%",
            }}
          />

          <h2
            style={{
              textAlign: "center",
              color: "#16a34a",
            }}
          >
            $
            {recoveredRevenue.toLocaleString()}
            {" "}
            / month recovered
          </h2>
        </div>
      </section>

      <section
        style={{
          padding: "60px 8%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Industries We Serve
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "12px",
            marginTop: "30px",
          }}
        >
          {industries.map((industry) => (
            <button
              key={industry}
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                background: "white",
              }}
            >
              {industry}
            </button>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "80px 8%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "white",
            maxWidth: "450px",
            margin: "0 auto",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <h2
            style={{
              color: "#7c3aed",
            }}
          >
            $19.99/month
          </h2>

          <p>Missed Call Recovery</p>
          <p>AI Follow Up</p>
          <p>Appointment Booking</p>
          <p>Revenue Recovery</p>
        </div>
      </section>

      <footer
        style={{
          background: "white",
          padding: "30px",
          textAlign: "center",
        }}
      >
        © 2026 Berners Build
      </footer>
    </div>
  );
}