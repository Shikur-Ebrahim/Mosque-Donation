import Hero from "@/components/Hero";
import DonationCard from "@/components/DonationCard";
import ContactButtons from "@/components/ContactButtons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      {/* Soft radial background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(15,138,95,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-md px-4 py-8 flex flex-col gap-6">
        <Hero />
        <DonationCard />
        <ContactButtons />
        <Footer />
      </div>
    </main>
  );
}
