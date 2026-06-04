export default function Home() {
  return (
    <div
      style={{
        background: "#f5f5f7",
        minHeight: "100vh",
        fontFamily: "Arial",
        color: "#111",
      }}
    >
      {/* NAVBAR */}

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "30px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
            }}
          >
            Berners Builds
          </h1>

          <p
            style={{
              margin: 0,
              color: "#6d5dfc",
            }}
          >
            Booking Automation Systems
          </p>
        </div>

        <button
          style={{
            background: "#6d5dfc",
            border: "none",
            color: "white",
            padding: "14px 28px",
            borderRadius: "14px",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(109,93,252,0.3)",
          }}
        >
          Contact Us
        </button>
      </div>

      {/* HERO */}

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              background: "white",
              padding: "10px 18px",
              borderRadius: "999px",
              color: "#6d5dfc",
              marginBottom: "25px",
              fontWeight: "bold",
              boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
            }}
          >
            MISSED CALL BOOKING AUTOMATION
          </div>

          <h1
            style={{
              fontSize: "82px",
              lineHeight: "1",
              marginBottom: "25px",
            }}
          >
            Recover Missed
            <br />
            <span style={{ color: "#6d5dfc" }}>
              Bookings
            </span>
            <br />
            Automatically
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#555",
              lineHeight: "1.7",
              maxWidth: "700px",
            }}
          >
            Automatically send SMS booking links after missed calls
            and redirect customers directly to your updated
            Google Calendar booking page.
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "20px",
            }}
          >
            <button
              style={{
                background: "#6d5dfc",
                color: "white",
                border: "none",
                padding: "18px 34px",
                borderRadius: "16px",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow: "0 12px 30px rgba(109,93,252,0.3)",
              }}
            >
              Book a Demo
            </button>

            <button
              style={{
                background: "white",
                border: "1px solid #ddd",
                padding: "18px 34px",
                borderRadius: "16px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              How It Works
            </button>
          </div>
        </div>

        {/* PHONE */}

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "340px",
              height: "680px",
              background:
                "linear-gradient(to bottom, #d8d1ff, #6d5dfc)",
              borderRadius: "60px",
              border: "12px solid #111",
              boxShadow: "0 40px 80px rgba(0,0,0,0.15)",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "260px",
              background: "white",
              padding: "30px",
              borderRadius: "26px",
              width: "360px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            }}
          >
            <h2 style={{ color: "#6d5dfc" }}>
              Berners Builds
            </h2>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.7",
              }}
            >
              Hi! You missed our call.
              <br />
              Book your appointment here:
              <br />
              <span style={{ color: "#6d5dfc" }}>
                bernersbuilds.com/book
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}

      <div
        style={{
          maxWidth: "1400px",
          margin: "100px auto",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "60px",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "25px",
          }}
        >
          {[
            "Customer calls your business",
            "Call is missed",
            "SMS booking link is sent",
            "Customer books on Google Calendar",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "35px",
                borderRadius: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#ede9ff",
                  borderRadius: "50%",
                  marginBottom: "25px",
                }}
              />

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
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px 100px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "60px",
            borderRadius: "40px",
            boxShadow: "0 15px 50px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Contact & Legal Inquiries
          </h2>

          <p
            style={{
              fontSize: "22px",
              color: "#555",
            }}
          >
            bernersbuilds@gmail.com
          </p>

          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Acceptable Use Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}