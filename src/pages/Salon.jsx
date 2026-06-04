import { useState } from "react";

export default function Salon() {
  const [missedCalls, setMissedCalls] = useState(20);
  const [customerValue, setCustomerValue] = useState(120);

  const recoveredRevenue = Math.round(
    missedCalls * customerValue * 0.35
  );

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
          <h2 style={{ margin: 0, color: "#7c3aed" }}>
            Berners Build
          </h2>
          <small>Salon Missed Call AI</small>
        </div>

        <button
          style={{
            background: "#7c3aed",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "12px",
          }}
        >
          Get Started
        </button>
      </nav>

      <section style={{ padding: "70px 8%", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(32px,4vw,58px)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          Recover More Salon Clients Automatically
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "25px auto",
            fontSize: "20px",
            color: "#4b5563",
          }}
        >
          AI follows up missed callers, books appointments,
          answers service questions and recovers lost revenue
          for salons 24/7.
        </p>
      </section>

      <section style={{ padding: "0 8% 60px" }}>
        <div
          style={{
            background: "white",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "40px",
            borderRadius: "24px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Salon Revenue Recovery Calculator
          </h2>

          <p>Missed Calls Per Month: {missedCalls}</p>

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

          <p>Average Client Value: ${customerValue}</p>

          <input
            type="range"
            min="50"
            max="500"
            value={customerValue}
            onChange={(e) =>
              setCustomerValue(Number(e.target.value))
            }
            style={{ width: "100%" }}
          />

          <h2 style={{ textAlign: "center", color: "#16a34a" }}>
            ${recoveredRevenue.toLocaleString()}
            /month recovered
          </h2>
        </div>
      </section>
    </div>
  );
}