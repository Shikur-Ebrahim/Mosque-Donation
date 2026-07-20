// Hero.tsx — Server Component

export default function Hero() {
  return (
    <header className="animate-fade-up text-center pt-4 pb-2">
      {/* Mosque icon with pulse ring */}
      <div className="relative inline-flex items-center justify-center mb-5">
        <span className="pulse-ring" aria-hidden="true" />
        <span
          className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full text-5xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,138,95,0.12) 0%, rgba(212,175,55,0.10) 100%)",
            boxShadow: "0 4px 24px rgba(15,138,95,0.18)",
          }}
          role="img"
          aria-label="Mosque"
        >
          🕌
        </span>
      </div>

      {/* Main heading */}
      <h1
        className="text-2xl font-extrabold leading-snug mb-3 px-2"
        style={{ fontFamily: "var(--font-main)", color: "var(--text)" }}
      >
        <span className="text-gold-shimmer">በአንድነት </span>
        <span style={{ color: "var(--green)" }}>የአላህን ቤት</span>
        <br />
        <span style={{ color: "var(--green-dark)" }}>እንገንባ!</span>
      </h1>

      {/* Subtitle */}
      <div
        className="animate-fade-up delay-200 rounded-2xl p-4 mx-1"
        style={{
          background:
            "linear-gradient(135deg, var(--green-light) 0%, var(--gold-light) 100%)",
          border: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        <p
          className="text-base font-semibold mb-1"
          style={{ color: "var(--green-dark)" }}
        >
          🤲 ለመስጂዱ ግንባታ በሰደቃ ጃሪያ ይሳተፉ።
        </p>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          የአቅምዎን ያህል በማበርከት ይደግፉ።
        </p>
      </div>
    </header>
  );
}
