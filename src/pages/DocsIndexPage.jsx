import { Link } from "react-router-dom";

export default function DocsIndexPage() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
      <h1 className="text-3xl font-bold tracking-tight">Dokumentacija</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">Pregled stranica unutar docs sekcije.</p>
      <ul className="mt-6 space-y-3 text-sm">
        <li>
          <Link className="underline" to="/docs/getting-started">
            Getting Started
          </Link>
        </li>
        <li>
          <Link className="underline" to="/docs/page2">
            Page 2
          </Link>
        </li>
        <li>
          <Link className="underline" to="/docs/lepljenje-plocica">
            Checklist: лепљење плочица
          </Link>
        </li>
      </ul>
    </section>
  );
}
