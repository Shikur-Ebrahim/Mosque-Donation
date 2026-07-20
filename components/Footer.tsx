// Footer.tsx — Server Component

export default function Footer() {
  return (
    <footer
      className="animate-fade-up delay-500 text-center pb-8"
      role="contentinfo"
    >
      {/* Decorative divider */}
      <div
        className="flex items-center gap-3 mb-5"
        aria-hidden="true"
      >
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(15,138,95,0.3))" }} />
        <span className="text-xl">🌙</span>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(15,138,95,0.3), transparent)" }} />
      </div>

      {/* Main message */}
      <p
        className="text-base font-semibold mb-1"
        style={{ color: "var(--green-dark)" }}
      >
        May Allah reward you.
      </p>

      {/* Amharic/Arabic blessings */}
      <p
        className="text-xl font-bold mb-4"
        style={{ color: "var(--gold)", fontFamily: "var(--font-main)" }}
        lang="am"
      >
        ጃዛከላሁ ኸይራ
      </p>

      {/* Small print */}
      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
        © {new Date().getFullYear()} Mosque Construction Fund
      </p>
    </footer>
  );
}
