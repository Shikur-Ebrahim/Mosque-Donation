"use client";

import { useState, useCallback, useRef } from "react";
import { CBE_ACCOUNT, TELEBIRR_ACCOUNT, ABYSSINIA_ACCOUNT } from "@/lib/constants";

const accounts = [
  { name: "CBE Account", number: CBE_ACCOUNT, icon: "🏦" },
  { name: "Telebirr", number: TELEBIRR_ACCOUNT, icon: "📱" },
  { name: "Abissinya", number: ABYSSINIA_ACCOUNT, icon: "🏦" },
];

export default function DonationCard() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(async (accountNum: string) => {
    try {
      await navigator.clipboard.writeText(accountNum);
      setCopiedAccount(accountNum);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopiedAccount(null), 2000);
    } catch {
      // Fallback for older browsers / non-secure contexts
      const el = document.createElement("textarea");
      el.value = accountNum;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopiedAccount(accountNum);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopiedAccount(null), 2000);
    }
  }, []);

  return (
    <section
      className="card animate-fade-up delay-300 p-6"
      aria-labelledby="donation-title"
    >
      {/* Card header */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-full text-lg"
          style={{ background: "var(--green-light)" }}
          aria-hidden="true"
        >
          💳
        </span>
        <h2
          id="donation-title"
          className="text-lg font-bold"
          style={{ color: "var(--green-dark)" }}
        >
          Donation Accounts
        </h2>
      </div>

      <hr className="gold-divider mb-5" />

      {/* Account List */}
      <div className="flex flex-col gap-4">
        {accounts.map((acc) => (
          <div key={acc.name} className="flex flex-col gap-1.5">
            <span className="text-sm font-bold ml-1" style={{ color: "var(--green-dark)" }}>
              <span aria-hidden="true">{acc.icon}</span> {acc.name}
            </span>
            <div className="flex items-stretch gap-2">
              <p
                className="account-number flex-1 m-0 text-left select-all"
                style={{ fontSize: "1.15rem", padding: "0.6rem 0.75rem", letterSpacing: "0.05em", textAlign: "left" }}
                aria-label={`${acc.name} number: ${acc.number}`}
                title="Tap to select"
              >
                {acc.number}
              </p>
              <button
                onClick={() => handleCopy(acc.number)}
                className="btn-ripple shrink-0 flex items-center justify-center rounded-xl font-bold transition-all"
                style={{
                  width: "55px",
                  background: copiedAccount === acc.number ? "var(--green-light)" : "linear-gradient(135deg, #0F8A5F 0%, #0a6645 100%)",
                  color: copiedAccount === acc.number ? "var(--green-dark)" : "#fff",
                  boxShadow: copiedAccount === acc.number ? "none" : "0 4px 12px rgba(15,138,95,0.25)",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label={copiedAccount === acc.number ? "Copied!" : `Copy ${acc.name} number`}
              >
                {copiedAccount === acc.number ? "✅" : "📋"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Helper hint */}
      <p
        className="text-center text-xs mt-5"
        style={{ color: "var(--text-muted)" }}
      >
        Tap the 📋 button to copy the number
      </p>
    </section>
  );
}
