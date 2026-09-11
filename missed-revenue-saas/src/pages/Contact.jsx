export default function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 25px",
        background: "#f8f7fc",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "50px",
          borderRadius: "24px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Get Started
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "1.6", color: "#6b6375" }}>
          Ready to stop losing customers from missed calls?
          Contact us to learn how Missed Call Booking AI can help your
          business recover lost appointments.
        </p>

        <a
          href="mailto:hello@bernersbuild.com"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "15px 28px",
            borderRadius: "12px",
            background: "#7c3aed",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "17px",
          }}
        >
          Contact Us
        </a>

        <p style={{ marginTop: "30px", color: "#6b6375" }}>
          We will be adding direct booking and contact automation as the
          platform develops.
        </p>
      </div>
    </div>
  );
}