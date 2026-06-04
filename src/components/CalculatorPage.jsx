import { useState } from "react";
import { calculateMissedRevenue } from "../calculators/missedRevenue";

export default function CalculatorPage({ title, defaultPrice = 15 }) {  const [calls, setCalls] = useState(20);
  const [missed, setMissed] = useState(30);
const [price, setPrice] = useState(defaultPrice);  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");

  const result = calculateMissedRevenue(calls, missed, price);

  return (
    <div style={{
      fontFamily: "Arial",
      textAlign: "center",
      padding: "40px",
      maxWidth: "600px",
      margin: "auto"
    }}>

      <h1 style={{
  fontSize: "32px",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px"
}}>
  💸 {title}
</h1>
<p style={{ color: "#555" }}>
  Estimate lost revenue from missed phone calls in your business
</p>
      <div style={{ marginTop: "30px" }}>
        <p>Calls per day</p>
        <input type="number" value={calls} onChange={(e) => setCalls(Number(e.target.value))} />
      </div>

      <div>
        <p>Missed call %</p>
        <input type="number" value={missed} onChange={(e) => setMissed(Number(e.target.value))} />
      </div>

      <div>
        <p>Average service price ($)</p>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>⚠️ You're Losing This Every Month:</h2>

        {!showForm ? (
          <>
            <h1 style={{ color: "red", fontSize: "40px" }}>
              ${result.monthlyRevenue}
            </h1>

            <button
  onClick={() => setShowForm(true)}
  style={{
    marginTop: "20px",
    padding: "12px 20px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer"
  }}
>
  See How Much You're Losing →
</button>
          </>
        ) : (
          <>
            <h3>Enter your email to unlock full results</h3>

           <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{
    padding: "10px",
    width: "250px"
  }}
/>

            <br /><br />

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1DOKbOcTySHt7UNqTtsCdTHmhkUvxCVRtDHObWAXKPcJVAA/viewform" target="_blank">
<button style={{
  padding: "12px 20px",
  background: "black",
  color: "white",
  border: "none",
  cursor: "pointer"
}}>
  Unlock Full Results →
</button>            </a>
          </>
        )}
      </div>
    </div>
  );
}