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
        fontFamily: "Arial, sans-serif",
        color: "#111827",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          background: "#ffffff",
          padding: "24px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#7c3aed",
              fontSize: "32px",
            }}
          >
            Berners Build
          </h2>

          <p
            style={{
              margin: 0,
              color: "#6b7280",
            }}
          >
            Missed Call Booking AI
          </p>
        </div>

        <button
          style={{
            background: "#7c3aed",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: "80px 8%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(34px,5vw,64px)",
            maxWidth: "1100px",
            margin: "0 auto",
            lineHeight: 1.1,
          }}
        >
          Stop Losing Revenue From Missed Calls
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#4b5563",
            maxWidth: "900px",
            margin: "30px auto",
          }}
        >
          AI instantly follows up missed callers, qualifies leads,
          and books appointments automatically.
        </p>
      </section>

      {/* CALCULATOR */}
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
            padding: "50px",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Revenue Recovery Calculator
          </h2>

          <p>
            Missed Calls Per Month: <strong>{missedCalls}</strong>
          </p>

          <input
            type="range"
            min="1"
            max="100"
            value={missedCalls}
            onChange={(e) =>
              setMissedCalls(Number(e.target.value))
            }
            style={{ width: "100%" }}
          />

          <br />
          <br />

          <p>
            Average Customer Value: $
            <strong>{customerValue}</strong>
          </p>

          <input
            type="range"
            min="20"
            max="500"
            value={customerValue}
            onChange={(e) =>
              setCustomerValue(Number(e.target.value))
            }
            style={{ width: "100%" }}
          />

          <h2
            style={{
              textAlign: "center",
              marginTop: "40px",
              color: "#16a34a",
            }}
          >
            ${recoveredRevenue.toLocaleString()} / month recovered
          </h2>
        </div>
      </section>

      {/* REVENUE MESSAGE */}
      <section
        style={{
          padding: "0 8% 80px",
          textAlign: "center",
        }}
      >
        <h2>
          One Recovered Customer Can Pay For The Software
        </h2>

        <p
          style={{
            color: "#6b7280",
            maxWidth: "800px",
            margin: "20px auto",
            fontSize: "18px",
          }}
        >
          If your average customer is worth $80-$300,
          recovering a single missed booking can cover
          your monthly subscription.
        </p>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          padding: "0 8% 80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Why Businesses Buy
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Recover Lost Customers",
            "Book More Appointments",
            "Respond Instantly",
            "Never Miss Leads",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        style={{
          padding: "0 8% 80px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Industries We Serve
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          {industries.map((industry) => (
            <button
              key={industry}
              style={{
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                background: "white",
                cursor: "pointer",
              }}
            >
              {industry}
            </button>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          padding: "0 8% 80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3>1. Missed Call</h3>
            <p>Customer calls and nobody answers.</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3>2. AI Responds</h3>
            <p>AI instantly texts back.</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3>3. Booking Created</h3>
            <p>Customer books automatically.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        style={{
          padding: "0 8% 80px",
          textAlign: "center",
        }}
      >
        <h2>Simple Pricing</h2>

        <div
          style={{
            background: "white",
            maxWidth: "450px",
            margin: "40px auto",
            padding: "40px",
            borderRadius: "24px",
          }}
        >
          <h1
            style={{
              color: "#7c3aed",
            }}
          >
            $19.99/month
          </h1>

          <p>Missed Call Recovery</p>
          <p>AI Follow Up</p>
          <p>Appointment Booking</p>
          <p>Revenue Recovery</p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "0 8% 80px",
          textAlign: "center",
        }}
      >
        <h2>Contact</h2>

        <p>support@bernersbuild.com</p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "white",
          padding: "30px",
          textAlign: "center",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <p>© 2026 Berners Build</p>

        <p>
          Privacy Policy | Terms of Service | Contact
        </p>
      </footer>
    </div>
  );
}