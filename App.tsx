const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4";

const POEM_LINES = [
  "When Teacher walks out, the war plans begin,",
  "Classmates all scramble — the battle's within!",
  "Paper balls pile like mountains of snow,",
  "Teams pick their sides and get ready to throw.",
  "Desks become castles, backpacks turn shields,",
  "Airplanes take off across ceiling and fields.",
  "One shouts a battle cry, standing so tall,",
  "Another ducks under as papers all fall!",
  "It's chaos extreme, the funniest fight,",
  "Till Teacher returns — then they sit extra tight.",
];

export default function App() {
  return (
    <div className="w-full bg-black">
      {/* Hero section with background video */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />

        <h1 className="relative z-10 px-6 text-center font-podium uppercase leading-[0.95] tracking-tight text-white text-[clamp(2.5rem,10vw,7rem)]">
          Prepare for the Battle
        </h1>
      </section>

      {/* Poem section, revealed on scroll */}
      <section className="flex min-h-screen w-full items-center justify-center bg-black px-6 py-24 sm:px-10">
        <div className="max-w-xl">
          <p className="font-inter text-lg leading-relaxed text-white/90 sm:text-xl">
            {POEM_LINES.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-10 font-inter text-sm uppercase tracking-widest text-white/50">
            by Abdullah Zia
          </p>
        </div>
      </section>
    </div>
  );
}
