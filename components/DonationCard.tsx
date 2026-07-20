"use client";

import { useState, useCallback, useRef } from "react";
import { CBE_ACCOUNT, ACCOUNT_HOLDER } from "@/lib/constants";
import Button from "./Button";

export default function DonationCard() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CBE_ACCOUNT);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers / non-secure contexts
      const el = document.createElement("textarea");
      el.value = CBE_ACCOUNT;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
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
          🏦
        </span>
        <h2
          id="donation-title"
          className="text-lg font-bold"
          style={{ color: "var(--green-dark)" }}
        >
          CBE Account
        </h2>
      </div>

      <hr className="gold-divider mb-5" />

      {/* Account number display */}
      <p
        className="account-number mb-1 select-all"
        aria-label={`CBE account number: ${CBE_ACCOUNT}`}
        title="Tap to select"
      >
        {CBE_ACCOUNT}
      </p>

      {/* Account holder */}
      <p
        className="text-center text-sm font-medium mb-5"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="font-semibold" style={{ color: "var(--green)" }}>
          Account Holder:
        </span>{" "}
        {ACCOUNT_HOLDER}
      </p>

      {/* Copy button */}
      <Button
        onClick={handleCopy}
        variant="primary"
        aria-label={
          copied
            ? "Account number copied to clipboard"
            : "Copy CBE account number to clipboard"
        }
        aria-live="polite"
        aria-atomic="true"
      >
        {copied ? (
          <>
            <span aria-hidden="true">✅</span> Copied Successfully!
          </>
        ) : (
          <>
            <span aria-hidden="true">📋</span> Copy Account Number
          </>
        )}
      </Button>

      {/* Helper hint */}
      <p
        className="text-center text-xs mt-3"
        style={{ color: "var(--text-muted)" }}
      >
        One tap copies the account number
      </p>
    </section>
  );
}
