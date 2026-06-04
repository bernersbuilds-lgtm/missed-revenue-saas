export default function Salon() {
  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
        color: "#111827",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          background: "white",
          borderRadius: "30px",
          padding: "25px 40px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "28px",
              }}
            >
              Berners Builds
            </h2>

            <p
              style={{
                margin: 0,
                color: "#7c3aed",
                fontSize: "14px",
              }}
            >
              Booking Automation Systems
            </p>
          </div>

          <button
            style={{
              background: "#7c3aed",
              color: "white",
              border: "none",
              padding: "14px 24px",
              borderRadius: "14px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Request Early Access
          </button>
        </div>

        {/* HERO */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            marginTop: "80px",
          }}
        >
          <div>
            <p
              style={{
                color: "#7c3aed",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              MISSED CALL BOOKING AUTOMATION
            </p>

            <h1
              style={{
                fontSize: "70px",
                lineHeight: "1.1",
                marginBottom: "30px",
              }}
            >
              Recover Missed
              <span style={{ color: "#7c3aed" }}> Bookings </span>
              Automatically
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#4b5563",
              }}
            >
              Automatically send SMS booking links after missed calls and
              redirect customers directly to your updated Google Calendar
              booking page.
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "40px",
              }}
            >
              <button
                style={{
                  background: "#7c3aed",
                  color: "white",
                  border: "none",
                  padding: "18px 30px",
                  borderRadius: "16px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Request Early Access
              </button>

              <button
                style={{
                  background: "white",
                  border: "1px solid #ddd",
                  padding: "18px 30px",
                  borderRadius: "16px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                How It Works
              </button>
            </div>
          </div>

          {/* PHONE MOCKUP */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "320px",
                height: "640px",
                borderRadius: "50px",
                background:
                  "linear-gradient(180deg,#c4b5fd,#e9d5ff,#ede9fe)",
                boxShadow: "0 30px 60px rgba(124,58,237,0.2)",
                position: "relative",
                border: "10px solid #111827",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "220px",
                  left: "-80px",
                  background: "white",
                  padding: "25px",
                  borderRadius: "20px",
                  width: "280px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    color: "#7c3aed",
                  }}
                >
                  Berners Builds
                </h3>

                <p
                  style={{
                    lineHeight: "1.7",
                    color: "#374151",
                  }}
                >
                  Hi! You missed our call.
                  <br />
                  Book your appointment here:
                  <br />
                  <span style={{ color: "#7c3aed" }}>
                    bernersbuilds.com/book
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div
          style={{
            marginTop: "120px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              marginBottom: "60px",
            }}
          >
            How It Works
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "30px",
            }}
          >
            {[
              "Customer Calls Your Business",
              "Call Is Missed",
              "SMS Booking Link Is Sent",
              "Customer Books On Google Calendar",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "40px",
                  borderRadius: "24px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "20px",
                    background: "#ede9fe",
                    marginBottom: "25px",
                  }}
                ></div>

                <h3
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                  }}
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div
          style={{
            marginTop: "120px",
            background:
              "linear-gradient(135deg,#7c3aed,#8b5cf6,#a78bfa)",
            borderRadius: "30px",
            padding: "70px",
            color: "white",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "50px",
              marginBottom: "20px",
            }}
          >
            Let’s Work Together
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Berners Builds develops appointment booking automation systems for
            salons, clinics, med spas, and appointment-based businesses using
            Google Calendar booking workflows.
          </p>

          <div
            style={{
              marginTop: "40px",
              fontSize: "20px",
              lineHeight: "2",
            }}
          >
            <div>bernersbuilds@gmail.com</div>
            <div>Lebanon</div>
          </div>
        </div>
      </div>
    </div>
  );
}