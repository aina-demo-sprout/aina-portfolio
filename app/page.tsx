const projects = [
  { name: "fastapi-todo-api", blurb: "REST API with FastAPI, PostgreSQL, JWT auth and Docker.", tags: ["Python", "FastAPI", "PostgreSQL"] },
  { name: "campus-events-dashboard", blurb: "React + TypeScript dashboard for faculty event sign-ups.", tags: ["React", "TypeScript"] },
  { name: "malay-english-sentiment", blurb: "Sentiment classifier for Malay/English reviews (F1 0.84).", tags: ["scikit-learn", "NLP"] },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">Hi, I&apos;m Aina 👋</h1>
      <p className="mt-4 text-lg text-stone-600">
        Final-year Computer Science student who loves building backend services and small AI features.
        Looking for a remote internship with an ASEAN startup.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">Projects</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name} className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-stone-600">{p.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700">
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">Contact</h2>
      <p className="mt-2">
        <a className="text-green-700 underline" href="mailto:aina.demo@example.com">
          aina.demo@example.com
        </a>
      </p>
    </main>
  );
}
