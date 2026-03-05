import { Estimator } from "@/components/Estimator/Estimator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#050505]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent opacity-20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 opacity-10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <Estimator />
    </main>
  );
}
