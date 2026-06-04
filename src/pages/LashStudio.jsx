export default function LashStudio() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f8fc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 8%",
          background: "white",
        }}
      >
        <div>
          <h2 style={{ color: "#7c3aed", margin: 0 }}>
            Berners Build
          </h2>
          <small>Lash Studio Missed Call AI</small>
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

      <section
        style={{
          padding: "70px 8%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px,4vw,58px)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          Recover Missed Lash Clients Automatically
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "30px auto",
            fontSize: "24px",
            color: "#444",
          }}
        >
          AI follows up missed callers, books lash appointments,
          answers questions and recovers lost revenue 24/7.
        </p>
      </section>
    </div>
  );
}